import { LayoutDashboard, FileCog, FolderOpen, FileEdit, Send } from 'lucide-react';

export const NAV_ITEMS = [
  { path: '/', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/doc-migration', label: 'DocMigration', icon: FileCog },
  { path: '/doc-manager', label: 'DocManager', icon: FolderOpen },
  { path: '/doc-editor', label: 'DocEditor', icon: FileEdit },
  { path: '/doc-publisher', label: 'DocPublisher', icon: Send }
];
