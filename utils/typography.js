import Typography from 'typography'
import { GoogleFont } from 'react-typography'
import CodePlugin from 'typography-plugin-code'

const options = {
  googleFonts: [
    {
      name: 'Noto',
      styles: [
        '400',
        '400i',
        '700'
      ]
    }
  ],
  headerFontFamily: ['Noto', 'sans-serif'],
  headerWeight: '700',
  bodyFontFamily: ['Noto', 'sans-serif'],
  bodyWeight: '400',
  baseFontSize: '20px',
  boldWeight: '700',
  scale: 2,
  plugins: [
    new CodePlugin(),
  ],
}

const typography = new Typography(options)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
