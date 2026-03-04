<template>
  <div class="vfd-card" :class="data.status.toLowerCase()">
    <div class="card-header">
      <div class="motor-info">
        <h3>{{ data.name }}</h3>
        <span class="model-tag">{{ data.model }}</span>
      </div>
      <div class="status-badge">
        <span class="indicator"></span>
        {{ data.status }}
      </div>
    </div>

    <div class="main-metric">
      <div class="metric-big">
        <span class="label">Frequency</span>
        <span class="value">{{ data.freq }} <small>Hz</small></span>
      </div>
      <div class="metric-big">
        <span class="label">Load Current</span>
        <span class="value">{{ data.current }} <small>A</small></span>
      </div>
    </div>

    <hr class="divider">

    <div class="param-grid">
      <div class="param-item">
        <span class="p-label">Voltage Out</span>
        <span class="p-value">{{ data.voltage }} V</span>
      </div>
      <div class="param-item">
        <span class="p-label">Speed</span>
        <span class="p-value">{{ data.rpm }} RPM</span>
      </div>
      <div class="param-item">
        <span class="p-label">Power</span>
        <span class="p-value">{{ data.power }} kW</span>
      </div>
      <div class="param-item">
        <span class="p-label">Torque</span>
        <span class="p-value">{{ data.torque }} %</span>
      </div>
      <div class="param-item">
        <span class="p-label">Temp (IGBT)</span>
        <span class="p-value">{{ data.temp }} °C</span>
      </div>
      <div class="param-item">
        <span class="p-label">DC Bus</span>
        <span class="p-value">{{ data.dc_bus }} V</span>
      </div>
    </div>

    <div class="card-footer" v-if="data.last_fault !== 'No Fault'">
      ⚠️ {{ data.last_fault }}
    </div>
  </div>
</template>

<script setup>
defineProps({ data: Object })
</script>

<style scoped>
.vfd-card {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 12px;
  padding: 20px;
  transition: transform 0.2s;
  position: relative;
  overflow: hidden;
}
.vfd-card:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.3); }

/* Status Color Coding (Top Border) */
.vfd-card.run { border-top: 4px solid var(--accent-green); }
.vfd-card.stop { border-top: 4px solid var(--accent-red); opacity: 0.8; }
.vfd-card.trip { border-top: 4px solid var(--accent-yellow); }

.card-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 20px; }
.motor-info h3 { font-size: 1.1rem; color: var(--text-primary); margin-bottom: 4px; }
.model-tag { font-size: 0.7rem; color: var(--text-secondary); background: rgba(255,255,255,0.05); padding: 2px 6px; border-radius: 4px; }

.status-badge { 
  font-size: 0.8rem; font-weight: bold; padding: 4px 10px; border-radius: 20px; background: rgba(0,0,0,0.2); 
  display: flex; align-items: center; gap: 6px;
}
.run .status-badge { color: var(--accent-green); background: rgba(16, 185, 129, 0.1); }
.stop .status-badge { color: var(--accent-red); background: rgba(239, 68, 68, 0.1); }
.indicator { width: 8px; height: 8px; border-radius: 50%; background: currentColor; box-shadow: 0 0 5px currentColor; }

.main-metric { display: flex; gap: 20px; margin-bottom: 15px; }
.metric-big { flex: 1; background: rgba(255,255,255,0.03); padding: 10px; border-radius: 8px; text-align: center; }
.metric-big .label { display: block; font-size: 0.75rem; color: var(--text-secondary); margin-bottom: 5px; }
.metric-big .value { font-size: 1.5rem; font-weight: 700; color: var(--text-primary); }
.metric-big small { font-size: 0.9rem; font-weight: normal; color: var(--text-secondary); }

.divider { border: 0; border-top: 1px solid var(--card-border); margin: 15px 0; }

.param-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px 15px; }
.param-item { display: flex; justify-content: space-between; align-items: center; font-size: 0.9rem; }
.p-label { color: var(--text-secondary); }
.p-value { font-weight: 600; color: var(--accent-blue); font-family: 'Consolas', monospace; }

.card-footer { margin-top: 15px; font-size: 0.8rem; color: var(--accent-yellow); font-weight: bold; background: rgba(245, 158, 11, 0.1); padding: 8px; border-radius: 6px; text-align: center; }
</style>