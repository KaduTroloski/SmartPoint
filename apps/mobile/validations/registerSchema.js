import { z } from 'zod';

export const registerSchema = z
    .object({
        name: z
            .string()
            .trim()
            .min(3, 'Nome muito curto'),

        email: z
            .string()
            .trim()
            .toLowerCase()
            .email('E-mail inválido'),

        password: z
            .string()
            .min(8, 'Mínimo de 8 caracteres')
            .regex(/[A-Z]/, 'Precisa de letra maiúscula')
            .regex(/[a-z]/, 'Precisa de letra minúscula')
            .regex(/[0-9]/, 'Precisa de número')
            .regex(/[^A-Za-z0-9]/, 'Precisa de caractere especial'),

        confirmPassword: z.string(),

        role: z.enum([
            'ADMIN',
            'MANAGER',
            'EMPLOYEE',
            'CASHIER',
        ]),
    })

    .refine(
        (data) => data.password === data.confirmPassword,
        {
            message: 'As senhas não coincidem',
            path: ['confirmPassword'],
        }
    );