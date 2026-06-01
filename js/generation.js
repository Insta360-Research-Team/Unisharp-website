// Comparison on outdoor scenes (01-06)
var outdoor_items = [
    { image: "website_01.png" },
    { image: "website_02.png" },
    { image: "website_03.png" },
    { image: "website_04.png" },
];

// Comparison on indoor scenes (07-08)
var indoor_items = [
    { image: "website_05.png" },
    { image: "website_06.png" },
    { image: "website_07.png" },
];

// Comparison on Fine-grained Details (09-11)
var details_items = [
    { image: "website_08.png" },
    { image: "website_09.png" },
    { image: "website_10.png" },
    { image: "website_11.png" },
    { image: "website_12.png" },
];

// Panorama showcase: ERP (left) + cubemap (right)
var forward_backward_items = [
    { erp: "AI_vol3_01_middle_forward_erp.gif", cube: "AI_vol3_01_middle_cube.gif" },
    { erp: "AIUE5_vol8_04_random_forward_erp.gif", cube: "AIUE5_vol8_04_random_cube.gif" },
    { erp: "AIUE5_vol8_03_random_backward_erp.gif", cube: "AIUE5_vol8_03_random_cube.gif" },
    { erp: "AIUE5_vol8_05_middle_forward_erp.gif", cube: "AIUE5_vol8_05_middle_cube.gif" },
    { erp: "AIUE5_vol8_05_middle_backward_erp.gif", cube: "AIUE5_vol8_05_middle_cube.gif" },
    { erp: "AIUE_V01_003_last_forward_erp.gif", cube: "AIUE_V01_003_last_cube.gif" },
    { erp: "AIUE_V01_003_last_backward_erp.gif", cube: "AIUE_V01_003_last_cube.gif" },
    { erp: "AIUE_V01_003_random_backward_erp.gif", cube: "AIUE_V01_003_random_cube.gif" },
    { erp: "AI_vol3_02_middle_backward_erp.gif", cube: "AI_vol3_02_middle_cube.gif" },
    { erp: "AI_vol3_03_first_forward_erp.gif", cube: "AI_vol3_03_first_cube.gif" },
    { erp: "AI_vol4_01_first_forward_erp.gif", cube: "AI_vol4_01_first_cube.gif" },
    { erp: "AI_vol4_01_random_forward_erp.gif", cube: "AI_vol4_01_random_cube.gif" },
    { erp: "AI_vol4_02_first_backward_erp.gif", cube: "AI_vol4_02_first_cube.gif" },
    { erp: "AI_vol4_02_last_forward_erp.gif", cube: "AI_vol4_02_last_cube.gif" },
    { erp: "AI_vol4_02_last_backward_erp.gif", cube: "AI_vol4_02_last_cube.gif" },
    { erp: "AI_vol4_03_last_forward_erp.gif", cube: "AI_vol4_03_last_cube.gif" },
    { erp: "AI_vol4_03_last_backward_erp.gif", cube: "AI_vol4_03_last_cube.gif" },
    { erp: "AI_vol4_03_random_forward_erp.gif", cube: "AI_vol4_03_random_cube.gif" },
    { erp: "AI_vol4_03_random_backward_erp.gif", cube: "AI_vol4_03_random_cube.gif" },
    { erp: "AI_vol4_04_random_forward_erp.gif", cube: "AI_vol4_04_random_cube.gif" },
    { erp: "AI_vol4_04_random_backward_erp.gif", cube: "AI_vol4_04_random_cube.gif" },
    { erp: "AI_vol4_05_last_forward_erp.gif", cube: "AI_vol4_05_last_cube.gif" },
    { erp: "AI_vol4_05_middle_forward_erp.gif", cube: "AI_vol4_05_middle_cube_left.gif" },
    { erp: "AI_vol4_05_middle_backward_erp.gif", cube: "AI_vol4_05_middle_cube_left.gif" },
];

