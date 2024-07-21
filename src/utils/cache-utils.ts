import NodeCache from "node-cache";

export class HotelCache {
  private cache: NodeCache;

  constructor(ttl: number = 60) {
    this.cache = new NodeCache({ stdTTL: ttl, checkperiod: ttl * 0.2 });
  }

  set(key: string, value: any, ttl: number = 60) {
    this.cache.set(key, value, ttl);
  }

  get(key: string) {
    return this.cache.get(key);
  }

  del(key: string) {
    this.cache.del(key);
  }
}
