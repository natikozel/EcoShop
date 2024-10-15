import {StateStore} from "@/store/store";

export type RootState = ReturnType<typeof StateStore.getState>
export type AppDispatch = typeof StateStore.dispatch