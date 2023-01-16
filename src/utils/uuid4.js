/* eslint-disable */
export function uuid4Basic() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export function uuid4Crypto(crypto) {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
}

export default function uuid4() {
  if (typeof window !== 'undefined') {
    const cryptoObj = window.crypto || window.msCrypto; // for IE 11

    if (cryptoObj && 'getRandomValues' in cryptoObj) {
      return uuid4Crypto(cryptoObj);
    }
  }

  return uuid4Basic();
}
