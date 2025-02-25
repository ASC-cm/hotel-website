import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ActivateAccount = () => {
  const { uid, token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const activateAccount = async () => {
      try {
        await axios.post("http://127.0.0.1:8000/auth/users/activation/", { uid, token });
        navigate("/login");
      } catch (error) {
        console.error("Activation failed", error);
      }
    };
    activateAccount();
  }, [uid, token, navigate]);

  return <h2>Activating your account...</h2>;
};

export default ActivateAccount;
