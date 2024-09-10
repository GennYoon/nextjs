import Link from "next/link";

const SidebarWidget = () => {
  return (
    <nav className="flex w-52 flex-col">
      <Link href="/">Home</Link>
      <Link href="/dynamic">Dynamic</Link>
      <Link href="/intercepting">Intercepting</Link>
      <Link href="/parallel">Parallel</Link>
    </nav>
  );
};

export default SidebarWidget;
