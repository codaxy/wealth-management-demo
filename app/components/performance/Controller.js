import { Controller } from 'cx/ui';

const performanceData = {
    ytd: {
        monthly: [
            { perf_date: '2019-01-01', perf_amount_net: 0.001304739393, perf_amount_cum_net: 0.0013047393 },
            { perf_date: '2019-02-01', perf_amount_net: 0.028292636017, perf_amount_cum_net: 0.028292636 },
            { perf_date: '2019-03-01', perf_amount_net: 0.017439851771, perf_amount_cum_net: 0.0462259071 },
            { perf_date: '2019-04-01', perf_amount_net: 0.029763118596, perf_amount_cum_net: 0.0773648529 },
            { perf_date: '2019-05-01', perf_amount_net: 0.010396660028, perf_amount_cum_net: 0.088565849 },
            { perf_date: '2019-06-01', perf_amount_net: -0.021225825904, perf_amount_cum_net: 0.0654601398 },
            { perf_date: '2019-07-01', perf_amount_net: 0.013535021761, perf_amount_cum_net: 0.079881166 },
            { perf_date: '2019-08-01', perf_amount_net: 0.02568735556, perf_amount_cum_net: 0.1076204574 },
            { perf_date: '2019-09-01', perf_amount_net: 0.002971086844, perf_amount_cum_net: 0.110911294 },
            { perf_date: '2019-10-01', perf_amount_net: 0.020026528285, perf_amount_cum_net: 0.1331589904 },
        ],
        quarterly: [
            { perf_date: '2019-01-01', perf_amount_net: 0.001304739393, perf_amount_cum_net: 0.001304739393 },
            { perf_date: '2019-03-31', perf_amount_net: 0.0773648529, perf_amount_cum_net: 0.0773648529 },
            { perf_date: '2019-06-30', perf_amount_net: 0.0023356183, perf_amount_cum_net: 0.079881166 },
            { perf_date: '2019-09-30', perf_amount_net: 0.0493367475, perf_amount_cum_net: 0.1331589905 },
        ],
        semiAnnually: [
            { perf_date: '2019-01-01', perf_amount_net: 0.001304739393, perf_amount_cum_net: 0.001304739393 },
            {
                perf_date: '2019-06-30',
                perf_amount_net: 0.079881166064,
                perf_amount_cum_net: 0.0798811660644,
            },
            {
                perf_date: '2019-09-30',
                perf_amount_net: 0.0508713619044,
                perf_amount_cum_net: 0.133158990575,
            },
        ],
        yearly: [
            { perf_date: '2019-01-01', perf_amount_net: 0.001304739393, perf_amount_cum_net: 0.001304739393 },
            { perf_date: '2019-09-30', perf_amount_net: 0.133158990421, perf_amount_cum_net: 0.133158990421 },
        ],
    },
    oneYear: {
        monthly: [
            { perf_date: '2018-11-05', perf_amount_net: -0.00569249242, perf_amount_cum_net: -0.00569249242 },
            { perf_date: '2018-11-30', perf_amount_net: 0.000386735419, perf_amount_cum_net: 0.000386735419 },
            { perf_date: '2018-12-31', perf_amount_net: -0.035706987436, perf_amount_cum_net: -0.0353340611 },
            { perf_date: '2019-01-31', perf_amount_net: 0.028292636017, perf_amount_cum_net: -0.0080411188 },
            { perf_date: '2019-02-28', perf_amount_net: 0.017439851771, perf_amount_cum_net: 0.00925849696 },
            { perf_date: '2019-03-31', perf_amount_net: 0.029763118596, perf_amount_cum_net: 0.0392971773 },
            { perf_date: '2019-04-30', perf_amount_net: 0.010396660028, perf_amount_cum_net: 0.05010239672 },
            { perf_date: '2019-05-31', perf_amount_net: -0.021225825904, perf_amount_cum_net: 0.02781310606 },
            { perf_date: '2019-06-30', perf_amount_net: 0.013535021761, perf_amount_cum_net: 0.04172457882 },
            { perf_date: '2019-07-31', perf_amount_net: 0.02568735556, perf_amount_cum_net: 0.06848372847 },
            { perf_date: '2019-08-31', perf_amount_net: 0.002971086844, perf_amount_cum_net: 0.07165828642 },
            { perf_date: '2019-09-30', perf_amount_net: 0.020026528285, perf_amount_cum_net: 0.0931198814 },
        ],
        quarterly: [
            {
                perf_date: '2018-11-05',
                perf_amount_net: -0.000726249895,
                perf_amount_cum_net: -0.000726249895,
            },
            {
                perf_date: '2018-12-31',
                perf_amount_net: -0.03051586866,
                perf_amount_cum_net: -0.030515868660973,
            },
            {
                perf_date: '2019-03-31',
                perf_amount_net: 0.077364852966,
                perf_amount_cum_net: 0.0444881286132,
            },
            {
                perf_date: '2019-06-30',
                perf_amount_net: 0.002335618329,
                perf_amount_cum_net: 0.0469276542313,
            },
            {
                perf_date: '2019-09-30',
                perf_amount_net: 0.049336747584,
                perf_amount_cum_net: 0.0985796596473,
            },
        ],
        semiAnnually: [
            {
                perf_date: '2018-11-05',
                perf_amount_net: -0.000726249895,
                perf_amount_cum_net: -0.000726249895,
            },
            {
                perf_date: '2018-12-31',
                perf_amount_net: -0.03051586866,
                perf_amount_cum_net: -0.0305158686609,
            },
            {
                perf_date: '2019-06-30',
                perf_amount_net: 0.07803953334058,
                perf_amount_cum_net: 0.04692765423137,
            },
            {
                perf_date: '2019-09-30',
                perf_amount_net: 0.05087136190448,
                perf_amount_cum_net: 0.09857965964734,
            },
        ],
        yearly: [
            {
                perf_date: '2018-11-05',
                perf_amount_net: -0.119558413968,
                perf_amount_cum_net: -0.119558413968,
            },
            {
                perf_date: '2018-12-31',
                perf_amount_net: -0.145805495074,
                perf_amount_cum_net: -0.145805495074,
            },
            {
                perf_date: '2019-09-30',
                perf_amount_net: 0.133158990421,
                perf_amount_cum_net: -0.032061817174887928686154,
            },
        ],
    },
    threeYears: {
        monthly: [
            {
                perf_date: '2017-12-29',
                perf_amount_net: -0.004458209169,
                perf_amount_cum_net: -0.00445820916,
            },
            { perf_date: '2017-12-31', perf_amount_net: -0.00441646674, perf_amount_cum_net: -0.0044164667 },
            {
                perf_date: '2018-01-31',
                perf_amount_net: -0.014251951432,
                perf_amount_cum_net: -0.0186054749025204766283,
            },
            {
                perf_date: '2018-02-28',
                perf_amount_net: -0.013653622383,
                perf_amount_cum_net: -0.03200506515,
            },
            {
                perf_date: '2018-03-31',
                perf_amount_net: -0.000923451173,
                perf_amount_cum_net: -0.03289896121,
            },
            {
                perf_date: '2018-04-30',
                perf_amount_net: 0.040104611176,
                perf_amount_cum_net: 0.0058862499133,
            },
            {
                perf_date: '2018-05-31',
                perf_amount_net: -0.010330032647,
                perf_amount_cum_net: -0.00450458788,
            },
            {
                perf_date: '2018-06-30',
                perf_amount_net: 0.002902540824,
                perf_amount_cum_net: -0.001615121813,
            },
            {
                perf_date: '2018-07-31',
                perf_amount_net: 0.019112976322,
                perf_amount_cum_net: 0.0174669847234,
            },
            {
                perf_date: '2018-08-31',
                perf_amount_net: -0.134789956659,
                perf_amount_cum_net: -0.11967734604,
            },
            {
                perf_date: '2018-09-30',
                perf_amount_net: 0.000691385549,
                perf_amount_cum_net: -0.119068703688,
            },
            {
                perf_date: '2018-10-31',
                perf_amount_net: 0.000726716926,
                perf_amount_cum_net: -0.118428516004,
            },
            {
                perf_date: '2018-11-30',
                perf_amount_net: 0.000386735419,
                perf_amount_cum_net: -0.118087581087,
            },
            {
                perf_date: '2018-12-31',
                perf_amount_net: -0.035706987436,
                perf_amount_cum_net: -0.14957801674,
            },
            {
                perf_date: '2019-01-31',
                perf_amount_net: 0.028292636017,
                perf_amount_cum_net: -0.125517337115,
            },
            {
                perf_date: '2019-02-28',
                perf_amount_net: 0.017439851771,
                perf_amount_cum_net: -0.110266489098,
            },
            {
                perf_date: '2019-03-31',
                perf_amount_net: 0.029763118596,
                perf_amount_cum_net: -0.083785245095,
            },
            {
                perf_date: '2019-04-30',
                perf_amount_net: 0.010396660028,
                perf_amount_cum_net: -0.074259671775,
            },
            {
                perf_date: '2019-05-31',
                perf_amount_net: -0.021225825904,
                perf_amount_cum_net: -0.09390927481,
            },
            {
                perf_date: '2019-06-30',
                perf_amount_net: 0.013535021761,
                perf_amount_cum_net: -0.081645317132,
            },
            { perf_date: '2019-07-31', perf_amount_net: 0.02568735556, perf_amount_cum_net: -0.058055213863 },
            {
                perf_date: '2019-08-31',
                perf_amount_net: 0.002971086844,
                perf_amount_cum_net: -0.055256614101,
            },
            {
                perf_date: '2019-09-30',
                perf_amount_net: 0.020026528285,
                perf_amount_cum_net: -0.036336683961,
            },
        ],
        quarterly: [
            {
                perf_date: '2017-12-29',
                perf_amount_net: -0.004458209169,
                perf_amount_cum_net: -0.004458209169,
            },
            {
                perf_date: '2017-12-31',
                perf_amount_net: -0.00441646674,
                perf_amount_cum_net: -0.0044164667406,
            },
            {
                perf_date: '2018-03-31',
                perf_amount_net: -0.028608844492,
                perf_amount_cum_net: -0.0328989612229,
            },
            {
                perf_date: '2018-06-30',
                perf_amount_net: 0.0323480569064,
                perf_amount_cum_net: -0.0016151217863,
            },
            {
                perf_date: '2018-09-30',
                perf_amount_net: -0.117643590615,
                perf_amount_cum_net: -0.1190687036755,
            },
            {
                perf_date: '2018-12-31',
                perf_amount_net: -0.034633022132,
                perf_amount_cum_net: -0.1495780167586,
            },
            {
                perf_date: '2019-03-31',
                perf_amount_net: 0.0773648529663,
                perf_amount_cum_net: -0.0837852450658,
            },
            {
                perf_date: '2019-06-30',
                perf_amount_net: 0.0023356183294,
                perf_amount_cum_net: -0.0816453170905,
            },
            {
                perf_date: '2019-09-30',
                perf_amount_net: 0.0493367475844,
                perf_amount_cum_net: -0.0363366839068,
            },
        ],
        semiAnnually: [
            {
                perf_date: '2017-12-29',
                perf_amount_net: -0.004458209169,
                perf_amount_cum_net: -0.004458209169,
            },
            { perf_date: '2017-12-31', perf_amount_net: -0.00441646674, perf_amount_cum_net: -0.00441646674 },
            {
                perf_date: '2018-06-30',
                perf_amount_net: 0.0028211424071,
                perf_amount_cum_net: -0.001615121786,
            },
            {
                perf_date: '2018-12-31',
                perf_amount_net: -0.148009041206,
                perf_amount_cum_net: -0.149578016758,
            },
            {
                perf_date: '2019-06-30',
                perf_amount_net: 0.0780395333405,
                perf_amount_cum_net: -0.08164531709,
            },
            {
                perf_date: '2019-09-30',
                perf_amount_net: 0.0508713619044,
                perf_amount_cum_net: -0.036336683906,
            },
        ],
        yearly: [
            {
                perf_date: '2017-12-29',
                perf_amount_net: -0.004458209169,
                perf_amount_cum_net: -0.00445820916,
            },
            { perf_date: '2017-12-31', perf_amount_net: -0.00441646674, perf_amount_cum_net: -0.0044164667 },
            {
                perf_date: '2018-12-31',
                perf_amount_net: -0.145805495074,
                perf_amount_cum_net: -0.1495780166944964451612,
            },
            {
                perf_date: '2019-09-30',
                perf_amount_net: 0.133158990421,
                perf_amount_cum_net: -0.036336683965711075385,
            },
        ],
    },
};

export default () =>
    class extends Controller {
        onInit() {
            // this.store.init('mockupData', ...performanceData);
            this.addTrigger(
                'getData',
                ['view', 'period'],
                (view, period) => {
                    let performanceGraphData = performanceData[period][view];
                    performanceGraphData =
                        performanceGraphData &&
                        performanceGraphData.map(record => {
                            return {
                                x: new Date(record.perf_date),
                                y1: record.perf_amount_cum_net,
                                h: record.perf_amount_net,
                            };
                        });
                    this.store.set('performanceGraphData', performanceGraphData);
                },
                true,
            );

            this.addComputable('cursor.data', ['cursor.snapX', 'performanceGraphData'], (x, data) => {
                return Array.isArray(data) ? data.find(p => p.x == x) : null;
            });
        }
    };
