# AGENTS.md

## Commands

- `pnpm dev` - Start dev server
- `pnpm build` - Typecheck (`tsc -b`) then build
- `pnpm lint` - Run ESLint
- `pnpm preview` - Preview production build

## Tech Stack

- Vite 8 (beta)
- React 19 with React Compiler (`babel-plugin-react-compiler`)
- Tailwind CSS v4
- TypeScript (~5.9)

## Notes

- Uses `pnpm`, not npm or yarn
- Build script runs typecheck before Vite build - both must pass
- Entry point: `src/main.tsx` → `src/App.tsx`