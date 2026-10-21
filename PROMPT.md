# Промт: сайт «Игрушкин» — магазин игрушек

> Это готовое техническое задание для нейросети. Скопируйте весь файл и отдайте его целиком.
> Документ описывает сайт **в точности таким, каким он лежит в этом репозитории**. Если сайт меняется, этот файл обновляется вместе с ним (см. `AGENTS.md`).
>
> Файл состоит из двух частей:
> 1. **ТЗ** — что и почему должно быть на сайте. Важные места и исправленные ошибки отмечены знаком ⚠️.
> 2. **Полные исходники** в конце (раздел «Исходный код») — эталонная рабочая версия.
>
> **Нейросети:** если нужна точная копия сайта, создай три файла **один в один** по разделу «Исходный код». Если просят изменить сайт, бери исходники за основу и соблюдай ТЗ.

---

## Роль и цель

Ты — опытный веб-дизайнер и разработчик. Сделай одностраничный сайт «Игрушкин» (магазин игрушек) на **HTML, CSS и чистом JavaScript**, без библиотек, фреймворков, TypeScript, React и сборки. Сайт показывают детям на уроке программирования: код простой, с подробными комментариями на русском, дизайн как у профессионалов, сайт работает с первого раза на компьютере и телефоне. Всего **не больше 1000 строк** в трёх файлах.

Исходное задание ученика: создать сайт с блоками «Главный», «О сайте», «Преимущества», «Товары», «Кнопка действия», «Контакты»; простой и современный, текста мало, цвета сочетаются; выбрать стиль и цвет.

