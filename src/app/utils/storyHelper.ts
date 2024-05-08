export interface Story {
  id: number
  text?: string
}

/**
 * Totally unnecessary docstring.
 */
export function storySorter(a: Story, b: Story) {
  if (a.id < b.id) {
    return -1
  } else if (a.id > b.id) {
    return 1
  }
  return 0
}
