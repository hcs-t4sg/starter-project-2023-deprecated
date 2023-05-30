import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { type NextPage } from "next";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const supabaseClient = useSupabaseClient();
  const user = useUser();

  if (!user)
    return (
      <main>
        <Auth
          redirectTo="http://localhost:3000/"
          appearance={{ theme: ThemeSupa }}
          supabaseClient={supabaseClient}
          providers={[]}
          socialLayout="horizontal"
        />
      </main>
    );

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
