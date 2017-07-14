<cfoutput>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Welcome to Coldbox!</title>
	
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
	<link rel="manifest" href="/manifest.json">
	<meta name="apple-mobile-web-app-title" content="PWA Demo">
	<meta name="application-name" content="PWA Demo">
	<meta name="theme-color" content="##603cba">

	<meta name="description" content="ColdBox Application Template">
    <meta name="author" content="Ortus Solutions, Corp">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!---Base URL --->
	<base href="#event.getHTMLBaseURL()#" />
	<!---css --->
	<link href="includes/css/bootstrap.min.css" rel="stylesheet">
	<!---js --->
    <script src="includes/js/jquery.js"></script>
	<script src="includes/js/bootstrap.min.js"></script>
	<style>
	 /* Utility */
	.centered { text-align: center !important; }
	.inline{ display: inline !important; }
	.margin10{ margin: 10px; }
	.padding10{ padding: 10px; }
	.margin0{ margin: 0px; }
	.padding0{ padding: 0px; }
	.footer {
	  margin-top: 45px;
	  padding: 35px 35px;
	  border-top: 1px solid ##e5e5e5;
	}
	.footer p {
	  margin-bottom: 0;
	  color: ##555;
	}
	body{ padding-top: 50px; }
	</style>
</head>
<body data-spy="scroll">
	<!---Top NavBar --->
	<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
		<div class="container-fluid">
			<!---Brand --->
			<div class="navbar-header">
				<!---Branding --->
				<a class="navbar-brand" href="#event.buildLink('')#"><strong>Home</strong></a>
				<a class="navbar-brand" href="#event.buildLink('products')#"><strong>Our Products</strong></a>
				<a class="navbar-brand" href="#event.buildLink('about')#"><strong>About Our Company</strong></a>
				<a class="navbar-brand" href="#event.buildLink('gallery')#"><strong>Photo Gallery</strong></a>
			</div>
		</div> <!---end container --->
	</nav> <!---end navbar --->

	<!---Container And Views --->
	<div class="container">#renderView()#</div>

	<footer class="footer">
		<p class="pull-right">
			<a href="##"><i class="glyphicon glyphicon-arrow-up"></i> Back to top</a>
		</p>
		<p>
			<a href="http://www.coldbox.org">ColdBox Platform</a> is a copyright-trademark software by
			<a href="http://www.ortussolutions.com">Ortus Solutions, Corp</a>
		</p>
		<p>
			Design thanks to
			<a href="http://twitter.github.com/bootstrap">Twitter Boostrap</a>
		</p>
	</footer>

	<script src="includes/js/app.js" async></script>
</body>
</html>
</cfoutput>
