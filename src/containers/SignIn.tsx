import Modal from "../components/Modal";
import Input from "../components/Input";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, openModal } from "../redux/uiSlice";
import { RootState } from "../redux/store";
import {
  setEmail,
  setFormError,
  setLoading,
  setPassword,
} from "../redux/FormSlice";
import { ChangeEvent, useCallback } from "react";
import { signIn } from "../services/HttpsService";
import { setAuthToken, setAuthenticatedEmail } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { email, password, formError, isLoading } = useSelector(
    (state: RootState) => state.form
  );

  const handleSignIn = useCallback(async () => {
    try {
      dispatch(setLoading(true));
      const { data } = await signIn(email, password);
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
          required
          placeholder="Email"
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            dispatch(setFormError(undefined));
            dispatch(setEmail(e.target.value));
          }}
        />
        <Input
          required
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            dispatch(setFormError(undefined));
            dispatch(setPassword(e.target.value));
          }}
        />
        <button
          onClick={handleSignIn}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-500"
          disabled={!email || !password || isLoading}
        >
          {isLoading ? "Signing in..." : "Sign In"}
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
