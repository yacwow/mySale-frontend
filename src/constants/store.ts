export const DEFAULT_NAME = 'Umi Max111111';


// 放置url对应关系的地方,这个后端请求或者前端问题都不大 navigateline的数据，固定放在前端吧
export const navLinkUrl = {
    bestSeller: {
        url: "bestSeller",
        name: "売れ筋"
    },
    timeSeller: {
        url: "timeSeller",
        name: "タイムセール"
    },
    newProduct: {
        url: "dailyNew",
        name: "新入荷アイテム"
    },
    //所有对象的第一个是根路由 其他是子路由
    generalProduct1: {
        girlsLoveGeneral: {
            url: "generalSale?firstLevel=girlsLoveGeneral",
            name: "レディース",
        },
        girlsTops: {
            url: "generalSale?firstLevel=girlsLoveGeneral&secondLevel=girlsTops",
            name: "トップス",
            hot: true
        },
        girlsOuter: {
            url: "generalSale?firstLevel=girlsLoveGeneral&secondLevel=girlsOuter",
            name: "アウター",
            hot: true
        },
        girlsDress: {
            url: "generalSale?firstLevel=girlsLoveGeneral&secondLevel=girlsDress",
            name: "ワンピース",
            hot: true
        },
        girlsBottom: {
            url: "generalSale?firstLevel=girlsLoveGeneral&secondLevel=girlsBottom",
            name: "ボトムス",
        },
        girlsSetUp: {
            url: "generalSale?firstLevel=girlsLoveGeneral&secondLevel=girlsSetUp",
            name: "セットアップ",
        },
        girlsShoes: {
            url: "generalSale?firstLevel=girlsLoveGeneral&secondLevel=girlsShoes",
            name: "ジュース",
        },
        girlsGoods: {
            url: "generalSale?firstLevel=girlsLoveGeneral&secondLevel=girlsGoods",
            name: "小物",
        },
        menFashion: {
            url: "generalSale?firstLevel=girlsLoveGeneral&secondLevel=menFashion",
            name: "メンズファッション",
        },
    },
    top2: {
        topGeneral: {
            url: "generalSale?firstLevel=topGeneral",
            name: "トップス"
        },
        topShirt: {
            url: "generalSale?firstLevel=topGeneral&secondLevel=topBlouse",
            name: "シャツ・ブラウス",
            hot: true,
        },
        topTShirt: {
            url: "generalSale?firstLevel=topGeneral&secondLevel=topTShirt",
            name: "Ｔシャツ",
        },
        topHoodie: {
            url: "generalSale?firstLevel=topGeneral&secondLevel=topHoodie",
            name: "パーカー・スウェット",
        },
        topSweater: {
            url: "generalSale?firstLevel=topGeneral&secondLevel=topSweater",
            name: "セーター",
        },
        topNoSleeveTops: {
            url: "generalSale?firstLevel=topGeneral&secondLevel=topNoSleeveTops",
            name: "ノースリーブ・ベスト",
        },
    },
    dress: {
        dressGeneral: {
            url: "generalSale?firstLevel=dressGeneral",
            name: "ワンピース",
        },
        casualDress: {
            url: "generalSale?firstLevel=dressGeneral&secondLevel=casualDress",
            name: "カジュアルワンピース",
        },
        strapSkirt: {
            url: "generalSale?firstLevel=dressGeneral&secondLevel=strapSkirt",
            name: "サロペットスカート",
        },
        olDress: {
            url: "generalSale?firstLevel=dressGeneral&secondLevel=olDress",
            name: "通勤ワンピース",
        },
        shirtDress: {
            url: "generalSale?firstLevel=dressGeneral&secondLevel=shirtDress",
            name: "シャツワンピース",
        },
        knitDress: {
            url: "generalSale?firstLevel=dressGeneral&secondLevel=knitDress",
            name: "ニットワンピース",
        },
    },
    bottom: {
        bottomGeneral: {
            url: "generalSale?firstLevel=bottomGeneral",
            name: "ボトムス"
        },
        bottomCausal: {
            url: "generalSale?firstLevel=bottomGeneral&secondLevel=bottomCausal",
            name: "カジュアルパンツ"
        },
        bottomSkirt: {
            url: "generalSale?firstLevel=bottomGeneral&secondLevel=bottomSkirt",
            name: "スカート"
        },
        bottomDenim: {
            url: "generalSale?firstLevel=bottomGeneral&secondLevel=bottomDenim",
            name: "デニム"
        },
        bottomShortPants: {
            url: "generalSale?firstLevel=bottomGeneral&secondLevel=bottomShortPants",
            name: "ショートパンツ"
        },
        bottomAllInOne: {
            url: "generalSale?firstLevel=bottomGeneral&secondLevel=bottomAllInOne",
            name: "オールインワン"
        }
    },
    outer: {
        outerGeneral: {
            url: "generalSale?firstLevel=outerGeneral",
            name: "アウター"
        },
        outerCardigan: {
            url: "generalSale?firstLevel=outerGeneral&secondLevel=outerCardigan",
            name: "カーディガン"
        },
        outerSuit: {
            url: "generalSale?firstLevel=outerGeneral&secondLevel=outerSuit",
            name: "スーツ"
        },
        outerJacket: {
            url: "generalSale?firstLevel=outerGeneral&secondLevel=outerJacket",
            name: "ジャケット"
        },
        outerCoat: {
            url: "generalSale?firstLevel=outerGeneral&secondLevel=outerCoat",
            name: "コート"
        },
        outerDownCoat: {
            url: "generalSale?firstLevel=outerGeneral&secondLevel=outerDownCoat",
            name: "ダウンコート"
        },
    },
    setUp: {
        url: "generalSale?firstLevel=setUp",
        name: "セットアップ"
    },
    shoes: {
        generalShoes: {
            url: "generalSale?firstLevel=shoesGeneral",
            name: "シューズ"
        },
        pumpShoes: {
            url: "generalSale?firstLevel=shoesGeneral&secondLevel=pumpShoes",
            name: "パンプス"
        },
        flatShoes: {
            url: "generalSale?firstLevel=shoesGeneral&secondLevel=flatShoes",
            name: "フラットシューズ"
        },
        sandalShoes: {
            url: "generalSale?firstLevel=shoesGeneral&secondLevel=sandalShoes",
            name: "サンダル"
        },
        sneakerShoes: {
            url: "generalSale?firstLevel=shoesGeneral&secondLevel=sneakerShoes",
            name: "スニーカー"
        },
        bootShoes: {
            url: "generalSale?firstLevel=shoesGeneral&secondLevel=bootShoes",
            name: "ブーツ"
        },
    },
    inner: {
        generalInner: {
            url: "generalSale?firstLevel=generalInner",
            name: "下着"
        },
        swimwearInner: {
            url: "generalSale?firstLevel=generalInner&secondLevel=swimwearInner",
            name: "水着・ビキニ"
        },
        underwearInner: {
            url: "generalSale?firstLevel=generalInner&secondLevel=underwearInner",
            name: "ブラジャー＆ショートセット"
        },
        indoorWearInner: {
            url: "generalSale?firstLevel=generalInner&secondLevel=indoorWearInner",
            name: "ルームウェア・パジャマセット"
        },
        braInner: {
            url: "generalSale?firstLevel=generalInner&secondLevel=braInner",
            name: "ブラジャー"
        },
        shortsInner: {
            url: "generalSale?firstLevel=generalInner&secondLevel=shortsInner",
            name: "ショーツ"
        },
        accInner: {
            url: "generalSale?firstLevel=generalInner&secondLevel=accInner",
            name: "グッズ"
        },
    },
    goods: {
        generalGoods: {
            url: "generalSale?firstLevel=generalGoods",
            name: "小物"
        },
        bagGoods: {
            url: "generalSale?firstLevel=generalGoods&secondLevel=bagGoods",
            name: "バッグ"
        },
        accessoryGoods: {
            url: "generalSale?firstLevel=generalGoods&secondLevel=accessoryGoods",
            name: "アクセサリー"
        },
        hatGoods: {
            url: "generalSale?firstLevel=generalGoods&secondLevel=hatGoods",
            name: "帽子"
        },
        socksGoods: {
            url: "generalSale?firstLevel=generalGoods&secondLevel=socksGoods",
            name: "ソックス"
        },
        scarfGoods: {
            url: "generalSale?firstLevel=generalGoods&secondLevel=scarfGoods",
            name: "スカーフ"
        },
    }
};


//第一个轮播图，请求过来的数据
export const newsBanner = [
    {
        url: "/newProduct",
        imgSrc: "/img/banner1.jpg",
    },
    {
        url: "/generalProduct",
        imgSrc: "img/banner2.jpg",
    },
    {
        url: "/newProduct",
        imgSrc: "img/banner3.jpg",
    },
    {
        url: "/generalProduct",
        imgSrc: "img/banner1.jpg",
    }
]



//第二个轮播图,同理
export const discountBanner = [
    {
        url: "/newProduct",
        imgSrc: "img/secondBanner1.jpg",
    },
    {
        url: "/generalProduct",
        imgSrc: "img/secondBanner2.jpg",
    },
    {
        url: "/newProduct",
        imgSrc: "img/secondbanner3.jpg",
    },
    {
        url: "/generalProduct",
        imgSrc: "img/secondBanner4.jpg",
    }
]

//item 这个基本上就是固定的，那就先固定吧
export const itemRankingList = {
    topGeneral: {
        url: "topGeneral-1",
        name: "トップス"
    },
    outerGeneral: {
        url: "outerGeneral-1",
        name: "アウター"
    },
    dressGeneral: {
        url: "dressGeneral-1",
        name: "ワンピース"
    },
    bottomGeneral: {
        url: "bottomGeneral-1",
        name: "ボトムス"
    },
    setUp: {
        url: "setUp-1",
        name: "セットアップ"
    },
    generalShoes: {
        url: "generalShoes-1",
        name: "シューズ"
    },
    bagGoods: {
        url: "bagGoods-2",
        name: "バッグ"
    },
    indoorWearInner: {
        url: "indoorWearInner-2",
        name: "パジャマ"
    },
    generalGoods: {//这个就是小物
        url: "generalGoods-1",
        name: "ACC"
    },
    swimwearInner: {
        url: "swimwearInner-2",
        name: "水着・ビキニ"
    },
}


