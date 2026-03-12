import { useState } from "react";
import HtmlStyler from "./HtmlStyler";
import PdfStyler from "./PdfStyler";

type StepType = "form" | "modal" | "publisher" | "styler";
type StylerTab = "html" | "pdf";

export default function DocPublisher(): JSX.Element {

  const [selectedProject, setSelectedProject] = useState<string>("New-Docs-Migration");
  const [selectedBranch, setSelectedBranch] = useState<string>("Printer");

  const [step, setStep] = useState<StepType>("form");

  const [stylerTab, setStylerTab] = useState<StylerTab>("html");

  const handleReset = () => {
    alert("Fields Reset");
  };

  const handleSubmit = () => {
    alert("Styler Submitted");
  };

  const handlePublish = () => {
    alert("Document Published");
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] py-10">

      {/* ================= FORM PAGE ================= */}
      {step === "form" && (
        <>
          <div className="w-[768px] mx-auto mb-6">
            <h1 className="text-2xl font-bold text-[#5F4050]">
              DocPublisher
            </h1>

            <p className="text-gray-600">
              Generate and publish your documentation
            </p>
          </div>

          <div className="w-[768px] mx-auto bg-white rounded-xl border border-gray-200 shadow p-8">

            <h2 className="text-lg font-medium mb-6">
              Add details to proceed with DocPublisher
            </h2>

            <div className="space-y-6">

              <div>
                <label className="text-sm font-medium">
                  Select Project <span className="text-red-500">*</span>
                </label>

                <select
                  value={selectedProject}
                  onChange={(e) => setSelectedProject(e.target.value)}
                  className="w-full mt-2 h-[50px] border rounded-xl px-4"
                >
                  <option>DOCX-Migration</option>
                  <option>HTML-Migration</option>
                  <option>MD-Migration</option>
                  <option>New-Docs-Migration</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium">
                  Select Branch <span className="text-red-500">*</span>
                </label>

                <select
                  value={selectedBranch}
                  onChange={(e) => setSelectedBranch(e.target.value)}
                  className="w-full mt-2 h-[50px] border rounded-xl px-4"
                >
                  <option>main</option>
                  <option>develop</option>
                  <option>feature/new-layout</option>
                  <option>Printer</option>
                </select>
              </div>

              <button
                onClick={() => setStep("modal")}
                className="px-8 h-12 bg-[#F5E6ED] rounded-xl text-[#314158]"
              >
                Next →
              </button>

            </div>
          </div>
        </>
      )}

      {/* ================= MODAL ================= */}
      {step === "modal" && (

        <div className="fixed inset-0 flex items-center justify-center bg-black/40">

          <div className="w-[512px] bg-white rounded-lg shadow-xl p-8 flex flex-col gap-8">

            <h2 className="text-[20px] font-medium text-center text-[#0F172B]">
              Do you want to style your document before publishing?
            </h2>

            <div className="flex justify-center gap-4">

              <button
                onClick={() => setStep("publisher")}
                className="w-[261px] h-[70px] border rounded text-[#314158]"
              >
                No! Continue with DocPublisher
              </button>

              <button
                onClick={() => setStep("styler")}
                className="w-[170px] h-[70px] bg-[#5F4050] text-white rounded"
              >
                Yes! Let's proceed
              </button>

            </div>

          </div>
        </div>
      )}

      {/* ================= PUBLISHER ================= */}
      {step === "publisher" && (

        <div className="w-[703px] mx-auto">

          <h1 className="text-[24px] font-bold text-[#5F4050] mb-6">
            HTML Migration <span className="text-sm">main</span>
            <br />
            DITA-OT Version: 3.6.1
          </h1>

          <div className="bg-white border rounded-xl shadow p-8 space-y-6">

            <div>
              <label className="font-semibold text-sm">Title *</label>
              <input className="w-full border rounded-lg h-[50px] px-4 mt-2" />
            </div>

            <div>
              <label className="font-semibold text-sm">
                Input Source Ditamap *
              </label>
              <input className="w-full border rounded-lg h-[50px] px-4 mt-2" />
            </div>

            <div>
              <label className="font-semibold text-sm">
                Output Format *
              </label>

              <div className="flex gap-10 mt-3">
                <label className="flex items-center gap-2">
                  <input type="radio" defaultChecked />
                  HTML
                </label>

                <label className="flex items-center gap-2">
                  <input type="radio" />
                  PDF
                </label>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-6">

              <button
                onClick={() => setStep("form")}
                className="border px-6 py-2 rounded"
              >
                Cancel
              </button>

              <button
                onClick={handlePublish}
                className="bg-[#5F4050] text-white px-6 py-2 rounded"
              >
                Publish
              </button>

            </div>

          </div>
        </div>
      )}

      {/* ================= STYLER ================= */}
      {step === "styler" && (
        <div className="flex justify-center">
          {stylerTab === "html" && (
            <HtmlStyler
              onNext={() => setStylerTab("pdf")}
              onReset={handleReset}
              onSubmit={handleSubmit}
              onTabSwitch={(tab) => setStylerTab(tab)}
            />
          )}
          
          {stylerTab === "pdf" && (
            <PdfStyler
              onPrevious={() => setStylerTab("html")}
              onReset={handleReset}
              onSubmit={handleSubmit}
              onTabSwitch={(tab) => setStylerTab(tab)}
            />
          )}
        </div>
      )}

    </div>
  );
}