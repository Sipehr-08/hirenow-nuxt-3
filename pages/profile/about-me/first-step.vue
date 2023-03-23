<template>
  <section class="registration__steps step__1-about">
    <div class="common__section-wrap">
      <div class="common__section-setbox">
        <div class="under__block-title"><span>Шаг 1 из 5 - О себе</span></div>
        <div class="form__section-step-1">
          <form>
            <div class="form__title">Как вас представлять заказчикам?</div>
            <div class="form__subtitle">
              Эта данные нужны для работы на сервисе и связи с заказчиком. При
              этом заказчик увидит только ваше имя и телефон.
            </div>
            <div class="form__about-input-group">
              <div class="input__item">
                <label>Ваш город</label>
                <input />
              </div>
              <div class="input__item">
                <label>Имя</label>
                <input />
              </div>
              <div class="input__item">
                <label>Фамилия</label>
                <input />
              </div>
              <div class="input__item">
                <label>Дата рождения</label>
                <input />
              </div>
            </div>
            <div class="form__about-btn-block">
              <nuxt-link :to="{ name: 'profile-about-me' }">
                <button class="back__btn">Назад</button>
              </nuxt-link>
              <nuxt-link :to="{ name: 'profile-about-me-second-step' }">
                <button class="forward__btn">Далее</button>
              </nuxt-link>
            </div>
            <div class="block__info">
              <span
                >Продолжая верификацию, вы подтверждаете, что проходите её
                впервые,указали достоверную информацию о себе и соглашаетесь на
                обработку персональных данных.</span
              >
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
