module.exports = {
  name: 'bitcoin-halving',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/bitcoin-halving',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
