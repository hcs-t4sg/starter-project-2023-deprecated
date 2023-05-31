import { createPagesServerClient } from "@supabase/auth-helpers-nextjs";
import { type NextApiHandler } from "next";
import { type Database } from "~/schema";

const handler: NextApiHandler = async (req, res) => {
  const { code } = req.query;

  if (code) {
    const supabase = createPagesServerClient<Database>({ req, res });
    await supabase.auth.exchangeCodeForSession(String(code));
  }

  res.redirect("/");
};

export default handler;
