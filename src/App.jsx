import { useState, useCallback, useRef, useEffect } from "react";  // useEffect ekle
import ForceGraph2D from "react-force-graph-2d";
import { graphData, GROUP_COLORS } from "./data/graphData";
import DetailPanel from "./components/DetailPanel";
import Legend from "./components/Legend";
import "./App.css";

export default function App() {
  const [selectedNode, setSelectedNode] = useState(null);
  const fgRef = useRef();
  const imgCache = useRef({});

  // Force ayarları — düğümleri birbirinden uzaklaştırır
  useEffect(() => {
    const fg = fgRef.current;
    if (!fg) return;

    // Düğümleri birbirinden iten kuvvet (negatif = iter)
    fg.d3Force("charge").strength(-300);

    // Bağlantı uzunluğu
    fg.d3Force("link").distance(link => {
      const src = link.source?.group || link.source;
      const tgt = link.target?.group || link.target;
      if (src === "center" || tgt === "center") return 120;
      return 80;
    });

    // Merkeze çekim kuvvetini azalt
    fg.d3Force("center")?.strength(0.05);

    // Çarpışma — düğümler üst üste binmesin
    const d3 = fg.d3Force("collide");
    if (!d3) {
      // react-force-graph collide force'u varsayılan eklemez, manuel ekle
      import("d3-force").then(({ forceCollide }) => {
        fg.d3Force("collide", forceCollide(40));
      });
    }
  }, []);

  const handleNodeClick = useCallback((node) => {
    setSelectedNode(node);
    fgRef.current?.centerAt(node.x, node.y, 600);
    fgRef.current?.zoom(2.5, 600);
  }, []);

  const handleClose = useCallback(() => {
    setSelectedNode(null);
    fgRef.current?.zoom(1.2, 600);
  }, []);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Beynimin Haritası</h1>
        <p>Düğümlere tıkla, içimi keşfet ✦</p>
      </header>

      <ForceGraph2D
        ref={fgRef}
        graphData={graphData}
        backgroundColor="#030712"
        nodeCanvasObject={(node, ctx, globalScale) => {
          const isSelected = selectedNode?.id === node.id;
          const isCenter   = node.group === "center";
          const color      = GROUP_COLORS[node.group] || "#aaa";
          const radius     = isCenter ? 22 : 14;

          // Merkez düğüm için fotoğraf
if (node.group === "center" && node.img) {
  const r = 22;
  if (!imgCache.current[node.img]) {
    const image = new Image();
    image.src = node.img;
    image.onload = () => {
      imgCache.current[node.img] = image;
      fgRef.current?.refresh(); // ← bunu ekle
    };
    imgCache.current[node.img] = null; // yükleniyor işareti
  }
  const img = imgCache.current[node.img];
  if (img) {
    ctx.save();
    ctx.beginPath();
    ctx.arc(node.x, node.y, r, 0, 2 * Math.PI);
    ctx.clip();
    ctx.drawImage(img, node.x - r, node.y - r, r * 2, r * 2);
    ctx.restore();
    ctx.beginPath();
    ctx.arc(node.x, node.y, r, 0, 2 * Math.PI);
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 2;
    ctx.stroke();
    return;
  }
}

          if (isSelected) {
            ctx.save();
            ctx.shadowColor = color;
            ctx.shadowBlur  = 20;
            ctx.beginPath();
            ctx.arc(node.x, node.y, radius + 4, 0, 2 * Math.PI);
            ctx.fillStyle = color + "44";
            ctx.fill();
            ctx.restore();
          }

          ctx.beginPath();
          ctx.arc(node.x, node.y, radius, 0, 2 * Math.PI);
          ctx.fillStyle = isSelected ? color : color + "bb";
          ctx.fill();
          ctx.strokeStyle = "#030712";
          ctx.lineWidth   = 2;
          ctx.stroke();

          const fontSize = isCenter ? 14 : 11;
          ctx.font        = `${fontSize / globalScale * 2}px serif`;
          ctx.textAlign   = "center";
          ctx.textBaseline = "middle";
          ctx.fillStyle   = "#fff";
          ctx.fillText(node.emoji || "◉", node.x, node.y);

          if (globalScale > 0.9) {
            const labelSize = Math.max(8, 12 / globalScale);
            ctx.font      = `${labelSize}px Inter, sans-serif`;
            ctx.fillStyle = "#e2e8f0";
            ctx.textAlign = "center";
            ctx.textBaseline = "top";
            ctx.fillText(node.label, node.x, node.y + radius + 4);
          }
        }}
        nodePointerAreaPaint={(node, color, ctx) => {
          const r = node.group === "center" ? 22 : 14;
          ctx.beginPath();
          ctx.arc(node.x, node.y, r + 6, 0, 2 * Math.PI);
          ctx.fillStyle = color;
          ctx.fill();
        }}
        linkColor={() => "#1e293b"}
        linkWidth={1.5}
        linkDirectionalParticles={2}
        linkDirectionalParticleSpeed={0.004}
        linkDirectionalParticleColor={(link) =>
          GROUP_COLORS[link.source?.group] || "#60a5fa"
        }
        onNodeClick={handleNodeClick}
        onBackgroundClick={handleClose}
        d3AlphaDecay={0.02}
        d3VelocityDecay={0.3}
        cooldownTicks={200}
        onEngineStop={() => fgRef.current?.zoomToFit(400, 80)}
      />

      <DetailPanel node={selectedNode} onClose={handleClose} />
      <Legend />
    </div>
  );
}