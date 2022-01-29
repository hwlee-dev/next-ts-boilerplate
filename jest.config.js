module.exports = {
  "transform" : {
    '^.+\\.[jt]sx?$': `ts-jest`,
  },
  "testEnvironment": "node",
  "testRegex": "/__tests__/.*\\.(test|spec)\\.(t|j)sx?$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
  ],
  "transformIgnorePatterns": [
    "node_modules"
  ],
  "coveragePathIgnorePatterns": [
    "/node_modules/",
    "/__tests__/",
  ],
  "maxWorkers": 1,
  "globals": {
    "ts-jest": {
      "diagnostics": true,
      "isolatedModules": true
    }
  },
  "moduleNameMapper": {
    "^@interfaces/(.*)": '<rootDir>/src/shared/interfaces/$1',
    "^@enums/(.*)": '<rootDir>/src/shared/enums/$1',
    "^@components/(.*)": '<rootDir>/src/client/components/$1',
    "^@constants/(.*)": '<rootDir>/src/client/constants/$1',
    "^@env/(.*)": '<rootDir>/src/client/env/$1',
    "^@libs/(.*)": '<rootDir>/src/client/libs/$1',
    "^@repositories/(.*)": '<rootDir>/src/client/repositories/$1',
    "^@store/(.*)": '<rootDir>/src/client/store/$1',
    "^@styles/(.*)": '<rootDir>/src/client/styles/$1',
    "^@utils/(.*)": '<rootDir>/src/client/utils/$1',
    "^@shared/(.*)": '<rootDir>/src/shared/$1',
    "^@client/(.*)": '<rootDir>/src/client/$1',
    "^@server/(.*)": '<rootDir>/src/server/$1',
    "^@public/(.*)": '<rootDir>/public/$1',
  }
};
