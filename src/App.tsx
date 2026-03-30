import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header/Header'
import Dashboard from './components/Dashboard/Dashboard'
import DocMigration from './components/DocMigration/DocMigration'
import DocManager from './components/DocManager/DocManager'
import DocManagerDetail from './components/DocManager/DocManagerDetail'
import DocEditor from './components/DocEditor/DocEditor'
import DocPublisher from './components/DocPublisher/DocPublisher'
import CompareBranches from './components/CompareBranches/CompareBranches'
// import Login from './components/Login/Login'
// import AuthCallback from './components/AuthCallback/AuthCallback'

// function RequireAuth({ children }: { children: React.ReactNode }) {
//   const token = localStorage.getItem('github_token')
//   return token ? <>{children}</> : <Navigate to="/login" replace />
// }

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/auth/github/callback" element={<AuthCallback />} /> */}
        <Route
          path="/*"
          element={
            // <RequireAuth>
            <Header>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/doc-migration" element={<DocMigration />} />
                <Route path="/doc-manager" element={<DocManager />} />
                <Route path="/doc-manager/:projectId" element={<DocManagerDetail />} />
                <Route path="/doc-editor" element={<DocEditor />} />
                <Route path="/doc-publisher" element={<DocPublisher />} />
                <Route path="/compare-branches" element={<CompareBranches />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Header>
            // </RequireAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
