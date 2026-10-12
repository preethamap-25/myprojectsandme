export default function PipelineDiagram() {
  return (
    <svg
      viewBox="0 -50 1000 180"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Diagram of the pipeline from data and models through backend systems to a shipped product"
    >
      <g fill="none" stroke="#1C1C1A" strokeWidth="1.2">
        <path d="M90,40 L280,40" />
        <path d="M90,110 L280,110" />
        <path d="M280,40 L280,110" />
        <path d="M280,75 L440,75" />
        <path d="M440,75 L440,40 L620,40" />
        <path d="M440,75 L440,110 L620,110" />
        <path d="M620,40 L800,40 L800,75" />
        <path d="M620,110 L800,110 L800,75" />
        <path d="M800,75 L910,75" />
      </g>

      {[
        [90, 40, "LLMs"],
        [90, 110, "RAG"],
        [440, 75, "Agent"],
        [620, 40, "FastAPI"],
        [620, 110, "MongoDB"],
        [800, 75, "Product"],
      ].map(([x, y, label]) => {
        const labelY =
          label === "Agent" || label === "Product"
            ? y - 16
            : y - 12;

        return (
          <g key={label}>
            <circle cx={x} cy={y} r="4" fill="#1C1C1A" />
            <text
              x={x}
              y={labelY}
              textAnchor="middle"
              fontFamily="JetBrains Mono, monospace"
              fontSize="12"
              fill="#1C1C1A"
            >
              {label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
