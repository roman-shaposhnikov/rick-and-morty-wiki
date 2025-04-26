import { CircularProgress, SxProps, Theme } from '@mui/material'

export function Loader({ style }: { style?: SxProps<Theme> } = {}) {
  return (
    <CircularProgress
      color='primary'
      sx={{
        width: '30px',
        ...style,
      }}
    />
  )
}
