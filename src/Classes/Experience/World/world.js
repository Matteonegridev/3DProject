import Experience from "../Experience";
import Environment from "../Environment/Environment";

import * as THREE from "three";
import Floor from "./Floor";

export default class World {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    // reference to resources:
    this.resources = this.experience.resources;

    this.resources.on("ready", () => {
      this.floor = new Floor();
      // Setup
      this.environment = new Environment();
    });

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
