'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { PrivacyPolicyPopupProps } from './PrivacyPolicyPopup.props';

export const PrivacyPolicyPopup = ({ data }: PrivacyPolicyPopupProps) => {
  const { text, link, acceptButton } = data;
  const [isVisible, setIsVisible] = useState('hidden');

  useEffect(() => {
    const localStorageValue = localStorage.getItem('privacyPolicyPopupVisible');

    if (localStorageValue !== 'hidden') {
      setIsVisible('flex');
    }
  }, []);

  const hidePopup = () => {
    setIsVisible('hidden');
    localStorage.setItem('privacyPolicyPopupVisible', 'hidden');
  };

  return (
    <div className={`fixed bottom-0 z-[99] min-h-[48px] w-full bg-secondary py-1.5 ${isVisible}`}>
      <div className="container">
        <div className="flex items-center justify-between gap-x-3 text-[12px] font-extralight text-white">
          <div className="w-5/6">
            {text}
            <Link href={link.href} className="underline">
              {link.name}
            </Link>
          </div>
          <button className="text-xs font-normal uppercase" onClick={hidePopup}>
            {acceptButton}
          </button>
        </div>
      </div>
    </div>
  );
};
