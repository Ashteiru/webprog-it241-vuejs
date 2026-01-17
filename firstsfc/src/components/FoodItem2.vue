<template>
 <div class="blackapple">
    <h2>{{ name }}</h2>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'black apples',
      message: 'I like black apples'
    }
  }
};
</script>

<style>
  .blackapple {
    border: dashed black 1px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: white;
  }

</style>