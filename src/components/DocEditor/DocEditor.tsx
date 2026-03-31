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
        description="Edit and release your documentation using DocEditor" 
      />

      <div className="bg-white border border-[#E2E8F0] rounded-lg shadow-sm max-w-[820px] mx-auto px-14 py-10">

        <h2 className="text-[16px] font-normal text-[#1E293B] mb-6">
          Add details to proceed with DocEditor
        </h2>

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

        <div className="flex justify-center items-center gap-4 mt-10">
          <Button
            variant="primary"
            size="custom"
            className="px-7 h-[42px]"
            onClick={() => setShowEditor(true)}
          >
            Open with default editor
          </Button>

          <Button
            variant="secondary"
            size="custom"
            className="px-7 h-[42px] gap-2"
            icon={<img src={oxygenXmlIcon} alt="OxygenXML" className="w-5 h-5" />}
          >
            Open with OxygenXML
          </Button>
        </div>
      </div>
    </PageContainer>
  );
}
