import { socials } from "@/assets/vantagens"
import MaxWidthWrapper from "./MaxWidthWrapper"

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
          <MaxWidthWrapper>
            <div className="flex justify-between items-start mt-5 gap-20 flex-wrap max-lg:flex-col max-sm:flex-col max-sm:items-center">
              <div className="flex flex-col items-center">
                <h1> Amarílis </h1>
                <div className="mt-2">
                {socials.map((item) => (
                  <div key={item.name}  className="h-10 w-10 flex items-center justify-center rounded-full bg-green-100 text-green-900">
                  {<item.icon className="w-1/3 h-1/3" />}
                </div>
                ))}
              </div>
                <p className="mt-6 text-base leading-7 sm:max-w-sm">
                  Vista-se de atitude.
                </p>
              </div>
            </div>

            <div className="flex justify-between mb-5 max-sm:flex-col max-sm:items-center">
              <div className="flex flex-1 justify-start items-center gap-2 cursor-pointer">
                <p>Copyright. All rights reserved.</p>
              </div>
              
              
              <p className="cursor-pointer">
                Terms & conditions
              </p>
            </div>
          </MaxWidthWrapper>
        </footer>
  )
}

export default Footer