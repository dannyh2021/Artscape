module.exports = {
    users: () => {
        console.log('resolvers users');
        const test = {
            id: 1,
            username: 1,
            email: 1
        }
        return [test];
    }
};