<template>
  <section class="registration__steps step__2-about">
    <div class="common__section-wrap">
      <div class="common__section-setbox">
        <div class="under__block-title"><span>Шаг 2 из 5 - Контакты</span></div>
        <div class="form__section-step-1">
          <form>
            <div class="form__title">Константин, как с Вами связаться?</div>
            <div class="form__subtitle">
              Заказчики будут контактировать с вами по телефону, либо в чате. На
              почту будем присылать уведомления.
            </div>
            <div class="form__about-input-group">
              <div class="input__item">
                <label>Электронная почта</label>
                <input />
              </div>
              <div class="input__item">
                <label>Телефон</label>
                <input />
              </div>
            </div>
            <div class="form__about-btn-block">
              <nuxt-link :to="{ name: 'profile-about-me-first-step' }">
                <button class="back__btn">Назад</button>
              </nuxt-link>
              <nuxt-link :to="{ name: 'profile-about-me-third-step' }">
                <button class="forward__btn">Далее</button>
              </nuxt-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
