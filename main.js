(() => {
  document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");

    // Without passive option (may trigger performance warnings)
    // app.addEventListener("touchstart", function (event) {
    //   event.preventDefault(); // This blocks scrolling, causing a warning
    //   console.log("Touchstart event triggered");
    // });

    // app.addEventListener("wheel", function (event) {
    //   event.preventDefault(); // This blocks scrolling, causing a warning
    //   console.log("Wheel event triggered");
    // });

    // Recommended: Use passive option to avoid blocking scrolling
    app.addEventListener(
      "touchstart",
      function () {
        console.log("Touchstart event triggered (passive)");
      },
      { passive: true }
    );

    app.addEventListener(
      "wheel",
      function () {
        console.log("Wheel event triggered (passive)");
      },
      { passive: true }
    );
  });
})();
