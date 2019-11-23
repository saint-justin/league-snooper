const region = (state='NA1', action) => {
    switch(action.type){
        case 'BR1':
            return 'BR1';
        case 'EUN1':
            return 'EUN1';
        case 'EUW1':
            return 'EUW1';
        case 'JP1':
            return 'JP1';
        case 'KR':
            return 'KR';
        case 'LA1':
            return 'LA1';
        case 'LA2':
            return 'LA2';
        case 'NA1':
            return 'NA1';
        case 'OC1':
            return 'OC1';
        case 'TR1':
            return 'TR1';
        case 'RU':
            return 'RU';
        default:
            console.log('ERROR: REGION NOT DEFINED');
            return 'NA1';
    }
}

export default region;