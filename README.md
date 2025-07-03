# Lid.Dev Site

Este é projeto foi desenvolvido para publicar meu trabalho como Desenvolvedora Web, para clientes particulares. Desenvolvi minha propria empresa de desenvolviemnto.

## Funcionalidades implementadas

- **Landing page moderna** com efeito de fundo animado personalizado (`BackgroundGradientAnimation`)
- **Header fixo** com logo e efeito de transição ao rolar a página
- **Efeito de estrelas cadentes** com o componente `ShootingStars`
- **Layout responsivo** e estilização com [Tailwind CSS](https://tailwindcss.com)
- **Botões de ação** para solicitar orçamento e acessar portfólio
- Organização de componentes em pastas (`components/sections`, `components/ui`, `components/effects`)
- Utilização de hooks do React (`useState`, `useEffect`) para interatividade

## Instalação

1. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

3. Acesse [http://localhost:3000](http://localhost:3000) no navegador.

## Estrutura de Pastas

- `src/components/sections/Hero.tsx` — Seção principal com animação de fundo e conteúdo centralizado
- `src/components/effects/BackgroundGradientAnimation.tsx` — Componente de fundo animado
- `src/components/ui/ShootingStars.tsx` — Efeito de estrelas cadentes

## Tecnologias utilizadas

- [Next.js](https://nextjs.org)
- [React](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)

## Como personalizar

- Edite o conteúdo da landing page em `src/components/sections/Hero.tsx`
- Altere as cores e efeitos no componente `BackgroundGradientAnimation`
- Ajuste as estrelas cadentes em `ShootingStars.tsx`

## Deploy

A maneira mais fácil de fazer deploy é usando a [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

---

Projeto desenvolvido por Lidiane.