import CONF from '../Config';

export default {
    isloading: false,
    contact: { no: null, name: null, tel: null, address: null, photo: null },
    contactlist: {
        pageno: 1,
        pagesize: CONF.PAGESIZE,
        totalcount: 0,
        contacts: []
    }
}