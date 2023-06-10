const codes = process.argv.slice(2);

for (let i = 0; i < codes.length; i++) {
  if (!codes[i]) {
    return;
  } else if (codes[i] < 0 || codes[i] === NaN) {
    return null;
  } else {
    setTimeout(() => {
      process.stdout.write("\x07");
    }, codes[i] * 1000);
  }
}
