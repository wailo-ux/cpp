<template>
  <nav class="navbar">
    <div class="logo-container">
      <img src="../assets/logo-turangga.png" alt="Turangga Resources" class="logo" />
      <img src="../assets/logo-top.png" alt="Telen Orbit Prima" class="logo" />
    </div>
    
    <div class="nav-center">
      <h2 class="nav-title">COAL PROCESSING PLANT DEPARTMENT</h2>
    </div>

    <div class="spacer"></div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  padding: 0 30px;
  
  /* --- PERUBAHAN WARNA --- */
  background-color: #f8fafc; /* Abu-abu sangat cerah (Slate 50), condong ke putih */
  border-bottom: 1px solid #cbd5e1; /* Border abu-abu halus */
  /* ----------------------- */
  
  flex-shrink: 0;
  z-index: 10;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1); /* Sedikit bayangan agar tidak terlihat flat */
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 20px; /* Jarak antar logo diperlebar sedikit */
  flex: 1;
}

.logo {
  height: 48px; /* Sedikit lebih besar agar jelas */
  width: auto;
  object-fit: contain;
  filter: drop-shadow(0 2px 2px rgba(0,0,0,0.1)); /* Opsional: bayangan tipis pada logo */
}

/* Style untuk teks alternatif jika gambar tidak muncul */
.logo[alt] {
  color: #334155;
  font-size: 0.8rem;
  font-weight: bold;
}

.nav-center {
  flex: 2;
  display: flex;
  justify-content: center;
  text-align: center;
}

.nav-title {
  /* --- PERUBAHAN WARNA TEKS --- */
  color: #0f172a; /* Warna gelap (Slate 900) agar terbaca di background terang */
  /* ---------------------------- */
  
  font-size: 1.25rem;
  font-weight: 800;
  letter-spacing: 1px;
  margin: 0;
  text-transform: uppercase;
}

.spacer {
  flex: 1;
}
</style>