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
      <NavButton onClick={() => handleArrows(-1)}>Retroceder</NavButton>
      <NavButton onClick={() => handleArrows(1)}>Avançar</NavButton>
    </div>
  );
}
