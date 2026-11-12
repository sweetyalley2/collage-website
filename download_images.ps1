$dest = 'D:\medical collage\public\gallery'
New-Item -ItemType Directory -Force -Path $dest | Out-Null
Get-Content 'D:\medical collage\gallery_unique_urls.txt' | ForEach-Object {
    $url = $_.Trim()
    if ($url) {
        $filename = [System.IO.Path]::GetFileName($url)
        $outPath = Join-Path $dest $filename
        Write-Host "Downloading $url to $outPath"
        try {
            Invoke-WebRequest -Uri $url -OutFile $outPath -UseBasicParsing
        } catch {
            Write-Host "Failed to download $url"
        }
    }
}

