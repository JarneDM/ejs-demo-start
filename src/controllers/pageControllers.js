export const home = (req, res) => {
  res.render("home", {
    title: "Dinos around the world",
    content: "Welcome to the world of dinos",
  });
};

export const about = (req, res) => {
  res.render("default", {
    title: "about us",
    content: "We love dinos",
  });
};

export const contact = (req, res) => {
  res.render("contact", {
    title: "Contact",
    content: "Contact us at 234 2344 223",
  });
};

export const privacy = (req, res) => {
  res.render("default", {
    title: "Privacy Policy",
    content: "Dinos are protective of their privacy",
  });
};
