import { ReactNode } from "react";

export function LoginCreateWithSocials({children}: {children: ReactNode}) {
  return (
    <div className="p-3 border border-gray-500 rounded-full">
      {children}
    </div>
  );
}
