<template>
  <section class="registration__steps step__3-about">
    <div class="common__section-wrap">
      <div class="common__section-setbox-3">
        <div class="under__block-title">
          <span>Шаг 3 из 5 - Фото профиля</span>
        </div>
        <div class="form__section-step-3">
          <form>
            <div class="img__profile-step-3 flex w-full justify-center">
              <img
                src="/images/regpage/person.crop.circle.fill.svg"
                alt=""
                srcset=""
              />
            </div>
            <div class="form__title">Константин Константинов</div>
            <div class="form__about-input-group">
              <input
                id="prof__img"
                class="prof__img"
                type="file"
                name="profile_img"
              />
              <div class="add__photo-btn">
                <button class="btn__add-photo">Добавить фото</button>
              </div>
            </div>
            <div class="info__block">
              <span
                >Пользователям с хорошей фотографией больше доверяют. <br />
                Фото можно добавить потом.</span
              >
            </div>
            <div class="form__about-btn-block">
              <nuxt-link :to="{ name: 'profile-about-me-second-step' }">
                <button class="back__btn">Назад</button>
              </nuxt-link>
              <nuxt-link :to="{ name: 'profile-about-me-fourth-step' }">
                <button class="forward__btn">Далее</button>
              </nuxt-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
