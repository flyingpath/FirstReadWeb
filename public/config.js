System.config({
  baseURL: "/public/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "babel": "npm:babel-core@5.8.38",
    "babel-preset-latest": "npm:babel-preset-latest@6.16.0",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "core-js": "npm:core-js@1.2.7",
    "css": "github:systemjs/plugin-css@0.1.32",
    "lodash": "npm:lodash@4.17.2",
    "material-ui": "npm:material-ui@0.16.5",
    "mobx": "npm:mobx@2.6.5",
    "mobx-react": "npm:mobx-react@4.0.3",
    "react": "npm:react@15.4.1",
    "react-bootstrap": "npm:react-bootstrap@0.30.7",
    "react-dom": "npm:react-dom@15.4.1",
    "react-fontawesome": "npm:react-fontawesome@1.4.0",
    "react-tap-event-plugin": "npm:react-tap-event-plugin@2.0.1",
    "socket.io": "npm:socket.io@1.7.1",
    "systemjs-hot-reloader": "github:capaj/systemjs-hot-reloader@0.6.0",
    "github:capaj/systemjs-hot-reloader@0.6.0": {
      "debug": "npm:debug@2.3.3",
      "socket.io-client": "npm:socket.io-client@1.7.1",
      "weakee": "npm:weakee@1.0.0"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.11.0"
    },
    "github:jspm/nodelibs-domain@0.1.0": {
      "domain-browser": "npm:domain-browser@1.1.7"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.9"
    },
    "github:jspm/nodelibs-querystring@0.1.0": {
      "querystring": "npm:querystring@0.2.0"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:jspm/nodelibs-zlib@0.1.0": {
      "browserify-zlib": "npm:browserify-zlib@0.1.4"
    },
    "npm:accepts@1.3.1": {
      "mime-types": "npm:mime-types@2.1.13",
      "negotiator": "npm:negotiator@0.6.0"
    },
    "npm:asap@2.0.5": {
      "domain": "github:jspm/nodelibs-domain@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:asn1.js@4.9.0": {
      "bn.js": "npm:bn.js@4.11.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:babel-code-frame@6.16.0": {
      "chalk": "npm:chalk@1.1.3",
      "esutils": "npm:esutils@2.0.2",
      "js-tokens": "npm:js-tokens@2.0.0"
    },
    "npm:babel-helper-builder-binary-assignment-operator-visitor@6.18.0": {
      "babel-helper-explode-assignable-expression": "npm:babel-helper-explode-assignable-expression@6.18.0",
      "babel-runtime": "npm:babel-runtime@6.20.0",
      "babel-types": "npm:babel-types@6.19.0"
    },
    "npm:babel-helper-call-delegate@6.18.0": {
      "babel-helper-hoist-variables": "npm:babel-helper-hoist-variables@6.18.0",
      "babel-runtime": "npm:babel-runtime@6.20.0",
      "babel-traverse": "npm:babel-traverse@6.19.0",
      "babel-types": "npm:babel-types@6.19.0"
    },
    "npm:babel-helper-define-map@6.18.0": {
      "babel-helper-function-name": "npm:babel-helper-function-name@6.18.0",
      "babel-runtime": "npm:babel-runtime@6.20.0",
      "babel-types": "npm:babel-types@6.19.0",
      "lodash": "npm:lodash@4.17.2"
    },
    "npm:babel-helper-explode-assignable-expression@6.18.0": {
      "babel-runtime": "npm:babel-runtime@6.20.0",
      "babel-traverse": "npm:babel-traverse@6.19.0",
      "babel-types": "npm:babel-types@6.19.0"
    },
    "npm:babel-helper-function-name@6.18.0": {
      "babel-helper-get-function-arity": "npm:babel-helper-get-function-arity@6.18.0",
      "babel-runtime": "npm:babel-runtime@6.20.0",
      "babel-template": "npm:babel-template@6.16.0",
      "babel-traverse": "npm:babel-traverse@6.19.0",
      "babel-types": "npm:babel-types@6.19.0"
    },
    "npm:babel-helper-get-function-arity@6.18.0": {
      "babel-runtime": "npm:babel-runtime@6.20.0",
      "babel-types": "npm:babel-types@6.19.0"
    },
    "npm:babel-helper-hoist-variables@6.18.0": {
      "babel-runtime": "npm:babel-runtime@6.20.0",
      "babel-types": "npm:babel-types@6.19.0"
    },
    "npm:babel-helper-optimise-call-expression@6.18.0": {
      "babel-runtime": "npm:babel-runtime@6.20.0",
      "babel-types": "npm:babel-types@6.19.0"
    },
    "npm:babel-helper-regex@6.18.0": {
      "babel-runtime": "npm:babel-runtime@6.20.0",
      "babel-types": "npm:babel-types@6.19.0",
      "lodash": "npm:lodash@4.17.2"
    },
    "npm:babel-helper-remap-async-to-generator@6.18.0": {
      "babel-helper-function-name": "npm:babel-helper-function-name@6.18.0",
      "babel-runtime": "npm:babel-runtime@6.20.0",
      "babel-template": "npm:babel-template@6.16.0",
      "babel-traverse": "npm:babel-traverse@6.19.0",
      "babel-types": "npm:babel-types@6.19.0"
    },
    "npm:babel-helper-replace-supers@6.18.0": {
      "babel-helper-optimise-call-expression": "npm:babel-helper-optimise-call-expression@6.18.0",
      "babel-messages": "npm:babel-messages@6.8.0",
      "babel-runtime": "npm:babel-runtime@6.20.0",
      "babel-template": "npm:babel-template@6.16.0",
      "babel-traverse": "npm:babel-traverse@6.19.0",
      "babel-types": "npm:babel-types@6.19.0"
    },
    "npm:babel-messages@6.8.0": {
      "babel-runtime": "npm:babel-runtime@6.20.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:babel-plugin-check-es2015-constants@6.8.0": {
      "babel-runtime": "npm:babel-runtime@6.20.0"
    },
    "npm:babel-plugin-transform-async-to-generator@6.16.0": {
      "babel-helper-remap-async-to-generator": "npm:babel-helper-remap-async-to-generator@6.18.0",
      "babel-plugin-syntax-async-functions": "npm:babel-plugin-syntax-async-functions@6.13.0",
      "babel-runtime": "npm:babel-runtime@6.20.0"
    },
    "npm:babel-plugin-transform-es2015-arrow-functions@6.8.0": {
      "babel-runtime": "npm:babel-runtime@6.20.0"
    },
    "npm:babel-plugin-transform-es2015-block-scoped-functions@6.8.0": {
      "babel-runtime": "npm:babel-runtime@6.20.0"
    },
    "npm:babel-plugin-transform-es2015-block-scoping@6.18.0": {
      "babel-runtime": "npm:babel-runtime@6.20.0",
      "babel-template": "npm:babel-template@6.16.0",
      "babel-traverse": "npm:babel-traverse@6.19.0",
      "babel-types": "npm:babel-types@6.19.0",
      "lodash": "npm:lodash@4.17.2"
    },
    "npm:babel-plugin-transform-es2015-classes@6.18.0": {
      "babel-helper-define-map": "npm:babel-helper-define-map@6.18.0",
      "babel-helper-function-name": "npm:babel-helper-function-name@6.18.0",
      "babel-helper-optimise-call-expression": "npm:babel-helper-optimise-call-expression@6.18.0",
      "babel-helper-replace-supers": "npm:babel-helper-replace-supers@6.18.0",
      "babel-messages": "npm:babel-messages@6.8.0",
      "babel-runtime": "npm:babel-runtime@6.20.0",
      "babel-template": "npm:babel-template@6.16.0",
      "babel-traverse": "npm:babel-traverse@6.19.0",
      "babel-types": "npm:babel-types@6.19.0"
    },
    "npm:babel-plugin-transform-es2015-computed-properties@6.8.0": {
      "babel-helper-define-map": "npm:babel-helper-define-map@6.18.0",
      "babel-runtime": "npm:babel-runtime@6.20.0",
      "babel-template": "npm:babel-template@6.16.0"
    },
    "npm:babel-plugin-transform-es2015-destructuring@6.19.0": {
      "babel-runtime": "npm:babel-runtime@6.20.0"
    },
    "npm:babel-plugin-transform-es2015-duplicate-keys@6.8.0": {
      "babel-runtime": "npm:babel-runtime@6.20.0",
      "babel-types": "npm:babel-types@6.19.0"
    },
    "npm:babel-plugin-transform-es2015-for-of@6.18.0": {
      "babel-runtime": "npm:babel-runtime@6.20.0"
    },
    "npm:babel-plugin-transform-es2015-function-name@6.9.0": {
      "babel-helper-function-name": "npm:babel-helper-function-name@6.18.0",
      "babel-runtime": "npm:babel-runtime@6.20.0",
      "babel-types": "npm:babel-types@6.19.0"
    },
    "npm:babel-plugin-transform-es2015-literals@6.8.0": {
      "babel-runtime": "npm:babel-runtime@6.20.0"
    },
    "npm:babel-plugin-transform-es2015-modules-amd@6.18.0": {
      "babel-plugin-transform-es2015-modules-commonjs": "npm:babel-plugin-transform-es2015-modules-commonjs@6.18.0",
      "babel-runtime": "npm:babel-runtime@6.20.0",
      "babel-template": "npm:babel-template@6.16.0"
    },
    "npm:babel-plugin-transform-es2015-modules-commonjs@6.18.0": {
      "babel-plugin-transform-strict-mode": "npm:babel-plugin-transform-strict-mode@6.18.0",
      "babel-runtime": "npm:babel-runtime@6.20.0",
      "babel-template": "npm:babel-template@6.16.0",
      "babel-types": "npm:babel-types@6.19.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:babel-plugin-transform-es2015-modules-systemjs@6.19.0": {
      "babel-helper-hoist-variables": "npm:babel-helper-hoist-variables@6.18.0",
      "babel-runtime": "npm:babel-runtime@6.20.0",
      "babel-template": "npm:babel-template@6.16.0"
    },
    "npm:babel-plugin-transform-es2015-modules-umd@6.18.0": {
      "babel-plugin-transform-es2015-modules-amd": "npm:babel-plugin-transform-es2015-modules-amd@6.18.0",
      "babel-runtime": "npm:babel-runtime@6.20.0",
      "babel-template": "npm:babel-template@6.16.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:babel-plugin-transform-es2015-object-super@6.8.0": {
      "babel-helper-replace-supers": "npm:babel-helper-replace-supers@6.18.0",
      "babel-runtime": "npm:babel-runtime@6.20.0"
    },
    "npm:babel-plugin-transform-es2015-parameters@6.18.0": {
      "babel-helper-call-delegate": "npm:babel-helper-call-delegate@6.18.0",
      "babel-helper-get-function-arity": "npm:babel-helper-get-function-arity@6.18.0",
      "babel-runtime": "npm:babel-runtime@6.20.0",
      "babel-template": "npm:babel-template@6.16.0",
      "babel-traverse": "npm:babel-traverse@6.19.0",
      "babel-types": "npm:babel-types@6.19.0"
    },
    "npm:babel-plugin-transform-es2015-shorthand-properties@6.18.0": {
      "babel-runtime": "npm:babel-runtime@6.20.0",
      "babel-types": "npm:babel-types@6.19.0"
    },
    "npm:babel-plugin-transform-es2015-spread@6.8.0": {
      "babel-runtime": "npm:babel-runtime@6.20.0"
    },
    "npm:babel-plugin-transform-es2015-sticky-regex@6.8.0": {
      "babel-helper-regex": "npm:babel-helper-regex@6.18.0",
      "babel-runtime": "npm:babel-runtime@6.20.0",
      "babel-types": "npm:babel-types@6.19.0"
    },
    "npm:babel-plugin-transform-es2015-template-literals@6.8.0": {
      "babel-runtime": "npm:babel-runtime@6.20.0"
    },
    "npm:babel-plugin-transform-es2015-typeof-symbol@6.18.0": {
      "babel-runtime": "npm:babel-runtime@6.20.0"
    },
    "npm:babel-plugin-transform-es2015-unicode-regex@6.11.0": {
      "babel-helper-regex": "npm:babel-helper-regex@6.18.0",
      "babel-runtime": "npm:babel-runtime@6.20.0",
      "regexpu-core": "npm:regexpu-core@2.0.0"
    },
    "npm:babel-plugin-transform-exponentiation-operator@6.8.0": {
      "babel-helper-builder-binary-assignment-operator-visitor": "npm:babel-helper-builder-binary-assignment-operator-visitor@6.18.0",
      "babel-plugin-syntax-exponentiation-operator": "npm:babel-plugin-syntax-exponentiation-operator@6.13.0",
      "babel-runtime": "npm:babel-runtime@6.20.0"
    },
    "npm:babel-plugin-transform-regenerator@6.16.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "babel-runtime": "npm:babel-runtime@6.20.0",
      "babel-types": "npm:babel-types@6.19.0",
      "private": "npm:private@0.1.6",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:babel-plugin-transform-strict-mode@6.18.0": {
      "babel-runtime": "npm:babel-runtime@6.20.0",
      "babel-types": "npm:babel-types@6.19.0"
    },
    "npm:babel-preset-es2015@6.18.0": {
      "babel-plugin-check-es2015-constants": "npm:babel-plugin-check-es2015-constants@6.8.0",
      "babel-plugin-transform-es2015-arrow-functions": "npm:babel-plugin-transform-es2015-arrow-functions@6.8.0",
      "babel-plugin-transform-es2015-block-scoped-functions": "npm:babel-plugin-transform-es2015-block-scoped-functions@6.8.0",
      "babel-plugin-transform-es2015-block-scoping": "npm:babel-plugin-transform-es2015-block-scoping@6.18.0",
      "babel-plugin-transform-es2015-classes": "npm:babel-plugin-transform-es2015-classes@6.18.0",
      "babel-plugin-transform-es2015-computed-properties": "npm:babel-plugin-transform-es2015-computed-properties@6.8.0",
      "babel-plugin-transform-es2015-destructuring": "npm:babel-plugin-transform-es2015-destructuring@6.19.0",
      "babel-plugin-transform-es2015-duplicate-keys": "npm:babel-plugin-transform-es2015-duplicate-keys@6.8.0",
      "babel-plugin-transform-es2015-for-of": "npm:babel-plugin-transform-es2015-for-of@6.18.0",
      "babel-plugin-transform-es2015-function-name": "npm:babel-plugin-transform-es2015-function-name@6.9.0",
      "babel-plugin-transform-es2015-literals": "npm:babel-plugin-transform-es2015-literals@6.8.0",
      "babel-plugin-transform-es2015-modules-amd": "npm:babel-plugin-transform-es2015-modules-amd@6.18.0",
      "babel-plugin-transform-es2015-modules-commonjs": "npm:babel-plugin-transform-es2015-modules-commonjs@6.18.0",
      "babel-plugin-transform-es2015-modules-systemjs": "npm:babel-plugin-transform-es2015-modules-systemjs@6.19.0",
      "babel-plugin-transform-es2015-modules-umd": "npm:babel-plugin-transform-es2015-modules-umd@6.18.0",
      "babel-plugin-transform-es2015-object-super": "npm:babel-plugin-transform-es2015-object-super@6.8.0",
      "babel-plugin-transform-es2015-parameters": "npm:babel-plugin-transform-es2015-parameters@6.18.0",
      "babel-plugin-transform-es2015-shorthand-properties": "npm:babel-plugin-transform-es2015-shorthand-properties@6.18.0",
      "babel-plugin-transform-es2015-spread": "npm:babel-plugin-transform-es2015-spread@6.8.0",
      "babel-plugin-transform-es2015-sticky-regex": "npm:babel-plugin-transform-es2015-sticky-regex@6.8.0",
      "babel-plugin-transform-es2015-template-literals": "npm:babel-plugin-transform-es2015-template-literals@6.8.0",
      "babel-plugin-transform-es2015-typeof-symbol": "npm:babel-plugin-transform-es2015-typeof-symbol@6.18.0",
      "babel-plugin-transform-es2015-unicode-regex": "npm:babel-plugin-transform-es2015-unicode-regex@6.11.0",
      "babel-plugin-transform-regenerator": "npm:babel-plugin-transform-regenerator@6.16.1"
    },
    "npm:babel-preset-es2016@6.16.0": {
      "babel-plugin-transform-exponentiation-operator": "npm:babel-plugin-transform-exponentiation-operator@6.8.0"
    },
    "npm:babel-preset-es2017@6.16.0": {
      "babel-plugin-syntax-trailing-function-commas": "npm:babel-plugin-syntax-trailing-function-commas@6.13.0",
      "babel-plugin-transform-async-to-generator": "npm:babel-plugin-transform-async-to-generator@6.16.0"
    },
    "npm:babel-preset-latest@6.16.0": {
      "babel-preset-es2015": "npm:babel-preset-es2015@6.18.0",
      "babel-preset-es2016": "npm:babel-preset-es2016@6.16.0",
      "babel-preset-es2017": "npm:babel-preset-es2017@6.16.0"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:babel-runtime@6.20.0": {
      "core-js": "npm:core-js@2.4.1",
      "regenerator-runtime": "npm:regenerator-runtime@0.10.1"
    },
    "npm:babel-template@6.16.0": {
      "babel-runtime": "npm:babel-runtime@6.20.0",
      "babel-traverse": "npm:babel-traverse@6.19.0",
      "babel-types": "npm:babel-types@6.19.0",
      "babylon": "npm:babylon@6.14.1",
      "lodash": "npm:lodash@4.17.2"
    },
    "npm:babel-traverse@6.19.0": {
      "babel-code-frame": "npm:babel-code-frame@6.16.0",
      "babel-messages": "npm:babel-messages@6.8.0",
      "babel-runtime": "npm:babel-runtime@6.20.0",
      "babel-types": "npm:babel-types@6.19.0",
      "babylon": "npm:babylon@6.14.1",
      "debug": "npm:debug@2.3.3",
      "globals": "npm:globals@9.14.0",
      "invariant": "npm:invariant@2.2.2",
      "lodash": "npm:lodash@4.17.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:babel-types@6.19.0": {
      "babel-runtime": "npm:babel-runtime@6.20.0",
      "esutils": "npm:esutils@2.0.2",
      "lodash": "npm:lodash@4.17.2",
      "to-fast-properties": "npm:to-fast-properties@1.0.2"
    },
    "npm:babylon@6.14.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:base64id@0.1.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:better-assert@1.0.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "callsite": "npm:callsite@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:bindings@1.2.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:bn.js@4.11.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:browserify-aes@1.0.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-xor": "npm:buffer-xor@1.0.3",
      "cipher-base": "npm:cipher-base@1.0.3",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:browserify-cipher@1.0.0": {
      "browserify-aes": "npm:browserify-aes@1.0.6",
      "browserify-des": "npm:browserify-des@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
    },
    "npm:browserify-des@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "des.js": "npm:des.js@1.0.0",
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:browserify-rsa@4.0.1": {
      "bn.js": "npm:bn.js@4.11.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.3"
    },
    "npm:browserify-sign@4.0.0": {
      "bn.js": "npm:bn.js@4.11.6",
      "browserify-rsa": "npm:browserify-rsa@4.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.3.2",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:browserify-zlib@0.1.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "pako": "npm:pako@0.2.9",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.2.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:buffer-shims@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:buffer-xor@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.8",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:bufferutil@1.2.1": {
      "bindings": "npm:bindings@1.2.1",
      "nan": "npm:nan@2.4.0"
    },
    "npm:chalk@1.1.3": {
      "ansi-styles": "npm:ansi-styles@2.2.1",
      "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
      "has-ansi": "npm:has-ansi@2.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "strip-ansi": "npm:strip-ansi@3.0.1",
      "supports-color": "npm:supports-color@2.0.0"
    },
    "npm:cipher-base@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-js@1.2.7": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-js@2.4.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:create-ecdh@4.0.0": {
      "bn.js": "npm:bn.js@4.11.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.3.2"
    },
    "npm:create-hash@1.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@1.0.1",
      "sha.js": "npm:sha.js@2.4.8"
    },
    "npm:create-hmac@1.1.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:crypto-browserify@3.11.0": {
      "browserify-cipher": "npm:browserify-cipher@1.0.0",
      "browserify-sign": "npm:browserify-sign@4.0.0",
      "create-ecdh": "npm:create-ecdh@4.0.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "diffie-hellman": "npm:diffie-hellman@5.0.2",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2": "npm:pbkdf2@3.0.9",
      "public-encrypt": "npm:public-encrypt@4.0.0",
      "randombytes": "npm:randombytes@2.0.3"
    },
    "npm:debug@2.2.0": {
      "ms": "npm:ms@0.7.1"
    },
    "npm:debug@2.3.3": {
      "ms": "npm:ms@0.7.2"
    },
    "npm:des.js@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
    },
    "npm:diffie-hellman@5.0.2": {
      "bn.js": "npm:bn.js@4.11.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@4.0.0",
      "randombytes": "npm:randombytes@2.0.3",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:domain-browser@1.1.7": {
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:elliptic@6.3.2": {
      "bn.js": "npm:bn.js@4.11.6",
      "brorand": "npm:brorand@1.0.6",
      "hash.js": "npm:hash.js@1.0.3",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:encoding@0.1.12": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "iconv-lite": "npm:iconv-lite@0.4.15"
    },
    "npm:engine.io-client@1.8.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "component-emitter": "npm:component-emitter@1.2.1",
      "component-inherit": "npm:component-inherit@0.0.3",
      "debug": "npm:debug@2.3.3",
      "engine.io-parser": "npm:engine.io-parser@1.3.1",
      "has-cors": "npm:has-cors@1.1.0",
      "indexof": "npm:indexof@0.0.1",
      "parsejson": "npm:parsejson@0.0.3",
      "parseqs": "npm:parseqs@0.0.5",
      "parseuri": "npm:parseuri@0.0.5",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "yeast": "npm:yeast@0.1.2"
    },
    "npm:engine.io-parser@1.2.4": {
      "after": "npm:after@0.8.1",
      "arraybuffer.slice": "npm:arraybuffer.slice@0.0.6",
      "base64-arraybuffer": "npm:base64-arraybuffer@0.1.2",
      "blob": "npm:blob@0.0.4",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "has-binary": "npm:has-binary@0.1.6",
      "utf8": "npm:utf8@2.1.0"
    },
    "npm:engine.io-parser@1.3.1": {
      "after": "npm:after@0.8.1",
      "arraybuffer.slice": "npm:arraybuffer.slice@0.0.6",
      "base64-arraybuffer": "npm:base64-arraybuffer@0.1.5",
      "blob": "npm:blob@0.0.4",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "has-binary": "npm:has-binary@0.1.6",
      "wtf-8": "npm:wtf-8@1.0.0"
    },
    "npm:engine.io@1.8.1": {
      "accepts": "npm:accepts@1.3.1",
      "base64id": "npm:base64id@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "debug": "npm:debug@2.2.0",
      "engine.io-parser": "npm:engine.io-parser@1.2.4",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "ws": "npm:ws@1.0.1",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:evp_bytestokey@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:fbjs@0.8.6": {
      "core-js": "npm:core-js@1.2.7",
      "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
      "loose-envify": "npm:loose-envify@1.3.0",
      "object-assign": "npm:object-assign@4.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "promise": "npm:promise@7.1.1",
      "ua-parser-js": "npm:ua-parser-js@0.7.12"
    },
    "npm:globals@9.14.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:has-ansi@2.0.0": {
      "ansi-regex": "npm:ansi-regex@2.0.0"
    },
    "npm:has-binary@0.1.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "isarray": "npm:isarray@0.0.1"
    },
    "npm:has-binary@0.1.7": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "isarray": "npm:isarray@0.0.1"
    },
    "npm:hash.js@1.0.3": {
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:iconv-lite@0.4.15": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:inline-style-prefixer@2.0.5": {
      "bowser": "npm:bowser@1.6.0",
      "hyphenate-style-name": "npm:hyphenate-style-name@1.0.2"
    },
    "npm:invariant@2.2.2": {
      "loose-envify": "npm:loose-envify@1.3.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:isomorphic-fetch@2.2.1": {
      "node-fetch": "npm:node-fetch@1.6.3",
      "whatwg-fetch": "npm:whatwg-fetch@2.0.1"
    },
    "npm:lodash.merge@4.6.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash.throttle@4.1.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:loose-envify@1.3.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "js-tokens": "npm:js-tokens@2.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:material-ui@0.16.5": {
      "babel-runtime": "npm:babel-runtime@6.20.0",
      "inline-style-prefixer": "npm:inline-style-prefixer@2.0.5",
      "keycode": "npm:keycode@2.1.8",
      "lodash.merge": "npm:lodash.merge@4.6.0",
      "lodash.throttle": "npm:lodash.throttle@4.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "react": "npm:react@15.4.1",
      "react-addons-create-fragment": "npm:react-addons-create-fragment@15.4.1",
      "react-addons-transition-group": "npm:react-addons-transition-group@15.4.1",
      "react-dom": "npm:react-dom@15.4.1",
      "react-event-listener": "npm:react-event-listener@0.4.0",
      "react-tap-event-plugin": "npm:react-tap-event-plugin@2.0.1",
      "recompose": "npm:recompose@0.20.2",
      "simple-assign": "npm:simple-assign@0.1.0",
      "warning": "npm:warning@3.0.0"
    },
    "npm:miller-rabin@4.0.0": {
      "bn.js": "npm:bn.js@4.11.6",
      "brorand": "npm:brorand@1.0.6"
    },
    "npm:mime-db@1.25.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:mime-types@2.1.13": {
      "mime-db": "npm:mime-db@1.25.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:mobx-react@4.0.3": {
      "hoist-non-react-statics": "npm:hoist-non-react-statics@1.2.0",
      "mobx": "npm:mobx@2.6.5",
      "react": "npm:react@15.4.1"
    },
    "npm:nan@2.4.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:node-fetch@1.6.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "encoding": "npm:encoding@0.1.12",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "is-stream": "npm:is-stream@1.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:options@0.0.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:pako@0.2.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:parse-asn1@5.0.0": {
      "asn1.js": "npm:asn1.js@4.9.0",
      "browserify-aes": "npm:browserify-aes@1.0.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "pbkdf2": "npm:pbkdf2@3.0.9",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:parsejson@0.0.3": {
      "better-assert": "npm:better-assert@1.0.2"
    },
    "npm:parseqs@0.0.5": {
      "better-assert": "npm:better-assert@1.0.2"
    },
    "npm:parseuri@0.0.5": {
      "better-assert": "npm:better-assert@1.0.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pbkdf2@3.0.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process-nextick-args@1.0.7": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.9": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:promise@7.1.1": {
      "asap": "npm:asap@2.0.5",
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:public-encrypt@4.0.0": {
      "bn.js": "npm:bn.js@4.11.6",
      "browserify-rsa": "npm:browserify-rsa@4.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "randombytes": "npm:randombytes@2.0.3"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:randombytes@2.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:react-addons-create-fragment@15.4.1": {
      "react": "npm:react@15.4.1"
    },
    "npm:react-addons-shallow-compare@15.4.1": {
      "react": "npm:react@15.4.1"
    },
    "npm:react-addons-transition-group@15.4.1": {
      "react": "npm:react@15.4.1"
    },
    "npm:react-bootstrap@0.30.7": {
      "babel-runtime": "npm:babel-runtime@6.20.0",
      "classnames": "npm:classnames@2.2.5",
      "dom-helpers": "npm:dom-helpers@2.4.0",
      "invariant": "npm:invariant@2.2.2",
      "keycode": "npm:keycode@2.1.8",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "react": "npm:react@15.4.1",
      "react-dom": "npm:react-dom@15.4.1",
      "react-overlays": "npm:react-overlays@0.6.10",
      "react-prop-types": "npm:react-prop-types@0.4.0",
      "uncontrollable": "npm:uncontrollable@4.0.3",
      "warning": "npm:warning@3.0.0"
    },
    "npm:react-dom@15.4.1": {
      "fbjs": "npm:fbjs@0.8.6",
      "loose-envify": "npm:loose-envify@1.3.0",
      "object-assign": "npm:object-assign@4.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "react": "npm:react@15.4.1"
    },
    "npm:react-event-listener@0.4.0": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "react-addons-shallow-compare": "npm:react-addons-shallow-compare@15.4.1",
      "warning": "npm:warning@3.0.0"
    },
    "npm:react-fontawesome@1.4.0": {
      "react": "npm:react@15.4.1"
    },
    "npm:react-overlays@0.6.10": {
      "classnames": "npm:classnames@2.2.5",
      "dom-helpers": "npm:dom-helpers@2.4.0",
      "react": "npm:react@15.4.1",
      "react-dom": "npm:react-dom@15.4.1",
      "react-prop-types": "npm:react-prop-types@0.4.0",
      "warning": "npm:warning@3.0.0"
    },
    "npm:react-prop-types@0.4.0": {
      "react": "npm:react@15.4.1",
      "warning": "npm:warning@3.0.0"
    },
    "npm:react-tap-event-plugin@2.0.1": {
      "fbjs": "npm:fbjs@0.8.6",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "react": "npm:react@15.4.1",
      "react-dom": "npm:react-dom@15.4.1"
    },
    "npm:react@15.4.1": {
      "fbjs": "npm:fbjs@0.8.6",
      "loose-envify": "npm:loose-envify@1.3.0",
      "object-assign": "npm:object-assign@4.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.1.14": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:readable-stream@2.2.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-shims": "npm:buffer-shims@1.0.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "process-nextick-args": "npm:process-nextick-args@1.0.7",
      "string_decoder": "npm:string_decoder@0.10.31",
      "util-deprecate": "npm:util-deprecate@1.0.2"
    },
    "npm:recompose@0.20.2": {
      "change-emitter": "npm:change-emitter@0.1.2",
      "fbjs": "npm:fbjs@0.8.6",
      "hoist-non-react-statics": "npm:hoist-non-react-statics@1.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "react": "npm:react@15.4.1",
      "symbol-observable": "npm:symbol-observable@0.2.4"
    },
    "npm:regenerator-runtime@0.10.1": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:regexpu-core@2.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "regenerate": "npm:regenerate@1.3.2",
      "regjsgen": "npm:regjsgen@0.2.0",
      "regjsparser": "npm:regjsparser@0.1.5",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:regjsparser@0.1.5": {
      "jsesc": "npm:jsesc@0.5.0"
    },
    "npm:ripemd160@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sha.js@2.4.8": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:socket.io-adapter@0.5.0": {
      "debug": "npm:debug@2.3.3",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "socket.io-parser": "npm:socket.io-parser@2.3.1"
    },
    "npm:socket.io-client@1.7.1": {
      "backo2": "npm:backo2@1.0.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "component-bind": "npm:component-bind@1.0.0",
      "component-emitter": "npm:component-emitter@1.2.1",
      "debug": "npm:debug@2.3.3",
      "engine.io-client": "npm:engine.io-client@1.8.1",
      "has-binary": "npm:has-binary@0.1.7",
      "indexof": "npm:indexof@0.0.1",
      "object-component": "npm:object-component@0.0.3",
      "parseuri": "npm:parseuri@0.0.5",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "socket.io-parser": "npm:socket.io-parser@2.3.1",
      "to-array": "npm:to-array@0.1.4"
    },
    "npm:socket.io-parser@2.3.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "component-emitter": "npm:component-emitter@1.1.2",
      "debug": "npm:debug@2.2.0",
      "isarray": "npm:isarray@0.0.1",
      "json3": "npm:json3@3.3.2"
    },
    "npm:socket.io@1.7.1": {
      "debug": "npm:debug@2.3.3",
      "engine.io": "npm:engine.io@1.8.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "has-binary": "npm:has-binary@0.1.7",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "object-assign": "npm:object-assign@4.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "socket.io-adapter": "npm:socket.io-adapter@0.5.0",
      "socket.io-client": "npm:socket.io-client@1.7.1",
      "socket.io-parser": "npm:socket.io-parser@2.3.1",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.14"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:strip-ansi@3.0.1": {
      "ansi-regex": "npm:ansi-regex@2.0.0"
    },
    "npm:supports-color@2.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:ua-parser-js@0.7.12": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:ultron@1.0.2": {
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:uncontrollable@4.0.3": {
      "invariant": "npm:invariant@2.2.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "react": "npm:react@15.4.1"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:utf-8-validate@1.2.1": {
      "bindings": "npm:bindings@1.2.1",
      "nan": "npm:nan@2.4.0"
    },
    "npm:utf8@2.1.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:util-deprecate@1.0.2": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    },
    "npm:warning@3.0.0": {
      "loose-envify": "npm:loose-envify@1.3.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:ws@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "bufferutil": "npm:bufferutil@1.2.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "options": "npm:options@0.0.6",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "tls": "github:jspm/nodelibs-tls@0.1.0",
      "ultron": "npm:ultron@1.0.2",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "utf-8-validate": "npm:utf-8-validate@1.2.1",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    }
  }
});
