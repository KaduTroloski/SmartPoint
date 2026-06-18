import { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storedToken = await AsyncStorage.getItem('@SmartPoint:token');
      const storedUser = await AsyncStorage.getItem('@SmartPoint:user');

      if (storedToken && storedUser) {
        setUser(JSON.parse(storedUser));
      }
      setLoading(false);
    }
    loadStorageData();
  }, []);

  async function signIn(email, password) {
    try {
      const emailTratado = email.trim();
      const senhaTratada = password.trim();


      const response = await api.post('/auth/login', { 
        email: emailTratado, 
        senhaLimpa: senhaTratada 
      });
      
      const { token, usuario } = response.data;

      await AsyncStorage.setItem('@SmartPoint:token', token);
      await AsyncStorage.setItem('@SmartPoint:user', JSON.stringify(usuario));

      setUser(usuario);
      
    } catch (error) {
      console.error("Erro no login:", error);
      throw new Error("E-mail ou senha incorretos.");
    }
  }

  function signOut() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

// Criando o nosso próprio Hook para usar nas telas!
export function useAuth() {
  const context = useContext(AuthContext);
  
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider.');
  }

  return context;
}