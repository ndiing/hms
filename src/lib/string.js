function toPascalCase(string) {
    return string
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z0-9])/g, ($, $1, $2, $$) =>
            $2.toUpperCase(),
        )
        .replace(/([^a-zA-Z0-9]+$)/g, ($, $1, $$) => "");
}

function toCamelCase(string) {
    return string
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z0-9])/g, ($, $1, $2, $$) =>
            $$ === 0 ? $2.toLowerCase() : $2.toUpperCase(),
        )
        .replace(/([^a-zA-Z0-9]+$)/g, ($, $1, $$) => "");
}

function toSnakeCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, "$1_$2")
        .replace(/([^a-zA-Z0-9]+)([a-zA-Z0-9])/g, ($, $1, $2, $$) => "_" + $2)
        .replace(/(^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$)/g, ($, $1, $$) => "")
        .toLowerCase();
}

function toKebabCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, "$1-$2")
        .replace(/([^a-zA-Z0-9]+)([a-zA-Z0-9])/g, ($, $1, $2, $$) => "-" + $2)
        .replace(/(^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$)/g, ($, $1, $$) => "")
        .toLowerCase();
}

function toTitleCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, "$1 $2")
        .replace(
            /(^|[^a-zA-Z0-9]+)([a-zA-Z0-9])/g,
            ($, $1, $2, $$) => " " + $2.toUpperCase(),
        )
        .replace(/(^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$)/g, ($, $1, $$) => "");
}

module.exports = {
    toPascalCase,
    toCamelCase,
    toSnakeCase,
    toKebabCase,
    toTitleCase,
};


// let data=[
//     "getV2ContentProductCategoryDigital",
//     "getV2ContentProductItemDigital",
//     "postV3TrxDigitalVoucherInject",
//     "getV2ContentProfilingProductcategoriesv2",
//     "getV3ContentProfilingProductItemList",
//     "postV5TrxMultiplePackage",
//     "getV4ContentNextBestOffer",
//     "postV5TrxNboPackage",
//     "postV1TrxClaimTaggingRo",
//     "postV1TrxClaimTaggingRo",
//     "getV2ContentDenomPulsa",
//     "postV3TrxW2p",
//     "getV2CommonVoucher",
//     "getV2CommonVoucher",
//     "getV2CommonVoucher",
//     "getV1CommonPrefix",
//     "getV2PackageCheck4GStatus",
//     "getV2PackageCheckDukcapil",
//     "getV5PackageV52Check",
//     "getV2PackageCheckBalance",
//     "getV2CommonVolteRediness",
//     "getV3Bonus",
//     "getV2PackageCheckSPExpDate",
//     "getV2PackageCheckTenure",
//     "getV1Upgrade4gSimcardStatus4g",
//     "getV3TrxHistory",
//     "getV3TrxHistoryOrder",
//     "getV1AccountProfile",
//     "getV2AccountProfileKtp",
//     "getV2AccountBalance",
//     "postV3AuthLogout",
//     "postV3AuthOtp",
//     "getV3AuthOtp",
// ]
// data=data.map(str=>toTitleCase(str))
// console.log(data)