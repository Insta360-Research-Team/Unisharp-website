var imr_items = [
    {
        image: "imr1.png",
        alt: "The instability phenomenon of the previous method",
        caption: "The instability phenomenon of the previous method. PSNR fluctuates significantly across different training rounds, and the quality of the rendered images is highly inconsistent."
    },
    {
        image: "imr2.png",
        alt: "Calculation procedure of the IMR",
        caption: "Calculation procedure of the IMR. The Gaussian point clouds are abstracted as Gaussian mixture distributions, and the 2-Wasserstein Distance and Optimal Transport are used."
    },
    {
        image: "imr3.jpg",
        alt: "IMR comparison on LLFF Dataset",
        caption: "IMR comparison on LLFF Dataset with 3-view and 6-view Settings. All results are tested on ten independent training models."
    }
];


function imr_selection_panel_thumbnail_template(item) {
    return `<div style="width: 170px; height: 100px; display: flex; align-items: center; justify-content: center; background-color: white; border: 1px solid #ddd;">
                <img src="assets/${item.image}" alt="${item.alt}" style="max-width: 100%; max-height: 100%; object-fit: contain;">
            </div>`;
}


function imr_selection_panel_item_template(item) {
    return `<div style="display: flex; justify-content: center; margin: 20px 0;">
                <div class="x-card" style="min-width: 400px; margin: 10px;">
                    <div style="width: 100%; text-align: center; background-color: white;">
                        <img src="assets/${item.image}" alt="${item.alt}" style="width: 100%; height: auto; border-radius: 8px;">
                    </div>
                    <div class="caption" style="text-align: center; margin-top: 10px;">
                        <div style="font-size: 16px;">
                            ${item.caption}
                        </div>
                    </div>
                </div>
            </div>`;
}