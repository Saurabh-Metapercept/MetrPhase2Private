import { useEffect, useRef, useState } from "react";

const OXYGEN_BASE_URL = import.meta.env.VITE_OXYGEN_URL || "http://localhost:8080";
const OXYGEN_EDITOR_PATH = "/oxygen-xml-web-author/app/oxygen.html";
const OXYGEN_PROXY_PATH = "/oxygen-xml-web-author/app/oxygen.html";

interface OxygenEditorProps {
  onBack: () => void;
  githubFileUrl?: string; // e.g. "github://owner/repo/branch/path/to/file.xml"
}

export default function OxygenEditor({ onBack, githubFileUrl }: OxygenEditorProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const oxygenDirectUrl = `${OXYGEN_BASE_URL}${OXYGEN_EDITOR_PATH}`;
  const iframeSrc = githubFileUrl
    ? `${OXYGEN_PROXY_PATH}?url=${encodeURIComponent(githubFileUrl)}`
    : OXYGEN_PROXY_PATH;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (loading) setError(true);
    }, 15000);
    return () => clearTimeout(timer);
  }, [loading]);

  return (
    <div className="flex flex-col h-screen">
      {/* Top bar */}
      <div className="h-[48px] bg-white border-b border-[#E5E7EB] flex items-center px-4 gap-3 shrink-0">
        <button
          onClick={onBack}
          className="flex items-center gap-1 text-sm text-[#5F4050] hover:text-[#4a3040] font-medium"
        >
          ← Back
        </button>
        <span className="text-sm text-[#6A7282]">Oxygen XML Web Author</span>
      </div>

      {/* Iframe area */}
      <div className="flex-1 relative">
        {loading && !error && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10">
            <div className="w-8 h-8 border-4 border-[#5F4050] border-t-transparent rounded-full animate-spin mb-3" />
            <p className="text-sm text-[#6A7282]">Loading Oxygen XML Web Author…</p>
          </div>
        )}

        {error && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10 gap-3">
            <p className="text-[#5F4050] font-medium">Could not connect to Oxygen XML Web Author</p>
            <p className="text-sm text-[#6A7282]">
              Make sure Oxygen XML Web Author server is running at{" "}
              <code className="bg-gray-100 px-1 rounded">{OXYGEN_BASE_URL}</code>
            </p>
            <a
              href={oxygenDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 px-4 py-2 bg-[#5F4050] text-white text-sm rounded hover:bg-[#4a3040]"
            >
              Open in new tab
            </a>
          </div>
        )}

        {!error && (
          <iframe
            ref={iframeRef}
            src={iframeSrc}
            className="w-full h-full border-0"
            title="Oxygen XML Web Author"
            onLoad={() => setLoading(false)}
            onError={() => { setLoading(false); setError(true); }}
            allow="fullscreen"
          />
        )}
      </div>
    </div>
  );
}
