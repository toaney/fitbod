import '@testing-library/jest-dom/extend-expect'
import 'whatwg-fetch'
import { server } from "@/mocks/server"

// establish API mocking before all tests
beforeAll(() => server.listen())
// reset any request handlers that are declared as a part of our tests
// (i.e. for testing one-time error scenarios)
afterEach(() => server.resetHandlers())
// clean up once the tests are done
afterAll(() => server.close())