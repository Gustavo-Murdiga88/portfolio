import { Suspense } from "react";

import { Contact } from "./component";

export default async function Page() {
  return (
    <Suspense>
      <Contact />
    </Suspense>
  );
}
