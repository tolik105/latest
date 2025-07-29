# AKRIN Content Management System - Testing Guide

This document provides comprehensive information about testing the AKRIN Content Management System.

## Test Structure

The testing suite is organized into several categories:

### 1. Unit Tests (`__tests__/`)
- **API Tests** (`__tests__/api/`): Test individual API endpoints
- **Library Tests** (`__tests__/lib/`): Test utility functions and services
- **Component Tests** (`__tests__/components/`): Test React components

### 2. Integration Tests (`__tests__/integration/`)
- Test complete workflows and component interactions
- Database integration testing
- API endpoint integration testing

### 3. End-to-End Tests (`__tests__/e2e/`)
- Test complete user journeys
- Full content creation and publishing workflows
- Cross-browser compatibility testing

## Running Tests

### Prerequisites
```bash
npm install
```

### Test Commands

```bash
# Run all tests
npm test

# Run tests in watch mode (for development)
npm run test:watch

# Run tests with coverage report
npm run test:coverage

# Run tests for CI/CD (no watch mode)
npm run test:ci
```

### Test Coverage

The test suite aims for comprehensive coverage:

- **API Endpoints**: 95%+ coverage
- **Core Business Logic**: 90%+ coverage
- **React Components**: 85%+ coverage
- **Integration Workflows**: 80%+ coverage

## Test Categories

### API Endpoint Tests

#### Content API (`__tests__/api/content.test.ts`)
Tests for `/api/admin/content` endpoints:

- ✅ Content creation with validation
- ✅ Content listing with pagination and filtering
- ✅ Content updates and publishing
- ✅ SEO score calculation
- ✅ Error handling and edge cases

**Key Test Cases:**
```typescript
// Content creation
it('should create new content successfully')
it('should return error for missing required fields')
it('should return error for duplicate slug')
it('should calculate SEO score correctly')

// Content filtering
it('should handle search filtering')
it('should handle status filtering')
it('should handle language filtering')
```

#### Media API Tests
Tests for media upload and management:

- ✅ File upload validation
- ✅ Image optimization
- ✅ Alt text and caption management
- ✅ File deletion and cleanup

#### SEO Analysis API Tests
Tests for SEO optimization features:

- ✅ Content analysis accuracy
- ✅ Keyword density calculation
- ✅ Meta tag optimization
- ✅ Recommendation generation

### SEO Optimizer Tests (`__tests__/lib/seo-optimizer.test.ts`)

Comprehensive testing of the SEO analysis engine:

- ✅ Content structure analysis
- ✅ Keyword density calculation
- ✅ Heading hierarchy validation
- ✅ Meta tag optimization
- ✅ Readability scoring
- ✅ SEranking API integration
- ✅ Multilingual content support

**Key Test Scenarios:**
```typescript
// Content analysis
it('should analyze content structure correctly')
it('should calculate keyword density correctly')
it('should analyze keyword placement')
it('should generate relevant recommendations')

// Edge cases
it('should handle content without focus keyword')
it('should handle short content appropriately')
it('should handle malformed HTML')
```

### Component Tests (`__tests__/components/`)

#### Rich Text Editor Tests
Tests for the TinyMCE-based content editor:

- ✅ Editor initialization and configuration
- ✅ Content change handling
- ✅ Real-time SEO analysis
- ✅ Recommendation display
- ✅ Keyword density visualization

**Test Coverage:**
```typescript
// Core functionality
it('should render the editor interface')
it('should call onChange when content changes')
it('should analyze content and display SEO metrics')

// SEO features
it('should display SEO recommendations')
it('should display keyword density analysis')
it('should show different SEO score colors')
```

### Integration Tests (`__tests__/integration/`)

#### Content Workflow Tests
Tests complete content management workflows:

- ✅ Draft → Edit → Publish workflow
- ✅ Bilingual content creation
- ✅ Media integration
- ✅ SEO optimization workflow
- ✅ Analytics tracking

**Workflow Test Examples:**
```typescript
// Complete workflow
it('should create, edit, and publish content successfully')
it('should handle bilingual content creation')
it('should handle media upload and association')

// Error handling
it('should handle database failures gracefully')
it('should validate content before publishing')
```

