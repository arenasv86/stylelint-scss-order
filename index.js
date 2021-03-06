// Custom Stylelint Config for Sass
// https://github.com/bjankord/stylelint-config-sass-guidelines

module.exports = {
  plugins: [
    'stylelint-order',
    'stylelint-scss',
  ],
  rules: {
    'at-rule-blacklist': [
      'debug',
    ],
    'at-rule-no-unknown': null,
    'at-rule-no-vendor-prefix': true,
    'block-no-empty': true,
    'block-opening-brace-space-before': 'always',
    'color-hex-case': 'lower',
    'color-hex-length': 'short',
    'color-named': 'never',
    'color-no-invalid-hex': true,
    'declaration-bang-space-after': 'never',
    'declaration-bang-space-before': 'always',
    'declaration-block-semicolon-newline-after': 'always',
    'declaration-block-semicolon-space-before': 'never',
    'declaration-block-single-line-max-declarations': 1,
    'declaration-block-trailing-semicolon': 'always',
    'declaration-colon-space-after': 'always-single-line',
    'declaration-colon-space-before': 'never',
    'declaration-property-value-blacklist': {
      border: [
        'none',
      ],
      'border-top': [
        'none',
      ],
      'border-right': [
        'none',
      ],
      'border-bottom': [
        'none',
      ],
      'border-left': [
        'none',
      ],
    },
    'function-comma-space-after': 'always-single-line',
    'function-parentheses-space-inside': 'never',
    'function-url-quotes': 'always',
    indentation: 2,
    'length-zero-no-unit': true,
    'max-nesting-depth': [
      3,
      {
        ignore: [
          'pseudo-classes',
        ],
        ignoreAtRules: [
          'each',
          'media',
          'supports',
          'include',
        ],
      },
    ],
    'media-feature-name-no-vendor-prefix': true,
    'media-feature-parentheses-space-inside': 'never',
    'no-missing-end-of-source-newline': true,
    'number-leading-zero': 'never',
    'number-no-trailing-zeros': null,
    'order/order': [
      [
        'custom-properties',
        'dollar-variables',
        {
          type: 'at-rule',
          name: 'extend',
        },
        {
          type: 'at-rule',
          name: 'include',
          hasBlock: false,
        },
        'declarations',
        {
          type: 'at-rule',
          name: 'include',
          parameter: 'breakpoint',
          hasBlock: true,
        },
        'rules',
      ],
    ],
    'order/properties-alphabetical-order': null,
    'order/properties-order': [[
      'content',
      'box-sizing',
      'display',
      'position',
      'top',
      'right',
      'bottom',
      'left',
      'z-index',
      'float',
      'clear',
      'flex',
      'flex-basis',
      'flex-direction',
      'flex-flow',
      'flex-grow',
      'flex-shrink',
      'flex-wrap',
      'align-items',
      'justify-content',
      'align-self',
      'order',
      'columns',
      'column',
      'grid',
      'width',
      'min-width',
      'max-width',
      'height',
      'min-height',
      'max-height',
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
      'overflow',
      'visibility',
      'opacity',
      'color',
      'font',
      'font-style',
      'font-weight',
      'font-size',
      'line-height',
      'font-family',
      'vertical-align',
      'text-align',
      'text-transform',
      'text',
      'white-space',
      'word-spacing',
      'letter-spacing',
      'background',
      'background-color',
      'background-image',
      'background-repeat',
      'background-position',
      'background-size',
      'border',
      'border-top',
      'border-right',
      'border-bottom',
      'border-left',
      'border-radius',
      'border-top-left-radius',
      'border-top-right-radius',
      'border-bottom-right-radius',
      'border-bottom-left-radius',
      'box-shadow',
      'transform',
      'transition',
      'animation',
    ], { unspecified: 'bottom' }],
    'property-no-unknown': true,
    'property-no-vendor-prefix': true,
    'rule-empty-line-before': [
      'always-multi-line',
      {
        ignore: [
          'after-comment',
        ],
      },
    ],
    'scss/at-extend-no-missing-placeholder': true,
    'scss/at-function-pattern': '^[a-z]+([a-z0-9-]+[a-z0-9]+)?$',
    'scss/at-import-no-partial-leading-underscore': true,
    'scss/at-import-partial-extension-blacklist': [
      'scss',
    ],
    'scss/at-mixin-pattern': '^[a-z]+([a-z0-9-]+[a-z0-9]+)?$',
    'scss/at-rule-no-unknown': true,
    'scss/dollar-variable-colon-space-after': 'always',
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/dollar-variable-pattern': '^[_]?[a-z]+([a-z0-9-]+[a-z0-9]+)?$',
    'scss/percent-placeholder-pattern': '^[a-z]+([a-z0-9-]+[a-z0-9]+)?$',
    'scss/selector-no-redundant-nesting-selector': true,
    // 'selector-class-pattern': [
    //   '^[a-z0-9\\-]+$',
    //   {
    //     message: 'Selector should be written in lowercase with hyphens (selector-class-pattern)',
    //   },
    // ],
    'selector-list-comma-newline-after': 'always',
    'selector-max-compound-selectors': 3,
    'selector-max-id': 0,
    'selector-no-qualifying-type': null, // No permite usar selectores
    'selector-no-vendor-prefix': true,
    'selector-pseudo-element-colon-notation': 'double',
    'selector-pseudo-element-no-unknown': true,
    'shorthand-property-no-redundant-values': true,
    'string-quotes': 'single',
    'value-no-vendor-prefix': true,
  },
};
