import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Dashboard from './pages/Dashboard'
import DocMigration from './pages/DocMigration'
import DocManager from './pages/DocManager'
import DocEditor from './pages/DocEditor'
import DocPublisher from './pages/DocPublisher'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/doc-migration" element={<DocMigration />} />
          <Route path="/doc-manager" element={<DocManager />} />
          <Route path="/doc-editor" element={<DocEditor />} />
          <Route path="/doc-publisher" element={<DocPublisher />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
