import { createContext, useState } from "react";

export const States = createContext({
  form: [],
  setForm: [],
  Log: () => {},
  logData: [],
  setLogData: [],
  file: [],
  setFile: [],
  signData: [],
  setSignData: [],
  FavHomesData: [],
  setFavHomesData: [],
});

const StatesProvider = ({ children }) => {
  const [file, setFile] = useState();

  const [form, setForm] = useState({
    //  id:Math.random(),
    photo: "",
    location: "",
    area: "",
    rent: "",
    BHK: "",
    sqft: "",
    more_details: "",
  });

  const [signData, setSignData] = useState([]);
  const [FavHomesData, setFavHomesData] = useState([]);

  const [logData, setLogData] = useState([]);

  const Log = async () => {
    try {
      const response = await fetch(
        "https://backend-git-main-saiganeshs-projects-2806edd9.vercel.app/auth",
        { credentials: "include" }
      );
      const data = await response.json();
      setLogData(data);
      console.log(data);
    } catch (error) {
      console.error("Failed to fetch home data:", error);
    }
  };

  return (
    <States.Provider
      value={{
        form,
        setForm,
        Log,
        logData,
        setLogData,
        file,
        setFile,
        signData,
        setSignData,
        FavHomesData,
        setFavHomesData,
      }}
    >
      {children}
    </States.Provider>
  );
};

export default StatesProvider;
