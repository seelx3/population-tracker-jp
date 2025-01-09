import React, { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { usePrefecturesPopulationData } from "../hooks/usePrefecturesPopulationData";

export const Notification: React.FC = () => {
  const { error } = usePrefecturesPopulationData();

  useEffect(() => {
    if (error) {
      toast.error(error.message, {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  }, [error]);

  return <ToastContainer />;
};
