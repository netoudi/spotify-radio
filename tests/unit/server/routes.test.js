import { beforeEach, describe, test } from '@jest/globals';
import config from '../../../src/config.js';

describe('#Routes - test site for API response', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
    jest.clearAllMocks();
  });

  test.todo('GET / - should redirect to home page');
  test.todo(
    `GET /home - should response with ${config.pages.homeHTML} file stream`
  );
  test.todo(
    `GET /controller - should resposne with ${config.pages.controllerHTML} file stream`
  );
  test.todo(`GET /file.ext - should response with file stream`);
  test.todo(
    `GET /unknown - given an inexistent route it should response with 404`
  );

  describe('exceptions', () => {
    test.todo('given inexistent file it should respond with 404');
    test.todo('given an error it should respond with 500');
  });
});
