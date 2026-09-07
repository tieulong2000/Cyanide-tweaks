(() => {
  const route = [
    [10.776889, 106.700806],
    [10.77705, 106.70105],
    [10.77725, 106.7014],
  ];
  locsim_keeper_start();
  const ok = locsim_start_route(JSON.stringify(route), 14, 2);

  log("start=" + ok);
  function startLoop() {
    log("active=" + locsim_persistent_active());

    const ok = locsim_append_point(
      10.7776,
      106.7018,

      1.4, // m/s
      45.0, // course
    );

    log("append=" + ok);
    setTimeout(() => {
      startLoop();
    }, 5000);
  }
  startLoop();
})();
