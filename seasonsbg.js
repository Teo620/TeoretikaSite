(() => {
  const canvas = document.getElementById('mtBgCanvas');
  if (!canvas) return;
  const page = canvas.closest('.ts-meets-page');
  const ctx = canvas.getContext('2d');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const ACCENT   = [63, 7, 192];    // purple
  const ACCENT_2 = [255, 179, 122]; // orange
  const ACCENT_3 = [166, 133, 255]; // light purple

  let W, H, DPR;
  let nodes = [];
  let pulses = [];
  const LINK_DIST = 170;
  const NODE_COUNT_BASE = 42;

  function resize() {
    const rect = page.getBoundingClientRect();
    DPR = Math.min(window.devicePixelRatio || 1, 2);
    W = rect.width;
    H = rect.height;
    canvas.width = W * DPR;
    canvas.height = H * DPR;
    canvas.style.width = W + 'px';
    canvas.style.height = H + 'px';
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);

    const count = Math.max(18, Math.min(NODE_COUNT_BASE, Math.floor((W * H) / 26000)));
    nodes = Array.from({ length: count }, () => makeNode());
  }

  function makeNode() {
    const kind = Math.random();
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
      r: kind < 0.15 ? 3.4 : 1.8,          // a few "hub" nodes, bigger
      hub: kind < 0.15,
      color: kind < 0.15 ? ACCENT_2 : (Math.random() < 0.5 ? ACCENT : ACCENT_3),
      pulse: Math.random() * Math.PI * 2,   // for gentle glow breathing
    };
  }

  function maybeSpawnPulse() {
    if (reduceMotion) return;
    if (Math.random() > 0.02) return;
    // pick a node with at least one neighbor in range and send a pulse along that edge
    const a = nodes[Math.floor(Math.random() * nodes.length)];
    let best = null, bestD = LINK_DIST;
    for (const b of nodes) {
      if (b === a) continue;
      const d = Math.hypot(a.x - b.x, a.y - b.y);
      if (d < bestD) { bestD = d; best = b; }
    }
    if (best) pulses.push({ a, b: best, t: 0, speed: 0.012 + Math.random() * 0.01 });
  }

  function step() {
    ctx.clearRect(0, 0, W, H);

    // drift nodes
    for (const n of nodes) {
      n.x += n.vx; n.y += n.vy;
      n.pulse += 0.02;
      if (n.x < -20) n.x = W + 20; if (n.x > W + 20) n.x = -20;
      if (n.y < -20) n.y = H + 20; if (n.y > H + 20) n.y = -20;
    }

    // connecting lines
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < LINK_DIST) {
          const alpha = (1 - d / LINK_DIST) * 0.22;
          ctx.strokeStyle = `rgba(${ACCENT.join(',')}, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    // traveling data pulses
    maybeSpawnPulse();
    pulses = pulses.filter(p => p.t < 1);
    for (const p of pulses) {
      p.t += p.speed;
      const x = p.a.x + (p.b.x - p.a.x) * p.t;
      const y = p.a.y + (p.b.y - p.a.y) * p.t;
      const glow = ctx.createRadialGradient(x, y, 0, x, y, 8);
      glow.addColorStop(0, `rgba(${ACCENT_2.join(',')}, 0.9)`);
      glow.addColorStop(1, `rgba(${ACCENT_2.join(',')}, 0)`);
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(x, y, 8, 0, Math.PI * 2);
      ctx.fill();
    }

    // nodes on top, with soft glow
    for (const n of nodes) {
      const breathe = n.hub ? 0.75 + Math.sin(n.pulse) * 0.25 : 1;
      const glow = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 6);
      glow.addColorStop(0, `rgba(${n.color.join(',')}, ${0.5 * breathe})`);
      glow.addColorStop(1, `rgba(${n.color.join(',')}, 0)`);
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r * 6, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = `rgba(${n.color.join(',')}, ${0.9 * breathe})`;
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fill();
    }

    if (!reduceMotion) requestAnimationFrame(step);
  }

  resize();
  window.addEventListener('resize', resize);

  if (reduceMotion) {
    step(); // draw one static frame, no animation loop
  } else {
    requestAnimationFrame(step);
  }
})();