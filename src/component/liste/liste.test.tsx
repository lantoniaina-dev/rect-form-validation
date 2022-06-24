import React from 'react';
import { render, cleanup } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import Liste from './liste';
import { apiGetData } from './api';
import * as api from './api'

jest.mock('./api')

test("apiGetData  ", async () => {
    await render(<Liste />)
    const text = await screen.getByText("United States")
    expect(text).toBeInTheDocument()
})

