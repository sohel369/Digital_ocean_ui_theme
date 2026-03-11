# Instructions for Adding New Categories to Platform 2.0

The Platform 2.0 advertiser system is designed to be modular and easy to extend. It uses a 5x5 grid layout (25 slots total). Currently, 24 categories are implemented, with 1 expansion slot reserved.

## To add a new category (e.g., "Charity & Non-Profit"):

### 1. Update Backend Configuration
Edit `backend/app/platform2_categories.py`:
1.  Add the new category to the appropriate Tier dictionary (`TIER1_HIGH_VALUE`, `TIER2_MEDIUM_VALUE`, or `TIER3_ENTRY_LEVEL`).
    ```python
    TIER3_ENTRY_LEVEL = {
        ...,
        "Charity & Non-Profit": 1.1,
    }
    ```
2.  Update the `PLATFORM2_GRID_ORDER` list by replacing the comment slot or adding to the end (limit 25 for the current grid layout).
    ```python
    PLATFORM2_GRID_ORDER = [
        ...,
        "Charity & Non-Profit"
    ]
    ```

### 2. Update Frontend Configuration
Edit `src/config/platform2Categories.js`:
1.  Add the category object to the `PLATFORM2_CATEGORIES` array. Ensure `gridPos` matches its position in the grid (1-25).
    ```javascript
    {
        id: "charity-nonprofit",
        name: "Charity & Non-Profit",
        multiplier: 1.1,
        tier: "tier3",
        iconClass: "fa-solid fa-ribbon",
        gridPos: 25 // Replacing the placeholder or adding next
    }
    ```

### 3. Verification
- The backend API `/api/platform2/categories` will automatically reflect the changes.
- The frontend 5x5 grid in `Platform 2.0` menu will automatically update with the new icon and name.
- The pricing engine will automatically use the new multiplier for calculations via the `/api/platform2/calculate` endpoint.

---
**Note:** If you need more than 25 categories, you will need to adjust the CSS grid columns in `src/pages/Platform2CategorySelector.jsx` (e.g., from `xl:grid-cols-5` to `xl:grid-cols-6`).
