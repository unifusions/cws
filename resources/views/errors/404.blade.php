<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ $title ?? 'Your Brand' }}</title>
 
    <link rel="icon" href="/images/fav-icon.png">
   @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/islands.tsx' ])
</head>
<body class="bg-white ">

<div class="container mx-auto py-10">
    <div id="error404" ></div>
    
</div>
     
    
</body>
</html>