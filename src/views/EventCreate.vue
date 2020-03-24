<template>
  <div>
    <h1>Create Event</h1>
    <form @submit.prevent="handleSubmit">
      <label for="id">ID*</label>
      <input type="text" id="id" v-model.number="id" />
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
export default {
  data: function() {
    return {
      id: '',
      title: '',
      description: '',
      location: '',
      date: '',
      time: ''
    };
  },
  methods: {
    handleSubmit: function() {
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
        .then(response => console.log(response))
        .catch(error => console.log(error.response));
    }
  }
};
</script>
