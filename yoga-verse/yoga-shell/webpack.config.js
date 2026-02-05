const { withModuleFederationPlugin, shareAll } =
  require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  remotes: {
    'classes-mfe': 'http://localhost:4201/remoteEntry.js',
  },
  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
    }),
  },
});
