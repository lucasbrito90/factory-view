export interface menu {
  header?: string;
  title?: string;
  icon?: string;
  to?: string;
  divider?: boolean;
  getURL?: boolean;
  chip?: string;
  chipColor?: string;
  chipVariant?: string;
  chipIcon?: string;
  children?: menu[];
  disabled?: boolean;
  type?: string;
  subCaption?: string;
}

const sidebarItem: menu[] = [
  { header: 'Dashboard' },
  {
    title: 'Dashboard',
    icon: 'custom-home-trend',
    to: '/dashboard/default',
    children: [
      {
        title: 'Default',
        to: '/dashboard/default'
      },
      {
        title: 'Analytics',
        to: '/dashboard/analytics'
      }
    ]
  },
  {
    title: 'Components',
    icon: 'custom-box-1',
    to: 'components/buttons',
    getURL: true,
    type: 'external',
    chip: 'new',
    chipColor: 'primary',
    chipVariant: 'tonal'
  },
  { header: 'Widget' },
  {
    title: 'Statistics',
    icon: 'custom-story',
    to: '/widget/statistics'
  },
  {
    title: 'Data',
    icon: 'custom-fatrows',
    to: '/widget/data'
  },
  {
    title: 'Chart',
    icon: 'custom-presentation-chart',
    to: '/widget/chart'
  },
  { header: 'Applications' },
  {
    title: 'Chat',
    icon: 'custom-chat',
    to: '/app/chats'
  },
  {
    title: 'Calendar',
    icon: 'custom-calendar-1',
    to: '/app/calendar'
  },
  {
    title: 'Kanban',
    icon: 'custom-kanban',
    to: '/app/kanban'
  },
  {
    title: 'Customer',
    icon: 'custom-users',
    to: '/customer/',
    children: [
      {
        title: 'Customer List',
        to: '/customer/customerlist'
      },
      {
        title: 'Create Invoice',
        to: '/app/customer/create-invoice'
      },
      {
        title: 'Order Details',
        to: '/app/customer/order-details'
      },
      {
        title: 'Order List',
        to: '/customer/orderlist'
      },
      {
        title: 'Product List',
        to: '/customer/productlist'
      },
      {
        title: 'Product Review',
        to: '/customer/productreview'
      }
    ]
  },
  {
    title: 'Invoice',
    icon: 'custom-invoice',
    to: '/',
    children: [
      {
        title: 'Dashboard',
        to: '/app/invoice/dashboard'
      },
      {
        title: 'Create',
        to: '/app/invoice/create'
      },
      {
        title: 'Details',
        to: '/app/invoice/details'
      },
      {
        title: 'List',
        to: '/app/invoice/list'
      },
      {
        title: 'Edit',
        to: '/app/invoice/edit'
      }
    ]
  },
  {
    title: 'Users',
    icon: 'custom-user-square',
    to: '/app/user',
    children: [
      {
        title: 'Social Profile',
        to: '/app/user/social/posts'
      },
      {
        title: 'Account Profile',
        to: '/app/user/account-profile',
        children: [
          {
            title: 'Profile 01',
            to: '/app/user/account-profile/profile1'
          },
          {
            title: 'Profile 02',
            to: '/app/user/account-profile/profile2'
          },
          {
            title: 'Profile 03',
            to: '/app/user/account-profile/profile3'
          }
        ]
      },
      {
        title: 'User Profile',
        to: '/app/user/userprofile'
      },
      {
        title: 'Cards',
        to: '/app/user/card',
        children: [
          {
            title: 'Style 01',
            to: '/app/user/card/card1'
          },
          {
            title: 'Style 02',
            to: '/app/user/card/card2'
          },
          {
            title: 'Style 03',
            to: '/app/user/card/card3'
          }
        ]
      },
      {
        title: 'List',
        to: '/app/user/list',
        children: [
          {
            title: 'Style 01',
            to: '/app/user/list1'
          },
          {
            title: 'Style 02',
            to: '/app/user/list2'
          }
        ]
      }
    ]
  },
  {
    title: 'Mail',
    icon: 'custom-direct-inbox',
    to: '/app/mail'
  },
  {
    title: 'Contact',
    icon: 'custom-user-circle-add',
    to: '/app/contacts',
    children: [
      {
        title: 'Card',
        to: '/app/contact/c-card'
      },
      {
        title: 'List',
        to: '/app/contact/c-list'
      }
    ]
  },
  {
    title: 'E-Commerce',
    icon: 'custom-shopping-bag',
    to: '/ecommerce/',
    children: [
      {
        title: 'Products',
        to: '/ecommerce/products'
      },
      {
        title: 'Product Detail',
        to: '/ecommerce/product/detail/1'
      },
      {
        title: 'Product List',
        to: '/ecommerce/productlist'
      },
      {
        title: 'Add New Product',
        to: '/ecommerce/add-product'
      },
      {
        title: 'Checkout',
        to: '/ecommerce/checkout'
      }
    ]
  },
  { header: 'Forms & Tables' },
  {
    title: 'Form Validation',
    icon: 'custom-password-check',
    to: '/forms/formvalidation'
  },
  {
    title: 'Layouts',
    icon: 'custom-row-vertical',
    to: '/forms/layouts',
    children: [
      {
        title: 'Layouts',
        to: '/forms/layouts/layouts'
      },
      {
        title: 'Multi Columns',
        to: '/forms/layouts/multi-column-forms'
      },
      {
        title: 'Action Bar',
        to: '/forms/layouts/action-bar'
      },
      {
        title: 'Sticky Bar',
        to: '/forms/layouts/sticky-action-bar'
      }
    ]
  },
  {
    title: 'Plugins',
    icon: 'custom-cpu-charge',
    to: '/forms/radio',
    children: [
      {
        title: 'Mask',
        to: '/forms/plugins/mask'
      },
      {
        title: 'Clipboard',
        to: '/forms/plugins/clipboard'
      },
      {
        title: 'reCaptcha',
        to: '/auth/login1'
      },
      {
        title: 'Editor',
        to: '/forms/plugins/editor'
      }
    ]
  },
  {
    title: 'Tables',
    icon: 'custom-table',
    to: '/forms/tables',
    children: [
      {
        title: 'Basic Table',
        to: '/tables/tbl-basic'
      },
      {
        title: 'Dark Table',
        to: '/tables/tbl-dark'
      },
      {
        title: 'Density Table',
        to: '/tables/tbl-density'
      },
      {
        title: 'Height Table',
        to: '/tables/tbl-height'
      },
      {
        title: 'Fixed Header Table',
        to: '/tables/tbl-fixed-header'
      }
    ]
  },
  { header: 'Charts & map' },
  {
    title: 'Charts',
    icon: 'custom-graph',
    to: '/forms/radio',
    children: [
      {
        title: 'Apex Charts',
        to: '/forms/charts/apexchart'
      },
      {
        title: 'Org Charts',
        to: '/forms/charts/orgchart'
      }
    ]
  },
  { header: 'Utilities' },
  {
    title: 'Icons',
    icon: 'custom-mouse-circle',
    to: '/forms/radio',
    children: [
      {
        title: 'Iconsax',
        type: 'external',
        to: 'https://iconsax.io/'
      },
      {
        title: 'Tabler Icons',
        to: '/icons/tabler'
      },
      {
        title: 'Material Icons',
        to: '/icons/material'
      }
    ]
  },
  { header: 'Pages' },
  {
    title: 'Authentication',
    icon: 'custom-shield',
    to: '/auth',
    children: [
      {
        title: 'Authentication 1',
        to: '/auth',
        children: [
          {
            title: 'Login',
            to: '/auth/login1'
          },
          {
            title: 'Register',
            to: '/auth/register1'
          },
          {
            title: 'Forgot Password',
            to: '/auth/forgot-pwd1'
          },
          {
            title: 'Check Mail',
            to: '/auth/check-mail1'
          },
          {
            title: 'Reset Password',
            to: '/auth/reset-pwd1'
          },
          {
            title: 'Code Verification',
            to: '/auth/code-verify1'
          }
        ]
      },
      {
        title: 'Authentication 2',
        to: '/auth',
        children: [
          {
            title: 'Login',
            to: '/auth/login2'
          },
          {
            title: 'Register',
            to: '/auth/register2'
          },
          {
            title: 'Forgot Password',
            to: '/auth/forgot-pwd2'
          },
          {
            title: 'Check Mail',
            to: '/auth/check-mail2'
          },
          {
            title: 'Reset Password',
            to: '/auth/reset-pwd2'
          },
          {
            title: 'Code Verification',
            to: '/auth/code-verify2'
          }
        ]
      },
      {
        title: 'Authentication 3',
        to: '/auth/login3'
      }
    ]
  },
  {
    title: 'Maintenance',
    icon: 'custom-maintenance',
    to: '/maintenenace',
    children: [
      {
        title: 'Error 404',
        to: '/pages/error'
      },
      {
        title: 'Error 500',
        to: '/pages/error500'
      },
      {
        title: 'Coming soon',
        to: '/maintenenace',
        children: [
          {
            title: 'Coming soon 1',
            to: '/pages/comingsoon1'
          },
          {
            title: 'Coming soon 2',
            to: '/pages/comingsoon2'
          }
        ]
      },
      {
        title: 'Under Construction',
        to: '/maintenenace',
        children: [
          {
            title: 'Under Construction 1',
            to: '/pages/construction1'
          },
          {
            title: 'Under Construction 2',
            to: '/pages/construction2'
          }
        ]
      }
    ]
  },
  {
    title: 'Price',
    icon: 'custom-dollar-square',
    to: '/pages/pricing1',
    children: [
      {
        title: 'Price 1',
        to: '/pages/pricing1'
      },
      {
        title: 'Price 2',
        to: '/pages/pricing2'
      }
    ]
  },
  {
    title: 'Landing page',
    icon: 'custom-airplane',
    getURL: true,
    to: '',
    type: 'external'
  },
  {
    title: 'Contact Us',
    icon: 'custom-support',
    getURL: true,
    to: 'pages/contact-us',
    type: 'external'
  },
  {
    title: 'FAQs',
    icon: 'custom-flag',
    getURL: true,
    to: 'pages/faq',
    type: 'external'
  },
  {
    title: 'Privacy Policy',
    icon: 'custom-shield-tick',
    getURL: true,
    to: 'pages/privacy-policy',
    type: 'external'
  },
  { header: 'Others' },
  {
    title: 'Sample Page',
    icon: 'custom-sample',
    to: '/starter'
  },
  {
    title: 'Menu levels',
    icon: 'custom-level-1',
    to: '#',
    children: [
      {
        title: 'Level 1',
        to: ''
      },
      {
        title: 'Level 1',
        to: '',
        children: [
          {
            title: 'Level 2',
            to: ''
          },
          {
            title: 'Level 2',
            to: '/2.2level',
            children: [
              {
                title: 'Level 3',
                to: ''
              }
            ]
          }
        ]
      }
    ]
  },
  {
    title: 'Sub Caption Levels',
    icon: 'custom-level',
    subCaption: 'Caption Collapse',
    to: ''
  },
  {
    title: 'Disabled Menu',
    icon: 'custom-disabled',
    disabled: true,
    to: ''
  },
  {
    title: 'Oval Chip',
    icon: 'custom-info-circle',
    to: '',
    chip: 'Fire',
    chipColor: 'error',
    chipVariant: 'outlined'
  },
  {
    title: 'Documentation',
    icon: 'custom-support',
    to: 'https://phoenixcoded.gitbook.io/able-pro/v/vue/',
    type: 'external',
    chip: 'gitbook',
    chipColor: 'info',
    chipVariant: 'flat'
  },
  {
    title: 'Road Map',
    icon: 'custom-roadmap',
    to: 'https://phoenixcoded.gitbook.io/able-pro/v/vue/roadmap',
    type: 'external'
  }
];

export default sidebarItem;
