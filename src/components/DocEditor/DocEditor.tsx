import { useState } from "react";
import buttonIcon from "../../assets/Button.png";
import DefaultEditor from "./DefaultEditor";

export default function DocEditor(): JSX.Element {
  const [selectedProject, setSelectedProject] = useState<string>("HTML-Migration");
  const [selectedBranch, setSelectedBranch] = useState<string>("main");
  const [showEditor, setShowEditor] = useState<boolean>(false);

  if (showEditor) {
    return <DefaultEditor />;
  }

  return (
    <div className="py-11 flex flex-col items-center">

      {/* TOP SECTION */}
      <div className="w-full max-w-[820px] mb-6">
        <h1 className="font-bold text-[28px] text-[#5F4050] mb-1">DocEditor</h1>
        <p className="text-[15px] text-[#64748B]">
          Edit and release your documentation using DocEditor
        </p>
      </div>

      {/* FORM CARD */}
      <div className="bg-white border border-[#E2E8F0] rounded-lg shadow-sm w-[820px] px-14 py-10">

        <h2 className="text-[16px] font-normal text-[#1E293B] mb-6">
          Add details to proceed with DocEditor
        </h2>

        {/* Select Project */}
        <div className="mb-5">
          <label className="block text-[14px] font-normal text-[#1E293B] mb-2">
            Select Project<span className="text-red-500">*</span>
          </label>

          <input
            type="text"
            value={selectedProject}
            onChange={(e) => setSelectedProject(e.target.value)}
            className="w-full h-[44px] px-4 border border-[#CBD5E1] rounded-md text-[14px] text-[#1E293B] focus:outline-none focus:border-[#5F4050]"
          />
        </div>

        {/* Select Branch */}
        <div className="mb-10">
          <label className="block text-[14px] font-normal text-[#1E293B] mb-2">
            Select Branch<span className="text-red-500">*</span>
          </label>

          <input
            type="text"
            value={selectedBranch}
            onChange={(e) => setSelectedBranch(e.target.value)}
            className="w-full h-[44px] px-4 border border-[#CBD5E1] rounded-md text-[14px] text-[#1E293B] focus:outline-none focus:border-[#5F4050]"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-center items-center gap-4">

          <button 
            onClick={() => setShowEditor(true)}
            className="bg-[#5F4050] text-white px-7 h-[42px] rounded-md text-[14px] font-medium hover:bg-[#4a3240] transition"
          >
            Open with default editor
          </button>

          <img
            src={buttonIcon}
            alt="Open with OxygenXML"
            className="h-[42px] cursor-pointer"
          />

        </div>
      </div>
    </div>
  );
}
