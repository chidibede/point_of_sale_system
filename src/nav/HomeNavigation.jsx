import { Link } from "react-router-dom";

export default function HomeNavigation() {
  return (
    <div className="bg-gray-900 flex w-full items-center justify-between md:w-auto ml-16 mt-6">
      <Link to="/">
        <div className="flex flex-row">
          <span className="sr-only">Nextrend</span>
          <img
            className="h-8 w-auto sm:h-10"
            src="https://tailwindui.com/img/logos/mark.svg?from-color=teal&from-shade=200&to-color=cyan&to-shade=400&toShade=400"
            alt=""
          />
          <span className="text-white mt-2 ml-2">Nextrend</span>
        </div>
      </Link>
    </div>
  );
}
