<template>
  <section class="create__task-firststep">
    <div class="section__layout">
      <div class="section__layout-container">
        <div class="form__create-task-1">
          <div class="create__task-indicator-sixth">
            <div class="task__indicator-content">
              Задание "Hire Now дизайн" заполнено на 86%
            </div>
          </div>
          <div class="form__create-task-title">
            На какой бюджет вы рассчитываете?
          </div>
          <div class="form__create-task-subtitle form__step-six">
            <span>до</span>
            <input type="number" placeholder="введите число" /><span
              class="value__span"
              >&#8381;</span
            >
          </div>
          <div class="create__task__btn">
            <nuxt-link :to="{ name: 'new-task-fifth-step' }" class="back__btn">
              Назад
            </nuxt-link>
            <nuxt-link
              class="forward__btn second__step-btn-style"
              :to="{ name: 'new-task-sixth-step' }"
            >
              Далее
            </nuxt-link>
          </div>
        </div>
        <div class="create__task-sidebar">
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
    </div>
  </section>
</template>
