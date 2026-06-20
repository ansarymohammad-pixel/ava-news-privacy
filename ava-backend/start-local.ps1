$ErrorActionPreference = "Stop"

$backend = Split-Path -Parent $MyInvocation.MyCommand.Path
$python = Join-Path $backend ".venv\Scripts\python.exe"
$ollama = Join-Path $env:LOCALAPPDATA "Programs\Ollama\ollama.exe"

if (-not (Test-Path $python)) {
    throw "Python environment missing. Run the setup commands from README.md first."
}

if (-not (Test-Path $ollama)) {
    throw "Ollama is not installed. Install it from https://ollama.com/download/windows."
}

try {
    Invoke-RestMethod -Uri "http://127.0.0.1:11434/api/tags" -TimeoutSec 2 | Out-Null
} catch {
    Start-Process -FilePath $ollama -ArgumentList "serve" -WindowStyle Hidden
    Start-Sleep -Seconds 3
}

Set-Location $backend
Write-Host "AVA API: http://127.0.0.1:8000" -ForegroundColor Green
Write-Host "API docs: http://127.0.0.1:8000/docs" -ForegroundColor Green
& $python -m uvicorn app.main:app --host 127.0.0.1 --port 8000 --reload
