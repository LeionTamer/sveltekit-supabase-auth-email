import type { LayoutLoad } from "./$types"

export const load = (() => {
  return {
    user: 'cats'
  }
}) satisfies LayoutLoad