- **Стиль:** яркий и весёлый. **Цвет:** зелёный.
- **Компоненты** (кнопки, карточки, поля ввода, переключатель темы, кнопки соцсетей) — в стиле библиотеки [uiverse.io](https://uiverse.io): готовые элементы на чистом HTML + CSS, переписанные под переменные сайта.
- **Картинки** — бесплатные фото [Unsplash](https://unsplash.com) по прямым ссылкам `https://images.unsplash.com/photo-<id>?w=900&q=80&auto=format&fit=crop` (главная — `w=1100`).

## Цвета и шрифты

| Что | Светлая тема | Тёмная тема |
|---|---|---|
| Главный `--main` | `#16a34a` | тот же |
| Второй `--accent` | `#facc15` (текст на нём `#14301f`) | тот же |
| Фон `--bg` | `#f0fdf4` | `#0a1a10` |
| Карточки `--surface` | `#ffffff` | `#12281a` |
| Текст `--text` | `#14301f` | `#dcfce7` |
| Серый текст `--muted` | `#4d7a5e` | `#8fc4a3` |

- Шрифты Google Fonts: заголовки **Rubik** (насыщенность 800), текст **Nunito**.
- Тёмный оттенок и прозрачная подложка главного цвета считаются сами: `color-mix(in srgb, var(--main) 72%, black)` и `14%` с прозрачным.
- Скругление `--radius: 26px`; у большой картинки и блока с кнопкой — в 2 и 1.5 раза больше.
- Сайт сразу открывается в светлой теме.

## Структура страницы

1. **Шапка** (липкая, полупрозрачная с размытием): логотип 🧸 + название, меню (О нас, Преимущества, Игрушки, Контакты), переключатель темы ☀️/🌙, корзина 🛒 со счётчиком, бургер на узком экране.
2. **Главный экран:** плашка «🎈 Радость для детей и взрослых», заголовок «Игрушкин», слоган «Яркие игрушки, от которых улыбаются все!», кнопки «Купить» (окно заказа) и «Игрушки» (к товарам), три факта: 3000+ игрушек, 0+ для всех возрастов и 🎁 подарочная упаковка. Справа большое фото (`1558060370-d644479cb6f7`, «Разноцветные игрушки на столе») с наклейкой «Ура, игрушки! 🎉».
3. **О нас:** «Магазин хорошего настроения», два абзаца + карточка «Чем мы полезны» со списком-галочками: Подарок на любой праздник, Развивающие игрушки по возрасту и Безопасные материалы.
4. **Преимущества:** «Почему у нас весело», 3 карточки:

| Значок | Заголовок | Текст |
|---|---|---|
| ✅ | Безопасно | Все игрушки проверены и сделаны из безопасных материалов. |
| 🧠 | Развивает | Конструкторы и головоломки учат думать и творить. |
| 🎁 | Упакуем в подарок | Красивая коробка и бант — бесплатно. |

5. **Игрушки:** «Любимые игрушки» — «Что выбирают дети чаще всего», 3 карточки (фото, метка, название, описание, цена, кнопка):

| Название | Метка | Цена | Описание | Фото Unsplash |
|---|---|---|---|---|
| Плюшевые мишки | Хит | 1 490 ₽ | Мягкие и очень обнимательные | `1602734846297-9299fc2d4703` |
| Конструкторы | Развивает | 2 490 ₽ | Строй замки, машины и роботов | `1587654780291-39c9404d746b` |
| Деревянные игрушки | Эко | 1 990 ₽ | Поезда и домики из натурального дерева | `1596461404969-9ae70f2830c1` |

6. **Блок с кнопкой действия:** градиент главного цвета, «Выберем подарок?» — «Оставьте заявку — поможем подобрать игрушку по возрасту!», белая кнопка «Купить».
7. **Контакты:** «Свяжитесь с нами» — «Не знаете, что подарить? Напишите — подскажем самую подходящую игрушку!»; 4 карточки: 📞 +7 (900) 333-22-11 (ссылка `tel:`), ✉️ toys@example.com (`mailto:`), 📍 г. Москва, ул. Весёлая, 7, 🕒 Ежедневно 9:00–21:00; круглые кнопки **VK** (vk.com) и **MAX** (max.ru) с подсказкой при наведении, кнопка «Купить».
8. **Подвал:** «© год «Игрушкин». Учебный сайт: все контакты вымышленные.» Год ставит JavaScript.
9. **Окно заказа:** «Оформить заказ» — «Оставьте имя и телефон — мы перезвоним через 5 минут.», поля «Ваше имя», «Телефон», список «Что заказать» (товары), кнопка «Отправить».

## Лаборатория (10 настроек для детей)

5 настроек — в начале `style.css` (`:root`), 5 — в начале `script.js` (объект `LAB`). Значения по умолчанию = обычный сайт.

| Файл | Значение по умолчанию | Пример изменения |
|---|---|---|
| CSS | `--main: #16a34a;` | Перекрась сайт в оранжевый цвет → `--main: #f97316;` |
| CSS | `--accent: #facc15;` | Сделай второй цвет голубой → `--accent: #38bdf8;` |
| CSS | `--radius: 26px;` | Сделай углы острыми → `--radius: 0px;` |
| CSS | `--font-title: 'Rubik', sans-serif;` | Поменяй шрифт заголовков на Comic Sans → `--font-title: 'Comic Sans MS', cursive;` |
| CSS | `--hero-title: 4.6rem;` | Сделай главный заголовок огромным → `--hero-title: 7rem;` |
| JS | `siteName: 'Игрушкин',` | Переименуй сайт в «Весёлый Мишка» → `siteName: 'Весёлый Мишка',` |
| JS | `sticker: 'Ура, игрушки! 🎉',` | Напиши на наклейке «Подарок к покупке» → `sticker: 'Подарок к покупке',` |
| JS | `fallingEmoji: '',` | Включи дождь из 🧸 → `fallingEmoji: '🧸',` |
| JS | `startDark: false,` | Включи тёмную тему → `startDark: true,` |
| JS | `thanksText: 'Ура! Заказ принят 🎉',` | Поменяй сообщение после заказа → `thanksText: 'Спасибо, ждём вас снова! 😊',` |

## Поведение (script.js)

- Бургер открывает и закрывает меню, клик по пункту меню закрывает его. При прокрутке у шапки появляется тень.
- Блоки плавно выезжают снизу, когда появляются на экране (`IntersectionObserver`, порог 0.1, один раз).
- Кнопка товара: «В корзину»: счётчик корзины +1, корзина подпрыгивает, сообщение ««Название» — в корзине!» (`data-add`).
- Корзина в шапке (🛒 + счётчик): пустая — сообщение «Корзина пуста — выберите игрушку!», с товарами — окно заказа. После заказа счётчик обнуляется.
- Все кнопки с `data-order` открывают окно заказа; закрыть — ✕, клик по тёмному фону или `Esc`. Пока окно открыто, страница не прокручивается.
- Проверка формы: имя от 2 символов, в телефоне от 10 цифр; ошибка — поле краснеет и встряхивается, сообщение «Проверьте имя и телефон». Успех — окно закрывается, форма очищается, сообщение `LAB.thanksText` и салют из эмодзи (🎉 ✨ 🧸 🎊). Заявка никуда не отправляется — сайт учебный.
- Переключатель темы добавляет/убирает класс `dark` у `<body>`.
- `LAB.fallingEmoji` — 18 падающих эмодзи на главном экране. `LAB.siteName` и `LAB.sticker` подставляются во все элементы с `data-lab="name"` / `data-lab="sticker"` и в заголовок вкладки.

## Дизайн-детали (style.css)

- Кнопка в стиле uiverse: объёмная (тень `0 6px 0` тёмного оттенка), при наведении поднимается и по ней пробегает блик, при нажатии «вдавливается». Контурная кнопка — рамка `inset` главного цвета.
- Карточки поднимаются при наведении, фото в карточке плавно приближается, значок преимущества поворачивается.
- Поле ввода в стиле uiverse: подпись внутри поля уезжает вверх при вводе, фокус — рамка и мягкое свечение.
- Большое фото покачивается вверх-вниз (`float`), наклейка повёрнута.
- Особенности стиля «яркий и весёлый» — отдельный раздел 9 в конце CSS.

### ⚠️ Важные места

- ⚠️ Шрифты подключаются через `@import` в начале CSS, а не `<link>` в HTML — иначе в CodePen их не будет.
- ⚠️ Цвета темы и вычисляемые цвета (`--main-dark`, `--main-soft`, `--shadow`) объявлены у `body`, а не у `:root`: тогда `body.dark` перекрашивает и их. В `:root` — только 5 настроек лаборатории.
- ⚠️ Скрытие блоков для анимации появления действует только при классе `js` у `<html>` (его ставит script.js): если JavaScript не загрузился, сайт всё равно виден целиком.
- ⚠️ Мобильное меню — `position: absolute` под шапкой, а не `fixed`: `backdrop-filter` у шапки ломает `fixed` у вложенных элементов.
- ⚠️ Меню прячется в бургер уже на ширине ≤ 900 px: на 768 px пункты меню не помещались и страница ездила вбок. Заголовки разделов — `clamp(1.6rem, 7vw, 3rem)` с переносом слова, на ≤ 400 px логотип меньше и переключатель темы скрыт: на 320 px не было горизонтальной прокрутки.
- ⚠️ У контурной кнопки своя рамка через `box-shadow: inset`: если в стиле убираешь тень у `.btn`, верни рамку для `.btn-ghost`, иначе кнопка «Игрушки» теряет контур.
- ⚠️ У декоративной рамки за фото (`::before`, `z-index: -1`) родитель с `isolation: isolate`, иначе рамка уходит под фон блока.
- ⚠️ Поля формы ищутся по `id` (`clientName`, `clientPhone`), а не `form.name`: у формы есть своё свойство `name`.

## Файлы и CodePen

- `index.html` / `style.css` / `script.js` — строго раздельно, подключение с `?v=N` (номер увеличивается при каждом изменении CSS или JS).
- ⚠️ `codepen/index.pen.html` — часть `index.html` между метками «Для CodePen», без `<head>`, `<link>`, `<script>`: CodePen сам подключает CSS и JS, иначе скрипт загрузится дважды (`Identifier ... has already been declared`).
- Код для детей: функции без классов, подробные русские комментарии, нумерованные разделы.

## Чек-лист

- [ ] Три отдельных файла, чистый JS, всего не больше 1000 строк, комментарии на русском, лаборатория в начале CSS и JS.
- [ ] Все 6 блоков на месте, текста мало, фото грузятся.
- [ ] Нет ошибок в консоли; нет горизонтальной прокрутки на 320, 375, 768 и 1280 px.
- [ ] Работают меню-бургер, тема, корзина, окно заказа (проверка полей, Esc, клик по фону), салют.
- [ ] В CodePen работают `codepen/index.pen.html` + `style.css` + `script.js`.

## Исходный код

<!-- SOURCES:START -->

<!-- Этот раздел создаётся скриптом tools/build.py — не редактируйте вручную -->

### `index.html`

````html
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Игрушкин — магазин игрушек</title>
  <meta name="description" content="Яркие игрушки, от которых улыбаются все!">
  <!-- Значок вкладки — эмодзи, без отдельного файла -->
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🧸</text></svg>">
  <!-- Подключаем оформление.
       ?v=1 — номер версии: увеличиваем его после изменения CSS или JS,
       чтобы браузер не брал старый файл из кэша -->
  <link rel="stylesheet" href="style.css?v=1">
</head>
<body>

<!-- ↓↓↓ Для CodePen копируйте в окно HTML всё, что ниже этой строки ↓↓↓
     Только эту часть! CodePen сам подключает style.css и script.js.
     Если скопировать строки <link> или <script src>, скрипт загрузится дважды. -->

<!-- ===== ШАПКА: логотип, меню, тема, корзина ===== -->
<header class="header" id="header">
  <div class="container header-inner">
    <a class="logo" href="#top"><span class="logo-icon">🧸</span><span data-lab="name">Игрушкин</span></a>
    <nav class="nav" id="nav">
      <a href="#about">О нас</a>
      <a href="#advantages">Преимущества</a>
      <a href="#products">Игрушки</a>
      <a href="#contacts">Контакты</a>
    </nav>
    <div class="header-actions">
      <!-- Переключатель темы: ☀️ светлая / 🌙 тёмная -->
      <button class="theme-switch" id="themeSwitch" type="button" aria-label="Сменить тему"><span class="theme-knob"></span></button>
      <button class="cart" id="cartButton" type="button" aria-label="Корзина">🛒<span class="cart-count" id="cartCount">0</span></button>
      <!-- Кнопка меню для телефона (три полоски) -->
      <button class="burger" id="burger" type="button" aria-label="Открыть меню"><span></span><span></span><span></span></button>
    </div>
  </div>
</header>

<main>

  <!-- ===== 1. ГЛАВНЫЙ ЭКРАН: название, слоган, картинка, кнопка ===== -->
  <section class="hero" id="top">
    <div class="container hero-inner">
      <div class="hero-text">
        <span class="badge">🎈 Радость для детей и взрослых</span>
        <h1 class="hero-title" data-lab="name">Игрушкин</h1>
        <p class="hero-slogan">Яркие игрушки, от которых улыбаются все!</p>
        <div class="hero-buttons">
          <button class="btn" type="button" data-order="">Купить</button>
          <a class="btn btn-ghost" href="#products">Игрушки</a>
        </div>
        <ul class="facts">
          <li><b>3000+</b><span>игрушек</span></li>
          <li><b>0+</b><span>для всех возрастов</span></li>
          <li><b>🎁</b><span>подарочная упаковка</span></li>
        </ul>
      </div>
      <div class="hero-picture">
        <img src="https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=1100&q=80&auto=format&fit=crop" alt="Разноцветные игрушки на столе">
        <span class="sticker" data-lab="sticker">Ура, игрушки! 🎉</span>
      </div>
    </div>
    <!-- Сюда JavaScript добавляет эмодзи-дождь (LAB.fallingEmoji) -->
    <div class="rain" id="rain" aria-hidden="true"></div>
  </section>

  <!-- ===== 2. О НАС: что это и чем полезно ===== -->
  <section class="section about reveal" id="about">
    <div class="container about-inner">
      <div>
        <span class="label">О нас</span>
        <h2 class="section-title">Магазин хорошего настроения</h2>
        <p>«Игрушкин» — магазин весёлых и безопасных игрушек для детей любого возраста.</p>
        <p>Мы выбираем игрушки, которые развивают фантазию, учат новому и просто радуют каждый день.</p>
      </div>
      <div class="about-card">
        <h3>Чем мы полезны</h3>
        <ul class="checks">
          <li>Подарок на любой праздник</li>
          <li>Развивающие игрушки по возрасту</li>
          <li>Безопасные материалы</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- ===== 3. ПРЕИМУЩЕСТВА ===== -->
  <section class="section section-alt reveal" id="advantages">
    <div class="container">
      <div class="section-head">
        <span class="label">Преимущества</span>
        <h2 class="section-title">Почему у нас весело</h2>
      </div>
      <div class="grid-3">
      <article class="adv-card">
        <div class="adv-icon">✅</div>
        <h3>Безопасно</h3>
        <p>Все игрушки проверены и сделаны из безопасных материалов.</p>
      </article>
      <article class="adv-card">
        <div class="adv-icon">🧠</div>
        <h3>Развивает</h3>
        <p>Конструкторы и головоломки учат думать и творить.</p>
      </article>
      <article class="adv-card">
        <div class="adv-icon">🎁</div>
        <h3>Упакуем в подарок</h3>
        <p>Красивая коробка и бант — бесплатно.</p>
      </article>
      </div>
    </div>
  </section>

  <!-- ===== 4. ТОВАРЫ / УСЛУГИ с картинками ===== -->
  <section class="section reveal" id="products">
    <div class="container">
      <div class="section-head">
        <span class="label">Игрушки</span>
        <h2 class="section-title">Любимые игрушки</h2>
        <p>Что выбирают дети чаще всего</p>
      </div>
      <div class="grid-3">
      <article class="product">
        <div class="product-image">
          <img src="https://images.unsplash.com/photo-1602734846297-9299fc2d4703?w=900&q=80&auto=format&fit=crop" alt="Плюшевый мишка с бабочкой" loading="lazy">
          <span class="tag">Хит</span>
        </div>
        <div class="product-body">
          <h3>Плюшевые мишки</h3>
          <p>Мягкие и очень обнимательные</p>
          <div class="product-footer">
            <span class="price">1 490 ₽</span>
            <button class="btn btn-small" type="button" data-add="Плюшевые мишки">В корзину</button>
          </div>
        </div>
      </article>
      <article class="product">
        <div class="product-image">
          <img src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=900&q=80&auto=format&fit=crop" alt="Разноцветные детали конструктора" loading="lazy">
          <span class="tag">Развивает</span>
        </div>
        <div class="product-body">
          <h3>Конструкторы</h3>
          <p>Строй замки, машины и роботов</p>
          <div class="product-footer">
            <span class="price">2 490 ₽</span>
            <button class="btn btn-small" type="button" data-add="Конструкторы">В корзину</button>
          </div>
        </div>
      </article>
      <article class="product">
        <div class="product-image">
          <img src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=900&q=80&auto=format&fit=crop" alt="Деревянная железная дорога" loading="lazy">
          <span class="tag">Эко</span>
        </div>
        <div class="product-body">
          <h3>Деревянные игрушки</h3>
          <p>Поезда и домики из натурального дерева</p>
          <div class="product-footer">
            <span class="price">1 990 ₽</span>
            <button class="btn btn-small" type="button" data-add="Деревянные игрушки">В корзину</button>
          </div>
        </div>
      </article>
      </div>
    </div>
  </section>

  <!-- ===== 5. БЛОК С КНОПКОЙ ДЕЙСТВИЯ ===== -->
  <section class="section reveal" id="order">
    <div class="container">
      <div class="cta-box">
        <h2>Выберем подарок?</h2>
        <p>Оставьте заявку — поможем подобрать игрушку по возрасту!</p>
        <button class="btn btn-light" type="button" data-order="">Купить</button>
      </div>
    </div>
  </section>

  <!-- ===== 6. КОНТАКТЫ ===== -->
  <section class="section section-alt reveal" id="contacts">
    <div class="container">
      <div class="section-head">
        <span class="label">Контакты</span>
        <h2 class="section-title">Свяжитесь с нами</h2>
        <p>Не знаете, что подарить? Напишите — подскажем самую подходящую игрушку!</p>
      </div>
      <div class="contacts-grid">
        <a class="contact-card" href="tel:+79003332211"><span class="contact-icon">📞</span><span><small>Телефон</small><b>+7 (900) 333-22-11</b></span></a>
        <a class="contact-card" href="mailto:toys@example.com"><span class="contact-icon">✉️</span><span><small>Почта</small><b>toys@example.com</b></span></a>
        <div class="contact-card"><span class="contact-icon">📍</span><span><small>Адрес</small><b>г. Москва, ул. Весёлая, 7</b></span></div>
        <div class="contact-card"><span class="contact-icon">🕒</span><span><small>Часы работы</small><b>Ежедневно 9:00–21:00</b></span></div>
      </div>
      <div class="contacts-bottom">
        <a class="social social-vk" href="https://vk.com/" target="_blank" rel="noopener" data-tip="ВКонтакте">VK</a>
        <a class="social social-max" href="https://max.ru/" target="_blank" rel="noopener" data-tip="Мессенджер MAX">MAX</a>
        <button class="btn" type="button" data-order="">Купить</button>
      </div>
    </div>
  </section>

</main>

<footer class="footer">
  <div class="container">© <span id="year">2026</span> «<span data-lab="name">Игрушкин</span>». Учебный сайт: все контакты вымышленные.</div>
</footer>

<!-- ===== ОКНО ЗАКАЗА (появляется по кнопке) ===== -->
<div class="modal" id="modal">
  <div class="modal-box" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
    <button class="modal-close" type="button" data-close aria-label="Закрыть">✕</button>
    <h3 id="modalTitle">Оформить заказ</h3>
    <p class="modal-text">Оставьте имя и телефон — мы перезвоним через 5 минут.</p>
    <form id="orderForm" novalidate>
      <div class="field">
        <input id="clientName" type="text" placeholder=" " autocomplete="name">
        <label for="clientName">Ваше имя</label>
      </div>
      <div class="field">
        <input id="clientPhone" type="tel" placeholder=" " autocomplete="tel">
        <label for="clientPhone">Телефон</label>
      </div>
      <div class="field">
        <select id="product">
          <option>Плюшевые мишки</option>
          <option>Конструкторы</option>
          <option>Деревянные игрушки</option>
        </select>
        <label for="product">Что заказать</label>
      </div>
      <button class="btn btn-wide" type="submit">Отправить</button>
    </form>
  </div>
</div>

<!-- Всплывающее сообщение внизу экрана -->
<div class="toast" id="toast" role="status"></div>

<!-- ↑↑↑ Для CodePen: конец части для окна HTML ↑↑↑ -->

<script src="script.js?v=1"></script>
</body>
</html>
````

### `style.css`

````css
/* ============================================================
   Сайт «Игрушкин» — магазин игрушек. Стиль: яркий и весёлый, цвет: зелёный.
   Кнопки, карточки, поля ввода и переключатель сделаны в стиле
   библиотеки uiverse.io — готовых элементов на HTML и CSS.
   Разделы:
   0. Лаборатория — главные настройки внешнего вида
   1. Основа  2. Шапка  3. Кнопки  4. Главный экран
   5. Блоки  6. Окно заказа и сообщения  7. Анимации
   8. Телефон  9. Особенности стиля «яркий и весёлый»
   ============================================================ */

/* Шрифты Google Fonts. Подключаем здесь, а не в HTML, чтобы они работали и в CodePen */
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@700;800&family=Nunito:wght@400;600;800&display=swap');

/* ===== 0. ЛАБОРАТОРИЯ САЙТА 🧪 =====
   Поменяйте значение — и весь сайт изменится. */
:root {
  --main: #16a34a;             /* главный цвет: кнопки, заголовки, значки */
  --accent: #facc15;           /* второй цвет: наклейки и метки */
  --radius: 26px;              /* скругление углов (0px — острые углы) */
  --font-title: 'Rubik', sans-serif;  /* шрифт заголовков */
  --hero-title: 4.6rem;          /* размер большого заголовка */
}

/* ===== 1. ОСНОВА ===== */
/* Цвета светлой темы и цвета, которые считаются сами из главного */
body {
  --bg: #f0fdf4;
  --surface: #ffffff;
  --text: #14301f;
  --muted: #4d7a5e;
  --on-accent: #14301f;          /* цвет текста на втором цвете */
  --font-text: 'Nunito', sans-serif;
  --main-dark: color-mix(in srgb, var(--main) 72%, black);
  --main-soft: color-mix(in srgb, var(--main) 14%, transparent);
  --shadow: 0 12px 32px color-mix(in srgb, var(--text) 12%, transparent);
  --speed: 0.3s;
}

/* Тёмная тема: включается переключателем в шапке */
body.dark { --bg: #0a1a10; --surface: #12281a; --text: #dcfce7; --muted: #8fc4a3; --shadow: 0 12px 32px rgba(0, 0, 0, 0.45); }

*, *::before, *::after { box-sizing: border-box; }

html { scroll-behavior: smooth; scroll-padding-top: 80px; }

body {
  margin: 0; font-family: var(--font-text); font-size: 17px; line-height: 1.6;
  color: var(--text); background: var(--bg); overflow-x: hidden;
  transition: background var(--speed), color var(--speed);
}

img { display: block; max-width: 100%; }
a { color: inherit; text-decoration: none; }

h1, h2, h3 { margin: 0 0 0.5em; font-family: var(--font-title); font-weight: 800; line-height: 1.15; }

.container { width: min(1140px, 100% - 32px); margin-inline: auto; }
.section { padding: 90px 0; }
.section-alt { background: color-mix(in srgb, var(--main) 6%, var(--bg)); }

/* ===== 2. ШАПКА ===== */
.header {
  position: sticky; top: 0; z-index: 50;
  background: color-mix(in srgb, var(--bg) 85%, transparent); backdrop-filter: blur(12px);
  transition: box-shadow var(--speed);
}
.header.scrolled { box-shadow: var(--shadow); }
.header-inner { display: flex; align-items: center; gap: 28px; height: 72px; }

.logo {
  display: flex; align-items: center; gap: 10px; font-family: var(--font-title);
  font-weight: 800; font-size: 1.5rem; color: var(--main); white-space: nowrap;
}
.logo-icon { font-size: 1.8rem; transition: transform 0.6s; }
.logo:hover .logo-icon { transform: rotate(360deg); }

.nav { display: flex; gap: 28px; margin-left: auto; }
.nav a { position: relative; font-weight: 700; }
/* Линия под пунктом меню выезжает при наведении */
.nav a::after {
  content: ''; position: absolute; left: 0; bottom: -4px; width: 100%; height: 2px;
  background: var(--main); transform: scaleX(0); transform-origin: right;
  transition: transform var(--speed);
}
.nav a:hover::after { transform: scaleX(1); transform-origin: left; }

.header-actions { display: flex; align-items: center; gap: 12px; }

/* Переключатель темы в стиле uiverse: кружок едет вправо */
.theme-switch {
  position: relative; width: 58px; height: 32px; padding: 0; border: 2px solid var(--main-soft);
  border-radius: 32px; background: var(--main-soft); cursor: pointer;
}
.theme-knob {
  position: absolute; top: 2px; left: 2px; width: 24px; height: 24px; border-radius: 50%;
  background: var(--surface); box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25); display: grid;
  place-items: center; font-size: 13px; transition: transform var(--speed);
}
.theme-knob::before { content: '☀️'; }
body.dark .theme-knob { transform: translateX(26px); }
body.dark .theme-knob::before { content: '🌙'; }

.cart {
  position: relative; width: 46px; height: 46px; border: none; border-radius: 50%;
  background: var(--main-soft); font-size: 1.3rem; cursor: pointer;
  transition: transform var(--speed);
}
.cart:hover { transform: scale(1.08); }
.cart.bump { animation: bump 0.4s; }
.cart-count {
  position: absolute; top: -4px; right: -4px; min-width: 21px; height: 21px; padding: 0 5px;
  border-radius: 11px; background: var(--main); color: #fff; font-size: 0.75rem;
  font-weight: 800; display: grid; place-items: center;
}

/* Бургер: три полоски превращаются в крестик */
.burger {
  display: none; flex-direction: column; justify-content: center; gap: 5px; width: 44px;
  height: 44px; padding: 10px; border: none; border-radius: 12px; background: var(--main-soft);
  cursor: pointer;
}
.burger span { height: 3px; border-radius: 2px; background: var(--main); transition: transform var(--speed), opacity var(--speed); }
.burger.active span:nth-child(1) { transform: translateY(8px) rotate(45deg); }
.burger.active span:nth-child(2) { opacity: 0; }
.burger.active span:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }

/* ===== 3. КНОПКИ в стиле uiverse: объёмная кнопка с бликом ===== */
.btn {
  position: relative; overflow: hidden; display: inline-flex; align-items: center;
  justify-content: center; padding: 14px 30px; border: none; border-radius: var(--radius);
  background: var(--main); color: #fff; font: 800 1rem var(--font-text); cursor: pointer;
  box-shadow: 0 6px 0 var(--main-dark), 0 12px 24px var(--main-soft);
  transition: transform 0.15s, box-shadow 0.15s, background var(--speed);
}
/* Блик пробегает по кнопке при наведении */
.btn::before {
  content: ''; position: absolute; top: 0; left: -120%; width: 60%; height: 100%;
  background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.5), transparent);
  transform: skewX(-20deg); transition: left 0.7s;
}
.btn:hover::before { left: 140%; }
.btn:hover { transform: translateY(-2px); box-shadow: 0 8px 0 var(--main-dark), 0 16px 30px var(--main-soft); }
.btn:active { transform: translateY(4px); box-shadow: 0 2px 0 var(--main-dark); }

