import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { selectCityState, setCityState } from "../store/citySlice";
import { useDispatch, useSelector } from "react-redux";

const menuItemBaseStyles =
  "group flex w-full items-center px-2 py-2 text-sm rounded-md";
const menuItemActiveStyles = "bg-violet-500 text-white";
const menuItemNotActiveStyles = "text-gray-900";

const CitySelectMenu = () => {
  const dispatch = useDispatch();

  const handleSelectCity = (e) => {
    dispatch(setCityState(e.target.firstChild.data));
  };

  return (
    <div className='top-16 w-56 text-right'>
      <Menu as='div' className='relative inline-block text-left'>
        <div>
          <Menu.Button className='inline-flex w-full justify-center rounded-md bg-violet-500  px-4 py-2 text-sm font-medium text-white hover:bg-opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
            Choose City
            <ChevronDownIcon
              className='ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100'
              aria-hidden='true'
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items className='absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? menuItemActiveStyles : menuItemNotActiveStyles
                  } ${menuItemBaseStyles}`}
                  onClick={(e) => handleSelectCity(e)}
                >
                  Halifax
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? menuItemActiveStyles : menuItemNotActiveStyles
                  } ${menuItemBaseStyles}`}
                  onClick={(e) => handleSelectCity(e)}
                >
                  Mexico
                </button>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? menuItemActiveStyles : menuItemNotActiveStyles
                  } ${menuItemBaseStyles}`}
                  onClick={(e) => handleSelectCity(e)}
                >
                  Moscow
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? menuItemActiveStyles : menuItemNotActiveStyles
                  } ${menuItemBaseStyles}`}
                  onClick={(e) => handleSelectCity(e)}
                >
                  New York
                </button>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? menuItemActiveStyles : menuItemNotActiveStyles
                  } ${menuItemBaseStyles}`}
                  onClick={(e) => handleSelectCity(e)}
                >
                  Miami
                </button>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default CitySelectMenu;
