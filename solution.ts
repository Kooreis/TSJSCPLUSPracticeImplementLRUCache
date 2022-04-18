get(key: number): number {
        if (!this.cache.has(key)) {
            return -1;
        }
        const temp = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, temp);
        return temp;
    }