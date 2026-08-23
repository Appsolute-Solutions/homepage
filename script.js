const header = document.querySelector(".site-header");
const toggle = document.querySelector(".menu-toggle");
const links = document.querySelector(".nav-links");
const form = document.querySelector("#contact-form");
const note = document.querySelector(".form-note");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 8);
});

toggle.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});

links.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => links.classList.remove("open"));
});

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const subject = encodeURIComponent(
      `Appsolute enquiry from ${data.get("name")}`
    );
    const body = encodeURIComponent(
      [
        `Name: ${data.get("name")}`,
        `Email: ${data.get("email")}`,
        `Company: ${data.get("company") || "—"}`,
        `Project type: ${data.get("type")}`,
        "",
        data.get("message"),
      ].join("\n")
    );

    window.location.href = `mailto:hello@appsolutedev.com?subject=${subject}&body=${body}`;
    note.classList.add("show");
    form.reset();
  });
}
