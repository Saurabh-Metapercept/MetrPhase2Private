import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronRight, File, Folder, GitCompare, Download, ArrowLeft } from 'lucide-react';
import Button from '../common/Button';
import Select from '../common/Select';

const projectData: any = {
  html: {
    name: 'HTML-Migration',
    files: {
      css: ['common-extended.css', 'commonltr.css', 'commonrtl.css', 'custom.css'],
      js: ['commonJS.js', 'script.js'],
      root: ['ditasearch.js', 'index.html', 'index.pdf']
    },
    preview: `<!DOCTYPE html>
SYSTEM "about:legacy-compat">
<html lang="en" >
<head>
  <meta http-equiv= "Content-Type" content= "text/html; charset=UTF-8" >
  <meta charset= "UTF-8" >
  <meta name="copyright" content= "(C) Copyright 2025" >
  <meta name="generator" content= "DITA-OT" >
  <link rel= "stylesheet" type= "text/css" href= "css/commonltr.css" >
  <link rel= "stylesheet" type= "text/css" href= >
  <link rel= "stylesheet" type= "text/css" >`
  },
  docx: {
    name: 'DOCX-Migration',
    files: {
      css: ['common-extended.css', 'commonltr.css'],
      js: ['commonJS.js'],
      root: ['index.html', 'index.pdf']
    },
    preview: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>DOCX Migration</title>
</head>`
  },
  md: {
    name: 'MD-Migration',
    files: {
      css: ['common.css'],
      js: ['script.js'],
      root: ['index.html']
    },
    preview: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>MD Migration</title>
</head>`
  }
};

export default function DocManagerDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [expandedFolders, setExpandedFolders] = useState<string[]>(['css', 'js']);
  const [selectedFile, setSelectedFile] = useState('index.html');

  const project = projectData[projectId || 'html'];

  const toggleFolder = (folder: string) => {
    setExpandedFolders(prev => 
      prev.includes(folder) ? prev.filter(f => f !== folder) : [...prev, folder]
    );
  };

  return (
    <div className="px-4 sm:px-10 lg:px-40 py-6 lg:py-11">
      <div className="flex items-center gap-3 mb-6">
        <button onClick={() => navigate('/doc-manager')} className="w-10 h-10 min-w-[44px] min-h-[44px] flex items-center justify-center hover:bg-gray-100 rounded-lg">
          <ArrowLeft size={20} className="text-[#5F4050]" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-[#0F172A]">DocManager</h1>
          <p className="text-sm text-[#64748B]">DITA-OT Version: 3.6.1</p>
        </div>
      </div>

<<<<<<< HEAD
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <div className="relative w-full sm:w-auto">
          <select className="w-full sm:w-[200px] h-10 px-4 pr-10 bg-white border border-[#E2E8F0] rounded-lg text-[#64748B] appearance-none cursor-pointer focus:outline-none focus:border-[#5F4050]">
            <option>Choose a branch</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#64748B] pointer-events-none" size={16} />
        </div>
        <button className="text-[#5F4050] text-sm font-medium min-h-[44px]">+ Create new branch</button>
        <div className="flex flex-wrap gap-3 sm:ml-auto">
          <button 
            onClick={() => navigate('/compare-branches')}
            className="px-4 py-2 bg-[#FFF0F7] text-[#5F4050] rounded-lg flex items-center gap-2 hover:bg-[#FFE5F3] min-h-[44px]"
=======
      <div className="flex items-center gap-4 mb-6">
        <Select
          value=""
          onChange={() => {}}
          options={[{ value: '', label: 'Choose a branch' }]}
          width="w-[200px]"
          height="h-10"
        />
        <button className="text-[#5F4050] text-sm font-medium">+ Create new branch</button>
        <div className="ml-auto flex gap-3">
          <Button
            variant="outline"
            size="custom"
            className="px-4 py-2 rounded-lg gap-2"
            onClick={() => navigate('/compare-branches')}
            icon={<GitCompare size={16} />}
>>>>>>> upstream/krishnab1
          >
            Compare branches
<<<<<<< HEAD
          </button>
          <button className="px-4 py-2 bg-[#FFF0F7] text-[#5F4050] rounded-lg flex items-center gap-2 hover:bg-[#FFE5F3] min-h-[44px]">
            <Download size={16} />
=======
          </Button>
          <Button
            variant="outline"
            size="custom"
            className="px-4 py-2 rounded-lg gap-2"
            icon={<Download size={16} />}
          >
>>>>>>> upstream/krishnab1
            Download Source
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#FFF0F7] rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <Folder className="text-[#5F4050]" size={20} />
            <h2 className="text-lg font-bold text-[#0F172A]">Source Files</h2>
          </div>
          
          <div className="space-y-1">
            <div className="flex items-center gap-2 py-2 px-3 hover:bg-white/50 rounded-lg cursor-pointer">
              <ChevronDown size={16} className="text-[#64748B]" />
              <Folder size={16} className="text-[#5F4050]" />
              <span className="text-sm text-[#0F172A] font-medium">{project.name}</span>
            </div>

            <div className="ml-4">
              <div className="flex items-center gap-2 py-2 px-3 hover:bg-white/50 rounded-lg cursor-pointer" onClick={() => toggleFolder('css')}>
                {expandedFolders.includes('css') ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                <Folder size={16} className="text-[#5F4050]" />
                <span className="text-sm text-[#0F172A]">css</span>
              </div>
              {expandedFolders.includes('css') && (
                <div className="ml-8 space-y-1">
                  {project.files.css.map((file: string) => (
                    <div key={file} className="flex items-center gap-2 py-1.5 px-3 hover:bg-white/50 rounded-lg cursor-pointer" onClick={() => setSelectedFile(file)}>
                      <File size={14} className="text-[#64748B]" />
                      <span className="text-sm text-[#64748B]">{file}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="ml-4">
              {project.files.root.map((file: string) => (
                <div key={file} className={`flex items-center gap-2 py-2 px-3 rounded-lg cursor-pointer ${selectedFile === file ? 'bg-white' : 'hover:bg-white/50'}`} onClick={() => setSelectedFile(file)}>
                  <File size={14} className="text-[#64748B]" />
                  <span className="text-sm text-[#0F172A] font-medium">{file}</span>
                </div>
              ))}
            </div>

            <div className="ml-4">
              <div className="flex items-center gap-2 py-2 px-3 hover:bg-white/50 rounded-lg cursor-pointer" onClick={() => toggleFolder('js')}>
                {expandedFolders.includes('js') ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                <Folder size={16} className="text-[#5F4050]" />
                <span className="text-sm text-[#0F172A]">js</span>
              </div>
              {expandedFolders.includes('js') && (
                <div className="ml-8 space-y-1">
                  {project.files.js.map((file: string) => (
                    <div key={file} className="flex items-center gap-2 py-1.5 px-3 hover:bg-white/50 rounded-lg cursor-pointer" onClick={() => setSelectedFile(file)}>
                      <File size={14} className="text-[#64748B]" />
                      <span className="text-sm text-[#64748B]">{file}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="bg-[#FFF0F7] rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <File className="text-[#5F4050]" size={20} />
            <h2 className="text-lg font-bold text-[#0F172A]">Content Preview</h2>
          </div>
          
          <div className="bg-white rounded-lg p-4 font-mono text-xs overflow-auto max-h-[500px]">
            <pre className="text-[#0F172A] whitespace-pre-wrap break-words">
              {project.preview}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