.btn-ghost { background: transparent; color: var(--main); box-shadow: inset 0 0 0 2px var(--main); }
.btn-ghost:hover { background: var(--main-soft); box-shadow: inset 0 0 0 2px var(--main); }
.btn-ghost:active { transform: translateY(1px); box-shadow: inset 0 0 0 2px var(--main); }
.btn-light { background: #fff; color: var(--main); box-shadow: 0 6px 0 rgba(0, 0, 0, 0.18); }
.btn-small { padding: 10px 18px; font-size: 0.9rem; }
.btn-wide { width: 100%; margin-top: 6px; }

/* ===== 4. ГЛАВНЫЙ ЭКРАН ===== */
.hero { position: relative; overflow: hidden; padding: 60px 0 90px; }
.hero-inner { display: grid; grid-template-columns: 1.05fr 1fr; gap: 56px; align-items: center; }
.badge {
  display: inline-block; margin-bottom: 18px; padding: 8px 16px; border-radius: 999px;
  background: var(--main-soft); color: var(--main); font-weight: 800; font-size: 0.9rem;
}
.hero-title { font-size: min(var(--hero-title), 14vw); color: var(--main); margin-bottom: 16px; }
.hero-slogan { max-width: 30em; margin: 0 0 30px; font-size: 1.25rem; color: var(--muted); }
.hero-buttons { display: flex; flex-wrap: wrap; gap: 16px; margin-bottom: 40px; }
.facts { display: flex; flex-wrap: wrap; gap: 16px 40px; margin: 0; padding: 0; list-style: none; }
.facts b { display: block; font-size: 1.5rem; }
.facts span { color: var(--muted); font-size: 0.9rem; }

/* isolation: украшения ::before рисуются под картинкой, но над фоном */
.hero-picture { position: relative; isolation: isolate; }
.hero-picture img {
  width: 100%; aspect-ratio: 1 / 1.05; object-fit: cover;
  border-radius: calc(var(--radius) * 2); box-shadow: var(--shadow);
  animation: float 6s ease-in-out infinite;
}
.sticker {
  position: absolute; left: -20px; bottom: 40px; padding: 14px 20px;
  border-radius: var(--radius); background: var(--accent); color: var(--on-accent);
  font-weight: 800; box-shadow: var(--shadow); transform: rotate(-6deg);
}

/* Эмодзи-дождь */
.rain { position: absolute; inset: 0; overflow: hidden; pointer-events: none; }
.rain span { position: absolute; top: -60px; animation: fall linear infinite; }

/* ===== 5. БЛОКИ ===== */
.label {
  display: inline-block; margin-bottom: 10px; color: var(--main); font-weight: 800;
  font-size: 0.85rem; letter-spacing: 0.12em; text-transform: uppercase;
}
/* Размер заголовка подстраивается под ширину экрана; длинное слово переносится */
.section-title { font-size: clamp(1.6rem, 7vw, 3rem); overflow-wrap: break-word; }
.section-head { max-width: 640px; margin: 0 auto 50px; text-align: center; }
.section-head p { margin: 0; color: var(--muted); }

.about-inner { display: grid; grid-template-columns: 1.2fr 1fr; gap: 50px; align-items: center; }
.about p { color: var(--muted); font-size: 1.1rem; }
.about-card {
  padding: 36px; border-radius: var(--radius); border-top: 6px solid var(--main);
  background: var(--surface); box-shadow: var(--shadow);
}
.about-card h3 { font-size: 1.5rem; }
.checks { display: grid; gap: 14px; margin: 0; padding: 0; list-style: none; }
.checks li { display: flex; align-items: center; gap: 12px; font-weight: 700; }
.checks li::before {
  content: '✓'; flex: none; width: 28px; height: 28px; border-radius: 50%;
  background: var(--main); color: #fff; display: grid; place-items: center;
}

/* Сетка карточек: 3 в ряд, на узком экране — меньше */
.grid-3 { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 28px; }

.adv-card {
  padding: 34px 28px; border-radius: var(--radius); background: var(--surface);
  box-shadow: var(--shadow); text-align: center;
  transition: transform var(--speed), box-shadow var(--speed);
}
.adv-card:hover { transform: translateY(-8px); }
.adv-icon {
  width: 78px; height: 78px; margin: 0 auto 18px; border-radius: 50%;
  background: var(--main-soft); display: grid; place-items: center; font-size: 2.2rem;
  transition: transform 0.5s;
}
.adv-card:hover .adv-icon { transform: rotate(-10deg) scale(1.12); }
.adv-card h3 { font-size: 1.35rem; }
.adv-card p { margin: 0; color: var(--muted); }

/* Карточка товара в стиле uiverse: поднимается, картинка приближается */
.product {
  display: flex; flex-direction: column; overflow: hidden; border-radius: var(--radius);
  background: var(--surface); box-shadow: var(--shadow);
  transition: transform var(--speed), box-shadow var(--speed);
}
.product:hover { transform: translateY(-8px); }
.product-image { position: relative; overflow: hidden; aspect-ratio: 4 / 3; }
.product-image img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s; }
.product:hover .product-image img { transform: scale(1.08); }
.tag {
  position: absolute; top: 14px; left: 14px; padding: 6px 14px; border-radius: 999px;
  background: var(--accent); color: var(--on-accent); font-weight: 800; font-size: 0.8rem;
}
.product-body { flex: 1; display: flex; flex-direction: column; gap: 8px; padding: 24px; }
.product-body h3 { margin: 0; font-size: 1.4rem; }
.product-body p { flex: 1; margin: 0; color: var(--muted); }
.product-footer { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 12px; margin-top: 12px; }
.price { font-size: 1.3rem; font-weight: 800; color: var(--main); }

