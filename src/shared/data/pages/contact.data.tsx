import { IconClock, IconHeadset, IconHelp, IconMapPin, IconMessages, IconPhoneCall } from '@tabler/icons-react';
import { ContactProps, FeaturesProps } from '~/shared/types';
import { HeroProps } from '~/shared/types';

// Hero data on Contact page *******************
export const heroContact: HeroProps = {
  title: 'Get in touch with us',
  subtitle: (
    <>
      <span className="hidden md:inline">{`Thank you for considering us for your project! We're excited to hear from you.`}</span>{' '}
      {`Our team can assist you in building your dream website.`}
    </>
  ),
  tagline: 'Demo Contact Page',
};



// Contact data on Contact page *******************
export const contact2Contact: ContactProps = {
  id: 'contactTwo-on-contact',
  hasBackground: true,
  header: {
    title: 'Contact us',
    subtitle: (
      <>
        Please take a moment to fill out this form.{' '}
        <span className="hidden md:inline">{`So we can better understand your needs and get the process started smoothly.`}</span>
      </>
    ),
  },
  items: [
    {
      title: 'Our Address',
      description: ['1230 Maecenas Street Donec Road', 'New York, EEUU'],
      iconName: 'map-pin',
    },
    {
      title: 'Kontaktoni',
      description: ['Telefon: 068 929 9077', 'Mail: entellafarmaci@gmail.com'],
      iconName: 'phone-call',
    },
    {
      title: 'Orari i hapjes',
      description: ['E hënë - E premte: 08:00 - 17:00", "E shtunë & E diel: 08:00 - 12:00'],
      iconName: 'clock',
    },
  ],
  form: {
    title: 'Ready to Get Started?',
    action: 'https://submit-form.com/EPq8u563',
    inputs: [
      {
        type: 'text',
        name: 'name',
        autocomplete: 'off',
        placeholder: 'Emri yt',
        required: true,
      },
      {
        type: 'email',
        name: 'email',
        autocomplete: 'on',
        placeholder: 'Adresa e emailit',
        required: true,
      },
    ],
    radioBtns: {
      label: 'What is the reason for your contact?',
      radios: [
        {
          label: 'General inquiries',
        },
        {
          label: 'Technical help',
        },
        {
          label: 'Claims',
        },
        {
          label: 'Others',
        },
      ],
    },
    textarea: {
      cols: 30,
      rows: 5,
      label: 'How can we help you?',
      name: 'textarea',
      placeholder: 'Write your message...',
    },
    checkboxes: [
      {
        label: 'Have you read our privacy policy?',
        value: '',
      },
      {
        label: 'Do you want to receive monthly updates by email?',
        value: '',
      },
    ],
    btn: {
      title: 'Send Message',
      type: 'submit',
    },
  },
};

// Feature2 data on Contact page *******************
export const features2Contact: FeaturesProps = {
  columns: 3,
  // header: {
  //   title: 'Support Center',
  //   subtitle: 'Looking for something in particular?',
  // },
  items: [
    // {
    //   title: 'Have a question?',
    //   description: 'See our frequently asked questions',
    //   icon: IconHelp,
    //   callToAction: {
    //     text: 'Go to FAQ page',
    //     href: '/faqs',
    //   },
    // },
    // {
    //   title: 'Chat with us',
    //   description: 'Live chat with our support team',
    //   icon: IconMessages,
    //   callToAction: {
    //     text: 'Write to us',
    //     href: '/',
    //   },
    // },
    // {
    //   title: 'Get help',
    //   description: 'Speak to our team today',
    //   icon: IconHeadset,
    //   callToAction: {
    //     text: 'Call us',
    //     href: '/',
    //   },
    // },
  ],
};

