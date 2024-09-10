import Link from "next/link";

const InterceptingRoutesPage = () => {
  return (
    <div>
      <h1>Intercepting Routes Page</h1>

      <div>
        <Link href="/intercepting/111" passHref>
          Test
        </Link>
      </div>
    </div>
  );
};

export default InterceptingRoutesPage;
