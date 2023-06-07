// class Publisher {
//   constructor(eventName) {
//     this.event = eventName;
//   }

//   subscribe(subscriber) {
//     document.addEventListener(this.event, subscriber);
//   }

//   publish(data) {
//     document.dispatchEvent(new CustomEvent(this.event, { detail: data }))
//   }
// }

// export { Publisher }


class Publisher {
  constructor(eventName) {
    this.event = new Event(eventName);
  }

  subscribe(subscriber) {
    document.addEventListener(this.event.type, subscriber);
  }

  publish(data) {
    document.dispatchEvent(new CustomEvent(this.event.type, { detail: data }));
  }
}

export { Publisher };