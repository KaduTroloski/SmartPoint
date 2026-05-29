import { z } from 'zod';

export const loginSchema = z.object({
    email: z
        .string()
        .trim()
        .toLowerCase()
        .email('Digite um e-mail válido'),

    password: z
        .string()
        .min(8, 'Mínimo de 8 caracteres')
        .regex(/[A-Z]/, 'Precisa de letra maiúscula')
        .regex(/[a-z]/, 'Precisa de letra minúscula')
        .regex(/[0-9]/, 'Precisa de número')
        .regex(/[^A-Za-z0-9]/, 'Precisa de caractere especial'),
});