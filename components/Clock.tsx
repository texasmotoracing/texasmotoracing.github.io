'use client';
import { useEffect, useState } from 'react';
import { site, stats } from '@/data/site';

function remaining(iso: string) {
  const ms = Math.max(0, new Date(iso).getTime() - Date.now());
  const s = Math.floor(ms / 1000);
  return { d: Math.floor(s / 86_400), h: Math.floor(s / 3_600) % 24, m: Math.floor(s / 60) % 60, s: s % 60 };
}

const two = (n: number) => String(n).padStart(2, '0');

export default function Clock() {
  // Render a placeholder on the server, the live count on the client, so static export never disagrees with the browser.
  const [t, setT] = useState<ReturnType<typeof remaining> | null>(null);
  useEffect(() => {
    setT(remaining(site.nextDeadline.dueISO));
    const id = setInterval(() => setT(remaining(site.nextDeadline.dueISO)), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="clock">
      <div className="wrap">
        <div className="cell">
          <div className="lbl"><span className="live" aria-hidden="true" />Next regulation deadline</div>
          <div className="val" role="timer" aria-label={t ? `${t.d} days to go` : undefined}>
            {t ? t.d : '—'}<small>D</small>
            <span className="hms">{t ? `${two(t.h)}:${two(t.m)}:${two(t.s)}` : '--:--:--'}</span>
          </div>
          <div className="what">{site.nextDeadline.label} · {site.nextDeadline.dueText}</div>
        </div>
        {stats.map((s) => (
          <div className="cell" key={s.label}>
            <div className="lbl">{s.label}</div>
            <div className="val">{s.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