//BestSellerAndNewProduct 这里的url是指向某个选项，不是导航，不需要请求
export const BestSellerAndNewProduct = {
    newProduct: {
        url: "newProduct",
        name: "新作"
    },
    bestSeller: {
        url: "bestSeller",
        name: "売れ筋"
    }
}
// export const BestSellerAndNewProductDataList = {
//     newProduct: [
//         {
//             url: "/newProduct",
//             imgSrc: "/img/recommendPicture2.jpg",
//             discount: true,
//             detail: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 ',
//             price: '100',
//         },
//         {
//             url: "/newProduct",
//             imgSrc: "/img/recommendPicture2.jpg",
//             discount: true,
//             detail: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 ',
//             price: '100',
//         }, {
//             url: "/newProduct",
//             imgSrc: "/img/recommendPicture2.jpg",
//             discount: true,
//             detail: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 ',
//             price: '100',
//         }, {
//             url: "/newProduct",
//             imgSrc: "/img/recommendPicture2.jpg",
//             discount: true,
//             detail: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 ',
//             price: '100',
//         }, {
//             url: "/newProduct",
//             imgSrc: "/img/recommendPicture2.jpg",
//             discount: true,
//             detail: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 ',
//             price: '100',
//         }, {
//             url: "/newProduct",
//             imgSrc: "/img/recommendPicture2.jpg",
//             discount: true,
//             detail: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 ',
//             price: '100',
//         }, {
//             url: "/newProduct",
//             imgSrc: "/img/recommendPicture2.jpg",
//             discount: true,
//             detail: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 ',
//             price: '100',
//         }, {
//             url: "/newProduct",
//             imgSrc: "/img/recommendPicture2.jpg",
//             discount: true,
//             detail: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 ',
//             price: '100',
//         }],
//     bestSeller: [
//         {
//             url: "/newProduct",
//             imgSrc: "/img/recommendPicture1.jpg",
//             discount: true,
//             detail: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 ',
//             price: '100',
//         },
//         {
//             url: "/newProduct",
//             imgSrc: "/img/recommendPicture1.jpg",
//             discount: true,
//             detail: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 ',
//             price: '100',
//         }, {
//             url: "/newProduct",
//             imgSrc: "/img/recommendPicture1.jpg",
//             discount: true,
//             detail: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 ',
//             price: '100',
//         }, {
//             url: "/newProduct",
//             imgSrc: "/img/recommendPicture1.jpg",
//             discount: true,
//             detail: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 ',
//             price: '100',
//         }, {
//             url: "/newProduct",
//             imgSrc: "/img/recommendPicture1.jpg",
//             discount: true,
//             detail: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 ',
//             price: '100',
//         }, {
//             url: "/newProduct",
//             imgSrc: "/img/recommendPicture1.jpg",
//             discount: true,
//             detail: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 ',
//             price: '100',
//         }, {
//             url: "/newProduct",
//             imgSrc: "/img/recommendPicture1.jpg",
//             discount: true,
//             detail: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 ',
//             price: '100',
//         }, {
//             url: "/newProduct",
//             imgSrc: "/img/recommendPicture1.jpg",
//             discount: true,
//             detail: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 ',
//             price: '100',
//         },
//     ]
// }

//现在模拟到时候ajax到的
// export const PickUpPlaceHolder = [{ date: "2023.2.16", imgSrc: "/img/pickupPicture2.jpg", href: '', intro: '週間売れ筋ランキング' },
// { date: "2023.2.16", imgSrc: "/img/pickupPicture1.jpg", href: '', intro: '週間売れ筋ランキング' },
// { date: "2023.2.16", imgSrc: "/img/pickupPicture1.jpg", href: '', intro: '週間売れ筋ランキング' },
// { date: "2023.2.16", imgSrc: "/img/pickupPicture1.jpg", href: '', intro: '週間売れ筋ランキング' },
// { date: "2023.2.16", imgSrc: "/img/pickupPicture1.jpg", href: '', intro: '週間売れ筋ランキング' },
// { date: "2023.2.16", imgSrc: "/img/pickupPicture1.jpg", href: '', intro: '週間売れ筋ランキング' },
// { date: "2023.2.16", imgSrc: "/img/pickupPicture1.jpg", href: '', intro: '週間売れ筋ランキング' },
// { date: "2023.2.16", imgSrc: "/img/pickupPicture1.jpg", href: '', intro: '週間売れ筋ランキング' }];

//单个商品主页的展示列表,最后一个评论数会加上请求过来的正确评论数量 这个暂时固定的，就放这里
export const BodyHeaderList = ['商品詳細', '素材サイズ', '注意事項', '交換返品', 'レビュー']


//用于ShowBody的模拟数据，后期ajax
// export const ProductDetailSrc = [
//     '/img/recommendPicture1.jpg', '/img/recommendPicture2.jpg', '/img/recommendPicture3.jpg',
//     '/img/recommendPicture4.webp', '/img/recommendPicture5.webp', '/img/recommendPicture1.jpg', '/img/recommendPicture2.jpg', '/img/recommendPicture3.jpg',
//     '/img/recommendPicture4.webp', '/img/recommendPicture5.webp',
//     '/img/recommendPicture1.jpg', '/img/recommendPicture2.jpg', '/img/recommendPicture3.jpg',
//     '/img/recommendPicture4.webp', '/img/recommendPicture5.webp',
//     '/img/recommendPicture1.jpg', '/img/recommendPicture2.jpg', '/img/recommendPicture3.jpg',
//     '/img/recommendPicture4.webp', '/img/recommendPicture5.webp',
//     '/img/recommendPicture1.jpg', '/img/recommendPicture2.jpg', '/img/recommendPicture3.jpg',
//     '/img/recommendPicture4.webp', '/img/recommendPicture5.webp',
//     '/img/recommendPicture1.jpg', '/img/recommendPicture2.jpg', '/img/recommendPicture3.jpg',
//     '/img/recommendPicture4.webp', '/img/recommendPicture5.webp',
// ]

//用于showbody的尺寸表，后期ajax
// export const TableValue = [{ "id": "30263150", "name": "尺码", "JapName": "サイズ(cm)", "values": ["S", "M", "L"] },
// { "id": "30263151", "name": "上衣长", "JapName": "トップス丈", "values": ["60-64", "65-68", "65-68"] },
// { "id": "30263154", "name": "肩宽", "JapName": "肩幅", "values": ["38", "41", "41"] },
// { "id": "30263153", "name": "袖长", "JapName": "袖丈", "values": ["42", "44", "44"] },
// { "id": "30263152", "name": "胸围", "JapName": "バスト", "values": ["62", "65", "62"] },
// { "id": "30263155", "name": "下装裤长\\裙长", "JapName": "パンツ丈", "values": ["85", "88", "91.5"] },
// { "id": "30263156", "name": "下装腰围", "JapName": "ウエスト", "values": ["63-83", "68-85", "72-90"] },
// { "id": "30263157", "name": "臀围", "JapName": "ヒップ", "values": ["94", "105", "113"] }]

//用于showbody的材料表，后期ajax,name现在懒得翻译了
// export const ProductMaterial = [
//     { name: '図案', JapName: '図案', value: '無地' },
//     { name: '図案', JapName: '生地', value: 'その他' },
//     { name: '図案', JapName: '袖丈', value: '長袖' },
//     { name: '図案', JapName: 'スタイル', value: 'シンプル ファッション カジュアル スウィート エレガント' },
//     { name: '図案', JapName: 'スリーブ', value: '一般' },
//     { name: '図案', JapName: 'デコレーション', value: 'なし' },
// ]

