
# Environment Setup for CKYC Lounge Admin

## Local Environment Setup

1. Copy the `.env.example` file to a new file named `.env` in the project root:
   ```
   cp .env.example .env
   ```

2. Edit the `.env` file and replace the placeholder values with your actual credentials:
   ```
   # Admin credentials
   ADMIN_EMAIL=your_admin_email@example.com
   ADMIN_PASSWORD=your_secure_password
   
   # Cloudinary configuration (for image uploads)
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```

3. Make sure `.env` is included in your `.gitignore` file to prevent committing sensitive information.

## Credentials for Testing

For testing purposes, you can use these default credentials:
- Email: admin@ckyclounge.rw
- Password: admin123

**Important**: These credentials are hardcoded in the `src/config/auth.ts` file for development. In a production environment, you should replace these with environment variables and implement proper authentication with hashed passwords.

## Production Deployment

For production deployment:

1. Ensure all sensitive information is stored as environment variables.
2. Use proper password hashing (bcrypt or similar).
3. Implement HTTPS for all routes.
4. Consider using a more robust authentication system like NextAuth.js or a similar solution.
