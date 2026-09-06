(() => {
  log("Test simulation started");
  locsim_test();

  locsim_start(10.776889, 106.700806);
  setTimeout(() => {
    locsim_stop();
  }, 10000);
})();
