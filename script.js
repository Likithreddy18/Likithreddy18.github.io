/**
 * Portfolio — Cinematic Interactions
 *
 * Features:
 *   - Pinned work section with scroll-driven card transitions
 *   - Horizontal project scroll linked to vertical scroll position
 *   - Animated impact bars and counters
 *   - Word-by-word heading reveals
 *   - Custom cursor
 */

document.addEventListener("DOMContentLoaded", () => {
    init_cursor();
    init_nav();
    init_burger();
    init_smooth_scroll();
    init_reveal();
    init_counters();
    init_impact_bars();
    init_work_pinned();
    init_projects_pinned();
});

/* ── Custom Cursor ── */
function init_cursor() {
    const cursor = document.getElementById("cursor");
    if (!cursor || window.innerWidth < 900) return;

    let cx = 0, cy = 0, tx = 0, ty = 0;

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

    const hovers = document.querySelectorAll(
        "a, button, .pslide, .wps, .istat, .ab-card"
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

/* ── Nav ── */
function init_nav() {
    const nav = document.getElementById("nav");
    if (!nav) return;
    window.addEventListener("scroll", () => {
        nav.classList.toggle("scrolled", window.scrollY > 50);
    }, { passive: true });
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

/* ── Scroll Reveal (single elements + .word groups) ── */
function init_reveal() {
    const obs = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("vis");
                    obs.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".rv, .word").forEach((el) => obs.observe(el));
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
                const duration = 1600;
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

/* ── Impact bar fills ── */
function init_impact_bars() {
    const bars = document.querySelectorAll(".istat-fill");
    if (!bars.length) return;

    const obs = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                const el = entry.target;
                const fill = el.dataset.fill;
                setTimeout(() => {
                    el.style.width = fill + "%";
                }, 200);
                obs.unobserve(el);
            });
        },
        { threshold: 0.3 }
    );
    bars.forEach((el) => obs.observe(el));
}

/* ══════════════════════════════════════════
   WORK — Pinned scroll storytelling
   Cards swap in/out as user scrolls through
   the 600vh-tall container
   ══════════════════════════════════════════ */
function init_work_pinned() {
    const section = document.querySelector(".work-pinned");
    const cards = document.querySelectorAll(".wps");
    const counter = document.getElementById("workCurrent");
    if (!section || !cards.length || window.innerWidth < 900) {
        cards.forEach((c) => c.classList.add("active"));
        return;
    }

    const total = cards.length;

    function update() {
        const rect = section.getBoundingClientRect();
        const section_height = rect.height;
        const viewport = window.innerHeight;

        /* Progress: 0 when top of section hits viewport top,
           1 when bottom of section hits viewport bottom */
        const scrolled = -rect.top;
        const max_scroll = section_height - viewport;
        let progress = scrolled / max_scroll;
        progress = Math.max(0, Math.min(1, progress));

        /* Active card index based on progress */
        const active = Math.min(
            Math.floor(progress * total),
            total - 1
        );

        cards.forEach((card, i) => {
            card.classList.remove("active", "gone");
            if (i < active) {
                card.classList.add("gone");
            } else if (i === active) {
                card.classList.add("active");
            }
        });

        if (counter) {
            counter.textContent = String(active + 1).padStart(2, "0");
        }
    }

    window.addEventListener("scroll", update, { passive: true });
    update();
}

/* ══════════════════════════════════════════
   PROJECTS — Pinned horizontal scroll
   Vertical scroll translates horizontally
   ══════════════════════════════════════════ */
function init_projects_pinned() {
    const section = document.querySelector(".projects-pinned");
    const track = document.getElementById("ppTrack");
    if (!section || !track || window.innerWidth < 900) return;

    function update() {
        const rect = section.getBoundingClientRect();
        const section_height = rect.height;
        const viewport = window.innerHeight;

        const scrolled = -rect.top;
        const max_scroll = section_height - viewport;
        let progress = scrolled / max_scroll;
        progress = Math.max(0, Math.min(1, progress));

        const track_width = track.scrollWidth;
        const visible_width = track.parentElement
            ? track.parentElement.offsetWidth
            : window.innerWidth;
        const max_translate = Math.max(0, track_width - visible_width);

        const translate = progress * max_translate;
        track.style.transform = `translateX(-${translate}px)`;
    }

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
}
