# Busca CEP

Aplicação web para consulta de endereços a partir de um CEP, utilizando consumo de API pública.

Projeto desenvolvido com foco em **JavaScript assíncrono**, consumo de API com `fetch`, manipulação de DOM e também com atenção especial ao **front-end e experiência visual**.

---

## Objetivo do Projeto

Este projeto foi criado para praticar:

- Consumo de API REST
- Uso de `fetch`
- Async/Await
- Manipulação do DOM
- Tratamento de erros
- Validação de formulários
- Organização e modularização de código
- Estruturação de layout moderno

---

## Foco em Front-end

Além da lógica da aplicação, aproveitei o projeto para reforçar conceitos de interface e experiência do usuário:

- Estilo **Glassmorphism**
- Menu mobile (hambúrguer)
- Dropdown menu
- Layout limpo e responsivo

A ideia foi unir prática de JavaScript com construção visual moderna.

---

## Tecnologias Utilizadas

- HTML5
- CSS3 (com efeitos de transparência e blur - glassmorphism)
- JavaScript (ES6+)
- API pública de CEP (ViaCEP)

---

## API Utilizada

API pública:

ViaCEP  
https://viacep.com.br/

Exemplo de endpoint:

https://viacep.com.br/ws/uf/cidade/logradouro/json/

---

## Funcionalidades

Busca CEP por Logradouro, Bairro, Cidade, UF
Exibe:

- Logradouro
- Bairro
- Cidade
- Estado (UF)

Validação de campo vazio  
Tratamento para CEP inválido  
Interface moderna  
Navegação com dropdown  
Menu responsivo para mobile

---

## Estrutura do Projeto

```
busca-cep/
│
├── index.html
├── assets/
│ ├── css/
│ │ └── styles.css
│ └── js/
│ ├── script.js (arquivo principal)
│ └── modules/
│ ├── (módulos separados por responsabilidade)
│
└── LICENSE
```

---

## Arquitetura JavaScript

O projeto foi estruturado utilizando **modularização**:

- `script.js` → Arquivo principal (ponto de entrada)
- `modules/` → Arquivos organizados por responsabilidade (ex: requisição API, manipulação DOM, validações, etc.)

Isso melhora:

- Escalabilidade
- Organização
- Manutenção do código
- Clareza na separação de responsabilidades

---

## Como Executar

1. Clone o repositório:

git clone https://github.com/gutosavi/busca-cep.git

2. Acesse a pasta:

cd busca-cep

3. Abra o arquivo `index.html` no navegador.

---

## Aprendizados Aplicados

- Estruturação de projeto front-end real
- Consumo de API externa
- Organização com JavaScript modular
- Manipulação dinâmica do DOM
- Responsividade
- Construção de layout moderno com glassmorphism
- Estrutura próxima de aplicações escaláveis

---

## Próximas Melhorias

- [ ] Máscara automática no campo CEP
- [ ] Loader durante requisição
- [ ] Deploy online (Vercel ou Netlify)
- [ ] Refatoração futura para React + TypeScript

---

## Autor

**Gustavo Savi**
Desenvolvedor Frontend | HTML, CSS, JavaScript

GitHub: https://github.com/gutosavi  
LinkedIn: www.linkedin.com/in/gustavo-savi

---

## Licença

Este projeto está sob a licença MIT.
