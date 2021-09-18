import { useContext, createContext } from "react";
const AnimationCheckerContext = createContext();
export const useChecker = () => useContext(AnimationCheckerContext);

function AnimationCheckerContextProvider(props) {



  const check = 0;
  return (
    <AnimationCheckerContext.Provider value={check}>
      {props.children}
    </AnimationCheckerContext.Provider>
  );
}

export default AnimationCheckerContextProvider;
