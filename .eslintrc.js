// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ['plugin:vue/essential', 'airbnb-base'],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  rules: {
    "indent": [ 2, 4, { "SwitchCase": 1 } ],
    "max-len": [ 2, 130 ],
    "default-case": 0,
    "no-plusplus": 0,
    "import/no-unresolved": 0, // "Casing of Vue does not match the underlying filesystem"
    "import/no-extraneous-dependencies": 0, // "'Vue' should be listed in the project's dependencies. Run 'npm i -S Vue' to add it"
    "prefer-const": 0,
    "one-var": 0,
    "consistent-return": 0,
    "no-use-before-define": [2, 'nofunc'],
    "brace-style": ["error", "stroustrup"],
    "no-unused-expressions": ["error", { "allowShortCircuit": true }],
    "no-param-reassign": 0,

    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never'
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      optionalDependencies: ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // allow console during development
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  }
}
