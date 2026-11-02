// API Client Configuration
// Points to FastAPI backend (defaults to http://localhost:8000/api or configurable via VITE_API_URL)

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

export async function apiRequest(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers
    },
    ...options
  };

  try {
    const response = await fetch(url, config);
    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.warn(`[API] Request to ${endpoint} failed, falling back to mock:`, error.message);
    throw error;
  }
}

export { API_BASE_URL };

