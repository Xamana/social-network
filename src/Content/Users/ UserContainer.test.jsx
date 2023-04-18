import {render, screen} from "@testing-library/react";
import {UsersContainer} from "./UsersContainer";
import axios from "axios";

jest.mock('axios')

describe('Users component', () => {
    beforeEach('getData', () => {
        response = []

    })
    it('Render users container', () =>{
        render(<UsersContainer/>);
        screen.findBy
    })

});