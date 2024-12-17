import { IconClock, IconMapPin, IconPhoneCall } from '@tabler/icons-react';
import Headline from '../common/Headline';
import { ContactProps } from '~/shared/types';
import WidgetWrapper from '../common/WidgetWrapper';
import ContactForm from './ContactForm';

const Contact = ({ header, content, items, form, id, hasBackground = false }: ContactProps) => {
  const getIcon = (iconName: string | undefined) => {
    if (!iconName) return null;

    switch (iconName) {
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
    <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="max-w-6xl">
      {header && <Headline header={header} titleClass="text-3xl sm:text-5xl" />}
      <div className="flex items-stretch justify-center">
        <div className={`grid ${!content && !items ? 'md:grid-cols-1' : 'md:grid-cols-2'}`}>
          <div className="h-full pr-6">
            {content && <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">{content}</p>}
            <ul className="mb-6 md:mb-0">
              {items?.map((item, index) => (
                <li key={`item-contact-${index}`} className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    {getIcon(item.iconName)}
                  </div>
                  <div className="ml-4 rtl:ml-0 rtl:mr-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">{item.title}</h3>
                    {item.description.map((desc, index) => (
                      <p key={`text-description-${index}`} className="text-gray-600 dark:text-slate-400">
                        {desc}
                      </p>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <ContactForm form={form} />
        </div>
      </div>
    </WidgetWrapper>
  );
};

export default Contact;
