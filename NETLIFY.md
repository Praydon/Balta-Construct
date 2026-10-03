# Публикация Balta Construct на Netlify

1. Загрузите этот репозиторий в GitHub, GitLab или Bitbucket.
2. В Netlify выберите **Add new site → Import an existing project**.
3. Настройки сборки уже находятся в `netlify.toml`.
4. В **Site configuration → Environment variables** добавьте:
   - `NEXT_PUBLIC_SITE_URL` — публичный адрес сайта;
   - `NEXT_PUBLIC_GA_ID` — идентификатор Google Analytics 4 вида `G-XXXXXXXXXX`.
5. Запустите deploy. Заявки появятся в разделе **Forms** панели Netlify.

Локальная проверка Netlify-сборки: `npm run build:netlify`.
