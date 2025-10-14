import Renderer from "./Renderer";
import Sizes from "./Utils/Sizes";
import Time from "./Utils/Time";
import Camera from "./Camera";
import World from "./World/World";
import Resources from "./Utils/Resources";
import sources from "./sources";

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
    this.resources = new Resources(sources);
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
    this.world.update();
    this.renderer.update();
  }
  destroy() {
    this.sizes.off("resize");
    this.time.off("tick");

    // traverse the whole scene:
    this.scene.traverse((child) => {
      console.log(child);
    });
  }
}
