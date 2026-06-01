/**
 * GlobalSplat-style unified comparison: one panel, drag horizontally (baseline | ours)
 * and vertically (methods | GT). Inspired by https://r-itk.github.io/globalsplat/
 */

const CMP_OURS_LABEL = 'UniSHARP';
const CMP_GT_LABEL = 'GT';

const PERS_METHODS = [
    { id: 'sharp', label: 'SHARP' },
    { id: 'tmpi', label: 'TMPI' },
    { id: 'lvsm', label: 'LVSM' },
    { id: 'flash3d', label: 'Flash3D' },
];

const PANO_METHODS = [
    { id: 'panodreamer', label: 'PanoDreamer' },
    { id: 'matrix3d', label: 'Matrix3D' },
];

const PERS_SCENES = [
    {
        id: 'dl3dv_5K_0efac322d54f630756a1f003e3022fe766fe22f5dff2bcfe5ad219f7a08f0efc_g01062',
        paths: {
            gt: 'assets/pers/dl3dv_5K_0efac322d54f630756a1f003e3022fe766fe22f5dff2bcfe5ad219f7a08f0efc_g01062/gt_dl3dv_5K_0efac322d54f630756a1f003e3022fe766fe22f5dff2bcfe5ad219f7a08f0efc_g01062.gif',
            ours: 'assets/pers/dl3dv_5K_0efac322d54f630756a1f003e3022fe766fe22f5dff2bcfe5ad219f7a08f0efc_g01062/ours_dl3dv_5K_0efac322d54f630756a1f003e3022fe766fe22f5dff2bcfe5ad219f7a08f0efc_g01062.gif',
            sharp: 'assets/pers/dl3dv_5K_0efac322d54f630756a1f003e3022fe766fe22f5dff2bcfe5ad219f7a08f0efc_g01062/sharp_dl3dv_5K_0efac322d54f630756a1f003e3022fe766fe22f5dff2bcfe5ad219f7a08f0efc_g01062.gif',
            tmpi: 'assets/pers/dl3dv_5K_0efac322d54f630756a1f003e3022fe766fe22f5dff2bcfe5ad219f7a08f0efc_g01062/tmpi_dl3dv_5K_0efac322d54f630756a1f003e3022fe766fe22f5dff2bcfe5ad219f7a08f0efc_g01062.gif',
            lvsm: 'assets/pers/dl3dv_5K_0efac322d54f630756a1f003e3022fe766fe22f5dff2bcfe5ad219f7a08f0efc_g01062/lvsm_dl3dv_5K_0efac322d54f630756a1f003e3022fe766fe22f5dff2bcfe5ad219f7a08f0efc_g01062.gif',
            flash3d: 'assets/pers/dl3dv_5K_0efac322d54f630756a1f003e3022fe766fe22f5dff2bcfe5ad219f7a08f0efc_g01062/flash3d_dl3dv_5K_0efac322d54f630756a1f003e3022fe766fe22f5dff2bcfe5ad219f7a08f0efc_g01062.gif',
        },
    },
    {
        id: 'dl3dv_6K_0ad86fe66c3bc6edcc907926af6ae790b5576fe6a8a2fadf51d1000ecce14569_g00569',
        paths: {
            gt: 'assets/pers/dl3dv_6K_0ad86fe66c3bc6edcc907926af6ae790b5576fe6a8a2fadf51d1000ecce14569_g00569/gt_dl3dv_6K_0ad86fe66c3bc6edcc907926af6ae790b5576fe6a8a2fadf51d1000ecce14569_g00569.gif',
            ours: 'assets/pers/dl3dv_6K_0ad86fe66c3bc6edcc907926af6ae790b5576fe6a8a2fadf51d1000ecce14569_g00569/ours_dl3dv_6K_0ad86fe66c3bc6edcc907926af6ae790b5576fe6a8a2fadf51d1000ecce14569_g00569.gif',
            sharp: 'assets/pers/dl3dv_6K_0ad86fe66c3bc6edcc907926af6ae790b5576fe6a8a2fadf51d1000ecce14569_g00569/sharp_dl3dv_6K_0ad86fe66c3bc6edcc907926af6ae790b5576fe6a8a2fadf51d1000ecce14569_g00569.gif',
            tmpi: 'assets/pers/dl3dv_6K_0ad86fe66c3bc6edcc907926af6ae790b5576fe6a8a2fadf51d1000ecce14569_g00569/tmpi_dl3dv_6K_0ad86fe66c3bc6edcc907926af6ae790b5576fe6a8a2fadf51d1000ecce14569_g00569.gif',
            lvsm: 'assets/pers/dl3dv_6K_0ad86fe66c3bc6edcc907926af6ae790b5576fe6a8a2fadf51d1000ecce14569_g00569/lvsm_dl3dv_6K_0ad86fe66c3bc6edcc907926af6ae790b5576fe6a8a2fadf51d1000ecce14569_g00569.gif',
            flash3d: 'assets/pers/dl3dv_6K_0ad86fe66c3bc6edcc907926af6ae790b5576fe6a8a2fadf51d1000ecce14569_g00569/flash3d_dl3dv_6K_0ad86fe66c3bc6edcc907926af6ae790b5576fe6a8a2fadf51d1000ecce14569_g00569.gif',
        },
    },
    {
        id: 'dl3dv_6K_b354bc4339a7008bf0b621d50f509fd51b8a0b616d7aa1db2c1eee3aefc9c69b_g01731',
        paths: {
            gt: 'assets/pers/dl3dv_6K_b354bc4339a7008bf0b621d50f509fd51b8a0b616d7aa1db2c1eee3aefc9c69b_g01731/gt_dl3dv_6K_b354bc4339a7008bf0b621d50f509fd51b8a0b616d7aa1db2c1eee3aefc9c69b_g01731.gif',
            ours: 'assets/pers/dl3dv_6K_b354bc4339a7008bf0b621d50f509fd51b8a0b616d7aa1db2c1eee3aefc9c69b_g01731/ours_dl3dv_6K_b354bc4339a7008bf0b621d50f509fd51b8a0b616d7aa1db2c1eee3aefc9c69b_g01731.gif',
            sharp: 'assets/pers/dl3dv_6K_b354bc4339a7008bf0b621d50f509fd51b8a0b616d7aa1db2c1eee3aefc9c69b_g01731/sharp_dl3dv_6K_b354bc4339a7008bf0b621d50f509fd51b8a0b616d7aa1db2c1eee3aefc9c69b_g01731.gif',
            tmpi: 'assets/pers/dl3dv_6K_b354bc4339a7008bf0b621d50f509fd51b8a0b616d7aa1db2c1eee3aefc9c69b_g01731/tmpi_dl3dv_6K_b354bc4339a7008bf0b621d50f509fd51b8a0b616d7aa1db2c1eee3aefc9c69b_g01731.gif',
            lvsm: 'assets/pers/dl3dv_6K_b354bc4339a7008bf0b621d50f509fd51b8a0b616d7aa1db2c1eee3aefc9c69b_g01731/lvsm_dl3dv_6K_b354bc4339a7008bf0b621d50f509fd51b8a0b616d7aa1db2c1eee3aefc9c69b_g01731.gif',
            flash3d: 'assets/pers/dl3dv_6K_b354bc4339a7008bf0b621d50f509fd51b8a0b616d7aa1db2c1eee3aefc9c69b_g01731/flash3d_dl3dv_6K_b354bc4339a7008bf0b621d50f509fd51b8a0b616d7aa1db2c1eee3aefc9c69b_g01731.gif',
        },
    },
    {
        id: 'dl3dv_8K_431fe389b2cbd77afa3e2e393d75bf55a08fded42d7b45f8b4404efa75e3b9f0_g01402',
        paths: {
            gt: 'assets/pers/dl3dv_8K_431fe389b2cbd77afa3e2e393d75bf55a08fded42d7b45f8b4404efa75e3b9f0_g01402/gt_dl3dv_8K_431fe389b2cbd77afa3e2e393d75bf55a08fded42d7b45f8b4404efa75e3b9f0_g01402.gif',
            ours: 'assets/pers/dl3dv_8K_431fe389b2cbd77afa3e2e393d75bf55a08fded42d7b45f8b4404efa75e3b9f0_g01402/ours_dl3dv_8K_431fe389b2cbd77afa3e2e393d75bf55a08fded42d7b45f8b4404efa75e3b9f0_g01402.gif',
            sharp: 'assets/pers/dl3dv_8K_431fe389b2cbd77afa3e2e393d75bf55a08fded42d7b45f8b4404efa75e3b9f0_g01402/sharp_dl3dv_8K_431fe389b2cbd77afa3e2e393d75bf55a08fded42d7b45f8b4404efa75e3b9f0_g01402.gif',
            tmpi: 'assets/pers/dl3dv_8K_431fe389b2cbd77afa3e2e393d75bf55a08fded42d7b45f8b4404efa75e3b9f0_g01402/tmpi_dl3dv_8K_431fe389b2cbd77afa3e2e393d75bf55a08fded42d7b45f8b4404efa75e3b9f0_g01402.gif',
            lvsm: 'assets/pers/dl3dv_8K_431fe389b2cbd77afa3e2e393d75bf55a08fded42d7b45f8b4404efa75e3b9f0_g01402/lvsm_dl3dv_8K_431fe389b2cbd77afa3e2e393d75bf55a08fded42d7b45f8b4404efa75e3b9f0_g01402.gif',
            flash3d: 'assets/pers/dl3dv_8K_431fe389b2cbd77afa3e2e393d75bf55a08fded42d7b45f8b4404efa75e3b9f0_g01402/flash3d_dl3dv_8K_431fe389b2cbd77afa3e2e393d75bf55a08fded42d7b45f8b4404efa75e3b9f0_g01402.gif',
        },
    },
];

