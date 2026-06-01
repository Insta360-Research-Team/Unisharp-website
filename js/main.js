window.onload = function() {
    if (typeof make_carousel !== 'function') return;

    const carousels = [
        ['panorama-showcase-carousel', typeof forward_backward_items !== 'undefined' ? forward_backward_items : [], typeof forward_backward_template !== 'undefined' ? forward_backward_template : null],
        ['orbit-compare-carousel', typeof orbit_compare_items !== 'undefined' ? orbit_compare_items : [], typeof orbit_compare_template !== 'undefined' ? orbit_compare_template : null],
        ['outdoor-carousel', typeof outdoor_items !== 'undefined' ? outdoor_items : [], typeof carousel_item_template !== 'undefined' ? carousel_item_template : null],
        ['indoor-carousel', typeof indoor_items !== 'undefined' ? indoor_items : [], typeof carousel_item_template !== 'undefined' ? carousel_item_template : null],
        ['details-carousel', typeof details_items !== 'undefined' ? details_items : [], typeof carousel_item_template !== 'undefined' ? carousel_item_template : null],
        ['omnirooms-scenes-carousel', typeof omnirooms_scenes_items !== 'undefined' ? omnirooms_scenes_items : [], typeof omnirooms_scene_template !== 'undefined' ? omnirooms_scene_template : null],
    ];

    carousels.forEach(([id, items, template]) => {
        if (document.getElementById(id) && items.length && template) {
            make_carousel(id, template, items, 1, 1);
        }
    });
};
