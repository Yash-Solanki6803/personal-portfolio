export function titleToSlug(title) {
  return title
    .toLowerCase() // Convert to lowercase
    .trim() // Remove whitespace from both ends of the string
    .replace(/[^\w\s-]/g, "") // Remove all non-word characters (letters, numbers, underscores, and hyphens)
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-"); // Replace multiple hyphens with a single hyphen
}
