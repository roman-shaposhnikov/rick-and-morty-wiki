type Store = import('app/providers/store.tsx').Store
type RootState = import('app/providers/store.tsx').RootState
type AppDispatch = import('app/providers/store.tsx').AppDispatch

interface Window {
  __store__: Store
}
