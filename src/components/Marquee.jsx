const STACK = [
  'Python', 'PyTorch', 'LangChain', 'RAG', 'XGBoost', 'SageMaker',
  'Docker', 'PostgreSQL', 'Snowflake', 'MLflow', 'RLHF', 'vLLM',
  'HuggingFace', 'Kafka', 'FastAPI',
];

export default function Marquee() {
  // Duplicated so the CSS scroll can loop seamlessly
  const items = [...STACK, ...STACK];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {items.map((s, i) => (
          <span key={i}>{s}</span>
        ))}
      </div>
    </div>
  );
}
