/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "@/lib/axios";
import { User } from "@/types/User";

export const UserApi = {
  create: async (user: User): Promise<User> => {
    try {
      const response = await api.post<User>("/register", user);
      return response.data;
    } catch (err: any) {
      throw new Error(err.response?.data?.message || "Erro ao criar usuário");
    }
  },

  getAll: async (): Promise<User[]> => {
    try {
      const response = await api.get<User[]>("/users");
      return response.data;
    } catch (err: any) {
      throw new Error(err.response?.data?.message || "Erro ao buscar usuários");
    }
  },

  getById: async (id: number): Promise<User> => {
    try {
      const response = await api.get<User>(`/users/${id}`);
      return response.data;
    } catch (err: any) {
      throw new Error(err.response?.data?.message || "Erro ao buscar usuário");
    }
  },

  update: async (id: number, user: Partial<User>): Promise<User> => {
    try {
      const response = await api.put<User>(`/users/${id}`, user);
      return response.data;
    } catch (err: any) {
      throw new Error(err.response?.data?.message || "Erro ao atualizar usuário");
    }
  },

  delete: async (id: number): Promise<void> => {
    try {
      await api.delete(`/users/${id}`);
    } catch (err: any) {
      throw new Error(err.response?.data?.message || "Erro ao deletar usuário");
    }
  },
};