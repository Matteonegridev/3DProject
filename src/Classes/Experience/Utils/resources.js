import EventEmitter from "./EventEmitter";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import * as THREE from "three";

export default class Resources extends EventEmitter {
  constructor(sources) {
    super();
    this.sources = sources;

    // setup:
    this.items = {};
    this.toLoad = this.sources.length;
    this.loaded = 0;
    this.setLoaders();
    this.startLoading();
  }
  setLoaders() {
    this.loaders = {};
    this.loaders.gltfLoader = new GLTFLoader();
    this.loaders.textureLoader = new THREE.TextureLoader();
    this.loaders.cubeLoader = new THREE.CubeTextureLoader();
  }
  startLoading() {
    // Load each source
    for (const source of this.sources) {
      if (source.type === "gltfModel") {
        this.loaders.gltfLoader.load(source.path, (file) => {
          this.sourceLoaded(source, file);
        });
      } else if (source.type === "texture") {
        this.loaders.textureLoader.load(source.path, (file) => {
          this.sourceLoaded(source, file);
        });
      } else if (source.type === "cubeTexture") {
        this.loaders.cubeLoader.load(source.path, (file) => {
          this.sourceLoaded(source, file);
        });
      }
    }
  }
}
