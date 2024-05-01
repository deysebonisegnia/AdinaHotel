import "@testing-library/jest-dom";
// eslint-disable-next-line no-unused-vars
import {render,screen}from "@testing-library/react";
// eslint-disable-next-line no-unused-vars
import {header} from "../components/Header";

describe("Header", ()=>{
    it('sould render correct',()=> {
        render(<header/>);
        const classheader = screen.getAllByText("login")
        expect(classheader).toHaveClass("navButton")
        expect (screen.getByTest("Entrar")).toBeInTheDocument()
        expect (screen.getByTest("Cadastrar")).toBeInTheDocument()
        
        // eslint-disable-next-line testing-library/prefer-presence-queries, no-undef
        expect(getByTest('svg-element')).not.toBeInTheDocument();
    })
})