import { Metadata } from "next";

import * as meta from "./meta";
import Post from "./post.mdx";

export const metadata: Metadata = meta.metadata;
export default function HowStudyNodeJs() {
  return <Post />;
}
