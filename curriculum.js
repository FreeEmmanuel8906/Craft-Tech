const curriculumTracks = [
  {
    year: "Year 1",
    title: "Pivot Animator & Animation Fundamentals",
    focus: "Animation and visual storytelling."
  },
  {
    year: "Year 2",
    title: "Scratch Block-Based Coding & Game Mechanics",
    focus: "Creative coding and interactive game building."
  },
  {
    year: "Year 3",
    title: "Physical Computing with BBC micro:bit & JavaScript",
    focus: "Physical computing and JavaScript foundations."
  },
  {
    year: "Year 4",
    title: "mBlock Block Programming & Interactive Design",
    focus: "Interactive design and block-based programming."
  },
  {
    year: "Year 5",
    title: "Web Development — HTML Architecture, Links & Tables",
    focus: "HTML structure and core web building skills."
  },
  {
    year: "Year 6",
    title: "Modern Web Styling with CSS & Responsive Web Design",
    focus: "CSS styling and responsive web design."
  }
];

const sessionLevels = [
  { session: "Session 1", level: "Beginner", description: "Build confidence with core tools and ideas." },
  { session: "Session 2", level: "Intermediate", description: "Apply core skills to more involved tasks." },
  { session: "Session 3", level: "Advanced", description: "Combine skills and work more independently." }
];

(() => {
  const mount = document.getElementById("curriculum-content");
  if (!mount) return;

  const make = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };

  curriculumTracks.forEach((track, index) => {
    const panel = make("details", "curriculum-year");
    if (index === 0) panel.open = true;

    const summary = make("summary", "curriculum-year-summary");
    summary.append(make("span", "curriculum-year-badge", track.year));

    const title = make("span", "curriculum-year-title");
    title.append(make("strong", "", track.title));
    title.append(make("small", "", track.focus));
    summary.append(title);
    summary.append(make("span", "curriculum-plus", "+"));
    panel.append(summary);

    const body = make("div", "curriculum-year-body");
    const levels = make("div", "curriculum-levels");
    sessionLevels.forEach((item) => {
      const card = make("article", "curriculum-level-card");
      card.append(make("span", "curriculum-level-session", item.session));
      card.append(make("strong", "curriculum-level-name", item.level));
      card.append(make("span", "curriculum-level-duration", "2 months"));
      card.append(make("p", "curriculum-level-description", item.description));
      levels.append(card);
    });
    body.append(levels);
    panel.append(body);
    mount.append(panel);
  });
})();
