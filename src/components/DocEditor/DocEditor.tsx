import { useState } from "react";
import DefaultEditor from "./DefaultEditor";
import OxygenEditor from "./OxygenEditor";
import PageHeader from "../common/PageHeader";
import PageContainer from "../common/PageContainer";
import defaultEditorBtn from "../../assets/Button (1).svg";
import oxygenEditorBtn from "../../assets/Button (2).svg";

export default function DocEditor(): JSX.Element {
  const [selectedProject, setSelectedProject] = useState<string>("HTML-Migration");
  const [selectedBranch, setSelectedBranch] = useState<string>("main");
  const [showEditor, setShowEditor] = useState<boolean>(false);
  const [showOxygen, setShowOxygen] = useState<boolean>(false);

  if (showEditor) {
    return <DefaultEditor />;
  }

  if (showOxygen) {
    return <OxygenEditor onBack={() => setShowOxygen(false)} />;
  }

  return (
    <PageContainer>
      <PageHeader
        title="DocEditor"
        description="Edit and release your documentation using DocEditor"
      />

      {/* Card: 672×282, centered */}
      <div
        className="bg-white border border-[#E5E7EB] rounded mx-auto"
        style={{ width: 672, height: 282, position: "relative" }}
      >
        {/* "Add details" text: left:25, top:25 */}
        <p
          className="absolute"
          style={{
            left: 25, top: 25,
            width: 622, height: 20,
            fontFamily: "Inter", fontWeight: 400, fontSize: 14,
            lineHeight: "20px", letterSpacing: "-0.150391px",
            color: "#364153",
          }}
        >
          Add details to proceed with DocEditor
        </p>

        {/* Select Project field: left:25, top:65, height:62 */}
        <div className="absolute flex flex-col" style={{ left: 25, top: 65, width: 622, gap: 4 }}>
          <label
            style={{
              fontFamily: "Inter", fontWeight: 500, fontSize: 14,
              lineHeight: "20px", letterSpacing: "-0.150391px",
              color: "#364153",
            }}
          >
            Select Project<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={selectedProject}
            onChange={(e) => setSelectedProject(e.target.value)}
            style={{
              width: 622, height: 38,
              padding: "8px 12px",
              background: "#FFFFFF",
              border: "1px solid #D1D5DC",
              borderRadius: 4,
              fontFamily: "Inter", fontWeight: 400, fontSize: 14,
              lineHeight: "20px", letterSpacing: "-0.150391px",
              color: "#1E2939",
              boxSizing: "border-box",
              outline: "none",
            }}
          />
        </div>

        {/* Select Branch field: left:25, top:143, height:62 */}
        <div className="absolute flex flex-col" style={{ left: 25, top: 143, width: 622, gap: 4 }}>
          <label
            style={{
              fontFamily: "Inter", fontWeight: 500, fontSize: 14,
              lineHeight: "20px", letterSpacing: "-0.150391px",
              color: "#364153",
            }}
          >
            Select Branch<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={selectedBranch}
            onChange={(e) => setSelectedBranch(e.target.value)}
            style={{
              width: 622, height: 38,
              padding: "8px 12px",
              background: "#FFFFFF",
              border: "1px solid #D1D5DC",
              borderRadius: 4,
              fontFamily: "Inter", fontWeight: 400, fontSize: 14,
              lineHeight: "20px", letterSpacing: "-0.150391px",
              color: "#1E2939",
              boxSizing: "border-box",
              outline: "none",
            }}
          />
        </div>

        {/* Button 1: left:105, top:221, 218×37 */}
        <button
          onClick={() => setShowEditor(true)}
          className="absolute p-0 border-0 bg-transparent cursor-pointer"
          style={{ left: 105, top: 221 }}
        >
          <img src={defaultEditorBtn} alt="Open with default editor" style={{ width: 218, height: 37, display: "block" }} />
        </button>

        {/* Button 2: left:351, top:221, 226×37 */}
        <button
          onClick={() => setShowOxygen(true)}
          className="absolute p-0 border-0 bg-transparent cursor-pointer"
          style={{ left: 351, top: 221 }}
        >
          <img src={oxygenEditorBtn} alt="Open with OxygenXML Web Author" style={{ width: 226, height: 37, display: "block" }} />
        </button>
      </div>
    </PageContainer>
  );
}
