import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

const Defaulte = () => {
  const router = useRouter();
  console.log("router", router);
  return (
    <div>
      <Head>
        <title>{router.query.id}</title>
      </Head>
      Page {router.query.id}
    </div>
  );
};

export default Defaulte;
