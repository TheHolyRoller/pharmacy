'use client';

import { IconClock, IconMapPin, IconPhoneCall } from '@tabler/icons-react';

interface ContactItemProps {
  title: string;
  description: string | string[];
  iconName: string;
}

const ContactItem = ({ title, description, iconName }: ContactItemProps) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'map-pin':
        return <IconMapPin className="h-6 w-6" />;
      case 'phone-call':
        return <IconPhoneCall className="h-6 w-6" />;
      case 'clock':
        return <IconClock className="h-6 w-6" />;
      default:
        return null;
    }
  };

  return (
    <li className="flex">
      <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
        {getIcon(iconName)}
      </div>
      <div className="ml-4 rtl:ml-0 rtl:mr-4 mb-4">
        <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">{title}</h3>
        {typeof description === 'string' ? (
          <p className="text-gray-600 dark:text-slate-400">
            {description}
          </p>
        ) : (
          description &&
          description.map((desc, index) => (
            <p key={`text-description-${index}`} className="text-gray-600 dark:text-slate-400">
              {desc}
            </p>
          ))
        )}
      </div>
    </li>
  );
};

export default ContactItem;