/* Panorama slide order (custom): 3→1, 4→2, 6→3, 1→4, 5 unchanged, 2→6 */
const PANO_SCENES = [
    {
        id: 'gap11_replica_office_4_0001_g00056',
        paths: {
            gt: 'assets/pano/gap11_replica_office_4_0001_g00056_gt.gif',
            ours: 'assets/pano/gap11_replica_office_4_0001_g00056_ours.gif',
            matrix3d: 'assets/pano/gap11_replica_office_4_0001_g00056_matrix3d.gif',
            panodreamer: 'assets/pano/gap11_replica_office_4_0001_g00056_panodreamer.gif',
        },
    },
    {
        id: 'gap13_replica_apartment_2_0002_g00165',
        paths: {
            gt: 'assets/pano/gap13_replica_apartment_2_0002_g00165_gt.gif',
            ours: 'assets/pano/gap13_replica_apartment_2_0002_g00165_ours.gif',
            matrix3d: 'assets/pano/gap13_replica_apartment_2_0002_g00165_matrix3d.gif',
            panodreamer: 'assets/pano/gap13_replica_apartment_2_0002_g00165_panodreamer.gif',
        },
    },
    {
        id: 'gap20_replica_apartment_2_0003_g00003',
        paths: {
            gt: 'assets/pano/gap20_replica_apartment_2_0003_g00003_gt.gif',
            ours: 'assets/pano/gap20_replica_apartment_2_0003_g00003_ours.gif',
            matrix3d: 'assets/pano/gap20_replica_apartment_2_0003_g00003_matrix3d.gif',
            panodreamer: 'assets/pano/gap20_replica_apartment_2_0003_g00003_panodreamer.gif',
        },
    },
    {
        id: 'gap01_replica_room_0_0004_g00018',
        paths: {
            gt: 'assets/pano/gap01_replica_room_0_0004_g00018_gt.gif',
            ours: 'assets/pano/gap01_replica_room_0_0004_g00018_ours.gif',
            matrix3d: 'assets/pano/gap01_replica_room_0_0004_g00018_matrix3d.gif',
            panodreamer: 'assets/pano/gap01_replica_room_0_0004_g00018_panodreamer.gif',
        },
    },
    {
        id: 'gap18_replica_office_0_0001_g00171',
        paths: {
            gt: 'assets/pano/gap18_replica_office_0_0001_g00171_gt.gif',
            ours: 'assets/pano/gap18_replica_office_0_0001_g00171_ours.gif',
            matrix3d: 'assets/pano/gap18_replica_office_0_0001_g00171_matrix3d.gif',
            panodreamer: 'assets/pano/gap18_replica_office_0_0001_g00171_panodreamer.gif',
        },
    },
    {
        id: 'gap04_replica_hotel_0_0001_g00060',
        paths: {
            gt: 'assets/pano/gap04_replica_hotel_0_0001_g00060_gt.gif',
            ours: 'assets/pano/gap04_replica_hotel_0_0001_g00060_ours.gif',
            matrix3d: 'assets/pano/gap04_replica_hotel_0_0001_g00060_matrix3d.gif',
            panodreamer: 'assets/pano/gap04_replica_hotel_0_0001_g00060_panodreamer.gif',
        },
    },
];

