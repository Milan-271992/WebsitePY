import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method Not Allowed. Please send a POST request.',
    });
  }

  const { name, email, phone, service, message } = req.body || {};

  // Validation
  if (!name || !email) {
    return res.status(400).json({
      success: false,
      message: 'Name and email are required fields.',
    });
  }

  const emailUser = process.env.EMAIL_USER || 'Xtisupport@gmail.com';
  const rawPass = process.env.EMAIL_PASS || 'dweotlvpmbwlklbu';
  const pass = rawPass.replace(/\s+/g, '');
  const receiverEmail = process.env.RECEIVER_EMAIL || emailUser;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: emailUser,
      pass: pass,
    },
  });

  // 1. Email notification to Admin (Xtisupport@gmail.com)
  const adminMailOptions = {
    from: `"Xtechinfra Technologies Inquiry" <${emailUser}>`,
    to: receiverEmail,
    replyTo: `"${name}" <${email}>`,
    subject: `🔔 New IT Inquiry: ${name} (${service || 'General Scoping'})`,
    text: `New Website Inquiry Details:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\nService Interested: ${service || 'General Inquiry'}\n\nMessage:\n${message || 'No additional message provided.'}\n\n---\nReceived on: ${new Date().toLocaleString()}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f1f5f9; margin: 0; padding: 24px; color: #1e293b; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.06); border: 1px solid #e2e8f0; }
          .header { background: linear-gradient(135deg, #0A1931 0%, #0066FF 100%); color: #ffffff; padding: 28px 24px; text-align: center; }
          .header h1 { margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.5px; }
          .header p { margin: 6px 0 0; font-size: 13px; opacity: 0.9; }
          .content { padding: 24px; }
          .badge { display: inline-block; padding: 4px 10px; background-color: #dbeafe; color: #1e40af; border-radius: 9999px; font-size: 12px; font-weight: 700; }
          .info-table { width: 100%; border-collapse: collapse; margin-top: 16px; }
          .info-table td { padding: 10px 12px; border-bottom: 1px solid #f1f5f9; font-size: 14px; }
          .info-table td.label { font-weight: 700; color: #475569; width: 35%; background-color: #f8fafc; }
          .message-box { margin-top: 20px; background-color: #f8fafc; border-left: 4px solid #0066FF; padding: 14px 16px; border-radius: 6px; font-size: 14px; line-height: 1.6; color: #334155; }
          .footer { padding: 16px 24px; background-color: #f8fafc; border-top: 1px solid #e2e8f0; text-align: center; font-size: 12px; color: #64748b; }
          .btn { display: inline-block; margin-top: 16px; padding: 10px 20px; background-color: #0066FF; color: #ffffff; text-decoration: none; border-radius: 8px; font-size: 13px; font-weight: 600; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New IT Solution Inquiry</h1>
            <p>Received via Xtechinfra Technologies Website Contact Portal</p>
          </div>
          <div class="content">
            <span class="badge">${service || 'IT Inquiry'}</span>
            <table class="info-table">
              <tr>
                <td class="label">Client Name</td>
                <td><strong>${name}</strong></td>
              </tr>
              <tr>
                <td class="label">Email Address</td>
                <td><a href="mailto:${email}" style="color: #0066FF; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td class="label">Phone / WhatsApp</td>
                <td>${phone ? `<a href="tel:${phone}" style="color: #0066FF; text-decoration: none;">${phone}</a>` : '<em>Not specified</em>'}</td>
              </tr>
              <tr>
                <td class="label">Service Required</td>
                <td><strong>${service || 'General Scoping'}</strong></td>
              </tr>
              <tr>
                <td class="label">Received At</td>
                <td>${new Date().toLocaleString()}</td>
              </tr>
            </table>

            <h3 style="margin-top: 24px; margin-bottom: 8px; font-size: 14px; color: #0A1931;">Project / Requirement Description:</h3>
            <div class="message-box">
              ${message ? message.replace(/\n/g, '<br>') : '<em>No additional description provided.</em>'}
            </div>

            <div style="text-align: center; margin-top: 24px;">
              <a href="mailto:${email}?subject=RE: Xtechinfra Technologies Inquiry - ${encodeURIComponent(service || 'Solutions')}" class="btn">Reply to ${name}</a>
            </div>
          </div>
          <div class="footer">
            Xtechinfra Technologies • 12, Madhav Colony, Kalkamata Road, Udaipur, Rajasthan 313001<br>
            Direct Inquiry Notification System
          </div>
        </div>
      </body>
      </html>
    `,
  };

  // 2. Customer Auto-Acknowledgment Email
  const customerMailOptions = {
    from: `"Xtechinfra Technologies Support" <${emailUser}>`,
    to: email,
    subject: `Thank you for contacting Xtechinfra Technologies - We have received your inquiry`,
    text: `Hello ${name},\n\nThank you for reaching out to Xtechinfra Technologies. We have received your inquiry regarding "${service}".\n\nOur technical team will review your requirement and reach out to you within 2 business hours.\n\nWarm regards,\nXtechinfra Technologies Team\nContact: +91 7877358968\nEmail: xtisupport@gmail.com\nLinkedIn: https://lnkd.in/p/d5-i5jWp\nWebsite: www.XTechInfra.com`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f1f5f9; margin: 0; padding: 24px; color: #1e293b; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.06); border: 1px solid #e2e8f0; }
          .header { background: #0A1931; color: #ffffff; padding: 28px 24px; text-align: center; }
          .header h1 { margin: 0; font-size: 20px; font-weight: 800; color: #38BDF8; }
          .content { padding: 28px 24px; line-height: 1.6; font-size: 14px; color: #334155; }
          .summary { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px; margin: 20px 0; }
          .footer { padding: 20px 24px; background-color: #f8fafc; border-top: 1px solid #e2e8f0; text-align: center; font-size: 12px; color: #64748b; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Xtechinfra Technologies</h1>
            <p style="margin: 4px 0 0; font-size: 12px; color: #94a3b8;">Smart Systems • Solid Structures</p>
          </div>
          <div class="content">
            <h2 style="font-size: 18px; color: #0A1931; margin-top: 0;">Thank you for reaching out, ${name}!</h2>
            <p>We have successfully received your inquiry regarding <strong>${service}</strong>. Our enterprise infrastructure specialists are reviewing your request.</p>
            
            <div class="summary">
              <strong>Your Inquiry Summary:</strong><br>
              • <strong>Area of Interest:</strong> ${service}<br>
              • <strong>Contact Email:</strong> ${email}<br>
              • <strong>Phone:</strong> ${phone || 'Not provided'}
            </div>

            <p>One of our consultants will connect with you within <strong>2 business hours</strong> to discuss your specifications and provide an initial scoping quote.</p>
            <p>If you have urgent technical support needs, you can also reach us directly via WhatsApp at <a href="https://wa.me/917877358968" style="color: #0066FF; font-weight: bold;">+91 7877358968</a> or connect on <a href="https://lnkd.in/p/d5-i5jWp" style="color: #0A66C2; font-weight: bold;">LinkedIn</a>.</p>
            
            <p style="margin-top: 24px;">Warm regards,<br><strong>Xtechinfra Technologies Team</strong></p>
          </div>
          <div class="footer">
            12, Madhav Colony, Kalkamata Road, Opp Krishna Dental Clinic, Udaipur, Rajasthan - 313001<br>
            Email: <a href="mailto:xtisupport@gmail.com" style="color: #0066FF;">xtisupport@gmail.com</a> | Tel: +91 7877358968 | <a href="https://lnkd.in/p/d5-i5jWp" style="color: #0A66C2;">LinkedIn</a>
          </div>
        </div>
      </body>
      </html>
    `,
  };

  try {
    // Send admin notification
    await transporter.sendMail(adminMailOptions);

    // Try sending customer auto-reply
    try {
      await transporter.sendMail(customerMailOptions);
    } catch (customerMailErr) {
      console.warn('Customer auto-reply could not be delivered:', customerMailErr.message);
    }

    return res.status(200).json({
      success: true,
      message: 'Your inquiry has been submitted successfully! A confirmation has been sent to your email.',
    });
  } catch (error) {
    console.error('Error sending email via Gmail SMTP:', error);

    return res.status(500).json({
      success: false,
      message: 'Failed to dispatch email via Gmail server.',
      error: error.message,
    });
  }
}
