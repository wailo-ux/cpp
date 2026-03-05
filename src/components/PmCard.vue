<template>
  <div class="pm-card">
    <div class="pm-header">
      <div class="title-section">
        <h3>{{ data.name }}</h3>
        <span class="sub-text">Schneider PM5310</span>
      </div>
      <div class="pf-badge">
        <small>PF</small>
        <strong>{{ data.pf }}</strong>
      </div>
    </div>

    <div class="pm-body">
      <div class="section">
        <h4 class="section-title">Electrical</h4>
        <div class="row"><span>Volt L-L</span> <strong>{{ data.volt_ll }} V</strong></div>
        <div class="row"><span>Volt L-N</span> <strong>{{ data.volt_ln }} V</strong></div>
        <div class="row"><span>Current Avg</span> <strong>{{ data.current_avg }} A</strong></div>
        <div class="row"><span>Frequency</span> <strong>{{ data.freq }} Hz</strong></div>
      </div>

      <div class="section border-left">
        <h4 class="section-title">Power</h4>
        <div class="row"><span>Active (P)</span> <strong class="text-green">{{ data.kw }} kW</strong></div>
        <div class="row"><span>Reactive (Q)</span> <strong class="text-yellow">{{ data.kvar }} kVAR</strong></div>
        <div class="row"><span>Apparent (S)</span> <strong class="text-blue">{{ data.kva }} kVA</strong></div>
      </div>
    </div>

    <div class="energy-footer">
      <div class="energy-item">
        <span class="e-label">Active Energy (Imp)</span>
        <span class="e-value">{{ data.kwh_imp }} <small>kWh</small></span>
      </div>
      <div class="energy-item">
        <span class="e-label">Apparent Energy</span>
        <span class="e-value">{{ data.kvah }} <small>kVAh</small></span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({ data: Object })
</script>

<style scoped>
.pm-card {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 12px;
  color: var(--text-primary);
  display: flex;
  flex-direction: column;
}

.pm-header {
  padding: 15px 20px;
  border-bottom: 1px solid var(--card-border);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255,255,255,0.02);
}
.title-section h3 { margin: 0; font-size: 1.1rem; }
.sub-text { font-size: 0.75rem; color: var(--text-secondary); }
.pf-badge { 
  background: #0f172a; border: 1px solid var(--card-border); 
  padding: 5px 12px; border-radius: 6px; text-align: center;
}
.pf-badge small { display: block; font-size: 0.6rem; color: var(--text-secondary); }
.pf-badge strong { font-size: 1rem; color: var(--accent-green); }

.pm-body { display: grid; grid-template-columns: 1fr 1fr; padding: 20px; gap: 20px; }
.section-title { 
  font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1px; 
  color: var(--text-secondary); margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;
}
.border-left { border-left: 1px solid var(--card-border); padding-left: 20px; }

.row { display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 0.9rem; }
.row strong { font-family: 'Consolas', monospace; }
.text-green { color: var(--accent-green); }
.text-yellow { color: var(--accent-yellow); }
.text-blue { color: var(--accent-blue); }

.energy-footer {
  background: #0f172a;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid var(--card-border);
  border-radius: 0 0 12px 12px;
}
.energy-item { text-align: center; }
.e-label { display: block; font-size: 0.7rem; color: var(--text-secondary); margin-bottom: 2px; }
.e-value { font-size: 1.1rem; font-weight: bold; color: #fff; font-family: 'Consolas', monospace; }
.e-value small { font-size: 0.8rem; color: var(--text-secondary); font-weight: normal; }
</style>