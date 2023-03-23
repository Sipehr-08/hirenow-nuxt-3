<template>
  <section class="create__task-firststep">
    <div class="section__layout">
      <div class="section__layout-container">
        <div class="form__create-task-1 form__step4-mod">
          <div class="create__task-indicator-fourth">
            <div class="task__indicator-content">
              Задание "Hire Now дизайн" заполнено на 57%
            </div>
          </div>
          <div class="form__create-task-title step-4__title">
            Когда нужно приступить к работе?
          </div>
          <form class="task__data-start">
            <div class="form__task-label label__4step">
              <label class="adresess__link-fourstep"
                ><a
                  >Укажите точную дату или период, когда нужно приступить к
                  работе.</a
                ></label
              >
            </div>
            <div class="form__task-input">
              <input placeholder="Начать работу" />
              <div class="open__data-icon">
                <img src="/images/createtask/open-data.svg" alt="" />
              </div>
            </div>
            <div class="form__task-input">
              <input placeholder="Дата" />
              <div class="clock__data-icon">
                <img src="/images/createtask/clock.svg" alt="" /><span
                  >Время</span
                >
              </div>
            </div>
            <div class="nearest__dates">
              <a href="#">Сегодня</a><a href="#">Завтра</a>
            </div>
          </form>
          <div class="create__task__btn">
            <nuxt-link :to="{ name: 'new-task-third-step' }" class="back__btn">
              Назад
            </nuxt-link>
            <nuxt-link
              class="forward__btn second__step-btn-style"
              :to="{ name: 'new-task-fifth-step' }"
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
