(() => {
  log("Test simulation started");
  (() => {
    const route = [
      [10.776889, 106.700806],
      [10.77705, 106.701],
      [10.77725, 106.7012],
      [10.77745, 106.7014],
      [10.77765, 106.7016],
      [10.77785, 106.7018],
    ];

    const ok = locsim_start_route(JSON.stringify(route));

    log("locsim_start_route = " + ok);
  })();
})();
