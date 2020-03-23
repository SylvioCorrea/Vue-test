<template>
  <div>
    <h1>Showing event #{{ event.title }}</h1>
  </div>
</template>

<script>
import EventService from '../services/EventService.js';

export default {
  props: ['id'],
  data: function() {
    return {
      event: {}
    };
  },
  created: function() {
    EventService.getEvent(this.id)
      .then(response => {
        this.event = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>