.cta-box {
  position: relative; overflow: hidden; padding: 70px 30px;
  border-radius: calc(var(--radius) * 1.5);
  background: linear-gradient(135deg, var(--main), var(--main-dark)); color: #fff;
  text-align: center;
}
/* Два полупрозрачных круга для красоты */
.cta-box::before, .cta-box::after {
  content: ''; position: absolute; border-radius: 50%; background: rgba(255, 255, 255, 0.12);
  pointer-events: none;
}
.cta-box::before { width: 260px; height: 260px; top: -90px; left: -70px; }
.cta-box::after { width: 180px; height: 180px; bottom: -60px; right: -40px; }
.cta-box h2 { font-size: clamp(1.6rem, 7vw, 3rem); overflow-wrap: break-word; }
.cta-box p { max-width: 34em; margin: 0 auto 30px; font-size: 1.15rem; opacity: 0.92; }

.contacts-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
.contact-card {
  display: flex; align-items: center; gap: 14px; padding: 22px; border-radius: var(--radius);
  background: var(--surface); box-shadow: var(--shadow); transition: transform var(--speed);
}
a.contact-card:hover { transform: translateY(-4px); }
.contact-icon {
  flex: none; width: 48px; height: 48px; border-radius: 50%; background: var(--main-soft);
  display: grid; place-items: center; font-size: 1.4rem;
}
.contact-card small { display: block; color: var(--muted); }
.contact-card b { font-size: 0.95rem; overflow-wrap: anywhere; }