function cmpBuildMethodTabs(methods, activeId) {
    return methods.map((m) =>
        `<button type="button" class="cmp-method-tab${m.id === activeId ? ' active' : ''}" data-method="${m.id}">${m.label}</button>`
    ).join('');
}

function cmpBuildUnifiedWidget(scene, methodId, methods) {
    const baseline = methods.find((m) => m.id === methodId);
    const baselineLabel = baseline.label;
    const baselineSrc = scene.paths[methodId];

    return `
        <div class="cmp-widget" data-scene="${scene.id}">
            <div class="cmp-unified" data-method="${methodId}">
                <div class="cmp-layer cmp-layer-gt">
                    <img src="${scene.paths.gt}" alt="${CMP_GT_LABEL}" loading="lazy" draggable="false">
                </div>
                <div class="cmp-layer cmp-layer-ours">
                    <img src="${scene.paths.ours}" alt="${CMP_OURS_LABEL}" loading="lazy" draggable="false">
                </div>
                <div class="cmp-layer cmp-layer-baseline">
                    <img src="${baselineSrc}" alt="${baselineLabel}" loading="lazy" draggable="false">
                </div>
                <span class="cmp-label cmp-label-baseline">${baselineLabel}</span>
                <span class="cmp-label cmp-label-ours">${CMP_OURS_LABEL}</span>
                <span class="cmp-label cmp-label-gt">${CMP_GT_LABEL}</span>
                <div class="cmp-guide-v" aria-hidden="true"></div>
                <div class="cmp-guide-h" aria-hidden="true"></div>
                <div class="cmp-crosshair" aria-hidden="true"></div>
            </div>
        </div>
    `;
}

