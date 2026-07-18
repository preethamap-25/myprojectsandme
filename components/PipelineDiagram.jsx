export default function PipelineDiagram() {
  return (
    <svg
      viewBox="0 0 1000 160"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Diagram showing data flowing from LLMs and RAG through backend systems into production AI products"
    >
      <g fill="none" stroke="#232E39" strokeWidth="1.5">
        <path d="M100,40 C220,40 220,80 340,80" />
        <path d="M100,120 C220,120 220,80 340,80" />
        <path d="M340,80 C460,80 460,80 580,80" />
        <path d="M580,80 C700,80 700,40 820,40" />
        <path d="M580,80 C700,80 700,120 820,120" />
      </g>

      <path d="M100,40 C220,40 220,80 340,80" fill="none" stroke="#FF8A3D" strokeWidth="1.5" strokeDasharray="4 8" className="animate-flow" />
      <path d="M100,120 C220,120 220,80 340,80" fill="none" stroke="#4FD1C5" strokeWidth="1.5" strokeDasharray="4 8" className="animate-flow-slow" />
      <path d="M340,80 C460,80 460,80 580,80" fill="none" stroke="#FF8A3D" strokeWidth="1.5" strokeDasharray="4 8" className="animate-flow" />
      <path d="M580,80 C700,80 700,40 820,40" fill="none" stroke="#FF8A3D" strokeWidth="1.5" strokeDasharray="4 8" className="animate-flow" />
      <path d="M580,80 C700,80 700,120 820,120" fill="none" stroke="#4FD1C5" strokeWidth="1.5" strokeDasharray="4 8" className="animate-flow-slow" />

      <circle cx="100" cy="40" r="26" fill="#161F2A" stroke="#FF8A3D" strokeWidth="1.5" />
      <text x="100" y="45" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontWeight="600" fontSize="12.5" fill="#E7EDF3">LLMs</text>

      <circle cx="100" cy="120" r="26" fill="#161F2A" stroke="#FF8A3D" strokeWidth="1.5" />
      <text x="100" y="125" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontWeight="600" fontSize="12.5" fill="#E7EDF3">RAG</text>

      <circle cx="340" cy="80" r="30" fill="#161F2A" stroke="#232E39" strokeWidth="1.5" />
      <text x="340" y="76" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontWeight="600" fontSize="12.5" fill="#E7EDF3">Agent</text>
      <text x="340" y="92" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#8FA0AC">orchestration</text>

      <circle cx="580" cy="80" r="30" fill="#161F2A" stroke="#232E39" strokeWidth="1.5" />
      <text x="580" y="76" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontWeight="600" fontSize="12.5" fill="#E7EDF3">FastAPI</text>
      <text x="580" y="92" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#8FA0AC">/ backend</text>

      <circle cx="820" cy="40" r="26" fill="#161F2A" stroke="#FF8A3D" strokeWidth="1.5" />
      <text x="820" y="45" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontWeight="600" fontSize="12.5" fill="#E7EDF3">Product</text>

      <circle cx="820" cy="120" r="26" fill="#161F2A" stroke="#FF8A3D" strokeWidth="1.5" />
      <text x="820" y="125" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontWeight="600" fontSize="12.5" fill="#E7EDF3">Scale</text>
    </svg>
  );
}
