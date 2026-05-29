import api from '../lib/api';

export const createFood = (formData) =>
  api.post('/food', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

export const getFoodItems = () => api.get('/food');

export const getPartnerProfile = (partnerId) => api.get(`/food/partner/${partnerId}`);
