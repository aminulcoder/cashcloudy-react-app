import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
} from "@headlessui/react";
import {
  ArrowDownCircleIcon,
  ArrowsRightLeftIcon,
  BanknotesIcon,
  Bars3Icon,
  BellIcon,
  BoltIcon,
  CalendarIcon,
  ChartBarSquareIcon,
  ChartPieIcon,
  ChevronRightIcon,
  Cog6ToothIcon,
  CubeIcon,
  CurrencyDollarIcon,
  DocumentDuplicateIcon,
  DocumentTextIcon,
  FolderIcon,
  GiftIcon,
  HomeIcon,
  HomeModernIcon,
  QuestionMarkCircleIcon,
  StarIcon,
  UserGroupIcon,
  UsersIcon,
  WrenchIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <>
      <Dialog
        open={sidebarOpen}
        onClose={setSidebarOpen}
        className="relative z-50 lg:hidden"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 flex">
          <DialogPanel
            transition
            className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
          >
            <TransitionChild>
              <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                <button
                  type="button"
                  onClick={() => setSidebarOpen(false)}
                  className="-m-2.5 p-2.5"
                >
                  <span className="sr-only">Close sidebar</span>
                  <XMarkIcon
                    aria-hidden="true"
                    className="h-6 w-6 text-white"
                  />
                </button>
              </div>
            </TransitionChild>
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
              <div className="flex h-16 shrink-0 items-center">
                <img
                  alt="Your Company"
                  src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </div>
              <nav className="flex flex-1 flex-col">
                <ul role="list" className="flex flex-1 flex-col gap-y-7">
                  <li>
                    <ul role="list" className="-mx-2 space-y-1">
                      <li>
                        <a
                          href="#"
                          className={classNames(
                            "text-gray-800 dark:text-gray-400 hover:bg-gray-50 hover:text-indigo-600",
                            "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                          )}
                        >
                          <HomeModernIcon
                            aria-hidden="true"
                            className={classNames(
                              "text-gray-400 group-hover:text-indigo-600",
                              "h-6 w-6 shrink-0"
                            )}
                          />
                          Dashboard
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="mt-auto">
                    <a
                      href="#"
                      className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-800 dark:text-gray-400 hover:bg-gray-50 hover:text-indigo-600"
                    >
                      <Cog6ToothIcon
                        aria-hidden="true"
                        className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                      />
                      Settings
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col dark:bg-gray-800">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r dark:border-gray-700 border-gray-200 px-6 pb-4">
          <Link
            to="/admin/dashboard"
            className="flex h-16 shrink-0 items-center"
          >
            <img
              alt="Your Company"
              src="/src/components/Dashboard/Sidebar/Vector.png"
              className="h-8 w-auto"
            />
            <span className="px-2 font-extrabold text-2xl">Cashcloudy</span>
          </Link>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  <li>
                    <Link
                      to="/admin/dashboard"
                      className={classNames(
                        "text-gray-800 dark:text-gray-400 hover:bg-[#7F56D9] hover:text-white group-hover:text-white",
                        "group flex gap-x-3 rounded-md p-2 lg:text-lg font-semibold leading-6"
                      )}
                    >
               
                      
                      <ChartBarSquareIcon
                        aria-hidden="true"
                        className={classNames(
                          " hover:text-white",
                          "h-6 w-6 shrink-0"
                        )}
                      />
                      Dashboard
                    </Link>
                    <Link
                      to="/admin/transction"
                      className={classNames(
                        "text-gray-800   hover:bg-[#7F56D9] hover:text-white",
                        "group flex gap-x-3 rounded-md p-2 lg:text-lg font-semibold leading-6"
                      )}
                    >
                      <ArrowsRightLeftIcon
                        aria-hidden="true"
                        className={classNames(
                          " hover:text-white",
                          "h-6 w-6 shrink-0"
                        )}
                      />
                      Transction
                    </Link>
                    <Link
                      to="/admin/earn-20$"
                      className={classNames(
                        "text-gray-800  hover:bg-[#7F56D9] hover:text-white",
                        "group flex gap-x-3 rounded-md p-2 lg:text-lg font-semibold leading-6"
                      )}
                    >
                      <GiftIcon
                        aria-hidden="true"
                        className={classNames(
                          " hover:text-white",
                          "h-8 w-8 shrink-0"
                        )}
                      />
                      Earn 20$
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="mt-auto">
                <a
                  href="#"
                  className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-800 dark:text-gray-400 hover:bg-gray-50 hover:text-indigo-600"
                >
                  <Cog6ToothIcon
                    aria-hidden="true"
                    className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                  />
                  Settings
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
