type Store = import('app/providers/store').Store
type RootState = import('app/providers/store').RootState
type AppDispatch = import('app/providers/store').AppDispatch

type AppCli = import('app/cli').AppCli
type Cli = import('app/cli').Cli

interface Window {
  appCli: AppCli
}
