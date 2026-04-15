/**
 * Portfolio — Immersive Interactions
 *
 * Features:
 *   - Custom cursor with hover states
 *   - Navbar scroll
 *   - Mobile menu
 *   - Smooth anchor scroll
 *   - Scroll reveal (IntersectionObserver)
 *   - Animated number counters
 *   - Drag-to-scroll on project gallery
 *   - Mouse-follow glow on work cards
 */

document.addEventListener("DOMContentLoaded", () => {
    init_cursor();
    init_nav();
    init_burger();
    init_smooth_scroll();
    init_reveal();
    init_counters();
    init_drag_scroll();
    init_card_glow();
});

/* ── Custom Cursor ── */
function init_cursor() {
    const cursor = document.getElementById("cursor");
    if (!cursor || window.innerWidth < 900) return;

    let cx = 0;
    let cy = 0;
    let tx = 0;
    let ty = 0;

    document.addEventListener("mousemove", (e) => {
        tx = e.clientX;
        ty = e.clientY;
    });

    (function loop() {
        cx += (tx - cx) * 0.15;
        cy += (ty - cy) * 0.15;
        cursor.style.left = cx + "px";
        cursor.style.top = cy + "px";
        requestAnimationFrame(loop);
    })();

    /* Hover targets: links, buttons, and [data-cursor] */
    const hovers = document.querySelectorAll(
        "a, button, .work-card, .proj-slide"
    );
    hovers.forEach((el) => {
        el.addEventListener("mouseenter", () => {
            cursor.classList.add("hover");
            const label = el.getAttribute("data-cursor");
            if (label) cursor.querySelector("span").textContent = label;
        });
        el.addEventListener("mouseleave", () => {
            cursor.classList.remove("hover");
            cursor.querySelector("span").textContent = "View";
        });
    });
}

/* ── Nav scroll ── */
function init_nav() {
    const nav = document.getElementById("nav");
    if (!nav) return;

    window.addEventListener(
        "scroll",
        () => {
            nav.classList.toggle("scrolled", window.scrollY > 50);
        },
        { passive: true }
    );
}

/* ── Burger ── */
function init_burger() {
    const burger = document.getElementById("burger");
    const links = document.getElementById("navLinks");
    if (!burger || !links) return;

    burger.addEventListener("click", () => {
        burger.classList.toggle("active");
        links.classList.toggle("open");
    });
    links.querySelectorAll("a").forEach((a) =>
        a.addEventListener("click", () => {
            burger.classList.remove("active");
            links.classList.remove("open");
        })
    );
}

/* ── Smooth scroll ── */
function init_smooth_scroll() {
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
        a.addEventListener("click", (e) => {
            const id = a.getAttribute("href");
            if (id === "#") return;
            const target = document.querySelector(id);
            if (!target) return;
            e.preventDefault();
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: "smooth",
            });
        });
    });
}

/* ── Scroll Reveal ── */
function init_reveal() {
    const els = document.querySelectorAll(".rv");
    if (!els.length) return;

    const obs = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("vis");
                    obs.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.08, rootMargin: "0px 0px -20px 0px" }
    );
    els.forEach((el) => obs.observe(el));
}

/* ── Animated counters ── */
function init_counters() {
    const nums = document.querySelectorAll("[data-count]");
    if (!nums.length) return;

    const obs = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                const el = entry.target;
                const end = parseInt(el.dataset.count, 10);
                const duration = 1400;
                const start_time = performance.now();

                function step(now) {
                    const progress = Math.min(
                        (now - start_time) / duration,
                        1
                    );
                    const eased = 1 - Math.pow(1 - progress, 3);
                    el.textContent = Math.round(eased * end);
                    if (progress < 1) requestAnimationFrame(step);
                }
                requestAnimationFrame(step);
                obs.unobserve(el);
            });
        },
        { threshold: 0.5 }
    );
    nums.forEach((el) => obs.observe(el));
}

/* ── Drag-to-scroll on horizontal project gallery ── */
function init_drag_scroll() {
    const wrap = document.querySelector(".hscroll-wrap");
    if (!wrap) return;

    let is_down = false;
    let start_x = 0;
    let scroll_left = 0;

    wrap.addEventListener("mousedown", (e) => {
        is_down = true;
        start_x = e.pageX - wrap.offsetLeft;
        scroll_left = wrap.scrollLeft;
    });
    wrap.addEventListener("mouseleave", () => {
        is_down = false;
    });
    wrap.addEventListener("mouseup", () => {
        is_down = false;
    });
    wrap.addEventListener("mousemove", (e) => {
        if (!is_down) return;
        e.preventDefault();
        const x = e.pageX - wrap.offsetLeft;
        const walk = (x - start_x) * 1.5;
        wrap.scrollLeft = scroll_left - walk;
    });
}

/* ── Mouse-follow glow on work cards ── */
function init_card_glow() {
    const cards = document.querySelectorAll(".work-card");
    cards.forEach((card) => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty("--mx", x + "px");
            card.style.setProperty("--my", y + "px");
        });
    });
}
