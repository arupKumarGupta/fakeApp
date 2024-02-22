import Modal from "../components/Modal";
import Input from "../components/Input";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, openModal } from "../redux/uiSlice";
import { RootState } from "../redux/store";
import { setEmail, setName, setPassword } from "../redux/FormSlice";
import { ChangeEvent } from "react";

const Register = () => {
  const dispatch = useDispatch();
  const { email, password, name } = useSelector(
    (state: RootState) => state.form
  );
  return (
    <Modal
      onClose={() => {
        dispatch(closeModal());
      }}
      className="sign-in"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Input
          placeholder="Name"
          value={name}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            dispatch(setName(e.target.value));
          }}
        />
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
          Register
        </button>
        <pre
          className="cursor-pointer text-blue-500"
          onClick={() => {
            dispatch(openModal("login"));
          }}
        >
          Already have an account? Sign In.
        </pre>
      </div>
    </Modal>
  );
};

export default Register;
