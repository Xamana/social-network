import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import '@testing-library/jest-dom'
import ProfileStatusWithHoc from "./ProfileStatusWithHooc";
import userEvent from '@testing-library/user-event'
import {act} from "react-dom/test-utils";

describe('Profile status component', () => {
    test('status from the props should be in the state', () => {
        render(<ProfileStatusWithHoc status={'hello'} />)
        expect(screen.getByText(/hello/)).toBeInTheDocument();
    })
    it('expect status by role', () => {
        render(<ProfileStatusWithHoc status={'hello'} />)
        expect(screen.getByTestId('custom-span')).toBeInTheDocument()
    })
    test('change span in input', () => {
        render(<ProfileStatusWithHoc status={'hello'} />)
        expect(screen.getByTestId('custom-span')).toBeInTheDocument()
        // act(() => {
        //     userEvent.type(screen.getByTestId('custom-span'))
        // })
        fireEvent.dblClick(screen.getByTestId('custom-span'))
        expect(screen.queryByTestId('custom-input')).toBeInTheDocument()

    })
});