### End-to-End Tests (`__tests__/e2e/`)

#### Content Creation Journey
Tests the complete user experience:

- ✅ Nexpose article creation (realistic example)
- ✅ SEO optimization process
- ✅ Media upload and management
- ✅ Publishing and accessibility
- ✅ Analytics tracking

**E2E Test Scenarios:**
```typescript
// Complete journey
it('should create a complete Nexpose security guide from start to finish')
it('should create bilingual content (English and Japanese)')
it('should handle the complete content optimization workflow')
```

## Test Data and Mocking

### Database Mocking
All tests use mocked database operations to ensure:
- Fast test execution
- Predictable test results
- No dependency on external databases

### API Mocking
External APIs (SEranking) are mocked to:
- Avoid rate limiting during tests
- Ensure consistent test results
- Test error handling scenarios

### Test Data
Realistic test data includes:
- Target keywords (nexpose, guest wifi, systems, etc.)
- Sample content with proper SEO structure
- Multilingual content examples
- Various content quality levels

## Quality Assurance Checklist

### Before Deployment
- [ ] All unit tests pass
- [ ] Integration tests pass
- [ ] E2E tests pass
- [ ] Code coverage meets targets
- [ ] No console errors or warnings
- [ ] Performance tests pass

### Content Creation Validation
- [ ] SEO score calculation accuracy
- [ ] Keyword density analysis
- [ ] Meta tag optimization
- [ ] Heading structure validation
- [ ] Image alt text requirements
- [ ] Bilingual content support

### API Validation
- [ ] Input validation and sanitization
- [ ] Error handling and responses
- [ ] Rate limiting compliance
- [ ] Authentication and authorization
- [ ] Database transaction integrity

### UI/UX Validation
- [ ] Responsive design testing
- [ ] Accessibility compliance
- [ ] Cross-browser compatibility
- [ ] Performance optimization
- [ ] User workflow validation

## Continuous Integration

### GitHub Actions (if applicable)
```yaml
# Example CI configuration
- name: Run Tests
  run: npm run test:ci

- name: Check Coverage
  run: npm run test:coverage

- name: Lint Code
  run: npm run lint
```

### Test Environment Setup
```bash
# Setup test database
npm run db:reset

# Generate Prisma client
npm run db:generate

# Run tests
npm test
```

## Performance Testing

### Load Testing
- Content creation under load
- Database query performance
- API response times
- Memory usage monitoring

### SEO Analysis Performance
- Large content analysis speed
- Keyword density calculation efficiency
- Recommendation generation time
- Concurrent analysis handling

## Security Testing

### Input Validation
- SQL injection prevention
- XSS attack prevention
- File upload security
- Authentication bypass attempts

### Data Protection
- Sensitive data handling
- API key security
- User session management
- Database access control

## Troubleshooting

### Common Test Issues

1. **Database Connection Errors**
   ```bash
   # Reset test database
   npm run db:reset
   ```

2. **Mock Function Issues**
   ```bash
   # Clear all mocks
   jest.clearAllMocks()
   ```

3. **Async Test Failures**
   ```typescript
   // Use proper async/await
   await waitFor(() => {
     expect(element).toBeInTheDocument()
   })
   ```

### Debug Mode
```bash
# Run tests with debug output
DEBUG=true npm test

# Run specific test file
npm test -- content.test.ts

# Run tests matching pattern
npm test -- --testNamePattern="SEO"
```

## Contributing to Tests

### Adding New Tests
1. Follow existing test structure
2. Use descriptive test names
3. Include both positive and negative test cases
4. Mock external dependencies
5. Maintain test coverage standards

### Test Naming Convention
```typescript
// Good test names
it('should create content with valid SEO score')
it('should return 400 error for missing title')
it('should handle database connection failure gracefully')

// Avoid vague names
it('should work')
it('should test content')
```

### Best Practices
- Keep tests focused and atomic
- Use realistic test data
- Test error conditions
- Maintain test independence
- Document complex test scenarios

## Conclusion

This comprehensive testing suite ensures the AKRIN Content Management System is reliable, secure, and performs well under various conditions. Regular test execution and maintenance are essential for maintaining system quality and preventing regressions.
