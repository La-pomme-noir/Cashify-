module.exports = {
  env: {
    node: true, // Habilita el entorno de Node.js
    es2021: true, // Habilita ES2021
  },
  parserOptions: {
    ecmaVersion: 2021, // Soporte para ES2021
    sourceType: "module", // Usa módulos ES
  },
  rules: {
    "no-undef": "error", // Detecta variables no definidas
  },
};