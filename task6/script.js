// example of element of adList
let adItem = {
    id: '0',
    description: 'Скидка на стулья - до 15%',
    createdAt: new Date('2021-03-15T23:00:00'),
    link: 'https://coolchairs.com',
    vendor: 'Chair Service',
    photoLink: 'https://images.app.goo.gl/dgAFyP2cEduzkJUP9',
    validUntil: new Date('2021-06-01T23:00:00'),
    discount: '15%',
    hashTags: ['furniture', 'chairs'],
    rating: 5.0,
    reviews :[]
}

// examples of filter
let filterConfigExampleTags = {
    hashTags : ['art'],
}

let filterConfigExampleVendor = {
    vendors : ['Steam'],
}


let adList = [
    {
        id: '1',
        description: 'Insomnia bar 10% sale',
        createdAt: new Date('2021-03-15T23:00:00'),
        link: 'http://besso.by/',
        vendor: 'Bar Insomnia',
        photoLink: 'https://vitrumgroup.ru/upload/iblock/c8d/c8d7bf5c2886338de035551eaf8c2a31.jpg',
        validUntil: new Date('2021-06-01T23:00:00'),
        discount: '10%',
        hashTags: ['alcohol', 'bar'],
        rating: 4.75,
        reviews:[]
    },

    {
        id: '2',
        description: 'AirShop sneaker store discounts up to 20%',
        createdAt: new Date('2011-03-19T23:00:00'),
        link: 'https://sneakerstore.by/',
        vendor: 'AIR SHOP',
        photoLink: 'https://sneakerstore.by/image/catalog/banners/ban/logonew.png',
        validUntil: new Date('2027-06-01T23:00:00'),
        discount: '20%',
        hashTags: ['sneakers', 'style','nike','adidas','puma'],
        rating: 4.7,
        reviews:[]
    },

    {
        id: '3',
        description: 'Steam sales up to 30% on best games of the month',
        createdAt: new Date('2019-12-10T00:00:00'),
        link: 'https://store.steampowered.com/',
        vendor: 'Valve',
        photoLink: 'https://store.akamai.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016',
        validUntil: new Date('2025-07-23T00:00:00'),
        discount: '30%',
        hashTags: ['videogames', 'pc'],
        rating: 5,
        reviews:[]
    },

    {
        id: '4',
        description: '7% on sushi at SushiChefArts',
        createdAt: new Date('2021-03-15T23:00:00'),
        link: 'https://sushichefarts.by/',
        vendor: 'SushiChefArts',
        photoLink: 'https://static7.depositphotos.com/1015060/708/i/950/depositphotos_7085336-stock-photo-sushi-party-tray.jpg',
        validUntil: new Date('2024-04-01T23:00:00'),
        discount: '9%',
        hashTags: ['sushi'],
        rating: 4.5,
        reviews:[]
    },

    {
        id: '5',
        description: '60% for visiting Waterpark Lebyazhiy',
        createdAt: new Date('2021-03-15T23:00:00'),
        link: 'https://waterpark.by/ru/',
        vendor: 'Waterpark Lebyazhiy',
        photoLink: 'https://www.wildernessresort.com/wp-content/uploads/2017/04/New-Frontier-Vertical-Slide.jpg',
        validUntil: new Date('2022-06-01T23:00:00'),
        discount: '60%',
        hashTags: ['waterpark','aquapark'],
        rating: 4.0,
        reviews:[]
    },

    {
        id: '6',
        description: 'Free army agenda',
        createdAt: new Date('2022-03-15T23:00:00'),
        link: 'https://mosk.minsk.gov.by/sluzhby-i-podrazdeleniya/voennyj-komissariat',
        vendor: 'Moskovskiy district military enlistment office',
        photoLink: 'https://cdnimg.rg.ru/img/content/193/85/10/RIAN_6262816.HR.ru_d_850.jpg',
        validUntil: new Date('2027-06-01T23:00:00'),
        discount: '100%',
        hashTags: ['army'],
        rating: 1.3,
        reviews:[]
    },

    {
        id: '7',
        description: 'Bowling with 50% sale',
        createdAt: new Date('2021-03-15T23:00:00'),
        link: 'http://www.nlo.by/?p=boul',
        vendor: 'NLO club',
        photoLink: 'https://images.app.goo.gl/dgAFyP2cEduzkJUP9',
        validUntil: new Date('2021-06-01T23:00:00'),
        discount: '50%',
        hashTags: ['bowling','family'],
        rating: 4,
        reviews:[]
    },

    {
        id: '8',
        description: 'Up to 30% on visting gym',
        createdAt: new Date('2021-03-15T23:00:00'),
        link: 'https://adrenalin-fitness.by/',
        vendor: 'Adrenalin fitness',
        photoLink: 'https://jurist.mobi/wp-content/uploads/2019/07/travma-v-fitnes-klube-6.jpg',
        validUntil: new Date('2021-06-01T23:00:00'),
        discount: '30%',
        hashTags: ['health','sport','lifestle','fitness'],
        rating: 4.3,
        reviews:[]
    },

    {
        id: '9',
        description: 'Makeup at BeautyKira with 10% sale',
        createdAt: new Date('2021-03-15T23:00:00'),
        link: 'https://vk.com/salon_kira',
        vendor: 'Beauty Kira',
        photoLink: 'https://sun9-2.userapi.com/impf/c830108/v830108193/b8afb/OaOAlz4PRzg.jpg?size=1280x1280&quality=96&sign=70e9bbb681266d7322989b3def18dc1d&type=album',
        validUntil: new Date('2041-06-01T23:00:00'),
        discount: '10%',
        hashTags: ['makeup','lashes','beauty','lifestyle','nails'],
        rating: 3.9,
        reviews:[]
    },

    {
        id: '10',
        description: 'Chair Sales up to 15%',
        createdAt: new Date('2021-03-15T23:00:00'),
        link: 'https://coolchairs.com',
        vendor: 'Chair Service',
        photoLink: 'https://images.app.goo.gl/dgAFyP2cEduzkJUP9',
        validUntil: new Date('2021-06-01T23:00:00'),
        discount: '15%',
        hashTags: ['furniture'],
        rating: 3.3,
        reviews:[]
    },

    {
        id: '11',
        description: 'Contact ZOO in Titan shop',
        createdAt: new Date('2019-03-15T23:00:00'),
        link: 'https://www.instagram.com/zootitan/?hl=ru',
        vendor: 'ZOO Titan',
        photoLink: 'https://scontent.fmsq2-1.fna.fbcdn.net/v/t1.0-9/56526695_2412507618768224_4900528453188583424_o.png?_nc_cat=107&ccb=1-3&_nc_sid=e3f864&_nc_eui2=AeGIdsbaCrIi0XCB7cNTuuFqzBdQ1O8z0GbMF1DU7zPQZukMyoFl9OoVIZr6_yy9wsojxpaMD5SiemfJKrslwebS&_nc_ohc=FDhzIY9CNVkAX9oc5B9&_nc_ht=scontent.fmsq2-1.fna&oh=5e992a61ac6c454d3e1a53f8d946c49c&oe=607CC2D9',
        validUntil: new Date('2031-06-01T23:00:00'),
        discount: '75%',
        hashTags: ['zoo', 'kids','family'],
        rating: 3.8,
        reviews:[]
    },

    {
        id: '12',
        description: '30% at BSU Store',
        createdAt: new Date('2021-03-15T23:00:00'),
        link: 'https://bsustore.by/',
        vendor: 'BSU Store',
        photoLink: 'https://bsustore.by/wp-content/themes/bsu_store/images/inlinebsuwhite.svg',
        validUntil: new Date('2021-06-01T23:00:00'),
        discount: '30%',
        hashTags: ['style', 'clothes'],
        rating: 4.3,
        reviews:[]
    },

    {
        id: '13',
        description: 'Theater with 40% discount',
        createdAt: new Date('2021-03-15T23:00:00'),
        link: 'https://kupalauski.by/',
        vendor: 'Kupalauski Theater',
        photoLink: 'https://kupalauski.by/local/templates/html_dev/images/logo.png',
        validUntil: new Date('2028-06-01T23:00:00'),
        discount: '40%',
        hashTags: ['art', 'theater'],
        rating: 4.1,
        reviews:[]
    },

    {
        id: '14',
        description: '30% on Github PRO',
        createdAt: new Date('2020-03-15T23:00:00'),
        link: 'https://github.com/',
        vendor: 'Github',
        photoLink: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
        validUntil: new Date('2033-06-01T23:00:00'),
        discount: '30%',
        hashTags: ['code', 'programming','vcs'],
        rating: 4.75,
        reviews:[]
    },

    {
        id: '15',
        description: 'Coursera 20% discount',
        createdAt: new Date('2021-03-15T23:00:00'),
        link: 'https://www.coursera.org/',
        vendor: 'Coursera',
        photoLink: 'https://play-lh.googleusercontent.com/qq5__wITsoCx2kUK8TqVW2-8UDRuxET9kCzPzAPHad8umXiHRF2N0tZKuLezd0tiBQg=s180-rw',
        validUntil: new Date('2021-06-01T23:00:00'),
        discount: '20%',
        hashTags: ['education'],
        rating: 4.4,
        reviews:[]
    },

    {
        id: '16',
        description: '17% sale on Spotify',
        createdAt: new Date('2021-03-15T23:00:00'),
        link: 'https://www.spotify.com/by-ru/free/?utm_source=by-ru_brand_contextual_text&utm_medium=paidsearch&utm_campaign=alwayson_cis_by_premiumbusiness_core_brand+contextual-desktop+text+exact+by-ru+google&gclid=Cj0KCQjw3duCBhCAARIsAJeFyPUjQPRLut43oDgnFceguN3n0d-Sz3pwR4N5iDWZ-BwKYW39VA9AWugaAhLoEALw_wcB&gclsrc=aw.ds',
        vendor: 'Spotify AB',
        photoLink: 'https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg',
        validUntil: new Date('2021-06-01T23:00:00'),
        discount: '17%',
        hashTags: ['music', 'art'],
        rating: 4.75,
        reviews:[]
    },

    {
        id: '17',
        description: 'Netflix 10% discount',
        createdAt: new Date('2021-03-15T23:00:00'),
        link: 'https://www.netflix.com/',
        vendor: 'Netflix',
        photoLink: 'https://logosandtypes.com/wp-content/uploads/2020/07/netflix.svg',
        validUntil: new Date('2021-06-01T23:00:00'),
        discount: '10%',
        hashTags: ['cinema', 'tv','art'],
        rating: 4.0,
        reviews:[]
    },

    {
        id: '18',
        description: 'Kinopoisk+ 30%',
        createdAt: new Date('2021-03-15T23:00:00'),
        link: 'https://www.kinopoisk.ru/',
        vendor: 'Yandex',
        photoLink: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Kinopoisk_logo_orange.png',
        validUntil: new Date('2021-06-01T23:00:00'),
        discount: '30%',
        hashTags: ['cinema', 'art'],
        rating: 4.75,
        reviews:[]
    },

    {
        id: '19',
        description: 'Adobe products with 23% discount',
        createdAt: new Date('2021-03-15T23:00:00'),
        link: 'https://www.adobe.com/',
        vendor: 'Adobe',
        photoLink: 'https://cdn.worldvectorlogo.com/logos/photoshop-cc-4.svg',
        validUntil: new Date('2021-06-01T23:00:00'),
        discount: '23%',
        hashTags: ['adobe', 'art','pc'],
        rating: 4.5,
        reviews:[]
    },

    {
        id: '20',
        description: 'Tilda - 50% off',
        createdAt: new Date('2021-02-25T00:00:00'),
        link: 'https://tilda.cc/ru/',
        vendor: 'Tilda',
        photoLink: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Tilda_Logo.png',
        hashTags: ['tilda', 'websites', 'program'],
        discount: '50%',
        validUntil: new Date('2030-01-01T00:00:00'),
        rating: 5,
        reviews: []
    },
] 

