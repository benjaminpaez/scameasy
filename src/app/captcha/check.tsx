"use client";
import captcha from "@/../public/assets/RecaptchaLogo.svg.png";
import { Loader2 } from "lucide-react";
import Image from "next/image";

export default function CheckCaptcha({
  inputDisabled,
  isChecked,
  handleCheckboxChange,
  handleClick,
}: {
  inputDisabled: boolean;
  isChecked: boolean;
  handleCheckboxChange: () => void;
  handleClick: () => void;
}) {
  return (
    <div className="bg-[#e1dad3] border border-gray-600 w-full m-8 p-4 grid grid-cols-5">
      <div className="col-span-3 flex items-center space-x-2 justify-center">
        <div>
          {isChecked ? (
            <Loader2 className="mr-4h-6 w-6 animate-spin" />
          ) : (
            <input
              type="checkbox"
              checked={isChecked}
              className="h-6 w-6"
              onChange={handleCheckboxChange}
              onClick={handleClick}
              disabled={inputDisabled}
            />
          )}
        </div>
        <label>No soy un robot</label>
      </div>
      <div className="col-span-2 flex items-center justify-center">
        <Image
          src={captcha}
          className="mr-1"
          width={60}
          height={40}
          alt="visa"
        />
      </div>
    </div>
  );
}
