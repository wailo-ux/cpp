<template>
  <div class="app-container">
    <Sidebar />
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue'
</script>

<style scoped>
.app-container {
  display: flex;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
}

.main-content {
  flex: 1; /* Mengisi sisa ruang setelah sidebar */
  padding: 30px;
  background-color: var(--bg-dark);
  overflow-y: auto;
}
</style>