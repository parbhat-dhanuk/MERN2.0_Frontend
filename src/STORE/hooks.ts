import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";

//useDispatch ra useSelector hook lai custom hook ma wrap gareko kinaki simple js ko jasari yo hook use garna mildaina.

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector