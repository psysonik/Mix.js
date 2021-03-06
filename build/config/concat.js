module.exports = {
  css: {
    src: [
      'src/css/normalize.css',
      'src/css/main.css',
      'src/css/loader.css'
    ],
    dest: 'public/css/Mix.css'
  },
  fixtures: {
    src: [
      'test/fixtures/**/*.js'
    ],
    dest: 'test/fixtures.js'
  },
  test: {
    src: [
      'test/tests/**/*.js'
    ],
    dest: 'test/test.js'
  }
};
