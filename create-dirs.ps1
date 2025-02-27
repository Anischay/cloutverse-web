$dirs = @(
    "src\app\auth",
    "src\app\platform",
    "src\app\docs",
    "src\app\docs\api",
    "src\app\docs\guides",
    "src\app\docs\tutorials",
    "src\components\ui\buttons",
    "src\components\ui\cards",
    "src\components\ui\forms",
    "src\components\features\markets",
    "src\components\features\tokens",
    "src\components\sections\home",
    "src\components\sections\docs"
)

foreach ($dir in $dirs) {
    if (-not (Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir -Force
    }
}
