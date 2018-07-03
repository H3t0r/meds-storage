exports.files = {
  javascripts: {
    joinTo: {
      'vendor.js': /^(?!app)/,
      'app.js': /^app/
    },
    order: {
      before: ['app/**/*.module.js']
    }
  },
  stylesheets: {
    joinTo: {
      'css/vendor.css': /^(?!app)/,
      'css/app.css': /^app/
    }
  }
};

exports.npm = {
  globals: {
    $: 'jquery',
    jQuery: 'jquery',
    semantic: 'semantic-ui-css'
  },
  styles: {
    'semantic-ui-css': ['semantic.css']
  }
};

exports.plugins = {
  eslint: {
    pattern: /^app\/.*\.js?$/
  },
  babel: {
    presets: [
      [
        'env',
        {
          targets: {
            browsers: ['last 2 versions']
          }
        }
      ]
    ]
  },
  htmlPages: {},
  copycat: {
    'css/themes': ['node_modules/semantic-ui-css/themes'],
    onlyChanged: true,
    verbose: false
  }
};