//                           FUNCTIONS

let getAd = (function(id){
    for (let i =0; i<adList.length;++i){
        if(adList[i].id == id){
            return adList[i];
        }
    }
    return {};
});

let validateAd = (function(ad){
    if (typeof(ad.id) == 'string' &&
    typeof(ad.description) == 'string' && ad.description.length < 200  &&
    ad.createdAt instanceof Date &&  
    typeof(ad.link) == 'string' &&
    typeof(ad.vendor) == 'string' && ad.vendor.length != 0 &&
    ad.hashTags instanceof Array &&
    typeof(ad.discount) == 'string' &&  ad.discount.length != 0 &&
    ad.validUntil instanceof Date){
        return true;
    }else{
        return false;
    }
});

let addAd = (function(ad){
    for (let i =0; i<adList.length;++i){
        if(adList[i].id === ad.id){
            return false;
        }
    }
    if(validateAd(ad)){
        adList.push(ad);
        return true;
    }else{
        return false;
    }
});

let removeAd = (function(id){
    for (let i = 0;i<adList.length;++i){
        if(adList[i].id === id){
            adList.splice(i,1);
            return true;
        }
    }
    return false;
});

let editAd = (function(id,changes){
    // checking not to edit fields id author createdAt
    let keys = Object.keys(changes);
    if(keys.includes('id') || keys.includes('author') || keys.includes('createdAt')){
        return false;
    }
    // finding index of element to change
    let ind;
    for(let i=0;i<=adList.length;++i){
        if(i == adList.length){
            return false;
        }else if(adList[i].id === id){
            ind = i;
            break;
        }
    }
    new_ad = adList[ind];
    for(let i=0;i<=adList.length;++i){
        new_ad[keys[i]] = changes[keys[i]];
    }
    if(validateAd(new_ad)){
        adList[ind] = new_ad;
        return true;
    }else{
        return false;
    }

});

