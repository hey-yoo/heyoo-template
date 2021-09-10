import foo from './foo.js';
import bar from './bar.js';

export default [
  {
    command: 'foo',
    action: foo,
    // string[][]
    option: [['-d, --debug', 'debug mode']],
    // string[][]
    requiredOption: [],
    // string[][]
    argument: [],
    description: '@heyoo/plugins-js-template foo command.',
  },
  {
    command: 'bar',
    action: bar,
    // string[][]
    option: [['-d, --debug', 'debug mode']],
    // string[][]
    requiredOption: [],
    // string[][]
    argument: [],
    description: '@heyoo/plugins-js-template bar command.',
  },
];
