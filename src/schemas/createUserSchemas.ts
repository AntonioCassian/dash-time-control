import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  type: z.string().min(1, "Tipo é obrigatório"),
  role: z.string().min(1, "Cargo é obrigatório"),
  department: z.string().min(1, "Departamento é obrigatório"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(1, "Telefone é obrigatório"),
  location: z.string().min(1, "Localização é obrigatória"),
  shift: z.enum(["morning", "afternoon", "night"], "Escolha um turno"),
  password: z.string().optional(),
  password_confirmation: z.string().optional(),
}).refine(data => data.password === data.password_confirmation, {
  message: "As senhas não coincidem",
  path: ["password_confirmation"], // campo que recebe o erro
});

export type CreateUserFormData = z.infer<typeof createUserSchema>;