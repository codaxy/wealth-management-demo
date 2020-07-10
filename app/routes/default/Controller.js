import { Controller } from 'cx/ui';
import { sameDate, zeroTime } from 'cx/util';
import { oneOf } from '../../util/oneOf';

function getInitialAppointments() {
    let result = {};
    for (let i = 0; i < 100; i++) {
        let time = Date.now() + (i - 10) * 2000 * 60 * 1000;
        let dateStr = zeroTime(new Date(time)).toISOString();
        let list = result[dateStr];
        if (!list) list = result[dateStr] = [];
        let clientId = oneOf(['1', '2', '3']);
        list.push({
            id: i + 1,
            time,
            clientId,
            text: `Meeting with Demo Client #${clientId}`,
        });
    }
    return result;
}

export default class extends Controller {
    onInit() {
        this.store.init('month', zeroTime(new Date()).toISOString());
        this.store.set('today', zeroTime(new Date()).toISOString());
        this.store.init('mode', 'month');

        this.store.init('appointments', getInitialAppointments());

        this.addComputable('weeks', ['month', 'items'], (startDate, data) => {
            let weeks = [];
            let date = new Date(startDate);
            let month = date.getMonth();
            date = new Date(date.getFullYear(), month, 1);

            //find first Monday
            while (date.getDay() != 1) date.setDate(date.getDate() - 1);

            do {
                let days = [];

                for (let day = 0; day < 7; day++) {
                    let hours = null,
                        active = date.getMonth() == month;

                    if (data && active)
                        hours = data
                            .filter(x => sameDate(new Date(x.date), date))
                            .reduce((acc, x) => acc + x.hours, 0);

                    days.push({
                        day: date.getDate(),
                        date: date.toISOString(),
                        active,
                        hours: hours > 0 ? hours : null,
                    });

                    date.setDate(date.getDate() + 1);
                }

                weeks.push({
                    days,
                });
            } while (date.getMonth() == month);

            return weeks;
        });
    }

    onSelectDay(e, { store }) {
        store.copy('$record.date', 'month');
    }

    onSelectNextMonth() {
        this.store.update('month', m => new Date(Date.parse(m) + 30 * 24 * 60 * 60 * 1000).toISOString());
    }

    onSelectPrevMonth() {
        this.store.update('month', m => new Date(Date.parse(m) - 30 * 24 * 60 * 60 * 1000).toISOString());
    }
}
