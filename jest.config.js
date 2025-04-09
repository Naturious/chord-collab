module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	moduleNameMapper: {
		"^@utils/(.*)$": "<rootDir>/src/utils/$1",
		"^@components/(.*)$": "<rootDir>/src/components/$1"
	}
};
