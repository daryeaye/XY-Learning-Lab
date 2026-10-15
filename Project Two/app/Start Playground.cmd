@echo off
setlocal
cd /d "%~dp0"
where node >nul 2>nul
if %errorlevel% equ 0 (
  node server.mjs
) else (
  if exist "C:\Users\darye\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe" (
    "C:\Users\darye\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe" server.mjs
  ) else (
    echo Install Node.js, then open this launcher again.
    pause
  )
)
