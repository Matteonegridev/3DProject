import Experience from "../experience";
import * as THREE from "three";

export default class Environment {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;

    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    this.scene.add(ambientLight);
  }
}
