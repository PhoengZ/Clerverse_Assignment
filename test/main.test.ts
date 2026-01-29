import {sol} from "../main"

describe("Start Testing", ()=>{
    test("Edge case", ()=>{
        expect(sol("")).toBe(0)
    })
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
        expect(sol("MMDCCLXXX")).toBe(2780)
        expect(sol("MMMDCCCLXXXVIII")).toBe(3888)
    })

    test("Subtraction symbols", ()=>{
        expect(sol("IV")).toBe(4)
        expect(sol("XXXIV")).toBe(34)
        expect(sol("LIX")).toBe(59)
        expect(sol("MDXL")).toBe(1540)
        expect(sol("DXC")).toBe(590)
        expect(sol("MCD")).toBe(1400)
        expect(sol("MCM")).toBe(1900)
        expect(sol("IXIV")).toBe(13)
    })

    test("Complex summation", ()=>{
        expect(sol("MCMXCIX")).toBe(1999)
        expect(sol("MCDXLIV")).toBe(1444)
        expect(sol("MMMCMXCIX")).toBe(3999)
    })
})