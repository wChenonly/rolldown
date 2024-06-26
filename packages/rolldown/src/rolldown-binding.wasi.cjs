/* eslint-disable */
/* prettier-ignore */

/* auto-generated by NAPI-RS */

const __nodeFs= require('node:fs')
const __nodePath = require('node:path')
const { WASI: __nodeWASI } = require('node:wasi')
const { Worker } = require('node:worker_threads')

const {
  instantiateNapiModuleSync: __emnapiInstantiateNapiModuleSync,
  getDefaultContext: __emnapiGetDefaultContext,
} = require('@napi-rs/wasm-runtime')

const __wasi = new __nodeWASI({
  version: 'preview1',
  env: process.env,
  preopens: {
    '/': '/'
  }
})

const __emnapiContext = __emnapiGetDefaultContext()

const __sharedMemory = new WebAssembly.Memory({
  initial: 16384,
  maximum: 65536,
  shared: true,
})

let __wasmFilePath = __nodePath.join(__dirname, 'rolldown-binding.wasm32-wasi.wasm')

if (!__nodeFs.existsSync(__wasmFilePath)) {
  try {
    __wasmFilePath = __nodePath.resolve('@rolldown/binding-wasm32-wasi')
  } catch {
    throw new Error('Cannot find rolldown-binding.wasm32-wasi.wasm file, and @rolldown/binding-wasm32-wasi package is not installed.')
  }
}

const { instance: __napiInstance, module: __wasiModule, napiModule: __napiModule } = __emnapiInstantiateNapiModuleSync(__nodeFs.readFileSync(__wasmFilePath), {
  context: __emnapiContext,
  asyncWorkPoolSize: (function() {
    const threadsSizeFromEnv = Number(process.env.NAPI_RS_ASYNC_WORK_POOL_SIZE ?? process.env.UV_THREADPOOL_SIZE)
    // NaN > 0 is false
    if (threadsSizeFromEnv > 0) {
      return threadsSizeFromEnv
    } else {
      return 4
    }
  })(),
  wasi: __wasi,
  onCreateWorker() {
    return new Worker(__nodePath.join(__dirname, 'wasi-worker.mjs'), {
      env: process.env,
      execArgv: ['--experimental-wasi-unstable-preview1'],
    })
  },
  overwriteImports(importObject) {
    importObject.env = {
      ...importObject.env,
      ...importObject.napi,
      ...importObject.emnapi,
      memory: __sharedMemory,
    }
    return importObject
  },
  beforeInit({ instance }) {
    __napi_rs_initialize_modules(instance)
  }
})

function __napi_rs_initialize_modules(__napiInstance) {
  __napiInstance.exports['__napi_register__Bundler_struct_0']?.()
  __napiInstance.exports['__napi_register__Bundler_impl_5']?.()
  __napiInstance.exports['__napi_register__BindingInputItem_struct_6']?.()
  __napiInstance.exports['__napi_register__BindingResolveOptions_struct_7']?.()
  __napiInstance.exports['__napi_register__BindingInputOptions_struct_8']?.()
  __napiInstance.exports['__napi_register__BindingOutputOptions_struct_9']?.()
  __napiInstance.exports['__napi_register__BindingPluginContext_struct_10']?.()
  __napiInstance.exports['__napi_register__BindingPluginContext_impl_12']?.()
  __napiInstance.exports['__napi_register__BindingPluginOptions_struct_13']?.()
  __napiInstance.exports['__napi_register__BindingPluginWithIndex_struct_14']?.()
  __napiInstance.exports['__napi_register__BindingHookLoadOutput_struct_15']?.()
  __napiInstance.exports['__napi_register__BindingHookRenderChunkOutput_struct_16']?.()
  __napiInstance.exports['__napi_register__BindingHookResolveIdExtraOptions_struct_17']?.()
  __napiInstance.exports['__napi_register__BindingHookResolveIdOutput_struct_18']?.()
  __napiInstance.exports['__napi_register__BindingPluginContextResolveOptions_struct_19']?.()
  __napiInstance.exports['__napi_register__ParallelJsPluginRegistry_struct_20']?.()
  __napiInstance.exports['__napi_register__ParallelJsPluginRegistry_impl_22']?.()
  __napiInstance.exports['__napi_register__register_plugins_23']?.()
  __napiInstance.exports['__napi_register__BindingOutputAsset_struct_24']?.()
  __napiInstance.exports['__napi_register__BindingOutputAsset_impl_27']?.()
  __napiInstance.exports['__napi_register__BindingOutputChunk_struct_28']?.()
  __napiInstance.exports['__napi_register__BindingOutputChunk_impl_39']?.()
  __napiInstance.exports['__napi_register__BindingOutputs_struct_40']?.()
  __napiInstance.exports['__napi_register__BindingOutputs_impl_43']?.()
  __napiInstance.exports['__napi_register__RenderedChunk_struct_44']?.()
  __napiInstance.exports['__napi_register__BindingRenderedModule_struct_45']?.()
  __napiInstance.exports['__napi_register__AliasItem_struct_46']?.()
}
module.exports.BindingOutputAsset = __napiModule.exports.BindingOutputAsset
module.exports.BindingOutputChunk = __napiModule.exports.BindingOutputChunk
module.exports.BindingOutputs = __napiModule.exports.BindingOutputs
module.exports.BindingPluginContext = __napiModule.exports.BindingPluginContext
module.exports.Bundler = __napiModule.exports.Bundler
module.exports.ParallelJsPluginRegistry = __napiModule.exports.ParallelJsPluginRegistry
module.exports.registerPlugins = __napiModule.exports.registerPlugins