.contacts-bottom { display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 16px; margin-top: 40px; }
/* Кнопки соцсетей с подсказкой при наведении (как на uiverse) */
.social {
  position: relative; width: 56px; height: 56px; border-radius: 50%; display: grid;
  place-items: center; color: #fff; font-weight: 800; transition: transform var(--speed);
}
.social-vk { background: #0077ff; }
.social-max { background: linear-gradient(135deg, #2f80ff, #a646ff); font-size: 0.85rem; }
.social:hover { transform: translateY(-4px) scale(1.06); }
.social::after {
  content: attr(data-tip); position: absolute; bottom: calc(100% + 10px); left: 50%;
  padding: 6px 10px; border-radius: 8px; background: var(--text); color: var(--bg);
  font-size: 0.8rem; white-space: nowrap; opacity: 0; pointer-events: none;
  transform: translate(-50%, 6px); transition: 0.25s;
}
.social:hover::after { opacity: 1; transform: translate(-50%, 0); }

.footer { padding: 30px 0; color: var(--muted); text-align: center; font-size: 0.9rem; }

/* ===== 6. ОКНО ЗАКАЗА И СООБЩЕНИЯ ===== */
.modal {
  position: fixed; inset: 0; z-index: 100; display: none; align-items: center;
  justify-content: center; padding: 16px; background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(4px);
}
.modal.open { display: flex; animation: fade 0.25s; }
.modal-box {
  position: relative; width: min(440px, 100%); padding: 36px 30px 30px;
  border-radius: var(--radius); background: var(--surface);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3); animation: pop 0.3s;
}
.modal-box h3 { font-size: 1.7rem; margin-right: 30px; }
.modal-text { margin: 0 0 22px; color: var(--muted); }
.modal-close {
  position: absolute; top: 14px; right: 14px; width: 36px; height: 36px; border: none;
  border-radius: 50%; background: var(--main-soft); color: var(--text); font-size: 1rem;
  cursor: pointer; transition: transform var(--speed);
}
.modal-close:hover { transform: rotate(90deg); }

/* Поле ввода в стиле uiverse: подпись уезжает вверх */
.field { position: relative; margin-bottom: 16px; }
.field input, .field select {
  width: 100%; padding: 22px 16px 8px;
  border: 2px solid color-mix(in srgb, var(--muted) 35%, transparent);
  border-radius: calc(var(--radius) / 2); background: var(--bg); color: var(--text);
  font: 600 1rem var(--font-text); outline: none;
  transition: border-color var(--speed), box-shadow var(--speed);
}
.field input:focus, .field select:focus { border-color: var(--main); box-shadow: 0 0 0 4px var(--main-soft); }
.field label { position: absolute; top: 15px; left: 18px; color: var(--muted); pointer-events: none; transition: 0.2s; }
.field input:focus + label,
.field input:not(:placeholder-shown) + label,
.field select + label { top: 5px; font-size: 0.75rem; color: var(--main); }
.field.error input { border-color: #e11d48; animation: shake 0.3s; }

.toast {
  position: fixed; left: 50%; bottom: 24px; z-index: 200; max-width: calc(100% - 32px);
  padding: 14px 24px; border-radius: var(--radius); background: var(--text); color: var(--bg);
  font-weight: 700; text-align: center; box-shadow: var(--shadow);
  transform: translate(-50%, 200%); transition: transform 0.4s;
}
.toast.show { transform: translate(-50%, 0); }

.confetti { position: fixed; top: 50%; left: 50%; z-index: 300; font-size: 1.8rem; pointer-events: none; animation: boom 1.4s ease-out forwards; }

/* ===== 7. АНИМАЦИИ ===== */
/* Блоки плавно выезжают при прокрутке. Класс js ставит script.js:
   без JavaScript блоки просто видны сразу */
.js .reveal { opacity: 0; transform: translateY(40px); transition: opacity 0.8s, transform 0.8s; }
.js .reveal.visible { opacity: 1; transform: none; }

@keyframes float { 50% { transform: translateY(-12px); } }
@keyframes fall { to { transform: translateY(1200px) rotate(360deg); } }
@keyframes bump { 50% { transform: scale(1.3); } }
@keyframes fade { from { opacity: 0; } }
@keyframes pop { from { opacity: 0; transform: scale(0.9) translateY(20px); } }
@keyframes shake { 25% { transform: translateX(-6px); } 75% { transform: translateX(6px); } }
@keyframes boom { to { opacity: 0; transform: translate(var(--x), var(--y)) rotate(var(--r)); } }

/* ===== 8. ТЕЛЕФОН И ПЛАНШЕТ ===== */
@media (max-width: 960px) {
  .hero-inner, .about-inner { grid-template-columns: 1fr; }
  .hero-picture { width: min(520px, 100%); margin: 0 auto; }
  .contacts-grid { grid-template-columns: 1fr 1fr; }
}

/* Меню прячется в бургер, когда пункты уже не помещаются в шапку */
@media (max-width: 900px) {
  .header-inner { gap: 12px; }
  .header-actions { margin-left: auto; }
  .burger { display: flex; }
  /* Меню выпадает под шапкой */
  .nav {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    gap: 0;
    padding: 8px 16px 16px;
    background: var(--surface);
    box-shadow: var(--shadow);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: opacity var(--speed), transform var(--speed), visibility var(--speed);
  }
  .nav.open { opacity: 1; visibility: visible; transform: none; }
  .nav a { padding: 12px 0; border-bottom: 1px solid var(--main-soft); }
  .nav a::after { display: none; }
}

@media (max-width: 760px) {
  .section { padding: 64px 0; }
  .hero { padding: 30px 0 64px; }
  .hero-picture img { aspect-ratio: 4 / 3; }
  .sticker { left: 10px; bottom: 14px; }
  .contacts-grid { grid-template-columns: 1fr; }
  .cta-box { padding: 50px 22px; }
}

@media (max-width: 400px) {
  .logo { font-size: 1.1rem; gap: 6px; }
  .logo-icon { font-size: 1.4rem; }
  .theme-switch { display: none; }
}

/* ===== 9. ОСОБЕННОСТИ СТИЛЯ «ЯРКИЙ И ВЕСЁЛЫЙ» =====
   Толстые обводки, «мультяшные» тени, цветные пятна, игрушечные наклоны */
.hero {
  background:
  radial-gradient(circle at 90% 10%, color-mix(in srgb, var(--accent) 55%, transparent), transparent 30%),
  radial-gradient(circle at 0% 100%, var(--main-soft), transparent 40%),
  radial-gradient(circle at 50% 50%, color-mix(in srgb, #f472b6 18%, transparent), transparent 35%);
}
.hero-title { text-shadow: 4px 4px 0 var(--accent); }
.btn, .product, .adv-card, .about-card, .contact-card, .hero-picture img, .sticker, .cta-box, .badge {
  border: 3px solid var(--text); box-shadow: 6px 6px 0 var(--text);
}
.btn:hover { transform: translate(-2px, -2px); box-shadow: 8px 8px 0 var(--text); }
.btn:active { transform: translate(4px, 4px); box-shadow: 2px 2px 0 var(--text); }
.btn-ghost, .btn-ghost:hover, .btn-ghost:active { background: var(--surface); color: var(--text); }
.btn-light { color: var(--text); }
.adv-card:hover { transform: translateY(-6px) rotate(-2deg); }
.product:hover { transform: translateY(-6px) rotate(1.5deg); }
.adv-card:nth-child(2) .adv-icon { background: color-mix(in srgb, var(--accent) 45%, transparent); }
.adv-card:nth-child(3) .adv-icon { background: color-mix(in srgb, #f472b6 30%, transparent); }
.sticker { animation: wiggle 2s ease-in-out infinite; }
@keyframes wiggle { 50% { transform: rotate(4deg) scale(1.05); } }
````

### `script.js`

````javascript
/* ============================================================
   Сайт «Игрушкин» — магазин игрушек.
   Что делает этот файл:
   0. Лаборатория — настройки, которые можно менять
   1. Помощники и элементы страницы
   2. Меню для телефона и шапка
   3. Плавное появление блоков
   4. Корзина и сообщения
   5. Окно заказа (форма)
   6. Тема, эмодзи-дождь и салют
   7. Запуск
   ============================================================ */

// ===== 0. ЛАБОРАТОРИЯ САЙТА 🧪 =====
// Поменяйте значение и посмотрите на сайт. Цвета, углы и шрифты — в начале style.css.
const LAB = {
  siteName: 'Игрушкин',         // название: шапка, главный экран, вкладка
  sticker: 'Ура, игрушки! 🎉',   // надпись на наклейке у большой картинки
  fallingEmoji: '',              // эмодзи-дождь на главном экране, например '🧸' ('' — без дождя)
  startDark: false,             // true — сайт сразу открывается в тёмной теме
  thanksText: 'Ура! Заказ принят 🎉', // сообщение после отправки формы
};

// ===== 1. ПОМОЩНИКИ И ЭЛЕМЕНТЫ СТРАНИЦЫ =====
// Короткие имена для поиска элементов: $ — один элемент, $$ — все подходящие
function $(selector) { return document.querySelector(selector); }
function $$(selector) { return document.querySelectorAll(selector); }

const header = $('#header');
const nav = $('#nav');
const burger = $('#burger');
const modal = $('#modal');
const form = $('#orderForm');
const nameInput = $('#clientName');
const phoneInput = $('#clientPhone');
const productSelect = $('#product');
const toastBox = $('#toast');
const cartButton = $('#cartButton'); // если корзины на сайте нет, здесь будет null
const cartCount = $('#cartCount');

let cart = 0;          // сколько товаров в корзине
let toastTimer = null; // таймер, который прячет сообщение

// ===== 2. МЕНЮ ДЛЯ ТЕЛЕФОНА И ШАПКА =====
burger.addEventListener('click', function () {
  nav.classList.toggle('open');
  burger.classList.toggle('active');
});

// Нажали на пункт меню — закрываем меню
$$('.nav a').forEach(function (link) {
  link.addEventListener('click', function () {
    nav.classList.remove('open');
    burger.classList.remove('active');
  });
});

// Страницу прокрутили — у шапки появляется тень
window.addEventListener('scroll', function () {
  header.classList.toggle('scrolled', window.scrollY > 10);
});

// ===== 3. ПЛАВНОЕ ПОЯВЛЕНИЕ БЛОКОВ =====
// IntersectionObserver сообщает, когда блок показался на экране
function startReveal() {
  const blocks = $$('.reveal');
  if (!('IntersectionObserver' in window)) {
    blocks.forEach(function (block) { block.classList.add('visible'); });
    return;
  }
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // показали один раз — больше не следим
      }
    });
  }, { threshold: 0.1 });
  blocks.forEach(function (block) { observer.observe(block); });
}

// ===== 4. КОРЗИНА И СООБЩЕНИЯ =====
// Сообщение внизу экрана: показываем и прячем через 2.6 секунды
function showToast(text) {
  toastBox.textContent = text;
  toastBox.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function () { toastBox.classList.remove('show'); }, 2600);
}

function addToCart(name) {
  cart = cart + 1;
  cartCount.textContent = cart;
  cartButton.classList.remove('bump');
  void cartButton.offsetWidth; // перезапуск анимации «прыжок»
  cartButton.classList.add('bump');
  showToast('«' + name + '» — в корзине!');
}

// Кнопки «В корзину» у товаров
$$('[data-add]').forEach(function (button) {
  button.addEventListener('click', function () { addToCart(button.dataset.add); });
});

// Корзина в шапке: пустая — подсказка, с товарами — окно заказа
cartButton.addEventListener('click', function () {
  if (cart === 0) showToast('Корзина пуста — выберите игрушку!');
  else openModal('');
});

// ===== 5. ОКНО ЗАКАЗА =====
function openModal(product) {
  if (product) productSelect.value = product; // сразу выбираем нужный пункт
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';    // страница за окном не прокручивается
  setTimeout(function () { nameInput.focus(); }, 100);
}

function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

// Все кнопки с data-order открывают окно заказа
$$('[data-order]').forEach(function (button) {
  button.addEventListener('click', function () { openModal(button.dataset.order); });
});

// Закрываем окно: крестик, клик по тёмному фону или клавиша Esc
modal.addEventListener('click', function (event) {
  if (event.target === modal || event.target.closest('[data-close]')) closeModal();
});
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') closeModal();
});

