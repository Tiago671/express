

module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'prettier'
  ],
  plugins: ["prettier"],
  global: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  rules: {
    "class-methods-use-this": "off",
    "prettier/prettier": "error",
    "no-params-reassign": "off",
    camelcase: "off",
    "no-unused-vars": [ "error", { argsIgnorePàttern: "next"}]
  }
}