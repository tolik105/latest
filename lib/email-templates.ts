// Professional email templates for Akrin Technologies

// Contact form email template
export function createContactEmailTemplate(data: {
  name: string
  email: string
  message: string
  timestamp: string
}) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <!--[if mso]>
      <noscript>
        <xml>
          <o:OfficeDocumentSettings>
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
        </xml>
      </noscript>
      <![endif]-->
      <style>
        body { 
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
          line-height: 1.6;
          color: #1a1a1a;
          margin: 0;
          padding: 0;
          background-color: #f5f5f7;
          -webkit-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
        }
        .wrapper {
          background-color: #f5f5f7;
          padding: 40px 20px;
        }
        .container { 
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
          overflow: hidden;
        }
        .header { 
          background: #ffffff;
          padding: 40px 40px 30px;
          border-bottom: 1px solid #e5e5e7;
        }
        .logo-container {
          text-align: center;
          margin-bottom: 30px;
        }
        .logo {
          max-width: 150px;
          height: auto;
        }
        .header-text {
          text-align: center;
        }
        .header h1 {
          margin: 0;
          font-size: 24px;
          font-weight: 600;
          color: #1a1a1a;
          letter-spacing: -0.5px;
        }
        .header .subtitle {
          margin: 8px 0 0;
          font-size: 16px;
          color: #6e6e73;
        }
        .content { 
          padding: 40px;
          background: #ffffff;
        }
        .section {
          margin-bottom: 32px;
        }
        .section-header {
          display: flex;
          align-items: center;
          margin-bottom: 16px;
        }
        .section-icon {
          width: 24px;
          height: 24px;
          margin-right: 12px;
          flex-shrink: 0;
        }
        .section-title {
          font-size: 14px;
          font-weight: 600;
          color: #1a1a1a;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin: 0;
        }
        .info-card {
          background: #f5f5f7;
          border: 1px solid #e5e5e7;
          border-radius: 8px;
          padding: 20px;
          margin-bottom: 16px;
        }
        .info-label {
          font-size: 12px;
          font-weight: 600;
          color: #6e6e73;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 4px;
        }
        .info-value {
          font-size: 16px;
          color: #1a1a1a;
          font-weight: 500;
        }
        .info-value a {
          color: #7A28FF;
          text-decoration: none;
        }
        .info-value a:hover {
          text-decoration: underline;
        }
        .message-section {
          background: #f5f5f7;
          border: 1px solid #e5e5e7;
          border-radius: 8px;
          padding: 24px;
        }
        .message-content {
          font-size: 15px;
          line-height: 1.8;
          color: #1a1a1a;
        }
        .action-section {
          margin: 40px 0;
          text-align: center;
        }
        .button {
          display: inline-block;
          padding: 14px 32px;
          background: #7A28FF;
          color: #ffffff;
          text-decoration: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 16px;
          transition: background 0.2s ease;
        }
        .button:hover {
          background: #6B24E6;
        }
        .metadata {
          margin-top: 40px;
          padding-top: 32px;
          border-top: 1px solid #e5e5e7;
        }
        .metadata-grid {
          display: table;
          width: 100%;
        }
        .metadata-row {
          display: table-row;
        }
        .metadata-label,
        .metadata-value {
          display: table-cell;
          padding: 8px 0;
          font-size: 14px;
        }
        .metadata-label {
          color: #6e6e73;
          width: 140px;
        }
        .metadata-value {
          color: #1a1a1a;
        }
        .footer { 
          background: #1a1a1a;
          color: #ffffff;
          padding: 40px;
          text-align: center;
        }
        .footer-logo {
          margin-bottom: 20px;
        }
        .footer-text {
          font-size: 14px;
          color: #a1a1a6;
          margin: 0 0 8px;
        }
        .footer-links {
          margin-top: 20px;
        }
        .footer-links a {
          color: #7A28FF;
          text-decoration: none;
          margin: 0 12px;
          font-size: 14px;
        }
        .footer-links a:hover {
          text-decoration: underline;
        }
        .company-info {
          margin-top: 24px;
          padding-top: 24px;
          border-top: 1px solid #333;
          font-size: 12px;
          color: #6e6e73;
        }
        @media only screen and (max-width: 600px) {
          .header, .content, .footer {
            padding: 24px;
          }
          .button {
            display: block;
            width: 100%;
            box-sizing: border-box;
          }
        }
      </style>
    </head>
    <body>
      <div class="wrapper">
        <div class="container">
          <div class="header">
            <div class="logo-container">
              <svg width="150" height="24" viewBox="0 0 499 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.766 53.642H42.452L28.235 78.074H0.998L14.766 53.642Z" fill="#7A28FF" fill-opacity="0.9"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M43.5 0.975L88.098 77.928H56.969L27.936 28.187L43.5 0.975Z" fill="#1a1a1a"/>
                  <path d="M98.966 79.561V33.016H111.603V51.834H112.239L126.239 33.016H140.966L125.239 53.743L141.33 79.561H126.239L115.785 62.106L111.603 67.561V79.561H98.966ZM144.716 79.561V33.016H164.807C168.262 33.016 171.285 33.644 173.876 34.902C176.467 36.159 178.482 37.97 179.921 40.334C181.36 42.697 182.08 45.531 182.08 48.834C182.08 52.167 181.338 54.978 179.853 57.266C178.383 59.553 176.315 61.281 173.648 62.447C170.997 63.614 167.898 64.197 164.353 64.197H152.353V54.379H161.807C163.292 54.379 164.557 54.197 165.603 53.834C166.663 53.455 167.474 52.856 168.035 52.038C168.61 51.22 168.898 50.152 168.898 48.834C168.898 47.5 168.61 46.417 168.035 45.584C167.474 44.735 166.663 44.114 165.603 43.72C164.557 43.311 163.292 43.106 161.807 43.106H157.353V79.561H144.716ZM171.989 58.197L183.626 79.561H169.898L158.535 58.197H171.989ZM200.103 33.016V79.561H187.466V33.016H200.103ZM246.364 33.016V79.561H235.819L219.001 55.106H218.728V79.561H206.091V33.016H216.819L233.364 57.379H233.728V33.016H246.364Z" fill="#1a1a1a"/>
                </g>
              </svg>
            </div>
            <div class="header-text">
              <h1>New Contact Form Submission</h1>
              <p class="subtitle">Website inquiry received at akrin.jp</p>
            </div>
          </div>
          
          <div class="content">
            <div class="section">
              <div class="section-header">
                <svg class="section-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 21C20 19.6044 20 18.9067 19.8278 18.3389C19.44 17.0605 18.4395 16.06 17.1611 15.6722C16.5933 15.5 15.8956 15.5 14.5 15.5H9.5C8.10444 15.5 7.40665 15.5 6.83886 15.6722C5.56045 16.06 4.56004 17.0605 4.17224 18.3389C4 18.9067 4 19.6044 4 21M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z" stroke="#1a1a1a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <h2 class="section-title">Contact Information</h2>
              </div>
              
              <div class="info-card">
                <div class="info-label">Name</div>
                <div class="info-value">${data.name}</div>
              </div>
              
              <div class="info-card">
                <div class="info-label">Email Address</div>
                <div class="info-value">
                  <a href="mailto:${data.email}">${data.email}</a>
                </div>
              </div>
            </div>
            
            <div class="section">
              <div class="section-header">
                <svg class="section-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 9L12 13L17 9M21 16.5C21 17.9045 21 18.6067 20.7822 19.1528C20.5905 19.6422 20.2837 20.0799 19.886 20.4276C19.4306 20.8243 18.8168 20.9869 17.5892 21.3121L13.5892 22.3121C12.8221 22.5197 12.4385 22.6236 12.046 22.6207C11.6981 22.6181 11.3546 22.5432 11.0365 22.4006C10.6767 22.2392 10.3515 21.9767 9.70104 21.4518L6.11396 18.5482C5.46351 18.0233 5.13828 17.7608 4.88902 17.4343C4.66784 17.1442 4.49638 16.8195 4.38134 16.473C4.25 16.077 4.20337 15.6445 4.11011 14.7796L3.68011 10.7796C3.56722 9.73246 3.51078 9.20891 3.61184 8.73004C3.70106 8.30629 3.88147 7.9072 4.14114 7.56031C4.43671 7.16378 4.86387 6.86571 5.71818 6.26956L8.50441 4.33464C9.15513 3.87673 9.48049 3.64778 9.83546 3.51641C10.1477 3.40023 10.4769 3.33804 10.8098 3.33246C11.1882 3.32617 11.5691 3.42243 12.3308 3.61494L16.3308 4.61494C17.5585 4.92425 18.1723 5.07891 18.6277 5.41403C19.0254 5.70703 19.3455 6.09053 19.5607 6.53063C19.8054 7.02832 19.8491 7.63769 19.9366 8.85641L20 9.77277" stroke="#1a1a1a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <h2 class="section-title">Message</h2>
              </div>
              
              <div class="message-section">
                <div class="message-content">
                  ${data.message.replace(/\n/g, '<br>')}
                </div>
              </div>
            </div>
            
            <div class="action-section">
              <a href="mailto:${data.email}?subject=Re: Your inquiry to Akrin Technologies&body=Dear ${data.name},%0D%0A%0D%0AThank you for contacting Akrin Technologies. We have received your inquiry and will respond within 24 hours.%0D%0A%0D%0ABest regards,%0D%0AAkrin Team" class="button">
                Reply to ${data.name}
              </a>
            </div>
            
            <div class="metadata">
              <div class="metadata-grid">
                <div class="metadata-row">
                  <div class="metadata-label">Date Received</div>
                  <div class="metadata-value">${data.timestamp}</div>
                </div>
                <div class="metadata-row">
                  <div class="metadata-label">Source</div>
                  <div class="metadata-value">Contact Form - akrin.jp</div>
                </div>
                <div class="metadata-row">
                  <div class="metadata-label">Priority</div>
                  <div class="metadata-value">Normal</div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="footer">
            <div class="footer-logo">
              <svg width="120" height="20" viewBox="0 0 499 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.766 53.642H42.452L28.235 78.074H0.998L14.766 53.642Z" fill="#7A28FF" fill-opacity="0.9"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M43.5 0.975L88.098 77.928H56.969L27.936 28.187L43.5 0.975Z" fill="#ffffff"/>
                  <path d="M98.966 79.561V33.016H111.603V51.834H112.239L126.239 33.016H140.966L125.239 53.743L141.33 79.561H126.239L115.785 62.106L111.603 67.561V79.561H98.966ZM144.716 79.561V33.016H164.807C168.262 33.016 171.285 33.644 173.876 34.902C176.467 36.159 178.482 37.97 179.921 40.334C181.36 42.697 182.08 45.531 182.08 48.834C182.08 52.167 181.338 54.978 179.853 57.266C178.383 59.553 176.315 61.281 173.648 62.447C170.997 63.614 167.898 64.197 164.353 64.197H152.353V54.379H161.807C163.292 54.379 164.557 54.197 165.603 53.834C166.663 53.455 167.474 52.856 168.035 52.038C168.61 51.22 168.898 50.152 168.898 48.834C168.898 47.5 168.61 46.417 168.035 45.584C167.474 44.735 166.663 44.114 165.603 43.72C164.557 43.311 163.292 43.106 161.807 43.106H157.353V79.561H144.716ZM171.989 58.197L183.626 79.561H169.898L158.535 58.197H171.989ZM200.103 33.016V79.561H187.466V33.016H200.103ZM246.364 33.016V79.561H235.819L219.001 55.106H218.728V79.561H206.091V33.016H216.819L233.364 57.379H233.728V33.016H246.364Z" fill="#ffffff"/>
                </g>
              </svg>
            </div>
            <p class="footer-text">This is an automated notification from your website</p>
            <p class="footer-text">Please respond to all inquiries within 24 hours</p>
            
            <div class="footer-links">
              <a href="https://akrin.jp">Website</a>
              <a href="mailto:sales@akrin.jp">Email</a>
              <a href="tel:+81-123-456-7890">Call</a>
            </div>
            
            <div class="company-info">
              Akrin Technologies Co., Ltd.<br>
              Tokyo, Japan<br>
              © 2025 Akrin Technologies. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </body>
    </html>
  `
}

// Booking consultation email template
export function createBookingEmailTemplate(data: {
  firstName: string
  lastName: string
  email: string
  phone: string
  preferredDate: string
  service: string
  message?: string
  timestamp: string
}) {
  const serviceName = {
    'managed-it': 'Managed IT Services',
    'cyber-security': 'Cyber Security',
    'cloud-services': 'Cloud Services',
    'it-consulting': 'IT Consulting',
    'other': 'Other'
  }[data.service] || data.service

  const formattedDate = new Date(data.preferredDate).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <!--[if mso]>
      <noscript>
        <xml>
          <o:OfficeDocumentSettings>
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
        </xml>
      </noscript>
      <![endif]-->
      <style>
        body { 
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
          line-height: 1.6;
          color: #1a1a1a;
          margin: 0;
          padding: 0;
          background-color: #f5f5f7;
          -webkit-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
        }
        .wrapper {
          background-color: #f5f5f7;
          padding: 40px 20px;
        }
        .container { 
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
          overflow: hidden;
        }
        .header { 
          background: #ffffff;
          padding: 40px 40px 30px;
          border-bottom: 1px solid #e5e5e7;
        }
        .logo-container {
          text-align: center;
          margin-bottom: 30px;
        }
        .header-text {
          text-align: center;
        }
        .header h1 {
          margin: 0;
          font-size: 24px;
          font-weight: 600;
          color: #1a1a1a;
          letter-spacing: -0.5px;
        }
        .header .subtitle {
          margin: 8px 0 0;
          font-size: 16px;
          color: #6e6e73;
        }
        .priority-banner {
          background: #7A28FF;
          color: #ffffff;
          padding: 16px 40px;
          text-align: center;
          font-weight: 600;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .content { 
          padding: 40px;
          background: #ffffff;
        }
        .client-overview {
          background: #f5f5f7;
          border: 1px solid #e5e5e7;
          border-radius: 8px;
          padding: 24px;
          margin-bottom: 32px;
        }
        .client-name {
          font-size: 20px;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 16px;
        }
        .contact-grid {
          display: table;
          width: 100%;
        }
        .contact-row {
          display: table-row;
        }
        .contact-label,
        .contact-value {
          display: table-cell;
          padding: 4px 0;
        }
        .contact-label {
          color: #6e6e73;
          font-size: 14px;
          width: 80px;
        }
        .contact-value {
          font-size: 14px;
        }
        .contact-value a {
          color: #7A28FF;
          text-decoration: none;
          font-weight: 500;
        }
        .booking-details {
          margin: 32px 0;
        }
        .detail-card {
          border: 2px solid #e5e5e7;
          border-radius: 8px;
          padding: 24px;
          margin-bottom: 16px;
        }
        .detail-card.highlight {
          border-color: #7A28FF;
          background: #fafafa;
        }
        .detail-label {
          font-size: 12px;
          font-weight: 600;
          color: #6e6e73;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 8px;
        }
        .detail-value {
          font-size: 18px;
          font-weight: 600;
          color: #1a1a1a;
        }
        .service-badge {
          display: inline-block;
          background: #7A28FF;
          color: #ffffff;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 500;
        }
        .message-section {
          background: #f5f5f7;
          border: 1px solid #e5e5e7;
          border-radius: 8px;
          padding: 24px;
          margin: 32px 0;
        }
        .message-content {
          font-size: 15px;
          line-height: 1.8;
          color: #1a1a1a;
        }
        .action-section {
          margin: 40px 0;
          text-align: center;
        }
        .button {
          display: inline-block;
          padding: 14px 32px;
          background: #7A28FF;
          color: #ffffff;
          text-decoration: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 16px;
          margin: 0 8px 8px;
          transition: background 0.2s ease;
        }
        .button:hover {
          background: #6B24E6;
        }
        .button.secondary {
          background: #1a1a1a;
        }
        .button.secondary:hover {
          background: #000000;
        }
        .metadata {
          margin-top: 40px;
          padding-top: 32px;
          border-top: 1px solid #e5e5e7;
          font-size: 14px;
          color: #6e6e73;
        }
        .footer { 
          background: #1a1a1a;
          color: #ffffff;
          padding: 40px;
          text-align: center;
        }
        .footer-logo {
          margin-bottom: 20px;
        }
        .footer-text {
          font-size: 14px;
          color: #a1a1a6;
          margin: 0 0 8px;
        }
        .footer-links {
          margin-top: 20px;
        }
        .footer-links a {
          color: #7A28FF;
          text-decoration: none;
          margin: 0 12px;
          font-size: 14px;
        }
        .footer-links a:hover {
          text-decoration: underline;
        }
        .company-info {
          margin-top: 24px;
          padding-top: 24px;
          border-top: 1px solid #333;
          font-size: 12px;
          color: #6e6e73;
        }
        @media only screen and (max-width: 600px) {
          .header, .content, .footer {
            padding: 24px;
          }
          .button {
            display: block;
            width: 100%;
            box-sizing: border-box;
          }
        }
      </style>
    </head>
    <body>
      <div class="wrapper">
        <div class="container">
          <div class="header">
            <div class="logo-container">
              <svg width="150" height="24" viewBox="0 0 499 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.766 53.642H42.452L28.235 78.074H0.998L14.766 53.642Z" fill="#7A28FF" fill-opacity="0.9"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M43.5 0.975L88.098 77.928H56.969L27.936 28.187L43.5 0.975Z" fill="#1a1a1a"/>
                  <path d="M98.966 79.561V33.016H111.603V51.834H112.239L126.239 33.016H140.966L125.239 53.743L141.33 79.561H126.239L115.785 62.106L111.603 67.561V79.561H98.966ZM144.716 79.561V33.016H164.807C168.262 33.016 171.285 33.644 173.876 34.902C176.467 36.159 178.482 37.97 179.921 40.334C181.36 42.697 182.08 45.531 182.08 48.834C182.08 52.167 181.338 54.978 179.853 57.266C178.383 59.553 176.315 61.281 173.648 62.447C170.997 63.614 167.898 64.197 164.353 64.197H152.353V54.379H161.807C163.292 54.379 164.557 54.197 165.603 53.834C166.663 53.455 167.474 52.856 168.035 52.038C168.61 51.22 168.898 50.152 168.898 48.834C168.898 47.5 168.61 46.417 168.035 45.584C167.474 44.735 166.663 44.114 165.603 43.72C164.557 43.311 163.292 43.106 161.807 43.106H157.353V79.561H144.716ZM171.989 58.197L183.626 79.561H169.898L158.535 58.197H171.989ZM200.103 33.016V79.561H187.466V33.016H200.103ZM246.364 33.016V79.561H235.819L219.001 55.106H218.728V79.561H206.091V33.016H216.819L233.364 57.379H233.728V33.016H246.364Z" fill="#1a1a1a"/>
                </g>
              </svg>
            </div>
            <div class="header-text">
              <h1>New Consultation Booking</h1>
              <p class="subtitle">Booking received at akrin.jp</p>
            </div>
          </div>
          
          <div class="priority-banner">
            Priority Lead - Please respond within 24 hours
          </div>
          
          <div class="content">
            <div class="client-overview">
              <div class="client-name">${data.firstName} ${data.lastName}</div>
              <div class="contact-grid">
                <div class="contact-row">
                  <div class="contact-label">Email:</div>
                  <div class="contact-value"><a href="mailto:${data.email}">${data.email}</a></div>
                </div>
                <div class="contact-row">
                  <div class="contact-label">Phone:</div>
                  <div class="contact-value"><a href="tel:${data.phone}">${data.phone}</a></div>
                </div>
              </div>
            </div>
            
            <div class="booking-details">
              <div class="detail-card highlight">
                <div class="detail-label">Preferred Consultation Date</div>
                <div class="detail-value">${formattedDate}</div>
              </div>
              
              <div class="detail-card">
                <div class="detail-label">Service Requested</div>
                <div class="detail-value">
                  <span class="service-badge">${serviceName}</span>
                </div>
              </div>
            </div>
            
            ${data.message ? `
            <div class="message-section">
              <div class="detail-label">Additional Information</div>
              <div class="message-content">
                ${data.message.replace(/\n/g, '<br>')}
              </div>
            </div>
            ` : ''}
            
            <div class="action-section">
              <a href="mailto:${data.email}?subject=Re: Your consultation booking with Akrin Technologies&body=Dear ${data.firstName},%0D%0A%0D%0AThank you for booking a consultation with Akrin Technologies.%0D%0A%0D%0AI would like to confirm your consultation for ${formattedDate}.%0D%0A%0D%0APlease let me know your preferred time, and I'll send you a calendar invitation.%0D%0A%0D%0ABest regards,%0D%0AAkrin Team" class="button">
                Send Confirmation Email
              </a>
              <a href="tel:${data.phone}" class="button secondary">
                Call Client
              </a>
            </div>
            
            <div class="metadata">
              Booking submitted on ${data.timestamp} via akrin.jp consultation form
            </div>
          </div>
          
          <div class="footer">
            <div class="footer-logo">
              <svg width="120" height="20" viewBox="0 0 499 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.766 53.642H42.452L28.235 78.074H0.998L14.766 53.642Z" fill="#7A28FF" fill-opacity="0.9"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M43.5 0.975L88.098 77.928H56.969L27.936 28.187L43.5 0.975Z" fill="#ffffff"/>
                  <path d="M98.966 79.561V33.016H111.603V51.834H112.239L126.239 33.016H140.966L125.239 53.743L141.33 79.561H126.239L115.785 62.106L111.603 67.561V79.561H98.966ZM144.716 79.561V33.016H164.807C168.262 33.016 171.285 33.644 173.876 34.902C176.467 36.159 178.482 37.97 179.921 40.334C181.36 42.697 182.08 45.531 182.08 48.834C182.08 52.167 181.338 54.978 179.853 57.266C178.383 59.553 176.315 61.281 173.648 62.447C170.997 63.614 167.898 64.197 164.353 64.197H152.353V54.379H161.807C163.292 54.379 164.557 54.197 165.603 53.834C166.663 53.455 167.474 52.856 168.035 52.038C168.61 51.22 168.898 50.152 168.898 48.834C168.898 47.5 168.61 46.417 168.035 45.584C167.474 44.735 166.663 44.114 165.603 43.72C164.557 43.311 163.292 43.106 161.807 43.106H157.353V79.561H144.716ZM171.989 58.197L183.626 79.561H169.898L158.535 58.197H171.989ZM200.103 33.016V79.561H187.466V33.016H200.103ZM246.364 33.016V79.561H235.819L219.001 55.106H218.728V79.561H206.091V33.016H216.819L233.364 57.379H233.728V33.016H246.364Z" fill="#ffffff"/>
                </g>
              </svg>
            </div>
            <p class="footer-text">Lead Management System - Akrin Technologies</p>
            <p class="footer-text">Convert leads to clients with timely responses</p>
            
            <div class="footer-links">
              <a href="https://akrin.jp">Website</a>
              <a href="mailto:sales@akrin.jp">Email</a>
              <a href="tel:+81-123-456-7890">Call</a>
            </div>
            
            <div class="company-info">
              Akrin Technologies Co., Ltd.<br>
              Tokyo, Japan<br>
              © 2025 Akrin Technologies. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </body>
    </html>
  `
}