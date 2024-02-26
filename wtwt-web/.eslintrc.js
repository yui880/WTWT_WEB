module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: ['next/core-web-vitals', 'standard-with-typescript', 'plugin:react/recommended'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'no-var': 'warn',
    'no-multiple-empty-lines': 'warn', // 여러 줄 공백 금지
    'no-console': ['warn', { allow: ['warn', 'error'] }], // console.log() 금지
    eqeqeq: 'warn',
    'dot-notation': 'warn', // 가능하다면 dot notation 사용
    'no-unused-vars': 'warn', // 사용하지 않는 변수 금지
    'react/destructuring-assignment': 'warn', // state, prop 등에 구조분해 할당 적용
    'react/jsx-pascal-case': 'warn', // 컴포넌트 이름은 PascalCase
    'react/no-direct-mutation-state': 'warn', // state 직접 수정 금지
    'react/jsx-no-useless-fragment': 'warn', // 불필요한 fragment 금지
    'react/no-unused-state': 'warn', // 사용되지 않는 state
    'react/jsx-key': 'warn', // 반복문으로 생성하는 요소에 key 강제
    'react/self-closing-comp': 'warn', // 셀프 클로징 태그 가능하면 적용
    'react/jsx-curly-brace-presence': 'warn', // jsx 내 불필요한 중괄호 금지
    'react/react-in-jsx-scope': 'off', // react import 없이 사용하기
    '@typescript-eslint/member-delimiter-style': [
      // 구분 기호 스타일 설정
      'error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'comma',
          requireLast: false,
        },
      },
    ],
    'comma-dangle': [2, 'always-multiline'],
    semi: ['error', 'always'],
    '@typescript-eslint/semi': 'off',
  },
  ignorePatterns: ['.eslintrc.js'],
};