// Подсвечиваем поле с ошибкой красным и встряхиваем его
function markField(input, ok) {
  const field = input.parentElement;
  field.classList.remove('error');
  if (!ok) {
    void field.offsetWidth; // перезапуск анимации
    field.classList.add('error');
  }
}

form.addEventListener('submit', function (event) {
  event.preventDefault(); // не перезагружаем страницу
  const nameOk = nameInput.value.trim().length >= 2;
  const phoneOk = phoneInput.value.replace(/\D/g, '').length >= 10; // в номере хотя бы 10 цифр
  markField(nameInput, nameOk);
  markField(phoneInput, phoneOk);
  if (!nameOk || !phoneOk) {
    showToast('Проверьте имя и телефон');
    return;
  }
  // Учебный сайт: заявку никуда не отправляем, просто благодарим
  closeModal();
  form.reset();
  cart = 0; // заказ оформлен — корзина пустая
  cartCount.textContent = 0;
  showToast(LAB.thanksText);
  confetti();
});

// ===== 6. ТЕМА, ЭМОДЗИ-ДОЖДЬ И САЛЮТ =====
$('#themeSwitch').addEventListener('click', function () {
  document.body.classList.toggle('dark');
});

function startRain(emoji) {
  const rain = $('#rain');
  for (let i = 0; i < 18; i++) {
    const drop = document.createElement('span');
    drop.textContent = emoji;
    drop.style.left = Math.random() * 100 + '%';
    drop.style.fontSize = 18 + Math.random() * 22 + 'px';
    drop.style.animationDuration = 6 + Math.random() * 6 + 's';
    drop.style.animationDelay = -Math.random() * 12 + 's'; // минус — капли уже в пути
    rain.appendChild(drop);
  }
}

