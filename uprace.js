// @param: slider | speedKmh | Speed (km/h) | 14 | 1-100
// @param: slider | durationMinutes | Duration (minutes) | 30 | 5-180
// @param: switch | autoStop | Auto stop | true
// @param: switch | vibrate | Vibrate | true
// @param: slider | vibrate_ms | Vibrate (ms) | 800 | 100-5000

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

  log("Starting route...Speed = " + speedKmh + " km/h");

  const ok = locsim_start_route(JSON.stringify(route), r_pref_num("speedKmh"));

  log("locsim_start_route = " + ok);

  if (!ok) {
    log("Failed to start simulation");
    return;
  }
  let vibrationTimer;
  if (r_pref_bool("vibrate")) {
    let step = false;
    vibrationTimer = setInterval(
      () => {
        r_vibrate(step ? 0 : 2);
        step = !step;
      },
      Number(r_pref_num("vibrate_ms")),
    );
  }
  if (r_pref_bool("autoStop")) {
    let minutes = Number(r_pref_num("durationMinutes"));

    if (!Number.isFinite(minutes) || minutes <= 0) {
      minutes = 15;
    }

    const durationMs = minutes * 60 * 1000;

    log("Simulation will stop after " + minutes + " minute(s)");

    setTimeout(() => {
      log("Stopping simulation...");

      const stopped = locsim_stop();

      log("locsim_stop = " + stopped);

      if (vibrationTimer) {
        clearInterval(vibrationTimer);
      }
    }, durationMs);
  }
})();
