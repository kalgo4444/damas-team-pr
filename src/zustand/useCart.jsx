import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export const useCart = create()(
  devtools(
    persist(
      (set) => ({
        cart: JSON.parse(localStorage.getItem("cart")) || [],
        toggleToCart: (payload) =>
          set((state) => {
            const ex = state.cart.some((item) => item.id === payload.id);
            let store = [];
            if (ex) {
              store = state.cart.filter((item) => item.id !== payload.id);
            } else {
              store = [...state.cart, { ...payload, quantity: 1 }];
            }
            return { cart: store };
          }),
        incCart: (payload) =>
          set((state) => {
            let store = state.cart.map((item) =>
              item.id === payload.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );
            return { cart: store };
          }),
        decCart: (payload) =>
          set((state) => {
            let store = state.cart.map((item) =>
              item.id === payload.id
                ? { ...item, quantity: item.quantity - 1 }
                : item
            );
            return { cart: store };
          }),
      }),
      {
        name: "cart",
      }
    )
  )
);
