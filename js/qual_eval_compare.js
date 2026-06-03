var QUAL_EVAL_CAROUSEL_IDS = [
    'compare-perspective-carousel',
    'compare-panoramic-carousel',
    'compare-fisheye-carousel',
];

function qual_eval_visible_image(carousel_id) {
    var carousel = document.getElementById(carousel_id);
    if (!carousel) return null;
    return carousel.querySelector('.x-carousel-slider-item img');
}

function layout_qual_eval_compare() {
    var root = document.getElementById('qual-eval-compare');
    var grid = document.querySelector('.qual-eval-compare-grid');
    if (!root || !grid) return;

    if (window.matchMedia('(max-width: 960px)').matches) {
        root.style.removeProperty('--qual-eval-img-height');
        return;
    }

    var gap = 6;
    var root_style = window.getComputedStyle(root);
    var pad_x = parseFloat(root_style.paddingLeft) + parseFloat(root_style.paddingRight);
    var target_width = Math.min(1200, root.clientWidth);
    var available_width = target_width - pad_x - gap * 2;
    if (available_width <= 0) return;

    var aspect_sum = 0;
    QUAL_EVAL_CAROUSEL_IDS.forEach(function (id) {
        var img = qual_eval_visible_image(id);
        if (img && img.naturalWidth > 0) {
            aspect_sum += img.naturalWidth / img.naturalHeight;
        } else {
            aspect_sum += 0.29;
        }
    });

    if (aspect_sum <= 0) return;

    // Max height that keeps three columns within available width (no overlap)
    var height = available_width / aspect_sum;

    root.style.setProperty('--qual-eval-img-height', height + 'px');
}

function schedule_qual_eval_layout() {
    layout_qual_eval_compare();
    QUAL_EVAL_CAROUSEL_IDS.forEach(function (id) {
        var img = qual_eval_visible_image(id);
        if (img && !img.complete) {
            img.addEventListener('load', layout_qual_eval_compare, { once: true });
        }
    });
}

function init_qual_eval_compare_layout() {
    if (!document.getElementById('qual-eval-compare')) return;
    schedule_qual_eval_layout();
    window.addEventListener('resize', layout_qual_eval_compare);
}
