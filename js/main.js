window.onload = function() {
    if (typeof make_carousel !== 'function') return;

    const carousels = [
        ['panorama-showcase-carousel', typeof forward_backward_items !== 'undefined' ? forward_backward_items : [], typeof forward_backward_template !== 'undefined' ? forward_backward_template : null],
        ['orbit-compare-carousel', typeof orbit_compare_items !== 'undefined' ? orbit_compare_items : [], typeof orbit_compare_template !== 'undefined' ? orbit_compare_template : null],
        ['compare-perspective-carousel', typeof compare_perspective_items !== 'undefined' ? compare_perspective_items : [], typeof compare_column_template !== 'undefined' ? compare_column_template : null],
        ['compare-panoramic-carousel', typeof compare_panoramic_items !== 'undefined' ? compare_panoramic_items : [], typeof compare_column_template !== 'undefined' ? compare_column_template : null],
        ['compare-fisheye-carousel', typeof compare_fisheye_items !== 'undefined' ? compare_fisheye_items : [], typeof compare_column_template !== 'undefined' ? compare_column_template : null],
        ['omnirooms-scenes-carousel', typeof omnirooms_scenes_items !== 'undefined' ? omnirooms_scenes_items : [], typeof omnirooms_scene_template !== 'undefined' ? omnirooms_scene_template : null],
    ];

    carousels.forEach(([id, items, template]) => {
        if (document.getElementById(id) && items.length && template) {
            make_carousel(id, template, items, 1, 1);
        }
    });

    if (typeof init_qual_eval_compare_layout === 'function') {
        init_qual_eval_compare_layout();
    }
};
