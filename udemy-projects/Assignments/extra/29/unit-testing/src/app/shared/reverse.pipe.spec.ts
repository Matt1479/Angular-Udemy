import { ReversePipe } from './reverse.pipe';

describe('Reverse Pipe', () => {
  it('should reverse a string', () => {
    let reversePipe = new ReversePipe();
    expect(reversePipe.transform('hello')).toEqual('olleh');
  });
});
