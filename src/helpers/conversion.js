export function conversion(createdAt) {
  const minutes = Math.floor(createdAt / 60);
  const seconds = createdAt % 60;
  return `${minutes}:${seconds < 10 ? 0 : ""}${seconds}`;
}
