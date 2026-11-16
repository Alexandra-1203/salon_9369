import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    'vue/multi-word-component-names': 'off',
    '@stylistic/max-statements-per-line': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'vue/no-unused-vars': 'off'
  }
})
