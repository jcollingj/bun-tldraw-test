# Tldraw + Bun Error Reproduction

This project is a reproduction of intermittent errors encountered when trying to use **Tldraw** with **Bun** to serve React components.

## Setup Steps

This reproduction was created using the following steps:

1. **Initialize project with Bun:**
   ```bash
   bun init
   ```

2. **Select React with shadcn/ui + Tailwind CSS** during the initialization process

3. **Install Tldraw:**
   ```bash
   bun add tldraw
   ```

4. **Attempt to use Tldraw components** - this is where intermittent errors occur

Get this error:
```
 TypeError: Illegal invocation
    at migrateUserPreferences (http://localhost:3000/_bun/client/index-00000000c28f407a.js:44933:39)
    at loadUserPreferences (http://localhost:3000/_bun/client/index-00000000c28f407a.js:44943:14)
    at Object.getUserPreferences2 [as getUserPreferences] (http://localhost:3000/_bun/client/index-00000000c28f407a.js:44987:17)
    at __UNSAFE__Computed.derive (http://localhost:3000/_bun/client/index-00000000c28f407a.js:50887:127)
    at __UNSAFE__Computed.__unsafe__getWithoutCapture (http://localhost:3000/_bun/client/index-00000000c28f407a.js:13702:31)
    at __UNSAFE__Computed.get (http://localhost:3000/_bun/client/index-00000000c28f407a.js:13735:23)
    at http://localhost:3000/_bun/client/index-00000000c28f407a.js:49580:34
    at react-stack-bottom-frame (http://localhost:3000/_bun/client/index-00000000c28f407a.js:69850:20)
    at runWithFiberInDEV (http://localhost:3000/_bun/client/index-00000000c28f407a.js:57145:72)
    at commitHookEffectListMount (http://localhost:3000/_bun/client/index-00000000c28f407a.js:62542:627) The above error occurred in the <TldrawEditorBeforeLoading> component. React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary2.
```
