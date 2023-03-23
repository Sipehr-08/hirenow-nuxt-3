<template>
  <section class="create__task-firststep">
    <div class="section__layout">
      <div class="section__layout-container third__step-container">
        <div class="form__create-task-1 third__step-mod">
          <div class="create__task-indicator-third">
            <div class="task__indicator-content">
              Задание "Hire Now дизайн" заполнено на 43%
            </div>
          </div>
          <div class="form__create-task-title">По какому адресу</div>
          <form class="task__name form__third-step">
            <div class="form__task-label label__3step">
              <label class="adresess__link"><a>Мои адреса</a></label>
            </div>
            <div class="form__task-input" data-letter="A">
              <input placeholder="Город, улица, дом" />
              <div class="paperplane__icon">
                <img
                  src="/images/createtask/paperplane.svg"
                  alt="paperplane icon"
                />
              </div>
            </div>
            <div
              class="form__task-input additional__input-block"
              data-letter="B"
            >
              <input class="input__with-del" placeholder="Город, улица, дом" />
              <div class="paperplane__icon">
                <img
                  src="/images/createtask/paperplane.svg"
                  alt="paperplane icon"
                />
              </div>
              <div class="del__adress-block">
                <img src="/images/createtask/del-btn.svg" alt="" />
              </div>
            </div>
            <div class="add__additional-adress">
              <a class="add__adress-link" href="">Добавить еще адрес</a>
            </div>
          </form>
          <div class="third__step-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d317715.7234014606!2d-0.3824785028422216!3d51.528733553196474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1678536722583!5m2!1sru!2sru"
              width="100%"
              height="123"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            >
            </iframe>
          </div>
          <div class="create__task__btn">
            <nuxt-link :to="{ name: 'new-task-second-step' }" class="back__btn">
              Назад
            </nuxt-link>
            <nuxt-link
              class="forward__btn second__step-btn-style"
              :to="{ name: 'new-task-fourth-step' }"
            >
              Далее
            </nuxt-link>
          </div>
        </div>
        <div class="create__task-info-panel">
          <div class="task__info-panel-title">
            2105 исполнителей могут вам помочь
          </div>
          <div class="task__info-panel-subtitle">
            Ответьте на вопросы, чтобы получить отклики. Это займет не больше
            трёх минут.
          </div>
          <div class="task__info-panel-btn">
            <button>Частые вопросы</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
