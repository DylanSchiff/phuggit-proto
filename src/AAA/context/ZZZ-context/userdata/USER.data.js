import ADMINS from './ADMIN.data'
import SUPPORT_ADMINS from './SUPPORT_ADMINS.data'
import LEAD_PEERS from './LEAD_PEER.data'
import PEERS from './PEER.data'

const USERS = [
    {
        role: 'admins',
        pool: ADMINS
    },
    {
        role: 'supports',
        pool: SUPPORT_ADMINS
    },
    {
        role: 'leads',
        pool: LEAD_PEERS
    },
    {
        role: 'peers',
        pool: PEERS
    },
];
export default USERS