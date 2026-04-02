import { useState } from "react";
import HtmlStyler from "./HtmlStyler";
import PdfStyler from "./PdfStyler";
import Button from "../common/Button";
import Select from "../common/Select";
import Input from "../common/Input";
import RadioGroup from "../common/RadioGroup";
import FormField from "../common/FormField";
import StatusModal from "../common/StatusModal";
import PageHeader from "../common/PageHeader";
import PageContainer from "../common/PageContainer";
import { PROJECTS } from "../../constants/projects";
import { GENERAL_BRANCHES } from "../../constants/branches";

type StepType = "form" | "modal" | "publisher" | "styler";
type StylerTab = "html" | "pdf";

export default function DocPublisher(): JSX.Element {

  const [selectedProject, setSelectedProject] = useState<string>("New-Docs-Migration");
  const [selectedBranch, setSelectedBranch] = useState<string>("Printer");
  const [title, setTitle] = useState<string>("");
  const [ditamap, setDitamap] = useState<string>("");
  const [outputFormat, setOutputFormat] = useState<string>("html");

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
              <FormField label="Select Project" required>
                <Select
                  value={selectedProject}
                  onChange={setSelectedProject}
                  options={PROJECTS}
                  width="w-full"
                  height="h-[50px]"
                  className="rounded-xl"
                />
              </FormField>

              <FormField label="Select Branch" required>
                <Select
                  value={selectedBranch}
                  onChange={setSelectedBranch}
                  options={GENERAL_BRANCHES}
                  width="w-full"
                  height="h-[50px]"
                  className="rounded-xl"
                />
              </FormField>

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
            <Input
              label="Title"
              required
              value={title}
              onChange={setTitle}
              height="h-[50px]"
              className="rounded-lg"
            />

            <Input
              label="Input Source Ditamap"
              required
              value={ditamap}
              onChange={setDitamap}
              height="h-[50px]"
              className="rounded-lg"
            />

            <RadioGroup
              label="Output Format"
              required
              name="outputFormat"
              options={[
                { value: 'html', label: 'HTML' },
                { value: 'pdf', label: 'PDF' }
              ]}
              value={outputFormat}
              onChange={setOutputFormat}
            />

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