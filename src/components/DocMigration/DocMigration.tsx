import { useState } from 'react';
import MigrationDropdown from './MigrationDropdown';
import PipelineStages from './PipelineStages';
import UploadSection from './UploadSection';
import CompletionView from './CompletionView';
import GitHubCommitCard from './GitHubCommitCard';
import DescriptionModal from './DescriptionModal';
import SuccessModal from './SuccessModal';
import StatusModal from '../common/StatusModal';
import PageHeader from '../common/PageHeader';
import PageContainer from '../common/PageContainer';

export default function DocMigration() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedType, setSelectedType] = useState('DOCX to DITA');
  const [selectedFile, setSelectedFile] = useState<{ name: string; size: string } | null>(null);
  const [policyChecked, setPolicyChecked] = useState(false);
  const [currentStage, setCurrentStage] = useState(2);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [showGithubCommit, setShowGithubCommit] = useState(false);
  const [showDescriptionPopup, setShowDescriptionPopup] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [description, setDescription] = useState('');
  const [selectedProject, setSelectedProject] = useState('New-Docs-Migration');
  const [selectedBranch, setSelectedBranch] = useState('main');
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile({
        name: file.name,
        size: `${(file.size / 1024).toFixed(2)} KB`
      });
    }
  };

  const handleReset = () => {
    setSelectedFile(null);
    setPolicyChecked(false);
  };

  const handleUpload = () => {
    if (!selectedFile) return;
    setIsProcessing(true);
    setCurrentStage(3);

    setTimeout(() => {
      setCurrentStage(4);
      setTimeout(() => {
        setCurrentStage(5);
        setTimeout(() => {
          const hasError = Math.random() < 0.3;

          if (hasError) {
            setIsProcessing(false);
            setErrorMessage('Preflight validation failed. Please check your document format and try again.');
            setShowErrorModal(true);
            setCurrentStage(2);
          } else {
            setCurrentStage(6);
            setIsProcessing(false);
            setIsComplete(true);
          }
        }, 1500);
      }, 1500);
    }, 1500);
  };

  const handleCommit = () => {
    setShowDescriptionPopup(true);
  };

  const handleSubmitDescription = () => {
    setShowDescriptionPopup(false);
    setShowSuccessModal(true);
  };

  return (
    <PageContainer>
      <PageHeader
        title="DocMigration"
        description="Migrate documents efficiently"
      />

      {!showGithubCommit && (
        <>
          <MigrationDropdown
            selectedType={selectedType}
            dropdownOpen={dropdownOpen}
            onToggle={() => setDropdownOpen(!dropdownOpen)}
            onSelect={(type) => {
              setSelectedType(type);
              setDropdownOpen(false);
            }}
          />

          <PipelineStages currentStage={currentStage} />

          {isProcessing && (
            <div className="text-center py-8">
              <p className="text-base text-[#62748E]">Please wait... your conversion is in progress</p>
            </div>
          )}

          {isComplete && <CompletionView onGithubClick={() => setShowGithubCommit(true)} />}

          {!isComplete && !isProcessing && (
            <UploadSection
              selectedFile={selectedFile}
              policyChecked={policyChecked}
              onFileSelect={handleFileSelect}
              onPolicyChange={setPolicyChecked}
              onReset={handleReset}
              onUpload={handleUpload}
            />
          )}
        </>
      )}

      {showGithubCommit && !showDescriptionPopup && !showSuccessModal && (
        <GitHubCommitCard
          selectedProject={selectedProject}
          selectedBranch={selectedBranch}
          onProjectChange={setSelectedProject}
          onBranchChange={setSelectedBranch}
          onCommit={handleCommit}
        />
      )}

      {showDescriptionPopup && (
        <DescriptionModal
          description={description}
          onDescriptionChange={setDescription}
          onCancel={() => setShowDescriptionPopup(false)}
          onSubmit={handleSubmitDescription}
        />
      )}

      {showSuccessModal && (
        <SuccessModal
          onClose={() => {
            setShowSuccessModal(false);
            setShowGithubCommit(false);
          }}
        />
      )}

      {showErrorModal && (
        <StatusModal
          type="error"
          title="Error Occurred"
          message={errorMessage}
          onClose={() => {
            setShowErrorModal(false);
            setSelectedFile(null);
            setPolicyChecked(false);
          }}
        />
      )}
    </PageContainer>
  );
}
