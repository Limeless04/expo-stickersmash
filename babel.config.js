module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",
        {
          "root": ["./"],
          "alias": {
            "@components": "./app/components",
            "@screens": "./app/screens",
            "@stores": "./app/stores",
            "@utils": "./app/utils",
            "@services": "./app/services",
            "@assets": "./assets",
            "@constants": "./app/constants"
          }
        },
      ],
    ],
  };
};
