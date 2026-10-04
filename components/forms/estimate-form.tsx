"use client";

import { useMemo, useState, type FormEvent } from "react";
import { Check, FileUp, LoaderCircle, MessageCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { trackEvent } from "@/components/site/analytics";
import { services, whatsappLink } from "@/lib/site-data";

type FormState = {
  objectType: string;
  selectedServices: string[];
  area: string;
  timeline: string;
  name: string;
  phone: string;
  company: string;
  comment: string;
};

const initialState: FormState = {
  objectType: "",
  selectedServices: [],
  area: "",
  timeline: "",
  name: "",
  phone: "",
  company: "",
  comment: "",
};

const objectTypes = ["Частный дом", "Коммерческое здание", "Жилой комплекс", "Крупный объект"];
const timelineOptions = ["Как можно скорее", "В течение месяца", "1–3 месяца", "Пока изучаю стоимость"];

export function EstimateForm() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [state, setState] = useState<FormState>(initialState);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const progress = step * 33.333;
  const netlifyMode = process.env.NEXT_PUBLIC_NETLIFY_FORMS === "true";

  const summary = useMemo(
    () =>
      [
        `Тип объекта: ${state.objectType}`,
        `Работы: ${state.selectedServices.join(", ")}`,
        `Площадь: ${state.area || "не указана"}`,
        `Срок: ${state.timeline || "не указан"}`,
        `Имя: ${state.name}`,
        `Телефон: ${state.phone}`,
        state.company ? `Компания: ${state.company}` : "",
        state.comment ? `Комментарий: ${state.comment}` : "",
      ]
        .filter(Boolean)
        .join("\n"),
    [state],
  );

  const update = (field: keyof FormState, value: string) => {
    setState((current) => ({ ...current, [field]: value }));
    setError("");
  };

  const toggleService = (service: string, checked: boolean) => {
    setState((current) => ({
      ...current,
      selectedServices: checked
        ? [...current.selectedServices, service]
        : current.selectedServices.filter((item) => item !== service),
    }));
    setError("");
  };

  const next = () => {
    if (step === 1 && !state.objectType) return setError("Выберите тип объекта.");
    if (step === 2 && state.selectedServices.length === 0) return setError("Выберите хотя бы один вид работ.");
    setStep((current) => Math.min(current + 1, 3));
    setError("");
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (state.name.trim().length < 2 || state.phone.replace(/\D/g, "").length < 10) {
      setError("Укажите имя и корректный номер телефона.");
      return;
    }

    const attachmentInput = event.currentTarget.elements.namedItem("Файл") as HTMLInputElement | null;
    const attachment = attachmentInput?.files?.[0];
    if (attachment && attachment.size > 8 * 1024 * 1024) {
      setError("Размер файла не должен превышать 8 МБ.");
      return;
    }

    setSubmitting(true);
    trackEvent("estimate_submit", { mode: netlifyMode ? "netlify" : "whatsapp" });

    try {
      if (netlifyMode) {
        const formData = new FormData(event.currentTarget);
        formData.set("Виды работ", state.selectedServices.join(", "));
        formData.set("Площадь фасада", state.area ? `${state.area} м²` : "Не указана");
        const response = await fetch("/__forms.html", { method: "POST", body: formData });
        if (!response.ok) throw new Error("Не удалось отправить форму");
        router.push("/thanks/");
        return;
      }

      window.open(whatsappLink(`Здравствуйте! Заявка с сайта Balta Construct.\n\n${summary}`), "_blank", "noopener,noreferrer");
    } catch {
      setError("Не удалось отправить заявку. Позвоните нам или напишите в WhatsApp.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      id="estimate"
      name="estimate"
      method="POST"
      encType="multipart/form-data"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="estimate-form"
      onSubmit={submit}
      noValidate
    >
      <input type="hidden" name="form-name" value="estimate" />
      <p hidden>
        <Label>
          Не заполняйте это поле
          <Input name="bot-field" tabIndex={-1} autoComplete="off" />
        </Label>
      </p>
      <input type="hidden" name="Тип объекта" value={state.objectType} />
      <input type="hidden" name="Виды работ" value={state.selectedServices.join(", ")} />
      <input type="hidden" name="Желаемый срок" value={state.timeline || "Не указан"} />

      <div className="form-head">
        <div>
          <span>Шаг {step} из 3</span>
          <strong>{step === 1 ? "Объект" : step === 2 ? "Объем работ" : "Контакты"}</strong>
        </div>
        <span>{Math.round(progress)}%</span>
      </div>
      <Progress value={progress} className="form-progress" />

      <fieldset hidden={step !== 1} className="form-step">
        <legend>Какой у вас объект?</legend>
        <p>Это поможет подобрать подходящую фасадную систему и формат расчета.</p>
        <RadioGroup value={state.objectType} onValueChange={(value) => update("objectType", value)} className="choice-grid">
          {objectTypes.map((type) => (
            <Label key={type} className="choice-card">
              <RadioGroupItem value={type} />
              <span>{type}</span>
            </Label>
          ))}
        </RadioGroup>
      </fieldset>

      <fieldset hidden={step !== 2} className="form-step">
        <legend>Что необходимо выполнить?</legend>
        <p>Можно выбрать несколько направлений.</p>
        <div className="service-checks">
          {services.map((service) => (
            <Label key={service.title} className="check-card">
              <Checkbox
                checked={state.selectedServices.includes(service.title)}
                onCheckedChange={(checked) => toggleService(service.title, checked === true)}
              />
              <span>{service.title}</span>
            </Label>
          ))}
        </div>
        <div className="form-row">
          <div className="field-group">
            <Label htmlFor="area">Примерная площадь, м²</Label>
            <Input id="area" name="Площадь фасада" inputMode="numeric" placeholder="Например, 1 500" value={state.area} onChange={(e) => update("area", e.target.value)} />
          </div>
          <div className="field-group">
            <Label htmlFor="timeline">Желаемые сроки</Label>
            <select id="timeline" value={state.timeline} onChange={(e) => update("timeline", e.target.value)} className="form-select">
              <option value="">Выберите срок</option>
              {timelineOptions.map((option) => <option key={option}>{option}</option>)}
            </select>
          </div>
        </div>
      </fieldset>

      <fieldset hidden={step !== 3} className="form-step">
        <legend>Куда отправить расчет?</legend>
        <p>Свяжемся, уточним детали и подготовим предварительную оценку.</p>
        <div className="form-row">
          <div className="field-group">
            <Label htmlFor="name">Ваше имя *</Label>
            <Input id="name" name="Контактное лицо" autoComplete="name" placeholder="Как к вам обращаться" value={state.name} onChange={(e) => update("name", e.target.value)} />
          </div>
          <div className="field-group">
            <Label htmlFor="phone">Телефон *</Label>
            <Input id="phone" name="Телефон" type="tel" autoComplete="tel" placeholder="+7 700 000 00 00" value={state.phone} onChange={(e) => update("phone", e.target.value)} />
          </div>
        </div>
        <div className="field-group">
          <Label htmlFor="company">Компания</Label>
          <Input id="company" name="Компания" autoComplete="organization" placeholder="Если обращаетесь от юридического лица" value={state.company} onChange={(e) => update("company", e.target.value)} />
        </div>
        <div className="field-group">
          <Label htmlFor="comment">Комментарий к объекту</Label>
          <Textarea id="comment" name="Комментарий" rows={4} placeholder="Адрес, особенности объекта, материалы или дополнительные пожелания" value={state.comment} onChange={(e) => update("comment", e.target.value)} />
        </div>
        <Label className="file-field" htmlFor="attachment">
          <FileUp aria-hidden="true" />
          <span><strong>Приложить чертежи или фото</strong><small>PDF, JPG, PNG, DOCX — до 8 МБ</small></span>
          <Input id="attachment" name="Файл" type="file" accept=".pdf,.jpg,.jpeg,.png,.doc,.docx" />
        </Label>
      </fieldset>

      {error && <p className="form-error" role="alert">{error}</p>}

      <div className="form-actions">
        {step > 1 && <button type="button" className="btn btn--ghost" onClick={() => setStep((current) => current - 1)}>Назад</button>}
        {step < 3 ? (
          <button type="button" className="btn btn--accent" onClick={next}>Продолжить</button>
        ) : (
          <button type="submit" className="btn btn--accent" disabled={submitting}>
            {submitting ? <LoaderCircle className="spin" aria-hidden="true" /> : netlifyMode ? <Check aria-hidden="true" /> : <MessageCircle aria-hidden="true" />}
            {netlifyMode ? "Отправить заявку" : "Отправить в WhatsApp"}
          </button>
        )}
      </div>
      <p className="form-consent">Отправляя форму, вы соглашаетесь на обработку данных для связи по заявке.</p>
    </form>
  );
}
