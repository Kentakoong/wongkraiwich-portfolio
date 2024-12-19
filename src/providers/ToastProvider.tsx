"use client";

import { Toaster } from "sonner";

export const ToastProvider = ({
  children,
}: Readonly<{ children?: React.ReactNode }>) => {
  return (
    <>
      {children}
      <Toaster
        position="bottom-right"
        className="!sm:right-4 !w-full translate-x-4 translate-y-[-9.5rem] sm:max-w-md"
        toastOptions={{
          unstyled: true,
          classNames: {
            toast:
              "dark:bg-neutral-800 text-neutral-900 dark:text-neutral-50 bg-neutral-200 flex items-center gap-x-2 p-4 rounded-xl shadow-lg w-full",
            error:
              "!bg-red-300/30 dark:!bg-red-700/30 text-red-900 dark:text-red-50",
            success:
              "!bg-green-300/30 dark:!bg-green-700/30 text-green-900 dark:text-green-50",
            warning:
              "!bg-yellow-300/30 dark:!bg-yellow-700/30 text-yellow-900 dark:text-yellow-50",
            info: "!bg-blue-300/30 dark:!bg-blue-700/30 text-blue-900 dark:text-blue-50",
          },
        }}
      />
    </>
  );
};
