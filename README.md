# Next.js App Template 🚀

Este é um template completo para aplicações **Next.js 14 App Router** com suporte a:

- ✅ TypeScript
- ✅ Redux Toolkit
- ✅ SCSS Modules
- ✅ Organização modular por componentes e páginas
- ✅ Estrutura clara para escalabilidade
- ✅ Páginas de exemplo: `/about`, `/contact`, `/home`

---

## 📁 Estrutura de Pastas

```bash
.
├── app/                         # Páginas e layout principal (App Router)
│   ├── components/             # Componentes reutilizáveis
│   │   ├── Button/             # Botão personalizado com estilos
│   │   └── ContactForm/        # Formulário de contato completo
│   ├── about/                  # Página "Sobre"
│   ├── contact/                # Página de contato com formulário
│   └── home/                   # Página inicial
├── public/                     # Arquivos públicos (favicon, imagens)
├── store/                      # Configuração do Redux Toolkit
│   ├── slices/                # Slices da store
│   ├── provider.ts            # Provider da store para App Router
│   └── store.ts               # Store configurada
├── utils/                      # Funções utilitárias
│   └── storage.ts             # Exemplo de manipulação com localStorage
├── styles/                     # Estilos globais e variáveis
│   └── variables.scss
├── app/globals.scss           # Estilo global
├── .gitignore
├── tsconfig.json              # Configuração TypeScript (com aliases)
├── next.config.js             # Configuração do Next.js
├── package.json
└── README.md


Comando | Descrição
npm run dev | Inicia o servidor de desenvolvimento
npm run build | Compila a aplicação para produção
npm run start | Inicia o servidor de produção


🧩 Tecnologias Utilizadas
Next.js 14

TypeScript

SCSS Modules

Redux Toolkit

ESLint e Prettier (recomendado)


🛠️ Funcionalidades do Projeto
Formulário de contato com validação

Componentes reutilizáveis estilizados com SCSS Modules

Configuração de Redux Toolkit pronta para uso

Organização modular por pasta (feature-based)

Estilização moderna com sombra, espaçamento e responsividade


📦 Requisitos
Node.js v18+

npm ou yarn


📁 .gitignore
# Build
.next/
node_modules/

# Editor
.vscode/
.idx/

# Sistema
.DS_Store

# Ambiente (se aplicável)
.env*


✨ Contribuindo
Sinta-se à vontade para clonar e adaptar este template para seus projetos pessoais ou profissionais. Sugestões e melhorias são bem-vindas!
Feito com 💙 por Valter Vieira - valtervieira.dev@gmail.com
