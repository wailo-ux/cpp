<template>
  <div class="modal-backdrop" @click.self="$emit('close')">
    <div class="modal-content">
      <div class="modal-header">
        <div>
          <h2>{{ title }}</h2>
          <span class="subtitle">Historical Trend (Last 1 Hour)</span>
        </div>
        <button class="close-btn" @click="$emit('close')">×</button>
      </div>
      
      <div class="chart-container">
        <apexchart 
          type="area" 
          height="350" 
          :options="chartOptions" 
          :series="series"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: String,
  series: Array // Data grafik [ {name: 'Ampere', data: [...]}, ... ]
})

defineEmits(['close'])

// Konfigurasi Tampilan Chart (Dark Mode)
const chartOptions = computed(() => ({
  chart: {
    type: 'area',
    background: '#1e293b', // Match card color
    toolbar: { show: false },
    animations: { enabled: true }
  },
  colors: ['#0ea5e9', '#10b981'], // Warna Garis (Biru & Hijau)
  stroke: { curve: 'smooth', width: 2 },
  fill: {
    type: 'gradient',
    gradient: { shadeIntensity: 1, opacityFrom: 0.7, opacityTo: 0.1, stops: [0, 90, 100] }
  },
  dataLabels: { enabled: false },
  theme: { mode: 'dark' },
  grid: { borderColor: '#334155', strokeDashArray: 4 },
  xaxis: { 
    type: 'datetime', 
    tooltip: { enabled: false },
    axisBorder: { show: false },
    axisTicks: { show: false }
  },
  tooltip: { theme: 'dark' } // Tooltip gelap
}))
</script>

<style scoped>
.modal-backdrop {
  position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.7); /* Background gelap transparan */
  backdrop-filter: blur(5px);
  display: flex; justify-content: center; align-items: center;
  z-index: 999;
}

.modal-content {
  background: #1e293b;
  width: 90%; max-width: 800px;
  border-radius: 16px;
  border: 1px solid #334155;
  box-shadow: 0 20px 50px rgba(0,0,0,0.5);
  animation: slideUp 0.3s ease-out;
}

.modal-header {
  padding: 20px;
  border-bottom: 1px solid #334155;
  display: flex; justify-content: space-between; align-items: center;
}
.subtitle { font-size: 0.8rem; color: #94a3b8; }

.close-btn {
  background: none; border: none; color: #94a3b8; font-size: 2rem; cursor: pointer;
}
.close-btn:hover { color: #fff; }

.chart-container { padding: 20px; }

@keyframes slideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>