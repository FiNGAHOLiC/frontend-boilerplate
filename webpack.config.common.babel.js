import path from 'path';

export default {
  context: path.join(__dirname, 'app', 'dev'),
  entry: {
    app: [
      './assets/js/src/Main.jsx',
    ],
  },
  plugins: [],
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
