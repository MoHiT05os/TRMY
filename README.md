# THEREALMOHITYADAV // THE SINGULARITY

**Version:** 1.0.4  
**Status:** SYSTEMS_ONLINE

Welcome to the digital headquarters of the Mohit Universe. This codebase powers the `THEREALMOHITYADAV` brand ecosystem, featuring a high-performance "Megamind" aesthetic, interactive 3D elements, and a modular hub structure.

## 📂 Project Structure

-   `index.html` - The Main Hub (Nexus). Connects to all sub-brands.
-   `style.css` - Global Design System (Deep Black, Cyber Cyan, Grid Physics).
-   `main.js` - Core Logic (Starfield, Parallax, UI Interactions).
-   `blog.html` (MOHITLOGS) - Dynamic "Mission Log" feed.
-   `blog-content.js` - **DATA SOURCE**: Edit this file to add new blog posts.
-   `store.html` (MOHITFORGE) - Tactical Armory storefront.
-   `builds.html` / `creates.html` / `files.html` / `labs.html` - Static sub-brand landing pages.

## 🛠️ How to Manage Your Universe

### 1. Adding a New Blog Post
You do not need to touch the HTML.
1.  Open `blog-content.js`.
2.  Add a new object to the `logs` array:
    ```javascript
    {
        id: 'LOG_026',
        title: 'New Project Alpha',
        desc: 'Description of the new amazing thing.',
        date: '2026.02.01'
    },
    ```
3.  Save. The `blog.html` page updates automatically.

### 2. Updating Social Links
1.  Open `index.html`.
2.  Scroll to the bottom `<footer class="comm-array">`.
3.  Edit the `href="#"` in the `channel-grid` section to point to your real profiles (LinkedIn, Medium, YouTube, Instagram).

### 3. Adding Products to Store
1.  Open `store.html`.
2.  Copy an existing `<a href="#" class="sector-card">...</a>` block.
3.  Paste it inside the `.sector-grid`.
4.  Update the `ITEM_XX` badge, Title, and Description.

## 🚀 Deployment

This project is **Static (HTML/CSS/JS)**. It requires no backend server.

**Recommended Hosts:**
-   **GitHub Pages**: Push this folder to a repo and enable Pages in Settings.
-   **Netlify / Vercel**: Drag and drop the folder into their dashboard.

## 🎨 Customization

To change the **Main Color Theme**:
1.  Open `style.css`.
2.  Edit the `--cyber-cyan` variable at the top (`:root`).
    ```css
    :root {
        --cyber-cyan: #ff0055; /* Change to Neon Red, for example */
    }
    ```
    This will instantly update the glows, text, and borders across the entire site.

---
*System Architect: Antigravity*
