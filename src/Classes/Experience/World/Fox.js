import Experience from "../Experience";
import * as THREE from "three";

export default class Fox {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    //access the time class to get animation:
    this.time = this.experience.time;

    // setup: retrieve fox resource:
    this.resource = this.resources.items.foxModel;
    console.log(this.resource);

    this.setModel();
    this.setAnimation();
  }
  setModel() {
    this.model = this.resource.scene;
    this.model.scale.set(0.02, 0.02, 0.02);
    this.model.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
      }
    });

    this.scene.add(this.model);
  }
  setAnimation() {
    this.animation = {};
    this.animation.mixer = new THREE.AnimationMixer(this.model);
    // access the animation from the resources:
    this.animation.action = this.animation.mixer.clipAction(this.resource.animations[0]);
    this.animation.action.play();
  }
  update() {
    this.animation.mixer.update(this.time.delta * 0.001);
  }
}
