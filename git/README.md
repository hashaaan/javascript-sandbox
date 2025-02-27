# Changing the Git Remote

To change the Git remote for your repository, follow these steps:

1. **Initialize the Repository with `main` branch if it a new**
   Open your terminal in the repository directory and run:

   ```
   git init --initial-branch=main
   ```

   This command lists all existing remotes and their URLs.

2. **Check Current Remotes**
   If is an existing repository check for current remotes using:

   ```
   git remote -v
   ```

   This command lists all existing remotes and their URLs.

3. **Change the Remote URL**
   If you need to update the URL for an existing remote (e.g., "origin"), use:

   ```
   git remote add origin <new-url>
   ```

   Replace `<new-url>` with the new repository URL.

4. **Verify the Change**
   Run the following again to confirm the new URL:

   ```
   git remote -v
   ```

5. **Add a New Remote (Optional)**
   If you prefer to add a separate remote instead of changing an existing one:
   ```
   git remote add <remote-name> <new-url>
   ```
   Replace `<remote-name>` with the desired name and `<new-url>` with the repository URL.

That's it! Your Git remote is now updated.
