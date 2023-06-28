import axios from 'axios';
import queryString from 'query-string';
import {
  LoyaltyProgramManagerInterface,
  LoyaltyProgramManagerGetQueryInterface,
} from 'interfaces/loyalty-program-manager';
import { GetQueryInterface } from '../../interfaces';

export const getLoyaltyProgramManagers = async (query?: LoyaltyProgramManagerGetQueryInterface) => {
  const response = await axios.get(`/api/loyalty-program-managers${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createLoyaltyProgramManager = async (loyaltyProgramManager: LoyaltyProgramManagerInterface) => {
  const response = await axios.post('/api/loyalty-program-managers', loyaltyProgramManager);
  return response.data;
};

export const updateLoyaltyProgramManagerById = async (
  id: string,
  loyaltyProgramManager: LoyaltyProgramManagerInterface,
) => {
  const response = await axios.put(`/api/loyalty-program-managers/${id}`, loyaltyProgramManager);
  return response.data;
};

export const getLoyaltyProgramManagerById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(
    `/api/loyalty-program-managers/${id}${query ? `?${queryString.stringify(query)}` : ''}`,
  );
  return response.data;
};

export const deleteLoyaltyProgramManagerById = async (id: string) => {
  const response = await axios.delete(`/api/loyalty-program-managers/${id}`);
  return response.data;
};
