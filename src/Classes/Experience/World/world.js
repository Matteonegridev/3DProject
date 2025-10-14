import Experience from "../Experience";
import Environment from "../Environment/Environment";

import Floor from "./Floor";
import Fox from "./Fox";

export default class World {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    // reference to resources:
    this.resources = this.experience.resources;

    this.resources.on("ready", () => {
      this.floor = new Floor();
      this.fox = new Fox();
      // Setup
      this.environment = new Environment();
    });
  }
  update() {
    if (this.fox) {
      this.fox.update();
    }
  }
}
