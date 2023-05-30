import { createPagesServerClient } from "@supabase/auth-helpers-nextjs";
import { type NextApiHandler } from "next";

const handler: NextApiHandler = async (req, res) => {
  const { code } = req.query;

  if (code) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const supabase = createPagesServerClient({ req, res });
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    await supabase.auth.exchangeCodeForSession(String(code));
  }

  res.redirect("/");
};

export default handler;
