// Qualitative evaluation — three camera columns (assets/compare)
var compare_perspective_items = [
    { image: "website_new_01.png" },
    { image: "website_new_04.png" },
    { image: "website_new_07.png" },
    { image: "website_new_10.png" },
];

var compare_panoramic_items = [
    { image: "website_new_02.png" },
    { image: "website_new_05.png" },
    { image: "website_new_08.png" },
];

var compare_fisheye_items = [
    { image: "website_new_03.png" },
    { image: "website_new_06.png" },
    { image: "website_new_09.png" },
    { image: "website_new_11.png" },
    { image: "website_new_12.png" },
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
    { ours: "AI_vol3_04_last_orbit_erp.gif", sharp: "AI_vol3_04_last.gif" },
    { ours: "AI_vol4_02_last_orbit_erp.gif", sharp: "AI_vol4_02_last.gif" },
    { ours: "AI_vol4_02_middle_orbit_erp.gif", sharp: "AI_vol4_02_middle.gif" },
    { ours: "AI_vol3_04_first_orbit_erp.gif", sharp: "AI_vol3_04_first.gif" },
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

// OmniRooms dataset preview: 16 scene overview grids (2x2)
var omnirooms_scenes_items = [
    { image: "dataset/AIUE5_vol8_03_2x2.jpg" },
    { image: "dataset/AIUE5_vol8_04_2x2.jpg" },
    { image: "dataset/AIUE5_vol8_05_2x2.jpg" },
    { image: "dataset/AIUE_V01_001_2x2.jpg" },
    { image: "dataset/AIUE_V01_003_2x2.jpg" },
    { image: "dataset/AIUE_V01_004_2x2.jpg" },
    { image: "dataset/AIUE_V02_001_2x2.jpg" },
    { image: "dataset/AI_vol3_01_2x2.jpg" },
    { image: "dataset/AI_vol3_02_2x2.jpg" },
    { image: "dataset/AI_vol3_03_2x2.jpg" },
    { image: "dataset/AI_vol3_04_2x2.jpg" },
    { image: "dataset/AI_vol4_01_2x2.jpg" },
    { image: "dataset/AI_vol4_02_2x2.jpg" },
    { image: "dataset/AI_vol4_03_2x2.jpg" },
    { image: "dataset/AI_vol4_04_2x2.jpg" },
    { image: "dataset/AI_vol4_05_2x2.jpg" },
];

function omnirooms_scene_template(item, info) {
    return `
        <div class="x-card dataset-scene-card">
            <div class="dataset-scene-media">
                <img src="assets/${item.image}" alt="OmniRooms scene" loading="lazy">
            </div>
        </div>
    `;
}

function compare_column_template(item, info) {
    return `
        <div class="compare-column-slide">
            <img src="assets/compare/${item.image}" alt="Comparison result" loading="lazy">
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
        <div class="x-card showcase-dual-card showcase-orbit-card">
            <div class="showcase-dual-row showcase-dual-row--orbit">
                <div class="showcase-panel showcase-panel--orbit">
                    <span class="showcase-panel-label">UniSHARP</span>
                    <div class="showcase-panel-media showcase-panel-media--orbit">
                        <img src="assets/ours_orbit/${item.ours}" alt="UniSHARP orbit panorama" loading="lazy">
                    </div>
                </div>
                <div class="showcase-panel showcase-panel--orbit">
                    <span class="showcase-panel-label">SHARP</span>
                    <div class="showcase-panel-media showcase-panel-media--orbit">
                        <img src="assets/sharp_orbit/${item.sharp}" alt="SHARP orbit panorama" loading="lazy">
                    </div>
                </div>
            </div>
        </div>
    `;
}
