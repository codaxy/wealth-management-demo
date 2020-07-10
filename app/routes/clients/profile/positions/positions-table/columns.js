import { computable } from 'cx/ui';
import { Format } from 'cx/util';
import { TreeNode } from 'cx/widgets';

export const positionsColumns = [
    {
        field: 'pcomp_name',
        header: 'Description',
        style: 'min-width: 120px',
        // items: (
        //     <cx>
        //         <TreeNode
        //             expanded-bind="$record.$expanded"
        //             leaf-bind="$record.element_leaf"
        //             level-bind="$record.$level"
        //             loading-bind="$record.$loading"
        //             text-bind="$record.pcomp_name"
        //         />
        //     </cx>
        // )
    },
    {
        field: 'pcomp_amount',
        header: 'Quantity',
        format: 'n;2',
        class: computable('$record.pcomp_amount', value => (value < 0 ? 'negative-value' : '')),
        footer: computable('data.totals.positionsCount', posCount => {
            if (!posCount) return;
            return posCount === 1 ? `${posCount} position` : `${posCount} positions}`;
        }),
        align: 'right',
    },
    {
        field: 'custody_display_name',
        header: 'Bank',
    },
    {
        field: 'pcomp_currency',
        header: 'Currency',
        align: 'right',
    },
    {
        field: 'inst_quote',
        header: 'Price',
        items: (
            <cx>
                <div
                    text={computable('$record', record => {
                        return Format.value(record.inst_quote, 'n;2');
                    })}
                />
            </cx>
        ),
        align: 'right',
    },
    {
        field: 'pcomp_pl_si_unreal_pf_currency',
        header: 'Unr. P&L',
        align: 'right',
        format: 'n;2',
        sortable: true,
        class: computable('$record.pcomp_pl_si_unreal_pf_currency', value =>
            value < 0 ? 'negative-value' : '',
        ),
    },
    // {
    //     field: 'prc',
    //     header: "PRC",
    //     format: 'n;0',
    //     align: 'right',
    //     items: () => <cx><div visible-bind='$record.element_leaf' text={Math.round(Math.random()*10)} /></cx>
    // },
    {
        field: 'annualized_vol',
        header: 'Annualized Vol.',
        format: 'p;1;2',
        align: 'right',
    },
    {
        field: 'pcomp_value_w_ai_pf_currency',
        header: 'Amount',
        style: 'width: 80px',
        align: 'right',
        format: 'n;2',
        footer: { tpl: '{data.totals.pcomp_value_w_ai_pf_currency:n;2}' },
    },
];
