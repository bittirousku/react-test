export function formatDate(input: string): string {
  if (!input) {
    return ""
  }
  const datePartMatch = input.match(/\d+/g)
  if (!datePartMatch) {
    return ""
  }
  const year = datePartMatch[0].substring(0, 4)
  const month = datePartMatch[1]
  const day = datePartMatch[2]

  return day + "." + month + "." + year
}
