# Backup original files
Copy-Item -Path "src\app\resources" -Destination "src\app\resources.bak" -Recurse -Force

# Move resources content to docs
if (Test-Path "src\app\resources\docs") {
    Copy-Item -Path "src\app\resources\docs\*" -Destination "src\app\docs" -Recurse -Force
}

# Create symlink for backward compatibility
if (Test-Path "src\app\resources") {
    Remove-Item -Path "src\app\resources" -Recurse -Force
    cmd /c mklink /D "src\app\resources" "docs"
}

Write-Host "Restructuring complete. Original files backed up in src\app\resources.bak"
