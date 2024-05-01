import { render, screen, fireEvent } from "@testing-library/react";

import SignUp from "../pages/singup/indexsig";

test("submitting the form calls onSubmit with value", () => {
  const handleSubmit = jest.fn();
  render(<SignUp onSubmit={handleSubmit} />);

  screen.getByLabelText(/name/i).value = "";
  screen.getByLabelText(/lastname/i).value = "";
  fireEvent.click(screen.getByRole("button", { name: /Criar conta/i }));
});
