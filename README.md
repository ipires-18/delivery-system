
# Delivery System API

Este é o sistema de backend para o **Delivery System**, construído com Node.js, Express, TypeScript e MongoDB. O objetivo desta API é gerenciar operações relacionadas a entregas, como criação de pedidos, upload de arquivos e manipulação de dados no banco de dados.

## Funcionalidades

- Gerenciamento de pedidos
- Upload de arquivos com `multer`
- Conexão com MongoDB usando `mongoose`
- Suporte a CORS
- API RESTful usando Express

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução de JavaScript no servidor.
- **Express**: Framework para criação de APIs e servidores.
- **TypeScript**: Superconjunto de JavaScript com tipagem estática.
- **MongoDB**: Banco de dados NoSQL para armazenamento de dados.
- **Multer**: Middleware para upload de arquivos.
- **CORS**: Middleware para permitir compartilhamento de recursos entre diferentes domínios.
- **Nodemon**: Utilitário que reinicia o servidor automaticamente durante o desenvolvimento.
- **ESLint**: Ferramenta de análise de código para manter a qualidade e consistência.

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/delivery-system.git
   ```

2. Acesse a pasta do projeto:

   ```bash
   cd delivery-system-api
   ```

3. Instale as dependências:

   ```bash
   npm install ou yarn 
   ```

4. Configure o banco de dados MongoDB no arquivo `.env` (se aplicável).

## Scripts Disponíveis

- **Iniciar o servidor em produção**:

  ```bash
  npm start ou yarn yarn
  ```

- **Iniciar o servidor em modo de desenvolvimento**:

  ```bash
  npm run dev ou yarn dev
  ```

- **Compilar o TypeScript para JavaScript**:

  ```bash
  npm run build ou yarn build
  ```

## Estrutura de Pastas

```bash
├── src/                 # Código-fonte do projeto
│   ├── app/             # Pasta contendo partes da aplicação
│   │   ├── router.ts    # Definição das rotas
│   │   ├── useCases/    # Lógica das rotas e casos de uso
│   │   └── models/      # Modelos do banco de dados
├── uploads/             # Diretório para uploads de arquivos
├── .editorconfig         # Configurações de estilo de código
├── .env                 # Variáveis de ambiente
├── .gitignore           # Ignorar arquivos no Git
├── eslint.config.mjs     # Configurações do ESLint (ESM)
├── tsconfig.json         # Configurações do TypeScript
├── package.json         # Dependências e scripts do projeto
├── yarn.lock            # Lockfile do Yarn

```

## Dependências

- **express**: Framework para construção de APIs.
- **cors**: Permitir CORS (Cross-Origin Resource Sharing).
- **mongoose**: ODM (Object Data Modeling) para MongoDB.
- **multer**: Middleware para upload de arquivos.

## Dependências de Desenvolvimento

- **typescript**: Linguagem com tipagem estática.
- **nodemon**: Reiniciar o servidor automaticamente em ambiente de desenvolvimento.
- **eslint**: Linting para garantir a qualidade do código.
- **@types/express**, **@types/multer**, **@types/cors**: Tipagens para uso no TypeScript.

## Como Contribuir

1. Fork este repositório.
2. Crie uma nova branch para sua feature: `git checkout -b feature-nome-da-feature`.
3. Faça commit das suas alterações: `git commit -m 'Adiciona nova feature'`.
4. Faça push para sua branch: `git push origin feature-nome-da-feature`.
5. Envie um Pull Request.

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.
