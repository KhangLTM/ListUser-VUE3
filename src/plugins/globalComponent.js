const requireBaseComponents = import.meta.globEager('@/components/base/*.vue');

export default {
    install(app) {
        // Base
        Object.entries(requireBaseComponents).forEach(([path, m]) => {
            const componentName = path
                .split('/')
                .pop()
                .replace(/\.\w+$/, '');
            app.component(componentName, m.default);
        });
    },
};
