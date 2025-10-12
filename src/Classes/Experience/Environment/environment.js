import Experience from "../Experience.js";
import * as THREE from "three";

export default class Environment {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    // call the resources
    this.resources = this.experience.resources;

    this.setEnvironment();
    this.setEnvironmentMap();
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
  setEnvironmentMap() {
    this.environmentMap = {};
    this.environmentMap.intensity = 0.4;
    this.environmentMap.texture = this.resources.items.environmentMapTexture;
    this.environmentMap.texture.colorSpace = THREE.SRGBColorSpace;

    this.scene.environment = this.environmentMap.texture;

    this.environmentMap.updateMaterials = () => {
      this.scene.traverse((child) => {
        if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial) {
          child.material.envMap = this.environmentMap.texture;
          child.material.envMapIntensity = this.environmentMap.intensity;
          child.material.needsUpdate = true;
        }
      });
    };
    this.environmentMap.updateMaterials();
  }
}
