import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
  },
  {
    name: 'Users',
    url: '/users',
    iconComponent: { name: 'cil-settings' },
    badge: {
      color: 'success',
      text: '30/42'
    }
  },
  {
    name: 'Configurations',
    url: '/configs',
    iconComponent: { name: 'cil-settings' },
    badge: {
      color: 'info',
      text: '48'
    }
  },
  {
    name: 'Mails',
    url: '/mails',
    iconComponent: { name: 'cil-envelope-closed' },
    badge: {
      color: 'danger',
      text: '4'
    }
  },
  {
    name: 'Logs',
    url: '/logs',
    iconComponent: { name: 'cil-calculator' },
    badge: {
      color: 'primary',
      text: '104'
    }
  },
  {
    title: true,
    name: 'Admin Settings'
  },
  {
    name: 'Admin Profile Settings',
    url: '/settings',
    iconComponent: { name: 'cil-settings' },
  },
];