//用于shobody的评论表
// export const ReviewContext = {
//     commentScore: 5,//后端传入，到时候数据搞一搞不低于3
//     comment: [
//         { name: '柏**美', date: '2023/03/01', message: '1息子の卒業式用に購入しました。149cm38kgでSサイズピッタリでした。お値段からするとかなり良い商品だと思います。買って良かったです。' },
//         { name: '柏**美', date: '2023/03/01', message: '2息子の卒業式用に購入しました。149cm38kgでSサイズピッタリでした。お値段からするとかなり良い商品だと思います。買って良かったです。' },
//         { name: '柏**美', date: '2023/03/01', message: '3息子の卒業式用に購入しました。149cm38kgでSサイズピッタリでした。お値段からするとかなり良い商品だと思います。買って良かったです。' },
//         { name: '柏**美', date: '2023/03/01', message: '4息子の卒業式用に購入しました。149cm38kgでSサイズピッタリでした。お値段からするとかなり良い商品だと思います。買って良かったです。' },
//         { name: '柏**美', date: '2023/03/01', message: '5息子の卒業式用に購入しました。149cm38kgでSサイズピッタリでした。お値段からするとかなり良い商品だと思います。買って良かったです。' },
//         { name: '柏**美', date: '2023/03/01', message: '6息子の卒業式用に購入しました。149cm38kgでSサイズピッタリでした。お値段からするとかなり良い商品だと思います。買って良かったです。' },
//         { name: '柏**美', date: '2023/03/01', message: '7息子の卒業式用に購入しました。149cm38kgでSサイズピッタリでした。お値段からするとかなり良い商品だと思います。買って良かったです。' },
//         { name: '柏**美', date: '2023/03/01', message: '1息子の卒業式用に購入しました。149cm38kgでSサイズピッタリでした。お値段からするとかなり良い商品だと思います。買って良かったです。' },
//         { name: '柏**美', date: '2023/03/01', message: '2息子の卒業式用に購入しました。149cm38kgでSサイズピッタリでした。お値段からするとかなり良い商品だと思います。買って良かったです。' },
//         { name: '柏**美', date: '2023/03/01', message: '3息子の卒業式用に購入しました。149cm38kgでSサイズピッタリでした。お値段からするとかなり良い商品だと思います。買って良かったです。' },
//         { name: '柏**美', date: '2023/03/01', message: '4息子の卒業式用に購入しました。149cm38kgでSサイズピッタリでした。お値段からするとかなり良い商品だと思います。買って良かったです。' },
//         { name: '柏**美', date: '2023/03/01', message: '5息子の卒業式用に購入しました。149cm38kgでSサイズピッタリでした。お値段からするとかなり良い商品だと思います。買って良かったです。' },
//         { name: '柏**美', date: '2023/03/01', message: '6息子の卒業式用に購入しました。149cm38kgでSサイズピッタリでした。お値段からするとかなり良い商品だと思います。買って良かったです。' },
//         { name: '柏**美', date: '2023/03/01', message: '7息子の卒業式用に購入しました。149cm38kgでSサイズピッタリでした。お値段からするとかなり良い商品だと思います。買って良かったです。' },
//         { name: '柏**美', date: '2023/03/01', message: '1息子の卒業式用に購入しました。149cm38kgでSサイズピッタリでした。お値段からするとかなり良い商品だと思います。買って良かったです。' },
//         { name: '柏**美', date: '2023/03/01', message: '2息子の卒業式用に購入しました。149cm38kgでSサイズピッタリでした。お値段からするとかなり良い商品だと思います。買って良かったです。' },
//         { name: '柏**美', date: '2023/03/01', message: '3息子の卒業式用に購入しました。149cm38kgでSサイズピッタリでした。お値段からするとかなり良い商品だと思います。買って良かったです。' },
//         { name: '柏**美', date: '2023/03/01', message: '4息子の卒業式用に購入しました。149cm38kgでSサイズピッタリでした。お値段からするとかなり良い商品だと思います。買って良かったです。' },
//         { name: '柏**美', date: '2023/03/01', message: '5息子の卒業式用に購入しました。149cm38kgでSサイズピッタリでした。お値段からするとかなり良い商品だと思います。買って良かったです。' },
//         { name: '柏**美', date: '2023/03/01', message: '6息子の卒業式用に購入しました。149cm38kgでSサイズピッタリでした。お値段からするとかなり良い商品だと思います。買って良かったです。' },
//         { name: '柏**美', date: '2023/03/01', message: '7息子の卒業式用に購入しました。149cm38kgでSサイズピッタリでした。お値段からするとかなり良い商品だと思います。買って良かったです。' },
//         { name: '柏**美', date: '2023/03/01', message: '1息子の卒業式用に購入しました。149cm38kgでSサイズピッタリでした。お値段からするとかなり良い商品だと思います。買って良かったです。' },
//         { name: '柏**美', date: '2023/03/01', message: '2息子の卒業式用に購入しました。149cm38kgでSサイズピッタリでした。お値段からするとかなり良い商品だと思います。買って良かったです。' },
//         { name: '柏**美', date: '2023/03/01', message: '3息子の卒業式用に購入しました。149cm38kgでSサイズピッタリでした。お値段からするとかなり良い商品だと思います。買って良かったです。' },
//         { name: '柏**美', date: '2023/03/01', message: '4息子の卒業式用に購入しました。149cm38kgでSサイズピッタリでした。お値段からするとかなり良い商品だと思います。買って良かったです。' },
//         { name: '柏**美', date: '2023/03/01', message: '5息子の卒業式用に購入しました。149cm38kgでSサイズピッタリでした。お値段からするとかなり良い商品だと思います。買って良かったです。' },
//         { name: '柏**美', date: '2023/03/01', message: '6息子の卒業式用に購入しました。149cm38kgでSサイズピッタリでした。お値段からするとかなり良い商品だと思います。買って良かったです。' },
//         { name: '柏**美', date: '2023/03/01', message: '7息子の卒業式用に購入しました。149cm38kgでSサイズピッタリでした。お値段からするとかなり良い商品だと思います。買って良かったです。' },
//         { name: '柏**美', date: '2023/03/01', message: '1息子の卒業式用に購入しました。149cm38kgでSサイズピッタリでした。お値段からするとかなり良い商品だと思います。買って良かったです。' },
//         { name: '柏**美', date: '2023/03/01', message: '2息子の卒業式用に購入しました。149cm38kgでSサイズピッタリでした。お値段からするとかなり良い商品だと思います。買って良かったです。' },
//         { name: '柏**美', date: '2023/03/01', message: '3息子の卒業式用に購入しました。149cm38kgでSサイズピッタリでした。お値段からするとかなり良い商品だと思います。買って良かったです。' },
//         { name: '柏**美', date: '2023/03/01', message: '4息子の卒業式用に購入しました。149cm38kgでSサイズピッタリでした。お値段からするとかなり良い商品だと思います。買って良かったです。' },
//         { name: '柏**美', date: '2023/03/01', message: '5息子の卒業式用に購入しました。149cm38kgでSサイズピッタリでした。お値段からするとかなり良い商品だと思います。買って良かったです。' },
//         { name: '柏**美', date: '2023/03/01', message: '6息子の卒業式用に購入しました。149cm38kgでSサイズピッタリでした。お値段からするとかなり良い商品だと思います。買って良かったです。' },
//         { name: '柏**美', date: '2023/03/01', message: '7息子の卒業式用に購入しました。149cm38kgでSサイズピッタリでした。お値段からするとかなり良い商品だと思います。買って良かったです。' },
//         { name: '柏**美', date: '2023/03/01', message: '1息子の卒業式用に購入しました。149cm38kgでSサイズピッタリでした。お値段からするとかなり良い商品だと思います。買って良かったです。' },
//         { name: '柏**美', date: '2023/03/01', message: '2息子の卒業式用に購入しました。149cm38kgでSサイズピッタリでした。お値段からするとかなり良い商品だと思います。買って良かったです。' },
//         { name: '柏**美', date: '2023/03/01', message: '3息子の卒業式用に購入しました。149cm38kgでSサイズピッタリでした。お値段からするとかなり良い商品だと思います。買って良かったです。' },
//         { name: '柏**美', date: '2023/03/01', message: '4息子の卒業式用に購入しました。149cm38kgでSサイズピッタリでした。お値段からするとかなり良い商品だと思います。買って良かったです。' },
//         { name: '柏**美', date: '2023/03/01', message: '5息子の卒業式用に購入しました。149cm38kgでSサイズピッタリでした。お値段からするとかなり良い商品だと思います。買って良かったです。' },
//         { name: '柏**美', date: '2023/03/01', message: '6息子の卒業式用に購入しました。149cm38kgでSサイズピッタリでした。お値段からするとかなり良い商品だと思います。買って良かったです。' },
//         { name: '柏**美', date: '2023/03/01', message: '7息子の卒業式用に購入しました。149cm38kgでSサイズピッタリでした。お値段からするとかなり良い商品だと思います。買って良かったです。' },
//         { name: '柏**美', date: '2023/03/01', message: '1息子の卒業式用に購入しました。149cm38kgでSサイズピッタリでした。お値段からするとかなり良い商品だと思います。買って良かったです。' },
//         { name: '柏**美', date: '2023/03/01', message: '2息子の卒業式用に購入しました。149cm38kgでSサイズピッタリでした。お値段からするとかなり良い商品だと思います。買って良かったです。' },
//         { name: '柏**美', date: '2023/03/01', message: '3息子の卒業式用に購入しました。149cm38kgでSサイズピッタリでした。お値段からするとかなり良い商品だと思います。買って良かったです。' },
//         { name: '柏**美', date: '2023/03/01', message: '4息子の卒業式用に購入しました。149cm38kgでSサイズピッタリでした。お値段からするとかなり良い商品だと思います。買って良かったです。' },
//         { name: '柏**美', date: '2023/03/01', message: '5息子の卒業式用に購入しました。149cm38kgでSサイズピッタリでした。お値段からするとかなり良い商品だと思います。買って良かったです。' },
//         { name: '柏**美', date: '2023/03/01', message: '6息子の卒業式用に購入しました。149cm38kgでSサイズピッタリでした。お値段からするとかなり良い商品だと思います。買って良かったです。' },
//         { name: '柏**美', date: '2023/03/01', message: '7息子の卒業式用に購入しました。149cm38kgでSサイズピッタリでした。お値段からするとかなり良い商品だと思います。買って良かったです。' },
//         { name: '柏**美', date: '2023/03/01', message: '1息子の卒業式用に購入しました。149cm38kgでSサイズピッタリでした。お値段からするとかなり良い商品だと思います。買って良かったです。' },
//         { name: '柏**美', date: '2023/03/01', message: '2息子の卒業式用に購入しました。149cm38kgでSサイズピッタリでした。お値段からするとかなり良い商品だと思います。買って良かったです。' },
//         { name: '柏**美', date: '2023/03/01', message: '3息子の卒業式用に購入しました。149cm38kgでSサイズピッタリでした。お値段からするとかなり良い商品だと思います。買って良かったです。' },
//         { name: '柏**美', date: '2023/03/01', message: '4息子の卒業式用に購入しました。149cm38kgでSサイズピッタリでした。お値段からするとかなり良い商品だと思います。買って良かったです。' },
//         { name: '柏**美', date: '2023/03/01', message: '5息子の卒業式用に購入しました。149cm38kgでSサイズピッタリでした。お値段からするとかなり良い商品だと思います。買って良かったです。' },
//         { name: '柏**美', date: '2023/03/01', message: '6息子の卒業式用に購入しました。149cm38kgでSサイズピッタリでした。お値段からするとかなり良い商品だと思います。買って良かったです。' },
//         { name: '柏**美', date: '2023/03/01', message: '7息子の卒業式用に購入しました。149cm38kgでSサイズピッタリでした。お値段からするとかなり良い商品だと思います。買って良かったです。' },
//     ]
// }

