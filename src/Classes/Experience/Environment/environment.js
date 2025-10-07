import Experience from "../experience";
import * as THREE from "three";

export default class Environment {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;

    this.setEnvironment();
  }
  setEnvironment() {
    this.instance = new THREE.DirectionalLight(0xffffff, 4);
    this.instance.castShadow = true;
    this.instance.shadow.camera.far = 15;
    this.instance.shadow.mapSize.set(1024, 1024);
    this.instance.shadow.normalBias = 0.05;
    this.instance.position.set(3.5, 2, -1.25);
    this.scene.add(this.instance);
  }
}
