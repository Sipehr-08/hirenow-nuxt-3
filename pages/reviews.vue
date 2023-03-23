<template>
  <div class="reviews__content">
    <div class="reviews__flex-box">
      <div class="reviws__sidebar">
        <ul class="reviews__link-wrap">
          <li class="review__link">
            <nuxt-link
              :to="{ name: 'how-it-works' }"
              class="review__link-content"
            >
              Как это работает
            </nuxt-link>
          </li>
          <li class="review__link">
            <nuxt-link :to="{ name: 'reviews' }" class="review__link-content">
              Отзывы заказчкиков
            </nuxt-link>
          </li>
          <li class="review__link">
            <nuxt-link
              :to="{ name: 'freelancers-reviews' }"
              class="review__link-content"
            >
              Отзывы исполнителей
            </nuxt-link>
          </li>
          <li class="review__link">
            <nuxt-link :to="{ name: 'contacts' }" class="review__link-content">
              Контакты
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="reviews__block">
      <div class="reviews__block-title">
        <h2 class="reviews__title-head">Отзывы заказчиков о HireNow</h2>
        <div class="reviews__title-subhead">
          Ежедневно на просторах интернета мы встречаем десятки отзывов наших
          пользователей о HireNow. Самые яркие и эмоциональные из них собираются
          на этойстранице. Рады поделиться ими с вами!
        </div>
      </div>
      <div class="review__item-content">
        <div class="review__user-name">
          <img src="/images/reviews/avatar.svg" alt="avatar" srcset="" /><span
            >Катерина</span
          >
        </div>
        <div class="review__text-content">
          <span
            >Санкт-Петербург! Если понадобится крутой сантехник, пишите нам! Мы
            нашли просто офигенного мужика на YouDo, он исправил косяки, которые
            сделали наши прошлые. Мужик простой, но с добрым юмором и очень
            понимающий в своём деле!</span
          >
        </div>
        <div class="review__sotial-link"><span>Twitter</span></div>
      </div>
      <div class="review__item-content">
        <div class="review__user-name">
          <img src="/images/reviews/avatar.svg" alt="avatar" srcset="" /><span
            >Катерина</span
          >
        </div>
        <div class="review__text-content">
          <span
            >Санкт-Петербург! Если понадобится крутой сантехник, пишите нам! Мы
            нашли просто офигенного мужика на YouDo, он исправил косяки, которые
            сделали наши прошлые. Мужик простой, но с добрым юмором и очень
            понимающий в своём деле!</span
          >
        </div>
        <div class="review__sotial-link"><span>Twitter</span></div>
      </div>
      <div class="review__item-content">
        <div class="review__user-name">
          <img src="/images/reviews/avatar.svg" alt="avatar" srcset="" /><span
            >Катерина</span
          >
        </div>
        <div class="review__text-content">
          <span
            >Санкт-Петербург! Если понадобится крутой сантехник, пишите нам! Мы
            нашли просто офигенного мужика на YouDo, он исправил косяки, которые
            сделали наши прошлые. Мужик простой, но с добрым юмором и очень
            понимающий в своём деле!</span
          >
        </div>
        <div class="review__sotial-link"><span>Twitter</span></div>
      </div>
      <div class="review__item-content">
        <div class="review__user-name">
          <img src="/images/reviews/avatar.svg" alt="avatar" srcset="" /><span
            >Катерина</span
          >
        </div>
        <div class="review__text-content">
          <span
            >Санкт-Петербург! Если понадобится крутой сантехник, пишите нам! Мы
            нашли просто офигенного мужика на YouDo, он исправил косяки, которые
            сделали наши прошлые. Мужик простой, но с добрым юмором и очень
            понимающий в своём деле!</span
          >
        </div>
        <div class="review__sotial-link"><span>Twitter</span></div>
      </div>
      <div class="review__item-content">
        <div class="review__user-name">
          <img src="/images/reviews/avatar.svg" alt="avatar" srcset="" /><span
            >Катерина</span
          >
        </div>
        <div class="review__text-content">
          <span
            >Санкт-Петербург! Если понадобится крутой сантехник, пишите нам! Мы
            нашли просто офигенного мужика на YouDo, он исправил косяки, которые
            сделали наши прошлые. Мужик простой, но с добрым юмором и очень
            понимающий в своём деле!</span
          >
        </div>
        <div class="review__sotial-link"><span>Twitter</span></div>
      </div>
      <div class="review__item-content">
        <div class="review__user-name">
          <img src="/images/reviews/avatar.svg" alt="avatar" srcset="" /><span
            >Катерина</span
          >
        </div>
        <div class="review__text-content">
          <span
            >Санкт-Петербург! Если понадобится крутой сантехник, пишите нам! Мы
            нашли просто офигенного мужика на YouDo, он исправил косяки, которые
            сделали наши прошлые. Мужик простой, но с добрым юмором и очень
            понимающий в своём деле!</span
          >
        </div>
        <div class="review__sotial-link"><span>Twitter</span></div>
      </div>
      <div class="review__item-content">
        <div class="review__user-name">
          <img src="/images/reviews/avatar.svg" alt="avatar" srcset="" /><span
            >Катерина</span
          >
        </div>
        <div class="review__text-content">
          <span
            >Санкт-Петербург! Если понадобится крутой сантехник, пишите нам! Мы
            нашли просто офигенного мужика на YouDo, он исправил косяки, которые
            сделали наши прошлые. Мужик простой, но с добрым юмором и очень
            понимающий в своём деле!</span
          >
        </div>
        <div class="review__sotial-link"><span>Twitter</span></div>
      </div>
      <div class="review__item-content">
        <div class="review__user-name">
          <img src="/images/reviews/avatar.svg" alt="avatar" srcset="" /><span
            >Катерина</span
          >
        </div>
        <div class="review__text-content">
          <span
            >Санкт-Петербург! Если понадобится крутой сантехник, пишите нам! Мы
            нашли просто офигенного мужика на YouDo, он исправил косяки, которые
            сделали наши прошлые. Мужик простой, но с добрым юмором и очень
            понимающий в своём деле!</span
          >
        </div>
        <div class="review__sotial-link"><span>Twitter</span></div>
      </div>
      <div class="review__btn-create-task">
        <button>Создать задание</button>
      </div>
    </div>
  </div>
</template>

<script></script>
