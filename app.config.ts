export default ({ config }) => ({
    ...config,
    extra: {
        STORYBOOK_ENABLED: process.env.STORYBOOK_ENABLED,
    },
})