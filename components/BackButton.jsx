import { useRouter } from "next/router";
import { IoIosArrowBack } from "react-icons/io";
import { GoBackButton } from "./styles/BackButton.style";

const BackButton = () => {
  const router = useRouter();
  return (
    <GoBackButton type="button" onClick={() => router.back()}>
      <IoIosArrowBack /> Back
    </GoBackButton>
  );
};

export default BackButton;
