const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

// Generic API call function
async function apiCall<T>(
  endpoint: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
  data?: any
): Promise<T> {
  const config: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (data) {
    config.body = JSON.stringify(data);
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
  
  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`);
  }

  return response.json();
}

// Dashboard APIs
export const dashboardService = {
  getMetrics: () => apiCall('/dashboard/metrics'),
  getActivities: () => apiCall('/dashboard/activities'),
  getReleases: () => apiCall('/dashboard/releases'),
};

// Project APIs
export const projectService = {
  getAllProjects: () => apiCall('/projects'),
  getProjectById: (id: string) => apiCall(`/projects/${id}`),
  createProject: (data: any) => apiCall('/projects', 'POST', data),
  updateProject: (id: string, data: any) => apiCall(`/projects/${id}`, 'PUT', data),
  deleteProject: (id: string) => apiCall(`/projects/${id}`, 'DELETE'),
};

// Document APIs
export const documentService = {
  migrateDocument: (data: any) => apiCall('/documents/migrate', 'POST', data),
  publishDocument: (data: any) => apiCall('/documents/publish', 'POST', data),
  getDocumentContent: (id: string) => apiCall(`/documents/${id}`),
};

export default {
  dashboardService,
  projectService,
  documentService,
};
