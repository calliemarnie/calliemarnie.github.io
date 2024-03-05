import { gsap } from "gsap";

import "./style.css";

window.addEventListener("DOMContentLoaded", function () {
  const cursor = document.getElementById("cursor")!;
  const cursorSize = cursor.clientWidth;

  this.addEventListener("mousemove", function (e) {
    const { clientX, clientY } = e;

    gsap.to(cursor, {
      x: clientX - cursorSize / 2,
      y: clientY - cursorSize / 2,
    });
  });
});
