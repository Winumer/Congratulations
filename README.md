# 💌 Листівка до Дня логопеда

Невелика статична сайт-листівка до Дня логопеда (14 листопада).
Без залежностей і збірки — чистий HTML, CSS та JavaScript.

## Що вміє
- Анімований конверт, що відкривається по кліку
- Літери, що пливуть на фоні, та конфеті
- Світла й темна теми (за налаштуваннями пристрою)
- Адаптивна верстка для телефонів

## Структура
```
.
├── index.html
├── css/style.css
├── js/script.js
├── .nojekyll
└── README.md
```

## Запуск локально
Відкрийте `index.html` у браузері або запустіть простий сервер:

```bash
python3 -m http.server 8000
```

## Публікація на GitHub Pages
1. Створіть репозиторій на GitHub і завантажте файли:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<ваш-логін>/<назва-репозиторію>.git
   git push -u origin main
   ```
2. У репозиторії: **Settings → Pages → Build and deployment**.
3. Оберіть **Deploy from a branch**, гілку `main` і папку `/ (root)`.
4. За хвилину сайт відкриється за адресою `https://<ваш-логін>.github.io/<назва-репозиторію>/`.

## Налаштування тексту
Усі тексти листівки знаходяться в `index.html` всередині блоку `<section class="card">`.
