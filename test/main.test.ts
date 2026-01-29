import {sol} from "../main"

describe("Start Testing", ()=>{
    test("Test case from document", ()=>{
        expect(sol("MMVI")).toBe(2006)
        expect(sol("MCMXLIV")).toBe(1944)
    })
    test("Single symbols", ()=>{
        expect(sol("I")).toBe(1)
        expect(sol("V")).toBe(5)
        expect(sol("X")).toBe(10)
        expect(sol("L")).toBe(50)
        expect(sol("C")).toBe(100)
        expect(sol("D")).toBe(500)
        expect(sol("M")).toBe(1000)
    })

    test("Simple Sumation", ()=>{
        expect(sol("III")).toBe(3)
        expect(sol("VI")).toBe(6)
        expect(sol("MLXXXVI")).toBe(1086)
        expect(sol("MMDCCLLLXXX")).toBe(2880)
        expect(sol("MMMDDDCCCLLLXXXVVVIII")).toBe(4998)
    })
})