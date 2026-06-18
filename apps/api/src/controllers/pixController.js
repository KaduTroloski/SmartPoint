const MERCADO_PAGO_TOKEN = 'APP_USR-7715861376756513-061721-13d84c2b3bbcd2b4c87f5b111f4acafe-3318573912';
const MP_API_URL = 'https://api.mercadopago.com/v1/payments';

export const criarPagamentoPix = async (req, res) => {
  try {
    const { valor, email, descricao, nome, cpf } = req.body;

    if (!valor || !email) {
      return res.status(400).json({ erro: "Os campos 'valor' e 'email' são obrigatórios." });
    }

    const payer = { email };
    if (nome) payer.first_name = nome;
    if (cpf) {
      const cpfLimpo = cpf.replace(/\D/g, '');
      if (cpfLimpo.length === 11) {
        payer.identification = { type: 'CPF', number: cpfLimpo };
      }
    }

    const body = {
      transaction_amount: Number(valor),
      payment_method_id: 'pix',
      description: descricao || 'Pagamento via PIX - SmartPoint',
      payer
    };

    const response = await fetch(MP_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${MERCADO_PAGO_TOKEN}`,
        'X-Idempotency-Key': `${Date.now()}-${Math.random().toString(36).substring(7)}`
      },
      body: JSON.stringify(body)
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        erro: 'Erro ao criar pagamento no Mercado Pago.',
        detalhes: data
      });
    }

    return res.status(201).json({
      id: data.id,
      status: data.status,
      qr_code: data.point_of_interaction?.transaction_data?.qr_code,
      qr_code_base64: data.point_of_interaction?.transaction_data?.qr_code_base64,
      valor: data.transaction_amount,
      expiracao: data.date_of_expiration
    });

  } catch (erro) {
    return res.status(500).json({ erro: erro.message });
  }
};

export const consultarPagamentoPix = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ erro: "O ID do pagamento é obrigatório." });
    }

    const response = await fetch(`${MP_API_URL}/${id}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${MERCADO_PAGO_TOKEN}`
      }
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        erro: 'Erro ao consultar pagamento.',
        detalhes: data
      });
    }

    return res.status(200).json({
      id: data.id,
      status: data.status,
      status_detalhe: data.status_detail,
      valor: data.transaction_amount,
      metodo: data.payment_method_id,
      pago: data.status === 'approved',
      data_criacao: data.date_created,
      data_aprovacao: data.date_approved
    });

  } catch (erro) {
    return res.status(500).json({ erro: erro.message });
  }
};
