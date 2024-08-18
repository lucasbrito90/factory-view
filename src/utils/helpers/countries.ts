import US from '@/assets/images/flags/3x2/US.svg';
import CA from '@/assets/images/flags/3x2/CA.svg';
import MX from '@/assets/images/flags/3x2/MX.svg';

// imports south american flags
import AR from '@/assets/images/flags/3x2/AR.svg';
import BO from '@/assets/images/flags/3x2/BO.svg';
import BR from '@/assets/images/flags/3x2/BR.svg';
import CL from '@/assets/images/flags/3x2/CL.svg';
import CO from '@/assets/images/flags/3x2/CO.svg';
import EC from '@/assets/images/flags/3x2/EC.svg';
import PY from '@/assets/images/flags/3x2/PY.svg';
import PE from '@/assets/images/flags/3x2/PE.svg';
import UY from '@/assets/images/flags/3x2/UY.svg';
import VE from '@/assets/images/flags/3x2/VE.svg';

// impost european flags
import DE from '@/assets/images/flags/3x2/DE.svg';
import AD from '@/assets/images/flags/3x2/AD.svg';
import AT from '@/assets/images/flags/3x2/AT.svg';
import BE from '@/assets/images/flags/3x2/BE.svg';
import BA from '@/assets/images/flags/3x2/BA.svg';
import BG from '@/assets/images/flags/3x2/BG.svg';
import HR from '@/assets/images/flags/3x2/HR.svg';
import DK from '@/assets/images/flags/3x2/DK.svg';
import SK from '@/assets/images/flags/3x2/SK.svg';
import SI from '@/assets/images/flags/3x2/SI.svg';
import ES from '@/assets/images/flags/3x2/ES.svg';
import EE from '@/assets/images/flags/3x2/EE.svg';
import FI from '@/assets/images/flags/3x2/FI.svg';
import FR from '@/assets/images/flags/3x2/FR.svg';
import GR from '@/assets/images/flags/3x2/GR.svg';
import HU from '@/assets/images/flags/3x2/HU.svg';
import IE from '@/assets/images/flags/3x2/IE.svg';
import IS from '@/assets/images/flags/3x2/IS.svg';
import IT from '@/assets/images/flags/3x2/IT.svg';
import LV from '@/assets/images/flags/3x2/LV.svg';
import LI from '@/assets/images/flags/3x2/LI.svg';
import LT from '@/assets/images/flags/3x2/LT.svg';
import LU from '@/assets/images/flags/3x2/LU.svg';
import MT from '@/assets/images/flags/3x2/MT.svg';
import MD from '@/assets/images/flags/3x2/MD.svg';
import MC from '@/assets/images/flags/3x2/MC.svg';
import ME from '@/assets/images/flags/3x2/ME.svg';
import NL from '@/assets/images/flags/3x2/NL.svg';
import PL from '@/assets/images/flags/3x2/PL.svg';
import PT from '@/assets/images/flags/3x2/PT.svg';
import CZ from '@/assets/images/flags/3x2/CZ.svg';
import RO from '@/assets/images/flags/3x2/RO.svg';
import RU from '@/assets/images/flags/3x2/RU.svg';
import SM from '@/assets/images/flags/3x2/SM.svg';
import RS from '@/assets/images/flags/3x2/RS.svg';
import SE from '@/assets/images/flags/3x2/SE.svg';
import CH from '@/assets/images/flags/3x2/CH.svg';
import TR from '@/assets/images/flags/3x2/TR.svg';
import UA from '@/assets/images/flags/3x2/UA.svg';
import VA from '@/assets/images/flags/3x2/VA.svg';


export interface Country {
    name: string;
    avatar: string;
    area_code: string;
}

