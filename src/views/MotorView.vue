<template>
  <div>
    <h1 class="page-title">Monitoring VFD System</h1>
    
    <div class="dashboard-grid">
      <VfdCard 
        v-for="motor in motors" 
        :key="motor.id" 
        :data="motor"
        @click="openDetail(motor)" 
        class="clickable-card"
      />
    </div>

    <Transition name="fade">
      <DetailModal 
        v-if="selectedMotor" 
        :title="selectedMotor.name" 
        :series="chartData"
        @close="selectedMotor = null"
      />
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import VfdCard from '../components/VfdCard.vue'
import DetailModal from '../components/DetailModal.vue' // Import Modal

// --- Data Motor (Sama seperti sebelumnya) ---
const motors = ref([
  { id: 1, name: 'Conveyor Main', model:'Altivar 71', status: 'RUN', freq: 49.8, current: 22.5, voltage: 382, rpm: 1480, power: 15.2, torque: 78, temp: 45, dc_bus: 540, last_fault: 'No Fault' },
  { id: 2, name: 'Water Pump A', model:'Altivar 61', status: 'RUN', freq: 42.0, current: 18.2, voltage: 360, rpm: 1250, power: 11.5, torque: 65, temp: 42, dc_bus: 535, last_fault: 'No Fault' },
  { id: 3, name: 'Cooling Fan 1', model:'Toshiba VF', status: 'STOP', freq: 0.0, current: 0.0, voltage: 0, rpm: 0, power: 0.0, torque: 0, temp: 30, dc_bus: 530, last_fault: 'Overload' },
  { id: 4, name: 'Mixer Tank', model:'Altivar 71', status: 'TRIP', freq: 0.0, current: 45.0, voltage: 380, rpm: 0, power: 0.0, torque: 0, temp: 65, dc_bus: 545, last_fault: 'Over Current' },
  { id: 5, name: 'Feeder Screw', model:'Toshiba VF', status: 'RUN', freq: 25.5, current: 5.5, voltage: 200, rpm: 750, power: 3.2, torque: 40, temp: 38, dc_bus: 532, last_fault: 'No Fault' },
])

// --- Logic Modal & Grafik ---
const selectedMotor = ref(null)
const chartData = ref([])

const openDetail = (motor) => {
  // Generate Data Dummy untuk Grafik (Seolah-olah data history)
  chartData.value = [
    { name: 'Current (A)', data: generateRandomTrend(20, 30) },
    { name: 'Freq (Hz)', data: generateRandomTrend(40, 50) }
  ]
  selectedMotor.value = motor
}

// Fungsi bikin data palsu berdasarkan waktu
function generateRandomTrend(min, max) {
  let data = []
  let now = new Date().getTime()
  for (let i = 0; i < 20; i++) {
    data.push([
      now - (i * 60000), // Mundur per menit
      (Math.random() * (max - min) + min).toFixed(1)
    ])
  }
  return data.reverse()
}

// --- Simulasi Live Data (Biar angka bergerak) ---
let timer
onMounted(() => {
  timer = setInterval(() => {
    motors.value.forEach(m => {
      if(m.status === 'RUN') {
        m.current = (parseFloat(m.current) + (Math.random() - 0.5)).toFixed(1)
        m.freq = (parseFloat(m.freq) + (Math.random() * 0.2 - 0.1)).toFixed(1)
      }
    })
  }, 1000)
})
onUnmounted(() => clearInterval(timer))
</script>

<style scoped>
.page-title { margin-bottom: 25px; color: #f1f5f9; border-left: 5px solid #0ea5e9; padding-left: 15px; }

.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 25px;
}

/* Efek Hover agar user tahu bisa diklik */
.clickable-card {
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}
.clickable-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 15px rgba(14, 165, 233, 0.4); /* Glow effect biru */
  border-color: #0ea5e9;
}

/* Animasi Fade untuk Modal */
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>