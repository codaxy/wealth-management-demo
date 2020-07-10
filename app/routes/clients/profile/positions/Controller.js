import { Controller } from 'cx/ui';

const positionsData = [
    {
        custody_display_name: "Aargauer Kantonalbank",
        element_leaf: true,
        id: 6793262,
        inst_quote: 0.910080273278,
        pcomp_amount: -1100000,
        pcomp_currency: "CHF",
        pcomp_name: "FX FWD CHF/EUR 1.000000 25.03.2018",
        pcomp_pl_si_unreal_pf_currency: 98911.6993931,
        pcomp_value_w_ai_pf_currency: 98911.6993931,
        annualized_vol: 0.0062,
        level: 1,
        sector: 'Financials',
        region: 'Other Europe',
        assetType: 'Cash'
    },
    {
        custody_display_name: "Credit Suisse Group AG",
        element_leaf: true,
        id: 6793212,
        inst_quote: 1,
        pcomp_amount: 29807.71,
        pcomp_currency: "EUR",
        pcomp_name: "EUR Cash",
        pcomp_pl_si_unreal_pf_currency: 0,
        pcomp_value_w_ai_pf_currency: 29807.71,
        annualized_vol: 0.0049,
        level: 1,
        sector: 'Other',
        region: 'UK',
        assetType: 'Cash'
    },
    {
        custody_display_name: "Julius Baer Group AG",
        element_leaf: true,
        id: 6793313,
        inst_quote: 1.112149970398,
        pcomp_amount: -790000,
        pcomp_currency: "EUR",
        pcomp_name: "FX FWD EUR/USD 1.106219 12.04.2018",
        pcomp_pl_si_unreal_pf_currency: -878.04,
        pcomp_value_w_ai_pf_currency: -878.04,
        annualized_vol: 0.0039,
        level: 1,
        sector: 'Other',
        region: 'USA',
        assetType: 'Cash'
    },
    {
        custody_display_name: "Bank Lombard Odier & Co",
        element_leaf: true,
        id: 23666340,
        inst_quote: 1665.72,
        pcomp_amount: 3,
        pcomp_currency: "EUR",
        pcomp_name: "AA Allianz Diversifiee FCP",
        pcomp_pl_si_unreal_pf_currency: 246.84,
        pcomp_value_w_ai_pf_currency: 4997.16,
        annualized_vol: 0.0037,
        level: 1,
        sector: 'Other',
        region: 'Other Europe',
        assetType: 'Bonds'
    },
    {
        custody_display_name: "Credit Suisse Group AG",
        element_leaf: true,
        id: 13940469,
        inst_quote: 103.485,
        pcomp_amount: 3,
        pcomp_currency: "EUR",
        pcomp_name: "2.625% Merck KGaA VRN 2074/12/12",
        pcomp_pl_si_unreal_pf_currency: 0.01455,
        pcomp_value_w_ai_pf_currency: 3.136265753424,
        annualized_vol: 0.0029,
        level: 1,
        sector: 'Other',
        region: 'Other Europe',
        assetType: 'Bonds'
    },
    {
        custody_display_name: "UBS Group AG",
        element_leaf: true,
        id: 6796237,
        inst_quote: 144.94,
        pcomp_amount: 6500,
        pcomp_currency: "USD",
        pcomp_name: "JPMorgan Funds SICAV - Emerging Markets",
        pcomp_pl_si_unreal_pf_currency: -73616.588,
        pcomp_value_w_ai_pf_currency: 850702.08,
        annualized_vol: 0.0035,
        level: 1,
        sector: 'Financials',
        region: 'Switzerland',
        assetType: 'Bonds'
    },
    {
        custody_display_name: "Julius Baer Group AG",
        element_leaf: true,
        id: 6796238,
        inst_quote: 144.94,
        pcomp_amount: 4000,
        pcomp_currency: "CHF",
        pcomp_name: "Nestle Ltd. Rg",
        pcomp_pl_si_unreal_pf_currency: 41955.85,
        pcomp_value_w_ai_pf_currency: 377555.85,
        annualized_vol: 0.009,
        level: 1,
        sector: 'Consumers',
        region: 'Euro Zone',
        assetType: 'Bonds'
    },
    {
        custody_display_name: "Bank Lombard Odier & Co",
        element_leaf: true,
        id: 6796239,
        inst_quote: 2869.00,
        pcomp_amount: 110,
        pcomp_currency: "CHF",
        pcomp_name: "Givaudan AG",
        pcomp_pl_si_unreal_pf_currency: 39642.31,
        pcomp_value_w_ai_pf_currency: 287032.31,
        annualized_vol: 0.0081,
        level: 1,
        sector: 'Health care',
        region: 'USA',
        assetType: 'Bonds'
    }
];

export default () => class extends Controller {
    onInit() {
        this.store.set('positionsData', positionsData);
    };
};



