export function getWelcomeEmailHtml(name, clientUrl) {
    return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <title>Welcome to Chat-E</title>
      </head>
      <body style="margin:0; padding:0; background-color:#f4f7f8; font-family: Arial, Helvetica, sans-serif;">
        <table width="100%" cellpadding="0" cellspacing="0" style="padding:20px 0;">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:8px; overflow:hidden;">
                
                <!-- Header with Logo & Light Gradient -->
                <tr>
                  <td
                    style="
                      background:#5fb3b3;
                      background: linear-gradient(135deg, #7dd3c7, #6ec6ff);
                      color:#ffffff;
                      padding:32px 24px;
                      text-align:center;
                    "
                  >
                    <img
                      src="/asstes/logo.png"
                      alt="Chat-E Logo"
                      width="60"
                      height="60"
                      style="display:block; margin:0 auto 12px; border-radius:12px;"
                    />
  
                    <h1 style="margin:0; font-size:24px; font-weight:600;">
                      Welcome to Chat-E ..!
                    </h1>
                  </td>
                </tr>
  
                <!-- Body -->
                <tr>
                  <td style="padding:24px; color:#2f3a3a;">
                    <p style="font-size:16px; margin:0 0 16px;">
                      Hey <strong>${name}</strong>,
                    </p>
  
                    <p style="font-size:15px; line-height:1.6; margin:0 0 16px;">
                      We are excited to have you join our <strong>Chat-E</strong> messenger platform.
                      Chat-E connects you with friends, family, & colleagues in real time,
                      no matter where they are.
                    </p>
  
                    <p style="font-size:15px; margin:0 0 12px;">
                      <strong>Get started in just a few steps –</strong>
                    </p>
  
                    <ul style="padding-left:20px; margin:0 0 20px; font-size:15px; line-height:1.6;">
                      <li>Set up your profile pic</li>
                      <li>Find & add your contacts</li>
                      <li>Start a conversation</li>
                      <li>Share media</li>
                    </ul>
  
                    <!-- CTA Button -->
                    <div style="text-align:center; margin:30px 0;">
                      <a
                        href="${clientUrl}"
                        style="
                          background:#5fb3b3;
                          background: linear-gradient(135deg, #7dd3c7, #6ec6ff);
                          color:#ffffff;
                          padding:14px 28px;
                          text-decoration:none;
                          border-radius:6px;
                          font-size:16px;
                          display:inline-block;
                          font-weight:600;
                        "
                      >
                        Open Chat-E
                      </a>
                    </div>
  
                    <p style="font-size:15px; margin:24px 0 0;">
                      Happy Messaging ...!
                    </p>
  
                    <p style="font-size:15px; margin:16px 0 0;">
                      Best regards,<br />
                      <strong>Chat-E Team</strong>
                    </p>
                  </td>
                </tr>
  
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
    `;
  }
  