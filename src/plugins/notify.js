import { ToastSeverity } from 'primevue/api';

export default {
    install(app) {
        const handleShowToast = (type, title, summary, life = 3000) => {
            try {
                if (!type) throw new Error('Type is required');
                const mapTypeDefaultToast = {
                    [ToastSeverity.SUCCESS]: {
                        summary: 'Success Message',
                        detail: 'Message Content',
                    },

                    [ToastSeverity.ERROR]: {
                        summary: 'Error Message',
                        detail: 'Message Content',
                    },
                };
                app.config.globalProperties.$toast.add({
                    severity: type,
                    summary: summary || mapTypeDefaultToast[type].summary,
                    detail: title || mapTypeDefaultToast[type].detail,
                    life,
                });
            } catch (e) {
                console.log(e);
            }
        };
        app.provide('$toast', handleShowToast);
    },
};
