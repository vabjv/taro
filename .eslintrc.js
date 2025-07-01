module.exports = {
  extends: ["taro/react"],
  globals: {
    page: true,
    REACT_APP_ENV: true,
  },
  rules: {
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "quotes": ["error", "single", { "avoidEscape": true }]
  },
  overrides: [
    {
      files: ["**/*.jsx", "**/*.tsx"],
      rules: {
        "quotes": ["error", "single", { "avoidEscape": true }],
        "jsx-quotes": ["error", "prefer-double"]
      }
    }
  ]
}