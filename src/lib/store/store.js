import { writable } from "svelte/store";

const toastStore = () => {
  const { subscribe, set, update } = writable({});

  return {
    subscribe,
    reset: () => set({}),

    proses: (val, title) =>
      update((n) => {
        if (val) {
          n["title"] = title;
        } else {
          n = {};
        }
        return n;
      }),
    info: (type, title) =>
      update((n) => {
        setTimeout(() => set({}), 3000);
        return (n = { type, title });
      }),
  };
};

export const toast = toastStore();

const toggleStore = () => {
  const { subscribe, set, update } = writable({});
  return {
    subscribe,
    show: (param) => update((n) => ({ ...n, [param]: true })),
    hide: (param) => update((n) => ({ ...n, [param]: false })),
  };
};
export const toggle = toggleStore();
