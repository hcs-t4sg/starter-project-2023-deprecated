import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { type NextPage } from "next";
import { useTheme } from "next-themes";
import { TypographyH2, TypographyP } from "~/components/ui/typography";
import { type Database } from "~/schema";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const supabaseClient = useSupabaseClient<Database>();
  const user = useUser();
  const { theme } = useTheme();

  if (!user)
    return (
      <main>
        <Auth
          redirectTo="http://localhost:3000/"
          appearance={{ theme: ThemeSupa }}
          theme={theme === "light" ? "default" : "dark"}
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
        <TypographyH2>Welcome to the T4SG starter project!</TypographyH2>
        <TypographyP>
          This starter project is styled with TailwindCSS and uses shadcn/ui as a component library. Feel free to add
          your own components!
        </TypographyP>
        <TypographyP>{hello.data ? hello.data.greeting : "Loading tRPC query..."}</TypographyP>
      </main>
    </>
  );
};

export default Home;
