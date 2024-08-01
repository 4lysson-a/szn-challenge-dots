import { getRandomColor } from "../../common";
import { Mark, useMark } from "../../MarkContext";

function MarkComponent() {
  const { mark } = useMark();

  if (!mark.id) return null;

  return (
    <div
      style={{
        height: "20px",
        width: "20px",
        background: mark.color,
        border: "1px solid white",
        borderRadius: "10px",
        position: "absolute",
        left: String(mark.x + "px"),
        top: String(mark.y + "px"),
        transform: "scale(0)",
        animation: "show 0.1s ease forwards",
        transition: '0.5s cubic-bezier(.83,.03,.04,1.06) all',
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
      }}
    />
  );
}

export default function MarkView() {
  const { history, mark, setMark } = useMark();

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { x, y } = event.nativeEvent;
    const id = mark.id + 1 || 1;

    const color = getRandomColor();
    const newMark: Mark = {
      x,
      y,
      id,
      color,
    };

    setMark(newMark);
    history.current.push(newMark);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <MarkComponent />
    </div>
  );
}