//用于showbody左边的那一整列图片
// export const LeftSidePromotionLineList = [
//     { href: '/home', imgSrc: '/img/recommendPicture1.jpg', newPrice: '2,576', originPrice: '4,446', bigDiscount: true, discount: true },
//     { href: '/home', imgSrc: '/img/recommendPicture2.jpg', newPrice: '2,576', originPrice: '4,446', discount: true },
//     { href: '/home', imgSrc: '/img/recommendPicture3.jpg', newPrice: '2,576', originPrice: '4,446' },
//     { href: '/home', imgSrc: '/img/recommendPicture4.webp', newPrice: '2,576', originPrice: '4,446', bigDiscount: true },
//     { href: '/home', imgSrc: '/img/recommendPicture5.webp', newPrice: '2,576', originPrice: '4,446', discount: true },
//     { href: '/home', imgSrc: '/img/recommendPicture1.jpg', newPrice: '2,576', originPrice: '4,446', bigDiscount: true, discount: true },
//     { href: '/home', imgSrc: '/img/recommendPicture2.jpg', newPrice: '2,576', originPrice: '4,446', discount: true },
//     { href: '/home', imgSrc: '/img/recommendPicture3.jpg', newPrice: '2,576', originPrice: '4,446' },
//     { href: '/home', imgSrc: '/img/recommendPicture4.webp', newPrice: '2,576', originPrice: '4,446', bigDiscount: true },
//     { href: '/home', imgSrc: '/img/recommendPicture5.webp', newPrice: '2,576', originPrice: '4,446', discount: true },
//     { href: '/home', imgSrc: '/img/recommendPicture1.jpg', newPrice: '2,576', originPrice: '4,446', bigDiscount: true, discount: true },
//     { href: '/home', imgSrc: '/img/recommendPicture2.jpg', newPrice: '2,576', originPrice: '4,446', discount: true },
//     { href: '/home', imgSrc: '/img/recommendPicture3.jpg', newPrice: '2,576', originPrice: '4,446' },
//     { href: '/home', imgSrc: '/img/recommendPicture4.webp', newPrice: '2,576', originPrice: '4,446', bigDiscount: true },
//     { href: '/home', imgSrc: '/img/recommendPicture5.webp', newPrice: '2,576', originPrice: '4,446', discount: true },
//     { href: '/home', imgSrc: '/img/recommendPicture1.jpg', newPrice: '2,576', originPrice: '4,446', bigDiscount: true, discount: true },
//     { href: '/home', imgSrc: '/img/recommendPicture2.jpg', newPrice: '2,576', originPrice: '4,446', discount: true },
//     { href: '/home', imgSrc: '/img/recommendPicture3.jpg', newPrice: '2,576', originPrice: '4,446' },
//     { href: '/home', imgSrc: '/img/recommendPicture4.webp', newPrice: '2,576', originPrice: '4,446', bigDiscount: true },
//     { href: '/home', imgSrc: '/img/recommendPicture5.webp', newPrice: '2,576', originPrice: '4,446', discount: true },
//     { href: '/home', imgSrc: '/img/recommendPicture1.jpg', newPrice: '2,576', originPrice: '4,446', bigDiscount: true, discount: true },
//     { href: '/home', imgSrc: '/img/recommendPicture2.jpg', newPrice: '2,576', originPrice: '4,446', discount: true },
//     { href: '/home', imgSrc: '/img/recommendPicture3.jpg', newPrice: '2,576', originPrice: '4,446' },
//     { href: '/home', imgSrc: '/img/recommendPicture4.webp', newPrice: '2,576', originPrice: '4,446', bigDiscount: true },
//     { href: '/home', imgSrc: '/img/recommendPicture5.webp', newPrice: '2,576', originPrice: '4,446', discount: true },
//     { href: '/home', imgSrc: '/img/recommendPicture1.jpg', newPrice: '2,576', originPrice: '4,446', bigDiscount: true, discount: true },
//     { href: '/home', imgSrc: '/img/recommendPicture2.jpg', newPrice: '2,576', originPrice: '4,446', discount: true },
//     { href: '/home', imgSrc: '/img/recommendPicture3.jpg', newPrice: '2,576', originPrice: '4,446' },
//     { href: '/home', imgSrc: '/img/recommendPicture4.webp', newPrice: '2,576', originPrice: '4,446', bigDiscount: true },
//     { href: '/home', imgSrc: '/img/recommendPicture5.webp', newPrice: '2,576', originPrice: '4,446', discount: true },
//     { href: '/home', imgSrc: '/img/recommendPicture1.jpg', newPrice: '2,576', originPrice: '4,446', bigDiscount: true, discount: true },
//     { href: '/home', imgSrc: '/img/recommendPicture2.jpg', newPrice: '2,576', originPrice: '4,446', discount: true },
//     { href: '/home', imgSrc: '/img/recommendPicture3.jpg', newPrice: '2,576', originPrice: '4,446' },
//     { href: '/home', imgSrc: '/img/recommendPicture4.webp', newPrice: '2,576', originPrice: '4,446', bigDiscount: true },
//     { href: '/home', imgSrc: '/img/recommendPicture5.webp', newPrice: '2,576', originPrice: '4,446', discount: true },
// ]



// //bestseller 的weekpromotionProductBanner用的数据，后期ajax请求
// //第一个轮播图，图片和链接的地址应该是后端请求过来，这样比较好操作,rank不用 过来的时候就已经排序好了
// export const WeekPromotionProductBanner = [
//     {
//         url: "/newProduct",
//         rank: 1,
//         discount: true,
//         price: '3,333',
//         imgSrc: "/img/recommendPicture1.jpg",
//     },
//     {
//         url: "/newProduct",
//         rank: 1,
//         discount: true,
//         price: '3,333',
//         imgSrc: "/img/recommendPicture1.jpg",
//     },
//     {
//         url: "/newProduct",
//         rank: 1,
//         discount: true,
//         price: '3,333',
//         imgSrc: "/img/recommendPicture1.jpg",
//     },
//     {
//         url: "/newProduct",
//         rank: 1,
//         discount: true,
//         price: '3,333',
//         imgSrc: "/img/recommendPicture1.jpg",
//     },
//     {
//         url: "/newProduct",
//         rank: 1,
//         discount: true,
//         price: '3,333',
//         imgSrc: "/img/recommendPicture1.jpg",
//     },
//     {
//         url: "/newProduct",
//         rank: 1,
//         discount: true,
//         price: '3,333',
//         imgSrc: "/img/recommendPicture1.jpg",
//     },
//     {
//         url: "/newProduct",
//         rank: 1,
//         discount: true,
//         price: '3,333',
//         imgSrc: "/img/recommendPicture1.jpg",
//     },
//     {
//         url: "/newProduct",
//         rank: 1,
//         discount: true,
//         price: '3,333',
//         imgSrc: "/img/recommendPicture1.jpg",
//     },
//     {
//         url: "/newProduct",
//         rank: 1,
//         discount: true,
//         price: '3,333',
//         imgSrc: "/img/recommendPicture1.jpg",
//     },
//     {
//         url: "/newProduct",
//         rank: 1,
//         discount: true,
//         price: '3,333',
//         imgSrc: "/img/recommendPicture1.jpg",
//     },
//     {
//         url: "/newProduct",
//         rank: 1,
//         discount: true,
//         price: '3,333',
//         imgSrc: "/img/recommendPicture1.jpg",
//     },
//     {
//         url: "/newProduct",
//         rank: 1,
//         discount: true,
//         price: '3,333',
//         imgSrc: "/img/recommendPicture1.jpg",
//     },
//     {
//         url: "/newProduct",
//         rank: 1,
//         discount: true,
//         price: '3,333',
//         imgSrc: "/img/recommendPicture1.jpg",
//     },
//     {
//         url: "/newProduct",
//         rank: 1,
//         discount: true,
//         price: '3,333',
//         imgSrc: "/img/recommendPicture1.jpg",
//     },
//     {
//         url: "/newProduct",
//         rank: 1,
//         discount: true,
//         price: '3,333',
//         imgSrc: "/img/recommendPicture1.jpg",
//     },
//     {
//         url: "/newProduct",
//         rank: 1,
//         discount: true,
//         price: '3,333',
//         imgSrc: "/img/recommendPicture1.jpg",
//     },
//     {
//         url: "/newProduct",
//         rank: 1,
//         discount: true,
//         price: '3,333',
//         imgSrc: "/img/recommendPicture1.jpg",
//     },
//     {
//         url: "/newProduct",
//         rank: 1,
//         discount: true,
//         price: '3,333',
//         imgSrc: "/img/recommendPicture1.jpg",
//     },
//     {
//         url: "/newProduct",
//         rank: 1,
//         discount: true,
//         price: '3,333',
//         imgSrc: "/img/recommendPicture1.jpg",
//     },
//     {
//         url: "/newProduct",
//         rank: 1,
//         discount: true,
//         price: '3,333',
//         imgSrc: "/img/recommendPicture1.jpg",
//     },
//     {
//         url: "/newProduct",
//         rank: 1,
//         discount: true,
//         price: '3,333',
//         imgSrc: "/img/recommendPicture1.jpg",
//     },
//     {
//         url: "/newProduct",
//         rank: 1,
//         discount: true,
//         price: '3,333',
//         imgSrc: "/img/recommendPicture1.jpg",
//     },
//     {
//         url: "/newProduct",
//         rank: 1,
//         discount: true,
//         price: '3,333',
//         imgSrc: "/img/recommendPicture1.jpg",
//     },
//     {
//         url: "/newProduct",
//         rank: 1,
//         discount: true,
//         price: '3,333',
//         imgSrc: "/img/recommendPicture1.jpg",
//     },
//     {
//         url: "/newProduct",
//         rank: 1,
//         discount: true,
//         price: '3,333',
//         imgSrc: "/img/recommendPicture1.jpg",
//     },
// ]


