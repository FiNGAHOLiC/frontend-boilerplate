export default function fetchItemData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: [
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
        ],
      });
    }, 1000);
  });
}
