var inputBuffer = new Uint32Array([process.argv[2]]);

var outputBuffer = new Uint16Array(inputBuffer.buffer);

console.log(JSON.stringify(outputBuffer));
