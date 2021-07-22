const Notifier = {

    hasPermission: false,

    async init() {
        const permissionRequest = await Notification.requestPermission();
        if (permissionRequest !== 'granted') {
            throw new Error('ERROR! Permission to access notifier denied');
        }
        
        this.hasPermission = true;
        return true;
    },

    notify({ title, body, icon }) {
        if (this.hasPermission) {
            const options = {
                body,
                icon
            }
            new Notification(title, options);
        }
    }
};

export default Notifier;