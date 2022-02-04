class Storage {
  constructor(key, options = { storageType: 'localStorage', defaultValue: null }) {
    this.key = key;
    this.default = options.defaultValue ?? null;
    this.value = this.default;
    this.type = options.storageType ?? 'localStorage';
    this.set(this.value);
  }

  get() {
    return window[this.type].getItem(this.key)
  }

  set(value) {
    this.value = value;
    window[this.type].setItem(this.key, this.value);
  }

  clear() {
    this.value = this.defaultValue;
    this.set(this.value);
  }

  isEmpty() {
    return [ null, undefined ].includes(this.value)
  }
}