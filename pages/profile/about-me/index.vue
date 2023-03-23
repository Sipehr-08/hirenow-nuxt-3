<template>
  <section class="tell__about_you">
    <div class="tell__about-wrap">
      <div class="tell__about-grid-box">
        <div class="background__img-tellaboutyourselves">
          <img
            src="/images/regpage/tellaboutyourselve.svg"
            alt="background"
            srcset=""
          />
        </div>
        <div class="tell__about-title">Расскажите о себе</div>
        <div class="tell__about-subtitle">
          Укажите свои контактные данные и выберите категории заданий, в которых
          вы хотите работать. На всё уйдёт примерно 3 минуты.
        </div>
        <div class="tell_about-btn">
          <nuxt-link :to="{ name: 'profile-about-me-first-step' }">
            <button>Начнем</button>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>
