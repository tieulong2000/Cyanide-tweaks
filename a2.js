(() => {
  log("active=" + locsim_persistent_active());

  const ok = locsim_append_point(
    10.7776,
    106.7018,

    1.4, // m/s
    45.0, // course
  );

  log("append=" + ok);
})();
