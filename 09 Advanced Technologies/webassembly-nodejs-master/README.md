# How to Invoke WebAssembly File in Node.js

## Environment
* Node.js v8.11.3
* IIS v10.0.15063.0

## Node.js
### WebAssembly Standalone
Inspired by [StackOverflow](https://stackoverflow.com/questions/45295339/can-i-somehow-build-webassembly-code-without-the-emscripten-glue), build [standalone](https://github.com/kripken/emscripten/wiki/WebAssembly-Standalone) `.wasm` file:

```
emcc test.c -O2 -s WASM=1 -s SIDE_MODULE=1 -o test.wasm
```

Run the app:

```
node index.js
```

### WebAssembly with JS Glue
Generate `test.js` and `test.wasm`:

```
emcc test.c -O2 -s WASM=1 -Wall -s MODULARIZE=1 -o test.js
```

Run the app:

```
node index.js
```


## Web
Host the project on IIS, and then visit `wasm/index.htm` and `js-wasm/index.htm`.

## References
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/instantiate
- https://developer.mozilla.org/en-US/docs/WebAssembly/existing_C_to_wasm
