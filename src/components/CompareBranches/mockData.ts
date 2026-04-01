export const mockFiles = [
  { path: 'src/index.ts', additions: 5, deletions: 2 },
  { path: 'src/utils.ts', additions: 3, deletions: 1 },
];

export function generateDiffContent() {
  return [
    { type: 'normal' as const, lineNum: 1, content: 'const x = 1;' },
    { type: 'remove' as const, lineNum: 2, content: 'const y = 2;' },
    { type: 'add' as const, lineNum: 2, content: 'const y = 42;' },
    { type: 'normal' as const, lineNum: 3, content: 'export { x, y };' },
  ];
}
