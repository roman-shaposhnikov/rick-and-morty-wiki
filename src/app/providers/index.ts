import { compose } from '@reduxjs/toolkit'

import { withStore } from './store'

export const withProviders = compose(withStore)
