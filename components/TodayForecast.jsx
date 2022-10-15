import React, { useEffect, useState, Fragment } from "react";
import useFetchWeather from "../hooks/useFetchWeather";
import { useTimeoutFn } from "react-use";
import { selectIcon } from "../utils/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { selectCityState } from "../store/citySlice";
import { useSelector } from "react-redux";
import { Transition } from "@headlessui/react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const TodayForecast = () => {
  const city = useSelector(selectCityState);
  let [isShowing, setIsShowing] = useState(true);
  let [, , resetIsShowing] = useTimeoutFn(() => setIsShowing(true), 500);

  const { loading, todayForecast, error } = useFetchWeather(city);

  useEffect(() => {
    setIsShowing(false);
    resetIsShowing();
  }, [city, resetIsShowing]);

  return (
    <>
      {todayForecast !== undefined && todayForecast.length === 1 && (
        <div className='md:container md:mx-auto bg-gray-100 rounded-md shadow border p-8 m-10 center min-h-[350px]'>
          <h2>
            {city}
            <span className='text-xs'> Today</span>
          </h2>

          <Transition
            as={Fragment}
            show={isShowing}
            enter='transform transition duration-[600ms]'
            enterFrom='opacity-0 rotate-[-120deg] scale-50'
            enterTo='opacity-100 rotate-0 scale-100'
            leave='transform duration-600 transition ease-in-out'
            leaveFrom='opacity-100 rotate-0 scale-100 '
            leaveTo='opacity-0 scale-95 '
          >
            {isShowing ? (
              <div className='mt-12'>
                <div className='text-orange-400 text-9xl flex justify-center'>
                  <FontAwesomeIcon
                    icon={selectIcon(todayForecast[0].weather[0].main)}
                  />
                </div>
                <div className='flex justify-center mt-2'>
                  <p className='text-xl'>
                    {Math.floor(todayForecast[0].temp.day)}&deg;
                  </p>
                  <p className='text-xl font-semibold'>
                    {todayForecast[0].weather[0].main}
                  </p>
                </div>
              </div>
            ) : (
              //kinda cool effect
              //   <div className='mt-12 text-orange-400 text-9xl flex justify-center'>
              //     <FontAwesomeIcon icon={faMagnifyingGlass} />
              //   </div>
              <p>&nbsp;</p>
            )}
          </Transition>

          {error && <p>Something went wrong, please try again.</p>}
        </div>
      )}
    </>
  );
};

export default TodayForecast;
