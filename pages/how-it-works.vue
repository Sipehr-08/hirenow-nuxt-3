<template>
  <div>
    <div class="howitwork__content">
      <div class="howitwork__flex-box">
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
              <nuxt-link
                :to="{ name: 'contacts' }"
                class="review__link-content"
              >
                Контакты
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="reviews__block">
          <div class="reviews__block-title">
            <h2 class="reviews__title-head">Как это работает</h2>
            <div class="reviews__title-subhead howitwork__subhead">
              <p>
                Исполнители проходят специальную проверку администрацией
                сервиса, поэтому безопасен для заказчиков.
              </p>
            </div>
          </div>
          <div class="video__block">
            <div class="video__content">
              <div class="play__btn">
                <button>
                  <img src="/images/regpage/play.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="howitwork__guide-content">
      <h1 class="howitwork__page-title">Как создать задание на ?</h1>
      <h3 class="howitwork__description">Выберите категорию</h3>
      <div class="howitwork__img">
        <img src="/images/howitwork/hiw4.svg" alt="" />
      </div>
      <h3 class="howitwork__description">
        В свободной форме опишите детали вашего задания
      </h3>
      <div class="howitwork__img">
        <img src="/images/howitwork/hiw5.svg" alt="" />
      </div>
      <div class="howitwork__pictures-guide">
        <div class="picture__block">
          <div class="picture__head">
            <div class="picture__title">Получайте отклики исполнителей</div>
            <div class="picture__subtitle">
              Сразу после создания задания вам начнут поступать отклики от людей
              которые готовы его выполнить.
            </div>
          </div>
          <div class="picture__img">
            <img src="/images/howitwork/hiw1.svg" alt="" />
          </div>
        </div>
        <div class="picture__block">
          <div class="picture__head">
            <div class="picture__title">Получайте отклики исполнителей</div>
            <div class="picture__subtitle">
              Сразу после создания задания вам начнут поступать отклики от людей
              которые готовы его выполнить.
            </div>
          </div>
          <div class="picture__img">
            <img src="/images/howitwork/hiw2.svg" alt="" />
          </div>
        </div>
        <div class="picture__block">
          <div class="picture__head">
            <div class="picture__title">Получайте отклики исполнителей</div>
            <div class="picture__subtitle">
              Сразу после создания задания вам начнут поступать отклики от людей
              которые готовы его выполнить.
            </div>
          </div>
          <div class="picture__img">
            <img src="/images/howitwork/hiw3.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="review__btn-create-task">
        <button class="bg-green">Создать задание</button
        ><span>
          Может быть вы хотите стать
          <a href="#"> исполнителем ?</a></span
        >
      </div>
    </div>
  </div>
</template>
