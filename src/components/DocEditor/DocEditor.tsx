import { useState } from "react";
import oxygenIcon from "../../assets/Button.png";
import DefaultEditor from "./DefaultEditor";

export default function DocEditor(): JSX.Element {
  const [selectedProject, setSelectedProject] = useState<string>("HTML-Migration");
  const [selectedBranch, setSelectedBranch] = useState<string>("main");
  const [showEditor, setShowEditor] = useState<boolean>(false);

  if (showEditor) {
    return <DefaultEditor />;
  }

  return (
    <div className="py-6 sm:py-11 flex flex-col items-center px-4">

      {/* TOP SECTION */}
      <div className="w-full max-w-[820px] mb-6">
        <h1
          style={{
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "24px",
            lineHeight: "150%",
            color: "#5F4050",
            marginBottom: "4px",
          }}
        >
          DocEditor
        </h1>
        <p
          style={{
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "20px",
            lineHeight: "20px",
            letterSpacing: "-0.150391px",
            color: "#364153",
            margin: 1,
          }}
        >
          Edit and release your documentation using DocEditor
        </p>
      </div>

      {/* FORM CARD */}
      <div
        style={{
          boxSizing: "border-box",
          width: "100%",
          maxWidth: "672px",
          background: "#FFFFFF",
          border: "1px solid #E5E7EB",
          borderRadius: "4px",
          padding: "25px",
          display: "flex",
          flexDirection: "column",
          gap: "0px",
        }}
      >
        {/* Add details to proceed with DocEditor */}
        <p
          style={{
            fontFamily: "Inter",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "20px",
            letterSpacing: "-0.150391px",
            color: "#364153",
            margin: "0 0 20px 0",
          }}
        >
          Add details to proceed with DocEditor
        </p>

        {/* Select Project */}
        <div style={{ display: "flex", flexDirection: "column", gap: "4px", marginBottom: "16px" }}>
          <label
            style={{
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: "14px",
              lineHeight: "20px",
              letterSpacing: "-0.150391px",
              color: "#364153",
            }}
          >
            Select Project<span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            value={selectedProject}
            onChange={(e) => setSelectedProject(e.target.value)}
            style={{
              boxSizing: "border-box",
              padding: "8px 12px",
              width: "100%",
              height: "38px",
              background: "#FFFFFF",
              border: "1px solid #D1D5DC",
              borderRadius: "4px",
              fontFamily: "Inter",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "20px",
              letterSpacing: "-0.150391px",
              color: "#1E2939",
              outline: "none",
            }}
          />
        </div>

        {/* Select Branch */}
        <div style={{ display: "flex", flexDirection: "column", gap: "4px", marginBottom: "24px" }}>
          <label
            style={{
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: "14px",
              lineHeight: "20px",
              letterSpacing: "-0.150391px",
              color: "#364153",
            }}
          >
            Select Branch<span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            value={selectedBranch}
            onChange={(e) => setSelectedBranch(e.target.value)}
            style={{
              boxSizing: "border-box",
              padding: "8px 12px",
              width: "100%",
              height: "38px",
              background: "#FFFFFF",
              border: "1px solid #D1D5DC",
              borderRadius: "4px",
              fontFamily: "Inter",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "20px",
              letterSpacing: "-0.150391px",
              color: "#1E2939",
              outline: "none",
            }}
          />
        </div>

        {/* Buttons row - right aligned */}
        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
          <button
            onClick={() => setShowEditor(true)}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              padding: "6px 13px",
              gap: "10px",
              width: "185px",
              height: "44px",
              background: "#5F4050",
              borderRadius: "4px",
              border: "none",
              cursor: "pointer",
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: "14px",
              lineHeight: "20px",
              letterSpacing: "-0.150391px",
              color: "#FFFFFF",
            }}
          >
            Open with default editor
          </button>
          <img
            src={oxygenIcon}
            alt="Open with OxygenXML"
            style={{ height: "44px", cursor: "pointer", maxWidth: "100%" }}
          />
        </div>
      </div>
    </div>
  );
}