const countries: Country[]  = [

    // North America
    {
        name: 'United States',
        avatar: US,
        area_code: '+1',
    },
    {
        name: 'Canada',
        avatar: CA,
        area_code: '+1',
    },
    {
        name: 'Mexico',
        avatar: MX,
        area_code: '+52',
    },
    // South America
    {
        name: 'Argentina',
        avatar: AR,
        area_code: '+54',
    },
    {
        name: 'Bolivia',
        avatar: BO,
        area_code: '+591',
    },
    {
        name: 'Brazil',
        avatar: BR,
        area_code: '+55',
    },
    {
        name: 'Chile',
        avatar: CL,
        area_code: '+56',
    },
    {
        name: 'Colombia',
        avatar: CO,
        area_code: '+57',
    },
    {
        name: 'Ecuador',
        avatar: EC,
        area_code: '+593',
    },
    {
        name: 'Paraguay',
        avatar: PY,
        area_code: '+595',
    },
    {
        name: 'Peru',
        avatar: PE,
        area_code: '+51',
    },
    {
        name: 'Uruguay',
        avatar: UY,
        area_code: '+598',
    },
    {
        name: 'Venezuela',
        avatar: VE,
        area_code: '+58',
    },

    // Europe
    {
        name: 'Germany',
        avatar: DE,
        area_code: '+49',
    },
    {
        name: 'Andorra',
        avatar: AD,
        area_code: '+376',
    },
    {
        name: 'Austria',
        avatar: AT,
        area_code: '+43',
    },
    {
        name: 'Belgium',
        avatar: BE,
        area_code: '+32',
    },
    {
        name: 'Bosnia and Herzegovina',
        avatar: BA,
        area_code: '+387',
    },
    {
        name: 'Bulgaria',
        avatar: BG,
        area_code: '+359',
    },
    {
        name: 'Croatia',
        avatar: HR,
        area_code: '+385',
    },
    {
        name: 'Denmark',
        avatar: DK,
        area_code: '+45',
    },
    {
        name: 'Slovakia',
        avatar: SK,
        area_code: '+421',
    },
    {
        name: 'Slovenia',
        avatar: SI,
        area_code: '+386',
    },
    {
        name: 'Spain',
        avatar: ES,
        area_code: '+34',
    },
    {
        name: 'Estonia',
        avatar: EE,
        area_code: '+372',
    },
    {
        name: 'Finland',
        avatar: FI,
        area_code: '+358',
    },
    {
        name: 'France',
        avatar: FR,
        area_code: '+33',
    },
    {
        name: 'Greece',
        avatar: GR,
        area_code: '+30',
    },
    {
        name: 'Hungary',
        avatar: HU,
        area_code: '+36',
    },
    {
        name: 'Ireland',
        avatar: IE,
        area_code: '+353',
    },
    {
        name: 'Iceland',
        avatar: IS,
        area_code: '+354',
    },
    {
        name: 'Italy',
        avatar: IT,
        area_code: '+39',
    },
    {
        name: 'Latvia',
        avatar: LV,
        area_code: '+371',
    },
    {
        name: 'Liechtenstein',
        avatar: LI,
        area_code: '+423',
    },
    {
        name: 'Lithuania',
        avatar: LT,
        area_code: '+370',
    },
    {
        name: 'Luxembourg',
        avatar: LU,
        area_code: '+352',
    },
    {
        name: 'Malta',
        avatar: MT,
        area_code: '+356',
    },
    {
        name: 'Moldova',
        avatar: MD,
        area_code: '+373',
    },
    {
        name: 'Monaco',
        avatar: MC,
        area_code: '+377',
    },
    {
        name: 'Montenegro',
        avatar: ME,
        area_code: '+382',
    },
    {
        name: 'Netherlands',
        avatar: NL,
        area_code: '+31',
    },
    {
        name: 'Poland',
        avatar: PL,
        area_code: '+48',
    },
    {
        name: 'Portugal',
        avatar: PT,
        area_code: '+351',
    },
    {
        name: 'Czech Republic',
        avatar: CZ,
        area_code: '+420',
    },
    {
        name: 'Romania',
        avatar: RO,
        area_code: '+40',
    },
    {
        name: 'Russia',
        avatar: RU,
        area_code: '+7',
    },
    {
        name: 'San Marino',
        avatar: SM,
        area_code: '+378',
    },
    {
        name: 'Serbia',
        avatar: RS,
        area_code: '+381',
    },
    {
        name: 'Sweden',
        avatar: SE,
        area_code: '+46',
    },
    {
        name: 'Switzerland',
        avatar: CH,
        area_code: '+41',
    },
    {
        name: 'Turkey',
        avatar: TR,
        area_code: '+90',
    },
    {
        name: 'Ukraine',
        avatar: UA,
        area_code: '+380',
    },
    {
        name: 'Vatican City',
        avatar: VA,
        area_code: '+379',
    },

];

export default countries;