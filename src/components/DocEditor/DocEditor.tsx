import { useState } from "react";
import DefaultEditor from "./DefaultEditor";
import Button from "../common/Button";
import Input from "../common/Input";
import PageHeader from "../common/PageHeader";
import PageContainer from "../common/PageContainer";
import oxygenXmlIcon from "../../assets/Oxygen-XML-logo.svg";

export default function DocEditor(): JSX.Element {
  const [selectedProject, setSelectedProject] = useState<string>("HTML-Migration");
  const [selectedBranch, setSelectedBranch] = useState<string>("main");
  const [showEditor, setShowEditor] = useState<boolean>(false);

  if (showEditor) {
    return <DefaultEditor />;
  }

  return (
    <PageContainer>
      <PageHeader
        title="DocEditor"
        description="Edit and publish your documentation using DocEditor"
      />

      <div className="bg-white border border-[#E5E7EB] rounded-lg shadow-sm max-w-[820px] mx-auto px-6 sm:px-14 py-8 sm:py-10">

        <p className="text-sm text-[#364153] mb-5">
          Add details to proceed with DocEditor
        </p>

        <div className="flex flex-col gap-4 mb-6">
          <Input
            label="Select Project"
            required
            value={selectedProject}
            onChange={setSelectedProject}
          />

          <Input
            label="Select Branch"
            required
            value={selectedBranch}
            onChange={setSelectedBranch}
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-end items-center gap-3">
          <Button
            variant="primary"
            size="custom"
            className="w-full sm:w-[185px] h-[44px]"
            onClick={() => setShowEditor(true)}
          >
            Open with default editor
          </Button>

          <Button
            variant="secondary"
            size="custom"
            className="w-full sm:w-auto h-[44px] px-5 gap-2"
            icon={<img src={oxygenXmlIcon} alt="OxygenXML" className="w-5 h-5" />}
          >
            Open with OxygenXML Web Author
          </Button>
        </div>

      </div>
    </PageContainer>
  );
}
