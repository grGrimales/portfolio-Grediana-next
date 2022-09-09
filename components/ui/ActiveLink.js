import { useRouter } from "next/router";
import Link from "next/link";

const style = {
  color: "white",
  transition: "all 0.5s ease-in-out",
  background: " #F5AF31",
  borderRadius: "20px",
  padding: "10px 30px",
};

export const ActiveLink = ({ text, link }) => {
  const { asPath } = useRouter();

  console.log(asPath, link, asPath == link)
  return (
    <Link href={link}>
      <a style={asPath == link ? style : undefined}> {text} </a>
    </Link>
  );
};
