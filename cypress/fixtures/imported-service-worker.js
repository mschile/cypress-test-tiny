const activate = async () => {
  await self.clients.claim()
}

self.addEventListener('activate', (event) => {
  event.waitUntil(activate())
})

self.addEventListener('fetch', function (event) {
  return
})
