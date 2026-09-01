import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  const user = process.env.EMAIL_USER || 'Xtisupport@gmail.com';
  const rawPass = process.env.EMAIL_PASS || 'dweotlvpmbwlklbu';
  const pass = rawPass.replace(/\s+/g, '');

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: user,
        pass: pass,
      },
    });

    await transporter.verify();
    return res.status(200).json({
      status: 'ok',
      smtpConnected: true,
      emailUser: user,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return res.status(200).json({
      status: 'warning',
      smtpConnected: false,
      message: error.message,
    });
  }
}
