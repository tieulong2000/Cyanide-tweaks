(() => {
  log("Test simulation started");

  const route = [
    [20.9878395980194, 105.76664621566559], // đại mỗ
    [20.98274260510976, 105.77034457172157], // nga tu dai mo to huu
    [20.98493961030485, 105.77496231379835], // to huu
    [20.99321445029012, 105.78741469309705], // trung van
    [20.99811828179958, 105.79487533065003], // viwaseen
    [20.999392471540506, 105.7967036997141], // ngatu to huu
    [20.991492790941102, 105.80288360338581], // ngatu nguyen trai
    [20.973450946941313, 105.77874156515063], // ngatu nguyen trai chuvanan
    [220.977590790521337, 105.77531235092079], // giua
    [20.982490266629895, 105.77044173262577], // nga tu dai mo to huu
    [20.9878395980194, 105.76664621566559], // đại mỗ
  ];

  const ok = locsim_start_route(JSON.stringify(route));

  log("start=" + ok);
  setTimeout(
    () => {
      log("Stopping after 15 minutes");
      locsim_stop();
    },
    13 * 60 * 1000,
  );
})();
