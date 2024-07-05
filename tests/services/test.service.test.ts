import TestService from '@/services/test.service';

const service = new TestService();

describe('Test service', () => {
  describe('# Test endpoint', () => {
    test('Get users mock', async () => {
      // Arrange
      const expected = [{ id: 1, name: 'John Doe' }];
      // Act
      const result = await service.getUsersMock();
      // Assert
      expect(result).toEqual(expected);
    });
  });
});
