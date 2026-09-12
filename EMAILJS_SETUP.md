# 📧 EmailJS Setup Guide

Your contact form is ready to send real emails through Gmail. Follow these steps to configure it.

---

## Step 1: Create an EmailJS Account

1. Go to **[https://www.emailjs.com/](https://www.emailjs.com/)**
2. Click **"Sign Up"** or **"Get Started Free"**
3. Choose **"Sign Up with Google"** (simplest option)
4. Follow the prompts to create your account

---

## Step 2: Create an Email Service (Connect Your Gmail)

1. In the EmailJS dashboard, go to **"Email Services"** (left sidebar)
2. Click **"Add Service"**
3. Select **"Gmail"**
4. Click **"Connect Account"**
5. A Google login popup will appear
   - Sign in with the **Gmail account** that should receive portfolio messages
   - Click **"Allow"** when asked to grant EmailJS permissions
6. Name your service (e.g., "Gmail Portfolio")
7. Click **"Add Service"**

✅ You now have a **Service ID**. You'll find it displayed on the service page.

---

## Step 3: Create an Email Template

1. Go to **"Email Templates"** (left sidebar)
2. Click **"Create New Template"**
3. Name it: **"Portfolio Contact"** (or your preference)
4. In the **"Content"** section, use this template:

```
New Portfolio Message

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

**Important Template Variable Names:**
- `{{from_name}}` — Visitor's name
- `{{from_email}}` — Visitor's email  
- `{{message}}` — Visitor's message

5. In the **"To Email"** field at the top, select:
   - **"Email"** (radio button)
   - Enter your Gmail address (the one you connected in Step 2)

6. Click **"Save"**

✅ You now have a **Template ID**. You'll find it at the top of the template page.

---

## Step 4: Get Your Public Key

1. Go to **"Account"** (click your profile icon → settings)
2. Look for **"API Keys"** section
3. Copy your **"Public Key"** (NOT the Private Key)

✅ You now have your **Public Key**.

---

## Step 5: Configure Your .env File

1. In your portfolio folder, create a `.env` file (if it doesn't exist)
   - Copy from `.env.example` if needed

2. Add these three values:

```
VITE_EMAILJS_SERVICE_ID=service_xxxxxxxxxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxxxxxxxxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key_xxxxxx
```

Replace the `x`'s with your actual values from EmailJS.

**Example (NOT real):**
```
VITE_EMAILJS_SERVICE_ID=service_a1b2c3d4e5f6g7h8
VITE_EMAILJS_TEMPLATE_ID=template_9i8j7k6l5m4n3o2p
VITE_EMAILJS_PUBLIC_KEY=abc123def456ghi789
```

---

## Step 6: Restart Your Dev Server

1. Stop your dev server (Ctrl+C in terminal)
2. Restart it:
   ```bash
   npm run dev
   ```

---

## Step 7: Test the Form

1. Open your portfolio in the browser
2. Scroll to the **"Let's make something useful"** section
3. Fill in the form:
   - **Name:** Test Name
   - **Email:** any-email@example.com
   - **Message:** Testing the contact form
4. Click **"Send Message"**

### Expected Behavior:

✅ **Success:**
- Button shows **"Sending..."**
- Then shows **"✓ Message sent successfully!"**
- The form clears
- **Check your Gmail inbox** — you should see the email!

❌ **Error:**
- Button shows **"Try Again"**
- Red error box appears
- Check browser console (F12 → Console tab) for the error message
- Most common: Missing/incorrect environment variables

---

## Troubleshooting

### "Something went wrong. Please try again."

**Check these in order:**

1. **Are the environment variables set?**
   - Open browser console (F12)
   - Look for the error message
   - Common: `❌ EmailJS not configured. Missing environment variables`
   - Fix: Add `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, and `VITE_EMAILJS_PUBLIC_KEY` to `.env`
   - Then restart dev server

2. **Did you restart the dev server after creating .env?**
   - Stop it: Ctrl+C
   - Restart: `npm run dev`

3. **Are the IDs copied correctly?**
   - Go back to EmailJS dashboard
   - Double-check Service ID, Template ID, and Public Key
   - Make sure there are no extra spaces

4. **Is Gmail connected?**
   - In EmailJS, go to "Email Services"
   - Click your Gmail service
   - Check if there's a green checkmark next to Gmail
   - If not, reconnect it

5. **Check the browser console for the actual error:**
   - Open DevTools: F12 (or right-click → Inspect)
   - Go to **"Console"** tab
   - Look for red error messages
   - They will show the exact problem

### "Message sent successfully" but email didn't arrive

1. **Check spam folder** in Gmail
2. **Check that you configured the recipient email** in EmailJS template
   - Go to Email Templates
   - Open your Portfolio Contact template
   - Scroll to "To Email" section
   - Make sure it's set to **"Email"** and shows your Gmail address

### Still stuck?

1. Check the browser console for the exact error (F12 → Console)
2. Copy the error message
3. Go to EmailJS support: https://www.emailjs.com/help/

---

## Form Fields Reference

The contact form collects:

| Field | HTML Name | Template Variable | Example |
|-------|-----------|-------------------|---------|
| Name | `name` | `{{from_name}}` | "Rahul" |
| Email | `email` | `{{from_email}}` | "rahul@example.com" |
| Message | `message` | `{{message}}` | "I loved your portfolio!" |

---

## Security Note

✅ **Safe & Secure:**
- Your Gmail password is **never** stored or sent through your app
- EmailJS uses **OAuth** (Gmail login popup) — Google handles authentication
- The Public Key is intentionally public — it only allows sending through YOUR service
- The Private Key remains secret in EmailJS servers

✅ **Never commit `.env` to Git:**
- Add `.env` to `.gitignore` (it's already there)
- Only `.env.example` should be in your repo

---

## What Happens When a Visitor Submits

1. Visitor fills the form and clicks "Send Message"
2. Your React app validates the form (required fields)
3. Sends the form data to EmailJS via your Public Key
4. EmailJS matches it with your Service ID and Template ID
5. EmailJS connects to Gmail using the OAuth token you set up
6. Gmail receives and delivers the email to your inbox
7. Your app shows "✓ Message sent successfully!"

---

## Customizing the Email Template

You can customize the email format. In EmailJS Email Templates:

**Change the subject line:**
- Go to your template
- Edit the "Subject" field
- Example: `New Message from {{from_name}}`

**Change the email body:**
- Edit the "Content" section
- Use `{{variable}}` syntax for dynamic content
- Available variables:
  - `{{from_name}}`
  - `{{from_email}}`
  - `{{message}}`

**Example custom template:**
```
You have a new message from your portfolio!

📧 From: {{from_email}}
👤 Name: {{from_name}}

📝 Message:
{{message}}

---
Sent via Portfolio Contact Form
```

---

## All Set! 🎉

Your contact form is now live and ready to receive real emails. Visitors can contact you directly from your portfolio!
