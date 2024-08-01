import React from "react";

export interface Mark {
  id: number;
  x: number;
  y: number;
  color: string;
}

interface MarkContextProps {
  mark: Mark;
  setMark: React.Dispatch<React.SetStateAction<MarkContextProps["mark"]>>;
  history: React.MutableRefObject<MarkContextProps["mark"][]>;
}

export const MarkContext = React.createContext({} as MarkContextProps);

export const MarkContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const history = React.useRef<Mark[]>([] as Mark[]);
  const [mark, setMark] = React.useState<Mark>({} as Mark);

  return (
    <MarkContext.Provider
      value={{
        history,
        mark,
        setMark,
      }}
    >
      {children}
    </MarkContext.Provider>
  );
};

export const useMark = () => React.useContext(MarkContext);
