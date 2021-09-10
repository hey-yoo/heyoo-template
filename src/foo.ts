export default function foo(options) {
  console.log(
    options.debug
      ? `running foo command with debug mode.`
      : 'running foo command.'
  );
}
