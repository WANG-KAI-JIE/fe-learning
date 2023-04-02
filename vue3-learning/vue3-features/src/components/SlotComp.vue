<script setup>
</script>

<template>
  <div class="container">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot name="main">
      </slot>
    </main>
    <footer>
      <slot name="footer">
      </slot>
    </footer>
  </div>
</template>

<style scoped>
.container {
  background-color: #fff;
}

header {
  height: 60px;
  line-height: 60px;
  background-color: #26969a;
  color: #fff;
}

main {
  background-color: #d3f1f2;
  height: 300px;
  color: #333;
}

footer {
  height: 80px;
  line-height: 80px;
  text-align: center;
  background-color: #333;
  color: #fff;
}
</style>