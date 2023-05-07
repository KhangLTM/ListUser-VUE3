import { reactive, ref, watch } from 'vue';
import { factoryRepositories } from '@/plugins/service.js';
import get from 'lodash/get';
import cloneDeep from 'lodash/cloneDeep';
const initConfig = {
    fieldResponse: 'data.data', // field for result response data
    filterChangeFetch: true,
    immediate: true,
};

const initFetchContext = reactive({
    loading: false,
    data: [],
    metaData: {}, // for paginate purpose
});

const initQuery = {
    page: 1,
};

const useFetchData = (service, action, query, config) => {
    try {
        const finalConfig = {
            ...initConfig,
            ...config,
        };
        const resultQuery = ref({});

        resultQuery.value = {
            ...initQuery,
            ...cloneDeep(query),
        };

        const fetchContext = reactive(cloneDeep(initFetchContext));

        const fetchData = async () => {
            fetchContext.loading = true;
            try {
                const repositoryService = factoryRepositories(service);
                const response = await repositoryService[action](
                    resultQuery.value
                );
                fetchContext.metaData = response.data;
                fetchContext.data = get(
                    response,
                    `${finalConfig.fieldResponse}`,
                    []
                );
            } catch (e) {
                console.log(e);
            } finally {
                fetchContext.loading = false;
            }
        };
        if (finalConfig.immediate) fetchData(); //Fetch data when component created

        watch(resultQuery.value, async () => {
            if (!finalConfig.filterChangeFetch) return;
            fetchData();
        });
        return { fetchContext, resultQuery, fetchData };
    } catch (e) {
        console.log(e);
    }
};

export default useFetchData;
