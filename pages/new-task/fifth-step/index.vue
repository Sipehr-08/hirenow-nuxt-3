<template>
  <section class="create__task-firststep">
    <div class="section__layout">
      <div class="section__layout-container five__step-container">
        <div class="form__create-task-1 five__step-mod">
          <div class="create__task-indicator-fifth">
            <div class="task__indicator-content">
              Задание "Hire Now дизайн" заполнено на 71%
            </div>
          </div>
          <div class="form__create-task-title five__step-title">
            Уточните детали
          </div>
          <form class="task__name form__five-step">
            <div class="form__task-label">
              <label class="adresess__link"><a>Описание</a></label>
            </div>
            <div class="form__task-input five__step-textarea">
              <textarea
                name=""
                cols="30"
                rows="10"
                placeholder="Например, написать техническое задание"
              ></textarea>
            </div>
            <div class="private__info-link">
              <a href="#">Приватная информация</a>
            </div>
            <div class="add__additional-adress">
              <a href="">Добавить фото</a>
            </div>
          </form>
          <div class="create__task__btn">
            <nuxt-link :to="{ name: 'new-task-fourth-step' }" class="back__btn">
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
        <!--.create__task-sidebar-->
        <!--    .create__task-info-panel-->
        <!--        .task__info-panel-title 2105 исполнителей могут вам помочь-->
        <!--        .task__info-panel-subtitle Ответьте на вопросы, чтобы получить отклики. Это займет не больше трёх минут.-->
        <!--        .task__info-panel-btn-->
        <!--            button Частые вопросы-->
      </div>
    </div>
  </section>
</template>
