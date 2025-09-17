// This file dynamically imports the ESM config to avoid Vite's CJS Node API deprecation warning.
// It preserves backwards compatibility for environments that resolve `vite.config.js`.

module.exports = async () => {
  const { default: config } = await import('./vite.config.mjs')
  return config
}
