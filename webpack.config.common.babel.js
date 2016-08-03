import path from 'path';
import precss from 'precss';
import autoprefixer from 'autoprefixer';

export default {
  context: path.join(__dirname, 'app', 'dev'),
  entry: {
    app: [
      // PromiseやArray.from、Object.assign等のES6構文を使用可能にする
      // https://babeljs.io/docs/usage/polyfill/
      // http://qiita.com/inuscript/items/d2a9d5d4daedaacff924
      'babel-polyfill',
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
