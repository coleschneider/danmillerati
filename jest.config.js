module.exports = {
    cacheDirectory: "<rootDir>/jestCache",
    verbose: false,
    collectCoverageFrom: ["src/**/*.{js,jsx,mjs,ts,tsx}"],
    setupFiles: [
        "react-app-polyfill/jsdom",
        "<rootDir>/node_modules/regenerator-runtime/runtime"
    ],
    setupFilesAfterEnv: ["<rootDir>config/jest/setup.js"],
    testMatch: ["<rootDir>/src/**/*.(spec|test).{js,jsx,mjs,ts,tsx}"],
    testEnvironment: "jsdom",
    testURL: "http://localhost",
    transform: {
        "^.+\\.(js|jsx|mjs|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
        "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
        "^(?!.*\\.(js|jsx|mjs|ts|tsx|css|json)$)":
            "<rootDir>/config/jest/fileTransform.js"
    },
    moduleNameMapper: {
        "^react-native$": "react-native-web",
        "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy"
    },
    transformIgnorePatterns: [
        "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx|mjs)$"
    ],
    moduleFileExtensions: ["js", "json", "jsx", "node", "mjs", "ts", "tsx"],
    watchPlugins: [
        "jest-watch-typeahead/filename",
        "jest-watch-typeahead/testname"
    ]
};
