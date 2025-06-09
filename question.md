PokeDex Pro – Advanced Pokémon Explorer
Objective
Create a full-featured Pokémon Explorer app with filtering, sorting, pagination, routing, and global state management using Redux (classical or Toolkit).

API Source
Base: https://pokeapi.co/api/v2/pokemon?offset=0&limit=20
Detail: Use url inside each Pokémon object for full data.
Requirements
1. Routing with React Router
| Route | Page | | --- | --- | | / | Dashboard | | /details/:id | Pokémon Info |

Use useParams() to access the Pokémon ID on detail page.
2. Global State (Redux or Redux Toolkit)
Store and manage via Redux:

Fetched Pokémon data
Current filters and sorting
Pagination state
Loading and error status
3. Dashboard Page
Display a grid or table of Pokémon with:

Name
Base Experience
Weight
Types
Sprite Image
Pagination
Next / Previous buttons (update offset via API)
Track current page in Redux
4. Filter + Sort Options
Filter by Type (e.g., fire, water)
Sort by Name (A-Z / Z-A)
All filters and sorts must persist across pagination using global state.

5. Details Page (/details/:id)
Show the selected Pokémon's:

Height, Weight
Moves, Abilities
All available sprites
Use:

"Back to Dashboard" button for navigation
Conditional Rendering (IMP.)
| Condition | Render | | --- | --- | | Loading state | <Loader /> or custom spinner | | Error state | Error banner or fallback message | | No results from filter | No Pokémon match your search. | | High base experience (>100) | Show ⚡ emoji next to name | | Pokémon type = fire | Card border in red | | Water type | Card border in blue | | Score > 100 | Light green background |

Expectations
| Feature | Skill Tested | | --- | --- | | React Hooks | useState, useEffect, useRef | | State Mgmt | Redux (classical or toolkit) | | Routing | react-router-dom | | UX Logic | Conditional render + styling | | Data Logic | Filters, sorting, pagination |

Suggested Folder Structure
src/
├── app/
│   └── store.js
├── features/pokemon/
│   ├── pokemonSlice.js / pokemonReducer.js
├── components/
│   ├── Loader.jsx
│   ├── ErrorBanner.jsx
│   ├── Filters.jsx
│   └── Pagination.jsx
├── pages/
│   ├── Dashboard.jsx
│   └── DetailPage.jsx
├── App.jsx
└── main.jsx

Cannot read properties of null (reading 'useContext')
TypeError: Cannot read properties of null (reading 'useContext')
    at exports.useContext (http://localhost:3000/static/js/bundle.js:12684:23)
    at useInRouterContext (http://localhost:3000/static/js/bundle.js:5666:45)
    at useRoutesImpl (http://localhost:3000/static/js/bundle.js:5773:13)
    at useRoutes (http://localhost:3000/static/js/bundle.js:5770:10)
    at Routes (http://localhost:3000/static/js/bundle.js:6573:10)
    at react-stack-bottom-frame (http://localhost:3000/static/js/bundle.js:28835:18)
    at renderWithHooks (http://localhost:3000/static/js/bundle.js:19045:20)
    at updateFunctionComponent (http://localhost:3000/static/js/bundle.js:20738:17)
    at beginWork (http://localhost:3000/static/js/bundle.js:21324:16)
    at runWithFiberInDEV (http://localhost:3000/static/js/bundle.js:16816:68)