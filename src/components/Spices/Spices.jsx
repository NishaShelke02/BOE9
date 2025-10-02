import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Spices = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to Product page for Indian Spices
    navigate("/Products/indian-spices");
  }, [navigate]);

  return null; // nothing to render, just redirect
};

export default Spices;
