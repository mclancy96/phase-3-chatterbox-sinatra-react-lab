import { build } from 'vite'

try {
  const { default: config } = await import('./vite.config.mjs')
  await build(config)
  console.log('Vite build finished')
} catch (err) {
  console.error(err)
  process.exit(1)
}
