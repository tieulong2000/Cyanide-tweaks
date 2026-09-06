(() => {
  log("Test simulation started");

  const route = [
    [10.776889, 106.700806],
    [10.77705, 106.701],
    [10.77725, 106.7012],
  ];

  const ok = locsim_start_route(JSON.stringify(route));

  log("Result = " + ok);
})();
