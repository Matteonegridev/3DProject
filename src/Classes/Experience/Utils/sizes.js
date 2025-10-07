import { throttle } from "../../../functions/throttle";
import EventEmitter from "./EventEmitter";

export default class Sizes extends EventEmitter {
  constructor() {
    super();
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.pixelRatio = Math.min(window.devicePixelRatio, 2);

    // Resize event:
    window.addEventListener(
      "resize",
      throttle(() => {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.pixelRatio = Math.min(window.devicePixelRatio, 2);
        this.trigger("resize");
      }, 1000)
    );
  }
}
