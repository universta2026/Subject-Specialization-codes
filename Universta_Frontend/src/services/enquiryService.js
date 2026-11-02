import { apiRequest } from './api';

export async function submitEnquiry(data) {
  try {
    return await apiRequest('/enquiries', {
      method: 'POST',
      body: JSON.stringify(data)
    });
  } catch (error) {
    // Graceful fallback for design/dev phase: persist to localStorage
    const saved = JSON.parse(localStorage.getItem('universta_enquiries') || '[]');
    const newEntry = { ...data, id: Date.now(), createdAt: new Date().toISOString() };
    saved.push(newEntry);
    localStorage.setItem('universta_enquiries', JSON.stringify(saved));
    return { success: true, fallback: true, data: newEntry };
  }
}

