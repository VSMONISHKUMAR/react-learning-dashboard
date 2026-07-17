interface HeaderProps {
  title: string;
}

function Header({ title }: HeaderProps) {
  return (
    <header className="header">
      <h1>{title}</h1>
      <p>Learn React + TypeScript with a simple visual guide.</p>
    </header>
  );
}

export default Header;