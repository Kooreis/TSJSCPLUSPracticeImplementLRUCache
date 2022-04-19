# Question: How would you implement an LRU (Least Recently Used) cache? JavaScript Summary

The provided JavaScript code implements a Least Recently Used (LRU) cache. The LRU cache is a type of cache in which the least recently used entries are removed when the cache's capacity has been reached. The code defines a class, LRUCache, with a constructor that sets the cache's capacity and initializes the cache as a new Map object. The class has two methods: get and put. The get method checks if a key exists in the cache. If it does, it removes the key-value pair, reinserts it (thus updating its "recently used" status), and returns the value. If the key does not exist, it returns -1. The put method is used to add new key-value pairs to the cache. If the key already exists, it removes the existing key-value pair before adding the new one. If the cache is at capacity, it removes the least recently used key-value pair (the first one in the Map object, due to the Map's insertion order memory) before adding the new one. This way, the cache never exceeds its set capacity, and the least recently used items are always removed first.

---

# TypeScript Differences

The TypeScript version of the LRU Cache implementation is almost identical to the JavaScript version. The main difference is that TypeScript includes type annotations, which provide a way to enforce certain types of values. This can help catch errors during development and make the code easier to understand and maintain.

In the TypeScript version, the `capacity` property is explicitly declared as a number, and the `cache` property is declared as a `Map<number, number>`, indicating that it is a Map where both the keys and values are numbers. 

The `get` method is declared to take a number as an argument and return a number. The `put` method is declared to take two numbers as arguments and return nothing (`void`).

These type annotations help ensure that the LRU Cache is used correctly. For example, if you tried to create a cache with a non-number capacity, or tried to put a non-number key or value into the cache, the TypeScript compiler would give an error.

In contrast, the JavaScript version does not have any type enforcement. You could create a cache with a non-number capacity or put a non-number key or value into the cache, and JavaScript would not give any errors until runtime, if at all. This could potentially lead to subtle bugs that are hard to track down.

---

# C++ Differences

The C++ version of the LRU Cache implementation uses a doubly-linked list (`std::list`) and a hash map (`std::unordered_map`) to store the cache items. The list is used to store the keys of the cache in order of usage, with the most recently used keys at the front and the least recently used keys at the back. The map is used to store the keys and their corresponding iterators in the list, allowing for quick access to any key in the list.

The `refer` function in the C++ version is equivalent to the `get` and `put` functions in the JavaScript version. If the key is not found in the map, it checks if the cache is full. If the cache is full, it removes the least recently used item from the back of the list and also removes it from the map. Then it adds the new key to the front of the list and updates the map with the new key and its iterator. If the key is found in the map, it removes the key from its current position in the list and adds it to the front of the list, then updates the map with the new iterator.

The `display` function in the C++ version is used to print the keys in the cache in order of usage, from most recently used to least recently used. This function does not have an equivalent in the JavaScript version.

The main differences between the JavaScript and C++ versions are the data structures used to implement the cache and the way the cache items are accessed and updated. The JavaScript version uses a `Map` object, which maintains the insertion order of the keys, allowing it to easily remove the least recently used item when the cache is full. The C++ version uses a `std::list` and `std::unordered_map`, which require more manual management of the order of the keys. However, the C++ version allows for faster access to any key in the cache, as it can directly access the key in the list using the iterator stored in the map.

---
