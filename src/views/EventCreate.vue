<template>
  <div class="create-event-form">
    <h1>Create Event</h1>
    <form @submit.prevent="handleSubmit">
      <label for="id">
        ID*
        <span class="-text-error" v-show="idBlurred && !id"
          >Required field</span
        >
      </label>
      <input
        type="text"
        id="id"
        v-model.number="id"
        @blur="() => (idBlurred = true)"
      />
      <label for="title">Title</label>
      <input type="text" id="title" v-model="title" />
      <label for="description">Description</label>
      <input type="text" id="description" v-model="description" />
      <label for="location">Location</label>
      <input type="text" id="location" v-model="location" />
      <label for="date">Date</label>
      <input type="date" id="date" v-model="date" />
      <label for="time">Time</label>
      <input type="time" id="time" v-model="time" />
      <input type="submit" value="submit" />
    </form>
    <p>* required fields.</p>
  </div>
</template>

<script>
import EventService from '../services/EventService.js';
import * as yup from 'yup';

const yupSchema = yup.object({
  id: yup
    .number()
    .required('Campo obrigatório')
    .typeError('Insira um número') //Covers NaN, undefined and null
    .positive('O número deve ser positivo')
    .integer('O número deve ser inteiro'),
  title: yup.string().required('Campo obrigatório')
});

export default {
  data: function() {
    return {
      id: null,
      title: '',
      description: null,
      location: null,
      date: null,
      time: null,

      idBlurred: false
    };
  },
  methods: {
    handleSubmit: function() {
      yupSchema
        .validate(
          {
            id: this.id,
            title: this.title
          },
          //options:
          {
            abortEarly: false
          }
        )
        .then(this.submitData)
        .catch(error => {
          console.log(error);
          console.log(`${error.name} : ${error.errors}`);
        });
    },
    submitData: function() {
      const postBody = {
        id: Number(this.id),
        title: this.title,
        description: this.description,
        location: this.location,
        date: this.date,
        time: this.time
      };
      console.log(postBody);
      EventService.postEvent(postBody)
        .then(response => {
          console.log(response);
          this.$router.push({ name: 'event-list' });
        })
        .catch(error => console.log(error.response));
    }
  }
};

/**About the number() validation in yup:
 * If an input converts to NaN when validating, the error message for
 * NaN will appear. We do not want that: we want the 'required' error
 * to appear instead. Because of that, we change NaN to undefined. */
</script>