function cmpApplySplits(unified, h, v) {
    const hPct = Math.max(5, Math.min(95, h * 100));
    const vPct = Math.max(5, Math.min(95, v * 100));

    unified.style.setProperty('--h-split', `${hPct}%`);
    unified.style.setProperty('--v-split', `${vPct}%`);

    const baseline = unified.querySelector('.cmp-layer-baseline');
    const ours = unified.querySelector('.cmp-layer-ours');
    const gt = unified.querySelector('.cmp-layer-gt');

    if (baseline) {
        baseline.style.clipPath = `polygon(0 0, ${hPct}% 0, ${hPct}% ${vPct}%, 0 ${vPct}%)`;
    }
    if (ours) {
        ours.style.clipPath = `polygon(${hPct}% 0, 100% 0, 100% ${vPct}%, ${hPct}% ${vPct}%)`;
    }
    if (gt) {
        gt.style.clipPath = `polygon(0 ${vPct}%, 100% ${vPct}%, 100% 100%, 0 100%)`;
    }
}

function cmpInitUnified(unified) {
    let touchActive = false;

    const updateFromEvent = (clientX, clientY) => {
        const rect = unified.getBoundingClientRect();
        const h = (clientX - rect.left) / rect.width;
        const v = (clientY - rect.top) / rect.height;
        cmpApplySplits(unified, h, v);
    };

    const onPointer = (e) => {
        const x = e.clientX ?? e.touches?.[0]?.clientX;
        const y = e.clientY ?? e.touches?.[0]?.clientY;
        if (x == null || y == null) return;
        updateFromEvent(x, y);
    };

    unified.addEventListener('mousemove', onPointer);
    unified.addEventListener('mouseenter', onPointer);
    unified.addEventListener('touchstart', (e) => {
        touchActive = true;
        onPointer(e);
        e.preventDefault();
    }, { passive: false });
    unified.addEventListener('touchmove', (e) => {
        if (!touchActive) return;
        onPointer(e);
        e.preventDefault();
    }, { passive: false });
    unified.addEventListener('touchend', () => { touchActive = false; });

    cmpApplySplits(unified, 0.5, 0.5);
}

function cmpSetWidgetBaseline(widget, scene, methodId, methods) {
    const method = methods.find((m) => m.id === methodId);
    const img = widget.querySelector('.cmp-layer-baseline img');
    const label = widget.querySelector('.cmp-label-baseline');
    const unified = widget.querySelector('.cmp-unified');
    if (img) {
        img.src = scene.paths[methodId];
        img.alt = method.label;
    }
    if (label) label.textContent = method.label;
    if (unified) unified.dataset.method = methodId;
}

function cmpInitGlobalTabs(tabsId, methods, widgetsSelector, scenes, getSceneForWidget) {
    const tabsEl = document.getElementById(tabsId);
    if (!tabsEl) return;

    let activeMethod = methods[0].id;
    tabsEl.innerHTML = cmpBuildMethodTabs(methods, activeMethod);

    const applyMethod = (methodId) => {
        activeMethod = methodId;
        tabsEl.querySelectorAll('.cmp-method-tab').forEach((tab) => {
            tab.classList.toggle('active', tab.dataset.method === methodId);
        });
        document.querySelectorAll(widgetsSelector).forEach((widget) => {
            const scene = getSceneForWidget(widget);
            if (scene) cmpSetWidgetBaseline(widget, scene, methodId, methods);
        });
    };

    tabsEl.querySelectorAll('.cmp-method-tab').forEach((tab) => {
        tab.addEventListener('click', () => applyMethod(tab.dataset.method));
    });

    return applyMethod;
}

