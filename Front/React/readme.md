Problem Statement: SnackShelf – Personal Snack Inventory Dashboard
Objective:
Build a sleek, responsive React.js app called SnackShelf to manage your personal snack inventory. Users can add, view, search, sort, filter, and analyze their snack collection. The data is synced in real-time using Firebase Realtime DB. The UI must be responsive, styled without any external CSS libraries, and include a separate Analytics Page.

Snack Schema (Firebase /snacks node):
{
  "id": "snk_001",
  "title": "Dark Chocolate Almonds",
  "category": "Sweet",
  "price": 5.99,
  "rating": 4.7,
  "createdAt": 1717020000000
}

Feature Requirements
1. CRUD with Firebase
Users can:
Add new snacks
Edit existing snacks
Delete snacks
Changes must update DOM immediately and persist to Firebase.
Editing should allow inline or modal-based updates.
2. Search Functionality
Input must:
Auto-focus on page load
Filter results by snack title
Be case-insensitive
React instantly to keystrokes
3. Pagination (6 per page)
Display 6 snacks per page
Render in a 3x2 responsive grid
Include:
Previous / Next buttons
Page numbers
Disabled state on edge pages
4. Filter + Sort Controls
Filter by category:
e.g., Sweet, Savory, Beverage, Baked
Sort Options:
By title (A–Z / Z–A)
By price (Low–High / High–Low)
By rating
5. Analytics Page (/analytics)
Route: /analytics using React Router

Display insights like:

Total snacks
Average price
Average rating
Most common category
Highest priced snack (title + price)
Lowest priced snack (title + price)
6. Styling Rules
Grid and form components must look clean and readable
No Bootstrap, Tailwind, or external stylesheets