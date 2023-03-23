<template>
  <section class="create__task-firststep">
    <div class="section__layout">
      <div class="section__layout-container">
        <div class="form__create-task-1">
          <div class="create__task-indicator">
            <div class="task__indicator-content">Задание заполнено на 17%</div>
          </div>
          <div class="form__create-task-title">Как назвать задание</div>
          <form class="task__name">
            <div class="form__task-label">
              <label>Название задания</label>
            </div>
            <div class="form__task-input">
              <input написать техническое задание />
            </div>
            <div class="categories__sample-link">
              <span>Подкатегория Что-то другое</span>
            </div>
          </form>
          <div class="create__task__btn">
            <nuxt-link
              class="forward__btn first__btn-step"
              :to="{ name: 'new-task-second-step' }"
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
