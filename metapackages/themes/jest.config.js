module.exports = {
    transform: {
        '.(ts|tsx)': 'ts-jest'
    },
    testEnvironment: 'node',
    testRegex: '(/__specs__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
    moduleFileExtensions: [
        'ts',
        'tsx',
        'js'
    ],
    testPathIgnorePatterns: [
        '/node_modules/',
        '/fixtures/',
    ],
    collectCoverage: true,
    coveragePathIgnorePatterns: [
        '/node_modules/',
        '/fixtures/',
        '/dist/'
    ],
    coverageThreshold: {
        global: {
            branches: 90,
            functions: 95,
            lines: 95,
            statements: 95
        }
    },
    collectCoverageFrom: [
        'src/*.{js,ts}'
    ]
}
