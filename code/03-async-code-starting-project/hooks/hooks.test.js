import {it, expect, beforeAll, beforeEach, afterAll, afterEach, describe} from 'vitest';
import { User } from './hooks';

const testEmail = 'test@test.com';
let user;

/*afterEach(() => {
  user = new User(testEmail);
});*/

beforeEach(() => {
  user = new User(testEmail);
});

/*describe.concurrent*/ // you can run all tests inside the describe function concurrently to speed up the tests

// or you can add this concurrent property / annotation to every test you want to run concurrently
// Even when not adding the .concurrent property / annotation, tests that are stored in different files are executed concurrently (i.e., in parallel).
// This is done by both Vitest and Jest - ensuring that your tests run in a short amount of time.
//
// With .concurrent you can enforce this behavior also inside the individual files (i.e., tests that live in one and the same file are executed concurrently).
//
// Concurrent execution can reduce the amount of time your tests need to execute. A downside of concurrent execution is, that tests that perform clashing (global)
// state manipulations may interfere with each other.
it.concurrent('should update the email', () => {
  const newTestEmail = 'test2@test.com';

  user.updateEmail(newTestEmail);

  expect(user.email).toBe(newTestEmail);
}, 5000);


it.concurrent('should have an email property', () => {

  expect(user).toHaveProperty('email');
}, 5000);


it.concurrent('should store the provided email value', () => {

  expect(user.email).toBe(testEmail);
}, 5000);


it.concurrent('should clear the email', () => {
  user.clearEmail();

  expect(user.email).toBe('');
}, 5000);


it.concurrent('should still have an email property after clearing the email', () => {
  user.clearEmail();

  expect(user).toHaveProperty('email');
}, 5000);
