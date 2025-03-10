
// This file provides mock API responses for GitHub Pages deployment
// where the backend server isn't available

const MOCK_API_ENABLED = import.meta.env.MODE === 'github' || 
  window.location.hostname.includes('github.io');

export async function fetchWithFallback(url, options = {}) {
  // If we're on GitHub Pages, return mock data
  if (MOCK_API_ENABLED) {
    console.log(`Using mock data for: ${url}`);
    return mockResponse(url);
  }
  
  // Otherwise, make the actual API call
  try {
    const response = await fetch(url, options);
    return response;
  } catch (error) {
    console.error('API fetch failed:', error);
    // Fallback to mock data if fetch fails
    return mockResponse(url);
  }
}

function mockResponse(url) {
  // Add mock responses based on URL patterns
  if (url.includes('/api/health')) {
    return createMockResponse({ status: 'ok' });
  }
  
  // Add more mock endpoints as needed
  
  // Default response
  return createMockResponse({ error: 'Not found' }, 404);
}

function createMockResponse(data, status = 200) {
  return {
    ok: status >= 200 && status < 300,
    status,
    json: async () => data,
    text: async () => JSON.stringify(data),
  };
}
