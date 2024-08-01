interface INavButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function NavButton({ children, ...rest }: INavButton) {
  return (
    <button
      {...rest}
      style={{
        border: "none",
        padding: "15px",
        cursor: "pointer",
        borderRadius: "100px",
        zIndex: "999",
        userSelect: "none",
      }}
    >
      {children}
    </button>
  );
}
