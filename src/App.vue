<template>
  <div class="app-layout">
    <Sidebar />

    <div class="main-wrapper">
      <Navbar />
      
      <main class="content-body">
        <router-view />
      </main>

      <Footer />
    </div>
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<style scoped>
/* Layout Utama: Flex Row (Kiri: Sidebar, Kanan: Wrapper) */
.app-layout {
  display: flex;
  height: 100vh; /* Full tinggi layar */
  width: 100%;
  overflow: hidden; /* Mencegah scroll di body utama */
  background-color: var(--bg-dark);
}

/* Wrapper Kanan: Flex Column (Atas: Nav, Tengah: Konten, Bawah: Footer) */
.main-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
}

/* Area konten yang bisa di-scroll */
.content-body {
  flex: 1; /* Mengisi ruang sisa */
  padding: 30px;
  overflow-y: auto; /* Scroll hanya di area konten */
  background-color: var(--bg-dark);
}
</style>