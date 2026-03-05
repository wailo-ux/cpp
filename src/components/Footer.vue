<template>
  <footer class="footer">
    <p class="copyright">© 2026 PT. Telen Orbit Prima. All rights reserved.</p>
    <p class="description">Proprietary monitoring technology for Coal Processing Plant Department.</p>
    <p class="credit">
      Made with Gab's <span class="heart">❤️</span>😀
    </p>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--card-bg);
  border-top: 1px solid var(--card-border);
  padding: 20px;
  text-align: center;
  flex-shrink: 0;
}

/* Menggantikan class text-slate-700 & font-bold */
.copyright {
  color: var(--text-primary); /* Slate 100 agar terbaca */
  font-size: 0.875rem; /* text-sm */
  font-weight: 700;    /* font-bold */
  margin: 0 0 4px 0;
}

/* Menggantikan class text-slate-500 & text-xs */
.description {
  color: var(--text-secondary); /* Slate 400 */
  font-size: 0.75rem; /* text-xs */
  font-weight: 500;   /* font-medium */
  margin: 0 auto;
  max-width: 42rem;   /* max-w-2xl */
}

/* Menggantikan class text-slate-400 & text-[11px] */
.credit {
  color: #64748b;     /* Slate 500 */
  font-size: 11px;    /* text-[11px] */
  font-weight: 700;   /* font-bold */
  margin-top: 8px;    /* mt-2 */
}

.heart {
  color: #ef4444; /* text-red-500 */
}
</style>