<h1>Teste para a vaga de Programador Full Stack em React e Node.js</h1>

<p>Este repositório contém a solução para o teste técnico solicitado para a vaga de Programador Full Stack, utilizando React no frontend e Node.js no backend. O sistema gerencia produtos com funcionalidades de CRUD e implementa autenticação de usuário via JWT.</p>

<h2>Tecnologias Utilizadas</h2>

<h3>Backend:</h3>
<ul>
  <li>Node.js</li>
  <li>NestJS</li>
  <li>PostgreSQL ou MySQL</li>
  <li>JWT (JSON Web Token)</li>
  <li>bcrypt (para hashing de senhas)</li>
</ul>

<h3>Frontend:</h3>
<ul>
  <li>React</li>
  <li>Axios</li>
  <li>React Router</li>
  <li>CSS para estilização</li>
</ul>

<h2>Estrutura do Projeto</h2>

<h3>Backend</h3>
<p>O backend é uma API RESTful que permite o gerenciamento de produtos e autenticação de usuários. As funcionalidades são implementadas com as seguintes rotas:</p>

<h4>CRUD de Produtos (Usando NestJS)</h4>
<ul>
  <li><b>POST /produtos</b>: Cria um novo produto.</li>
  <li><b>GET /produtos</b>: Retorna todos os produtos.</li>
  <li><b>GET /produtos/:id</b>: Retorna um produto específico.</li>
  <li><b>PUT /produtos/:id</b>: Atualiza um produto.</li>
  <li><b>DELETE /produtos/:id</b>: Deleta um produto.</li>
</ul>

<h4>API de Autenticação de Usuários</h4>
<ul>
  <li><b>POST /auth/register</b>: Registra um novo usuário (email, senha).</li>
  <li><b>POST /auth/login</b>: Realiza o login do usuário.</li>
  <li><b>GET /auth/profile</b>: Acessa o perfil do usuário autenticado (rota protegida por JWT).</li>
</ul>

<h3>Frontend</h3>
<p>A aplicação frontend foi construída em React com as seguintes funcionalidades:</p>

<h4>Páginas</h4>
<ul>
  <li><b>Home</b>: Página de boas-vindas.</li>
  <li><b>Formulário de Cadastro de Produto</b>: Formulário para cadastrar novos produtos.</li>
  <li><b>Tabela de Produtos</b>: Exibe os produtos cadastrados no banco de dados em uma tabela com paginação.</li>
</ul>

<h4>Funcionalidades Implementadas</h4>
<ul>
  <li><b>Cadastro de Produto</b>: Formulário de criação de produtos que se comunica com a API de backend.</li>
  <li><b>Exibição de Produtos</b>: A tabela lista todos os produtos cadastrados na base de dados.</li>
  <li><b>Autenticação</b>: O sistema permite que apenas usuários autenticados possam acessar a página de produtos. A autenticação é feita com JWT.</li>
</ul>

<h4>Funcionalidades de Autenticação</h4>
<ul>
  <li><b>Registro</b>: O usuário pode se registrar com um email e senha, com a senha sendo armazenada de forma segura com bcrypt.</li>
  <li><b>Login</b>: O usuário pode realizar login, gerando um token JWT que será usado para autenticação em rotas protegidas.</li>
  <li><b>Sessão Autenticada</b>: O sistema verifica se o usuário está autenticado usando um middleware que valida o token JWT. O acesso a páginas restritas, como o perfil do usuário, só é possível após login.</li>
</ul>

<h2>Como Rodar o Projeto</h2>

<h3>Backend</h3>
<ol>
  <li>Navegue até a pasta do backend.</li>
  <li>Instale as dependências:
    <pre><code>npm install</code></pre>
  </li>
  <li>Configure o banco de dados (PostgreSQL ou MySQL).</li>
  <li>Execute o servidor:
    <pre><code>npm run start</code></pre>
  </li>
  <li>O servidor estará rodando na porta padrão, geralmente <a href="http://localhost:3000" target="_blank">http://localhost:3000</a>.</li>
</ol>

<h3>Frontend</h3>
<ol>
  <li>Navegue até a pasta do frontend.</li>
  <li>Instale as dependências:
    <pre><code>npm install</code></pre>
  </li>
  <li>Execute o servidor de desenvolvimento:
    <pre><code>npm start</code></pre>
  </li>
  <li>O frontend estará acessível em <a href="http://localhost:3001" target="_blank">http://localhost:3001</a>.</li>
</ol>

<h2>Requisitos</h2>

<h3>Backend</h3>
<ul>
  <li>A API de produtos deve validar se o preço não é negativo e se o nome do produto não está vazio antes de realizar operações no banco de dados.</li>
  <li>A API de autenticação deve garantir que as senhas sejam armazenadas com hashing seguro (utilizando bcrypt).</li>
  <li>As rotas protegidas por autenticação devem verificar o token JWT no cabeçalho da requisição.</li>
</ul>

<h3>Frontend</h3>
<ul>
  <li>O frontend deve ter uma interface de cadastro de produtos com validação de campos.</li>
  <li>A tabela de produtos deve ser renderizada com as informações retornadas da API backend.</li>
  <li>O sistema deve proteger a rota de produtos, permitindo acesso apenas para usuários autenticados.</li>
</ul>

<h2>Contribuição</h2>
<p>Caso queira contribuir para o projeto, siga as etapas abaixo:</p>
<ol>
  <li>Fork o repositório.</li>
  <li>Crie uma branch para a sua feature (<code>git checkout -b feature-nome</code>).</li>
  <li>Faça o commit das suas alterações (<code>git commit -m 'Adicionando nova feature'</code>).</li>
  <li>Faça o push para a sua branch (<code>git push origin feature-nome</code>).</li>
  <li>Abra um Pull Request.</li>
</ol>

<h2>Licença</h2>
<p>Este projeto está licenciado sob a MIT License - veja o arquivo <a href="LICENSE" target="_blank">LICENSE</a> para mais detalhes.</p>
