import { useReactiveVar } from "@apollo/client";
import { userState } from "../../GlobalState";

export default function Jumbotron() {
  const user = userState();
  return (
    <div>
      <div className="rounded-lg bg-neutral-100 p-6 text-neutral-700 shadow-lg dark:bg-neutral-600 dark:text-neutral-200 dark:shadow-black/30">
        <h2 className="mb-5 text-3xl font-semibold">
          Welcome, {user.firstName}!
        </h2>
        <p>
          Let's start your profile, connect to people you know, and engage with
          them through shared interests.
        </p>
      </div>
    </div>
  );
}
