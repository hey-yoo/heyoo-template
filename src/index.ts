import foo from './foo';
import bar from './bar';
import { command } from './types';

export default [
  {
    command: 'foo',
    action: foo,
    option: [['-d, --debug', 'debug mode']],
    description: '@heyoo/plugins-ts-template foo command.',
  },
  {
    command: 'bar',
    action: bar,
    option: [['-d, --debug', 'debug mode']],
    description: '@heyoo/plugins-ts-template bar command.',
  },
] as command[];
