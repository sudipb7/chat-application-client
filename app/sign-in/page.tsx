import { signIn } from "@/auth";
import { SubmitButton } from "./submit-button";

interface SignInPageprops {
  searchParams: { [key: string]: string };
}

export default async function SignInPage({ searchParams }: SignInPageprops) {
  const redirectTo = searchParams["redirectTo"];

  const signInWithGoogle = async () => {
    "use server";
    await signIn("google", { redirectTo });
  };

  return (
    <main className="h-screen flex items-center justify-center">
      <div className="max-sm:p-4">
        <h1 className="text-3xl font-bold">Welcome to Chatty</h1>
        <p className="text-muted-foreground font-medium mt-1.5">
          Sign in to your account to continue.
        </p>
        <form className="mt-4 max-w-xs">
          <SubmitButton formAction={signInWithGoogle} />
        </form>
        <p className="text-xs text-muted-foreground mt-4 max-w-xs leading-normal">
          By signing in, you agree to our{" "}
          <span className="font-medium text-foreground hover:underline underline-offset-2 transition">
            Terms of Services
          </span>{" "}
          and{" "}
          <span className="font-medium text-foreground hover:underline underline-offset-2 transition">
            Privacy Policy
          </span>
        </p>
      </div>
    </main>
  );
}
