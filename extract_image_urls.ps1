$lines = Get-Content 'd:/medical collage/gallery_urls.txt'
$thumbUrls = $lines | Where-Object { $_ -match '/gallery/thumb/' }
$fullUrls = $thumbUrls -replace '/gallery/thumb/', '/gallery/' -replace '\?bwg=.*$', ''
$fullUrls | Set-Content 'd:/medical collage/gallery_image_urls.txt'