//bestseller的 must buy集合

//BestSellerAndNewProduct 索引栏，先放着不变，不大更新不改
//


//
export const MustBuy = {
    bestSeller: {
        url: "bestSeller",
        name: "ヒット商品"
    },
    generalGoods: {
        url: "generalGoods",
        name: "人気コーデ"
    },
    topGeneral: {
        url: "topGeneral",
        name: "好評トップス"
    },
    dressGeneral: {
        url: "dressGeneral",
        name: "高人気ワンピース"
    }
}

// //must buy下面的数据，后期ajax  注意传入的是四的倍数，因为样式搞不定
// export const MustBuyProductList = {
//     topSellingProduct: [{
//         href: '', imgSrc: '/img/recommendPicture1.jpg', discount: true, new: true, title: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 結婚式 フォーマル 30代 40代 50代 パンツスーツ セットアップ'
//         , price: '4,399'
//     }, {
//         href: '', imgSrc: '/img/recommendPicture1.jpg', discount: true, new: true, title: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 結婚式 フォーマル 30代 40代 50代 パンツスーツ セットアップ'
//         , price: '4,399'
//     }, {
//         href: '', imgSrc: '/img/recommendPicture1.jpg', discount: true, new: true, title: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 結婚式 フォーマル 30代 40代 50代 パンツスーツ セットアップ'
//         , price: '4,399'
//     }, {
//         href: '', imgSrc: '/img/recommendPicture1.jpg', discount: true, new: true, title: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 結婚式 フォーマル 30代 40代 50代 パンツスーツ セットアップ'
//         , price: '4,399'
//     }, {
//         href: '', imgSrc: '/img/recommendPicture1.jpg', discount: true, new: true, title: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 結婚式 フォーマル 30代 40代 50代 パンツスーツ セットアップ'
//         , price: '4,399'
//     }, {
//         href: '', imgSrc: '/img/recommendPicture1.jpg', discount: true, new: true, title: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 結婚式 フォーマル 30代 40代 50代 パンツスーツ セットアップ'
//         , price: '4,399'
//     }, {
//         href: '', imgSrc: '/img/recommendPicture1.jpg', discount: true, new: true, title: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 結婚式 フォーマル 30代 40代 50代 パンツスーツ セットアップ'
//         , price: '4,399'
//     }, {
//         href: '', imgSrc: '/img/recommendPicture1.jpg', discount: true, new: true, title: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 結婚式 フォーマル 30代 40代 50代 パンツスーツ セットアップ'
//         , price: '4,399'
//     }, {
//         href: '', imgSrc: '/img/recommendPicture1.jpg', discount: true, new: true, title: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 結婚式 フォーマル 30代 40代 50代 パンツスーツ セットアップ'
//         , price: '4,399'
//     }, {
//         href: '', imgSrc: '/img/recommendPicture1.jpg', discount: true, new: true, title: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 結婚式 フォーマル 30代 40代 50代 パンツスーツ セットアップ'
//         , price: '4,399'
//     }, {
//         href: '', imgSrc: '/img/recommendPicture1.jpg', discount: true, new: true, title: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 結婚式 フォーマル 30代 40代 50代 パンツスーツ セットアップ'
//         , price: '4,399'
//     }, {
//         href: '', imgSrc: '/img/recommendPicture1.jpg', discount: true, new: true, title: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 結婚式 フォーマル 30代 40代 50代 パンツスーツ セットアップ'
//         , price: '4,399'
//     }, {
//         href: '', imgSrc: '/img/recommendPicture1.jpg', discount: true, new: true, title: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 結婚式 フォーマル 30代 40代 50代 パンツスーツ セットアップ'
//         , price: '4,399'
//     }, {
//         href: '', imgSrc: '/img/recommendPicture1.jpg', discount: true, new: true, title: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 結婚式 フォーマル 30代 40代 50代 パンツスーツ セットアップ'
//         , price: '4,399'
//     },], outfit: [{
//         href: '', imgSrc: '/img/recommendPicture4.webp', discount: true, new: true, title: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 結婚式 フォーマル 30代 40代 50代 パンツスーツ セットアップ'
//         , price: '4,399'
//     }, {
//         href: '', imgSrc: '/img/recommendPicture1.jpg', discount: true, new: true, title: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 結婚式 フォーマル 30代 40代 50代 パンツスーツ セットアップ'
//         , price: '4,399'
//     }, {
//         href: '', imgSrc: '/img/recommendPicture1.jpg', discount: true, new: true, title: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 結婚式 フォーマル 30代 40代 50代 パンツスーツ セットアップ'
//         , price: '4,399'
//     }, {
//         href: '', imgSrc: '/img/recommendPicture1.jpg', discount: true, new: true, title: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 結婚式 フォーマル 30代 40代 50代 パンツスーツ セットアップ'
//         , price: '4,399'
//     }, {
//         href: '', imgSrc: '/img/recommendPicture1.jpg', discount: true, new: true, title: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 結婚式 フォーマル 30代 40代 50代 パンツスーツ セットアップ'
//         , price: '4,399'
//     }, {
//         href: '', imgSrc: '/img/recommendPicture1.jpg', discount: true, new: true, title: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 結婚式 フォーマル 30代 40代 50代 パンツスーツ セットアップ'
//         , price: '4,399'
//     }, {
//         href: '', imgSrc: '/img/recommendPicture1.jpg', discount: true, new: true, title: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 結婚式 フォーマル 30代 40代 50代 パンツスーツ セットアップ'
//         , price: '4,399'
//     }, {
//         href: '', imgSrc: '/img/recommendPicture1.jpg', discount: true, new: true, title: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 結婚式 フォーマル 30代 40代 50代 パンツスーツ セットアップ'
//         , price: '4,399'
//     }, {
//         href: '', imgSrc: '/img/recommendPicture1.jpg', discount: true, new: true, title: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 結婚式 フォーマル 30代 40代 50代 パンツスーツ セットアップ'
//         , price: '4,399'
//     }, {
//         href: '', imgSrc: '/img/recommendPicture1.jpg', discount: true, new: true, title: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 結婚式 フォーマル 30代 40代 50代 パンツスーツ セットアップ'
//         , price: '4,399'
//     }, {
//         href: '', imgSrc: '/img/recommendPicture1.jpg', discount: true, new: true, title: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 結婚式 フォーマル 30代 40代 50代 パンツスーツ セットアップ'
//         , price: '4,399'
//     }, {
//         href: '', imgSrc: '/img/recommendPicture1.jpg', discount: true, new: true, title: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 結婚式 フォーマル 30代 40代 50代 パンツスーツ セットアップ'
//         , price: '4,399'
//     }, {
//         href: '', imgSrc: '/img/recommendPicture1.jpg', discount: true, new: true, title: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 結婚式 フォーマル 30代 40代 50代 パンツスーツ セットアップ'
//         , price: '4,399'
//     }, {
//         href: '', imgSrc: '/img/recommendPicture1.jpg', discount: true, new: true, title: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 結婚式 フォーマル 30代 40代 50代 パンツスーツ セットアップ'
//         , price: '4,399'
//     }, {
//         href: '', imgSrc: '/img/recommendPicture1.jpg', discount: true, new: true, title: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 結婚式 フォーマル 30代 40代 50代 パンツスーツ セットアップ'
//         , price: '4,399'
//     }, {
//         href: '', imgSrc: '/img/recommendPicture1.jpg', discount: true, new: true, title: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 結婚式 フォーマル 30代 40代 50代 パンツスーツ セットアップ'
//         , price: '4,399'
//     },], topSweater: [{
//         href: '', imgSrc: '/img/recommendPicture2.jpg', discount: true, new: true, title: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 結婚式 フォーマル 30代 40代 50代 パンツスーツ セットアップ'
//         , price: '4,399'
//     }, {
//         href: '', imgSrc: '/img/recommendPicture1.jpg', discount: true, new: true, title: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 結婚式 フォーマル 30代 40代 50代 パンツスーツ セットアップ'
//         , price: '4,399'
//     }, {
//         href: '', imgSrc: '/img/recommendPicture1.jpg', discount: true, new: true, title: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 結婚式 フォーマル 30代 40代 50代 パンツスーツ セットアップ'
//         , price: '4,399'
//     }, {
//         href: '', imgSrc: '/img/recommendPicture1.jpg', discount: true, new: true, title: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 結婚式 フォーマル 30代 40代 50代 パンツスーツ セットアップ'
//         , price: '4,399'
//     }, {
//         href: '', imgSrc: '/img/recommendPicture1.jpg', discount: true, new: true, title: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 結婚式 フォーマル 30代 40代 50代 パンツスーツ セットアップ'
//         , price: '4,399'
//     }, {
//         href: '', imgSrc: '/img/recommendPicture1.jpg', discount: true, new: true, title: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 結婚式 フォーマル 30代 40代 50代 パンツスーツ セットアップ'
//         , price: '4,399'
//     }, {
//         href: '', imgSrc: '/img/recommendPicture1.jpg', discount: true, new: true, title: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 結婚式 フォーマル 30代 40代 50代 パンツスーツ セットアップ'
//         , price: '4,399'
//     }, {
//         href: '', imgSrc: '/img/recommendPicture1.jpg', discount: true, new: true, title: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 結婚式 フォーマル 30代 40代 50代 パンツスーツ セットアップ'
//         , price: '4,399'
//     }, {
//         href: '', imgSrc: '/img/recommendPicture1.jpg', discount: true, new: true, title: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 結婚式 フォーマル 30代 40代 50代 パンツスーツ セットアップ'
//         , price: '4,399'
//     }, {
//         href: '', imgSrc: '/img/recommendPicture1.jpg', discount: true, new: true, title: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 結婚式 フォーマル 30代 40代 50代 パンツスーツ セットアップ'
//         , price: '4,399'
//     }, {
//         href: '', imgSrc: '/img/recommendPicture1.jpg', discount: true, new: true, title: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 結婚式 フォーマル 30代 40代 50代 パンツスーツ セットアップ'
//         , price: '4,399'
//     }, {
//         href: '', imgSrc: '/img/recommendPicture1.jpg', discount: true, new: true, title: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 結婚式 フォーマル 30代 40代 50代 パンツスーツ セットアップ'
//         , price: '4,399'
//     }, {
//         href: '', imgSrc: '/img/recommendPicture1.jpg', discount: true, new: true, title: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 結婚式 フォーマル 30代 40代 50代 パンツスーツ セットアップ'
//         , price: '4,399'
//     }, {
//         href: '', imgSrc: '/img/recommendPicture1.jpg', discount: true, new: true, title: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 結婚式 フォーマル 30代 40代 50代 パンツスーツ セットアップ'
//         , price: '4,399'
//     },], welcomeCloth: [{
//         href: '', imgSrc: '/img/recommendPicture3.jpg', discount: true, new: true, title: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 結婚式 フォーマル 30代 40代 50代 パンツスーツ セットアップ'
//         , price: '4,399'
//     }, {
//         href: '', imgSrc: '/img/recommendPicture1.jpg', discount: true, new: true, title: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 結婚式 フォーマル 30代 40代 50代 パンツスーツ セットアップ'
//         , price: '4,399'
//     }, {
//         href: '', imgSrc: '/img/recommendPicture1.jpg', discount: true, new: true, title: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 結婚式 フォーマル 30代 40代 50代 パンツスーツ セットアップ'
//         , price: '4,399'
//     }, {
//         href: '', imgSrc: '/img/recommendPicture1.jpg', discount: true, new: true, title: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 結婚式 フォーマル 30代 40代 50代 パンツスーツ セットアップ'
//         , price: '4,399'
//     }, {
//         href: '', imgSrc: '/img/recommendPicture1.jpg', discount: true, new: true, title: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 結婚式 フォーマル 30代 40代 50代 パンツスーツ セットアップ'
//         , price: '4,399'
//     }, {
//         href: '', imgSrc: '/img/recommendPicture1.jpg', discount: true, new: true, title: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 結婚式 フォーマル 30代 40代 50代 パンツスーツ セットアップ'
//         , price: '4,399'
//     }, {
//         href: '', imgSrc: '/img/recommendPicture1.jpg', discount: true, new: true, title: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 結婚式 フォーマル 30代 40代 50代 パンツスーツ セットアップ'
//         , price: '4,399'
//     }, {
//         href: '', imgSrc: '/img/recommendPicture1.jpg', discount: true, new: true, title: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 結婚式 フォーマル 30代 40代 50代 パンツスーツ セットアップ'
//         , price: '4,399'
//     }, {
//         href: '', imgSrc: '/img/recommendPicture1.jpg', discount: true, new: true, title: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 結婚式 フォーマル 30代 40代 50代 パンツスーツ セットアップ'
//         , price: '4,399'
//     }, {
//         href: '', imgSrc: '/img/recommendPicture1.jpg', discount: true, new: true, title: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 結婚式 フォーマル 30代 40代 50代 パンツスーツ セットアップ'
//         , price: '4,399'
//     }, {
//         href: '', imgSrc: '/img/recommendPicture1.jpg', discount: true, new: true, title: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 結婚式 フォーマル 30代 40代 50代 パンツスーツ セットアップ'
//         , price: '4,399'
//     }, {
//         href: '', imgSrc: '/img/recommendPicture1.jpg', discount: true, new: true, title: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 結婚式 フォーマル 30代 40代 50代 パンツスーツ セットアップ'
//         , price: '4,399'
//     }, {
//         href: '', imgSrc: '/img/recommendPicture1.jpg', discount: true, new: true, title: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 結婚式 フォーマル 30代 40代 50代 パンツスーツ セットアップ'
//         , price: '4,399'
//     }, {
//         href: '', imgSrc: '/img/recommendPicture1.jpg', discount: true, new: true, title: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 結婚式 フォーマル 30代 40代 50代 パンツスーツ セットアップ'
//         , price: '4,399'
//     }, {
//         href: '', imgSrc: '/img/recommendPicture1.jpg', discount: true, new: true, title: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 結婚式 フォーマル 30代 40代 50代 パンツスーツ セットアップ'
//         , price: '4,399'
//     }, {
//         href: '', imgSrc: '/img/recommendPicture1.jpg', discount: true, new: true, title: '【再入荷预定】レディース セレモニースーツ 入学式 ママスーツ 卒業式スーツ 卒園式 入園式 服装 母親 結婚式 フォーマル 30代 40代 50代 パンツスーツ セットアップ'
//         , price: '4,399'
//     },]
// }