// Салют: эмодзи разлетаются из центра экрана в случайные стороны
function confetti() {
  const emojis = ['🎉', '✨', '🧸', '🎊'];
  for (let i = 0; i < 28; i++) {
    const piece = document.createElement('span');
    piece.className = 'confetti';
    piece.textContent = emojis[i % emojis.length];
    const angle = Math.random() * Math.PI * 2;
    const distance = 120 + Math.random() * 220;
    piece.style.setProperty('--x', Math.cos(angle) * distance + 'px');
    piece.style.setProperty('--y', Math.sin(angle) * distance + 'px');
    piece.style.setProperty('--r', Math.random() * 720 - 360 + 'deg');
    document.body.appendChild(piece);
    setTimeout(function () { piece.remove(); }, 1500);
  }
}

// ===== 7. ЗАПУСК =====
// Переносим настройки из LAB на страницу
function applyLab() {
  $$('[data-lab="name"]').forEach(function (el) { el.textContent = LAB.siteName; });
  $$('[data-lab="sticker"]').forEach(function (el) { el.textContent = LAB.sticker; });
  document.title = LAB.siteName + ' — магазин игрушек';
  if (LAB.startDark) document.body.classList.add('dark');
  if (LAB.fallingEmoji) startRain(LAB.fallingEmoji);
}

document.documentElement.classList.add('js'); // для CSS: JavaScript работает
applyLab();
startReveal();
$('#year').textContent = new Date().getFullYear();
````

<!-- SOURCES:END -->
