import md5 from 'js-md5';

export const apiKey = () => {
  const PUBLIC_KEY = 'baed8c0c2e0ff7dc269c422c3d167384';
  const PRIVATE_KEY = '8bbab395698721e31585933478a363bec3606f27';

  const timestamp = new Date().getTime();
  const hash = md5.create();

  hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY);
  const params = `ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash}`;

  return params;
};