//Time sale main comp   一次请求，把所有的数据都请求回来就好了
//time sale sort comp,用于给category header的 这个和下面一个的url都不是href，只是一个用于select选择的value，到时候可能会改
export const CategoryHeaderDateList = [
    {
        url: "ALL",
        name: "ALL"
    },
    {
        url: "topGeneral",
        name: "トップス"
    },
    {
        url: "dressGeneral",
        name: "ワンピース"
    },
    {
        url: "bottomGeneral",
        name: "ボトムス"
    },
    {
        url: "outerGeneral",
        name: "アウター"
    },
    {
        url: "setUp",
        name: "セット"
    },
    {
        url: "generalShoes",
        name: "ジュース"
    },
    {
        url: "other",
        name: "そのほか"
    }
]
//time sale sort comp,用于给ordertype header的 固定数据
export const OrderTypeHeaderDataList = [
    {
        url: "recommend",
        name: "おすすめ"
    },
    {
        url: "priceUp",
        name: "価格↑"
    },
    {
        url: "priceDown",
        name: "価格↓"
    },
    {
        url: "stockNumUp",
        name: "残り↑"
    },
    {
        url: "stockNumDown",
        name: "残り↓"
    }
]
//href  imgSrc picAlt, originPrice,currentPrice,(discountRate),currentstock,recommend
// export const TimeSaleTotalDataList = {
//     'topGeneral': [
//         { href: '', imgSrc: '/img/recommendPicture1.jpg', originPrice: 4000, currentPrice: 2000, currentStock: 15, recommend: 10 },
//         { href: '', imgSrc: '/img/recommendPicture1.jpg', originPrice: 4000, currentPrice: 2000, currentStock: 15, recommend: 10 },
//         { href: '', imgSrc: '/img/recommendPicture1.jpg', originPrice: 4001, currentPrice: 2001, currentStock: 12, recommend: 9 },
//         { href: '', imgSrc: '/img/recommendPicture1.jpg', originPrice: 4002, currentPrice: 2005, currentStock: 13, recommend: 11 },
//         { href: '', imgSrc: '/img/recommendPicture1.jpg', originPrice: 4003, currentPrice: 2002, currentStock: 14, recommend: 12 },
//         { href: '', imgSrc: '/img/recommendPicture1.jpg', originPrice: 4009, currentPrice: 2002, currentStock: 15, recommend: 19 },
//         { href: '', imgSrc: '/img/recommendPicture1.jpg', originPrice: 4008, currentPrice: 2003, currentStock: 16, recommend: 17 },
//         { href: '', imgSrc: '/img/recommendPicture1.jpg', originPrice: 4007, currentPrice: 2007, currentStock: 17, recommend: 18 },
//         { href: '', imgSrc: '/img/recommendPicture1.jpg', originPrice: 4006, currentPrice: 2008, currentStock: 18, recommend: 17 },
//         { href: '', imgSrc: '/img/recommendPicture1.jpg', originPrice: 4005, currentPrice: 2009, currentStock: 19, recommend: 6 },
//         { href: '', imgSrc: '/img/recommendPicture1.jpg', originPrice: 4004, currentPrice: 2005, currentStock: 20, recommend: 13 },
//         { href: '', imgSrc: '/img/recommendPicture1.jpg', originPrice: 4009, currentPrice: 2002, currentStock: 21, recommend: 15 },
//         { href: '', imgSrc: '/img/recommendPicture1.jpg', originPrice: 4008, currentPrice: 2011, currentStock: 22, recommend: 17 },
//         { href: '', imgSrc: '/img/recommendPicture1.jpg', originPrice: 4007, currentPrice: 2013, currentStock: 15, recommend: 3 },
//         { href: '', imgSrc: '/img/recommendPicture1.jpg', originPrice: 4006, currentPrice: 2001, currentStock: 17, recommend: 2 },],
//     'dressGeneral': [
//         { href: '', imgSrc: '/img/recommendPicture2.jpg', originPrice: 4000, currentPrice: 2100, currentStock: 115, recommend: 110 },
//         { href: '', imgSrc: '/img/recommendPicture2.jpg', originPrice: 4001, currentPrice: 2101, currentStock: 112, recommend: 19 },
//         { href: '', imgSrc: '/img/recommendPicture2.jpg', originPrice: 4002, currentPrice: 2105, currentStock: 113, recommend: 111 },
//         { href: '', imgSrc: '/img/recommendPicture2.jpg', originPrice: 4003, currentPrice: 2102, currentStock: 114, recommend: 112 },
//         { href: '', imgSrc: '/img/recommendPicture2.jpg', originPrice: 4009, currentPrice: 2102, currentStock: 115, recommend: 119 },
//         { href: '', imgSrc: '/img/recommendPicture2.jpg', originPrice: 4008, currentPrice: 2103, currentStock: 116, recommend: 117 },
//         { href: '', imgSrc: '/img/recommendPicture2.jpg', originPrice: 4007, currentPrice: 2107, currentStock: 117, recommend: 118 },
//         { href: '', imgSrc: '/img/recommendPicture2.jpg', originPrice: 4006, currentPrice: 2108, currentStock: 118, recommend: 117 },
//         { href: '', imgSrc: '/img/recommendPicture2.jpg', originPrice: 4005, currentPrice: 2109, currentStock: 119, recommend: 16 },
//         { href: '', imgSrc: '/img/recommendPicture2.jpg', originPrice: 4004, currentPrice: 2105, currentStock: 120, recommend: 113 },
//         { href: '', imgSrc: '/img/recommendPicture2.jpg', originPrice: 4009, currentPrice: 2102, currentStock: 121, recommend: 115 },
//         { href: '', imgSrc: '/img/recommendPicture2.jpg', originPrice: 4008, currentPrice: 2111, currentStock: 122, recommend: 117 },
//         { href: '', imgSrc: '/img/recommendPicture2.jpg', originPrice: 4007, currentPrice: 2113, currentStock: 115, recommend: 13 },
//         { href: '', imgSrc: '/img/recommendPicture2.jpg', originPrice: 4006, currentPrice: 2101, currentStock: 117, recommend: 12 },],
//     'bottomGeneral': [
//         { href: '', imgSrc: '/img/recommendPicture3.jpg', originPrice: 4000, currentPrice: 2010, currentStock: 215, recommend: 910 },
//         { href: '', imgSrc: '/img/recommendPicture3.jpg', originPrice: 4001, currentPrice: 2011, currentStock: 212, recommend: 99 },
//         { href: '', imgSrc: '/img/recommendPicture3.jpg', originPrice: 4002, currentPrice: 2015, currentStock: 213, recommend: 911 },
//         { href: '', imgSrc: '/img/recommendPicture3.jpg', originPrice: 4003, currentPrice: 2012, currentStock: 214, recommend: 912 },
//         { href: '', imgSrc: '/img/recommendPicture3.jpg', originPrice: 4009, currentPrice: 2012, currentStock: 215, recommend: 919 },
//         { href: '', imgSrc: '/img/recommendPicture3.jpg', originPrice: 4008, currentPrice: 2013, currentStock: 216, recommend: 917 },
//         { href: '', imgSrc: '/img/recommendPicture3.jpg', originPrice: 4007, currentPrice: 2017, currentStock: 217, recommend: 918 },
//         { href: '', imgSrc: '/img/recommendPicture3.jpg', originPrice: 4006, currentPrice: 2018, currentStock: 218, recommend: 917 },
//         { href: '', imgSrc: '/img/recommendPicture3.jpg', originPrice: 4005, currentPrice: 2019, currentStock: 219, recommend: 96 },
//         { href: '', imgSrc: '/img/recommendPicture3.jpg', originPrice: 4004, currentPrice: 2015, currentStock: 220, recommend: 913 },
//         { href: '', imgSrc: '/img/recommendPicture3.jpg', originPrice: 4009, currentPrice: 2012, currentStock: 221, recommend: 915 },
//         { href: '', imgSrc: '/img/recommendPicture3.jpg', originPrice: 4008, currentPrice: 2011, currentStock: 222, recommend: 917 },
//         { href: '', imgSrc: '/img/recommendPicture3.jpg', originPrice: 4007, currentPrice: 2013, currentStock: 215, recommend: 93 },
//         { href: '', imgSrc: '/img/recommendPicture3.jpg', originPrice: 4006, currentPrice: 2011, currentStock: 217, recommend: 92 },],
//     'outerGeneral': [
//         { href: '', imgSrc: '/img/recommendPicture4.webp', originPrice: 4000, currentPrice: 2200, currentStock: 315, recommend: 310 },
//         { href: '', imgSrc: '/img/recommendPicture4.webp', originPrice: 4001, currentPrice: 2201, currentStock: 312, recommend: 39 },
//         { href: '', imgSrc: '/img/recommendPicture4.webp', originPrice: 4002, currentPrice: 2205, currentStock: 313, recommend: 311 },
//         { href: '', imgSrc: '/img/recommendPicture4.webp', originPrice: 4003, currentPrice: 2202, currentStock: 314, recommend: 312 },
//         { href: '', imgSrc: '/img/recommendPicture4.webp', originPrice: 4009, currentPrice: 2202, currentStock: 315, recommend: 319 },
//         { href: '', imgSrc: '/img/recommendPicture4.webp', originPrice: 4008, currentPrice: 2203, currentStock: 316, recommend: 317 },
//         { href: '', imgSrc: '/img/recommendPicture4.webp', originPrice: 4007, currentPrice: 2207, currentStock: 317, recommend: 318 },
//         { href: '', imgSrc: '/img/recommendPicture4.webp', originPrice: 4006, currentPrice: 2208, currentStock: 318, recommend: 317 },
//         { href: '', imgSrc: '/img/recommendPicture4.webp', originPrice: 4005, currentPrice: 2209, currentStock: 319, recommend: 36 },
//         { href: '', imgSrc: '/img/recommendPicture4.webp', originPrice: 4004, currentPrice: 2205, currentStock: 320, recommend: 313 },
//         { href: '', imgSrc: '/img/recommendPicture4.webp', originPrice: 4009, currentPrice: 2202, currentStock: 321, recommend: 315 },
//         { href: '', imgSrc: '/img/recommendPicture4.webp', originPrice: 4008, currentPrice: 2211, currentStock: 322, recommend: 317 },
//         { href: '', imgSrc: '/img/recommendPicture4.webp', originPrice: 4007, currentPrice: 2213, currentStock: 315, recommend: 33 },
//         { href: '', imgSrc: '/img/recommendPicture4.webp', originPrice: 4006, currentPrice: 2201, currentStock: 317, recommend: 32 }],
//     'setUp': [
//         { href: '', imgSrc: '/img/recommendPicture5.webp', originPrice: 4000, currentPrice: 1000, currentStock: 615, recommend: 610 },
//         { href: '', imgSrc: '/img/recommendPicture5.webp', originPrice: 4001, currentPrice: 1001, currentStock: 612, recommend: 69 },
//         { href: '', imgSrc: '/img/recommendPicture5.webp', originPrice: 4002, currentPrice: 1005, currentStock: 613, recommend: 611 },
//         { href: '', imgSrc: '/img/recommendPicture5.webp', originPrice: 4003, currentPrice: 1002, currentStock: 614, recommend: 612 },
//         { href: '', imgSrc: '/img/recommendPicture5.webp', originPrice: 4009, currentPrice: 1002, currentStock: 615, recommend: 619 },
//         { href: '', imgSrc: '/img/recommendPicture5.webp', originPrice: 4008, currentPrice: 1003, currentStock: 616, recommend: 617 },
//         { href: '', imgSrc: '/img/recommendPicture5.webp', originPrice: 4007, currentPrice: 1007, currentStock: 617, recommend: 618 },
//         { href: '', imgSrc: '/img/recommendPicture5.webp', originPrice: 4006, currentPrice: 1008, currentStock: 618, recommend: 617 },
//         { href: '', imgSrc: '/img/recommendPicture5.webp', originPrice: 4005, currentPrice: 1009, currentStock: 619, recommend: 66 },
//         { href: '', imgSrc: '/img/recommendPicture5.webp', originPrice: 4004, currentPrice: 1005, currentStock: 620, recommend: 613 },
//         { href: '', imgSrc: '/img/recommendPicture5.webp', originPrice: 4009, currentPrice: 1002, currentStock: 621, recommend: 615 },
//         { href: '', imgSrc: '/img/recommendPicture5.webp', originPrice: 4008, currentPrice: 1011, currentStock: 622, recommend: 617 },
//         { href: '', imgSrc: '/img/recommendPicture5.webp', originPrice: 4007, currentPrice: 1013, currentStock: 615, recommend: 63 },
//         { href: '', imgSrc: '/img/recommendPicture5.webp', originPrice: 4006, currentPrice: 1001, currentStock: 617, recommend: 62 }],
//     'generalShoes': [
//         { href: '', imgSrc: '/img/newProduct1.jpg', originPrice: 4000, currentPrice: 2300, currentStock: 515, recommend: 3310 },
//         { href: '', imgSrc: '/img/newProduct1.jpg', originPrice: 4001, currentPrice: 2301, currentStock: 512, recommend: 339 },
//         { href: '', imgSrc: '/img/newProduct1.jpg', originPrice: 4002, currentPrice: 2305, currentStock: 513, recommend: 3311 },
//         { href: '', imgSrc: '/img/newProduct1.jpg', originPrice: 4003, currentPrice: 2302, currentStock: 514, recommend: 3312 },
//         { href: '', imgSrc: '/img/newProduct1.jpg', originPrice: 4009, currentPrice: 2302, currentStock: 515, recommend: 3319 },
//         { href: '', imgSrc: '/img/newProduct1.jpg', originPrice: 4008, currentPrice: 2303, currentStock: 516, recommend: 3317 },
//         { href: '', imgSrc: '/img/newProduct1.jpg', originPrice: 4007, currentPrice: 2307, currentStock: 517, recommend: 3318 },
//         { href: '', imgSrc: '/img/newProduct1.jpg', originPrice: 4006, currentPrice: 2308, currentStock: 518, recommend: 3317 },
//         { href: '', imgSrc: '/img/newProduct1.jpg', originPrice: 4005, currentPrice: 2309, currentStock: 519, recommend: 336 },
//         { href: '', imgSrc: '/img/newProduct1.jpg', originPrice: 4004, currentPrice: 2305, currentStock: 520, recommend: 3313 },
//         { href: '', imgSrc: '/img/newProduct1.jpg', originPrice: 4009, currentPrice: 2302, currentStock: 521, recommend: 3315 },
//         { href: '', imgSrc: '/img/newProduct1.jpg', originPrice: 4008, currentPrice: 2311, currentStock: 522, recommend: 3317 },
//         { href: '', imgSrc: '/img/newProduct1.jpg', originPrice: 4007, currentPrice: 2313, currentStock: 515, recommend: 333 },
//         { href: '', imgSrc: '/img/newProduct1.jpg', originPrice: 4006, currentPrice: 2301, currentStock: 517, recommend: 332 }],
//     'other': [
//         { href: '', imgSrc: '/img/newProduct2.jpg', originPrice: 4000, currentPrice: 2400, currentStock: 415, recommend: 210 },
//         { href: '', imgSrc: '/img/newProduct2.jpg', originPrice: 4001, currentPrice: 2401, currentStock: 412, recommend: 29 },
//         { href: '', imgSrc: '/img/newProduct2.jpg', originPrice: 4002, currentPrice: 2405, currentStock: 413, recommend: 211 },
//         { href: '', imgSrc: '/img/newProduct2.jpg', originPrice: 4003, currentPrice: 2402, currentStock: 414, recommend: 212 },
//         { href: '', imgSrc: '/img/newProduct2.jpg', originPrice: 4009, currentPrice: 2402, currentStock: 415, recommend: 219 },
//         { href: '', imgSrc: '/img/newProduct2.jpg', originPrice: 4008, currentPrice: 2403, currentStock: 416, recommend: 217 },
//         { href: '', imgSrc: '/img/newProduct2.jpg', originPrice: 4007, currentPrice: 2407, currentStock: 417, recommend: 218 },
//         { href: '', imgSrc: '/img/newProduct2.jpg', originPrice: 4006, currentPrice: 2408, currentStock: 418, recommend: 217 },
//         { href: '', imgSrc: '/img/newProduct2.jpg', originPrice: 4005, currentPrice: 2409, currentStock: 419, recommend: 26 },
//         { href: '', imgSrc: '/img/newProduct2.jpg', originPrice: 4004, currentPrice: 2405, currentStock: 420, recommend: 213 },
//         { href: '', imgSrc: '/img/newProduct2.jpg', originPrice: 4009, currentPrice: 2402, currentStock: 421, recommend: 215 },
//         { href: '', imgSrc: '/img/newProduct2.jpg', originPrice: 4008, currentPrice: 2411, currentStock: 422, recommend: 217 },
//         { href: '', imgSrc: '/img/newProduct2.jpg', originPrice: 4007, currentPrice: 2413, currentStock: 415, recommend: 23 },
//         { href: '', imgSrc: '/img/newProduct2.jpg', originPrice: 4006, currentPrice: 2401, currentStock: 417, recommend: 22 }],
// }





