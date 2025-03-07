
// This file handles authentication configuration and utilities

// Mock admin credentials (in a real app, these would come from environment variables)
// WARNING: This is not secure for production! In production, use environment variables.
const ADMIN_CREDENTIALS = {
  email: "admin@ckyclounge.rw",
  // In a real app, this would be hashed and stored securely
  password: "admin123"
};

// Mock rate limiting functionality (in a real app, use a proper rate limiter)
const failedAttempts: Record<string, { count: number, timestamp: number }> = {};

/**
 * Validates admin credentials
 * @param email Admin email
 * @param password Admin password
 * @returns Authentication result
 */
export const validateAdminCredentials = (email: string, password: string) => {
  // Check for rate limiting (5 failed attempts lockout for 10 minutes)
  const ip = "127.0.0.1"; // In a real app, get the actual IP
  const now = Date.now();
  
  // Clean up expired lockouts
  const LOCKOUT_DURATION = 10 * 60 * 1000; // 10 minutes in milliseconds
  if (failedAttempts[ip] && now - failedAttempts[ip].timestamp > LOCKOUT_DURATION) {
    delete failedAttempts[ip];
  }
  
  // Check if locked out
  if (failedAttempts[ip] && failedAttempts[ip].count >= 5) {
    const remainingLockout = Math.ceil((LOCKOUT_DURATION - (now - failedAttempts[ip].timestamp)) / 1000 / 60);
    return { 
      success: false, 
      message: `Too many failed attempts. Please try again in ${remainingLockout} minutes.` 
    };
  }
  
  // Validate credentials
  if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
    // Reset failed attempts on success
    if (failedAttempts[ip]) {
      delete failedAttempts[ip];
    }
    return { success: true };
  } else {
    // Increment failed attempts
    if (!failedAttempts[ip]) {
      failedAttempts[ip] = { count: 1, timestamp: now };
    } else {
      failedAttempts[ip].count += 1;
      failedAttempts[ip].timestamp = now;
    }
    
    const attemptsLeft = 5 - failedAttempts[ip].count;
    return { 
      success: false, 
      message: attemptsLeft > 0 ? 
        `Invalid credentials. ${attemptsLeft} attempts remaining.` : 
        "Too many failed attempts. Please try again in 10 minutes." 
    };
  }
};

/**
 * Manages session for admin authentication
 */
export const adminSession = {
  // Create a session (in a real app, use JWT or another secure method)
  create: () => {
    const expiry = Date.now() + 30 * 60 * 1000; // 30 minutes from now
    localStorage.setItem("ckyc_admin_session", JSON.stringify({ expiry }));
    return true;
  },
  
  // Validate if a session exists and is still valid
  isValid: () => {
    const sessionStr = localStorage.getItem("ckyc_admin_session");
    if (!sessionStr) return false;
    
    try {
      const session = JSON.parse(sessionStr);
      return session.expiry > Date.now();
    } catch (e) {
      return false;
    }
  },
  
  // Extend the current session
  extend: () => {
    if (adminSession.isValid()) {
      adminSession.create(); // Re-create to reset expiry
      return true;
    }
    return false;
  },
  
  // End the current session
  end: () => {
    localStorage.removeItem("ckyc_admin_session");
    return true;
  }
};
