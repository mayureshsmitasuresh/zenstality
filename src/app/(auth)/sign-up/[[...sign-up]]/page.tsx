import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div
      id="sign-in-page"
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <SignUp />
    </div>
  );
}
