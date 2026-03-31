import { useState } from "react";
import HtmlStyler from "./HtmlStyler";
import PdfStyler from "./PdfStyler";
import Button from "../common/Button";
import StatusModal from "../common/StatusModal";
import PageHeader from "../common/PageHeader";
import PageContainer from "../common/PageContainer";
import { PROJECTS, GENERAL_BRANCHES } from "../../constants/projects";
import { GENERAL_BRANCHES as BRANCHES } from "../../constants/branches";

type StepType = "form" | "modal" | "publisher" | "styler";
type StylerTab = "html" | "pdf";

export default function DocPublisher(): JSX.Element {

  const [selectedProject, setSelectedProject] = useState<string>("New-Docs-Migration");
  const [selectedBranch, setSelectedBranch] = useState<string>("Printer");

  const [step, setStep] = useState<StepType>("form");

  const [stylerTab, setStylerTab] = useState<StylerTab>("html");
  
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [statusType, setStatusType] = useState<'success' | 'error'>('success');

  const handleReset = () => {
    alert("Fields Reset");
  };

  const handleSubmit = () => {
    alert("Styler Submitted");
  };

  const handlePublish = () => {
    setStatusType('success');
    setShowStatusModal(true);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA]">

      {/* ================= FORM PAGE ================= */}
      {step === "form" && (
        <PageContainer>
          <PageHeader 
            title="DocPublisher" 
            description="Generate and publish your documentation" 
          />

          <div className="bg-white rounded-xl border border-gray-200 shadow max-w-[768px] mx-auto p-8">

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

              <Button
                variant="secondary"
                size="custom"
                className="px-8 h-12 rounded-xl"
                onClick={() => setStep("modal")}
              >
                Next →
              </Button>

            </div>
          </div>
        </PageContainer>
      )}

      {/* ================= MODAL ================= */}
      {step === "modal" && (

        <div className="fixed inset-0 flex items-center justify-center bg-black/40">

          <div className="w-[512px] bg-white rounded-lg shadow-xl p-8 flex flex-col gap-8">

            <h2 className="text-[20px] font-medium text-center text-[#0F172B]">
              Do you want to style your document before publishing?
            </h2>

            <div className="flex justify-center gap-4">
              <Button
                variant="ghost"
                size="custom"
                className="w-[261px] h-[70px]"
                onClick={() => setStep("publisher")}
              >
                No! Continue with DocPublisher
              </Button>

              <Button
                variant="primary"
                size="custom"
                className="w-[170px] h-[70px]"
                onClick={() => setStep("styler")}
              >
                Yes! Let's proceed
              </Button>
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
              <Button
                variant="ghost"
                size="custom"
                className="px-6 py-2"
                onClick={() => setStep("form")}
              >
                Cancel
              </Button>

              <Button
                variant="primary"
                size="custom"
                className="px-6 py-2"
                onClick={handlePublish}
              >
                Publish
              </Button>
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

      {showStatusModal && (
        <StatusModal
          type={statusType}
          title={statusType === 'success' ? 'Published Successfully' : 'Error Occurred'}
          message="Your publication has been successfully completed!"
          onClose={() => {
            setShowStatusModal(false);
            if (statusType === 'success') {
              setStep('form');
            }
          }}
        />
      )}

    </div>
  );
}