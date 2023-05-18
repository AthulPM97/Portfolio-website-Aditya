import React, { useEffect, useReducer, useState } from "react";
import useHttp from "../Hooks/use-http";

const ContentContext = React.createContext({
  work: [],
  sketches: [],
  addWork: () => {},
});

export default ContentContext;

const initialContentState = {
  work: [],
  sketches: []
}

const contentReducer = (state, action) => {
  return initialContentState;
}

export const ContentProvider = (props) => {
  //custom hook
  const { error, sendRequest } = useHttp();
  //states
  const [work, setWork] = useState([]);

  
  const [contentState, dispatchContentAction] = useReducer(contentReducer, initialContentState);

  //side effects
  useEffect(() => {
    sendRequest(
      {
        url: "https://aditya-design-default-rtdb.firebaseio.com/work.json",
      },
      (data) => {
        const keys = Object.keys(data);
        let workArray = [];
        keys.forEach((key) => {
          const obj = {
            ...data[key],
            id: key,
          };
          workArray = [...workArray, obj];
        });
        setWork(() => workArray);
      }
    );
    if (error) console.log(error);
  }, []);

  const contentContext = {
    work: work,
  };

  return (
    <ContentContext.Provider value={contentContext}>
      {props.children}
    </ContentContext.Provider>
  );
};
