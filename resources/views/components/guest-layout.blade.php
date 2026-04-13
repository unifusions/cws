<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ $title ?? ' | Unifusions' }} </title>
   
   <meta name="keywords" content="{{ $keywords ?? '' }}"/>
    <meta name="description" content="{{ $description ?? '' }}" />
             
    <meta name="og:title" content="{{ $title ?? ' | Unifusions' }}"/> 
    <meta name="og:description" content="{{ $description ?? '' }}">
 
<!-- og:image	The preview image (e.g., a photo of your high-quality uniforms).
og:url	The permanent URL of your landing page.
og:type	Usually "website" for a landing page. -->
    
   <meta name="robots" content="index, follow">
    <link rel="icon" href="/images/fav-icon.png">

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap" rel="stylesheet" />
   @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/islands.tsx' ])

        <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-KL2QTD4LC9"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-KL2QTD4LC9');
</script>
</head>
<body class="bg-white text-gray-900">

     
    {{ $slot }}
</body>
</html>