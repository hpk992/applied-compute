# Git Workflow Instructions - Applied Compute

## Project Overview
This is a Next.js 16 front-end project utilizing Tailwind CSS 4 for Applied Compute. The project focuses on creating robust, reusable components including buttons, boxes, and layouts.

## Branch Strategy

### Main Branches
- `master` - Production-ready code
- `develop` - Integration branch for features

### Feature Branches
Use the following naming conventions:
- `feature/component-name` - For new components (e.g., `feature/button-component`)
- `feature/layout-name` - For layout components (e.g., `feature/grid-layout`)
- `fix/bug-description` - For bug fixes
- `refactor/component-name` - For refactoring existing code
- `style/component-name` - For styling updates

## Initial Setup

```bash
# Ensure you're on master branch
git checkout master

# Create and switch to develop branch (if not exists)
git checkout -b develop

# Push develop branch to remote
git push -u origin develop
```

## Daily Workflow

### 1. Starting New Component Work

```bash
# Update your local repository
git checkout develop
git pull origin develop

# Create a new feature branch
git checkout -b feature/button-component

# Example feature branches for your components:
# git checkout -b feature/button-variants
# git checkout -b feature/card-component
# git checkout -b feature/modal-component
# git checkout -b feature/grid-layout
# git checkout -b feature/flex-layout
```

### 2. Making Changes

```bash
# Check which files you've modified
git status

# View specific changes
git diff

# Stage specific files
git add app/components/Button.tsx
git add app/components/Button.module.css

# Or stage all changes
git add .

# Commit with descriptive message
git commit -m "feat: add primary button component with Tailwind variants"
```

## Commit Message Convention

Use conventional commits for better project history:

```bash
# Format: <type>(<scope>): <subject>

# Types:
feat:     # New feature
fix:      # Bug fix
refactor: # Code refactoring
style:    # Formatting, styling (no code change)
docs:     # Documentation only
test:     # Adding tests
chore:    # Maintenance tasks

# Examples:
git commit -m "feat(button): add primary, secondary, and danger variants"
git commit -m "feat(layout): create responsive grid system"
git commit -m "fix(button): resolve hover state on mobile devices"
git commit -m "refactor(card): extract card styles to separate component"
git commit -m "style(button): update padding and border radius"
git commit -m "docs(readme): add component usage examples"
```

### Component-Specific Commit Examples

```bash
# Button components
git commit -m "feat(button): create base button component with TypeScript props"
git commit -m "feat(button): add size variants (sm, md, lg, xl)"
git commit -m "feat(button): implement icon button support"

# Box/Card components
git commit -m "feat(box): create flexible box component with padding variants"
git commit -m "feat(card): add card component with header, body, footer slots"

# Layout components
git commit -m "feat(layout): implement responsive container component"
git commit -m "feat(layout): create grid system with breakpoints"
git commit -m "feat(layout): add flex layout utilities"
```

## Pushing Changes

```bash
# Push your feature branch to remote
git push origin feature/button-component

# If it's your first push on this branch
git push -u origin feature/button-component

# For subsequent pushes
git push
```

## Pulling Latest Changes

```bash
# Update your current branch with latest from develop
git checkout develop
git pull origin develop

# Update your feature branch with latest develop changes
git checkout feature/button-component
git merge develop

# Or use rebase for cleaner history
git rebase develop
```

## Creating Pull Requests

1. Push your feature branch to remote
2. Go to GitHub repository
3. Click "Compare & pull request"
4. Set base branch to `develop`
5. Add descriptive PR title and description
6. Request review if needed
7. Merge after approval

### PR Title Format
```
feat(button): Add reusable button component with variants

- Implemented primary, secondary, outline variants
- Added size options (sm, md, lg)
- Included TypeScript prop types
- Added Tailwind CSS 4 styling
- Responsive design for mobile/tablet/desktop
```

## Merging Workflow

```bash
# After PR approval, merge to develop
git checkout develop
git merge feature/button-component
git push origin develop

# Delete feature branch locally
git branch -d feature/button-component

# Delete feature branch remotely
git push origin --delete feature/button-component
```

## Project Structure for Components

```
app/
├── components/
│   ├── ui/
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.types.ts
│   │   │   └── index.ts
│   │   ├── Card/
│   │   │   ├── Card.tsx
│   │   │   ├── Card.types.ts
│   │   │   └── index.ts
│   │   └── Box/
│   │       ├── Box.tsx
│   │       ├── Box.types.ts
│   │       └── index.ts
│   └── layouts/
│       ├── Container/
│       ├── Grid/
│       └── Flex/
```

## Recommended Git Commands for Your Workflow

### Quick Status Check
```bash
# View status
git status -s

# View commit history
git log --oneline --graph --decorate --all

# View recent commits
git log -5 --oneline
```

### Undoing Changes

```bash
# Discard changes in working directory
git checkout -- filename.tsx

# Unstage files
git reset HEAD filename.tsx

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes) - BE CAREFUL!
git reset --hard HEAD~1

# Amend last commit message
git commit --amend -m "new message"
```

### Stashing Work

```bash
# Save work in progress
git stash save "WIP: button component animations"

# List stashes
git stash list

# Apply most recent stash
git stash apply

# Apply and remove stash
git stash pop

# Apply specific stash
git stash apply stash@{0}
```

## Release Workflow

```bash
# When ready to release to production
git checkout master
git merge develop
git tag -a v1.0.0 -m "Release version 1.0.0: Initial component library"
git push origin master --tags
```

## Component Development Workflow Example

```bash
# 1. Start button component
git checkout develop
git pull origin develop
git checkout -b feature/button-component

# 2. Create button files and make changes
# ... work on Button.tsx, Button.types.ts ...

# 3. Commit your work
git add app/components/ui/Button/
git commit -m "feat(button): create base button component"

# 4. Add variants
# ... add primary, secondary variants ...
git add app/components/ui/Button/Button.tsx
git commit -m "feat(button): add primary and secondary variants"

# 5. Add TypeScript types
git add app/components/ui/Button/Button.types.ts
git commit -m "feat(button): add comprehensive TypeScript types"

# 6. Push to remote
git push -u origin feature/button-component

# 7. Create PR on GitHub
# 8. After review and approval, merge to develop
# 9. Delete feature branch

git checkout develop
git pull origin develop
git branch -d feature/button-component
```

## Best Practices

1. **Commit Often**: Make small, focused commits
2. **Clear Messages**: Write descriptive commit messages
3. **Pull Regularly**: Keep your branches updated with develop
4. **One Feature Per Branch**: Don't mix multiple features in one branch
5. **Test Before Commit**: Ensure code works before committing
6. **Review Before Push**: Double-check changes with `git diff`
7. **Clean Branches**: Delete merged branches to keep repo clean

## Useful Aliases (Optional)

Add to `~/.gitconfig`:

```bash
[alias]
    st = status -s
    co = checkout
    br = branch
    cm = commit -m
    pl = pull
    ps = push
    lg = log --oneline --graph --decorate --all
    last = log -1 HEAD
    unstage = reset HEAD --
```

## Running Project Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Run linter before committing
npm run lint

# Format code (if configured)
npm run format
```

## Emergency Commands

```bash
# If you need to abandon all changes and reset to remote
git fetch origin
git reset --hard origin/develop

# If you accidentally committed to wrong branch
git checkout correct-branch
git cherry-pick <commit-hash>
git checkout wrong-branch
git reset --hard HEAD~1
```

---

**Remember**: 
- Always work on feature branches, never directly on `master` or `develop`
- Pull before you push to avoid conflicts
- Write meaningful commit messages for future reference
- Keep commits atomic and focused on single changes
