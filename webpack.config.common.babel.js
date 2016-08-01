import path from 'path';
import precss from 'precss';
import autoprefixer from 'autoprefixer';

export default {
  context: path.join(__dirname, 'app', 'dev'),
  entry: {
    app: [
      './assets/js/src/Main.jsx',
    ],
  },
  postcss: [
    precss,
    autoprefixer,
  ],
  plugins: [],
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
