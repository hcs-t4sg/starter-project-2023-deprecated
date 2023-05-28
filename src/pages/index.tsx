import { type NextPage } from "next";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      {/* //TODO Figure out where to put the main tag once more components are added */}
      <main>
        <p>Welcome to the T4SG starter project!</p>
        <p>
          This starter project comes unstyled, so we recommend you add your own styling/component library. See README
          for recommendations!
        </p>
        <p>{hello.data ? hello.data.greeting : "Loading tRPC query..."}</p>
      </main>
    </>
  );
};

export default Home;
