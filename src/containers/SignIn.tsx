import Modal from "../components/Modal";
import Input from "../components/Input";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, openModal } from "../redux/uiSlice";
import { RootState } from "../redux/store";
import { setEmail, setPassword } from "../redux/FormSlice";
import { ChangeEvent } from "react";

const SignIn = () => {
  const dispatch = useDispatch();
  const { email, password } = useSelector((state: RootState) => state.form);
  return (
    <Modal
      onClose={() => {
        dispatch(closeModal());
      }}
      className="sign-in"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Input
          placeholder="Email"
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            dispatch(setEmail(e.target.value));
          }}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            dispatch(setPassword(e.target.value));
          }}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Sign In
        </button>
        <pre
          className="cursor-pointer text-blue-500"
          onClick={() => {
            dispatch(openModal("register"));
          }}
        >
          Don't have an account? Register.
        </pre>
      </div>
    </Modal>
  );
};

export default SignIn;
