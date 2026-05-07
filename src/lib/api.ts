/**
 * API utility functions for making requests to the backend
 * Uses VITE_API_URL environment variable for the base URL
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || '';

/**
 * Generic fetch wrapper with error handling
 */
async function apiRequest(endpoint: string, options: RequestInit = {}) {
  const url = `${API_BASE_URL}${endpoint}`;

  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      // For frontend-only deployment, show a user-friendly message
      if (!API_BASE_URL || API_BASE_URL.includes('your-backend-url')) {
        throw new Error('Backend service is not configured yet. Please check back later.');
      }
      throw new Error(`API request failed: ${response.status} ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    // Handle network errors or backend unavailability
    if (error instanceof TypeError && error.message.includes('fetch')) {
      throw new Error('Unable to connect to the server. Please check your internet connection.');
    }

    // Re-throw the error so components can handle it
    throw error;
  }
}

/**
 * Authentication API functions
 */
export const authAPI = {
  async login(credentials: { email: string; password: string }) {
    return apiRequest('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  },

  async signup(userData: { fullName: string; email: string; password: string }) {
    return apiRequest('/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  },

  async logout() {
    return apiRequest('/api/auth/logout', {
      method: 'POST',
    });
  },

  async getProfile() {
    return apiRequest('/api/auth/profile');
  },
};

/**
 * Check if backend is available
 */
export async function checkBackendHealth(): Promise<boolean> {
  if (!API_BASE_URL || API_BASE_URL.includes('your-backend-url')) {
    return false;
  }

  try {
    const response = await fetch(`${API_BASE_URL}/health`, {
      method: 'GET',
      signal: AbortSignal.timeout(5000), // 5 second timeout
    });
    return response.ok;
  } catch {
    return false;
  }
}