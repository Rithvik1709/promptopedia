# Supabase Authentication Setup Guide

## Step 1: Create a Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign up for a free account or sign in
3. Click "New Project"
4. Fill in your project details:
   - Project name: `promptopedia`
   - Database password: (choose a strong password)
   - Region: (select the closest to your users)
5. Click "Create new project"
6. Wait for the project to be provisioned (2-3 minutes)

## Step 2: Get Your API Keys

1. In your Supabase project dashboard, click on the **Settings** icon (gear icon) in the sidebar
2. Click on **API** in the settings menu
3. You'll see two important values:
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **anon/public key** (looks like: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`)

## Step 3: Configure Your Environment Variables

1. Create a `.env` file in the root of your project (same level as `package.json`)
2. Copy the contents from `.env.example`
3. Replace the placeholder values with your actual Supabase credentials:

```env
REACT_APP_SUPABASE_URL=https://your-project-id.supabase.co
REACT_APP_SUPABASE_ANON_KEY=your-anon-key-here
```

## Step 4: Enable Email Authentication

By default, Supabase email authentication is enabled. However, you may want to customize settings:

1. In your Supabase dashboard, go to **Authentication** > **Providers**
2. Click on **Email**
3. Configure:
   - **Enable Email provider**: ON (should be enabled by default)
   - **Confirm email**: ON (recommended - users must verify their email)
   - **Secure email change**: ON (recommended)

## Step 5: Customize Email Templates (Optional)

1. Go to **Authentication** > **Email Templates**
2. Customize the email templates for:
   - Confirmation email
   - Password reset
   - Magic link
   - Email change

## Step 6: Test Your Authentication

1. Restart your development server if it's running:
   ```bash
   npm start
   ```

2. Navigate to the signup page at `http://localhost:3000/signup`
3. Create a test account
4. Check your email for the confirmation link (if email confirmation is enabled)
5. Try logging in at `http://localhost:3000/login`

## Troubleshooting

### "Invalid API key" error
- Double-check that your `.env` file has the correct variable names with the `REACT_APP_` prefix
- Restart your development server after creating/updating the `.env` file

### Email not sending
- Check Supabase dashboard under **Authentication** > **Logs** for any errors
- For development, you can disable email confirmation temporarily:
  - Go to **Authentication** > **Providers** > **Email**
  - Turn OFF **Confirm email**

### "Invalid login credentials" error
- Make sure the user has confirmed their email (if confirmation is enabled)
- Check that the password is at least 6 characters long
- Verify in Supabase dashboard under **Authentication** > **Users** that the account exists

## Security Notes

- **Never commit your `.env` file to Git** - it's already added to `.gitignore`
- The anon key is safe to use in the frontend - it has limited permissions
- For production, consider setting up Row Level Security (RLS) policies in Supabase

## Next Steps

Once authentication is working, you can:
- Add password reset functionality
- Implement social authentication (Google, GitHub, etc.)
- Create protected routes that require authentication
- Add user profiles and preferences
- Store user-specific data in Supabase database

## Additional Resources

- [Supabase Auth Documentation](https://supabase.com/docs/guides/auth)
- [React Quick Start Guide](https://supabase.com/docs/guides/auth/quickstarts/react)
- [Email Templates](https://supabase.com/docs/guides/auth/auth-email-templates)
