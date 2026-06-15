import React from 'react';
// Importa as suas duas telas que estão na mesma pasta
import TelaCarregamento from './TelaCarregamento';
import TelaConfirmacao from './TelaConfirmacao';

export default function App() {
  // Para testar a de Carregamento, troque abaixo para: <TelaCarregamento />
  return <TelaConfirmacao />;
}