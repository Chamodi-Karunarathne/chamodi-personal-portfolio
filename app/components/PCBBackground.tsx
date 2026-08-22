"use client";

import React from 'react';

export default function PCBBackground() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: -1,
      pointerEvents: 'none',
      opacity: 0.6,
      overflow: 'hidden'
    }}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="traceGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#e5c07b" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <style>
            {`
              .pcb-trace {
                stroke: rgba(229, 192, 123, 0.25);
                stroke-width: 1.5;
                fill: none;
              }
              .pcb-signal {
                stroke: url(#traceGradient);
                stroke-width: 3;
                fill: none;
                stroke-dasharray: 100 1200;
                animation: signal-flow 12s linear infinite;
              }
              .pcb-endpoint {
                fill: #070a13;
                stroke: rgba(229, 192, 123, 0.4);
                stroke-width: 2;
              }
              @keyframes signal-flow {
                0% { stroke-dashoffset: 1200; }
                100% { stroke-dashoffset: 0; }
              }
              .delay-1 { animation-delay: 3s; }
              .delay-2 { animation-delay: 6s; }
              .delay-3 { animation-delay: 9s; }
            `}
          </style>
        </defs>

        {/* Trace 1 */}
        <circle cx="100" cy="150" r="4" className="pcb-endpoint" />
        <path className="pcb-trace" d="M 100,150 L 200,150 L 250,200 L 600,200 L 650,150 L 1100,150" />
        <path className="pcb-signal delay-1" d="M 100,150 L 200,150 L 250,200 L 600,200 L 650,150 L 1100,150" />
        <circle cx="1100" cy="150" r="4" className="pcb-endpoint" />

        {/* Trace 2 */}
        <circle cx="50" cy="450" r="4" className="pcb-endpoint" />
        <path className="pcb-trace" d="M 50,450 L 150,450 L 200,400 L 800,400 L 850,450 L 1400,450" />
        <path className="pcb-signal" d="M 50,450 L 150,450 L 200,400 L 800,400 L 850,450 L 1400,450" />
        <circle cx="1400" cy="450" r="4" className="pcb-endpoint" />

        {/* Trace 3 */}
        <circle cx="200" cy="800" r="4" className="pcb-endpoint" />
        <path className="pcb-trace" d="M 200,800 L 400,800 L 450,750 L 1000,750 L 1050,800 L 1300,800" />
        <path className="pcb-signal delay-2" d="M 200,800 L 400,800 L 450,750 L 1000,750 L 1050,800 L 1300,800" />
        <circle cx="1300" cy="800" r="4" className="pcb-endpoint" />
        
        {/* Trace 4: Vertical moving */}
        <circle cx="800" cy="100" r="4" className="pcb-endpoint" />
        <path className="pcb-trace" d="M 800,100 L 800,200 L 750,250 L 750,700 L 800,750 L 800,950" />
        <path className="pcb-signal delay-3" d="M 800,100 L 800,200 L 750,250 L 750,700 L 800,750 L 800,950" />
        <circle cx="800" cy="950" r="4" className="pcb-endpoint" />
        
        {/* Trace 5: Another vertical */}
        <circle cx="1250" cy="200" r="4" className="pcb-endpoint" />
        <path className="pcb-trace" d="M 1250,200 L 1250,300 L 1300,350 L 1300,900 L 1250,950 L 1250,1100" />
        <path className="pcb-signal delay-1" d="M 1250,200 L 1250,300 L 1300,350 L 1300,900 L 1250,950 L 1250,1100" />
        <circle cx="1250" cy="1100" r="4" className="pcb-endpoint" />

      </svg>
    </div>
  );
}
