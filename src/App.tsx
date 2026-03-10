import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Dashboard from './components/Dashboard/Dashboard'
import DocMigration from './components/DocMigration/DocMigration'
import DocManager from './components/DocManager/DocManager'
import DocManagerDetail from './components/DocManager/DocManagerDetail'
import DocEditor from './components/DocEditor/DocEditor'
import DocPublisher from './components/DocPublisher/DocPublisher'

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/doc-migration" element={<DocMigration />} />
          <Route path="/doc-manager" element={<DocManager />} />
          <Route path="/doc-manager/:projectId" element={<DocManagerDetail />} />
          <Route path="/doc-editor" element={<DocEditor />} />
          <Route path="/doc-publisher" element={<DocPublisher />} />
        </Routes>
      </Header>
    </BrowserRouter>
  )
}

export default App