function cmpInitPerspectiveGrid(gridId, tabsId) {
    const grid = document.getElementById(gridId);
    if (!grid) return;

    const defaultMethod = PERS_METHODS[0].id;
    grid.innerHTML = PERS_SCENES.map((scene) =>
        `<div class="cmp-pers-cell">${cmpBuildUnifiedWidget(scene, defaultMethod, PERS_METHODS)}</div>`
    ).join('');

    grid.querySelectorAll('.cmp-unified').forEach((u) => cmpInitUnified(u));

    cmpInitGlobalTabs(
        tabsId,
        PERS_METHODS,
        `#${gridId} .cmp-widget`,
        PERS_SCENES,
        (widget) => PERS_SCENES.find((s) => s.id === widget.dataset.scene)
    );
}

function cmpInitPanoCarousel(carouselId, tabsId) {
    const container = document.getElementById(carouselId);
    if (!container) return;

    const defaultMethod = PANO_METHODS[0].id;
    let currentSlide = 0;

    const slidesHtml = PANO_SCENES.map((scene, i) => `
        <div class="cmp-pano-slide${i === 0 ? ' active' : ''}" data-index="${i}" data-scene="${scene.id}">
            ${cmpBuildUnifiedWidget(scene, defaultMethod, PANO_METHODS)}
        </div>
    `).join('');

    container.innerHTML = `
        <div class="cmp-pano-track">${slidesHtml}</div>
        <div class="cmp-pano-nav">
            <button type="button" class="cmp-pano-btn cmp-pano-prev" aria-label="Previous">&#9664;</button>
            <span class="cmp-pano-counter">1 / ${PANO_SCENES.length}</span>
            <div class="cmp-pano-dots">
                ${PANO_SCENES.map((_, i) =>
                    `<button type="button" class="cmp-pano-dot${i === 0 ? ' active' : ''}" data-index="${i}"></button>`
                ).join('')}
            </div>
            <button type="button" class="cmp-pano-btn cmp-pano-next" aria-label="Next">&#9654;</button>
        </div>
    `;

    container.querySelectorAll('.cmp-unified').forEach((u) => cmpInitUnified(u));

    const applyPanoMethod = cmpInitGlobalTabs(
        tabsId,
        PANO_METHODS,
        `#${carouselId} .cmp-widget`,
        PANO_SCENES,
        (widget) => PANO_SCENES.find((s) => s.id === widget.dataset.scene)
    );

    const track = container.querySelector('.cmp-pano-track');
    const counter = container.querySelector('.cmp-pano-counter');
    const slides = container.querySelectorAll('.cmp-pano-slide');
    const dots = container.querySelectorAll('.cmp-pano-dot');

    const goTo = (index) => {
        currentSlide = (index + PANO_SCENES.length) % PANO_SCENES.length;
        slides.forEach((s, i) => s.classList.toggle('active', i === currentSlide));
        dots.forEach((d, i) => d.classList.toggle('active', i === currentSlide));
        counter.textContent = `${currentSlide + 1} / ${PANO_SCENES.length}`;
    };

    container.querySelector('.cmp-pano-prev').addEventListener('click', () => goTo(currentSlide - 1));
    container.querySelector('.cmp-pano-next').addEventListener('click', () => goTo(currentSlide + 1));
    dots.forEach((dot) => {
        dot.addEventListener('click', () => goTo(parseInt(dot.dataset.index, 10)));
    });

    let touchStartX = 0;
    track.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    track.addEventListener('touchend', (e) => {
        const dx = e.changedTouches[0].screenX - touchStartX;
        if (Math.abs(dx) > 50) goTo(dx < 0 ? currentSlide + 1 : currentSlide - 1);
    }, { passive: true });

    if (applyPanoMethod) applyPanoMethod(defaultMethod);
}

function initComparisons() {
    cmpInitPanoCarousel('pano-comparison', 'pano-method-tabs');
    cmpInitPerspectiveGrid('pers-comparison-grid', 'pers-method-tabs');
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initComparisons);
} else {
    initComparisons();
}
