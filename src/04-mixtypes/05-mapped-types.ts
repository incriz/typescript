type PcBrand = {
    name: string,
    country: string,
    createdAt: Date,
}

type WellKnowBrands = "apple" | "lenovo" | "hp" | "dell" | "samsung" | "microsoft";

type MyPcRecord = {
    // [key: string]: PcBrand;
    [BrandKey in WellKnowBrands]?: PcBrand;
}

const brandRecord: MyPcRecord = {
    apple: {
        country: "USA",
        createdAt: new Date(),
        name: "apple",
    },


}

function printPcCatalog(pcCatalog: MyPcRecord){
    console.log(pcCatalog.apple?.country)
}

type PartOfWindow = {
    [Key in "document" | "screen" | "navigator"]?: Window[Key]
}

const p: PartOfWindow = {
    screen: window.screen
}


export {}