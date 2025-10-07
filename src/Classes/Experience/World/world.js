import Experience from "../Experience";
import Environment from "../Environment/Environment";

import * as THREE from "three";

export default class World {
  constructor() {
    this.experience = new Experience();
    // call enviroment calss for lights:
    this.environment = new Environment();
    this.scene = this.experience.scene;
    // Test mesh
    const testMesh = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshStandardMaterial({
        metalness: 0.3,
        roughness: 0.9,
      })
    );
    this.scene.add(testMesh);
  }
}
