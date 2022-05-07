import { defineStore } from 'pinia'

export const useStore = defineStore({
  id: 'store',
  state: () => ({
    works: [
      {
        title: 'Starry Night',
        artist: 'Van Gogh',
        year: 1889,
        image: 'https://www.moma.org/media/W1siZiIsIjQ2NzUxNyJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4MTQ0MFx1MDAzZSJdXQ.jpg?sha=62618546638d742f'
      },
      {
        title: 'Kunst in Berlin',
        artist: 'Rixdorfer Drucke',
        year: -1,
        image: 'https://www.vintage-fine-arts.gallery/wp-content/uploads/2019/04/Rixdorfer-Drucke_Kunst-in-Berlin.jpg'
      }
    ]
  }),
  getters: {
    doubleCount: (state) => state.counter * 2
  },
  actions: {
    increment() {
      this.counter++
    }
  }
})
