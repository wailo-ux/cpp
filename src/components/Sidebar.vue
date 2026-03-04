<template>
  <aside class="sidebar">
    <div class="brand">
      <div class="logo-icon">🏭</div>
      <div>
        <h2>SCADA v2</h2>
        <small class="subtitle">Factory Monitor</small>
      </div>
    </div>
    
    <nav class="menu">
      <p class="menu-label">DASHBOARD</p>
      <router-link to="/" class="menu-item">
        <span class="icon">⚡</span> VFD Motor
      </router-link>
      <router-link to="/power" class="menu-item">
        <span class="icon">📊</span> Power Meter
      </router-link>
    </nav>

    <div class="status-footer">
      <span class="dot online"></span> System Online
    </div>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 260px;
  background-color: #111827; /* Lebih gelap dari card */
  border-right: 1px solid var(--card-border);
  display: flex;
  flex-direction: column;
  flex-shrink: 0; /* Agar tidak mengecil */
}

.brand {
  padding: 25px;
  display: flex;
  align-items: center;
  gap: 15px;
  border-bottom: 1px solid var(--card-border);
}
.logo-icon { font-size: 2rem; }
.subtitle { color: var(--text-secondary); font-size: 0.8rem; }

.menu { padding: 20px; flex: 1; }
.menu-label { 
  font-size: 0.75rem; 
  color: var(--text-secondary); 
  letter-spacing: 1px; 
  margin-bottom: 10px; 
  font-weight: bold;
}

.menu-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 15px;
  color: var(--text-secondary);
  text-decoration: none;
  border-radius: 8px;
  margin-bottom: 5px;
  transition: all 0.3s;
}

.menu-item:hover { background-color: rgba(255,255,255,0.05); color: white; }
.menu-item.router-link-active { 
  background-color: var(--accent-blue); 
  color: white; 
  box-shadow: 0 4px 12px rgba(14, 165, 233, 0.3);
}

.status-footer {
  padding: 20px;
  font-size: 0.8rem;
  color: var(--text-secondary);
  border-top: 1px solid var(--card-border);
  display: flex;
  align-items: center;
  gap: 8px;
}
.dot.online { width: 8px; height: 8px; background: var(--accent-green); border-radius: 50%; box-shadow: 0 0 8px var(--accent-green); }
</style>