export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(Character) {
    if (this.members.has(Character)) {
      throw new Error('персонаж уже добавлен');
    } else {
      this.members.add(Character);
    }
  }

  addAll(...Characters) {
    Characters.forEach((Character) => this.members.add(Character));
  }

  toArray() {
    const arr = [];
    this.members.forEach((member) => arr.push(member));
    return arr;
  }
}
