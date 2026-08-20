//import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import React, { useState } from 'react';


//lógica: O componente App tem três formulários: Centro, Unidade e Lab.
// O do centro já é renderizado quando o site é carregado;
// O forms da unidade só é renderizado quando o centro foi confirmado. Para isso há um estado
// centroConfirmado, que é setado como true quando o botão do forms do centro é clicado;
// e é setado como false na inicialização, ou quando um novo centro é selecionado no dropdown.
// Assim, se um centro diferente é selecionado mesmo após a confirmação, a unidade so será exibida
//  quando um novo centro for confirmado.
//  A mesma lógica é aplicada para o laboratório de acordo com a unidade.
// O código do que fazer após a confirmação do laboratório será mudado para direcionar
// para a página de atualização de dados do lab.

//'http://localhost:5000/api'
const API_BASE_URL = '';

export default function App() {
  // Lista fixa de centros (1 a 8)
  //const centros = Array.from({ length: 8 }, (_, i) => ({ id: i + 1, nome: `Centro ${i + 1}` }));
  const centros = [{id: 1, nome: 'Centro 1'}, {id: 2, nome: 'Centro 2'}, {id: 3, nome: 'Centro 3'}, {id: 4, nome: 'Centro 4'}, 
                   {id: 5, nome: 'Centro 5'}, {id: 6, nome: 'Centro 6'}, {id: 7, nome: 'Centro 7'}, {id: 8, nome: 'Centro 8'}];

  // Estados de seleção
  const [centroSelecionado, setCentroSelecionado] = useState('');
  const [unidadeSelecionada, setUnidadeSelecionada] = useState('');
  const [labSelecionado, setLabSelecionado] = useState('');

  // Listas vindas da API
  const [unidades, setUnidades] = useState([]);
  const [laboratorios, setLaboratorios] = useState([]);
  const [dadosLaboratorio, setDadosLaboratorio] = useState(null);

  // Estados de controle 
  const [centroConfirmado, setCentroConfirmado] = useState(false);
  const [unidadeConfirmada, setUnidadeConfirmada] = useState(false);
  const [labConfirmado, setLabConfirmado] = useState(false);

  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState(null);

  // 1. Confirmação do Centro -> Busca Unidades
  const handleConfirmarCentro = async (e) => {
    e.preventDefault();
    if (!centroSelecionado) return;

    setLoading(true);
    setErro(null);
    try {
      const response = await fetch(`${API_BASE_URL}/centros/${centroSelecionado}/unidades`);
      if (!response.ok) throw new Error('Falha ao carregar unidades.');
      const data = await response.json();

      setUnidades(data);
      setCentroConfirmado(true);

      // Reseta os passos seguintes caso o centro tenha mudado
      setUnidadeSelecionada('');
      setUnidadeConfirmada(false);
      setLaboratorios([]);
      setLabSelecionado('');
      setLabConfirmado(false);
      setDadosLaboratorio(null);
    } catch (err) {
      setErro(err.message);
    } finally {
      setLoading(false);
    }
  };

  // 2. Confirmação da Unidade -> Busca Laboratórios
  const handleConfirmarUnidade = async (e) => {
    e.preventDefault();
    if (!unidadeSelecionada) return;

    setLoading(true);
    setErro(null);
    try {
      const response = await fetch(`${API_BASE_URL}/unidades/${unidadeSelecionada}/laboratorios`);
      if (!response.ok) throw new Error('Falha ao carregar laboratórios.');
      const data = await response.json();

      setLaboratorios(data);
      setUnidadeConfirmada(true);

      // Reseta o passo seguinte
      setLabSelecionado('');
      setLabConfirmado(false);
      setDadosLaboratorio(null);
    } catch (err) {
      setErro(err.message);
    } finally {
      setLoading(false);
    }
  };

  // 3. Confirmação do Laboratório -> Carrega dados para edição
  const handleConfirmarLaboratorio = async (e) => {
    e.preventDefault();
    if (!labSelecionado) return;

    setLoading(true);
    setErro(null);
    try {
      const response = await fetch(`${API_BASE_URL}/laboratorios/${labSelecionado}`);
      if (!response.ok) throw new Error('Falha ao carregar informações do laboratório.');
      const data = await response.json();

      setDadosLaboratorio(data);
      setLabConfirmado(true);
    } catch (err) {
      setErro(err.message);
    } finally {
      setLoading(false);

      
    }
  };



  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', padding: '24px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Selecionar Laboratório</h2>

      {erro && (
        <div style={{ padding: '12px', background: '#ffebee', color: '#c62828', borderRadius: '4px', marginBottom: '16px' }}>
          {erro}
        </div>
      )}

      {/* --- CENTRO --- */}
      <form onSubmit={handleConfirmarCentro} style={{ marginBottom: '20px' }}>
        <label htmlFor="centro"><strong>1. Centro Universitário:</strong></label>
        <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
          <select
            id="centro"
            value={centroSelecionado}
            onChange={(e) => {
              setCentroSelecionado(e.target.value);
              setCentroConfirmado(false); // Exige reconfirmação se alterar
            }}
            style={{ flex: 1, padding: '8px' }}
          >
            <option value="">Selecione um Centro...</option>
            {centros.map((c) => (
              <option key={c.id} value={c.id}>{c.nome}</option>
            ))}
          </select>
          <button type="submit" disabled={!centroSelecionado || loading} style={{ padding: '8px 16px' }}>
            Confirmar Centro
          </button>
        </div>
      </form>

      {/* ---  UNIDADE --- */}
      {centroConfirmado && ( 
        <form onSubmit={handleConfirmarUnidade} style={{ marginBottom: '20px' }}>
          <label htmlFor="unidade"><strong>2. Unidade:</strong></label>
          <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
            <select
              id="unidade"
              value={unidadeSelecionada}
              onChange={(e) => {
                setUnidadeSelecionada(e.target.value);
                setUnidadeConfirmada(false);
              }}
              style={{ flex: 1, padding: '8px' }}
            >
              <option value="">Selecione uma Unidade...</option>
              {unidades.map((u) => (
                <option key={u.id} value={u.id}>{u.nome}</option>
              ))}
            </select>
            <button type="submit" disabled={!unidadeSelecionada || loading} style={{ padding: '8px 16px' }}>
              Confirmar Unidade
            </button>
          </div>
        </form>
      )}

      {/* --- LABORATÓRIO --- */}
      {unidadeConfirmada && (
        <form onSubmit={handleConfirmarLaboratorio} style={{ marginBottom: '20px' }}>
          <label htmlFor="laboratorio"><strong>3. Laboratório:</strong></label>
          <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
            <select
              id="laboratorio"
              value={labSelecionado}
              onChange={(e) => {
                setLabSelecionado(e.target.value);
                setLabConfirmado(false);
              }}
              style={{ flex: 1, padding: '8px' }}
            >
              <option value="">Selecione um Laboratório...</option>
              {laboratorios.map((lab) => (
                <option key={lab.id} value={lab.id}>{lab.nome}</option>
              ))}
            </select>
            <button type="submit" disabled={!labSelecionado || loading} style={{ padding: '8px 16px' }}>
              Confirmar Laboratório
            </button>
          </div>
        </form>
      )}
      
    </div>
  );
}
