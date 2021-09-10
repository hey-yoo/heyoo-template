# @heyoo/plugins-js-template

This project is the [heyoo](https://github.com/hey-yoo/heyoo) Command line tool's plugins template with javascript.

Before go on, you must install [heyoo](https://github.com/hey-yoo/heyoo) in global.

## Usage

install:

```shell
hey install @heyoo/plugins-js-template
```

exec the plugins commands:

```shell
hey foo
# or
hey bar
```

## Develop packs template

```shell
hey create plugins
# choose plugins-js-template and follow the other prompts

# the pluginsName is what you input by prompts
cd ./pluginsName

hey link
```

### Notice

* package.json must have `exports` attribute, its value type must be string:

```json5
{
  "type": "module",
  "exports": "./src/index.js"
}
```

* exports targets must export default a command array:

```typescript
interface command {
  command: string;
  action: (...args: any[]) => void | Promise<void>;
  option?: string[][];
  requiredOption?: string[][];
  argument?: string[][];
  description?: string;
}

export default [] as command[];
```

You can read this [document](https://github.com/tj/commander.js#readme) to learn more about the interface command's attrtibute.