// 放置url对应关系的地方,这个后端请求或者前端问题都不大 generalproductmainbody的数据,和navigateline的数据几乎一样，这里的url其实是物品类别，可以到时候换掉
export const generalProductMainBodyUrl = {
    generalProduct: {
        girlsLoveGeneral: {
            url: "girlsLoveGeneral",
            name: "レディース",
        },
        girlsTops: {
            url: "girlsTops",
            name: "トップス",
            hot: true
        },
        girlsOuter: {
            url: "girlsOuter",
            name: "アウター",
            hot: true
        },
        girlsDress: {
            url: "girlsDress",
            name: "ワンピース",
            hot: true
        },
        girlsBottom: {
            url: "girlsBottom",
            name: "ボトムス",
        },
        girlsSetUp: {
            url: "girlsSetUp",
            name: "セットアップ",
        },
        girlsShoes: {
            url: "girlsShoes",
            name: "ジュース",
        },
        girlsGoods: {
            url: "girlsGoods",
            name: "小物",
        },
        menFashion: {
            url: "menFashion",
            name: "メンズファッション",
        },
    },
    top: {
        topGeneral: {
            url: "topGeneral",
            name: "トップス"
        },
        topShirt: {
            url: "topBlouse",
            name: "シャツ・ブラウス",
            hot: true,
        },
        topTShirt: {
            url: "topTShirt",
            name: "Ｔシャツ",
        },
        topHoodie: {
            url: "topHoodie",
            name: "パーカー・スウェット",
        },
        topSweater: {
            url: "topSweater",
            name: "セーター",
        },
        topNoSleeveTops: {
            url: "topNoSleeveTops",
            name: "ノースリーブ・ベスト",
        },
    },
    dress: {
        dressGeneral: {
            url: "dressGeneral",
            name: "ワンピース",
        },
        casualDress: {
            url: "casualDress",
            name: "カジュアルワンピース",
        },
        strapSkirt: {
            url: "strapSkirt",
            name: "サロペットスカート",
        },
        olDress: {
            url: "olDress",
            name: "通勤ワンピース",
        },
        shirtDress: {
            url: "shirtDress",
            name: "シャツワンピース",
        },
        knitDress: {
            url: "knitDress",
            name: "ニットワンピース",
        },
    },
    bottom: {
        bottomGeneral: {
            url: "bottomGeneral",
            name: "ボトムス"
        },
        bottomCausal: {
            url: "bottomCausal",
            name: "カジュアルパンツ"
        },
        bottomSkirt: {
            url: "bottomSkirt",
            name: "スカート"
        },
        bottomDenim: {
            url: "bottomDenim",
            name: "デニム"
        },
        bottomShortPants: {
            url: "bottomShortPants",
            name: "ショートパンツ"
        },
        bottomAllInOne: {
            url: "bottomAllInOne",
            name: "オールインワン"
        }
    },
    outer: {
        outerGeneral: {
            url: "outerGeneral",
            name: "アウター"
        },
        outerCardigan: {
            url: "outerCardigan",
            name: "カーディガン"
        },
        outerSuit: {
            url: "outerSuit",
            name: "スーツ"
        },
        outerJacket: {
            url: "outerJacket",
            name: "ジャケット"
        },
        outerCoat: {
            url: "outerCoat",
            name: "コート"
        },
        outerDownCoat: {
            url: "outerDownCoat",
            name: "ダウンコート"
        },
    },
    setUp: {
        url: "setUp",
        name: "セットアップ"
    },
    shoes: {
        generalShoes: {
            url: "shoesGeneral",
            name: "シューズ"
        },
        pumpShoes: {
            url: "pumpShoes",
            name: "パンプス"
        },
        flatShoes: {
            url: "flatShoes",
            name: "フラットシューズ"
        },
        sandalShoes: {
            url: "sandalShoes",
            name: "サンダル"
        },
        sneakerShoes: {
            url: "sneakerShoes",
            name: "スニーカー"
        },
        bootShoes: {
            url: "bootShoes",
            name: "ブーツ"
        },
    },
    inner: {
        generalInner: {
            url: "generalInner",
            name: "下着"
        },
        swimwearInner: {
            url: "swimwearInner",
            name: "水着・ビキニ"
        },
        underwearInner: {
            url: "underwearInner",
            name: "ブラジャー＆ショートセット"
        },
        indoorWearInner: {
            url: "indoorWearInner",
            name: "ルームウェア・パジャマセット"
        },
        braInner: {
            url: "braInner",
            name: "ブラジャー"
        },
        shortsInner: {
            url: "shortsInner",
            name: "ショーツ"
        },
        accInner: {
            url: "accInner",
            name: "グッズ"
        },
    },
    goods: {
        generalGoods: {
            url: "generalGoods",
            name: "小物"
        },
        bagGoods: {
            url: "bagGoods",
            name: "バッグ"
        },
        accessoryGoods: {
            url: "accessoryGoods",
            name: "アクセサリー"
        },
        hatGoods: {
            url: "hatGoods",
            name: "帽子"
        },
        socksGoods: {
            url: "socksGoods",
            name: "ソックス"
        },
        scarfGoods: {
            url: "scarfGoods",
            name: "スカーフ"
        },
    }
};




