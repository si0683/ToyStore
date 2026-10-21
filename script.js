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
