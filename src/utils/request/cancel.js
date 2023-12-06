const cancelerMap = new Map();

class RequestCancel {

    // 获取实例
    static getInstance() {
        if (!this._instance) {
            this._instance = new RequestCancel()
        }
        return this._instance
    }

    add(url, requestTask) {
        this.remove(url);
        if (cancelerMap.has(url)) {
            cancelerMap.delete(url);
        }
        cancelerMap.set(url, requestTask);
    }

    remove(url) {
        if (cancelerMap.has(url)) {
            const requestTask = cancelerMap.get(url);
            requestTask && requestTask.abort();
            cancelerMap.delete(url);
        }
    }
}

const requestCancel = RequestCancel.getInstance();

export default requestCancel;