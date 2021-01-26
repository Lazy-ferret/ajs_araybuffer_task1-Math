import Character from './character';

export default class MathChar extends Character {
  constructor(name, type, distance) {
    super(name, type);
    this.distance = distance;
    this.attack = 10;
    this.defence = 40;
    this.stoned = false;
  }

  set stoned(value) {
    this._stoned = value;
  }

  get stoned() {
    return this._stoned;
  }

  set attack(value) {
    this._attack = value;
  }

  get attack() {
    let attack = this._attack * ((11 - this.distance) / 10);
    if (this.stoned) {
      attack -= Math.log2(this.distance) * 5;
    }
    return (attack > 0) ? Math.round(attack) : 0;
  }
}
