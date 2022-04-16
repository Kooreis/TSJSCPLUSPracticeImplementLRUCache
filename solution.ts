Here is a TypeScript implementation of an LRU Cache:

```typescript
class LRUCache {
    capacity: number;
    cache: Map<number, number>;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.cache = new Map();
    }

    get(key: number): number {
        if (!this.cache.has(key)) {
            return -1;
        }
        const temp = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, temp);
        return temp;
    }

    put(key: number, value: number): void {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        } else if (this.cache.size >= this.capacity) {
            this.cache.delete(this.cache.keys().next().value);
        }
        this.cache.set(key, value);
    }
}

let lruCache = new LRUCache(2);
lruCache.put(1, 1);
lruCache.put(2, 2);
console.log(lruCache.get(1)); // returns 1
lruCache.put(3, 3); // evicts key 2
console.log(lruCache.get(2)); // returns -1 (not found)
lruCache.put(4, 4); // evicts key 1
console.log(lruCache.get(1)); // returns -1 (not found)
console.log(lruCache.get(3)); // returns 3
console.log(lruCache.get(4)); // returns 4
```

This code creates a class `LRUCache` with two methods `get` and `put`. The `get` method retrieves the value of the key if the key exists, and returns -1 if the key doesn't exist. The `put` method inserts the value if the key is not already present. When the cache reaches its capacity, it should invalidate the least recently used item before inserting the new item. The `Map` object is used to store the cache items, as it maintains the insertion order of the keys, which is used to determine the least recently used item.