import Magician from '../magician';
import Daemon from '../daemon';

test('should to return value of distantly attack', () => {
  const received = new Magician('Gendalf', 'Magician', 3);
  expect(received.attack).toBe(8);
});

test('should to return value of distantly attack without stoned', () => {
  const received = new Daemon('Oleg', 'Daemon', 2);
  received.attack = 100;
  expect(received.attack).toBe(90);
});

test('should to return value of distantly attack with stoned', () => {
  const received = new Daemon('Oleg', 'Daemon', 2);
  received.attack = 100;
  received.stoned = true;
  expect(received.attack).toBe(85);
});

test('should not to return nagetive valeu of attack', () => {
  const received = new Magician('Gendalf', 'Magician', 5);
  received.attack = -1;
  expect(received.attack).toBe(0);
});
