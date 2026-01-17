<template>
  <div class="greenapple">
    <h2>{{ name }}</h2>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'greenapples',
      message: 'I like greenapples'
    }
  }
};
</script>

<style>
  .greenapple {
    border: dashed black 1px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: green;
  }

</style>