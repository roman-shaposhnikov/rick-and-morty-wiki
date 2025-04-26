import { createServer } from 'http'

const PORT = 3003
const HOST = '127.0.0.1'

const server = createServer((req, res) => {
  switch (req.url) {
    case '/api/feature-flags': {
      sendFeatureFlags(res)
      break
    }
    default: {
      res.statusCode = 200
      res.end()
    }
  }
})

server.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`)
})

const featureFlags = JSON.stringify({ isTelegramShareEnabled: true })

function sendFeatureFlags(res) {
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.statusCode = 200
  res.write(featureFlags)
  res.end()
}
