// module.exports = {
//     collectCoverage: true,
//     collectCoverageFrom: ['src/**/*.{js,jsx}'],
//     coverageDirectory: 'coverage',
//     testEnvironment: 'jsdom',
//     setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
// }
module.exports = {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
    moduleNameMapper: {
        '\\.(css|scss)$': 'identity-obj-proxy'
    }
}