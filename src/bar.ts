export default function bar(options) {
  console.log(
    options.debug
      ? `running bar command with debug mode.`
      : 'running bar command.'
  );
}
