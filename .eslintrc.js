module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'react-app',
    /**
     * TODO:
     * It looks like prettier is not working properly.
     * It overrides some rules from above extends.
     */
    'plugin:prettier/recommended'
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  plugins: ['react', 'prettier'],
  rules: {
    semi: [2, 'always']
    // 'max-len': [
    //   'warn',
    //   {
    //     code: 150
    //   } // 150 on GitHub, 80 on npmjs.org for README.md code blocks
    // ]
  }
};
