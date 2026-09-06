// @param: number | speedKmh | Speed (km/h) | 5
// @param: number | motionStrength | Motion strength | 1

(() => {
  log("Motion test begin");

  const ok = motionsim_start(5, 1);

  log("motionsim_start=" + ok);

  motionsim_coremotion_test();
  // const speedKmh = r_pref_num("speedKmh");
  // const strength = r_pref_num("motionStrength");
  // const ok = motionsim_start(speedKmh, strength);
  // log("motionsim_start=" + ok);
  // const timer = setInterval(() => {
  //   const m = motionsim_sample();
  //   log(
  //     "ACC " +
  //       m.ax.toFixed(3) +
  //       ", " +
  //       m.ay.toFixed(3) +
  //       ", " +
  //       m.az.toFixed(3) +
  //       " | GYRO " +
  //       m.gx.toFixed(3) +
  //       ", " +
  //       m.gy.toFixed(3) +
  //       ", " +
  //       m.gz.toFixed(3),
  //   );
  // }, 500);
})();
