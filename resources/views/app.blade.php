<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>African Development Universalis</title>

    <meta name="description" content="">
    <meta name="author" content="">

    <!--FONTS-->

    <!--CSS-->
    <link rel="stylesheet" href="template/css/bootstrap.min.css" />
    <link rel="stylesheet" href="template/css/style.css" />
    <link rel="stylesheet" href="template/css/animate.css" />
    <link rel="stylesheet" href="template/css/font-awesome.min.css">
    <link href="template/css/owl.carousel.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="template/css/cubeportfolio.min.css">

    <!--[if lt IE 9]>
 <script src="http://html5shim.googlecode.com/svn/trunk/html5.js" type="text/javascript"></script>
 <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
<![endif]-->
    <script src="template/js/custom.modernizr.js" defer></script>
    <!--DEMO-->
    <link rel="stylesheet" href="template/styleswitcher/css/styleswitcher.css">
    <link id="colours" rel="stylesheet" href="template/css/colour.css" />


    <!-- app-->
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet" />
    <script src="{{ mix('/js/app.js') }}" defer></script>

</head>

<body class="royal_loader">
    <div id="royal_preloader"></div>

    @inertia

    <!--SCRIPTS-->
    <script src="template/js/jquery.js"></script>
    <script src="template/js/retina.js" defer></script>
    <script src="template/js/bootstrap.min.js"></script>
    <!--PRELOADER SET YOUR STYLES HERE-->
    <script src="template/js/royal_preloader.min.js"></script>
    <script type="text/javascript" defer>
        Royal_Preloader.config({
            mode: 'logo',
            logo: 'template/img/loader.gif',
            logo_size: [80, 80],
            text_colour: '#eee',
            showProgress: true,
            showPercentage: true,
            background: '#2E3138'
        });
    </script>
    <script src="template/js/smooth-scroll.js" defer></script>
    <script src="template/js/jquery.appear.js" defer></script>
    <script src="template/js/parallax.js" defer></script>
    <script src="template/js/wow.js" defer></script>
    <script src="template/js/count.js" defer></script>
    <script src="template/js/charts.js" defer></script>
    <script src="template/js/jquery.cubeportfolio.min.js" defer></script>
    <script src="template/js/main.js" defer></script>
    <script src="template/js/scripts.js" defer></script>

    <script type="text/javascript" src="template/js/jquery.fs.wallpaper.js" defer></script>


    <script type="text/javascript" defer>
        $(document).ready(function() {
            $(".wallpapered").wallpaper();
        });
    </script>
    <script src="template/js/owl.carousel.min.js"></script>
    <script type="text/javascript" defer>
        $(document).ready(function() {
            $("#clients").owlCarousel({
                autoPlay: 3000, //Set AutoPlay to 3 seconds
                items: 4,
                itemsDesktop: [1199, 3],
                itemsDesktopSmall: [979, 3]
            });
        });
    </script>
    <script src="template/styleswitcher/js/styleswitcher.js" defer></script>
</body>

</html>
