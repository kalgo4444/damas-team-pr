import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export const useStore = create()(
  devtools(
    persist(
      (set) => ({
        wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],
        toggleWishlist: (product) =>
          set((state) => {
            const exists = state.wishlist.some(
              (item) => item.id === product.id
            );
            const updatedWishlist = exists
              ? state.wishlist.filter((item) => item.id !== product.id)
              : [...state.wishlist, product];
            return { wishlist: updatedWishlist };
          }),
      }),
      {
        name: "wishlist",
      }
    )
  )
);
