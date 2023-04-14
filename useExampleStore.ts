import { defineStore } from "pinia";
import { ref } from "vue";

/**
 * A pinia store for the user's reading lists.
 */
const useExampleStore = defineStore(
  "example",
  () => {
    return {
      count: ref<number>(0),
      // The TS error goes away if I use `whatever: () => { … }` instead of `whatever() { … }`.
      // whatever: () => {
      //   console.log("whatever");
      // },
      whatever() {
        console.log("whatever");
      },
    };
  },
  {
    // The TS error goes away if I use `persist: true` instead of `persist: { … }`.
    // persist: true,
    persist: {
      afterRestore() {
        console.log("afterRestore");
      },
    },
  }
);

const foo = useExampleStore();

// TS2339: Property 'count' does not exist on type 'Store<"example", _UnwrapAll<Pick<unknown, never>>, Pick<unknown, never>, Pick<unknown, never>>'.
console.log(foo.count);
