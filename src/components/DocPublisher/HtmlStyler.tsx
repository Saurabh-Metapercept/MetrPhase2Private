import { useState } from 'react';

type StylerSection = 'header' | 'footer';

interface HtmlStylerProps {
  onNext?: () => void;
  onReset?: () => void;
  onSubmit?: () => void;
  onTabSwitch?: (tab: 'pdf') => void;
}

export default function HtmlStyler({ onNext, onReset, onSubmit, onTabSwitch }: HtmlStylerProps) {
  const [activeSection, setActiveSection] = useState<StylerSection>('header');
  const [logoFile, setLogoFile] = useState<string>('no file chosen');
  const [companyName, setCompanyName] = useState<string>('');
  const [companyWebsite, setCompanyWebsite] = useState<string>('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setLogoFile(file ? file.name : 'no file chosen');
  };

  return (
    <div className="flex flex-col bg-white border border-[#E2E8F0] rounded shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] p-1 w-full max-w-[1103px] min-h-[555px]">
      
      {/* Tab Header */}
      <div className="flex border-b border-[#E2E8F0] h-[53px]">
        <div className="relative w-1/2 h-[52px]">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-inter font-medium text-sm leading-[150%] text-center text-[#5F4050]">
              HTML Styler
            </span>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#5F4050]"></div>
        </div>
        <div className="relative w-1/2 h-[52px] flex items-center justify-center cursor-pointer" onClick={() => onTabSwitch?.('pdf')}>
          <span className="font-inter font-medium text-sm leading-[150%] text-center text-[#45556C] hover:text-[#5F4050]">
            PDF Styler
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col sm:flex-row flex-1">
        
        {/* Sidebar */}
        <div className="flex flex-row sm:flex-col w-full sm:w-[200px] lg:w-[256px] border-b sm:border-b-0 sm:border-r border-[#E2E8F0] px-4 sm:p-4 lg:p-6 gap-2 sm:gap-4 py-3 sm:py-4">
          <h3 className="hidden sm:block font-inter font-bold text-xs leading-[150%] uppercase text-[#0F172B] mb-2">
            HTML STYLER
          </h3>
          
          <div className="flex flex-row sm:flex-col gap-1 w-full">
            <button
              onClick={() => setActiveSection('header')}
              className={`flex items-center h-9 px-3 rounded font-inter font-medium text-sm leading-[150%] text-center flex-1 sm:flex-none sm:w-full ${
                activeSection === 'header' 
                  ? 'bg-[#F5E6ED] text-[#5F4050]' 
                  : 'text-[#45556C]'
              }`}
            >
              <svg className="w-4 h-4 mr-2 sm:mr-3 shrink-0" viewBox="0 0 16 16">
                <path 
                  d="M2 2h12v3H2V2zm0 5h5v3H2V7zm7 0h5v3H9V7z" 
                  stroke={activeSection === 'header' ? '#5F4050' : '#45556C'} 
                  strokeWidth="1.33" 
                  fill="none"
                />
              </svg>
              Header
            </button>
            
            <button
              onClick={() => setActiveSection('footer')}
              className={`flex items-center h-9 px-3 rounded font-inter font-medium text-sm leading-[150%] text-center flex-1 sm:flex-none sm:w-full ${
                activeSection === 'footer' 
                  ? 'bg-[#F5E6ED] text-[#5F4050]' 
                  : 'text-[#45556C]'
              }`}
            >
              <svg className="w-4 h-4 mr-2 sm:mr-3 shrink-0" viewBox="0 0 16 16">
                <path 
                  d="M2 2h12v1H2V2zm0 8h12v1H2v-1z" 
                  stroke={activeSection === 'footer' ? '#5F4050' : '#45556C'} 
                  strokeWidth="1.33" 
                  fill="none"
                />
              </svg>
              Footer
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-4 sm:p-6 lg:p-8 min-w-0">
          
          {activeSection === 'header' && (
            <div className="w-full max-w-[781px]">
              <h2 className="font-inter font-bold text-sm leading-[150%] uppercase text-[#0F172B] mb-2">
                HEADER
              </h2>
              <p className="font-inter font-normal text-sm leading-[150%] text-[#62748E] mb-8">
                You can use these fields to design the technical manual's front logo, color shades and title.
              </p>
              
              <div className="space-y-8">
                {/* Logo Section */}
                <div>
                  <h4 className="font-inter font-bold text-sm leading-[150%] text-[#314158] mb-2">
                    Logo
                  </h4>
                  <p className="font-inter font-normal text-sm leading-[150%] text-[#45556C] mb-2">
                    Logo
                  </p>
                  <div className="flex items-center gap-2">
                    <label className="flex items-center justify-center w-[93px] h-[30px] bg-[#F8FAFC] border border-[#CAD5E2] rounded cursor-pointer">
                      <span className="font-inter font-medium text-xs leading-[150%] text-[#314158]">
                        Choose File
                      </span>
                      <input 
                        type="file" 
                        className="hidden" 
                        onChange={handleFileChange}
                        accept="image/*"
                      />
                    </label>
                    <span className="font-inter font-normal text-xs leading-[150%] text-[#62748E]">
                      {logoFile}
                    </span>
                  </div>
                </div>

                {/* Color Shades Section */}
                <div>
                  <h4 className="font-inter font-bold text-sm leading-[150%] text-[#314158] mb-7">
                    Color shades
                  </h4>
                  <div className="w-full max-w-[448px] h-8 bg-black rounded-md"></div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'footer' && (
            <div className="w-full max-w-[781px]">
              <h2 className="font-inter font-bold text-sm leading-[150%] uppercase text-[#0F172B] mb-2">
                FOOTER
              </h2>
              <p className="font-inter font-normal text-sm leading-[150%] text-[#62748E] mb-8">
                You can use these fields to customize the technical manual's footer information.
              </p>
              
              <div className="space-y-4 w-full max-w-[672px]">
                {/* Company Name */}
                <div>
                  <h4 className="font-inter font-bold text-sm leading-[150%] text-[#314158] mb-4">
                    Footer
                  </h4>
                  <label className="font-inter font-normal text-sm leading-[150%] text-[#45556C] mb-1 block">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Enter company name"
                    className="w-full h-[38px] px-3 border border-[#CAD5E2] rounded font-inter font-normal text-sm leading-[150%] text-[rgba(10,10,10,0.5)] placeholder:text-[rgba(10,10,10,0.5)]"
                  />
                </div>

                {/* Company Website */}
                <div>
                  <label className="font-inter font-normal text-sm leading-[150%] text-[#45556C] mb-1 block">
                    Company website
                  </label>
                  <input
                    type="text"
                    value={companyWebsite}
                    onChange={(e) => setCompanyWebsite(e.target.value)}
                    placeholder="Enter company website"
                    className="w-full h-[38px] px-3 border border-[#CAD5E2] rounded font-inter font-normal text-sm leading-[150%] text-[rgba(10,10,10,0.5)] placeholder:text-[rgba(10,10,10,0.5)]"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex justify-between items-center mt-8 sm:mt-[100px] w-full max-w-[781px]">
            {activeSection === 'header' ? (
              <button
                onClick={onNext}
                className="w-[79px] min-h-[44px] bg-[#F5E6ED] rounded font-inter font-medium text-sm leading-[150%] text-center text-black"
              >
                Next
              </button>
            ) : (
              <button
                onClick={() => setActiveSection('header')}
                className="w-[107px] min-h-[44px] bg-white border border-[#E2E8F0] rounded font-inter font-medium text-sm leading-[150%] text-center text-[#314158]"
              >
                Previous
              </button>
            )}
            
            <div className="flex items-center gap-3">
              <button
                onClick={onReset}
                className="w-[87px] min-h-[44px] bg-white border border-[#E2E8F0] rounded font-inter font-medium text-sm leading-[150%] text-center text-[#314158]"
              >
                Reset
              </button>
              <button
                onClick={onSubmit}
                className="w-[95px] min-h-[44px] bg-[#F5E6ED] rounded font-inter font-medium text-sm leading-[150%] text-center text-black"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}