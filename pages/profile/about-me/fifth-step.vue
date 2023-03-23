<template>
  <section class="registration__steps step__5-about">
    <div class="common__section-wrap">
      <div class="common__section-setbox">
        <div class="under__block-title">
          <span>Шаг 5 из 5 - Расскажите о себе</span>
        </div>
        <div class="form__section-step-5">
          <form>
            <div class="form__title">Расскажите о себе</div>
            <div class="form__subtitle">
              Заказчики будут контактировать с вами по телефону, либо в чате. На
              почту будем присылать уведомления.
            </div>
            <ul class="step-5__subtitle">
              <li class="step-5__list">О своем опыте</li>
              <span
                >Где и сколько учились, работали, какие имеете сертификаты</span
              >
              <li class="step-5__list">О своем опыте</li>
              <span
                >Где и сколько учились, работали, какие имеете сертификаты</span
              >
              <li class="step-5__list">О своем опыте</li>
              <span
                >Где и сколько учились, работали, какие имеете сертификаты</span
              >
            </ul>
            <div class="see__sample-link">
              <a href="#">Посмотреть примеры</a>
            </div>
            <div class="form__about-input-group">
              <div class="input__item step-4-input">
                <label>О себе</label>
                <textarea
                  id="about__yourselves"
                  class="about__yourselves"
                  name=""
                  cols="30"
                  rows="10"
                >
                </textarea
                ><span>от 50 до 400 символов</span>
              </div>
            </div>
            <div class="form__about-btn-block">
              <nuxt-link :to="{ name: 'profile-about-me-fourth-step' }">
                <button class="back__btn">Назад</button>
              </nuxt-link>
              <button class="forward__btn">
                <a href="main.html"> Далее</a>
              </button>
            </div>
            <div class="block__info">
              <span>Вы можете заполнить рассказ о себе позже</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
