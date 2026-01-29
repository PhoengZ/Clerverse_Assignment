import {sol} from "../main"

describe("Start Testing", ()=>{
    test("Single symbols", ()=>{
        expect(sol("I")).toBe(1)
        expect(sol("V")).toBe(5)
        expect(sol("X")).toBe(10)
        expect(sol("L")).toBe(50)
        expect(sol("C")).toBe(100)
        expect(sol("D")).toBe(500)
        expect(sol("M")).toBe(1000)
    })
})