let getAds = (function(skip = 0, top = 10, filterConfig = {}){
    let adsToShow = [];
    let key = Object.keys(filterConfig);

    if(key.length == 0){ //no filter used
        for(let i=skip;i<top+skip;++i){
            if(i > adList.length){
                break;
            }
            adsToShow.push(adList[i]);
        }
    } else if(key[0] == 'vendors'){//using vendors filter
        let vendors = filterConfig[[key[0]]];
        let skipped_ads = 0;
        let i = 0;
        while(skipped_ads < skip && i < adList.length){
            if(vendors.includes(adList[i].vendor)){
                skipped_ads++;
            }
            i++;
        }
        while(i < adList.length && adsToShow.length < top){
            if(vendors.includes(adList[i].vendor)){
                adsToShow.push(adList[i]);
            }
            i++;
        }
    }else if(key[0] == 'hashTags'){//using hashtags filter
        let hashTags = filterConfig[[key[0]]];
        let skipped_ads = 0;
        let i = 0;
        while(skipped_ads<skip && i < adList.length){
            for(let j = 0;j<adList[i].hashTags.length;++j){
                if(hashTags.includes(adList[i].hashTags[j])){
                    skipped_ads++;
                    break;
                }
            }
            i++;
        }
        while(i < adList.length && adsToShow.length < top){
            for(let j = 0;j<adList[i].hashTags.length;++j){
                if(hashTags.includes(adList[i].hashTags[j])){
                    adsToShow.push(adList[i]);
                    break;
                }
            }
            i++;
        }
    }
    return adsToShow;
});
//                           TESTS
console.log('getAds');
console.log(getAds()); 
console.log(getAds(14, 8))
console.log(getAds(0,10,{vendors : ['Steam', 'Netflix', 'Bar Insomnia']}));
console.log(getAds(0,10,{hashTags : ['art']}));

