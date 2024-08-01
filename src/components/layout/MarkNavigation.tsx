import { useMark } from "../../MarkContext";
import NavButton from "../shared/NavButton";

export default function MarkNavigation() {
  const { history, mark, setMark } = useMark();

  const handleArrows = (diference: number) => {
    const target = history.current.findIndex(
      (history) => history.id === mark.id
    );

    const newMark = history.current[target + diference];
    if (!newMark) return;
    setMark(newMark);
  };

  const handleAll = (diference: "back" | "front") => {
    let index = diference === "front" ? 0 : history.current.length - 1;
    const step = diference === "front" ? 1 : -1;

    const interval = setInterval(() => {
      if (index >= 0 && index < history.current.length) {
        setMark(history.current[index]);
        index += step;
      } else {
        clearInterval(interval);
      }
    }, 500);
  };

  return (
    <div
      style={{
        left: "0",
        gap: "16px",
        width: "100%",
        bottom: "10%",
        display: "flex",
        position: "fixed",
        padding: "10px 0",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0,0,0,0.5)",
      }}
    >
      <NavButton onClick={() => handleAll("back")}>Retroceder tudo</NavButton>
      <NavButton onClick={() => handleArrows(-1)}>Retroceder</NavButton>
      <NavButton onClick={() => handleArrows(1)}>Avançar</NavButton>
      <NavButton onClick={() => handleAll("front")}>Avançar tudo</NavButton>
    </div>
  );
}
