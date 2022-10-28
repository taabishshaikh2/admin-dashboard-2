import LocationOnIcon from '@mui/icons-material/LocationOn';
import ComputerIcon from '@mui/icons-material/Computer';
import Attendance from '../components/Attendance';
export const links = [
    // {
    //   title: 'My Dashboard',
    //   links: [
    //     {
    //       name: '',
    //     }
    //   ],
    //   icon: <ComputerIcon />
    // },
    {
      title: 'Andheri',
      links: [
        {
          name: "attendance",
        },{
          name: 'guards',
        },{
          name: 'issues',
        },{
          name: 'feedback',
        },
      ],
      icon: <LocationOnIcon /> ,
    }
    ,{
      title: 'Wadhva-A',
      links: [
        {
          name: 'attendance',
        },{
          name: 'guards',
        },{
          name: 'issues',
        },{
          name: 'feedback',
        },
      ],
      icon: <LocationOnIcon /> ,
    },{
      title: 'Wadhva-B',
      links: [
        {
          name: 'attendance',
        },{
          name: 'guards',
        },{
          name: 'issues',
        },{
          name: 'feedback',
        },
      ],
      icon: <LocationOnIcon /> ,
    },
]  