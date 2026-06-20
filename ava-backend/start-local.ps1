$ErrorActionPreference = "Stop"

$backend = Split-Path -Parent $MyInvocation.MyCommand.Path
$python = Join-Path $backend ".venv\Scripts\python.exe"
if (-not (Test-Path $python)) {
    throw "Python environment missing. Run the setup commands from README.md first."
}

Set-Location $backend
Write-Host "AVA API: http://127.0.0.1:8000" -ForegroundColor Green
Write-Host "API docs: http://127.0.0.1:8000/docs" -ForegroundColor Green
& $python -m uvicorn app.main:app --host 127.0.0.1 --port 8000 --reload