// UniSHARP vs SHARP orbit panorama (first 3 slides moved to the end)
var orbit_compare_items = [
    { ours: "AI_vol3_03_first_orbit_erp.gif", sharp: "AI_vol3_03_first.gif" },
    { ours: "AI_vol3_04_first_orbit_erp.gif", sharp: "AI_vol3_04_first.gif" },
    { ours: "AI_vol3_04_last_orbit_erp.gif", sharp: "AI_vol3_04_last.gif" },
    { ours: "AI_vol4_02_last_orbit_erp.gif", sharp: "AI_vol4_02_last.gif" },
    { ours: "AI_vol4_02_middle_orbit_erp.gif", sharp: "AI_vol4_02_middle.gif" },
    { ours: "AI_vol4_02_random_orbit_erp.gif", sharp: "AI_vol4_02_random.gif" },
    { ours: "AI_vol4_03_last_orbit_erp.gif", sharp: "AI_vol4_03_last.gif" },
    { ours: "AI_vol4_03_middle_orbit_erp.gif", sharp: "AI_vol4_03_middle.gif" },
    { ours: "AI_vol4_03_random_orbit_erp.gif", sharp: "AI_vol4_03_random.gif" },
    { ours: "AI_vol4_04_random_orbit_erp.gif", sharp: "AI_vol4_04_random.gif" },
    { ours: "AI_vol4_05_last_orbit_erp.gif", sharp: "AI_vol4_05_last.gif" },
    { ours: "AI_vol4_05_middle_orbit_erp.gif", sharp: "AI_vol4_05_middle.gif" },
    { ours: "AIUE5_vol8_05_random_orbit_erp.gif", sharp: "AIUE5_vol8_05_random.gif" },
    { ours: "AIUE_V01_004_random_orbit_erp.gif", sharp: "AIUE_V01_004_random.gif" },
    { ours: "AI_vol3_01_last_orbit_erp.gif", sharp: "AI_vol3_01_last.gif" },
];

function carousel_item_template(item, info) {
    return `
        <div class="x-card" style="min-width: 300px; max-width: 900px; margin: 10px auto;">
            <div style="width: 100%; text-align: center;">
                <img src="assets/${item.image}" alt="" style="width: 100%; height: auto; border-radius: 8px;">
            </div>
        </div>
    `;
}

function forward_backward_template(item, info) {
    return `
        <div class="x-card showcase-dual-card">
            <div class="showcase-dual-row showcase-dual-row--panorama-perf">
                <div class="showcase-panel showcase-panel--erp">
                    <span class="showcase-panel-label">Panorama</span>
                    <div class="showcase-panel-media showcase-panel-media--synced">
                        <img src="assets/forward_backward/${item.erp}" alt="Panorama" loading="lazy">
                    </div>
                </div>
                <div class="showcase-panel showcase-panel--cube">
                    <span class="showcase-panel-label">Cubemap</span>
                    <div class="showcase-panel-media showcase-panel-media--synced">
                        <img src="assets/forward_backward/${item.cube}" alt="Cubemap" loading="lazy">
                    </div>
                </div>
            </div>
        </div>
    `;
}

function orbit_compare_template(item, info) {
    return `
        <div class="x-card showcase-dual-card">
            <div class="showcase-dual-row showcase-dual-row--orbit">
                <div class="showcase-panel showcase-panel--half">
                    <span class="showcase-panel-label">UniSHARP</span>
                    <div class="showcase-panel-media showcase-panel-media--synced">
                        <img src="assets/ours_orbit/${item.ours}" alt="UniSHARP orbit panorama" loading="lazy">
                    </div>
                </div>
                <div class="showcase-panel showcase-panel--half">
                    <span class="showcase-panel-label">SHARP</span>
                    <div class="showcase-panel-media showcase-panel-media--synced">
                        <img src="assets/sharp_orbit/${item.sharp}" alt="SHARP orbit panorama" loading="lazy">
                    </div>
                </div>
            </div>
        </div>
    `;
}
