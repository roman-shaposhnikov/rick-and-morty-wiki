type Store = import('app/providers/store.tsx').Store
type RootState = import('app/providers/store.tsx').RootState
type AppDispatch = import('app/providers/store.tsx').AppDispatch

type AppCli = import('app/cli.ts').AppCli
type Cli = import('app/cli.ts').Cli

interface Window {
  appCli: AppCli
}