//checkout省的选择，固定的 
export const checkOutOptions = [
    { value: "東京都", label: '東京都' },
    { value: "愛知県", label: '愛知県' },
    { value: "秋田県", label: '秋田県' },
    { value: "青森県", label: '青森県' },
    { value: "千葉県", label: '千葉県' },
    { value: "愛媛県", label: '愛媛県' },
    { value: "福井県", label: '福井県' },
    { value: "福岡県", label: '福岡県' },
    { value: "福島県", label: '福島県' },
    { value: "岐阜県", label: '岐阜県' },
    { value: "群馬県", label: '群馬県' },
    { value: "広島県", label: '広島県' },
    { value: "北海道", label: '北海道' },
    { value: "兵庫県", label: '兵庫県' },
    { value: "茨城県", label: '茨城県' },
    { value: "石川県", label: '石川県' },
    { value: "岩手県", label: '岩手県' },
    { value: "香川県", label: '香川県' },
    { value: "鹿児島県", label: '鹿児島県' },
    { value: "神奈川県", label: '神奈川県' },
    { value: "高知県", label: '高知県' },
    { value: "熊本県", label: '熊本県' },
    { value: "京都府", label: '京都府' },
    { value: "三重県", label: '三重県' },
    { value: "宮城県", label: '宮城県' },
    { value: "長野県", label: '長野県' },
    { value: "奈良県", label: '奈良県' },
    { value: "新潟県", label: '新潟県' },
    { value: "大分県", label: '大分県' },
    { value: "岡山県", label: '岡山県' },
    { value: "沖縄県", label: '沖縄県' },
    { value: "大阪府", label: '大阪府' },
    { value: "佐賀県", label: '佐賀県' },
    { value: "埼玉県", label: '埼玉県' },
    { value: "滋賀県", label: '滋賀県' },
    { value: "島根県", label: '島根県' },
    { value: "静岡県", label: '静岡県' },
    { value: "栃木県", label: '栃木県' },
    { value: "徳島県", label: '徳島県' },
    { value: "鳥取県", label: '鳥取県' },
    { value: "富山県", label: '富山県' },
    { value: "和歌山県", label: '和歌山県' },
    { value: "山形県", label: '山形県' },
    { value: "山口県", label: '山口県' },
    { value: "山梨県", label: '山梨県' },
    { value: "宮崎県", label: '宮崎県' },
    { value: "長崎県", label: '長崎県' },
]