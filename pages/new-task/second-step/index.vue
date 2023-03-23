<template>
  <section class="create__task-firststep task__second-step">
    <div class="section__layout">
      <div class="section__layout-container">
        <div class="form__create-task-1">
          <div class="create__task-indicator-second">
            <div class="task__indicator-content">Задание заполнено на 33%</div>
          </div>
          <div class="form__create-task-title">Место оказания услуги</div>
          <form class="task__name">
            <div class="form__task-checkbox">
              <label>
                <input
                  class="input__second-step"
                  type="radio"
                  name="select__place"
                /><span>Можно выполнить удаленно</span>
              </label>
            </div>
            <div class="form__task-checkbox">
              <label>
                <input
                  class="input__second-step"
                  type="radio"
                  name="select__place"
                /><span>Нужно приступить по адресу</span>
              </label>
            </div>
          </form>
          <div class="create__task__btn">
            <nuxt-link :to="{ name: 'new-task' }" class="back__btn">
              Назад
            </nuxt-link>
            <nuxt-link
              class="forward__btn second__step-btn-style"
              :to="{ name: 'new-task-third-step' }"
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
