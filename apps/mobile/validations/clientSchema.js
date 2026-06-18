import { z } from 'zod';
import { isValidCPF } from '../utils/cpf';

export const clientSchema = z.object({
    name: z
        .string()
        .trim()
        .min(3, 'O nome deve ter no mínimo 3 caracteres')
        .max(80, 'O nome deve ter no máximo 80 caracteres'),

    cpf: z
        .string()
        .trim()
        .refine(
            isValidCPF,
            {
                message: 'CPF inválido',
            }
        ),

    telephone: z
        .string()
        .trim()
        .regex(
            /^\d{10,11}$/,
            'Telefone deve conter DDD + número'
        ),

    preferences: z
        .string()
        .trim()
        .max(
            300,
            'As preferências devem ter no máximo 300 caracteres'
        )
        .optional(),
});