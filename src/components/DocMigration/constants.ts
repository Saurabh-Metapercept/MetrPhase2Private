import { CheckCircle, Upload, FileCheck, Zap, CheckCircle2, Download } from 'lucide-react';

export const migrationOptions = [
  'DOCX to DITA',
  'HTML to DITA',
  'MD or MDX to DITA'
];

export const stages = [
  { id: 1, label: 'Input Source Type', icon: CheckCircle },
  { id: 2, label: 'Upload Files', icon: Upload },
  { id: 3, label: 'Pre-flight Check', icon: FileCheck },
  { id: 4, label: 'Transformation', icon: Zap },
  { id: 5, label: 'Post-flight Check', icon: CheckCircle2 },
  { id: 6, label: 'Download', icon: Download }
];
