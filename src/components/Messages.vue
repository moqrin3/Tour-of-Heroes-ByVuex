<template>
  <div>
    <h2>Messages</h2>
    <button @click="$emit('clearMessages')">clear</button>
    <app-message v-for="message in messages" :message="message"></app-message>
  </div>
</template>

<script>
  import Message from './Message.vue';

  export default {
    props: ['messages'],
    components: {
      AppMessage: Message
    }
  }
</script>

<style scoped>
  /* MessagesComponent's private CSS styles */
  h2 {
    color: red;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: lighter;
  }

  body {
    margin: 2em;
  }

  body, input[text], button {
    color: crimson;
    font-family: Cambria, Georgia;
  }

  button.clear {
    font-family: Arial;
    background-color: #eee;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
    cursor: hand;
  }

  button:hover {
    background-color: #cfd8dc;
  }

  button:disabled {
    background-color: #eee;
    color: #aaa;
    cursor: auto;
  }

  button.clear {
    color: #888;
    margin-bottom: 12px;
  }

  /*
  Copyright 2017-2018 Google Inc. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that
  can be found in the LICENSE file at http://angular.io/license
  */
</style>
