import Link from "next/link"
import Layout from "../components/MyLayout";

const PostLink = props => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

export default function Blog() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink id="hello-nextjs" title="Hello Nuxt.js"/>
        <PostLink id="learn-nextjs" title="Learn Nuxt.js"/>
        <PostLink id="deploy-nextjs" title="Deploy"/>
      </ul>
    </Layout>
  );
}
