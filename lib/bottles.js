import { downTo } from './helpers';

export class Bottles {
  song() {
    return this.verses(99, 0);
  }

  verse(number) {
    switch (number) {
      case 0:
        return (
          'No more bottles of beer on the wall, ' +
          'no more bottles of beer.\n' +
          'Go to the store and buy some more, ' +
          '99 bottles of beer on the wall.\n'
        );

      case 1:
        return (
          '1 bottle of beer on the wall, ' +
          '1 bottle of beer.\n' +
          'Take it down and pass it around, ' +
          'no more bottles of beer on the wall.\n'
        );

      case 2:
        return (
          '2 bottles of beer on the wall, ' +
          '2 bottles of beer.\n' +
          'Take one down and pass it around, ' +
          '1 bottle of beer on the wall.\n'
        );

      default:
        return (
          `${number} bottles of beer on the wall, ` +
          `${number} bottles of beer.\n` +
          `Take one down and pass it around, ` +
          `${number - 1} bottles of beer on the wall.\n`
        );
    }
    return `${n === 0 ? 'No more' : n} bottle${
      n !== 1 ? 's' : ''
    } of beer on the wall, ${n === 0 ? 'no more' : n} bottle${
      n !== 1 ? 's' : ''
    } of beer.\n${
      n === 0
        ? 'Go to the store and buy some more, ' +
          '99 bottles of beer on the wall.\n'
        : 'Take '
    }${n === 1 ? 'it' : ''}${n !== 0 && n !== 1 ? 'one' : ''}${
      n !== 0 ? ' down and pass it around, ' : ''
    }${
      n - 1 !== 0 && n - 1 > 1 ? `${n - 1} bottles of beer on the wall.\n` : ''
    }${n === 2 ? '1 bottle of beer on the wall.\n' : ''}${
      n === 1 ? 'no more bottles of beer on the wall.\n' : ''
    }`;
  }

  verses(max, min) {
    return downTo(max, min)
      .map((n) => this.verse(n))
      .join('\n');
  }
}
