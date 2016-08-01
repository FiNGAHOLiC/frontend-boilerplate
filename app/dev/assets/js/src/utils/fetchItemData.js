import Promise from 'bluebird';

const DATA = [
  {
    title: 'すごいHTML',
    author: 'HTML好き夫',
    desc: 'HTMLのココがすごい！これさえ読めばHTMLのすごい使い方がわかるすごい本です。',
    price: 800,
  },
  {
    title: 'すごいHTML',
    author: 'HTML好き夫',
    desc: 'HTMLのココがすごい！これさえ読めばHTMLのすごい使い方がわかるすごい本です。',
    price: 800,
  },
  {
    title: 'すごいHTML',
    author: 'HTML好き夫',
    desc: 'HTMLのココがすごい！これさえ読めばHTMLのすごい使い方がわかるすごい本です。',
    price: 800,
  },
];

export default function fetchItemData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: DATA,
      });
    }, 1000);
  });
}
