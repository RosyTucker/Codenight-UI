import { expect } from '../TestHelpers';
import Utils from '../../src/client/js/common/Utils';

describe('Utils.js', () => {
  describe('formattedDate', () => {
    it('should return a formatted date', () => {
      const date = '2016-06-13T09:54:51';
      expect(Utils.formattedDate(date)).to.equal('13th Jun 16');
    });
  });

  describe('formattedTime', () => {
    it('should return a formatted date', () => {
      const date = '2015-04-13T09:54:51';

      expect(Utils.formattedTime(date)).to.equal('09:54 am');
    });
  });
});
