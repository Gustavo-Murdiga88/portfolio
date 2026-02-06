import { Suspense } from "react";
export { metadata } from "./meta";

import { Contact } from "./component";

export default async function Page() {
  return (
    <Suspense>
      <Contact />
    </Suspense>
  );
}