console.log('getAd');
console.log(getAd(147));
console.log(getAd(3));


console.log('validateAd');
console.log(validateAd({
    description: 'Скидка на стулья - до 15%',
    createdAt: new Date('2021-03-15T23:00:00'),
    link: 'https://coolchairs.com',
    vendor: 'Chair Service',
    photoLink: 'https://images.app.goo.gl/dgAFyP2cEduzkJUP9',
    validUntil: new Date('2021-06-01T23:00:00'),
    discount: '15%',
    hashTags: ['furniture', 'chairs'],
    rating: 5.0,
    reviews :[]
}));//false

console.log(validateAd({
    id: '1',
    description: 'Insomnia bar 10% sale',
    createdAt: new Date('2021-03-15T23:00:00'),
    link: 'http://besso.by/',
    vendor: 'Bar Insomnia',
    photoLink: 'https://vitrumgroup.ru/upload/iblock/c8d/c8d7bf5c2886338de035551eaf8c2a31.jpg',
    validUntil: new Date('2021-06-01T23:00:00'),
    discount: '10%',
    hashTags: ['alcohol', 'bar'],
    rating: 4.75,
    reviews:[]
}))//true

console.log('addAd');
console.log(addAd({
    id: '1',
    description: 'Insomnia bar 10% sale',
    createdAt: new Date('2021-03-15T23:00:00'),
    link: 'http://besso.by/',
    vendor: 'Bar Insomnia',
    photoLink: 'https://vitrumgroup.ru/upload/iblock/c8d/c8d7bf5c2886338de035551eaf8c2a31.jpg',
    validUntil: new Date('2021-06-01T23:00:00'),
    discount: '10%',
    hashTags: ['alcohol', 'bar'],
    rating: 4.75,
    reviews:[]
}));//false
console.log(addAd({
    id: '27',
    description: 'Insomnia bar 10% sale',
    createdAt: new Date('2021-03-15T23:00:00'),
    link: 'http://besso.by/',
    vendor: 'Bar Insomnia',
    photoLink: 'https://vitrumgroup.ru/upload/iblock/c8d/c8d7bf5c2886338de035551eaf8c2a31.jpg',
    validUntil: new Date('2021-06-01T23:00:00'),
    discount: '10%',
    hashTags: ['alcohol', 'bar'],
    rating: 4.75,
    reviews:[]
}));//true
console.log(getAd(27));

console.log('editAd');
console.log(editAd('1',{id:27}));//false(can't change id)
console.log(editAd('23',{description:'Some random description'}));//false (can't find element with index=23)
console.log(editAd('1',{description:'Some random description', link : 'random.org'}));//true
console.log(getAd(1));

console.log('removeAd');
console.log(removeAd('33'));//false
console.log(getAd('1'));//object with id == '1' still in adList
console.log(removeAd('1'));//true
console.log(getAd('1'));//no object with id == '1' in adList