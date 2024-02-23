import Modal from "../components/Modal";
import Input from "../components/Input";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, openModal } from "../redux/uiSlice";
import { RootState } from "../redux/store";
import {
  setEmail,
  setFormError,
  setLoading,
  setName,
  setPassword,
} from "../redux/FormSlice";
import { ChangeEvent, useCallback } from "react";
import { register } from "../services/HttpsService";
import { setAuthToken, setAuthenticatedEmail } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

/**
 * Intentionally left out ui validations, validations are done in SignIn.
 */

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { email, password, name, formError, isLoading } = useSelector(
    (state: RootState) => state.form
  );

  const handleSignup = useCallback(async () => {
    try {
      dispatch(setLoading(true));
      const { data } = await register(email, password);
      dispatch(setAuthenticatedEmail(email));
      dispatch(setAuthToken(data.token));
      dispatch(closeModal());
      navigate("/dashboard");
    } catch (error: any) {
      dispatch(setFormError(error.response.data.error));
    } finally {
      dispatch(setLoading(false));
    }
  }, [email, password]);

  return (
    <Modal
      onClose={() => {
        dispatch(closeModal());
      }}
      className="sign-in"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {formError && <p className="text-red-500">{formError}</p>}
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
          onClick={handleSignup}
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {!isLoading ? "Register" : "Processing..."}
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
