import { useRouter } from "next/router";
import Link from "next/link";



const style = {
  color: "f5f5f5",
  transition: "all 0.5s ease-in-out",
  background: " #F5AF31",
  borderRadius: "20px",
  padding: "10px 30px",
};



export const ActiveLink = ({ text, link }) => {

  const { asPath } = useRouter();


  return (
    <Link href={link} shallow >
      <a style={asPath === link ? style : null}> {text} </a>
    </Link>
  );
};
