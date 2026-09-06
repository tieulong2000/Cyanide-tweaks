(() => {
  log("Test simulation started");

  const route = [
    [10.776889, 106.700806],
    [10.77705, 106.701],
    [10.771521115237947, 106.69085291501864],
  ];

  const ok = locsim_start_route(JSON.stringify(route));

  log("Result = " + ok);
})();
