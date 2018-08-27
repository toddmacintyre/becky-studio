module.exports = {
  testEnvironment: 'jsdom',
  testURL: 'https://localhost',
  setupFiles: [
    './test/jestsetup.js',
  ],
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ],
  moduleNameMapper: {
    '\\.s?css$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': require.resolve('./src/__mocks__/fileMock.js'),
  },
  coverageDirectory: './coverage',
  collectCoverageFrom: [
    '**/src/**/*.js?(x)',
    '!**/__tests__/**',
    '!**/node_modules/**',
  ],
};
