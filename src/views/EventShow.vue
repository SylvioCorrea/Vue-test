<template>
  <div>
    <div class="event-header">
      <span class="eyebrow">@{{ event.time }} on {{ event.date }}</span>
      <h1 class="title">{{ event.title }}</h1>
      <h5>Organized by {{ event.organizer }}</h5>
      <h5>Category: {{ event.category }}</h5>
      <h2>Location</h2>
      <address>{{ event.location }}</address>
      <h2>
        Attendees
        <span class="badge -fill-gradient">{{
          event.attendees ? event.attendees.length : 0
        }}</span>
      </h2>
    </div>
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
    console.log('event ' + this.id);
    EventService.getEvents(this.id)
      .then(response => {
        console.log(response.data);
        this.event = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style scoped>
.location {
  margin-bottom: 0;
}
.location > .icon {
  margin-left: 10px;
}
.event-header > .title {
  margin: 0;
}
.list-group {
  margin: 0;
  padding: 0;
  list-style: none;
}
.list-group > .list-item {
  padding: 1em 0;
  border-bottom: solid 1px #e5e5e5;
}
</style>
