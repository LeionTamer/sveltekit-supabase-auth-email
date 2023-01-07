import { writable } from 'svelte/store'

// export const title = writable('default title')

const createStore = () => {
  const { subscribe, set } = writable('DefaultStore')

  return {
    subscribe,
    setTitle: (title: string) => set(title)
  }
}

export const title = createStore()