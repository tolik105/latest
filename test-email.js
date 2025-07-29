// Simple test script to verify email configuration
const testEmailConfig = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Test User',
        email: 'test@example.com',
        message: 'This is a test message to verify email configuration is working correctly.',
        recaptchaToken: ''
      }),
    });

    const result = await response.json();
    
    if (response.ok) {
      console.log('✅ Email test successful:', result);
    } else {
      console.log('❌ Email test failed:', result);
    }
  } catch (error) {
    console.error('❌ Email test error:', error);
  }
};

// Run the test if this file is executed directly
if (typeof window === 'undefined') {
  testEmailConfig();
}

module.exports = { testEmailConfig };
