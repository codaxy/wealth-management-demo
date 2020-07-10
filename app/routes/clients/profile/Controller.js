import clients from '../data';

export default {
    onInit() {
        let clientId = this.store.get('$route.clientId');
        let data = clients.find(c => c.id == clientId);
        this.store.set('$page.profile', data);
        this.store.set('$page.tab', 'performance');
    },
};
