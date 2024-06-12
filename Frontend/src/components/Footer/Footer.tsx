import Link from "next/link";
import { BiMessageDetail } from "react-icons/bi";
import { BsFillSendFill, BsTelephoneOutbound } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="mt-16">
      <div className="container mx-auto px-4">
        <Link href="/" className="font-black text-tertiary-dark">
          LuxStay
        </Link>

        <h4 className="font-semibold text-[40px] py-6">Contact</h4>
        <div className="flex flex-wrap gap-16 items-center justify-between">
          <div className="flex-1">
            <p>123 Road</p>
            <div className="flex items-center py-4">
              <BsFillSendFill />
              <p className="ml-2">Boluwatife Adeyemi</p>
            </div>
            <div className="flex items-center ">
              <BsTelephoneOutbound />
              <p className="ml-2">0000-LUX-STAY</p>
            </div>
            <div className="flex items-center pt-4">
              <BiMessageDetail />
              <p className="ml-2">Boluwatife Adeyemi</p>
            </div>
          </div>

          <div className="flex-1 md:text-right">
            <div className="pb-4">Our Story </div>
            <div className="pb-4">Get in touch</div>
            <div className="pb-4">Our Privacy Commitment</div>
            <div className="pb-4">Terms of Service</div>
            <div className="pb-4">Customer Assistance</div>
          </div>

          <div className="flex-1 md:text-right">
            <div className="pb-4">Dining Experience</div>
            <div className="pb-4">Wellness</div>
            <div className="pb-4">Fitness</div>
            <div className="pb-4">Sports</div>
            <p>Events</p>
          </div>
        </div>
      </div>

      <div className="bg-tertiary-light -10 md:h-[70px] mt-16 w-full bottom-0 left-0" />
    </footer>
  );
};

export default Footer;
