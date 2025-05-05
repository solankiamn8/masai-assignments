# Authentication vs Authorization

Understanding the difference between **authentication** and **authorization** is essential when building secure web applications.

---

## Authentication

- **Definition:** Confirms who the user is.
- **Purpose:** Verifies the identity of a user or system.
- **Example:** Logging into a website with your email and password.
- **When it Happens:** Before authorization.
- **Data Used:** Username, password, biometrics, OTP, etc.
- **Technologies Involved:** Login forms, OAuth, Firebase Auth, etc.

---

## Authorization

- **Definition:** Determines what a user is allowed to do.
- **Purpose:** Grants or restricts access to resources or features.
- **Example:** Accessing an admin dashboard after logging in.
- **When it Happens:** After authentication is successful.
- **Data Used:** User roles, policies, access levels.
- **Technologies Involved:** Access control lists (ACL), role-based access control (RBAC), etc.

---

## Comparison Table

| Feature            | Authentication                          | Authorization                            |
|--------------------|------------------------------------------|-------------------------------------------|
| What it does       | Verifies identity                        | Determines permissions                    |
| Checks             | Credentials (e.g., password)             | Access rights (e.g., admin role)          |
| Order              | Happens first                            | Happens after authentication              |
| Result             | Logged-in user                           | Access to specific resources              |
| Example            | Login form submission                    | Accessing `/admin` page                   |

---

## Summary

- **Authentication** = "Who are you?"
- **Authorization** = "What can you do?"

A user can be authenticated (logged in) but not authorized (no access to admin panel).
