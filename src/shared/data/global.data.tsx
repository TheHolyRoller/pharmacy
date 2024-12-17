import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandTwitter,
  IconChevronDown,
  IconRss,
  IconLocation
} from '@tabler/icons-react';
import { AnnouncementProps, FooterProps, HeaderProps } from '../types';

// Announcement data
export const announcementData: AnnouncementProps = {
  title: 'NEW',
  callToAction: {
    text: 'This template is made with Next.js 14 using the new App Router »',
    href: 'https://nextjs.org/blog/next-14',
  },
  callToAction2: {
    text: 'Follow @onWidget on Twitter',
    href: 'https://twitter.com/intent/user?screen_name=onwidget',
  },
};

// Header data
export const headerData: HeaderProps = {



  links: [
    {

      links: [
        {
          label: 'Services',
          href: '/services',
        },

        {
          label: 'About us',
          href: '/about',
        },
        {
          label: 'Contact us',
          href: '/contact',
        },

      ],
    },
    { label: 'Vendi',
      icon: IconLocation,
      href: 'https://maps.app.goo.gl/YsR75imFoE8d27xv7' },

    // {
    //   label: 'Contact',
    //   href: '/contact',
    // },
  ],
  actions: [

  ],
  isSticky: true,
  showToggleTheme: true,
  showRssFeed: false,
  position: 'right',
};

// Footer data
export const footerData: FooterProps = {
  title: 'TailNext',
  links: [
    {
      label: 'Terms & Conditions',
      href: '/terms',
    },
    {
      label: 'Privacy Policy',
      href: '/privacy',
    },
  ],
  columns: [
    {
      title: 'Product',
      links: [
        {
          label: 'Features',
          href: '/',
        },
        {
          label: 'Security',
          href: '/',
        },
        {
          label: 'Team',
          href: '/',
        },
        {
          label: 'Enterprise',
          href: '/',
        },
        {
          label: 'Customer stories',
          href: '/',
        },
        {
          label: 'Pricing',
          href: '/pricing',
        },
        {
          label: 'Resources',
          href: '/',
        },
      ],
    },
    {
      title: 'Platform',
      links: [
        {
          label: 'Developer API',
          href: '/',
        },
        {
          label: 'Partners',
          href: '/',
        },
      ],
    },
    {
      title: 'Support',
      links: [
        {
          label: 'Docs',
          href: '/',
        },
        {
          label: 'Community Forum',
          href: '/',
        },
        {
          label: 'Professional Services',
          href: '/',
        },
        {
          label: 'Skills',
          href: '/',
        },
        {
          label: 'Status',
          href: '/',
        },
      ],
    },
    {
      title: 'Company',
      links: [
        {
          label: 'About',
          href: '/',
        },
        { label: 'Location',
          icon: IconLocation,
          href: 'https://maps.app.goo.gl/YsR75imFoE8d27xv7' },

        {
          label: 'Careers',
          href: '/',
        },
        {
          label: 'Press',
          href: '/',
        },
        {
          label: 'Inclusion',
          href: '/',
        },
        {
          label: 'Social Impact',
          href: '/',
        },
        {
          label: 'Shop',
          href: '/',
        },
      ],
    },
  ],
  socials: [
    { label: 'Twitter', icon: IconBrandTwitter, href: '#' },
    { label: 'Instagram', icon: IconBrandInstagram, href: '#' },
    { label: 'Facebook', icon: IconBrandFacebook, href: '#' },
    { label: 'RSS', icon: IconRss, href: '#' },

    { label: 'Location', icon: IconLocation, href: 'https://maps.app.goo.gl/YsR75imFoE8d27xv7' },
    { label: 'Github', icon: IconBrandGithub, href: 'https://github.com/onwidget/tailnext' },

  ],
  footNote: (
    <div className="mr-4 text-sm rtl:mr-0 rtl:ml-4">
      <span className="float-left rtl:float-right mr-1.5 rtl:mr-0 rtl:ml-1.5 h-5 w-5 rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)] bg-cover md:-mt-0.5 md:h-6 md:w-6"></span>
      <span>
        Made by{' '}
        <a
          className="font-semibold text-slate-900 dark:text-gray-200 hover:text-blue-600 hover:underline dark:hover:text-blue-600"
          href="https://onwidget.com/"
        >
          {' '}
          onWidget
        </a>{' '}
        · All rights reserved.
      </span>
    </div>
  ),
};

// Footer2 data
export const footerData2: FooterProps = {
  links: [
    {
      label: 'Kushtet & Termat',
      href: '/terms',
    },

    {
      label: 'Politika e Privatësisë',
      href: '/privacy',
    },
  ],
  columns: [

    {
      title: 'Adresa',
      texts: ['XXX2+P8X, Rruga e Elbasanit, Cërrik, Albania'],
    },
    {
      title: 'Telefoni',
      texts: ['Recepsioni: 068 929 9077', 'Zyra: 068 929 9077'],
    },
    {
      title: 'Email',
      texts: ['Zyra: entellafarmaci@gmail.com', 'Site: https://example.com'],
    },
  ],

  socials: [
    { label: 'Instagram', icon: IconBrandInstagram, href: '#' },
    { label: 'Facebook', icon: IconBrandFacebook, href: '#' },
  ],
  footNote: (
    <div className="mr-4 text-sm rtl:mr-0 rtl:ml-4">
      <span className="float-left rtl:float-right mr-1.5 rtl:mr-0 rtl:ml-1.5 h-5 w-5 rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)] bg-cover md:-mt-0.5 md:h-6 md:w-6"></span>
      <span>
        Made by{' Danny Wakeley '}
        <a
          className="font-semibold text-slate-900 dark:text-gray-200 hover:text-blue-600 hover:underline dark:hover:text-blue-600"
          href="https://onwidget.com/"
        >
          {' '}
        </a>{' '}
        · All rights reserved.
      </span>
    </div>
  ),
};
