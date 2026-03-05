<template>
  <div>
    <h1 class="page-title">Power Quality Monitoring</h1>
    
    <div class="dashboard-grid">
      <PmCard 
        v-for="pm in pms" 
        :key="pm.id" 
        :data="pm" 
        @click="openDetail(pm)"
        class="clickable-card"
      />
    </div>

    <Transition name="fade">
      <DetailModal 
        v-if="selectedPm" 
        :title="selectedPm.name" 
        :series="chartData"
        @close="selectedPm = null"
      />
    </Transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PmCard from '../components/PmCard.vue'
import DetailModal from '../components/DetailModal.vue' // Import Modal

const pms = ref([
  { 
    id: 1, name: 'Incoming MCC 1', 
    volt_ll: 382.5, volt_ln: 220.4, current_avg: 154.2, freq: 50.02,
    kw: 95.4, kvar: 12.5, kva: 98.2, pf: 0.96,
    kwh_imp: 125400.5, kvah: 130200.2
  },
  { 
    id: 2, name: 'Incoming MCC 2', 
    volt_ll: 380.1, volt_ln: 219.8, current_avg: 140.5, freq: 49.98,
    kw: 88.2, kvar: 15.2, kva: 90.5, pf: 0.94,
    kwh_imp: 85400.1, kvah: 90100.5
  },
  { 
    id: 3, name: 'Utility / Lighting', 
    volt_ll: 379.5, volt_ln: 218.9, current_avg: 45.2, freq: 50.01,
    kw: 25.4, kvar: 2.1, kva: 26.5, pf: 0.98,
    kwh_imp: 12400.5, kvah: 12800.0
  },
])

// --- Logic Modal & Grafik ---
const selectedPm = ref(null)
const chartData = ref([])

const openDetail = (pm) => {
  selectedPm.value = pm
  
  // Kita buat grafik Active Power (kW) vs Reactive Power (kVAR)
  // Range data dibuat dinamis berdasarkan nilai saat ini agar terlihat realistis
  chartData.value = [
    { name: 'Active Power (kW)', data: generateRandomTrend(pm.kw - 5, pm.kw + 5) },
    { name: 'Reactive (kVAR)', data: generateRandomTrend(pm.kvar - 2, pm.kvar + 2) }
  ]
}

// Fungsi helper untuk generate data dummy (berdasarkan timestamp)
function generateRandomTrend(min, max) {
  let data = []
  let now = new Date().getTime()
  for (let i = 0; i < 20; i++) {
    data.push([
      now - (i * 60000), // Mundur per menit
      (Math.random() * (max - min) + min).toFixed(2)
    ])
  }
  return data.reverse()
}
</script>

<style scoped>
.page-title { 
  margin-bottom: 25px; 
  color: var(--text-primary); 
  border-left: 5px solid var(--accent-yellow); 
  padding-left: 15px; 
}

.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 25px;
}

/* Efek Hover dan Kursor */
.clickable-card {
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}
.clickable-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 15px rgba(245, 158, 11, 0.4); /* Glow effect warna kuning */
  border-color: var(--accent-yellow);
}

/* Animasi Fade untuk Modal */
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>