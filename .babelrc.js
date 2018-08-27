const isTest = String(process.env.NODE_ENV) === 'test';
module.exports = {
  babelrc: false,
  presets: [['babel-preset-env', {modules: isTest ? 'commonjs' : false}], 'babel-preset-react'],
  plugins: [
    'react-hot-loader/babel',
    'babel-plugin-transform-object-rest-spread',
    isTest ? 'babel-plugin-transform-es2015-modules-commonjs' : null,
  ].filter(Boolean),
};
