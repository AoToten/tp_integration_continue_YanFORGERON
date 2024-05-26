import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import App from "./App";

describe("App Component", () => {
    beforeEach(() => {
        render(<App />);
    });

    it("renders the heading", () => {
        expect(screen.getByText("HTTP Cat Image Viewer")).toBeInTheDocument();
    });

    it("renders the input and button", () => {
        expect(
            screen.getByPlaceholderText("Enter HTTP status code")
        ).toBeInTheDocument();
        expect(screen.getByText("Get Image")).toBeInTheDocument();
    });

    it("updates the input value on change", () => {
        const input = screen.getByPlaceholderText("Enter HTTP status code");
        fireEvent.change(input, { target: { value: "404" } });
        expect(input).toHaveValue("404");
    });

    it("displays the correct image when form is submitted", () => {
        const input = screen.getByPlaceholderText("Enter HTTP status code");
        const button = screen.getByText("Get Image");

        fireEvent.change(input, { target: { value: "404" } });
        fireEvent.click(button);

        expect(screen.getByAltText("HTTP cat 404")).toHaveAttribute(
            "src",
            "https://http.cat/404"
        );
    });

    it("does not display an image if no status code is entered", () => {
        const button = screen.getByText("Get Image");
        fireEvent.click(button);

        expect(screen.queryByRole("img")).toBeNull();
    });
});
