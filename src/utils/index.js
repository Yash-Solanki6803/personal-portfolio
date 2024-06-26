export const checkValidEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export function titleToSlug(title) {
  return title
    .toLowerCase() // Convert to lowercase
    .trim() // Remove whitespace from both ends of the string
    .replace(/[^\w\s-]/g, "") // Remove all non-word characters (letters, numbers, underscores, and hyphens)
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-"); // Replace multiple hyphens with a single hyphen
}

export function formatDate(dateString = "") {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let now;
  if (dateString) {
    now = new Date(dateString);
  } else {
    now = new Date();
  }
  const dayName = days[now.getDay()];
  const monthName = months[now.getMonth()];
  const day = now.getDate();
  const year = now.getFullYear();

  return `${dayName}, ${monthName} ${day}, ${year}`;
}

export function trimCapitalizeAndCreateObjects(array) {
  return array.map((str) => {
    const trimmedStr = str.trim();
    const title = trimmedStr.charAt(0).toUpperCase() + trimmedStr.slice(1);
    const slug = titleToSlug(title);
    return { slug, title };
  });
}
