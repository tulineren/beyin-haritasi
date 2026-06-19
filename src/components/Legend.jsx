import { GROUP_COLORS, GROUP_LABELS } from "../data/graphData";

const groups = ["skill", "interest", "project", "hobby", "experience"];

export default function Legend() {
  return (
    <div style={{
      position: "fixed",
      bottom: "1.5rem",
      left: "1.5rem",
      background: "#0f172a",
      border: "1px solid #1e293b",
      borderRadius: "12px",
      padding: "0.75rem 1rem",
      display: "flex",
      flexDirection: "column",
      gap: "0.4rem",
      zIndex: 10,
    }}>
      {groups.map((g) => (
        <div key={g} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: GROUP_COLORS[g],
            display: "inline-block",
            flexShrink: 0,
          }} />
          <span style={{ fontSize: "0.75rem", color: "#94a3b8" }}>
            {GROUP_LABELS[g]}
          </span>
        </div>
      ))}
    </div>
  );
}
