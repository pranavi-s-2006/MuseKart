const API_BASE_URL = 'http://localhost:5000/api';

// Auth API calls
export const authAPI = {
  login: async (email, password) => {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    return response.json();
  },
  
  register: async (email, password) => {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    return response.json();
  }
};

// Albums API calls
export const albumsAPI = {
  getAll: async (language = '', genre = '') => {
    const params = new URLSearchParams();
    if (language) params.append('language', language);
    if (genre) params.append('genre', genre);
    
    const response = await fetch(`${API_BASE_URL}/albums?${params}`);
    return response.json();
  },
  
  getById: async (id) => {
    const response = await fetch(`${API_BASE_URL}/albums/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  },
  
  create: async (albumData, token) => {
    const response = await fetch(`${API_BASE_URL}/albums`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(albumData)
    });
    return response.json();
  },
  
  delete: async (id, token) => {
    const response = await fetch(`${API_BASE_URL}/albums/${id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${token}` }
    });
    return response.json();
  }
};

// Orders API calls
export const ordersAPI = {
  create: async (orderData, token) => {
    const response = await fetch(`${API_BASE_URL}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(orderData)
    });
    return response.json();
  },
  
  getMyOrders: async (token) => {
    const response = await fetch(`${API_BASE_URL}/orders/myorders`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    return response.json();
  }
};