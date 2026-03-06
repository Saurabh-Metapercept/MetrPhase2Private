import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// ─── DESIGN TOKENS (matching architecture doc) ───────────────────────────────
const T = {
  bg: "#f4f5f7",
  surface: "#ffffff",
  border: "#e4e6ea",
  borderHi: "#d0d3db",
  text: "#1a1d23",
  textMid: "#5a6275",
  textDim: "#9aa0b0",
  accent: "#3d1f5c",       // dark purple from screenshots
  accentLight: "#f3eef8",
  orange: "#E87722",
  green: "#10B981",
  amber: "#F59E0B",
  red: "#EF4444",
  purple: "#8B5CF6",
  pink: "#f0e6f6",
  font: "'DM Sans', 'Segoe UI', system-ui, sans-serif",
};

// ─── SHARED ICONS ─────────────────────────────────────────────────────────────
const Icon = ({ d, size = 16, color = "currentColor", fill = "none", sw = 1.8 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
    {Array.isArray(d) ? d.map((p, i) => <path key={i} d={p} />) : <path d={d} />}
  </svg>
);

const Icons = {
  grid: <Icon d={["M3 3h7v7H3z","M14 3h7v7h-7z","M14 14h7v7h-7z","M3 14h7v7H3z"]} />,
  folder: <Icon d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />,
  fileText: <Icon d={["M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z","M14 2v6h6","M16 13H8","M16 17H8","M10 9H8"]} />,
  edit: <Icon d={["M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7","M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"]} />,
  upload2: <Icon d={["M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4","M17 8l-5-5-5 5","M12 3v12"]} />,
  bell: <Icon d={["M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9","M13.73 21a2 2 0 0 1-3.46 0"]} />,
  layout: <Icon d={["M3 3h18v18H3z","M3 9h18","M9 21V9"]} />,
  box: <Icon d={["M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z","M3.27 6.96 12 12.01 20.73 6.96","M12 22.08V12"]} />,
  coin: <Icon d={["M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z","M12 6v6l4 2"]} />,
  search: <Icon d={["M11 17.25a6.25 6.25 0 1 1 0-12.5 6.25 6.25 0 0 1 0 12.5z","M16 16l3.5 3.5"]} />,
  refresh: <Icon d="M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />,
  chevRight: <Icon d="M9 18l6-6-6-6" />,
  chevLeft: <Icon d="M15 18l-6-6 6-6" />,
  check: <Icon d="M20 6L9 17l-5-5" sw={2.5} />,
  uploadCloud: <Icon d={["M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4","M17 8l-5-5-5 5","M12 3v12"]} size={32} />,
  zap: <Icon d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />,
  checkCircle: <Icon d={["M22 11.08V12a10 10 0 1 1-5.93-9.14","M22 4L12 14.01l-3-3"]} />,
  download: <Icon d={["M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4","M7 10l5 5 5-5","M12 15V3"]} />,
  docPub: <Icon d={["M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z","M14 2v6h6"]} />,
};

// ─── NAVBAR ──────────────────────────────────────────────────────────────────
const navItems = [
  { id: "Dashboard", icon: Icons.grid },
  { id: "DocMigration", icon: Icons.folder },
  { id: "DocManager", icon: Icons.fileText },
  { id: "DocEditor", icon: Icons.edit },
  { id: "DocPublisher", icon: Icons.docPub },
];

function Navbar({ active, setActive }) {
  return (
    <header style={{
      background: T.surface, borderBottom: `1px solid ${T.border}`,
      padding: "0 28px", display: "flex", alignItems: "center",
      justifyContent: "space-between", height: 54,
      position: "sticky", top: 0, zIndex: 100,
      fontFamily: T.font,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{
            border: `2px solid #2563eb`, borderRadius: 4,
            padding: "2px 6px", fontWeight: 800, fontSize: 13,
            color: "#2563eb", letterSpacing: -0.5,
          }}>met<span style={{ color: T.orange }}>R</span></div>
          <span style={{ fontWeight: 600, fontSize: 14, color: T.text }}>User Dashboard</span>
        </div>

        {/* Nav */}
        <nav style={{ display: "flex", alignItems: "center" }}>
          {navItems.map(({ id, icon }) => (
            <button key={id} onClick={() => setActive(id)} style={{
              display: "flex", alignItems: "center", gap: 6,
              padding: "16px 14px", border: "none", background: "none",
              cursor: "pointer", fontSize: 13,
              fontWeight: active === id ? 600 : 400,
              color: active === id ? T.text : T.textMid,
              borderBottom: active === id ? `2px solid ${T.text}` : "2px solid transparent",
              fontFamily: T.font, transition: "all 0.15s",
            }}>
              <span style={{ opacity: 0.65 }}>{icon}</span>{id}
            </button>
          ))}
        </nav>
      </div>

      {/* User */}
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{
          width: 32, height: 32, borderRadius: "50%",
          background: T.pink, display: "flex",
          alignItems: "center", justifyContent: "center",
          fontSize: 11, fontWeight: 700, color: T.accent,
        }}>AD</div>
        <span style={{ fontSize: 13, color: T.text, fontWeight: 500 }}>adfjarw-pixiet</span>
        <span style={{ color: T.textDim }}>{Icons.grid}</span>
      </div>
    </header>
  );
}

// ─── PAGE SHELL ───────────────────────────────────────────────────────────────
function PageShell({ title, subtitle, children }) {
  return (
    <main style={{ padding: "32px 32px", minHeight: "calc(100vh - 54px)", background: T.bg, fontFamily: T.font }}>
      <h1 style={{ fontSize: 22, fontWeight: 700, color: T.text, margin: 0 }}>{title}</h1>
      {subtitle && <p style={{ fontSize: 14, color: T.textMid, margin: "6px 0 24px 0" }}>{subtitle}</p>}
      {!subtitle && <div style={{ height: 24 }} />}
      {children}
    </main>
  );
}

// ─── CARD ─────────────────────────────────────────────────────────────────────
function Card({ children, style = {} }) {
  return (
    <div style={{
      background: T.surface, borderRadius: 12,
      border: `1px solid ${T.border}`,
      boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
      ...style,
    }}>{children}</div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// PAGE 1 — DASHBOARD
// ══════════════════════════════════════════════════════════════════════════════
const chartData = [
  { month: "Jan", html5: 0, metrHtml5: 0, metrPdf: 0 },
  { month: "Feb", html5: 0.2, metrHtml5: 0.1, metrPdf: 0.05 },
  { month: "Mar", html5: 0.5, metrHtml5: 0.4, metrPdf: 0.1 },
  { month: "Apr", html5: 0.8, metrHtml5: 0.9, metrPdf: 0.3 },
  { month: "May", html5: 1.05, metrHtml5: 1.6, metrPdf: 0.5 },
  { month: "Jun", html5: 0.7, metrHtml5: 1.1, metrPdf: 0.35 },
  { month: "Jul", html5: 0.3, metrHtml5: 0.6, metrPdf: 0.15 },
  { month: "Aug", html5: 0.05, metrHtml5: 0.2, metrPdf: 0.05 },
  { month: "Sep", html5: 0, metrHtml5: 0, metrPdf: 0 },
];
const SERIES = [
  { key: "html5", color: "#f97316", label: "html5" },
  { key: "metrHtml5", color: "#22c55e", label: "metr.html5" },
  { key: "metrPdf", color: "#3b82f6", label: "metr.pdf" },
];

function Dashboard() {
  const [viewMode, setViewMode] = useState("chart");
  const statCards = [
    { title: "Projects", value: 3, bgLight: "#d4f5d4", bgDark: "#2e8b2e", icon: Icons.layout },
    { title: "Releases", value: 14, bgLight: "#f0d4f5", bgDark: "#8b2eb5", icon: Icons.box },
    { title: "Credits Remaining", value: "28%", bgLight: "#fde9c2", bgDark: "#d48a00", icon: Icons.coin },
  ];

  return (
    <PageShell title="Dashboard">
      {/* Stat Cards */}
      <div style={{ display: "flex", gap: 16, marginBottom: 24, flexWrap: "wrap" }}>
        {statCards.map((c) => (
          <div key={c.title} style={{
            display: "flex", borderRadius: 12, overflow: "hidden",
            height: 96, flex: 1, minWidth: 180,
            boxShadow: "0 1px 4px rgba(0,0,0,0.07)",
          }}>
            <div style={{
              background: c.bgLight, flex: 1,
              display: "flex", flexDirection: "column",
              justifyContent: "center", padding: "16px 20px", gap: 8,
            }}>
              <span style={{ fontWeight: 700, fontSize: 14, color: T.text }}>{c.title}</span>
              <span style={{ color: c.bgDark }}>{c.icon}</span>
            </div>
            <div style={{ background: c.bgDark, width: 88, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "#fff", fontWeight: 800, fontSize: 24 }}>{c.value}</span>
            </div>
          </div>
        ))}

        {/* Notification */}
        <Card style={{
          padding: "16px 20px", display: "flex", alignItems: "center",
          justifyContent: "space-between", height: 96, flex: 1, minWidth: 200,
        }}>
          <div>
            <p style={{ fontWeight: 700, fontSize: 14, color: T.text, margin: 0 }}>Notifications</p>
            <p style={{ fontSize: 12, color: T.textMid, marginTop: 6, lineHeight: 1.5 }}>
              No Commits added in<br />the last 24 hours
            </p>
          </div>
          <div style={{ position: "relative" }}>
            {Icons.bell}
            <span style={{
              position: "absolute", top: -3, right: -3,
              background: "#e5e7eb", borderRadius: "50%",
              width: 15, height: 15, fontSize: 9, fontWeight: 700,
              color: "#374151", display: "flex", alignItems: "center", justifyContent: "center",
            }}>0</span>
          </div>
        </Card>
      </div>

      {/* Chart */}
      <Card style={{ padding: 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20, flexWrap: "wrap", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
            <span style={{ fontWeight: 600, fontSize: 14, color: T.text }}>Releases by Output Format</span>
            <div style={{ display: "flex", gap: 14 }}>
              {SERIES.map(s => (
                <div key={s.key} style={{ display: "flex", alignItems: "center", gap: 5 }}>
                  <span style={{ width: 9, height: 9, borderRadius: "50%", background: s.color, display: "inline-block" }} />
                  <span style={{ fontSize: 12, color: T.textMid }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", border: `1px solid ${T.border}`, borderRadius: 8, overflow: "hidden" }}>
            {["chart", "table"].map(m => (
              <button key={m} onClick={() => setViewMode(m)} style={{
                padding: "6px 14px", border: "none", cursor: "pointer",
                background: viewMode === m ? "#f3f4f6" : "#fff",
                color: viewMode === m ? T.text : T.textMid,
                fontSize: 13, fontWeight: viewMode === m ? 600 : 400,
                fontFamily: T.font,
              }}>{m.charAt(0).toUpperCase() + m.slice(1)}</button>
            ))}
          </div>
        </div>

        {viewMode === "chart" && (
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={chartData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="4 4" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#9ca3af" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: "#9ca3af" }} axisLine={false} tickLine={false} domain={[0, 2]}
                label={{ value: "Release Count", angle: -90, position: "insideLeft", style: { fontSize: 11, fill: "#9ca3af" } }} />
              <Tooltip contentStyle={{ borderRadius: 8, fontSize: 12, border: `1px solid ${T.border}` }} />
              {SERIES.map(s => <Line key={s.key} type="monotone" dataKey={s.key} stroke={s.color} strokeWidth={2.5} dot={false} activeDot={{ r: 4 }} />)}
            </LineChart>
          </ResponsiveContainer>
        )}

        {viewMode === "table" && (
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
            <thead>
              <tr style={{ borderBottom: `2px solid ${T.border}` }}>
                <th style={{ padding: "10px 16px", textAlign: "left", color: T.textMid, fontWeight: 600 }}>Month</th>
                {SERIES.map(s => <th key={s.key} style={{ padding: "10px 16px", textAlign: "right", color: s.color, fontWeight: 600 }}>{s.label}</th>)}
              </tr>
            </thead>
            <tbody>
              {chartData.map((row, i) => (
                <tr key={row.month} style={{ background: i % 2 === 0 ? "#fafafa" : "#fff" }}>
                  <td style={{ padding: "10px 16px", color: T.text, fontWeight: 500 }}>{row.month}</td>
                  {SERIES.map(s => <td key={s.key} style={{ padding: "10px 16px", textAlign: "right", color: T.text }}>{row[s.key].toFixed(2)}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </Card>
    </PageShell>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// PAGE 2 — DOC MIGRATION
// ══════════════════════════════════════════════════════════════════════════════
const STEPS = ["Input Source Type", "Upload Files", "Pre-flight Check", "Transformation", "Post-flight Check", "Download"];
const STEP_ICONS = [Icons.grid, Icons.uploadCloud, Icons.fileText, Icons.zap, Icons.checkCircle, Icons.download];

function StepProgress({ currentStep }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "28px 24px", gap: 0 }}>
      {STEPS.map((step, i) => {
        const done = i < currentStep;
        const active = i === currentStep;
        return (
          <div key={step} style={{ display: "flex", alignItems: "center" }}>
            {/* Connector line before */}
            {i > 0 && (
              <div style={{
                width: 48, height: 2,
                background: done ? `linear-gradient(90deg, #6366f1, #a855f7)` : T.border,
                transition: "background 0.3s",
              }} />
            )}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <div style={{
                width: 44, height: 44, borderRadius: "50%",
                background: done ? "#22c55e" : active ? T.orange + "22" : "#f3f4f6",
                border: done ? "none" : active ? `2px solid ${T.orange}` : `2px solid ${T.border}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "all 0.3s",
              }}>
                {done
                  ? <span style={{ color: "#fff" }}>{Icons.check}</span>
                  : <span style={{ color: active ? T.orange : T.textDim }}>
                      {STEP_ICONS[i]}
                    </span>
                }
              </div>
              <span style={{
                fontSize: 11, fontWeight: active ? 700 : 400,
                color: active ? T.text : T.textMid,
                textAlign: "center", maxWidth: 72, lineHeight: 1.3,
              }}>{step}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function DocMigration() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selected, setSelected] = useState("DOCX to DITA");
  const [currentStep, setCurrentStep] = useState(1);
  const [dragOver, setDragOver] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);

  const options = ["DOCX to DITA", "HTML to DITA", "MD or MDX to DITA"];

  return (
    <PageShell title="DocMigration" subtitle="Migrate documents efficiently">
      {/* Dropdown */}
      <div style={{ position: "relative", width: 280, marginBottom: 24 }}>
        <button onClick={() => setDropdownOpen(o => !o)} style={{
          width: "100%", padding: "11px 16px",
          background: T.surface, border: `1px solid ${T.border}`,
          borderRadius: 8, display: "flex", justifyContent: "space-between",
          alignItems: "center", cursor: "pointer", fontSize: 13,
          color: T.text, fontFamily: T.font, fontWeight: 500,
          boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
        }}>
          {selected}
          <span style={{ transform: dropdownOpen ? "rotate(180deg)" : "none", transition: "0.2s", color: T.textMid }}>
            <Icon d="M6 9l6 6 6-6" />
          </span>
        </button>

        {dropdownOpen && (
          <div style={{
            position: "absolute", top: "calc(100% + 4px)", left: 0, right: 0,
            background: T.surface, border: `1px solid ${T.border}`,
            borderRadius: 8, boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
            zIndex: 50, overflow: "hidden",
          }}>
            {options.map((opt, i) => (
              <button key={opt} onClick={() => { setSelected(opt); setDropdownOpen(false); }} style={{
                display: "block", width: "100%", padding: "11px 16px",
                background: i === 0 ? "#f0eef8" : "transparent",
                border: "none", textAlign: "left", cursor: "pointer",
                fontSize: 13, color: T.text, fontFamily: T.font,
                fontWeight: selected === opt ? 600 : 400,
              }}>{opt}</button>
            ))}
          </div>
        )}
      </div>

      {/* Step Progress Card */}
      <Card style={{ marginBottom: 24 }}>
        <StepProgress currentStep={currentStep} />
      </Card>

      {/* Upload Area */}
      <Card style={{ padding: 32 }}>
        <h3 style={{ fontSize: 14, fontWeight: 600, color: T.text, marginBottom: 16 }}>
          Upload Files
          <span style={{ fontSize: 12, color: T.textMid, fontWeight: 400, marginLeft: 8 }}>
            ({selected})
          </span>
        </h3>

        <div
          onDragOver={e => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          onDrop={e => {
            e.preventDefault(); setDragOver(false);
            const file = e.dataTransfer.files[0];
            if (file) { setUploadedFile(file.name); setCurrentStep(2); }
          }}
          style={{
            border: `2px dashed ${dragOver ? T.orange : T.border}`,
            borderRadius: 10, padding: "40px 24px",
            textAlign: "center", background: dragOver ? "#fff8f3" : "#fafafa",
            transition: "all 0.2s", cursor: "pointer",
          }}
        >
          <div style={{ color: T.orange, marginBottom: 12, display: "flex", justifyContent: "center" }}>
            {Icons.uploadCloud}
          </div>
          {uploadedFile ? (
            <p style={{ fontSize: 13, color: T.green, fontWeight: 600 }}>✓ {uploadedFile}</p>
          ) : (
            <>
              <p style={{ fontSize: 14, color: T.text, fontWeight: 500, margin: 0 }}>
                Drag & drop your file here
              </p>
              <p style={{ fontSize: 12, color: T.textMid, margin: "6px 0 16px" }}>
                Supports .docx, .html, .md, .mdx
              </p>
              <label style={{
                padding: "9px 20px", background: T.accent, color: "#fff",
                borderRadius: 7, fontSize: 13, fontWeight: 600, cursor: "pointer",
              }}>
                Browse Files
                <input type="file" style={{ display: "none" }}
                  onChange={e => {
                    if (e.target.files[0]) { setUploadedFile(e.target.files[0].name); setCurrentStep(2); }
                  }} />
              </label>
            </>
          )}
        </div>

        {/* Action buttons */}
        <div style={{ display: "flex", gap: 10, marginTop: 20, justifyContent: "flex-end" }}>
          <button onClick={() => setCurrentStep(Math.max(0, currentStep - 1))} style={{
            padding: "9px 20px", border: `1px solid ${T.border}`, borderRadius: 7,
            background: T.surface, fontSize: 13, cursor: "pointer", color: T.textMid, fontFamily: T.font,
          }}>Back</button>
          <button onClick={() => setCurrentStep(Math.min(5, currentStep + 1))} style={{
            padding: "9px 20px", border: "none", borderRadius: 7,
            background: T.accent, color: "#fff", fontSize: 13, fontWeight: 600,
            cursor: "pointer", fontFamily: T.font,
          }}>Next →</button>
        </div>
      </Card>
    </PageShell>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// PAGE 3 — DOC MANAGER
// ══════════════════════════════════════════════════════════════════════════════
const projects = [
  { id: 1, name: "HTML-Migration", users: 1, status: "Active" },
  { id: 2, name: "DOCX-Migration", users: 1, status: "Active" },
  { id: 3, name: "MD-Migration", users: 1, status: "Active" },
];

function StatusBadge({ label }) {
  return (
    <span style={{
      padding: "3px 10px", borderRadius: 20,
      fontSize: 11, fontWeight: 600,
      background: label === "Active" ? "#f0fdf4" : "#fef3c7",
      color: label === "Active" ? "#16a34a" : "#d97706",
      border: `1px solid ${label === "Active" ? "#bbf7d0" : "#fde68a"}`,
    }}>{label}</span>
  );
}

function DocManager() {
  const [search, setSearch] = useState("");
  const filtered = projects.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <PageShell title="DocManager" subtitle="Manage documents efficiently">
      {/* Search + Refresh */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20, gap: 12 }}>
        <div style={{
          display: "flex", alignItems: "center", gap: 8,
          background: T.surface, border: `1px solid ${T.border}`,
          borderRadius: 8, padding: "9px 14px", width: 280,
          boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
        }}>
          <span style={{ color: T.textDim }}>{Icons.search}</span>
          <input value={search} onChange={e => setSearch(e.target.value)}
            placeholder="Search Projects"
            style={{
              border: "none", outline: "none", fontSize: 13,
              color: T.text, background: "transparent", fontFamily: T.font, width: "100%",
            }} />
        </div>
        <button style={{
          display: "flex", alignItems: "center", gap: 6,
          padding: "9px 16px", border: `1px solid ${T.border}`,
          borderRadius: 8, background: T.surface, cursor: "pointer",
          fontSize: 13, color: T.textMid, fontFamily: T.font,
          boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
        }}>
          {Icons.refresh} Refresh
        </button>
      </div>

      {/* Project Cards */}
      <div style={{ display: "flex", gap: 20, flexWrap: "wrap", marginBottom: 24 }}>
        {filtered.map(p => (
          <Card key={p.id} style={{ padding: 24, flex: 1, minWidth: 240, maxWidth: 340 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
              <div style={{
                width: 44, height: 44, borderRadius: 10,
                background: T.pink, display: "flex",
                alignItems: "center", justifyContent: "center", color: T.accent,
              }}>
                {Icons.fileText}
              </div>
              <StatusBadge label={p.status} />
            </div>
            <h3 style={{ fontSize: 15, fontWeight: 700, color: T.text, margin: "0 0 6px 0" }}>{p.name}</h3>
            <p style={{ fontSize: 12, color: T.textMid, margin: "0 0 4px 0" }}>Total Users:</p>
            <p style={{ fontSize: 13, fontWeight: 600, color: T.text, margin: "0 0 20px 0" }}>{p.users}</p>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{
                width: 32, height: 32, borderRadius: "50%",
                background: T.accent, display: "flex",
                alignItems: "center", justifyContent: "center",
                fontSize: 11, fontWeight: 700, color: "#fff",
              }}>U{p.id}</div>
              <button style={{
                display: "flex", alignItems: "center", gap: 4,
                border: "none", background: "none", cursor: "pointer",
                fontSize: 13, color: T.textMid, fontFamily: T.font,
              }}>
                View details {Icons.chevRight}
              </button>
            </div>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div style={{ display: "flex", justifyContent: "flex-end", gap: 4 }}>
        {[Icons.chevLeft, "1", Icons.chevRight].map((item, i) => (
          <button key={i} style={{
            width: 32, height: 32, borderRadius: 6,
            border: `1px solid ${T.border}`,
            background: item === "1" ? T.accent : T.surface,
            color: item === "1" ? "#fff" : T.textMid,
            cursor: "pointer", fontSize: 13, fontWeight: item === "1" ? 700 : 400,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: T.font,
          }}>{item}</button>
        ))}
      </div>
    </PageShell>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// PAGE 4 — DOC EDITOR
// ══════════════════════════════════════════════════════════════════════════════
function DocEditor() {
  const [project, setProject] = useState("HTML-Migration");
  const [branch, setBranch] = useState("main");

  return (
    <PageShell title="DocEditor" subtitle="Edit and release your documentation using DocEditor">
      <div style={{ maxWidth: 640 }}>
        <Card style={{ padding: 28 }}>
          <p style={{ fontSize: 13, color: T.textMid, marginBottom: 20 }}>
            Add details to proceed with DocEditor
          </p>

          {/* Select Project */}
          <div style={{ marginBottom: 18 }}>
            <label style={{ fontSize: 13, fontWeight: 600, color: T.text, display: "block", marginBottom: 6 }}>
              Select Project <span style={{ color: T.red }}>*</span>
            </label>
            <input value={project} onChange={e => setProject(e.target.value)} style={{
              width: "100%", padding: "10px 14px",
              border: `1px solid ${T.border}`, borderRadius: 8,
              fontSize: 13, color: T.text, fontFamily: T.font,
              background: T.surface, boxSizing: "border-box",
              outline: "none",
            }} />
          </div>

          {/* Select Branch */}
          <div style={{ marginBottom: 24 }}>
            <label style={{ fontSize: 13, fontWeight: 600, color: T.text, display: "block", marginBottom: 6 }}>
              Select Branch <span style={{ color: T.red }}>*</span>
            </label>
            <input value={branch} onChange={e => setBranch(e.target.value)} style={{
              width: "100%", padding: "10px 14px",
              border: `1px solid ${T.border}`, borderRadius: 8,
              fontSize: 13, color: T.text, fontFamily: T.font,
              background: T.surface, boxSizing: "border-box", outline: "none",
            }} />
          </div>

          {/* Buttons */}
          <div style={{ display: "flex", gap: 10 }}>
            <button style={{
              padding: "10px 20px", background: T.accent, border: "none",
              borderRadius: 8, color: "#fff", fontSize: 13, fontWeight: 600,
              cursor: "pointer", fontFamily: T.font,
            }}>Open with default editor</button>
            <button style={{
              padding: "10px 20px",
              background: "#fff5f5",
              border: `1px solid #fecaca`,
              borderRadius: 8, color: T.red, fontSize: 13, fontWeight: 600,
              cursor: "pointer", fontFamily: T.font,
              display: "flex", alignItems: "center", gap: 6,
            }}>
              <span style={{
                width: 18, height: 18, borderRadius: 4,
                background: T.red, display: "flex",
                alignItems: "center", justifyContent: "center", fontSize: 10, color: "#fff",
              }}>O</span>
              Open with OxygenXML
            </button>
          </div>
        </Card>
      </div>
    </PageShell>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// PAGE 5 — DOC PUBLISHER
// ══════════════════════════════════════════════════════════════════════════════
function DocPublisher() {
  const [title, setTitle] = useState("Test");
  const [ditamap, setDitamap] = useState("printer_user_s_guide.ditamap");
  const [outputFormat, setOutputFormat] = useState("HTML");
  const [publishWithDita, setPublishWithDita] = useState(false);

  return (
    <PageShell title="">
      {/* Custom header with branch badge */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <h1 style={{ fontSize: 20, fontWeight: 700, color: T.text, margin: 0 }}>HTML Migration</h1>
          <span style={{
            fontSize: 12, color: T.textMid, fontWeight: 500,
            padding: "2px 8px", background: T.border, borderRadius: 4,
          }}>main</span>
        </div>
        <p style={{ fontSize: 13, color: T.accent, fontWeight: 600, margin: "4px 0 0 0" }}>
          DITA-OT Version: 3.6.1
        </p>
      </div>

      <div style={{ maxWidth: 660 }}>
        <Card style={{ padding: 28 }}>
          {/* Title */}
          <div style={{ marginBottom: 18 }}>
            <label style={{ fontSize: 13, fontWeight: 600, color: T.text, display: "block", marginBottom: 6 }}>
              Title <span style={{ color: T.red }}>*</span>
            </label>
            <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Test" style={{
              width: "100%", padding: "10px 14px",
              border: `1px solid ${T.border}`, borderRadius: 8,
              fontSize: 13, color: T.text, fontFamily: T.font,
              background: T.surface, boxSizing: "border-box", outline: "none",
            }} />
          </div>

          {/* Input Source Ditamap */}
          <div style={{ marginBottom: 18 }}>
            <label style={{ fontSize: 13, fontWeight: 600, color: T.text, display: "block", marginBottom: 6 }}>
              Input Source Ditamap <span style={{ color: T.red }}>*</span>
            </label>
            <input value={ditamap} onChange={e => setDitamap(e.target.value)}
              placeholder="printer_user_s_guide.ditamap" style={{
                width: "100%", padding: "10px 14px",
                border: `1px solid ${T.border}`, borderRadius: 8,
                fontSize: 13, color: T.textDim, fontFamily: T.font,
                background: T.surface, boxSizing: "border-box", outline: "none",
              }} />
          </div>

          {/* Output Format */}
          <div style={{ marginBottom: 18 }}>
            <label style={{ fontSize: 13, fontWeight: 600, color: T.text, display: "block", marginBottom: 10 }}>
              Output Format <span style={{ color: T.red }}>*</span>
            </label>
            <div style={{ display: "flex", gap: 20 }}>
              {["HTML", "PDF"].map(fmt => (
                <label key={fmt} style={{ display: "flex", alignItems: "center", gap: 7, cursor: "pointer", fontSize: 13, color: T.text }}>
                  <div style={{
                    width: 16, height: 16, borderRadius: "50%",
                    border: `2px solid ${outputFormat === fmt ? T.accent : T.border}`,
                    background: outputFormat === fmt ? T.accent : "transparent",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    cursor: "pointer",
                  }} onClick={() => setOutputFormat(fmt)}>
                    {outputFormat === fmt && <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#fff" }} />}
                  </div>
                  {fmt}
                </label>
              ))}
            </div>
          </div>

          {/* Publish with DITA-OT */}
          <div style={{ marginBottom: 24 }}>
            <label style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer", fontSize: 13, color: T.text }}>
              <div
                onClick={() => setPublishWithDita(v => !v)}
                style={{
                  width: 16, height: 16, borderRadius: 4,
                  border: `2px solid ${publishWithDita ? T.accent : T.border}`,
                  background: publishWithDita ? T.accent : "transparent",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  cursor: "pointer", flexShrink: 0,
                }}>
                {publishWithDita && <span style={{ color: "#fff", fontSize: 10 }}>✓</span>}
              </div>
              Publish with DITA-OT
            </label>
          </div>

          {/* Buttons */}
          <div style={{ display: "flex", gap: 10, justifyContent: "flex-end" }}>
            <button style={{
              padding: "10px 20px", border: `1px solid ${T.border}`,
              borderRadius: 8, background: T.surface, fontSize: 13,
              cursor: "pointer", color: T.textMid, fontFamily: T.font,
            }}>Cancel</button>
            <button style={{
              padding: "10px 24px", border: "none", borderRadius: 8,
              background: T.accent, color: "#fff", fontSize: 13, fontWeight: 700,
              cursor: "pointer", fontFamily: T.font,
            }}>Publish</button>
          </div>
        </Card>
      </div>
    </PageShell>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// ROOT APP
// ══════════════════════════════════════════════════════════════════════════════
export default function MetrApp() {
  const [active, setActive] = useState("Dashboard");

  const pages = {
    Dashboard: <Dashboard />,
    DocMigration: <DocMigration />,
    DocManager: <DocManager />,
    DocEditor: <DocEditor />,
    DocPublisher: <DocPublisher />,
  };

  return (
    <div style={{ fontFamily: T.font, minHeight: "100vh", background: T.bg }}>
      <Navbar active={active} setActive={setActive} />
      {pages[active]}
    </div>
  );
}
