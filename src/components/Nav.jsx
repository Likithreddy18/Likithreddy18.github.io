// The avatar lives in /public/images/profile_pic.JPG in this project,
// which matches the path already used on likithreddy18.github.io.
// Vite resolves BASE_URL automatically based on vite.config.js `base`.
const AVATAR = `${import.meta.env.BASE_URL}images/profile_pic.JPG`;

export default function Nav() {
  return (
    <nav className="topnav">
      <a href="#hero" className="nav-name">
        <img
          src={AVATAR}
          alt="Likith Reddy Chintala"
          className="nav-avatar"
          width="28"
          height="28"
          loading="eager"
          decoding="async"
        />
        <span>Likith.</span>
      </a>
      <a href="#work">Work</a>
      <a href="#projects">Projects</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </nav>
  );
}
