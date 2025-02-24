'use strict';

const { name } = require('./package');
const FastbootTransform = require('fastboot-transform');

module.exports = {
  name,
  options: {
    nodeAssets: {
      'opus-recorder': {
        public: {
          srcDir: 'dist',
          destDir: 'opus-recorder',
          include: ['waveWorker.min.js', 'encodeWorker.min.js'],
          processTree(input) {
            return FastbootTransform(input);
          }
        }
      }
    }
  }
};