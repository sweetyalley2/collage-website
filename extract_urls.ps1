$html = Get-Content -Raw 'd:/medical collage/gallery.html'
[regex]::Matches($html, 'src="([^\"]+)"') | ForEach-Object { $_.Groups[1].Value } | Set-Content 'd:/medical collage/gallery_urls.txt'

