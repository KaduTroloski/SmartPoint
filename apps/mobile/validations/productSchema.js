import { z } from 'zod';

export const productSchema = z.object({
    name: z
        .string()
        .trim()
        .min(3, 'Nome muito curto')
        .max(100, 'Nome muito longo'),

    barcode: z
        .string()
        .trim()
        .min(8, 'Código inválido')
        .max(20, 'Código inválido'),

    price: z
        .coerce
        .number()
        .positive('Preço deve ser maior que zero'),

    stock: z
        .coerce
        .number()
        .int('Estoque deve ser inteiro')
        .min(0, 'Estoque inválido'),
});