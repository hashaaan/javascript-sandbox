(() => {
  document.addEventListener("DOMContentLoaded", () => {
    // Check if the browser supports the capture option
    let supportsCaptureOption = false;
    document.createElement("div").addEventListener("test", function () {}, {
      get capture() {
        supportsCaptureOption = true;
        return false;
      },
    });
  });
})();
