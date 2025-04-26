type Store = import('app/providers/store.tsx').Store
type RootState = import('app/providers/store.tsx').RootState
type AppDispatch = import('app/providers/store.tsx').AppDispatch

type AppCli = import('app/cli.ts').AppCli

interface Window {
  __store__: Store
  appCli: AppCli
}
