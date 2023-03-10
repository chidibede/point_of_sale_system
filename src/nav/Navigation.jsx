import { Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import storage from '../utils/storage';
import { signOut } from '../server/controllers/auth';
import ProfileDropDown from '../components/ProfileDropDown';

const unauthenticatedNavigation = [
  { name: 'How it works', href: '/demo' },
  { name: 'FAQ', href: '/faq' },
  { name: 'About us', href: '/about' },
];

const authenticatedNavigation = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Inventory', href: '/inventory' },
  { name: 'Point of Sale', href: '/pos' },
];

const userNavigation = [
  { name: 'Your Profile', href: '/profile' },
  { name: 'Settings', href: '/settings' },
  { name: 'Log out', href: '#' },
];

export default function Navigation({
  background = 'bg-transparent',
  displayOnlyHome = false,
}) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userSession = storage.session.get('auth');
    if (userSession) {
      setUser(userSession.user);
    }
  }, [user]);

  const logoutUser = async () => {
    await signOut();
    storage.session.delete('auth');
    setUser(null);
    navigate('/');
  };

  return (
    <>
      <Popover as="header" className="relative">
        <div className={`${background} pt-6 relative isolate border-none`}>
          {/* <Gradient /> */}
          <nav
            className="relative mx-auto flex max-w-7xl items-center justify-between px-6"
            aria-label="Global"
          >
            <div className="flex flex-1 items-center">
              <div className="flex w-full items-center justify-between md:w-auto">
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
                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button className="focus-ring-inset inline-flex items-center justify-center rounded-md bg-gray-900 p-2 text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              {!displayOnlyHome && (
                <>
                  {user ? (
                    <div className="hidden space-x-8 md:ml-14 lg:ml-14 xl:ml-14 md:flex">
                      {authenticatedNavigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="text-base font-medium text-white hover:text-gray-300"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="hidden space-x-8 md:ml-14 lg:ml-14 xl:ml-14 md:flex">
                      {unauthenticatedNavigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="text-base font-medium text-white hover:text-gray-300"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
            {!displayOnlyHome && (
              <>
                {user ? (
                  <div className="hidden md:flex md:items-center md:space-x-6">
                    <ProfileDropDown userNavigation={userNavigation} logout={async () => await logoutUser()} />
                  </div>
                ) : (
                  <div className="hidden md:flex md:items-center md:space-x-6">
                    <Link
                      to="/login"
                      className="text-base font-medium text-white hover:text-gray-300"
                    >
                      Log in
                    </Link>
                  </div>
                )}
              </>
            )}
          </nav>
        </div>

        <Transition
          as={React.Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 origin-top transform p-2 transition md:hidden"
          >
            <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
              <div className="flex items-center justify-between px-5 pt-4">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?from-color=teal&from-shade=500&to-color=cyan&to-shade=600&toShade=600"
                    alt=""
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="pt-5 pb-6">
                {user ? (
                  <div className="space-y-1 px-2">
                    {authenticatedNavigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-1 px-2">
                    {unauthenticatedNavigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
                <div className="mt-6 px-5">
                  {user ? (
                    <button
                      onClick={async () => {
                        await logoutUser();
                      }}
                      className="block w-full rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 py-3 px-4 text-center font-medium text-white shadow hover:from-teal-600 hover:to-cyan-700"
                    >
                      Log out
                    </button>
                  ) : (
                    <Link
                      to="/login"
                      className="block w-full rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 py-3 px-4 text-center font-medium text-white shadow hover:from-teal-600 hover:to-cyan-700"
                    >
                      Login
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </>
  );
}
