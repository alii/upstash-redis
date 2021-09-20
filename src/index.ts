import client from './client';

export default client;

const {
  auth,
  // STRING
  append,
  decr,
  decrby,
  get,
  getrange,
  getset,
  incr,
  incrby,
  incrbyfloat,
  mget,
  mset,
  msetnx,
  psetex,
  set,
  setex,
  setnx,
  setrange,
  strlen,
  // BITMAPS
  bitcount,
  bitop,
  bitpos,
  getbit,
  setbit,
  // CONNECTION
  echo,
  ping,
  // KEYS
  del,
  exists,
  expire,
  expireat,
  keys,
  persist,
  pexpire,
  pexpireat,
  pttl,
  randomkey,
  rename,
  renamenx,
  scan,
  touch,
  ttl,
  type,
  unlink,
  // SERVER
  dbsize,
  flushall,
  flushdb,
  info,
  time,
} = client();

export {
  auth,
  // STRING
  append,
  decr,
  decrby,
  get,
  getrange,
  getset,
  incr,
  incrby,
  incrbyfloat,
  mget,
  mset,
  msetnx,
  psetex,
  set,
  setex,
  setnx,
  setrange,
  strlen,
  // BITMAPS
  bitcount,
  bitop,
  bitpos,
  getbit,
  setbit,
  // CONNECTION
  echo,
  ping,
  // KEYS
  del,
  exists,
  expire,
  expireat,
  keys,
  persist,
  pexpire,
  pexpireat,
  pttl,
  randomkey,
  rename,
  renamenx,
  scan,
  touch,
  ttl,
  type,
  unlink,
  // SERVER
  dbsize,
  flushall,
  flushdb,
  info,
  time,
};
