import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAppState } from "../../redux/features/appStateSlice";
function PageWrapper({ state, children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAppState(state));
  }, [state]);
  return children;
}

export default PageWrapper;
