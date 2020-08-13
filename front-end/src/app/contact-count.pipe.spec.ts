import { ContactCountPipe } from './contact-count.pipe';

describe('ContactCountPipe', () => {
  it('create an instance', () => {
    const pipe = new ContactCountPipe();
    expect(pipe).toBeTruthy();
  });
});
