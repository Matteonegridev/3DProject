import Renderer from "./renderer";
import Sizes from "./Utils/sizes";
import Time from "./Utils/time";
import Camera from "./camera";
import World from "./World/world";

import * as THREE from "three";

let instance = null;

export default class Experience {
  constructor(canvas) {
    // Singleton
    if (instance) {
      return instance;
    }
    instance = this;

    this.canvas = canvas;

    // setup: ricorda, l'ordine è importante
    this.sizes = new Sizes();
    this.time = new Time();
    this.scene = new THREE.Scene();
    this.camera = new Camera();
    this.renderer = new Renderer();
    this.world = new World();

    this.sizes.on("resize", () => {
      this.resize();
    });
    this.time.on("tick", () => {
      this.update();
    });
  }
  resize() {
    // propagate to children
    this.camera.resize();
    this.renderer.resize();
  }
  update() {
    //NOTA: mettere sempre camera prima e renderer dopo
    this.camera.update();
    this.renderer.update();
  }
}
