<template>
  <div class="user">
    <h1>This is a page for {{ username }}</h1>
  </div>
</template>

<script>
module.exports = {
  props: ['username']
}
</script>
