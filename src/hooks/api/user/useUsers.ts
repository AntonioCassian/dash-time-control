import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { User } from "@/types/User";
import { UserApi } from "@/services/user";

export const useUsers = () => {
  return useQuery<User[], Error>({
    queryKey: ["users"],
    queryFn: async () => {
      const users = await UserApi.getAll();
      return users;
    },
  });
};


export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation<User, Error, User>({
    mutationFn: async (newUser: User) => {
      return await UserApi.create(newUser);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};


export const useUserById = (id: number) => {
  return useQuery<User, Error>({
    queryKey: ["user", id],
    queryFn: async () => {
      return await UserApi.getById(id);
    },
  });
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation<User, Error, { id: number; data: Partial<User> }>({
    mutationFn: async ({ id, data }) => {
      return await UserApi.update(id, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, number>({
    mutationFn: async (id: number) => {
      return await UserApi.delete(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};