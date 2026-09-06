// @param: slider | speed | Speed km/h | 20 | 1-100
// @param: switch | loop | Loop Route | true

(() => {
    const route = [
        [10.776889, 106.700806],
        [10.777205, 106.701201],
        [10.777566, 106.701725],
        [10.778012, 106.702212],
        [10.778454, 106.702701],
    ];

    const speed = r_pref_num("speed");
    const loop = r_pref_bool("loop");

    locsim_start_route(
        JSON.stringify(route),
        speed,
        loop
    );

    log("Route simulation started");
})();
