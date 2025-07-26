import { create } from 'zustand';

const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

export const useStore = create((set) => ({
  wishlist: storedWishlist,

  toggleWishlist: (product) =>
    set((state) => {
      const exists = state.wishlist.some((item) => item.id === product.id);
      const updatedWishlist = exists
        ? state.wishlist.filter((item) => item.id !== product.id)
        : [...state.wishlist, product];

      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
      return { wishlist: updatedWishlist };
    }),
}));
