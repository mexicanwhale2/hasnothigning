import React, { useState } from 'react';

type Props = {
  initial?: number;
  min?: number;
  max?: number;
};

const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));

const RandomWidget: React.FC<Props> = ({ initial, min = 1, max = 100 }) => {
  const [value, setValue] = useState<number>(() => clamp(initial ?? Math.floor(Math.random() * (max - min + 1)) + min, min, max));

  const regenerate = () => {
    setValue(Math.floor(Math.random() * (max - min + 1)) + min);
  };

  return (
    <div style={{fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial', padding: 12, border: '1px solid #e5e7eb', borderRadius: 8, display: 'inline-block'}}>
      <h3 style={{margin: '0 0 8px'}}>RandomWidget</h3>
      <div style={{fontSize: 32, fontWeight: 700, marginBottom: 8}}>{value}</div>
      <div style={{display: 'flex', gap: 8}}>
        <button onClick={regenerate} style={{padding: '8px 12px', borderRadius: 6, border: '1px solid #d1d5db', background: '#fff'}}>Regenerate</button>
        <button onClick={() => setValue(min)} style={{padding: '8px 12px', borderRadius: 6, border: '1px solid #d1d5db', background: '#fff'}}>Set Min</button>
        <button onClick={() => setValue(max)} style={{padding: '8px 12px', borderRadius: 6, border: '1px solid #d1d5db', background: '#fff'}}>Set Max</button>
      </div>
    </div>
  );
};

export default RandomWidget;