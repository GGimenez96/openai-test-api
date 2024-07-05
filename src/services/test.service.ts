class TestService {
  async getUsersMock() {
    return [{ id: 1, name: 'John Doe' }];
  }
}

export default TestService;
