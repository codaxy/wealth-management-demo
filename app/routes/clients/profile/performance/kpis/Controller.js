import { Controller } from 'cx/ui';

const performanceReporting = {
    ytd: [
        { label: 'Initial assets', value: 686263.89098 },
        { label: 'Total in/out flows', value: 1.130737 },
        { label: 'Net result', value: 164625.074234572764 },
        { label: 'P&L FX contr.', value: 746.698242657277 },
        { label: 'P&L FX hedge', value: 0.013609999959 },
        { label: 'Current assets', value: 850890.095951572764 },
        { label: 'Market P&L realized', value: 0 },
        { label: 'Market P&L unrealized', value: 160595.931930872764 },
        { label: 'Currencies P&L realized', value: 0 },
        { label: 'Currencies P&L unrealized', value: 4.8838286 },
        { label: 'Mgmt Fees', value: 0 },
        { label: 'Perf. Fees', value: 0 },
        { label: 'Operations Fees', value: 0 },
        { label: 'Deposit Fees', value: -1.0011 },
        { label: 'Taxes', value: 0 },
        { label: 'Withholding Taxes', value: 0 },
    ],
    oneYear: [
        { label: 'Initial assets on 12/31/2018', value: 686263.89098 },
        { label: 'Total in/out flows', value: 1.130737 },
        { label: 'Net result', value: 164625.074234572764 },
        { label: 'P&L FX contr.', value: 746.698242657277 },
        { label: 'P&L FX hedge', value: 0.013609999959 },
        { label: 'Assets on 11/4/2019', value: 850890.095951572764 },
        { label: 'Realized vs. unrealized', value: '' },
        { label: 'Market P&L realized', value: 0 },
        { label: 'Market P&L unrealized', value: 1620595.931930872764 },
        { label: 'Currencies P&L realized', value: 0 },
        { label: 'Currencies P&L unrealisiert', value: 4.8838286 },
        { label: 'Fees', value: '' },
        { label: 'Mgmt Fees', value: 0 },
        { label: 'Perf. Fees', value: 0 },
        { label: 'Operations Fees', value: 0 },
        { label: 'Deposit Fees', value: -1.0011 },
        { label: 'Taxes', value: '' },
        { label: 'Taxes', value: 0 },
        { label: 'Withholding Taxes', value: 0 },
    ],
    threeYears: [
        { label: 'Initial assets on 12/31/2018', value: 686263.89098 },
        { label: 'Total in/out flows', value: 1.130737 },
        { label: 'Net result', value: 16463225.074234572764 },
        { label: 'P&L FX contr.', value: 746.698242657277 },
        { label: 'P&L FX hedge', value: 0.013609999959 },
        { label: 'Assets on 11/4/2019', value: 850890.095951572764 },
        { label: 'Realized vs. unrealized', value: '' },
        { label: 'Market P&L realized', value: 0 },
        { label: 'Market P&L unrealized', value: 160595.931930872764 },
        { label: 'Currencies P&L realized', value: 0 },
        { label: 'Currencies P&L unrealisiert', value: 4.8838286 },
        { label: 'Fees', value: '' },
        { label: 'Mgmt Fees', value: 0 },
        { label: 'Perf. Fees', value: 0 },
        { label: 'Operations Fees', value: 0 },
        { label: 'Deposit Fees', value: -1.0011 },
        { label: 'Taxes', value: '' },
        { label: 'Taxes', value: 0 },
        { label: 'Withholding Taxes', value: 0 },
    ],
};

export default () =>
    class extends Controller {
        onInit() {
            // this.store.init('mockupData', ...performanceData);
            this.addTrigger(
                'getReportingData',
                ['period', 'clientId'],
                period => {
                    let performanceReportingData = performanceReporting[period];
                    this.store.set('performanceReportingData', performanceReportingData);
                },
                true,
            );
        }
    };