// const assetAllocationTreeGroup = [
//     {
//         custody_display_name: "",
//         element_leaf: false,
//         id: 13467,
//         inst_quote: "",
//         pcomp_amount: '',
//         pcomp_currency: "",
//         pcomp_name: "Cash",
//         pcomp_pl_si_unreal_pf_currency: 94698.8,
//         pcomp_value_w_ai_pf_currency: 124506.51,
//         level: 0,
//         $expanded: true,
//         $children: [
//             {
//                 custody_display_name: "Aargauer Kantonalbank",
//                 element_leaf: true,
//                 id: 6793262,
//                 inst_quote: 0.910080273278,
//                 pcomp_amount: -1100000,
//                 pcomp_currency: "CHF",
//                 pcomp_name: "FX FWD CHF/EUR 1.000000 25.03.2018",
//                 pcomp_pl_si_unreal_pf_currency: 98911.6993931,
//                 pcomp_value_w_ai_pf_currency: 98911.6993931,
//                 annualized_vol: 0.0062,
//                 level: 1
//             },
//             {
//                 custody_display_name: "Credit Suisse Group AG",
//                 element_leaf: true,
//                 id: 6793212,
//                 inst_quote: 1,
//                 pcomp_amount: 29807.71,
//                 pcomp_currency: "EUR",
//                 pcomp_name: "EUR Cash",
//                 pcomp_pl_si_unreal_pf_currency: 0,
//                 pcomp_value_w_ai_pf_currency: 29807.71,
//                 annualized_vol: 0.0049,
//                 level: 1
//             },
//             {
//                 custody_display_name: "Julius Baer Group AG",
//                 element_leaf: true,
//                 id: 6793313,
//                 inst_quote: 1.112149970398,
//                 pcomp_amount: -790000,
//                 pcomp_currency: "EUR",
//                 pcomp_name: "FX FWD EUR/USD 1.106219 12.04.2018",
//                 pcomp_pl_si_unreal_pf_currency: -878.04,
//                 pcomp_value_w_ai_pf_currency: -878.04,
//                 annualized_vol: 0.0039,
//                 level: 1
//             }
//         ]
//     },
//     {
//         custody_display_name: "",
//         element_leaf: false,
//         id: 13468,
//         inst_quote: "",
//         pcomp_amount: '',
//         pcomp_currency: "",
//         pcomp_name: "Bonds",
//         pcomp_pl_si_unreal_pf_currency: 8228.42,
//         pcomp_value_w_ai_pf_currency: 1520290.54,
//         level: 0,
//         $expanded: true,
//         $children: [
//             {
//                 custody_display_name: "Bank Lombard Odier & Co",
//                 element_leaf: true,
//                 id: 23666340,
//                 inst_quote: 1665.72,
//                 pcomp_amount: 3,
//                 pcomp_currency: "EUR",
//                 pcomp_name: "AA Allianz Diversifiee FCP",
//                 pcomp_pl_si_unreal_pf_currency: 246.84,
//                 pcomp_value_w_ai_pf_currency: 4997.16,
//                 annualized_vol: 0.0037,
//                 level: 1
//             },
//             {
//                 custody_display_name: "Credit Suisse Group AG",
//                 element_leaf: true,
//                 id: 13940469,
//                 inst_quote: 103.485,
//                 pcomp_amount: 3,
//                 pcomp_currency: "EUR",
//                 pcomp_name: "2.625% Merck KGaA VRN 2074/12/12",
//                 pcomp_pl_si_unreal_pf_currency: 0.01455,
//                 pcomp_value_w_ai_pf_currency: 3.136265753424,
//                 annualized_vol: 0.0029,
//                 level: 1
//             },
//             {
//                 custody_display_name: "UBS Group AG",
//                 element_leaf: true,
//                 id: 6796237,
//                 inst_quote: 144.94,
//                 pcomp_amount: 6500,
//                 pcomp_currency: "USD",
//                 pcomp_name: "JPMorgan Funds SICAV - Emerging Markets",
//                 pcomp_pl_si_unreal_pf_currency: -73616.588,
//                 pcomp_value_w_ai_pf_currency: 850702.08,
//                 annualized_vol: 0.0035,
//                 level: 1
//             },
//             {
//                 custody_display_name: "Julius Baer Group AG",
//                 element_leaf: true,
//                 id: 6796238,
//                 inst_quote: 144.94,
//                 pcomp_amount: 4000,
//                 pcomp_currency: "CHF",
//                 pcomp_name: "Nestle Ltd. Rg",
//                 pcomp_pl_si_unreal_pf_currency: 41955.85,
//                 pcomp_value_w_ai_pf_currency: 377555.85,
//                 annualized_vol: 0.009,
//                 level: 1
//             },
//             {
//                 custody_display_name: "Bank Lombard Odier & Co",
//                 element_leaf: true,
//                 id: 6796239,
//                 inst_quote: 2869.00,
//                 pcomp_amount: 110,
//                 pcomp_currency: "CHF",
//                 pcomp_name: "Givaudan AG",
//                 pcomp_pl_si_unreal_pf_currency: 39642.31,
//                 pcomp_value_w_ai_pf_currency: 287032.31,
//                 annualized_vol: 0.0081,
//                 level: 1
//             }
//         ]
//     }
// ];