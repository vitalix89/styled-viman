module.exports = function() {
  return {
    files: [
      { pattern: 'package.json', instrument: false },
      { pattern: 'tsconfig.*', instrument: false },
      'src/**/*.ts',
      '!src/**/*.test.ts',
      '!src/**/__tests__/*.ts',
    ],
    tests: ['__tests__/*.ts', 'src/**/*.test.ts', 'src/**/__tests__/*.ts'],
    env: { type: 'node' },
    hints: {
      allowIgnoringCoverageInTests: true,
      ignoreCoverage: /istanbul ignore next/,
    },
    testFramework: 'jest',
    preprocessors: {
      '**/*.js?(x)': file =>
        require('babel-core').transform(file.content, {
          sourceMap: true,
          filename: file.path,
          presets: ['babel-preset-jest'],
        }),
    },
  };
};
