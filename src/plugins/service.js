import UserRepository from '@/service/repositories/user';

const repositoriesMap = {
    users: UserRepository,

};
export const factoryRepositories = name => {
    return repositoriesMap[name] || '';
};

