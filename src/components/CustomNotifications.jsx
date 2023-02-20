/* eslint-disable react/prop-types */
import React from 'react';
import toast from 'react-hot-toast';

function CustomNotification({ toastOptions, message, status }) {
  const color = status === 'error' ? 'text-red-400' : 'text-400-green';
  const dismissButtonStyle =
    status === 'error'
      ? 'text-red-600 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500'
      : 'text-green-600 hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-green-500';

  return (
    <div
      className={`${
        toastOptions.visible ? 'animate-enter' : 'animate-leave'
      } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      data-testid="notification"
    >
      <div className="flex-1 w-0 p-4">
        <div className="flex items-start">
          <div className="ml-3 flex-1 mt-1">
            <p className={`text-sm font-medium ${color}`}>{message}</p>
          </div>
        </div>
      </div>
      <div className="flex border-l border-gray-200">
        <button
          onClick={() => toast.dismiss(toastOptions.id)}
          onKeyDown={() => toast.dismiss(toastOptions.id)}
          className={`w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium ${dismissButtonStyle}`}
          tabIndex={0}
          type="button"
          data-testid="dismissButton"
          name="dismiss button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#fc0320"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#fc0320"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default CustomNotification;
