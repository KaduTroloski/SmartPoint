
import bcrypt from 'bcrypt';
import {criarStaff, buscarStaffPorEmail} from '../dataconnect-admin-generated/esm/index.esm.js';
import jwt from 'jsonwebtoken';
const JWT_SECRET = process.env.JWT_SECRET

export const postStaff = async (req, res) => {
  try {
    const { nome, email, senha, cargo } = req.body;

   
    const saltRounds = 10;
    
    
    const passwordHash = await bcrypt.hash(senha, saltRounds);

    
    await criarStaff({
      nome,
      email,
      senha: passwordHash, 
      cargo
    });

    return res.status(201).json({ mensagem: "Funcionário cadastrado!" });
  } catch (erro) {
    return res.status(500).json({ erro: erro.message });
  }
};
 

export const login = async (req, res) => {
  try {
    const { email, senhaLimpa } = req.body;

   
    const resultado = await buscarStaffPorEmail({ email });
    const usuario = resultado.data.staffs[0]; 
    
    if (!usuario) {
      return res.status(401).json({ erro: "Email ou senha incorretos." });
    }

    const senhaValida = await bcrypt.compare(senhaLimpa, usuario.passwordHash);

    if (!senhaValida) {
      return res.status(401).json({ erro: "Email ou senha incorretos." });
    }
    const token = jwt.sign(
      { id: usuario.id, role: usuario.role }, 
      JWT_SECRET,                             
      { expiresIn: '8h' }                    
    );

    return res.status(200).json({
      mensagem: "Login realizado com sucesso!",
      token: token,
      usuario: {
        nome: usuario.name,
        cargo: usuario.role
      }
    });

  } catch (erro) {
    return res.status(500).json({ erro: erro.message });
  }
};