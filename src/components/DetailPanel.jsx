import { GROUP_COLORS, GROUP_LABELS } from "../data/graphData";
import "./DetailPanel.css";

export default function DetailPanel({ node, onClose }) {
  if (!node) return null;
  const color = GROUP_COLORS[node.group] || "#aaa";
  const groupLabel = GROUP_LABELS[node.group] || node.group;

  return (
    <div className="detail-panel" style={{ borderColor: color }}>
      <button className="close-btn" onClick={onClose} aria-label="Kapat">✕</button>

      <div className="panel-icon">
  {node.group === "center" && node.img ? (
    <img src={node.img} alt={node.label} className="center-photo" />
  ) : (
    <span className="emoji">{node.emoji}</span>
  )}
</div>

      <span className="group-tag" style={{ background: color + "33", color }}>
        {groupLabel}
      </span>
      <h2 className="panel-title">{node.label}</h2>
      <p className="panel-desc">{node.description}</p>

      {/* Çoklu görsel */}
      {node.images && node.images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`${node.label} ${i + 1}`}
          style={{ marginTop: "12px", width: "100%", borderRadius: "8px", objectFit: "cover" }}
        />
      ))}

      {node.link && (
        <a href={node.link} target="_blank" rel="noreferrer" className="panel-link" style={{ color }}>
          GitHub'da Gör →
        </a>
      )}
    </div>
  );
}