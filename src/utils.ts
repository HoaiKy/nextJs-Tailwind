import { usePathname } from "next/navigation";
import en from "./../public/lang/en";
import vi from "./../public/lang/vi";

const useTrans = () => {
  const pathName = usePathname();

  const trans = pathName === "/" ? vi : en;

  return trans;
};

export default useTrans;
