import { ExampleContext } from "../contexts/ExampleContext";
import { useContext } from "react";

export function useExampleContext(){
    const ctx = useContext(ExampleContext)
    return ctx;
}