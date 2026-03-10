import { useState } from 'react';

type PdfSection = 'frontpage' | 'basecolor' | 'headerfooter';

interface PdfStylerProps {
  onPrevious?: () => void;
  onNext?: () => void;
  onReset?: () => void;
  onSubmit?: () => void;
  onTabSwitch?: (tab: 'html') => void;
}

export default function PdfStyler({ onPrevious, onNext, onReset, onSubmit, onTabSwitch }: PdfStylerProps) {
  const [activeSection, setActiveSection] = useState<PdfSection>('frontpage');
  const [logoFile, setLogoFile] = useState<string>('no file chosen');
  const [imageFile, setImageFile] = useState<string>('no file chosen');
  const [headerImageFile, setHeaderImageFile] = useState<string>('no file chosen');
  const [companyName, setCompanyName] = useState<string>('');

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setLogoFile(file ? file.name : 'no file chosen');
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setImageFile(file ? file.name : 'no file chosen');
  };

  const handleHeaderImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setHeaderImageFile(file ? file.name : 'no file chosen');
  };

  return (
    <div className="flex flex-col bg-white border border-[#E2E8F0] rounded shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] w-[1103px] h-[600px]">
      
      {/* Tab Header */}
      <div className="flex border-b border-[#E2E8F0] h-[53px]">
        <div className="relative w-[550.5px] h-[52px] flex items-center justify-center cursor-pointer" onClick={() => onTabSwitch?.('html')}>
          <span className="font-inter font-medium text-sm leading-[150%] text-center text-[#45556C] hover:text-[#5F4050]">
            HTML Styler
          </span>
        </div>
        <div className="relative w-[550.5px] h-[52px]">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-inter font-medium text-sm leading-[150%] text-center text-[#5F4050]">
              PDF Styler
            </span>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#5F4050]"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1">
        
        {/* Sidebar */}
        <div className="flex flex-col w-[256px] border-r border-[#E2E8F0] p-6 gap-4">
          <h3 className="font-inter font-bold text-xs leading-[150%] uppercase text-[#0F172B] mb-2">
            PDF STYLER
          </h3>
          
          <div className="flex flex-col gap-1">
            <button
              onClick={() => setActiveSection('frontpage')}
              className={`flex items-center w-full h-9 px-3 rounded font-inter font-medium text-sm leading-[150%] text-center ${
                activeSection === 'frontpage' 
                  ? 'bg-[#F5E6ED] text-[#5F4050]' 
                  : 'text-[#45556C]'
              }`}
            >
              <svg className="w-4 h-4 mr-3" viewBox="0 0 16 16">
                <path d="M2.67 1.33h10.67v1.33H2.67V1.33zm6.67 1.33h2.67v6.67H9.33V2.67zM5.33 6h2.67v2.67H5.33V6zm0 2.67h5.33v1.33H5.33V8.67zm0 1.33h5.33v1.33H5.33V10z" 
                  stroke={activeSection === 'frontpage' ? '#5F4050' : '#45556C'} 
                  strokeWidth="1.33" 
                  fill="none"
                />
              </svg>
              Front Page
            </button>
            
            <button
              onClick={() => setActiveSection('basecolor')}
              className={`flex items-center w-full h-9 px-3 rounded font-inter font-medium text-sm leading-[150%] text-center ${
                activeSection === 'basecolor' 
                  ? 'bg-[#F5E6ED] text-[#5F4050]' 
                  : 'text-[#45556C]'
              }`}
            >
              <svg className="w-4 h-4 mr-3" viewBox="0 0 16 16">
                <rect x="2" y="2" width="12" height="12" 
                  stroke={activeSection === 'basecolor' ? '#5F4050' : '#45556C'} 
                  strokeWidth="1.33" 
                  fill="none"
                />
                <rect x="2" y="6" width="12" height="4" 
                  stroke={activeSection === 'basecolor' ? '#5F4050' : '#45556C'} 
                  strokeWidth="1.33" 
                  fill="none"
                />
              </svg>
              Base Color
            </button>

            <button
              onClick={() => setActiveSection('headerfooter')}
              className={`flex items-center w-full h-9 px-3 rounded font-inter font-medium text-sm leading-[150%] text-center ${
                activeSection === 'headerfooter' 
                  ? 'bg-[#F5E6ED] text-[#5F4050]' 
                  : 'text-[#45556C]'
              }`}
            >
              <svg className="w-4 h-4 mr-3" viewBox="0 0 16 16">
                <path d="M2 2h12v2H2V2zm0 6h12v2H2V8z" 
                  stroke={activeSection === 'headerfooter' ? '#5F4050' : '#45556C'} 
                  strokeWidth="1.33" 
                  fill="none"
                />
              </svg>
              Header & Footer
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-8">
          
          {activeSection === 'frontpage' && (
            <div className="w-[781px]">
              <h2 className="font-inter font-bold text-base leading-[150%] uppercase text-[#1D293D] mb-4">
                FRONT PAGE
              </h2>
              <p className="font-inter font-normal text-sm leading-[150%] text-center text-[#45556C] mb-8">
                You can use these fields to design the technical manual's front cover page.
              </p>
              
              <div className="space-y-8">
                {/* Cover page Logo */}
                <div>
                  <h4 className="font-inter font-bold text-sm leading-[150%] text-[#1C398E] mb-4">
                    Cover page Logo
                  </h4>
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-2">
                      <label className="font-inter font-medium text-sm leading-[150%] text-[#314158]">
                        Logo
                      </label>
                      <div className="flex items-center gap-2">
                        <label className="flex items-center justify-center w-[93px] h-[26px] bg-[#F1F5F9] border border-[#CAD5E2] rounded cursor-pointer">
                          <span className="font-inter font-medium text-xs leading-4 text-[#314158]">
                            Choose File
                          </span>
                          <input 
                            type="file" 
                            className="hidden" 
                            onChange={handleLogoChange}
                            accept="image/*"
                          />
                        </label>
                        <span className="font-inter font-normal italic text-xs leading-[150%] text-[#62748E]">
                          {logoFile}
                        </span>
                      </div>
                    </div>
                    <span className="font-inter font-normal text-xs leading-4 text-[#62748E]">
                      Logo resolution must be 150×150 pixels.
                    </span>
                  </div>
                </div>

                {/* Cover page Image */}
                <div>
                  <h4 className="font-inter font-bold text-sm leading-[150%] text-[#1C398E] mb-4">
                    Cover page Image
                  </h4>
                  <div className="flex flex-col gap-2">
                    <label className="font-inter font-medium text-sm leading-[150%] text-[#314158]">
                      Image
                    </label>
                    <div className="flex items-center gap-2">
                      <label className="flex items-center justify-center w-[93px] h-[26px] bg-[#F1F5F9] border border-[#CAD5E2] rounded cursor-pointer">
                        <span className="font-inter font-medium text-xs leading-[150%] text-[#314158]">
                          Choose File
                        </span>
                        <input 
                          type="file" 
                          className="hidden" 
                          onChange={handleImageChange}
                          accept="image/*"
                        />
                      </label>
                      <span className="font-inter font-normal italic text-xs leading-[150%] text-[#62748E]">
                        {imageFile}
                      </span>
                    </div>
                    <p className="font-inter font-normal text-xs leading-[150%] text-[#62748E]">
                      Image resolution must be either 1920×1080, 2100×2970, or 1080×1920 pixels.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'basecolor' && (
            <div className="w-[781px]">
              <h2 className="font-inter font-bold text-base leading-[150%] uppercase text-[#1D293D] mb-4">
                BASE COLOR
              </h2>
              <p className="font-inter font-normal text-sm leading-[150%] text-center text-[#45556C] mb-8">
                You can use these fields to design the technical manual's base color.
              </p>
              
              <div>
                <h4 className="font-inter font-bold text-sm leading-[150%] text-[#1C398E] mb-4">
                  Base color
                </h4>
                <label className="font-inter font-medium text-sm leading-[150%] text-[#314158] mb-4 block">
                  Select base color
                </label>
                <div className="w-[448px] h-8 bg-black rounded-md"></div>
              </div>
            </div>
          )}

          {activeSection === 'headerfooter' && (
            <div className="w-[781px]">
              <h2 className="font-inter font-bold text-base leading-[150%] uppercase text-[#1D293D] mb-4">
                HEADER/FOOTER
              </h2>
              <p className="font-inter font-normal text-sm leading-5 text-center text-[#45556C] mb-8">
                You can use these fields to design the technical manual's header logo and footer customizations.
              </p>
              
              <div className="space-y-8">
                {/* Header Logo */}
                <div>
                  <h4 className="font-inter font-bold text-sm leading-[150%] text-[#1C398E] mb-4">
                    Header Logo
                  </h4>
                  <div className="flex flex-col gap-2">
                    <label className="font-inter font-medium text-sm leading-[150%] text-[#314158]">
                      Image
                    </label>
                    <div className="flex items-center gap-2">
                      <label className="flex items-center justify-center w-[93px] h-[26px] bg-[#F1F5F9] border border-[#CAD5E2] rounded cursor-pointer">
                        <span className="font-inter font-medium text-xs leading-[150%] text-[#314158]">
                          Choose File
                        </span>
                        <input 
                          type="file" 
                          className="hidden" 
                          onChange={handleHeaderImageChange}
                          accept="image/*"
                        />
                      </label>
                      <span className="font-inter font-normal italic text-xs leading-[150%] text-[#62748E]">
                        {headerImageFile}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div>
                  <h4 className="font-inter font-bold text-sm leading-[150%] text-[#1C398E] mb-4">
                    Footer
                  </h4>
                  <div className="w-[576px]">
                    <label className="font-inter font-medium text-sm leading-[150%] text-[#314158] mb-2 block">
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
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex justify-between items-center mt-[100px] w-[781px]">
            {activeSection === 'frontpage' ? (
              <button
                onClick={onNext}
                className="w-[79px] h-9 bg-[#F5E6ED] rounded font-inter font-medium text-sm leading-[150%] text-center text-[#0F172B]"
              >
                Next
              </button>
            ) : activeSection === 'basecolor' ? (
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveSection('frontpage')}
                  className="w-[107px] h-[38px] bg-white border border-[#E2E8F0] rounded font-inter font-medium text-sm leading-[150%] text-center text-[#314158]"
                >
                  Previous
                </button>
                <button
                  onClick={onNext}
                  className="w-[79px] h-[38px] bg-[#F5E6ED] rounded font-inter font-medium text-sm leading-[150%] text-center text-[#0F172B]"
                >
                  Next
                </button>
              </div>
            ) : (
              <button
                onClick={() => setActiveSection('basecolor')}
                className="w-[107px] h-[38px] bg-white border border-[#E2E8F0] rounded font-inter font-medium text-sm leading-[150%] text-center text-[#314158]"
              >
                Previous
              </button>
            )}
            
            <div className="flex items-center gap-3">
              <button
                onClick={onReset}
                className="w-[87px] h-[38px] bg-white border border-[#E2E8F0] rounded font-inter font-medium text-sm leading-[150%] text-center text-[#314158]"
              >
                Reset
              </button>
              <button
                onClick={onSubmit}
                className="w-[95px] h-9 bg-[#F5E6ED] rounded font-inter font-medium text-sm leading-[150%] text-center text-black"
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