<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html>
<html b:css='false' b:defaultwidgetversion='2' b:layoutsVersion='3' b:responsive='true' b:templateVersion='2.5' expr:dir='data:blog.languageDirection' lang='en-US' xml:lang='en' xmlns='http://www.w3.org/1999/xhtml' xmlns:b='http://www.google.com/2005/gml/b' xmlns:data='http://www.google.com/2005/gml/data' xmlns:expr='http://www.google.com/2005/gml/expr'>
&lt;!--<head>--&gt;&lt;head&gt;
<b:comment>TITLE</b:comment>
<b:if cond='data:view.isHomepage or (data:view.isSearch and !data:view.isLabelSearch and !data:blog.searchQuery)'>
  <title><data:view.title.escaped/></title>
  <meta expr:content='data:view.title' property='og:title'/>
  <meta expr:content='data:view.title' property='og:image:alt'/>
  <meta expr:content='data:view.title' name='twitter:title'/>
  <meta expr:content='data:view.title' name='twitter:image:alt'/>
<b:elseif cond='data:view.isSingleItem or data:view.isSearch or data:view.isArchive'/>
  <title><data:blog.pageName/> - <data:blog.title/></title>
  <meta expr:content='data:blog.pageName + &quot; - &quot; + data:blog.title' property='og:title'/>
  <meta expr:content='data:blog.pageName + &quot; - &quot; + data:blog.title' property='og:image:alt'/>
  <meta expr:content='data:blog.pageName + &quot; - &quot; + data:blog.title' name='twitter:title'/>
  <meta expr:content='data:blog.pageName + &quot; - &quot; + data:blog.title' name='twitter:image:alt'/>
<b:elseif cond='data:view.isError'/>
  <title>Page Not Found - <data:blog.title/></title>
  <meta expr:content='&quot;Page Not Found - &quot; + data:blog.title' property='og:title'/>
  <meta expr:content='&quot;Page Not Found - &quot; + data:blog.title' property='og:image:alt'/>
  <meta expr:content='&quot;Page Not Found - &quot; + data:blog.title' name='twitter:title'/>
  <meta expr:content='&quot;Page Not Found - &quot; + data:blog.title' name='twitter:image:alt'/>
<b:else/>
  <title><data:view.title/></title>
  <meta expr:content='data:view.title' property='og:title'/>
  <meta expr:content='data:view.title' property='og:image:alt'/>
  <meta expr:content='data:view.title' name='twitter:title'/>
  <meta expr:content='data:view.title' name='twitter:image:alt'/>
</b:if>
<meta expr:content='data:blog.title' property='og:site_name'/>

<b:comment>JQUERY</b:comment>
<script async='async' src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js'/>

<b:comment>THUMBNAIL</b:comment>
<b:if cond='data:view.featuredImage'>
  <meta expr:content='data:view.featuredImage' property='og:image'/>
  <meta expr:content='data:view.featuredImage' name='twitter:image'/>
<b:elseif cond='data:blog.postImageUrl'/>
  <meta expr:content='data:blog.postImageUrl' property='og:image'/>
  <meta expr:content='data:blog.postImageUrl' name='twitter:image'/>
<b:else/>
  <meta content='https://1.bp.blogspot.com/-KqjnXlwZmlw/XeytBdD9mbI/AAAAAAAAIMQ/HzkSNtRb2ek4hgVkyNp4O-HVrxTBbHfogCPcBGAYYCw/s1600/Igniplex-Documentation.png' property='og:image'/>
  <meta content='https://1.bp.blogspot.com/-KqjnXlwZmlw/XeytBdD9mbI/AAAAAAAAIMQ/HzkSNtRb2ek4hgVkyNp4O-HVrxTBbHfogCPcBGAYYCw/s1600/Igniplex-Documentation.png' name='twitter:image'/>
</b:if>

<b:comment>DESCRIPTION</b:comment>
<b:if cond='data:blog.metaDescription'>
  <meta expr:content='data:blog.metaDescription' name='description'/>
  <meta expr:content='data:blog.metaDescription' property='og:description'/>
  <meta expr:content='data:blog.metaDescription' name='twitter:description'/>
<b:else/>
  <meta expr:content='data:view.title' name='description'/>
  <meta expr:content='data:view.title' property='og:description'/>
  <meta expr:content='data:view.title' name='twitter:description'/>
</b:if>

<b:comment>KEYWORD</b:comment>
<meta content='Write your keyword here, separated with commas' name='keywords'/>
<meta content='Write your keyword here, separated with commas' property='article:tag'/>

<b:comment>CANONICAL</b:comment>
<link expr:href='data:blog.url.canonical' rel='canonical'/>
<link expr:href='data:blog.url.canonical' hreflang='x-default' rel='alternate'/>
<meta expr:content='data:blog.url.canonical' property='og:url'/>

<b:comment>AUTHOR</b:comment>
<meta content='Your Name' name='author'/>
<meta content='Your Name' property='article:author'/>
<link href='https://www.blogger.com/profile/xxxxxxxxxx' rel='me'/>
<link href='https://www.blogger.com/profile/xxxxxxxxxx' rel='author'/>
<link href='https://www.blogger.com/profile/xxxxxxxxxx' rel='publisher'/>
<meta content='xxxxxxxxxx' property='fb:admins'/>
<meta content='https://www.facebook.com/xxxxxxxxxx' property='article:author'/>
<meta content='https://www.facebook.com/xxxxxxxxxx' property='article:publisher'/>
<meta content='@username' name='twitter:site'/>
<meta content='@username' name='twitter:creator'/>

<b:comment>FAVICON</b:comment>
<link expr:href='data:blog.blogspotFaviconUrl' rel='icon' type='image/x-icon'/>
<link expr:href='data:blog.blogspotFaviconUrl' rel='apple-touch-icon'/>

<b:comment>ADDRESS BAR COLOR (MOBILE ONLY)</b:comment>
<b:if cond='data:widgets'>
  <b:comment>Chrome, Firefox OS, Opera, Vivaldi</b:comment>
  <meta expr:content='data:skin.vars.igniplex_main_color' name='theme-color'/>
  <b:comment>Windows Phone</b:comment>
  <meta expr:content='data:skin.vars.igniplex_main_color' name='msapplication-navbutton-color'/>
  <b:comment>iOS Safari</b:comment>
  <meta expr:content='data:skin.vars.igniplex_main_color' name='apple-mobile-web-app-status-bar-style'/>
  <meta content='yes' name='apple-mobile-web-app-capable'/>
</b:if>

<b:comment>BLOG FEED</b:comment>
<b:if cond='data:blog.adultContent'>
  <meta content='adult' name='rating'/>
</b:if>
<meta content='blogger' name='generator'/>
<link href='https://www.blogger.com/openid-server.g' rel='openid.server'/>
<link expr:href='data:blog.homepageUrl.canonical' rel='openid.delegate'/>
<link expr:href='data:blog.homepageUrl.canonical + &quot;feeds/posts/default&quot;' expr:title='data:blog.title + &quot; - Atom&quot;' rel='alternate' type='application/atom+xml'/>
<link expr:href='data:blog.homepageUrl.canonical + &quot;feeds/posts/default?alt=rss&quot;' expr:title='data:blog.title + &quot; - RSS&quot;' rel='alternate' type='application/rss+xml'/>

<b:comment>OTHER SOCIAL MEDIA TAG</b:comment>
<b:comment>Facebook</b:comment>
<meta content='article' property='og:type'/>
<meta content='id_ID' property='og:locale'/>
<meta content='en_US' property='og:locale:alternate'/>
<meta content='en_GB' property='og:locale:alternate'/>
<b:comment>Twitter</b:comment>
<meta content='summary_large_image' name='twitter:card'/>

<b:comment>OTHER META TAG</b:comment>
<meta content='width=device-width, initial-scale=1.0, user-scalable=1.0, minimum-scale=1.0, maximum-scale=5.0' name='viewport'/>
<meta expr:content='&quot;text/html; charset=&quot; + data:blog.encoding' http-equiv='Content-Type'/>
<meta content='all-language' http-equiv='Content-Language'/>
<meta content='IE=Edge' http-equiv='X-UA-Compatible'/>
<b:if cond='data:view.isArchive or data:view.isSearch or data:view.isError'>
  <meta content='noindex,nofollow' name='robots'/>
</b:if>

<b:comment>TRACKING CODE</b:comment>
<meta content='xxxxxxxxx' name='google-site-verification'/>
<meta content='xxxxxxxx' name='msvalidate.01'/>
<b:if cond='data:view.isHomepage'>
<script type='application/ld+json'>
  {
    &quot;@context&quot;: &quot;https://schema.org&quot;,
    &quot;@type&quot;: &quot;WebSite&quot;,
    &quot;url&quot;: &quot;<data:blog.homepageUrl.canonical/>&quot;,
    &quot;name&quot;: &quot;<data:blog.title/>&quot;,
    &quot;alternateName&quot;: &quot;<data:blog.title/>&quot;,
    &quot;potentialAction&quot;: {
      &quot;@type&quot;: &quot;SearchAction&quot;,
      &quot;target&quot;: &quot;<data:blog.homepageUrl.canonical/>search?q={search_term_string}&quot;,
      &quot;query-input&quot;: &quot;required name=search_term_string&quot;
    }
  }
</script>
</b:if>
<b:skin><![CDATA[/*
<!-- Constants -->
<Variable name="igniplexFont" description="Font System" type="font" default="400 14px Arial, sans-serif" hideEditor="true" value="400 14px Arial, sans-serif"/>
<Variable name="body.background" description="Background" color="$(body.background.color)" type="background" default="$(color) none repeat scroll center center" hideEditor="true" value="$(color) url() no-repeat scroll center center /* Credit: Igniel (https://www.igniel.com) */;"/>
<Variable name="body.text.font" description="Body Text Font" type="font" default="$(igniplexFont)" hideEditor="true" value="400 14px Arial, sans-serif"/>      
<Variable name="body.link.color" description="Link color" type="color" default="$(igniplex.main.color)" hideEditor="true" value="#009688"/>
<Variable name="posts.title.color" description="Post title color" type="color" default="$(body.text.color)" hideEditor="true" value="#2f2f2f"/>
<Variable name="posts.icons.color" description="Post info color" type="color" default="#8f8f8f" hideEditor="true" value="#8f8f8f"/>
<Variable name="tabs.font" description="Tabs Font" type="font" default="$(igniplexFont)" hideEditor="true" value="400 14px Arial, sans-serif"/>
<Variable name="tabs.color" description="Tabs color" type="color" default="#dddfe2" hideEditor="true" value="#dddfe2"/>
<Variable name="tabs.color.dark" description="Tabs color dark" type="color" default="#444" hideEditor="true" value="#444444"/>
<Variable name="labels.background.color" description="Labels background color" type="color" default="#fff" hideEditor="true" value="#ffffff"/>

<Group description="Igniplex Color Light">
  <Variable name="igniplex.main.color" description="Main Color" type="color" default="#009688" value="#009688"/>
  <Variable name="body.text.color" description="Body Text Color" type="color" default="#2f2f2f" value="#2f2f2f"/>
  <Variable name="body.link.hover.color" description="All Hover Color" type="color" default="#ef5350" value="#ef5350"/>
  <Variable name="body.background.color" description="Body Background Color" type="color" default="#e9ebee" value="#e9ebee"/>
  <Variable name="posts.background.color" description="Posts Background Color" type="color" default="#fff" value="#ffffff"/>
</Group>

<Group description="Igniplex Color Dark">
  <Variable name="igniplex.main.color.dark" description="Main Color Dark" type="color" default="$(posts.background.color.dark)" value="#242831"/>
  <Variable name="body.text.color.dark" description="Body Text Color Dark" type="color" default="#efefef" value="#efefef"/>
  <Variable name="body.background.color.dark" description="Body Background Color Dark" type="color" default="#1c1f26" value="#1c1f26"/>
  <Variable name="posts.background.color.dark" description="Posts Background Color Dark" type="color" default="#242831" value="#242831"/>
</Group>

<Group description="Single Post Light">
  <Variable name="big.title.color" description="Big Title Color" type="color" default="#fff"  value="#ffffff"/>
  <Variable name="posts.text.color" description="Post Text Color" type="color" default="#515a5d"  value="#515a5d"/>
  <Variable name="posts.link.color" description="Post Link Color" type="color" default="$(igniplex.main.color)" value="#009688"/>
</Group>

<Group description="Single Post Dark">
  <Variable name="big.title.color.dark" description="Big Title Color Dark" type="color" default="#fff"  value="#ffffff"/>
  <Variable name="posts.text.color.dark" description="Post Text Color Dark" type="color" default="#9ba3b5"  value="#9ba3b5"/>
</Group>

<Group description="Footer">
  <Variable name="footer.background.color" description="Background Color" type="color" default="$(igniplex.main.color)"  value="#009688"/>
  <Variable name="footer.text.color" description="Text Color" type="color" default="#fff" value="#ffffff"/>
  <Variable name="footer.link.color" description="Link Color" type="color" default="#ffeb3b"  value="#ffeb3b"/>
</Group>

<Group description="Width">
  <Variable name="width.left" description="Left (Main)" type="length" max="830px" default="830px" value="830px"/>
  <Variable name="width.right" description="Right (Sidebar)" type="length" max="300px" default="300px" value="300px"/>
    <Variable name="width.middle" description="Middlebar" type="length" max="200px" default="200px" value="200px"/>
  <Variable name="width.all" description="Width All" type="length" max="$(width.left + width.right + 20px)" default="$(width.left + width.right + 20px)" value="$(width.left + width.right + 20px)"/>
</Group> */
/* ======================================
IGNIPLEX: Premium Blogger Theme - Designed by Igniel (igniel.com)
======================================
Name      : IGNIPLEX
Version   : 2.6
Date      : May 21, 2020
Demo      : igniplex.blogspot.com
Type      : Premium (Paid)
Designer  : Igniel
Country   : Indonesia
Website   : www.igniel.com
***************************************
This theme is premium (paid).
You can only get it by purchasing officially.
If you get it for free through any method, that means you get it illegally.
*************************************** */
:root{
--igniplexMainLight:$(igniplex.main.color);
--igniplexMainDark:$(igniplex.main.color.dark);
--igniplexBodyLight:$(body.background.color);
--igniplexBodyDark:$(body.background.color.dark);
--igniplexPostLight:$(posts.background.color);
--igniplexPostDark:$(posts.background.color.dark);
--igniplexTextLight:$(body.text.color);
--igniplexTextDark:$(body.text.color.dark);
--igniplexSingleLight:$(posts.text.color);
--igniplexSingleDark:$(posts.text.color.dark);
--igniplexTabsLight:$(tabs.color);
--igniplexTabsDark:$(tabs.color.dark);
--igniplexFooter:$(footer.background.color);
--igniplexTextFooter:$(footer.text.color);
--igniplexLinkFooter:$(footer.link.color);
--igniplexLink:$(body.link.color);
--igniplexLinkHover:$(body.link.hover.color);
--igniplexLinkSingle:$(posts.link.color);
--igniplexBigTitle:$(big.title.color);
--igniplexIcons:$(posts.icons.color);
--igniplexFont:'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen-Sans', 'Helvetica Neue', Arial, sans-serif;
--igniplexFontNormal:'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen-Sans', 'Helvetica Neue', Arial, sans-serif;
--igniplexWidthAll:$(width.all);
--igniplexWidthLeft:$(width.left);
--igniplexWidthRight:$(width.right);
--igniplexWidthMiddle:$(width.middle);
}
/* Manrope Font */
@font-face{font-family:'Manrope';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/manrope/v1/xn7gYHE41ni1AdIRggOxSvfedN62Zw.woff2) format("woff2");unicode-range:U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:'Manrope';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/manrope/v1/xn7gYHE41ni1AdIRggSxSvfedN62Zw.woff2) format("woff2");unicode-range:U+0370-03FF}@font-face{font-family:'Manrope';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/manrope/v1/xn7gYHE41ni1AdIRggmxSvfedN62Zw.woff2) format("woff2");unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Manrope';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/manrope/v1/xn7gYHE41ni1AdIRggexSvfedN4.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:'Manrope';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/manrope/v1/xn7gYHE41ni1AdIRggOxSvfedN62Zw.woff2) format("woff2");unicode-range:U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:'Manrope';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/manrope/v1/xn7gYHE41ni1AdIRggSxSvfedN62Zw.woff2) format("woff2");unicode-range:U+0370-03FF}@font-face{font-family:'Manrope';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/manrope/v1/xn7gYHE41ni1AdIRggmxSvfedN62Zw.woff2) format("woff2");unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Manrope';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/manrope/v1/xn7gYHE41ni1AdIRggexSvfedN4.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}
/* Roboto Font */
@font-face{font-family:'Roboto';font-style:normal;font-weight:400;font-display:swap;src:local(Roboto),local(Roboto-Regular),url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu72xKKTU1Kvnz.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;font-display:swap;src:local(Roboto),local(Roboto-Regular),url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu5mxKKTU1Kvnz.woff2) format("woff2");unicode-range:U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;font-display:swap;src:local(Roboto),local(Roboto-Regular),url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu7mxKKTU1Kvnz.woff2) format("woff2");unicode-range:U+1F00-1FFF}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;font-display:swap;src:local(Roboto),local(Roboto-Regular),url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4WxKKTU1Kvnz.woff2) format("woff2");unicode-range:U+0370-03FF}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;font-display:swap;src:local(Roboto),local(Roboto-Regular),url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu7WxKKTU1Kvnz.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;font-display:swap;src:local(Roboto),local(Roboto-Regular),url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu7GxKKTU1Kvnz.woff2) format("woff2");unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;font-display:swap;src:local(Roboto),local(Roboto-Regular),url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:'Roboto';font-style:normal;font-weight:700;font-display:swap;src:local('Roboto Bold'),local(Roboto-Bold),url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfCRc4AMP6lbBP.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:'Roboto';font-style:normal;font-weight:700;font-display:swap;src:local('Roboto Bold'),local(Roboto-Bold),url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfABc4AMP6lbBP.woff2) format("woff2");unicode-range:U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:'Roboto';font-style:normal;font-weight:700;font-display:swap;src:local('Roboto Bold'),local(Roboto-Bold),url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfCBc4AMP6lbBP.woff2) format("woff2");unicode-range:U+1F00-1FFF}@font-face{font-family:'Roboto';font-style:normal;font-weight:700;font-display:swap;src:local('Roboto Bold'),local(Roboto-Bold),url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfBxc4AMP6lbBP.woff2) format("woff2");unicode-range:U+0370-03FF}@font-face{font-family:'Roboto';font-style:normal;font-weight:700;font-display:swap;src:local('Roboto Bold'),local(Roboto-Bold),url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfCxc4AMP6lbBP.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:'Roboto';font-style:normal;font-weight:700;font-display:swap;src:local('Roboto Bold'),local(Roboto-Bold),url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfChc4AMP6lbBP.woff2) format("woff2");unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Roboto';font-style:normal;font-weight:700;font-display:swap;src:local('Roboto Bold'),local(Roboto-Bold),url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfBBc4AMP6lQ.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}
/* normalize.css v3.0.1 | MIT License | git.io/normalize */
html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}dfn{font-style:italic}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-0.5em}sub{bottom:-0.25em}img{border:0}hr{-moz-box-sizing:content-box;box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible;border:0px;outline:0px;margin:0px;box-shadow:none;}button,select{text-transform:none;outline:none}button,html input[type="button"],input[type="reset"],input[type="submit"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0;outline:none;}input{line-height:normal;border:0px;outline:0px}input[type="checkbox"],input[type="radio"]{box-sizing:border-box;padding:0}input[type="number"]::-webkit-inner-spin-button,input[type="number"]::-webkit-outer-spin-button{height:auto}input[type="search"]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box}input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:bold}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}focus{outline:none}h1{font-size:1.75em}iframe{width:100%}*{box-sizing:border-box}
/*
* Owl Carousel v2.3.4
* Copyright 2013-2018 David Deutsch
* Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
*/
.owl-carousel{touch-action:manipulation}.owl-carousel,.owl-carousel .owl-item{-webkit-tap-highlight-color:transparent;position:relative}.owl-carousel{display:none;width:100%;z-index:1}.owl-carousel .owl-stage{position:relative;-ms-touch-action:pan-Y;touch-action:manipulation;-moz-backface-visibility:hidden}.owl-carousel .owl-stage:after{content:".";display:block;clear:both;visibility:hidden;line-height:0;height:0}.owl-carousel .owl-stage-outer{position:relative;overflow:hidden;-webkit-transform:translate3d(0,0,0)}.owl-carousel .owl-item,.owl-carousel .owl-wrapper{-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;-ms-backface-visibility:hidden;-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0)}.owl-carousel .owl-item{min-height:1px;float:left;-webkit-backface-visibility:hidden;-webkit-touch-callout:none}.owl-carousel .owl-item img{display:block;width:100%}.owl-carousel .owl-dots.disabled,.owl-carousel .owl-nav.disabled{display:none}.no-js .owl-carousel,.owl-carousel.owl-loaded{display:block}.owl-carousel .owl-dot,.owl-carousel .owl-nav .owl-next,.owl-carousel .owl-nav .owl-prev{cursor:pointer;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.owl-carousel .owl-nav button.owl-next,.owl-carousel .owl-nav button.owl-prev,.owl-carousel button.owl-dot{background:0 0;color:inherit;border:none;margin:0px;padding:0!important;font:inherit}.owl-carousel.owl-loading{opacity:0;display:block}.owl-carousel.owl-hidden{opacity:0}.owl-carousel.owl-refresh .owl-item{visibility:hidden}.owl-carousel.owl-drag .owl-item{-ms-touch-action:pan-y;touch-action:pan-y;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.owl-carousel.owl-grab{cursor:move;cursor:grab}.owl-carousel.owl-rtl{direction:rtl}.owl-carousel.owl-rtl .owl-item{float:right}.owl-carousel .animated{animation-duration:1s;animation-fill-mode:both}.owl-carousel .owl-animated-in{z-index:0}.owl-carousel .owl-animated-out{z-index:1}.owl-carousel .fadeOut{animation-name:fadeOut}@keyframes fadeOut{0%{opacity:1}100%{opacity:0}}.owl-height{transition:height .5s ease-in-out}.owl-carousel .owl-item .owl-lazy{opacity:0;transition:opacity .4s ease}.owl-carousel .owl-item .owl-lazy:not([src]),.owl-carousel .owl-item .owl-lazy[src^=""]{max-height:0}.owl-carousel .owl-item img.owl-lazy{transform-style:preserve-3d}.owl-carousel .owl-video-wrapper{position:relative;height:100%;background:#000}.owl-carousel .owl-video-play-icon{position:absolute;height:80px;width:80px;left:50%;top:50%;margin-left:-40px;margin-top:-40px;cursor:pointer;z-index:1;-webkit-backface-visibility:hidden;transition:transform .1s ease}.owl-carousel .owl-video-play-icon:hover{-ms-transform:scale(1.3,1.3);transform:scale(1.3,1.3)}.owl-carousel .owl-video-playing .owl-video-play-icon,.owl-carousel .owl-video-playing .owl-video-tn{display:none}.owl-carousel .owl-video-tn{opacity:0;height:100%;background-position:center center;background-repeat:no-repeat;background-size:contain;transition:opacity .4s ease}.owl-carousel .owl-video-frame{position:relative;z-index:1;height:100%;width:100%}
.owl-dots,.owl-nav{text-align:center;-webkit-tap-highlight-color:transparent} .owl-nav{margin-top:10px}.owl-nav [class*=owl-]{color:#FFF;font-size:12px;margin:5px;padding:4px 7px;background-color:#D6D6D6;display:inline-block;cursor:pointer;border-radius:3px} .owl-nav [class*=owl-]:hover{background-color:#fff;color:#FFF;text-decoration:none} .owl-nav .disabled{opacity:.5;cursor:default} .owl-nav.disabled+.owl-dots{position:absolute; bottom:0px; left:0px; right:0px; padding-bottom:10px; display:-webkit-box; display:-webkit-flex; display:-moz-box; display:-ms-flexbox; display:flex; align-items:center; justify-content:center;} .owl-dots .owl-dot{display:inline-block;zoom:1}.owl-dots .owl-dot span{width:8px;height:8px;margin:3px; background-color:#fff;display:block;-webkit-backface-visibility:visible;transition:all.2s ease;border-radius:30px} .owl-dots .owl-dot.active span, .owl-dots .owl-dot:hover span{background-color:var(--igniplexLinkHover);} .owl-dots button:hover{background:none !important;} .owl-dots .owl-dot.active span{background-color:var(--igniplexMainLight);width:20px;height:10px;}
::selection{
background-color:#c0e4bb;
}
.igniplexDark::selection{
background-color:#819e82;
}
html, body{
font:400 14px var(--igniplexFontNormal);
color:var(--igniplexTextLight);
line-height:1.75rem;
transition:all .2s ease;
}
body{
background-color:var(--igniplexBodyLight);
padding:0px !important;
margin:0px;
word-break:break-word;
position:relative;
-webkit-font-smoothing:antialiased;
-moz-osx-font-smoothing:grayscale;
-webkit-tap-highlight-color:transparent;
}
body.isError{
width:100vw;
height:100vh;
}
canvas{
display:block;
vertical-align:middle;
}
svg, svg path{
transition:all .2s ease;
}
hr{
border:0 solid var(--igniplexIcons);
border-top-width:7px;
border-radius:100px;
margin:15px auto;
overflow:visible;
position:relative;
width:7px;
transition:border-color .2s ease;
}
hr:before, hr:after{
content:'';
border:0 solid var(--igniplexIcons);
border-top-width:5px;
border-radius:100px;
position:absolute;
top:-6px;
width:5px;
}
hr:before{
left:-20px;
}
hr:after{
right:-20px;
}
a{
color:var(--igniplexLink);
text-decoration:none;
position:relative;
transition:all .2s ease;
}
a:hover{
color:var(--igniplexLinkHover);
}
h1, h2, h3, h4, h5, .title, .judul, input[type="submit"]{
font-weight:600;
line-height:initial;
margin-top:0px;
margin-bottom:10px;
transition:all .2s ease;
}
figure{
margin:20px 0px;
}
img{
max-width:100%;
height:auto;
display:block;
clear:both;
}
blockquote{
background-color:var(--igniplexMainLight);
font-size:1.25rem;
margin:20px 0px 20px 15px;
padding:25px 30px 15px 35px;
position:relative;
border-radius:5px;
box-shadow:inset 0 0 0 99999px rgba(255,255,255,0.8);
transition:all .2s ease;
}
blockquote:before{
content:'';
background:var(--igniplexMainLight) url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z' fill='%23fff'/%3E%3C/svg%3E") center / 35px no-repeat;
width:3rem;
height:3rem;
position:absolute;
left:-10px;
top:-10px;
border-radius:100px;
box-shadow:inset 0 0 0 99999px rgba(255,255,255,.25);
transition:background-color .2s ease;
}
blockquote:after{
content:'';
display:block;
position:absolute;
top:0;
right:0;
border:10px solid;
border-color:var(--igniplexPostLight) var(--igniplexPostLight) rgba(255,255,255,0.25) rgba(255,255,255,.25);
border-radius:0 0 0 3px;
box-shadow:0 1px 0 rgba(0,0,0,.1);
transition:border-color .2s ease;
}
blockquote a{
color:#ffeb3b;
}
blockquote a:hover{
color:#ffeb3b;
}
blockquote footer{
display:block;
font-size:1rem;
font-style:italic;
}
blockquote footer:before{
content:'\2014';
margin-right:3px;
}
.isSingle .post-body button a{
color:#fff;
}
.isSingle .post-body button.outline a{
color:var(--igniplexMainLight);
}
.isSingle .post-body button.outline.download a{
color:#6dab3c;
}
.isSingle .post-body button.outline.demo a{
color:#dc6060;
}
button{
background-color:var(--igniplexMainLight);
margin:5px;
padding:.5rem 1.5rem;
color:#fff;
cursor:pointer;
border-radius:7px;
white-space:nowrap;
transition:all .2s ease;
}
button.outline{
background-color:transparent;
border:1px solid var(--igniplexMainLight);
color:var(--igniplexMainLight);
}
button:hover, button.download:hover, button.demo:hover{
box-shadow:inset 0 0 0 99999px rgba(255,255,255,.15);
}
button.download{
background-color:#6dab3c;
}
button.download:before{
content:'';
width:1.5rem;
height:1.5rem;
display:inline-block;
vertical-align:-5px;
margin-right:.5rem;
background:url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8,13H10.55V10H13.45V13H16L12,17L8,13M19.35,10.04C21.95,10.22 24,12.36 24,15A5,5 0 0,1 19,20H6A6,6 0 0,1 0,14C0,10.91 2.34,8.36 5.35,8.04C6.6,5.64 9.11,4 12,4C15.64,4 18.67,6.59 19.35,10.04M19,18A3,3 0 0,0 22,15C22,13.45 20.78,12.14 19.22,12.04L17.69,11.93L17.39,10.43C16.88,7.86 14.62,6 12,6C9.94,6 8.08,7.14 7.13,8.97L6.63,9.92L5.56,10.03C3.53,10.24 2,11.95 2,14A4,4 0 0,0 6,18H19Z' fill='%23fff'/%3E%3C/svg%3E") center no-repeat;
}
button.outline.download{
background-color:transparent;
border:1px solid #6dab3c;
color:#6dab3c;
}
button.outline.download:before{
background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8,13H10.55V10H13.45V13H16L12,17L8,13M19.35,10.04C21.95,10.22 24,12.36 24,15A5,5 0 0,1 19,20H6A6,6 0 0,1 0,14C0,10.91 2.34,8.36 5.35,8.04C6.6,5.64 9.11,4 12,4C15.64,4 18.67,6.59 19.35,10.04M19,18A3,3 0 0,0 22,15C22,13.45 20.78,12.14 19.22,12.04L17.69,11.93L17.39,10.43C16.88,7.86 14.62,6 12,6C9.94,6 8.08,7.14 7.13,8.97L6.63,9.92L5.56,10.03C3.53,10.24 2,11.95 2,14A4,4 0 0,0 6,18H19Z' fill='%236dab3c'/%3E%3C/svg%3E");
}
button.demo{
background-color:#dc6060;
}
button.demo:before{
content:'';
width:1.5rem;
height:1.5rem;
display:inline-block;
vertical-align:-5px;
margin-right:.5rem;
background:url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z' fill='%23fff'/%3E%3C/svg%3E") center no-repeat;
}
button.outline.demo{
background-color:transparent;
border:1px solid #dc6060;
color:#dc6060;
}
button.outline.demo:before{
background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z' fill='%23dc6060'/%3E%3C/svg%3E");
}
.drop{
color:var(--igniplexMainLight);
float:left;
font-size:4rem;
line-height:1.75rem;
margin-top:.3em;
padding-right:.75rem;
}
button.svg-icon-24-button{
border-radius:0px;
padding:0px;
background:transparent;
box-shadow:none;
}
button.svg-icon-24-button:hover{
background:none !important;
}
.svg-icon-24{
width:24px;
height:24px;
vertical-align:middle;
}
.collapsible>summary::-webkit-details-marker, .collapsible-title .chevron-up, .collapsible[open] .collapsible-title .chevron-down, .collapsible-title .chevron-down, .collapsible[open] .collapsible-title .chevron-up{
display:none
}
.hidden{
display:none
}
.invisible{
visibility:hidden
}
.clear{
clear:both
}
.jump-link{
display:none;
}
.check{
display:none;
}
.lazy, .lazyloaded{
opacity:0;
transition:opacity .3s linear;
}
.lazyloaded, #igniplexSlider .PopularPosts .widget-content.lazyloaded{
opacity:1;
}
.widget-content img{
max-width:100%;
margin:auto;
}
.widget ul li ul{
margin-left:1em !important;
}
.widget .title{
font-weight:600;
font-size:1.15rem;
}
#main .widget{
margin-bottom:30px;
}
#main .widget .title{
margin-bottom:15px;
}
#main .widget-content{
background-color:var(--igniplexPostLight);
padding:20px;
border-radius:7px;
transition:background-color .2s ease;
}
#main .igniplexTengah .widget-content{
padding:0px;
border:0px;
border-radius:0px;
box-shadow:none;
}
#HTML1 .title,#HTML2 .title,#HTML3 .title{
display:none;
}
h1, h2, h3, h4, h5, .title, .judul, input[type="submit"], button, .NavMenu .head .name, .Profile .individual .name, .igniplexAuthor .author-name, .PopularPosts .item-title, .blog-pager.infinite, #comments .comment-header .user, .igniplexRelated .text, .igniplexRelatedMiddle, .BlogArchive .hierarchy-title, #igniplex404, footer .attribution, #top-continue.continue, #comments .footer{
font-family:var(--igniplexFont);
}
/* .post-outer, .isSingle .post-outer .post, .sidebar .widget-content, .igniplexAuthor, .igniplexRelated ul li, #comments .comment-thread ol > li, .comment-form, .Label .cloud ul li, .blog-pager.number a, .blog-pager.number .current, #middlebar ul li, #middlebar ul.noimage, .Profile .widget-content.team .about, .FeaturedPost .widget-content{
box-shadow:0 7px 20px -7px rgba(0,0,0,0.15);
} */
.post-body h1, .post-body h2, .post-body h3, .post-body h4, .post-body h5{
color:var(--igniplexTextLight);
margin:1rem 0 .75rem;
}
.post-body p{
margin:0 0 1.25rem;
}
.post-body table{
width:100%;
margin:20px 0px;
border:1px solid var(--igniplexTabsLight);
border-top:0px;
border-collapse:unset;
border-radius:7px;
transition:bprder-color .2s ease;
overflow:hidden;
}
.post-body table thead{
background-color:var(--igniplexMainLight);
font-size:1.15rem;
color:#fff;
transition:background-color .2s ease;
}
.post-body table th{
padding:10px;
border-right:1px solid #fff;
}
.post-body table th:last-child{
border-right:1px solid var(--igniplexMainLight);
}
.post-body table td{
background-color:#fff;
padding:10px;
text-align:left;
vertical-align:top;
}
.post-body table tr:nth-child(odd) td{
background-color:var(--igniplexPostLight);
border-right:1px solid var(--igniplexTabsLight);
transition:all .2s ease;
}
.post-body table tr:nth-child(even) td{
background-color:var(--igniplexBodyLight);
border-right:1px solid var(--igniplexPostLight);
transition:all .2s ease;
}
.post-body table tr td:last-child{
border:0px;
}
.post-body table.tr-caption-container{
border-color:#ccc;
}
.post-body table.tr-caption-container td{
background-color:#efefef;
border:0px;
padding:15px;
text-align:center;
color:var(--igniplexTextLight);
transition:all .2s ease;
}
.post-body table td.tr-caption{
background-color:#f9f9f9;
color:var(--igniplexSingleLight);
font-size:.9rem;
line-height:1.35rem;
border-top:1px solid var(--igniplexTabsLight) !important;
transition:all .2s ease;
}
#HTML3 .widget-content{
margin:20px 0px;
text-align:center;
max-width:100%;
}
.post-body .igniplexTengah{
margin:20px 0px;
padding:0px;
}
.post-body .box{
background-color:#e9ebee;
color:var(--igniplexSingleLight);
padding:10px;
margin:20px 0px;
border:1px solid #dddfe2;
border-radius:5px;
}
.post-body .box.green{
color:#155724;
background-color:#d4edda;
border:1px solid #c3e6cb;
}
.post-body .box.blue{
color:#004085;
background-color:#cce5ff;
border:1px solid #b8daff;
}
.post-body .box.red{
color:#721c24;
background-color:#f8d7da;
border:1px solid #f5c6cb;
}
.post-body .box.yellow{
color:#856404;
background-color:#fff3cd;
border:1px solid #ffeeba;
}
.post-body pre:before{
content:'';
display:inline-block;
border-left:5px solid var(--igniplexMainLight);
height:100%;
position:absolute;
left:0px;
top:0px;
}
.post-body pre{
background-color:#2e2e2e;
margin:.5em auto;
width:100%;
position:relative;
white-space:pre;
word-break:normal;
word-wrap:break-word;
overflow:auto;
-moz-tab-size:2;
-o-tab-size:2;
tab-size:2;
  user-select:text; -webkit-user-select:text; -khtml-user-select:text; -moz-user-select:text; -ms-user-select:text; user-select:text; -webkit-hyphens:none; -moz-hyphens:none; -ms-hyphens:none; hyphens:none; transition:all .2s ease;
}
.post-body pre code{
color:#bfbf90;
font-size:.95rem;
font-family:'source code pro',menlo,consolas,monaco,monospace;
max-height:300px;
padding:10px 20px;
line-height:1.5rem;
display:block;
white-space:pre-wrap;
overflow:auto;
user-select:text; -webkit-user-select:text; -khtml-user-select:text; -moz-user-select:text; -ms-user-select:text; user-select:text;
transition:all .2s ease;
}
.totop{
visibility:hidden;
opacity:0;
width:40px;
height:40px;
position:fixed;
bottom:80px;
right:40px;
z-index:2;
cursor:pointer;
border-radius:100px;
transition:all .2s ease;
background:var(--igniplexMainLight) url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z' fill='%23fff'/%3E%3C/svg%3E") center / 25px no-repeat;
background-size:25px;
}
.totop:hover{
background-color:var(--igniplexLinkHover);
}
.totop.show{
visibility:visible;
opacity:.75;
bottom:50px;
}
.PageList{
display:block;
width:100%;
background-color:var(--igniplexMainLight);
}
.PageList .widget-content{
color:#fff;
font-weight:600;
max-width:calc(var(--igniplexWidthAll) - 20px);
margin:auto;
}
.PageList .widget-content .tabs{
list-style-type:none;
margin:0px auto;
padding:0px 20px 0px 0px;
}
.PageList .widget-content .tabs li{
padding:10px 0px;
}
.PageList .widget-content .tabs li a{
color:#fff;
}
#license{
display:none;
}
#igniplexHeader{
background-color:var(--igniplexMainLight);
position:sticky;
position:-webkit-sticky;
width:100%;
top:0;
z-index:3;
height:50px;
box-shadow:0 1px 3px rgba(0,0,0,.3);
transition:all .2s ease;
}
#igniplexHeader.hide{
top:-55px;
}
#igniplexHeader #header a{
color:#fff;
}
#igniplexHeader .header-inner{
display:-webkit-box;
display:-webkit-flex;
display:-moz-box;
display:-ms-flexbox;
display:flex;
align-items:center;
justify-content:space-between;
color:#fff;
margin:auto;
max-width:var(--igniplexWidthAll);
padding:5px 20px;
height:50px;
}
#igniplexHeader #header img{
max-height:30px;
max-width:100%;
width:auto;
display:block;
margin:auto;
}
#igniplexHeader .replaced h1, #igniplexHeader .replaced h2, #igniplexHeader #header #HTML404{
display:none
}
#igniplexHeader #header h1, #igniplexHeader #header h2{
margin:0px;
color:#fff;
letter-spacing:2px;
text-transform:uppercase;
font-size:1.5rem;
white-space:nowrap;
line-height:50px;
}
#igniplexHeader #header h1::first-letter, #igniplexHeader #header h2::first-letter{
background-color:#fff;
font-size:.85em;
font-weight:600;
color:var(--igniplexMainLight);
padding:0px 5px;
margin-right:5px;
letter-spacing:0px;
border-radius:2px;
transition:all .2s ease;
}
#igniplexHeader #header .description{
display:none;
margin-bottom:0px;
color:#fff;
text-align:left;
}
#igniplexHeader label{
cursor:pointer;
display:block;
padding:8px;
background-position:center;
transition:all .5s linear;
}
#igniplexHeader label:hover{
border-radius:100px;
background:rgba(0,0,0,.2) radial-gradient(circle, transparent 2%, rgba(0,0,0,.2) 2%) center/15000%;
}
#igniplexHeader label:active, #igniplexHeader label:active{
border-radius:100px;
background-color:rgba(0,0,0,.1);
background-size:100%;
transition:background 0s;
}
#igniplexHeader svg{
transition:all .2s ease;
}
.igniplexMenu{
margin:0px 20px;
flex-grow:1;
flex:1;
}
.igniplexMenu .icon svg{
width:24px;
height:24px;
}
.igniplexMenu .icon svg path{
fill:#fff;
}
#igniplexHeader .igniplexMenu .icon{
display:none;
}
#igniplexHeader .igniplexMenu .cover{
opacity:0;
visibility:hidden;
background-color:transparent;
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
display:block;
z-index:3;
transition:all .2s ease-in-out .1s;
border-radius:0px;
}
.igniplexMenu .icon .open{
display:block;
}
.igniplexMenu .icon .close{
display:none;
}
.MenuList{
transition:all .2s ease;
height:50px;
}
.MenuList ul{
display:-webkit-box;
display:-webkit-flex;
display:-moz-box;
display:-ms-flexbox;
display:flex;
flex-wrap:wrap;
margin:0px;
padding:0px;
min-width:100%;
}
.MenuList ul li{
list-style-type:none;
position:relative;
}
.MenuList ul li:last-child{
border-bottom:0px;
}
.MenuList ul > li > a{ /* menu utama */
display:-webkit-box;
display:-webkit-flex;
display:-moz-box;
display:-ms-flexbox;
display:flex;
justify-content:space-between;
color:#fff;
padding:0px 15px;
line-height:50px;
}
.MenuList > ul li:hover > a{
background-color:rgba(0,0,0,.1);
}
.MenuList ul li ul{ /* semua dropdown */
white-space:nowrap;
display:none;
position:absolute;
}
.MenuList ul li ul:before{
content: '';
top:-8px;
left:15px;
border-color:transparent;
border-style:solid;
border-width:0px 8.5px 8.5px;
position:absolute;
z-index:1;
height:0px;
width:0px;
border-bottom-color:#fff;
transition:all .2s ease;
}
.MenuList ul li ul li { /* semua dropdown */
display:block;
}
.MenuList ul li ul li a{ /* semua dropdown isi `a` */
font-weight:400;
}
.MenuList ul > li > ul{ /* dropdown pertama */
background-color:#fff;
border-radius:0 0 7px 7px;
transition:background-color .2s ease;
}
.MenuList ul > li > ul > li > a{ /* text dropdown pertama */
color:var(--igniplexTextLight);
line-height:3.25rem;
}
.MenuList ul > li.open > a, .igniplexDark .MenuList ul > li > ul > li:hover > a{
background-color:rgba(0,0,0,.1);
}
.MenuList ul > li.open > ul > li.open > a{
background-color:#fff;
}
.MenuList ul > li > ul > li > ul{ /* background dropdown kedua */
background-color:var(--igniplexTextLight);
border-radius:0;
position:relative;
transition:all .2s ease;
}
.MenuList ul > li > ul > li:last-child > ul{
border-radius:0 0 7px 7px;
}
.MenuList ul > li > ul > li > ul:before, .igniplexDark .MenuList ul > li > ul > li > ul:before{
border-bottom-color:var(--igniplexTextLight);
}
.MenuList ul > li > ul > li > ul > li > a{ /* text dropdown kedua */
color:#fff;
}
.MenuList > ul li a:not(:only-child):after{
content:'';
width:17px;
height:17px;
margin:auto 0px auto 5px;
transition:all .2s ease;
background:url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' fill='%23fff'/%3E%3C/svg%3E") no-repeat center;
}
.MenuList ul > li > ul > li > a:not(:only-child):after{
background:url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' fill='%234a5568'/%3E%3C/svg%3E") no-repeat center center;
}
.MenuList ul > li.open > a:not(:only-child):after{
transform:rotate(180deg);
}
.header-right{
order:3;
display:-webkit-box;
display:-webkit-flex;
display:-moz-box;
display:-ms-flexbox;
display:flex;
flex-wrap:nowrap;
align-items:center;
justify-content:flex-end;
position:relative;
}
.igniplexSearch{
position:relative;
}
.igniplexSearch svg{
width:24px;
height:24px;
}
.igniplexSearch svg path{
fill:#fff;
}
.igniplexSearch .search .input{
position:absolute;
background-color:#fff;
color:var(--igniplexTextLight);
padding:0px;
width:0px;
margin:auto;
height:30px;
top:0;
bottom:0;
right:0;
border-radius:25px;
transition:width .2s ease;
}
.igniplexSearch .search .input::placeholder{
color:#ccc;
}
.igniplexSearch .search .icon{
transition:all .2s ease;
}
.igniplexSearch .search .icon .open{
display:block;
}
.igniplexSearch .search .icon .close{
display:none;
}
#igniplexHeader .igniplexSearch .search .icon .close path{
fill:var(--igniplexMainLight);
}
.igniplexSearch .search .check:checked ~ .input, .igniplexSearch .search .input:focus{
padding:0px 40px 0px 15px;
width:calc(var(--igniplexWidthAll) - 73px);
}
.igniplexSearch .search .check:checked ~ .icon .open{
display:none;
}
.igniplexSearch .search .check:checked ~ .icon .close{
display:block;
position:relative;
right:-3px;
}
.igniplexSearch .search .check:checked ~ label:hover{
background-color:transparent !important;
}
.igniplexSearch .search .check:checked ~ .icon > svg path{
fill:var(--igniplexIcons);
}
.igniplexNavigation{
position:relative;
}
.igniplexNavigation .icon svg{
width:24px;
height:24px;
}
.igniplexNavigation .icon svg path{
fill:#fff;
}
.igniplexNavigation .icon .open{
display:block;
}
.igniplexNavigation .icon .close{
display:none;
}
.igniplexNavigation .check:checked ~ .icon .open{
display:none;
}
.igniplexNavigation .check:checked ~ .icon .close{
display:block;
}
.igniplexNavigation .check:checked ~ .NavMenu{
opacity:1;
visibility:visible;
top:45px;
z-index:2;
}
.NavMenu{
opacity:0;
visibility:hidden;
position:absolute;
right:0px;
top:0px;
background-color:#fff;
min-width:200px;
max-width:275px;
color:var(--igniplexTextLight);
box-shadow:0 16px 24px 2px rgba(0,0,0,0.14), 0 6px 30px 5px rgba(0,0,0,0.12), 0 8px 10px -5px rgba(0,0,0,0.4);
transition:opacity .2s ease, visibility .2s ease, background-color .2s ease, top .2s ease;
}
.NavMenu:after{
content:'';
top:-8px;
right:11px;
border-color:transparent;
border-bottom-color:#e6e6e6;
border-style:dashed dashed solid;
border-width:0 8.5px 8.5px;
position:absolute;
z-index:1;
height:0px;
width:0px;
transition:border-color .2s ease;
}
.NavMenu .head{
background-color:#e6e6e6;
display:-webkit-box;
display:-webkit-flex;
display:-moz-box;
display:-ms-flexbox;
display:flex;
align-items:center;
padding:10px 16px;
border-bottom:1px solid #fff;
transition:background-color .2s ease, border-color .2s ease;
}
.NavMenu .head svg{
width:16px;
height:16px;
position:absolute;
top:20px;
right:-10px;
}
.NavMenu .head svg path, .igniplexDark .NavMenu .head svg path{
fill:#4285F4;
}
.NavMenu .head svg path.stroke{
fill:transparent;
stroke:#e6e6e6;
stroke-width:3px;
}
.NavMenu .ava, .NavMenu .info{
width:100%;
}
.NavMenu .info{
overflow:hidden;
}
.NavMenu .ava{
position:relative;
width:50px;
margin-right:15px;
}
.NavMenu .ava img{
max-width:50px;
max-height:50px;
border-radius:100px;
margin:0px;
}
.NavMenu .head .name{
font-weight:600;
font-size:1.15rem;
margin:-5px 0px 3px;
overflow:hidden;
text-overflow:ellipsis;
white-space:nowrap;
}
.NavMenu .head .follow a{
background-color:#4285F4;
color:#fff;
font-size:.65rem;
font-weight:600;
padding:.25rem .5rem;
border-radius:25px;
display:inline-block;
line-height:0px;
}
.NavMenu .head .follow a:hover{
background-color:var(--igniplexMainLight);
}
.NavMenu .head .follow a:before{
content:'';
display:inline-block;
width:.75rem;
height:.75rem;
margin-right:.25rem;
margin-left:-.15rem;
vertical-align:-.15rem;
background:url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z' fill='%23fff'/%3E%3C/svg%3E") center / .85rem no-repeat;
}
nav svg{
width:20px;
height:20px;
vertical-align:-6px;
margin-right:10px;
}
nav svg path{
fill:var(--igniplexTextLight);
}
nav a{
color:var(--igniplexTextLight);
}
nav ul{
margin:0px;
padding:0px;
}
nav ul li{
font-size:.9rem;
list-style-type:none;
}
nav ul li:hover{
color:var(--igniplexMainLight);
background-color:rgba(0,0,0,.05);
}
nav ul li:hover a, nav a:hover{
color:var(--igniplexMainLight);
}
nav ul li:hover svg path, .MenuList nav ul li:hover svg path{
fill:var(--igniplexMainLight);
}
nav .igniplexMode:hover{
background-color:transparent;
}
nav a, nav .igniplexMode{
display:block;
padding:8px 13px;
}
#igniplexHeader .igniplexMode label{
padding:0px;
float:right;
margin-top:2px;
}
.igniplexSwitch{
position:relative;
display:inline-block;
width:2.5rem;
height:1.4rem;
}
.igniplexSwitch .slider{
position:absolute;
cursor:pointer;
top:0;
left:0;
right:0;
bottom:0;
background-color:#ccc;
-webkit-transition:.2s;
transition:.2s;
border-radius:25px;
}
.igniplexSwitch .slider:before {
position:absolute;
content:'';
height:1rem;
width:1rem;
left:.2rem;
bottom:.2rem;
background-color:#fff;
-webkit-transition:.3s;
transition:.3s;
border-radius:100%;
}
.igniplexSwitch input:checked + .slider{
background-color:#141e27;
}
.igniplexSwitch input:checked + .slider:before{
background-color:#4285F4;
-webkit-transform:translateX(1.1rem);
-ms-transform:translateX(1.1rem);
transform:translateX(1.1rem);
}
.NavMenu .social{
background-color:#e6e6e6;
display:-webkit-box;
display:-webkit-flex;
display:-moz-box;
display:-ms-flexbox;
display:flex;
justify-content:space-between;
border-top:1px solid #fff;
transition:all .2s ease;
}
.NavMenu .social a{
padding:10px 3px;
z-index:1;
text-align:center;
flex-grow:1;
border-bottom-width:3px;
border-bottom-style:solid;
}
.NavMenu .social a.facebook{
border-bottom-color:#3a579a;
}
.NavMenu .social a.facebook:hover{
background-color:#3a579a;
}
.NavMenu .social a.twitter{
border-bottom-color:#00abf0;
}
.NavMenu .social a.twitter:hover{
background-color:#00abf0;
}
.NavMenu .social  a.instagram{
border-bottom-color:#9c27b0;
}
.NavMenu .social  a.instagram:hover{
background-color:#9c27b0;
}
.NavMenu .social a.pinterest{
border-bottom-color:#ff9800;
}
.NavMenu .social a.pinterest:hover{
background-color:#ff9800;
}
.NavMenu .social a.ytube{
border-bottom-color:#ff0000;
}
.NavMenu .social a.ytube:hover{
background-color:#ff0000;
}
.NavMenu .social svg{
margin:auto;
width:20px;
height:20px;
vertical-align:-7px;
}
.NavMenu .social a.ytube svg{
width:22px;
height:22px;
}
.NavMenu .social a:hover svg path{
fill:#fff !important;
}
.NavMenu .social a.facebook svg path{
fill:#3a579a;
}
.NavMenu .social a.twitter svg path{
fill:#00abf0;
}
.NavMenu .social a.instagram svg path{
fill:#9c27b0;
}
.NavMenu .social a.pinterest svg path{
fill:#ff9800;
}
.NavMenu .social a.ytube svg path{
fill:#ff0000;
}
#igniplexSlider{
color:#fff;
margin:auto;
max-width:var(--igniplexWidthAll);
position:relative;
}
#igniplexSlider .PopularPosts{
width:100%;
overflow:auto;
}
#igniplexSlider .PopularPosts .widget-content{
opacity:0;
padding:15px 20px 0px;
}
#igniplexSlider .PopularPosts .title{
display:none;
}
#igniplexSlider .PopularPosts .inner{
display:grid;
grid-template-columns:2fr 1fr 1fr;
grid-gap:10px;
margin:0px;
padding:0px;
position:relative;
overflow:hidden;
}
#igniplexSlider .PopularPosts .post:hover{
animation-play-state:paused;
}
#igniplexSlider .PopularPosts .post:first-child{
grid-area:1 / 1 / 3 / 1;
}
#igniplexSlider .PopularPosts .post{
display:block;
border:0px;
margin:0px;
padding:0px;
border-radius:7px;
overflow:hidden;
}
#igniplexSlider.owl .PopularPosts .post{
border-radius:0px;
}
#igniplexSlider .PopularPosts .post:before{
display:none;
}
#igniplexSlider .PopularPosts .post:hover .item-thumbnail:after{
opacity:0;
}
#igniplexSlider .PopularPosts .post:hover .item-thumbnail img{
transform:scale(1.1);
}
#igniplexSlider .PopularPosts .item-content{
position:relative;
margin-top:0px;
margin-left:0px;
height:100%;
}
#igniplexSlider .PopularPosts .item-thumbnail{
margin:0px;
max-width:100%;
height:100%;
overflow:hidden;
}
#igniplexSlider .PopularPosts .item-thumbnail:after{
content:'';
background:linear-gradient(to bottom, transparent,rgba(0,0,0,1));
background:-webkit-linear-gradient(top, transparent,rgba(0,0,0,1));
position:absolute;
bottom:0px;
width:100%;
height:50%;
transition:all .2s ease;
}
#igniplexSlider .PopularPosts .item-thumbnail img{
width:100vw;
max-width:100%;
border-radius:7px;
transition:all .2s ease;
}
#igniplexSlider.owl .PopularPosts .item-thumbnail img{
border-radius:0px;
}
#igniplexSlider .PopularPosts .container{
position:absolute;
bottom:0px;
left:0px;
right:0px;
display:block;
padding:10px 15px;
}
#igniplexSlider .PopularPosts .post-labels{
font-size:.85rem;
color:#fff;
display:inline-block;
line-height:normal;
padding:1rem 0;
}
#igniplexSlider .PopularPosts .post-labels a{
background-color:var(--igniplexMainLight);
border-radius:3px;
color:#fff;
display:inline-block;
padding:.25rem .5rem;
transition:all .2s ease;
}
#igniplexSlider .PopularPosts .post-labels a:hover{
background-color:var(--igniplexLinkHover);
}
#igniplexSlider .PopularPosts .post:first-child .post-title{
font-size:1.5rem;
left:15px;
right:15px;
bottom:15px;
line-height:2.25rem;
}
#igniplexSlider .PopularPosts .post:not(:first-child) .post-title{
font-size:1.1rem;
left:12px;
right:12px;
bottom:10px;
display:-webkit-box;
-webkit-line-clamp:2;
-webkit-box-orient:vertical;
overflow:hidden;
line-height:1.5rem;
}
#igniplexSlider .PopularPosts .post-title a, #igniplexSlider .PopularPosts .item-snippet{
color:#fff;
text-shadow:0 2px 10px #000, 0 1px 1px rgba(0,0,0,.5);
}
#igniplexSlider.owl{
max-width:100%;
}
#igniplexSlider.owl .PopularPosts .widget-content{
padding:0;
}
#igniplexSlider.owl .PopularPosts .inner{
display:block;
}
#igniplexSlider.owl .PopularPosts .post{
width:100%;
}
#igniplexSlider.owl .PopularPosts .container{
padding:40px 30px !important;
top:unset;
text-align:center;
}
#igniplexSlider.owl .PopularPosts .post:first-child .post-title{
font-size:1.5rem;
line-height:2rem;
}
main{
max-width:var(--igniplexWidthAll);
margin:auto;
padding:20px;
}
.isSingle main{
padding-top:0px;
margin-top:300px;
}
#HTML1 .widget-content{
margin-bottom:20px;
text-align:center;
}
.isPost #HTML1 .widget-content{
margin-bottom:30px;
}
#igniplex{
display:inline-block;
width:100%;
max-width:100%;
}
.isPage #igniplex{
display:block;
}
#igniel, .isPost #igniel{
width:calc(100% - (300px + 20px));
max-width:var(--igniplexWidthLeft);
float:left;
display:inline-block;
}
.isPage #igniel{
width:auto;
max-width:100%;
float:none;
display:block;
}
#main{
width:calc(100% - var(--igniplexWidthMiddle));
float:left;
}
.isSingle #main{
width:auto;
float:none;
}
.igniplexTitle{
display:block;
padding:0px;
margin:0px;
position:absolute;
top:50px;
left:0px;
right:0px;
transition:all .2s ease;
}
.breadcrumb{
color:var(--igniplexTabsLight);
margin-bottom:.8rem;
overflow:hidden;
white-space:nowrap;
text-overflow:ellipsis;
transition:all .2s ease;
}
.breadcrumb a{
color:var(--igniplexTabsLight);
}
.breadcrumb a:hover{
text-decoration:underline;
}
.breadcrumb a:not(:last-child):after{
content:'';
display:inline-block;
vertical-align:middle;
width:15px;
height:15px;
margin:0px 3px;
background:url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' fill='%23fff'/%3E%3C/svg%3E") center no-repeat;
}
.post-info{
color:var(--igniplexTabsLight);
display:inline-block;
font-size:.85rem;
line-height:1.5rem;
margin-top:1.25rem;
transition:color .2s ease;
}
.post-info a{
color:var(--igniplexTabsLight);
}
.post-info a:hover{
text-decoration:underline;
}
.post-info .post-comments:before{
content:'\2014';
margin:0px 3px;
}
.isSingle .igniplexTitle, .post-filter-message{
margin-bottom:30px;
background-color:var(--igniplexMainLight);
background-image:linear-gradient(110deg,transparent 75%,rgba(255,255,255,.1) 75%,rgba(255,255,255,.1) 81.5%,rgba(255,255,255,.2) 0%,rgba(255,255,255,.2));
background-repeat:no-repeat;
background-position:center;
background-size:cover;
}
.isSingle .igniplexTitle .inner, .post-filter-message .inner{
max-width:var(--igniplexWidthAll);
margin:auto;
padding:50px 30px 120px;
}
.isSingle .entry-title, .post-filter-message .title{
color:var(--igniplexBigTitle);
font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen-Sans', 'Helvetica Neue', Arial, sans-serif;
font-weight:800;
font-size:3rem;
margin:0px;
display:block;
line-height:4rem;
}
.igniplexTitle.post-filter-message{
position:relative;
top:0px;
}
.post-filter-message .inner .title{
margin-bottom:10px;
}
.post-filter-message a{
font-size:.85rem;
background-color:#fff;
border-radius:3px;
color:var(--igniplexMainLight);
font-weight:600;
padding:.35rem .6rem;
}
.igniplexWave{
position:absolute;
width:100%;
height:70px;
bottom:-1px;
left:0px;
right:0px;
overflow:hidden;
}
.igniplexWave path{
fill:var(--igniplexBodyLight);
transition:all .2s ease;
}
.igniplexWave path:not(:first-child){
opacity:.5;
}
.blog-posts{
display:grid;
grid-gap:20px;
grid-template-columns:1fr 1fr;
}
.blog-posts .infeed{
width:100%;
display:block;
padding:0px;
margin-bottom:20px;
}
.post-outer{
display:-webkit-box;
display:-webkit-flex;
display:-moz-box;
display:-ms-flexbox;
display:flex;
flex-wrap:wrap;
background-color:var(--igniplexPostLight);
border-radius:7px;
overflow:hidden;
transition:background-color .2s ease;
}
.post-outer .post{
align-self:flex-start;
display:-webkit-box;
display:-webkit-flex;
display:-moz-box;
display:-ms-flexbox;
display:flex;
flex-wrap:wrap;
flex-grow:1;
flex-basis:100%;
width:100%;
}
.post-outer .post:hover .snippet-thumbnail img{
transform:scale(1.1);
filter:brightness(80%);
-webkit-filter:brightness(80%);
}
.post-footer{
font-size:.85rem;
color:var(--igniplexIcons);
margin-top:15px;
}
.post-footer >*{
display:block;
}
.post-footer a{
color:var(--igniplexIcons);
}
.isSingle .blog-posts{
display:block;
}
.post .content, .post-footer-bottom .inner{
padding:15px;
}
.content .post-timestamp, .post-footer-bottom, .post-footer-bottom a{
color:var(--igniplexIcons);
font-size:.85rem;
}
.content .post-timestamp{
display:block;
margin-bottom:7px;
}
.content .post-timestamp .update{
display:none;
}
.post-timestamp{
cursor:help;
}
.post-title.entry-title{
font-size:1.1rem;
margin-bottom:0px;
}
.post-title.entry-title a{
color:var(--igniplexTextLight);
}
.post-title.entry-title a:hover{
color:var(--igniplexMainLight);
}
.post .snippet-thumbnail{
width:100%;
line-height:0px;
overflow:hidden;
}
.post .snippet-thumbnail > a{
display:block;
}
.post .snippet-thumbnail img{
width:100%;
border-radius:7px 7px 0px 0px;
transition:transform .2s ease, filter .2s ease, opacity .3s linear;
-webkit-transition:-webkit-transform .2s ease, -webkit-filter .2s ease, opacity .3s linear;
}
.post-snippet{
display:none;
color:var(--igniplexSingleLight);
font-size:.925rem;
margin-top:15px;
transition:all .2s ease;
}
.post-footer-bottom{
align-self:flex-end;
overflow:hidden;
white-space:nowrap;
width:100%;
line-height:normal;
}
.post-footer-bottom .inner{
display:-webkit-box;
display:-webkit-flex;
display:-moz-box;
display:-ms-flexbox;
display:flex;
align-items:flex-end;
justify-content:space-between;
padding-top:5px;
}
.post-footer-bottom .meta{
display:none;
}
.post-footer-bottom a:hover{
color:var(--igniplexMainLight);
}
.post-footer-bottom svg{
width:1.1rem;
height:1.1rem;
margin-right:.2rem;
vertical-align:-.25rem;
}
.post-footer-bottom svg path{
fill:var(--igniplexIcons);
}
.post-footer-bottom .post-labels{
overflow:hidden;
text-overflow:ellipsis;
margin-right:10px;
}
.post-footer-bottom .post-labels a:not(:first-of-type){
display:none;
}
.isPost .post-labels a{
background-color:var(--igniplexBodyLight);
border-radius:3px;
color:var(--igniplexSingleLight);
display:inline-block;
padding:.15rem .65rem;
margin-top:7px;
}
.isPost .post-labels a:hover, .igniplexDark.isPost .post-labels a:hover{
background-color:var(--igniplexMainLight);
color:#fff;
}
.isPost .post-labels a:before{
content:'#';
}
.isPost .post-labels a:not(:last-child){
margin-right:7px;
}
.post-footer-bottom .post-comments{
overflow:hidden;
text-overflow:ellipsis;
}
.isSingle .post-outer{
display:block;
width:auto;
background-color:transparent;
border-radius:0px;
box-shadow:none;
border:0px;
overflow:unset;
}
.isSingle .post-outer .post, .igniplexAuthor{
display:block;
background-color:var(--igniplexPostLight);
padding:15px 20px;
border-radius:7px;
transition:background-color .2s ease;
}
.isSingle .post-body{
font-size:1.15rem;
color:var(--igniplexSingleLight);
line-height:2rem;
transition:all .2s ease;
}
.isSingle .post-body a{
color:var(--igniplexLinkSingle);
}
.isSingle .post-body a:hover{
color:var(--igniplexLinkHover);
}
.isSingle .post-body img{
max-width:100%;
width:auto;
height:auto;
display:block;
margin:auto;
text-align:center;
clear:both;
}
.isSingle .post-body .separator img{
margin:auto;
display:block;
text-align:center;
}
.iklanAtas ins{
display:block;
margin:auto auto 20px;
text-align:center
}
.iklanBawah ins{
display:block;
margin:20px auto auto;
text-align:center
}
.igniplexRelatedMiddle{
border-bottom:1px solid var(--igniplexMainLight);
font-weight:600;
font-size:1rem;
display:block;
margin:20px 0px !important;
padding-bottom:15px !important;
text-align:left;
line-height:1.5rem;
}
.igniplexRelatedMiddle .thumb, .igniplexRelatedMiddle img{
width:100%;
height:100%;
max-width:75px !important;
max-height:56px !important;
overflow:hidden;
border-radius:3px;
transition:all .2s ease;
}
.igniplexRelatedMiddle .thumb{
margin-right:15px;
}
.igniplexRelatedMiddle .judul{
font-size:1.15rem;
padding:10px 0px 0px;
position:relative;
z-index:1;
}
.igniplexRelatedMiddle .judul:before{
content:'';
background-color:var(--igniplexPostLight);
width:100px;
height:2px;
position:absolute;
top:62.5%;
left:0px;
z-index:-1;
transition:background-color .2s ease;
}
.igniplexRelatedMiddle .judul:after{
content:'';
width:100%;
position:absolute;
top:65%;
left:0px;
border-top:1px solid var(--igniplexMainLight);
z-index:-2;
transition:all .2s ease;
}
.igniplexRelatedMiddle .judul span{
color:var(--igniplexLinkSingle);
background-color:var(--igniplexPostLight);
padding-right:15px;
transition:background-color .2s ease;
}
.igniplexRelatedMiddle ul{
display:grid;
grid-template-columns:1fr 1fr;
grid-gap:30px;
padding:0;
height:80px;
position:relative;
}
.igniplexRelatedMiddle ul.noimg{
display:block;
margin:0;
}
.igniplexRelatedMiddle ul li{
display:-webkit-box;
display:-webkit-flex;
display:-moz-box;
display:-ms-flexbox;
display:flex;
align-items:flex-start;
padding:0;
border:0;
transition:border-color .2s ease;
}
.igniplexRelatedMiddle ul.noimg li{
list-style-type:none;
padding:10px 0;
border-bottom:1px dashed rgba(0,0,0,.2);
}
.igniplexRelatedMiddle ul.noimg li:before{
content:'';
width:20px;
height:20px;
min-width:20px;
min-height:20px;
margin-top:3px;
margin-right:3px;
margin-left:-5px;
vertical-align:-5px;
background:url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' fill='%234b4f56'/%3E%3C/svg%3E") center no-repeat;
}
.igniplexRelatedMiddle ul.noimg li:last-child{
border:0px; padding-bottom:0px;
}
.isPost .igniplexRelatedMiddle ul li a{
color:var(--igniplexTextLight);
}
.isPost .igniplexRelatedMiddle ul li a:hover{
color:var(--igniplexMainLight);
}
.igniplexRelatedMiddle ul li a img:hover, .igniplexRelatedMiddle ul li:hover img{
transform:scale(1.1);
filter:brightness(80%);
-webkit-filter:brightness(80%);
}
.igniplexShare{
display:-webkit-box;
display:-webkit-flex;
display:-moz-box;
display:-ms-flexbox;
display:flex;
flex-wrap:nowrap;
align-items:center;
background-color:var(--igniplexPostLight);
margin-top:30px;
padding:10px 0px 0px;
position:sticky;
position:-webkit-sticky;
bottom:0px;
z-index:1;
transition:background-color .2s ease;
}
.igniplexShare svg{
width:17px;
height:17px;
vertical-align:-4px;
}
.igniplexShare svg path{
fill:var(--igniplexIcons);
transition:all .2s ease;
}
.igniplexShare a{
width:100%;
padding:10px 0px;
border-top-width:3px;
border-top-style:solid;
text-align:center;
box-shadow:none;
transition:all .2s ease;
}
.igniplexShare a:hover svg path{
fill:#fff !important;
}
.igniplexShare a.facebook{
border-color:#3a579a;
}
.igniplexShare a.facebook:hover{
background-color:#3a579a;
}
.igniplexShare a.facebook svg path{
fill:#3a579a;
}
.igniplexShare a.twitter{
border-color:#00abf0;
}
.igniplexShare a.twitter:hover{
background-color:#00abf0;
}
.igniplexShare a.twitter svg path{
fill:#00abf0;
}
.igniplexShare a.pinterest{
border-color:#cd1c1f;
}
.igniplexShare a.pinterest:hover{
background-color:#cd1c1f;
}
.igniplexShare a.pinterest svg path{
fill:#cd1c1f;
}
.igniplexShare a.linkedin{
border-color:#2554BF;
}
.igniplexShare a.linkedin:hover{
background-color:#2554BF;
}
.igniplexShare a.linkedin svg path{
fill:#2554BF;
}
.igniplexShare a.tumblr{
border-color:#314358;
}
.igniplexShare a.tumblr:hover{
background-color:#314358;
}
.igniplexShare a.tumblr svg path{
fill:#314358;
}
.igniplexShare a.whatsapp{
border-color:#4dc247;
}
.igniplexShare a.whatsapp:hover{
background-color:#4dc247;
}
.igniplexShare a.whatsapp svg path{
fill:#4dc247;
}
.igniplexShare a.messenger{
border-color:#448AFF;
}
.igniplexShare a.messenger:hover{
background-color:#448AFF;
}
.igniplexShare a.messenger svg path{
fill:#448AFF;
}
.igniplexShare a.telegram{
border-color:#0088cc;
}
.igniplexShare a.telegram:hover{
background-color:#0088cc;
}
.igniplexShare a.telegram svg path{
fill:#0088cc;
}
.igniplexAuthor{
display:-webkit-box;
display:-webkit-flex;
display:-moz-box;
display:-ms-flexbox;
display:flex;
align-items:flex-start;
margin-top:20px;
}
.igniplexAuthor .avatar, .Profile .avatar{
display:-webkit-box;
display:-webkit-flex;
display:-moz-box;
display:-ms-flexbox;
display:flex;
align-items:center;
justify-content:center;
position:relative;
}
.igniplexAuthor .avatar{
width:81px;
height:81px;
min-width:81px;
min-height:81px;
margin-right:20px;
}
.igniplexAuthor .avatar:before, .Profile .avatar:before{
content:'';
background:linear-gradient(to bottom, #ffa546, #c42286);
background:-webkit-linear-gradient(top, #ffa546, #c42286);
background-color:var(--igniplexMainLight);
position:absolute;
top:0px;
bottom:0px;
left:0px;
right:0px;
margin:auto;
border-radius:100px;
animation:ignielSpin 3s linear infinite normal;
-moz-animation:ignielSpin 3s linear infinite normal;
-webkit-animation:ignielSpin 3s linear infinite normal;
-o-animation:ignielSpin 3s linear infinite normal;
}
.igniplexAuthor .avatar:before{
width:81px;
height:81px;
}
.igniplexAuthor img, .Profile img{
border:3px solid var(--igniplexPostLight);
position:relative;
border-radius:100px;
background:url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z' fill='%23ddd'/%3E%3C/svg%3E") center / 65px no-repeat;
transition:all .2s ease;
}
footer .Profile img{
border-color:var(--igniplexFooter);
}
.igniplexAuthor img{
width:75px;
height:75px;
}
.igniplexAuthor .bottom{
width:100%;
flex-grow:1;
}
.igniplexAuthor .author-name{
font-size:1.15rem;
font-weight:600;
margin-bottom:7px;
}
.igniplexAuthor .author-name:after{
content:'';
display:inline-block;
background:url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z' fill='%234285F4'/%3E%3C/svg%3E") center no-repeat;
width:15px;
height:15px;
vertical-align:-2px;
}
.igniplexAuthor .author-name a{
color:var(--igniplexTextLight);
}
.igniplexAuthor .author-name a:hover{
color:var(--igniplexMainLight);
}
.igniplexAuthor .author-desc{
color:var(--igniplexIcons);
font-size:.95rem;
line-height:initial;
}
#comments, .matched{
margin-top:30px;
}
#comments .comment-message svg{
width:20px;
height:20px;
margin-right:5px;
vertical-align:-5px;
}
#comments .comment-message svg path{
fill:var(--igniplexTextLight);
transition:all .2s ease;
}
#comments .comment-message{
display:-webkit-box;
display:-webkit-flex;
display:-moz-box;
display:-ms-flexbox;
display:flex;
align-items:flex-start;
font-family:var(--igniplexFontNormal);
margin-bottom:.95rem;
text-align:left;
letter-spacing:0px;
transition:background-color .2s ease;
}
#comment-editor{
background:url('https://1.bp.blogspot.com/-yaxQ1U5IjFA/XsTnm1xNekI/AAAAAAAAId8/htJiqunXIcUy6a3Bq6NYCp9sR4-yU4iQgCK4BGAsYHg/igniplex_loading_light.gif') center / 75px no-repeat;
}
.igniplexDark #comment-editor{
background-image:url('https://1.bp.blogspot.com/-F9FyU0XiVrc/XsTnmvrdRQI/AAAAAAAAId4/Re2RazmUCOAA1AFjNkjJlWbouzMFpax5QCK4BGAsYHg/igniplex_loading_dark.gif');
}
.comment-form{
margin:20px 0px;
padding:15px;
border-radius:7px;
background-color:var(--igniplexPostLight);
transition:background-color .2s ease;
}
#comments .comment-replybox-single .comment-form{
padding:0px;
border-radius:0px;
box-shadow:none;
}
#comments .comments-content .icon.blog-author{
width:14px;
height:14px;
margin-left: 5px;
vertical-align:-2px;
display:inline-block;
background:url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z' fill='%23118ff9'/%3E%3C/svg%3E") center no-repeat;
}
#comments .comment-thread ol{
margin:0;
padding-left:0;
}
#comments .comment-thread ol > li, #comments #comments-block .comment{
background-color:var(--igniplexPostLight);
margin-bottom:20px;
border-radius:7px;
transition:background-color .2s ease;
}
#comments .comment-thread ol > li{
padding:15px 15px 30px;
}
#comments #comments-block .comment{
padding:15px;
}
#comments .comment-thread ol > li:last-child{
margin-bottom:0px;
}
#comments .comment-thread ol > li ol{
margin-top:25px;
}
#comments .comment .comment-replybox-single, #comments .comment-thread .comment-replies{
margin-left:45px;
}
#comments .comment-thread .thread-count{
display:none
}
#comments .comment{
list-style-type:none;
padding:0 0 30px;
position:relative
}
#comments .comment .comment{
padding-bottom:8px;
margin-bottom:15px;
}
#comments .comment:target{
background-color:var(--igniplexMainLight);
border:1px solid var(--igniplexMainLight);
border-radius:7px;
box-shadow:inset 0 0 0 99999px rgba(255,255,255,0.85);
transition:background-color .2s ease, border-color .2s ease, box-shadow .2s ease;
}
#comments .comment .comment:target{
margin-top:-10px;
margin-bottom:20px;
padding:15px;
}
#comments .comment .comment:target .comment-actions{
margin-bottom:5px;
}
#comments .comment-thread ol > li:first-child:target{
padding:10px 10px 25px;
}
.comment .avatar-image-container{
position:absolute;
width:35px;
height:35px;
background:url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7.07,18.28C7.5,17.38 10.12,16.5 12,16.5C13.88,16.5 16.5,17.38 16.93,18.28C15.57,19.36 13.86,20 12,20C10.14,20 8.43,19.36 7.07,18.28M18.36,16.83C16.93,15.09 13.46,14.5 12,14.5C10.54,14.5 7.07,15.09 5.64,16.83C4.62,15.5 4,13.82 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,13.82 19.38,15.5 18.36,16.83M12,6C10.06,6 8.5,7.56 8.5,9.5C8.5,11.44 10.06,13 12,13C13.94,13 15.5,11.44 15.5,9.5C15.5,7.56 13.94,6 12,6M12,11A1.5,1.5 0 0,1 10.5,9.5A1.5,1.5 0 0,1 12,8A1.5,1.5 0 0,1 13.5,9.5A1.5,1.5 0 0,1 12,11Z' fill='%23757575'/%3E%3C/svg%3E") center / 35px no-repeat;
}
.comment .comment-replies .avatar-image-container{
background-size:25px;
width:25px;
height:25px;
}
.comment .avatar-image-container img{
border-radius:100px;
}
.avatar-image-container svg,.comment .avatar-image-container .avatar-icon{
border-radius:50%;
box-sizing:border-box;
fill:red;
height:35px;
margin:0;
padding:7px;
width:35px
}
.comment .comment-block{
margin-left:45px;
padding-bottom:0;
}
.comment .comment-replies .comment-block{
margin-left:35px;
}
#comments .comment-author-header-wrapper{
margin-left:40px
}
#comments .comment .comment-header .user, #comments .comment-author a{
font-weight:600;
font-style:normal;
}
#comments .comment .comment-header .user, #comments .comment .comment-header .user a, #comments .comment-author a{
color:var(--igniplexTextLight);
}
#comments .comment .comment-header .user a:hover, #comments .comment-author a:hover{
color:var(--igniplexMainLight);
}
#comments .comment .comment-actions{
bottom:0;
margin-bottom:12px;
position:absolute;
}
#comments .comment .comment-replies .comment-actions{
margin-bottom:0px;
}
#comments .comment .comment-actions a, #comments .comment .comment-actions .item-control a{
cursor:pointer;
margin-right:8px;
font-weight:600;
font-size:.85rem;
letter-spacing:1px;
text-transform:uppercase;
}
#comments .comment .comment-actions a:hover, #comments .comment .comment-actions .item-control a:hover{
color:var(--igniplexLinkHover);
}
#comments .item-control{
display:none
}
#comments .datetime, #comments .comment-timestamp{
bottom:0px;
color:var(--igniplexIcons);
font-size:.75rem;
}
#comments .datetime{
display:inline-block;
margin-left:5px;
}
#comments .datetime:before{
content:'\2022';
margin-right:5px;
font-family:Arial,sans-serif;
font-style:normal;
font-size:16px;
vertical-align:-2px;
}
#comments .comment-timestamp a, #comments .datetime a{
color:var(--igniplexIcons);
}
#comments .comment-timestamp a:hover, #comments .datetime a:hover{
color:var(--igniplexMainLight);
}
#comments .comment-timestamp{
display:block;
}
#comments .comment .comment-content, .comment .comment-body{
color:var(--igniplexSingleLight);
margin-top:5px;
line-height:inherit;
transition:all .2s ease;
}
.comment .comment-body{
margin-top:15px;
}
#comments .comment .comment-replies .comment-content{
margin-bottom:0px;
}
.comment-body{
margin-bottom:12px
}
#comment-editor-src{
display:none
}
.comments .comments-content .loadmore.loaded{
max-height:0;
opacity:0;
overflow:hidden
}
.comment-link{
color:var(--igniplexMainLight);
position:relative
}
.comment-link .num_comments{
margin-left:8px;
vertical-align:top
}
#comment-holder .continue, #comment-holder .continue.hidden{
display:none;
}
#top-continue.continue, #comments .footer{
display:block;
margin:25px auto;
text-align:center;
letter-spacing:2px;
}
#top-continue.continue a, #comments .footer a{
background-color:var(--igniplexMainLight);
color:#fff;
cursor:pointer;
font-weight:600;
text-transform:uppercase;
padding:10px 20px;
border-radius:3px;
}
#top-continue.continue a:hover, #comments .footer a:hover{
background-color:var(--igniplexLinkHover);
}
#comments .title{
text-transform:capitalize;
}
footer .footer-inner{
display:grid;
grid-gap:20px;
grid-template-columns:1fr 1fr 1fr;
max-width:var(--igniplexWidthAll);
margin:auto;
padding:0px 20px;
}
footer .widget-content{
background-color:var(--igniplexFooter);
color:var(--igniplexTextFooter);
line-height:1.5rem;
margin-bottom:30px;
padding:15px 20px;
border-radius:7px;
}
footer .footer-inner .widget:last-child .widget-content{
margin-bottom:10px;
}
footer .widget-content a{
color:var(--igniplexLinkFooter);
}
footer .attribution{
font-size:.75rem;
padding:0px 15px 15px;
margin:auto;
text-align:center;
}
#middlebar{
float:right;
position:sticky;
position:-webkit-sticky;
top:10px;
transition:top .2s ease;
}
#middlebar .widget-content{
width:calc(var(--igniplexWidthMiddle) - 20px);
margin-left:20px;
position:relative;
height:80px;
}
#middlebar .title{
margin:0px 0px 10px 20px;
}
#middlebar a{
color:var(--igniplexTextLight);
}
#middlebar a:hover{
color:var(--igniplexMainLight);
}
#middlebar ul{
display:grid;
grid-gap:20px;
grid-template-columns:repeat(1, 1fr);
}
#middlebar ul, #middlebar li{
list-style:none;
list-style-type:none;
margin:0px;
padding:0px;
}
#middlebar ul li, #middlebar ul.noimage{
background-color:var(--igniplexPostLight);
border-radius:7px;
transition:all .2s ease;
}
#middlebar ul.noimage{
grid-gap:10px;
padding:7px 12px;
}
#middlebar ul.noimage li, .igniplexDark #middlebar ul.noimage li{
background-color:transparent;
border-radius:0;
box-shadow:none;
}
#middlebar ul.noimage li:not(:last-of-type){
padding-bottom:10px;
border-bottom:1px dashed var(--igniplexTabsLight);
}
#middlebar .noimage .text{
padding:0;
}
#middlebar .text{
line-height:1.5rem;
padding:7px 12px;
}
#middlebar .thumb{
border-radius:7px 7px 0px 0px;
overflow:hidden;
}
#middlebar img{
width:100%;
max-width:200px;
height:auto;
transition:all .2s ease;
}
#middlebar img:hover, #middlebar li:hover img{
transform:scale(1.1);
filter:brightness(80%);
-webkit-filter:brightness(80%);
}
#middlebar .ignielRipple div{
border-color:var(--igniplexMainLight);
}
.sidebar, .isPost .sidebar{
width:var(--igniplexWidthRight);
margin-left:20px;
float:right;
}
.sidebar img, footer img{
max-width:100%;
}
.sidebar .widget{
margin-bottom:30px;
}
.sidebar .title,  footer .title{
margin:0px 0px 15px;
}
.sidebar .widget ul, .sidebar .widget ol, footer .widget ul, footer .widget ol{
list-style:none;
margin:0px;
padding:0px;
}
.sidebar .widget-content, .Profile .widget-content.team .about{
background-color:var(--igniplexPostLight);
padding:15px;
border-radius:7px;
transition:background-color .2s ease;
}
.sidebar .Label .widget-content, footer .Label .widget-content, .igniplexDark .sidebar .Label .widget-content, .igniplexDark footer .Label .widget-content, .sidebar #HTML5 .widget-content, .sidebar .Profile .widget-content.team, .igniplexDark .sidebar .Profile .widget-content.team, footer .Profile .widget-content{
background-color:transparent;
box-shadow:none;
padding:0px;
}
.sidebar #HTML2, .sidebar #HTML2 .widget-content{
background-color:transparent;
padding:0px;
border:0px;
border-radius:0px;
box-shadow:none;
}
.sidebar .BlogArchive .MENU, footer .BlogArchive .MENU, .igniplexDark .sidebar .BlogArchive .MENU{
background-color:transparent;
padding:0px;
box-shadow:none
}
.Label .widget-content.list{
margin-top:15px;
}
.Label .list ul, .BlogArchive .FLAT ul{
display:grid;
grid-template-columns: repeat(2, 1fr);
}
.Label .list ul{
grid-gap:.5rem 2.5rem;
}
.Label ul li, .BlogArchive .FLAT ul li{
overflow:hidden;
text-overflow:ellipsis;
white-space:nowrap;
}
.Label ul li a, .BlogArchive .FLAT ul li a{
align-items:center;
flex-grow:1;
color:var(--igniplexTextLight);
margin-right:.3rem;
overflow:hidden;
}
.Label .list a:before, .BlogArchive ul.FLAT li a:before{
content:'';
display:inline-block;
background-color:var(--igniplexMainLight);
min-width:8px;
min-height:8px;
width:8px;
height:8px;
margin-right:7px;
clip-path:polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);
-webkit-clip-path:polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);
transition:background-color .2s ease;
}
.Label ul li a:hover, .BlogArchive .FLAT ul li a:hover, .Label ul li:hover a, .BlogArchive .FLAT ul li:hover a{
color:var(--igniplexMainLight);
}
.Label .cloud ul, .Label ul li, .Label ul li a{
display:-webkit-box;
display:-webkit-flex;
display:-moz-box;
display:-ms-flexbox;
display:flex;
}
.Label .cloud ul{
flex-wrap:wrap;
}
.Label .cloud ul li{
background-color:var(--igniplexPostLight);
border-radius:3px;
flex-grow:1;
flex-wrap:nowrap;
margin:0px 7px 7px 0px;
padding:2px 5px;
transition:background-color .2s ease;
}
footer .Label .cloud ul li{
background-color:var(--igniplexFooter);
}
.Label .cloud ul li:hover{
background-color:var(--igniplexMainLight);
}
.Label .cloud ul li a{
flex-wrap:nowrap;
font-size:.95rem;
justify-content:center;
padding:1px 5px;
}
.Label .cloud ul li:hover a, .Label .cloud ul li a:hover, .Label .cloud ul li:hover .count{
color:#fff
}
.Label .count, .BlogArchive .FLAT .count{
align-self:center;
color:var(--igniplexIcons);
font-size:.85rem;
transition:color .2s ease;
white-space:nowrap;
}
footer .Label .count, footer .BlogArchive .FLAT .count{
color:var(--igniplexTextDark);
}
.Label .cloud .count{
padding:0px 7px;
}
.BlogArchive .HIERARCHY a{
padding:0px;
white-space:normal;
}
.BlogArchive .hierarchy-title a{
display:-webkit-box;
display:-webkit-flex;
display:-moz-box;
display:-ms-flexbox;
display:flex;
flex-wrap:nowrap;
align-items:center;
justify-content:space-between;
font-weight:600;
color:var(--igniplexTextLight);
}
.BlogArchive .hierarchy-title a:hover{
color:var(--igniplexMainLight);
}
footer .BlogArchive .hierarchy-title a:hover{
color:#fff;
}
.BlogArchive .archivedate:not(:last-child){
margin-bottom:10px;
}
.BlogArchive .archivedate .archivedate{
margin-bottom:0px;
}
.BlogArchive ul li ul{
margin-left:1em !important;
padding-bottom:0px !important;
}
.BlogArchive ul.posts li{
list-style-type:decimal;
font-size:1rem;
color:var(--igniplexIcons);
padding:5px 0px;
transition:color .2s ease;
}
.BlogArchive ul.posts li:last-child{
padding-bottom:0px;
}
.BlogArchive ul.posts li a{
color:var(--igniplexIcons);
}
.BlogArchive ul.posts li a:hover{
color:var(--igniplexMainLight);
}
footer .BlogArchive ul.posts li a:hover{
color:#fff;
}
.BlogArchive .count{
float:right;
margin-left:7px;
}
.BlogArchive .FLAT ul{
grid-gap:1rem 5rem;
}
.BlogArchive select{
background-color:var(--igniplexPostLight);
width:100%;
padding:7px 10px;
border:0px;
height:32px;
border-radius:3px;
text-indent:5px;
cursor:pointer;
transition:all .2s ease;
}
.BlogArchive select:hover{
background-color:var(--igniplexMainLight);
color:#fff;
}
footer .Label .cloud ul li a, footer .BlogArchive .FLAT ul li a, footer .BlogArchive .FLAT ul li a:hover, footer .BlogArchive .FLAT ul li:hover a{
color:#fff;
}
footer .BlogArchive ul.posts li, footer .BlogArchive ul.posts li a{
color:var(--igniplexPostLight);
}
footer .BlogArchive .hierarchy-title a{
color:#fff;
}
footer .BlogArchive select{
background-color:var(--igniplexMainLight);
color:#fff;
}
.sidebar .Feed .widget-content{
background-color:var(--igniplexMainLight);
color:#fff;
}
.Feed ul li{
display:-webkit-box;
display:-webkit-flex;
display:-moz-box;
display:-ms-flexbox;
display:flex;
flex-wrap:nowrap;
}
.Feed ul li:not(:last-child){
margin-bottom:10px !important;
padding-bottom:10px !important;
border-bottom:1px dashed rgba(255,255,255,.5);
transition:border-color .2s ease;
}
.Feed ul li:before{
content:'';
align-self:flex-start;
min-height:17px;
min-width:17px;
margin-right:7px;
background:url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M17,12L12,17V14H8V10H12V7L17,12M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L5,8.09V15.91L12,19.85L19,15.91V8.09L12,4.15Z' fill='%23fff'/%3E%3C/svg%3E") center no-repeat;
}
.Feed ul li a{
color:#fff;
margin-top:-3px;
}
.Feed ul li a:hover{
color:#fff;
}
.Feed .item-title{
width:calc(100% - 25px);
margin-top:-3px;
}
.Feed .item-date, .Feed .item-author{
font-size:.85rem;
font-style:italic;
}
.PopularPosts ul{
counter-reset:igniplexPopular;
}
.PopularPosts ul li{
display:-webkit-box;
display:-webkit-flex;
display:-moz-box;
display:-ms-flexbox;
display:flex;
flex-wrap:nowrap;
clear:both;
margin-bottom:15px;
padding-bottom:15px;
position:relative;
border-bottom:1px dashed var(--igniplexTabsLight);
transition:all .2s ease;
}
.PopularPosts ul.noimage li{
margin-bottom:10px;
padding-bottom:10px;
}
footer .PopularPosts ul li{
border-color:rgba(255,255,255,.35);
}
.PopularPosts ul li:last-child{
margin-bottom:0px;
padding-bottom:0px;
border:0px;
}
.PopularPosts ul li:before{
content:counter(igniplexPopular);
counter-increment:igniplexPopular;
display:-webkit-box;
display:-webkit-flex;
display:-moz-box;
display:-ms-flexbox;
display:flex;
align-items:center;
justify-content:center;
background-color:var(--igniplexMainLight);
position:absolute;
top:0;
left:0;
font-size:.85rem;
color:#fff;
z-index:1;
width:20px;
height:20px;
border:2px solid var(--igniplexPostLight);
border-radius:100px;
transition:all .2s ease;
}
.PopularPosts ul.noimage li:before, .igniplexDark .PopularPosts ul.noimage li:before{
content:counter(igniplexPopular)'.';
align-items:flex-start;
background-color:transparent;
border:0;
color:var(--igniplexTextLight);
font-size:1.5rem;
font-style:italic;
margin-right:10px;
position:static;
white-space:nowrap;
width:auto;
height:auto;
}
footer .PopularPosts ul li:before{
background-color:#fff;
color:var(--igniplexFooter);
border-color:var(--igniplexFooter);
}
.PopularPosts .item-thumbnail{
min-width:75px;
max-width:75px;
margin-left:10px;
}
.PopularPosts .item-thumbnail img{
width:75px;
transition:all .2s ease;
border-radius:3px 25px;
}
.PopularPosts .item-content{
margin-left:15px;
}
.PopularPosts .noimage .item-content{
margin-left:0px;
}
.PopularPosts .item-title{
font-weight:600;
line-height:initial;
}
.PopularPosts .noimage.nodesc .item-title{
font-family:var(--igniplexFontNormal);
font-weight:400;
line-height:1.5rem;
}
.PopularPosts .item-title a{
color:var(--igniplexTextLight);
}
.PopularPosts .item-title a:hover{
color:var(--igniplexMainLight);
}
footer .PopularPosts .item-title a, footer .PopularPosts .item-title a:hover{
color:#fff;
}
.PopularPosts .item-snippet{
font-size:.85rem;
color:var(--igniplexIcons);
margin-top:5px;
line-height:1.25rem;
}
footer .PopularPosts .item-snippet{
color:var(--igniplexTabsLight);
}
#main .FeaturedPost{
margin-bottom:20px;
position:relative;
}
#main .FeaturedPost .title{
position:absolute;
top:10px;
left:10px;
background-color:var(--igniplexMainLight);
color:#fff;
font-size:.85rem;
padding:.35rem .65rem;
border-radius:3px;
z-index:1;
}
.widget.FeaturedPost .title::first-letter{
background-color:transparent;
color:inherit;
margin-right:0px;
padding:0px;
}
.FeaturedPost .widget-content{
overflow:hidden;
padding:0px !important;
border:0px !important;
}
.FeaturedPost .widget-content .post:hover .snippet-thumbnail img{
transform:scale(1.1);
filter:brightness(80%);
-webkit-filter:brightness(80%);
}
.FeaturedPost .snippet-thumbnail{
border-radius:7px 7px 0px 0px;
line-height:0px;
overflow:hidden;
height:100%;
}
.FeaturedPost .snippet-thumbnail img{
transition:all .2s ease;
}
.FeaturedPost .post-title{
font-size:1.25rem;
margin:15px 15px 0px;
overflow:hidden;
line-height:initial;
}
.FeaturedPost .post-title a{
color:var(--igniplexTextLight);
}
.FeaturedPost .post-title a:hover{
color:var(--igniplexMainLight);
}
.FeaturedPost .post-snippet{
display:block;
line-height:1.5em;
color:var(--igniplexSingleLight);
margin:10px 15px 15px;
padding:0;
overflow:hidden;
}
.Profile .widget-content.individual{
line-height:normal;
text-align:center;
}
footer .Profile .widget-content.team .about{
background-color:var(--igniplexMainLight);
}
.Profile .avatar{
width:81px;
height:81px;
min-width:81px;
min-height:81px;
margin:auto;
}
.Profile .avatar:before{
width:81px;
height:81px;
}
.Profile .team .avatar{
margin:0 15px 0 0;
width:65px;
height:65px;
min-width:65px;
min-height:65px;
position:absolute;
left:0;
top:0;
bottom:0;
margin:auto;
}
.Profile .team .avatar:before{
width:65px;
height:65px;
}
.Profile img{
width:75px;
height:75px;
}
.Profile .team img{
width:59px;
height:59px;
}
.Profile .team .about{
border-radius:7px 50px 50px 7px !important;
line-height:1.5rem;
margin-left:25px;
padding:10px 10px 10px 50px !important;
}
.Profile .individual .name{
font-size:1.25rem;
font-weight:600;
margin:10px 0px 5px;
}
.Profile .team .name{
font-size:1.15rem;
margin:0px;
overflow:hidden;
text-overflow:ellipsis;
white-space:nowrap;
}
.Profile .location{
font-size:.85rem;
color:var(--igniplexIcons);
margin:10px 0px;
}
.Profile .location svg{
width:.85rem;
height:.85rem;
vertical-align:-.1rem;
}
.Profile .location svg path{
fill:var(--igniplexIcons);
}
.Profile .individual .about{
color:var(--igniplexSingleLight);
margin:15px 0px 10px;
transition:color .2s ease;
}
.Profile .visit{
background-color:var(--igniplexTabsLight);
color:var(--igniplexSingleLight);
margin-top:15px;
padding:7px 25px;
display:inline-block;
border-radius:3px;
transition:all .2s ease;
}
.Profile .visit:hover{
background-color:var(--igniplexMainLight);
color:#fff;
}
.Profile .team a{
color:var(--igniplexIcons);
font-size:.85rem;
}
.Profile .team a:hover, .igniplexDark .Profile .team a:hover{
color:var(--igniplexMainLight);
}
footer .Profile .team a{
color:#fff;
}
.Profile ul li{
position:relative;
}
.Profile ul li:not(:last-child){
margin-bottom:15px;
}
.FollowByEmail .title, .FollowByEmail .icon{
text-align:center;
}
.FollowByEmail .icon svg{
width:50px;
height:50px;
-webkit-animation:ignielRing 6s 0s ease-in-out infinite;
-webkit-transform-origin:50% 4px;
-moz-animation:ignielRing 6s 0s ease-in-out infinite;
-moz-transform-origin:50% 4px;
animation:ignielRing 6s 0s ease-in-out infinite;
transform-origin:50% 4px;
}
.FollowByEmail .icon svg path{
fill:var(--igniplexMainLight);
}
footer .FollowByEmail .icon svg path{
fill:var(--igniplexMainLight);
}
.FollowByEmail button svg{
width:24px;
height:24px;
vertical-align:-5px;
}
.FollowByEmail button svg path{
fill:var(--igniplexMainLight);
}
.FollowByEmail button:hover svg path{
fill:var(--igniplexLinkHover);
}
footer .FollowByEmail button svg path{
fill:#fff;
}
.FollowByEmail form{
display:-webkit-box;
display:-webkit-flex;
display:-moz-box;
display:-ms-flexbox;
display:flex;
justify-content:center;
align-items:center;
position:relative;
}
.FollowByEmail form input[type="email"]{
background-color:var(--igniplexBodyLight);
color:var(--igniplexSingleLight);
padding:0px 15px;
flex-grow:1;
width:100%;
height:40px;
border-radius:7px;
transition:all .2s ease;
}
footer .FollowByEmail form input[type="email"]{
background-color:#fff;
}
.FollowByEmail button{
background-color:transparent;
margin:0;
padding:0;
position:absolute;
right:10px;
}
footer .FollowByEmail button{
background-color:var(--igniplexLinkFooter);
}
footer .Profile .visit{
border-color:var(--igniplexLinkFooter);
}
footer .Profile .visit:hover{
background-color:var(--igniplexLinkFooter);
color:var(--igniplexFooter);
}
#sidebarSticky{
position:sticky;
position:-webkit-sticky;
top:10px;
transition:top .2s ease;
}
/* 404 Page Not Found */
#igniplex404{
display:-webkit-box;
display:-webkit-flex;
display:-moz-box;
display:-ms-flexbox;
display:flex;
flex-wrap:wrap;
align-content:center;
justify-content:center;
font-size:3rem;
text-align:center;
padding:30px;
width:calc(100% - 60px);
height:calc(100% - 60px);
line-height:3.5rem;
transition:all .2s ease;
}
#igniplex404 svg{
width:15rem;
height:15rem;
}
#igniplex404 svg path{
fill:var(--igniplexMainLight);
}
#igniplex404 .icon{
display:-webkit-box;
display:-webkit-flex;
display:-moz-box;
display:-ms-flexbox;
display:flex;
align-items:center;
justify-content:center;
font-size:15rem;
color:var(--igniplexMainLight);
width:100%;
transition:all .2s ease;
}
#igniplex404 .text{
margin-top:15px;
width:100%;
}
#igniplex404 .home{
font-size:1.25rem;
margin-top:15px;
}
#igniplex404 .home a{
background-color:var(--igniplexMainLight);
color:#fff;
padding:7px 20px;
border-radius:25px;
}
#igniplex404 .home a:hover{
background-color:var(--igniplexLinkHover);
}
/* AdBlock */
#ignielAdBlock{
background-color:#000;
padding:0;
position:fixed;
bottom:0;
left:0;
top:0px;
right:0;
z-index:1000;
height:auto;
}
#ignielAdBlock svg{
width:100px;
height:100px;
display:block;
margin:auto auto 20px;
text-align:center;
}
#ignielAdBlock svg path{
fill:#fff
}
#ignielAdBlock a{
color:#ffe88b;
}
#ignielAdBlock a:hover{
color:#ffe88b;
}
#ignielAdBlock .isiAds{
background-color:#e74c3c;
color:#fff;
max-width:400px;
border-radius:10px;
position:absolute;
text-align:center;
padding:20px 30px;
margin:auto;
top:30%;
left:0;
right:0;
font-size:1.5rem;
line-height:1.5em;
overflow:hidden;
box-shadow:0 20px 10px -10px rgba(0,0,0,.15);
border:15px solid rgba(0,0,0,.1);
transition:all .6s cubic-bezier(.25,.8,.25,1);
transform-origin:bottom center;
transform:rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1);
animation:ignielWobble .5s; -moz-animation: ignielWobble .5s; -webkit-animation:ignielWobble .5s; -o-animation:ignielWobble .5s
}
#igniplexNoScript{
background-color:#000;
padding:0;
position:fixed;
bottom:0;
left:0;
top:0px;
right:0;
z-index:1000;
height:auto;
}
#igniplexNoScript svg{
width:100px;
height:100px;
display:block;
margin:auto auto 20px;
text-align:center;
}
#igniplexNoScript svg path{
fill:#fff
}
#igniplexNoScript .isi{
background:#009688;
color:#fff;
max-width:400px;
border-radius:10px;
position:absolute;
text-align:center;
padding:20px 30px;
margin:auto;
top:30%;
left:0;
right:0;
font-size:1.5rem;
line-height:1.5em;
overflow:hidden;
box-shadow:0 20px 10px -10px rgba(0,0,0,.15);
border:15px solid rgba(0,0,0,.1);
transition:all .6s cubic-bezier(.25,.8,.25,1);
transform-origin:bottom center;
transform:rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1);
animation:ignielWobble .5s; -moz-animation: ignielWobble .5s; -webkit-animation:ignielWobble .5s; -o-animation:ignielWobble .5s
}
/* Blogspot Pagination by IGNIEL.COM */
#ignielPagination{
display:-webkit-box;
display:-webkit-flex;
display:-moz-box;
display:-ms-flexbox;
display:flex;
flex-wrap:wrap;
align-items:center;
justify-content:center;
}
#ignielPagination:before{
content:'PAGES';
color:var(--igniplexMainLight);
margin-right:.85rem;
margin-top:.85rem;
}
#ignielPagination a, #ignielPagination .selected{
border:1px solid var(--igniplexMainLight);
padding:.15rem .75rem;
margin:.75rem .75rem  0px 0px;
border-radius:3px;
transition:all .2s ease;
}
#ignielPagination a{
color:var(--igniplexMainLight);
}
#ignielPagination a:last-child {
margin-right:0px;
}
#ignielPagination a:hover{
background-color:var(--igniplexMainLight);
color:#fff;
text-decoration:none;
}
#ignielPagination a:hover:before{
display:none;
}
#ignielPagination a:after{
display:none;
}
#ignielPagination .selected{
background-color:var(--igniplexMainLight);
color:#fff;
cursor:not-allowed;
}
/* Blog Pager */
.blog-pager{
display:-webkit-box;
display:-webkit-flex;
display:-moz-box;
display:-ms-flexbox;
display:flex;
flex-wrap:nowrap;
align-items:center;
justify-content:space-between;
margin-top:30px;
text-transform:uppercase;
position:relative;
}
.blog-pager a{   
color:var(--igniplexTextLight);
display:inline-block;
}
.blog-pager a:hover{
coloe:var(--igniplexMainLight);
}
.blog-pager.infinite{
justify-content:center;
letter-spacing:2px;
}
.blog-pager.infinite .inner{
background-color:var(--igniplexMainLight);
border-radius:3px;
font-weight:600;
position:relative;
text-align:center;
transition:all .2s ease;
width:10rem;
}
.blog-pager.infinite .inner:hover{
background-color:var(--igniplexLinkHover);
}
.blog-pager.infinite a{
color:#fff;
padding:.5rem .75rem;
}
.blog-pager.infinite a:hover{
color:#fff;
}
.blog-pager.infinite .loading{
padding:7px 10px;
cursor:not-allowed;
}
.blog-pager.infinite .loading svg{
width:20px;
height:20px;
vertical-align:-5px;
animation:ignielSpin .5s linear infinite normal;
-moz-animation:ignielSpin .5s linear infinite normal;
-webkit-animation:ignielSpin .5s linear infinite normal;
-o-animation:ignielSpin .5s linear infinite normal;
}
.blog-pager.infinite .loading svg path{
fill:#fff;
}
.blog-pager.number{
flex-wrap:wrap;
justify-content:center;
}
.blog-pager.number a, .blog-pager.number span{
background-color:var(--igniplexPostLight);
border-radius:3px;
margin:0px 7px 7px 0px;
padding:3px 12px;
transition:all .2s ease;
}
.blog-pager.number a{
color:var(--igniplexTextLight);
cursor:pointer;
}
.blog-pager.number a:hover{
background-color:var(--igniplexMainLight);
color:#fff;
}
.blog-pager.number .current, .blog-pager.number .dot{
cursor:not-allowed;
}
.blog-pager.number .current{
color:var(--igniplexMainLight);
}
.blog-pager.number .dot{
background-color:transparent;
}
/* Navigasi Blogger dengan Judul by igniel.com */
.blog-pager.stream{
align-items:flex-start;
}
.blog-pager.stream a{
color:var(--igniplexTextLight);
padding:0px;
}
.blog-pager.stream a:hover{
color:var(--igniplexMainLight);
}
.blog-pager.stream .left, .blog-pager.stream .home-link{
text-align:left;
margin-right:15px;
width:50%;
}
.blog-pager.stream .right, .blog-pager.stream .old-link{
text-align:right;
margin-left:15px;
width:50%;
}
.blog-pager.stream .text{
color:var(--igniplexIcons);
font-size:.85rem;
letter-spacing:1px;
text-transform:uppercase;
transition:all .2s ease;
}
.blog-pager.stream .title{
font-size:1.15rem;
margin-bottom:0px !important;
text-transform:none;
line-height:1.5rem;
}
.blog-pager.stream .nolink{
cursor:not-allowed;
display:block;
}
.blog-pager.stream .right .text:after{
content:'';
margin-left:5px;
width:22px;
height:22px;
vertical-align:-7px;
display:inline-block;
background:url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M23,12L19,16V13H6.83C6.42,14.17 5.31,15 4,15A3,3 0 0,1 1,12A3,3 0 0,1 4,9C5.31,9 6.42,9.83 6.83,11H19V8L23,12Z' fill='%23757575'/%3E%3C/svg%3E") center no-repeat;
}
.blog-pager.stream .left .text:before{
content:'';
margin-right:5px;
width:22px;
height:22px;
vertical-align:-7px;
display:inline-block;
background:url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1,12L5,16V13H17.17C17.58,14.17 18.69,15 20,15A3,3 0 0,0 23,12A3,3 0 0,0 20,9C18.69,9 17.58,9.83 17.17,11H5V8L1,12Z' fill='%23757575'/%3E%3C/svg%3E") center no-repeat;
}
.blog-pager.stream .home-link .text:before{
content:'';
margin-right:3px;
width:17px;
height:17px;
vertical-align:-4px;
display:inline-block;
background:url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z' fill='%23757575'/%3E%3C/svg%3E") center / 15px no-repeat;
}
.blog-pager.stream .old-link .text:after{
content:'';
margin-left:3px;
width:17px;
height:17px;
vertical-align:-4px;
display:inline-block;
background:url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z' fill='%23757575'/%3E%3C/svg%3E") center / 15px no-repeat;
}
.igniplexRelated{
font-weight:600;
margin-top:30px;
line-height:1.5rem
}
.igniplexRelated .title{
text-transform:capitalize;
}
.igniplexRelated ul{
display:grid;
grid-gap:20px;
grid-template-columns:repeat(3, 1fr);
margin:0px;
padding:0px;
height:70px;
position:relative;
}
.igniplexRelated ul.noimg{
background-color:var(--igniplexPostLight);
display:block;
counter-reset:igniplexRelated;
padding:10px 15px;
border-radius:7px;
}
.igniplexRelated ul.noimg li:before {
content:'0'counter(igniplexRelated)'.';
counter-increment:igniplexRelated;
color:var(--igniplexTextLight);
font-size:1.75em;
font-weight:400;
margin-right:10px;
white-space:nowrap;
}
.igniplexRelated ul.noimg li{
background-color:transparent;
box-shadow:none;
width:auto;
display:-webkit-box;
display:-webkit-flex;
display:-moz-box;
display:-ms-flexbox;
display:flex;
align-items:center;
margin:0px;
border-radius:0px;
}
.igniplexRelated ul.noimg li:not(:last-child) {
border-bottom:1px dashed var(--igniplexTabsLight);
margin-bottom:7px;
padding-bottom:7px;
}
.igniplexRelated ul li{
background-color:var(--igniplexPostLight);
list-style:none;
border-radius:7px;
transition:all .2s ease;
}
.igniplexRelated a{    
color:var(--igniplexTextLight);
}
.igniplexRelated a:hover{
color:var(--igniplexMainLight);
}
.igniplexRelated ul.noimg a{
display:block;
font-weight:400;
padding:10px 0px;
}
.igniplexRelated .thumb{
overflow:hidden;
line-height:0px;
border-radius:7px 7px 0px 0px;
}
.igniplexRelated .thumb img{
width:100%;
transition:all .2s ease;
}
.igniplexRelated .thumb img:hover, .igniplexRelated .thumb:hover img{
transform:scale(1.1);
filter:brightness(80%);
-webkit-filter:brightness(80%);
}
.igniplexRelated .text{
padding:15px;
}
.igniplexRelated .text a{
display:block;
}
.igniplexRelated .norelated{
text-align:center;
font-weight:600;
}
.igniplexLoading{
position:absolute;
margin:auto;
text-align:center;
top:0px;
bottom:0px;
left:0px;
right:0px;
height:100%;
}
.ignielRipple{
display:inline-block;
position:absolute;
width:64px;
height:64px;
top:0px;
bottom:0px;
left:0px;
right:0px;
margin:auto;
}
.ignielRipple div{
position:absolute;
border:4px solid var(--igniplexMainLight);
opacity:1;
border-radius:50%;
animation:ignielRipple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
transition:all .2s ease;
}
.ignielRipple div:nth-child(2) {
animation-delay:-0.5s;
}
/* Contact Form */
#kontak{
display:block;
margin:auto;
color:var(--igniplexSingleLight);
transition:all .2s ease;
}
#kontak .top{
display:-webkit-box;
display:-webkit-flex;
display:-moz-box;
display:-ms-flexbox;
display:flex;
align-items:center;
justify-content:space-between;
}
#ContactForm1_contact-form-name, #ContactForm1_contact-form-email{
width:50%;
background-color:var(--igniplexBodyLight);
border-radius:5px;
padding:15px;
border:1px solid var(--igniplexTabsLight);
transition:all .2s ease;
}
#ContactForm1_contact-form-email{
margin-left:20px;
}
#ContactForm1_contact-form-email-message{
width:calc(100% - 33px);
transition:all .2s ease;
background-color:var(--igniplexBodyLight);
border-radius:5px;
padding:12px 15px;
resize:none;
margin:20px 0px;
height:150px;
border:1px solid var(--igniplexTabsLight);
transition:all .2s ease;
}
#ContactForm1_contact-form-name:focus, #ContactForm1_contact-form-email:focus, #ContactForm1_contact-form-email-message:focus{
outline:none;
background-color:var(--igniplexPostLight);
border:1px solid var(--igniplexMainLight);
}
#ContactForm1_contact-form-submit{
border-radius:100px;
padding:10px 15px;
font-size:1.15rem;
font-weight:600;
cursor:pointer;
color:#fff;
background-color:var(--igniplexMainLight);
background-position:center;
box-shadow:0 0 4px #999;
transition:background .3s;
}
#kontak .bottom{
margin-top:20px;
}
.contact-form-error-message-with-border, .contact-form-success-message-with-border{
color:#856404;
background-color:#fff3cd;
border:1px solid #ffeeba;
padding:10px;
border-radius:5px;
}
#kontak img.contact-form-cross{
cursor:pointer;
margin-left:5px;
display:inline-block;
vertical-align:middle;
}
/* Sitemap */
#sitemap2{
font-size:1rem;
line-height:1.75rem;
}
#sitemap2 .judul{
font-size:1.5rem;
text-align:center;
}
#sitemap2 table{
table-layout:fixed;
}
#sitemap2 th a{
color:#fff;
}
#sitemap2 th a:after{
content:'';
display:inline-block;
min-height:17px;
min-width:17px;
margin-left:7px;
vertical-align:-2px;
background:url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10,13V11H18V13H10M10,19V17H14V19H10M10,7V5H22V7H10M6,17H8.5L5,20.5L1.5,17H4V7H1.5L5,3.5L8.5,7H6V17Z' fill='%23fff'/%3E%3C/svg%3E") center no-repeat;
}
#sitemap2 td a{
color:var(--igniplexSingleLight);
transition:all .2s ease;
}
#sitemap2 td a:hover{
color:var(--igniplexLinkHover);
}
/* DARK MODE */
body.igniplexDark, .igniplexDark .igniplexSearch .search .input, .igniplexDark .FollowByEmail form input[type="email"], .igniplexDark #ContactForm1_contact-form-name, .igniplexDark #ContactForm1_contact-form-email, .igniplexDark #ContactForm1_contact-form-email-message, .igniplexDark footer .BlogArchive .FLAT ul li, .igniplexDark .post-body table th, .igniplexDark.isPost .post-labels a, .igniplexDark .NavMenu .social, .igniplexDark .Profile .visit, .igniplexDark blockquote:before{
background-color:var(--igniplexBodyDark);
}
.igniplexDark .NavMenu, .igniplexDark.isSingle .post-outer .post, .igniplexDark .post-outer, .igniplexDark .igniplexAuthor, .igniplexDark footer .widget-content, .igniplexDark #main .widget-content, .igniplexDark .post-body table tr:nth-child(odd) td, .igniplexDark .igniplexRelatedMiddle .judul:before, .igniplexDark .igniplexRelatedMiddle .judul span, .igniplexDark .igniplexShare, .igniplexDark .igniplexAuthor img, .igniplexDark .Profile img, .igniplexDark #comments .comment-thread ol > li, .igniplexDark #comments #comments-block .comment, .igniplexDark .sidebar .widget-content, .igniplexDark #ContactForm1_contact-form-name:focus, .igniplexDark #ContactForm1_contact-form-email:focus, .igniplexDark #ContactForm1_contact-form-email-message:focus, .igniplexDark .Label .cloud ul li, .igniplexDark .BlogArchive select, .igniplexDark .owl-dots .owl-dot.active span, .igniplexDark .igniplexRelated ul li, .igniplexDark .igniplexRelated ul.noimg, .igniplexDark #middlebar ul li, .igniplexDark #middlebar ul.noimage, .igniplexDark .blog-pager.number a, .igniplexDark .blog-pager.number .current, .igniplexDark blockquote, .igniplexDark .comment-form, .igniplexDark .Profile .widget-content.team .about{
background-color:var(--igniplexPostDark);
}
.igniplexDark .blog-pager.infinite .inner, .igniplexDark #igniplexHeader, .igniplexDark.isSingle .igniplexTitle, .igniplexDark .post-filter-message, .igniplexDark #igniplexSlider .PopularPosts .post-labels a, .igniplexDark #main .FeaturedPost .title, .igniplexDark #top-continue.continue a, .igniplexDark #comments .footer a{
background-color:var(--igniplexMainDark);
}
.igniplexDark .totop, .igniplexDark footer .PopularPosts ul li:before, .igniplexDark footer .Profile .visit:hover, .igniplexDark .Label .list a:before, .igniplexDark .BlogArchive ul.FLAT li a:before, .igniplexDark .PopularPosts ul li:before{
background-color:var(--igniplexTextDark);
}
.igniplexDark .totop:hover, .igniplexDark #igniplexSlider .PopularPosts .post-labels a:hover, .igniplexDark .blog-pager.infinite .inner:hover, .igniplexDark #top-continue.continue a:hover, .igniplexDark #comments .footer a:hover, .igniplexDark .Label .cloud ul li:hover, .igniplexDark .BlogArchive select:hover, .igniplexDark footer .Label .cloud ul li:hover, .igniplexDark .Profile .visit:hover, .igniplexDark .owl-dots .owl-dot:hover span, .igniplexDark .blog-pager.number a:hover{
background-color:var(--igniplexMainLight);
}
.igniplexDark .NavMenu .head{
background-color:#141e27;
}
.igniplexDark .MenuList > ul li:hover > a, .igniplexDark .MenuList ul > li.open > a, .igniplexDark nav ul li:hover, .igniplexDark .post-body table tr:nth-child(even) td{
background-color:rgba(0,0,0,.1);
}
.igniplexDark.isSingle .post-outer, .igniplexDark .NavMenu .igniplexMode:hover{
background-color:transparent;
}
.igniplexDark #igniplexHeader label:hover{
background:rgba(255,255,255,.1) radial-gradient(circle, transparent 2%, rgba(255,255,255,.1) 2%) center/15000%;
}
html.igniplexDark, body.igniplexDark, .igniplexDark .post-body table.tr-caption-container td, .igniplexDark .NavMenu, .igniplexDark nav a, .igniplexDark .post-title.entry-title a, .igniplexDark .igniplexAuthor .author-name a, .igniplexDark #comments .comment .comment-header .user, .igniplexDark #comments .comment .comment-header .user a, .igniplexDark .widget .title, .igniplexDark .BlogArchive .hierarchy-title a, .igniplexDark .PopularPosts .item-title a, .igniplexDark .FeaturedPost .post-title a, .igniplexDark .blog-pager.stream .title, .igniplexDark .igniplexRelated ul li > a, .igniplexDark footer .Profile .visit, .igniplexDark.isPost .post-labels a, .igniplexDark #comments .comment .comment-actions a, .igniplexDark #comments .comment .comment-actions .item-control a, .igniplexDark #comments .comment-timestamp a:hover, .igniplexDark #comments .datetime a:hover, .igniplexDark.isPost .igniplexRelatedMiddle ul li a, .igniplexDark .igniplexRelatedMiddle .judul span, .igniplexDark #comments .comment:target .comment-content, .igniplexDark footer .PopularPosts .item-title a, .igniplexDark .igniplexRelated ul.noimg li:before, .igniplexDark #middlebar a, .igniplexDark .igniplexRelated a, .igniplexDark .igniplexSearch .search .input, .igniplexDark .Profile .visit, .igniplexDark .Label ul li a, .igniplexDark .BlogArchive .FLAT ul li a, .igniplexDark .blog-pager.number a, .igniplexDark .blog-pager.number .dot, .igniplexDark .post-body h1, .igniplexDark .post-body h2, .igniplexDark .post-body h3, .igniplexDark .post-body h4, .igniplexDark .post-body h5, .igniplexDark .PopularPosts ul.noimage li:before, .igniplexDark .blog-pager a{
color:var(--igniplexTextDark);
}
.igniplexDark .post-snippet, .igniplexDark.isSingle .post-body, .igniplexDark .FollowByEmail form input[type="email"], .igniplexDark .post-body table td.tr-caption, .igniplexDark #comments .comment .comment-content, .igniplexDark .comment .comment-body, .ignipexDark .comment .comment-body, .igniplexDark #kontak, .igniplexDark #sitemap2 td a, .igniplexDark .blog-pager.stream .text, .igniplexDark .PopularPosts .item-snippet, .igniplexDark .content .post-timestamp, .igniplexDark .post-footer-bottom, .igniplexDark .post-footer-bottom a, .igniplexDark .Label .count, .igniplexDark .BlogArchive .FLAT .count, .igniplexDark .BlogArchive ul.posts li, .igniplexDark .BlogArchive ul.posts li a, .igniplexDark .igniplexAuthor .author-desc, .igniplexDark .Profile .team a, .igniplexDark .Profile .individual .about, .igniplexDark .post-info, .igniplexDark .post-info a, .igniplexDark .breadcrumb, .igniplexDark .breadcrumb a{
color:var(--igniplexSingleDark);
}
.igniplexDark #igniplexHeader #header h1::first-letter, .igniplexDark #igniplexHeader #header h2::first-letter, .igniplexDark .PopularPosts ul li:before, .igniplexDark footer .PopularPosts ul li:before, .igniplexDark .Profile .visit:hover, .igniplexDark footer .Profile .visit:hover, .igniplexDark footer .Profile .visit:hover{
color:var(--igniplexPostDark);
}
.igniplexDark .FeaturedPost .post-title a:hover, .igniplexDark .post-title.entry-title a:hover, .igniplexDark.isPost .igniplexRelatedMiddle ul li a:hover, .igniplexDark #comments .comment .comment-header .user a:hover, .igniplexDark #comments .comment-author a, .igniplexDark #comments .comment .comment-actions a:hover, .igniplexDark #comments .comment .comment-actions .item-control a:hover, .igniplexDark .PopularPosts .item-title a:hover, .igniplexDark footer .PopularPosts .item-title a:hover, .igniplexDark .igniplexRelated ul li > a:hover, .igniplexDark .igniplexAuthor .author-name a:hover, .igniplexDark #middlebar a:hover, igniplexDark .igniplexRelated a:hover, .igniplexDark .Feed ul li a:hover, .igniplexDark .Label .list ul li a:hover, .igniplexDark .BlogArchive .FLAT ul li a:hover, .igniplexDark footer .widget-content a, .igniplexDark .blog-pager.stream a:hover, .igniplexDark .post-footer-bottom a:hover{
color:var(--igniplexMainLight);
}
.igniplexDark blockquote{
color:var(--igniplexPostLight);
}
.igniplexDark .igniplexAuthor img, .igniplexDark .Profile img, .igniplexDark .PopularPosts ul li:before, .igniplexDark footer .PopularPosts ul li:before, .igniplexDark .post-body table thead{
border-color:var(--igniplexPostDark);
}
.igniplexDark .post-body table td.tr-caption, .igniplexDark .PopularPosts ul li, .igniplexDark #ContactForm1_contact-form-name, .igniplexDark #ContactForm1_contact-form-email, .igniplexDark #ContactForm1_contact-form-email-message, .igniplexDark .igniplexRelatedMiddle ul.noimg li, .igniplexDark .igniplexRelated ul.noimg li:not(:last-child), .igniplexDark #middlebar ul.noimage li:not(:last-of-type), .igniplexDark .Feed ul li:not(:last-child){
border-color:var(--igniplexTabsDark);
}
.igniplexDark .ignielRipple div, .igniplexDark footer .Profile .visit, .igniplexDark #middlebar .ignielRipple div, .igniplexDark .igniplexRelatedMiddle .judul:after, .igniplexDark .igniplexRelatedMiddle{
border-color:var(--igniplexTextDark);
}
.igniplexDark.isPost .post-labels a{
border-color:var(--igniplexBodyDark);
}
.igniplexDark .NavMenu .head, .igniplexDark .NavMenu .social{
border-color:#141e27;
}
.igniplexDark .post-body table{
border-color:rgba(0,0,0,.15);
}
.igniplexDark blockquote:after{
border-color:var(--igniplexPostDark) var(--igniplexPostDark) rgba(255,255,255,.05) rgba(255,255,255,.05);
}
.igniplexDark .post-body table th, .igniplexDark .post-body table tr:nth-child(even) td{
border-right-color:var(--igniplexPostDark);
}
.igniplexDark .post-body table th:last-child, .igniplexDark .post-body table tr:nth-child(odd) td{
border-right-color:rgba(0,0,0,.15); 
}
.igniplexDark .NavMenu:after{
border-bottom-color:#141e27;
}
.igniplexDark button:hover, .igniplexDark button.download:hover, .igniplexDark button.demo:hover, .igniplexDark blockquote{
box-shadow:inset 0 0 0 99999px rgba(0,0,0,.15);
}
.igniplexDark .igniplexWave path{
fill:var(--igniplexBodyDark);
}
.igniplexDark nav svg path, .igniplexDark .igniplexMenu nav svg path, .igniplexDark .FollowByEmail .icon svg path, .igniplexDark #comments .comment-message svg path, .igniplexDark #igniplexHeader .igniplexSearch .search .icon .close path, .igniplexDark .FollowByEmail button svg path{
fill:var(--igniplexTextDark);
}
.igniplexDark .post-footer-bottom svg path{
fill:var(--igniplexSingleDark);
}
.igniplexDark .FollowByEmail button:hover svg path{
fill:var(--igniplexMainLight);
}
.igniplexDark .NavMenu .head svg path.stroke{
stroke:var(--igniplexPostDark);
}
.igniplexDark.isSingle .igniplexTitle, .igniplexDark .post-filter-message{
background-image:linear-gradient(110deg,transparent 75%,rgba(255,255,255,.025) 75%,rgba(255,255,255,.025) 81.5%,rgba(255,255,255,.05) 0%,rgba(255,255,255,.05));
}
.igniplexDark .igniplexRelatedMiddle ul.noimg li:before{
background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' fill='%23efefef'/%3E%3C/svg%3E");
}
.igniplexDark .totop{
background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z' fill='%23212121'/%3E%3C/svg%3E");
}
.igniplexDark #comments .comment:target{
background-color:var(--igniplexTabsDark);
border-color:var(--igniplexIcons);
box-shadow:unset;
}
@keyframes ignielWobble{0%{transform:scale(0) rotate(-54deg) translatey(40px)}45%{transform:scale(1.1) rotate(20deg) translatey(0px)}60%{transform:scale(1) rotate(-15deg) translatey(0px)}77%{transform:scale(1) rotate(10deg) translatey(0px)}100%{transform:translatey(0)}}@-webkit-keyframes ignielWobble{0%{transform:scale(0) rotate(-54deg) translatey(40px)}45%{transform:scale(1.1) rotate(20deg) translatey(0px)}60%{transform:scale(1) rotate(-15deg) translatey(0px)}77%{transform:scale(1) rotate(10deg) translatey(0px)}100%{transform:translatey(0)}}@-moz-keyframes ignielWobble{0%{transform:scale(0) rotate(-54deg) translatey(40px)}45%{transform:scale(1.1) rotate(20deg) translatey(0px)}60%{transform:scale(1) rotate(-15deg) translatey(0px)}77%{transform:scale(1) rotate(10deg) translatey(0px)}100%{transform:translatey(0)}}
@keyframes ignielRipple{0%{top:28px;left:28px;width:0;height:0;opacity:1}100%{top:-1px;left:-1px;width:58px;height:58px;opacity:0}}@-moz-keyframes ignielRipple{0%{top:28px;left:28px;width:0;height:0;opacity:1}100%{top:-1px;left:-1px;width:58px;height:58px;opacity:0}}@-webkit-keyframes ignielRipple{0%{top:28px;left:28px;width:0;height:0;opacity:1}100%{top:-1px;left:-1px;width:58px;height:58px;opacity:0}}
@keyframes ignielRing{0%{transform:rotate(0)}1%{transform:rotate(30deg)}3%{transform:rotate(-28deg)}5%{transform:rotate(34deg)}7%{transform:rotate(-32deg)}9%{transform:rotate(30deg)}11%{transform:rotate(-28deg)}13%{transform:rotate(26deg)}15%{transform:rotate(-24deg)}17%{transform:rotate(22deg)}19%{transform:rotate(-20deg)}21%{transform:rotate(18deg)}23%{transform:rotate(-16deg)}25%{transform:rotate(14deg)}27%{transform:rotate(-12deg)}29%{transform:rotate(10deg)}31%{transform:rotate(-8deg)}33%{transform:rotate(6deg)}35%{transform:rotate(-4deg)}37%{transform:rotate(2deg)}39%{transform:rotate(-1deg)}41%{transform:rotate(1deg)}43%{transform:rotate(0)}100%{transform:rotate(0)}}@-webkit-keyframes ignielRing{0%{-webkit-transform:rotateZ(0)}1%{-webkit-transform:rotateZ(30deg)}3%{-webkit-transform:rotateZ(-28deg)}5%{-webkit-transform:rotateZ(34deg)}7%{-webkit-transform:rotateZ(-32deg)}9%{-webkit-transform:rotateZ(30deg)}11%{-webkit-transform:rotateZ(-28deg)}13%{-webkit-transform:rotateZ(26deg)}15%{-webkit-transform:rotateZ(-24deg)}17%{-webkit-transform:rotateZ(22deg)}19%{-webkit-transform:rotateZ(-20deg)}21%{-webkit-transform:rotateZ(18deg)}23%{-webkit-transform:rotateZ(-16deg)}25%{-webkit-transform:rotateZ(14deg)}27%{-webkit-transform:rotateZ(-12deg)}29%{-webkit-transform:rotateZ(10deg)}31%{-webkit-transform:rotateZ(-8deg)}33%{-webkit-transform:rotateZ(6deg)}35%{-webkit-transform:rotateZ(-4deg)}37%{-webkit-transform:rotateZ(2deg)}39%{-webkit-transform:rotateZ(-1deg)}41%{-webkit-transform:rotateZ(1deg)}43%{-webkit-transform:rotateZ(0)}100%{-webkit-transform:rotateZ(0)}}@-moz-keyframes ignielRing{0%{-moz-transform:rotate(0)}1%{-moz-transform:rotate(30deg)}3%{-moz-transform:rotate(-28deg)}5%{-moz-transform:rotate(34deg)}7%{-moz-transform:rotate(-32deg)}9%{-moz-transform:rotate(30deg)}11%{-moz-transform:rotate(-28deg)}13%{-moz-transform:rotate(26deg)}15%{-moz-transform:rotate(-24deg)}17%{-moz-transform:rotate(22deg)}19%{-moz-transform:rotate(-20deg)}21%{-moz-transform:rotate(18deg)}23%{-moz-transform:rotate(-16deg)}25%{-moz-transform:rotate(14deg)}27%{-moz-transform:rotate(-12deg)}29%{-moz-transform:rotate(10deg)}31%{-moz-transform:rotate(-8deg)}33%{-moz-transform:rotate(6deg)}35%{-moz-transform:rotate(-4deg)}37%{-moz-transform:rotate(2deg)}39%{-moz-transform:rotate(-1deg)}41%{-moz-transform:rotate(1deg)}43%{-moz-transform:rotate(0)}100%{-moz-transform:rotate(0)}}
@keyframes ignielSpin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}@-webkit-keyframes ignielSpin{from{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(360deg)}}@-moz-keyframes ignielSpin{from{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(360deg)}}
@keyframes ignielFadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes ignielFadein{from{opacity:0}to{opacity:1}}@-moz-keyframes ignielFadein{from{opacity:0}to{opacity:1}}

@media screen and (max-width:1024px){
  #igniel{
  width:auto;
  max-width:100%;
  float:none;
  }
  #main{
  width:calc((100% - 250px) - 20px);
  }
  #middlebar .text{
  font-family:var(--igniplexFont);
  font-size:1rem;
  font-weight:600;
  padding:15px;
  }
  .sidebar{
  width:auto;
  float:none;
  margin-left:0px;
  }
  #middlebar .widget-content{
  width:250px;
  }
  #middlebar img{
  max-width:100%;
  }
  .igniplexSearch .search .check:checked ~ .input, .igniplexSearch .search .input:focus{
  width:calc(100vw - 73px);
  }
}
@media screen and (max-width: 950px){
  #header{
  order:2;
  justify-content:center;
  }
  #igniplexHeader #header h1, #igniplexHeader #header h2{
  font-weight:400;
  }
  .igniplexNavigation{
  display:none;
  }
  .igniplexMenu{
  order:1;
  flex-grow:unset;
  flex:unset;
  margin-right:0px;
  }
  .header-right{
  margin-right:20px;
  }
  #igniplexHeader .header-inner{
  padding:5px 0px;
  }
  #igniplexHeader .igniplexMenu .icon{
  display:block;
  }
  .igniplexSearch .search .check:checked ~ .input, .igniplexSearch .search .input:focus{
  width:calc(100vw - 47px);
  }
  .MenuList{
  position:absolute;
  top:0px;
  left:-90vw;
  opacity:0;
  visibility:hidden;
  max-width:75vw;
  width:auto;
  height:100vh;
  background-color:#fff;
  z-index:4;
  overflow-x:hidden;
  overflow-y:auto;
  transition:all .2s ease;
  }
  .MenuList .head{
  padding:1.5rem 2rem;
  }
  .MenuList .head a{
  line-height:0;
  }
  .MenuList .head .name{
  margin:0 0 .5rem;
  }
  .MenuList .ava{
  width:65px;
  min-width:65px;
  margin-right:30px;
  }
  .MenuList .ava img{
  max-width:65px;
  max-height:65px;
  }
  .MenuList nav{
  padding-top:1rem;
  padding-bottom:4rem;
  border-top:1px solid rgba(0,0,0,.15);
  }
  .igniplexDark .MenuList nav{
  border-top-color:rgba(255,255,255,.1);
  }
  .MenuList nav svg{
  width:1.25rem;
  height:1.25rem;
  margin-right:1rem;
  vertical-align:-.3rem;
  }
  .MenuList nav ul li{
  font-size:.85rem;
  }
  .MenuList nav ul li a, .MenuList .igniplexMode{
  line-height:2.5rem;
  }
  .MenuList nav ul li a{
  justify-content:flex-start;
  align-items:center;
  font-weight:400;
  }
  #igniplexHeader .MenuList .igniplexMode label{
  margin-top:7px;
  }
  .MenuList .social{
  background:linear-gradient(to bottom, transparent, #fff, #fff, #fff);
  background:-webkit-linear-gradient(top, transparent, #fff, #fff, #fff);
  position:fixed;
  left:-90rem;
  right:0px;
  bottom:0px;
  max-width:75vw;
  padding-top:30px;
  border-top:0px;
  }
  .igniplexDark .MenuList .social{
  background:linear-gradient(to bottom, transparent, var(--igniplexPostDark), var(--igniplexPostDark), var(--igniplexPostDark));
  background:-webkit-linear-gradient(top, transparent, var(--igniplexPostDark), var(--igniplexPostDark), var(--igniplexPostDark));
  }
  .MenuList .social svg{
  margin-right:0px;
  }
  .MenuList .social a{
  display:block;
  padding:0px;
  line-height:2.5rem;
  border-bottom-width:.3rem;
  }
  .MenuList ul > li > a, .MenuList ul > li > ul > li > a, .MenuList ul > li > ul > li > ul > li > a{
  color:var(--igniplexTextLight);
  line-height:3.25rem;
  }
  .MenuList ul{
  display:block;
  }
  .MenuList > ul li:hover > a{
  background-color:rgba(0,0,0,.05);
  }
  .MenuList ul li a:hover, .igniplexDark .MenuList ul li a:hover, .MenuList ul li.open > a, .igniplexDark .MenuList ul li.open > a{
  color:var(--igniplexMainLight);
  }
  .MenuList ul > li > a, nav a, nav .igniplexMode{
  padding:0rem 2rem;
  }
  .MenuList ul > li.open > a{
  background-color:#fff;
  }
  .MenuList ul li ul, .MenuList ul > li > ul > li > ul, .MenuList ul > li.open > ul > li.open > a{
  background-color:transparent;
  position:relative;
  }
  .MenuList ul li ul:before{
  display:none;
  }
  .MenuList ul > li > ul > li > a{
  padding-left:3.25rem;
  }
  .MenuList ul > li > ul > li > ul:before{
  left:30px;
  }
  .MenuList ul > li > ul > li > ul > li > a{
  padding-left:4.5rem;
  }
  .MenuList ul li a:not(:only-child):after{
  background:url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' fill='%234a5568'/%3E%3C/svg%3E") no-repeat center;
  }
  .igniplexMenu .check:checked ~ .MenuList{
  opacity:1;
  visibility:visible;
  left:0px;
  }
  #igniplexHeader .igniplexMenu .check:checked ~ .cover{
  background-color:rgba(0,0,0,.5);
  opacity:1;
  visibility:visible;
  }
  .igniplexMenu .check:checked ~ .MenuList .social{
  left:0px;
  }
  .igniplexMenu .check:checked ~ .icon .open{
  display:none;
  }
  .igniplexMenu .check:checked ~ .icon .close{
  display:block;
  }
  .igniplexDark .MenuList ul > li > a, .igniplexDark .MenuList ul > li > ul > li > ul > li > a{
  color:var(--igniplexTextDark);
  }
  .igniplexDark .MenuList, .igniplexDark .MenuList ul > li.open > a{
  background-color:var(--igniplexPostDark);
  }
  .igniplexDark .MenuList ul li a:not(:only-child):after{
  background:url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' fill='%23fff'/%3E%3C/svg%3E") no-repeat center;
  }
}
@media screen and (max-width:768px){
  #igniplexSlider .PopularPosts .inner{
  grid-template-columns:1fr 1fr;
  grid-template-rows:auto auto auto;
  }
  #igniplexSlider .PopularPosts .post:nth-child(2), #igniplexSlider .PopularPosts .post:nth-child(3){
  margin:0px;
  }
  #igniplexSlider .PopularPosts .post:first-child{
  grid-area:1 / 1 / 2 / 3;
  }
  #igniplexSlider .PopularPosts .post:not(:first-child) .post-title{
  -webkit-line-clamp:3;
  }
  #igniel{
  display:block;
  }
  .isPost #igniel{
  width:auto;
  max-width:100%;
  display:block;
  float:none;
  }
  #main{
  float:none;
  width:100%;
  }
  .isPost .sidebar{
  width:auto;
  float:none;
  margin-left:0px;
  }
  #middlebar{
  float:none;
  position:static;
  }
  #middlebar .title{
  margin-left:0px;
  }
  #middlebar .widget-content{
  width:auto;
  margin-left:0px;
  margin-bottom:30px;
  }
  #middlebar ul{
  grid-template-columns:repeat(2, 1fr);
  }
  .isSingle .igniplexTitle .entry-title, .post-filter-message .inner .title{
  font-size:2.5rem;
  line-height:3.5rem;
  }
  .isSingle main{
  margin-top:290px;
  }
  .sidebar #HTML2, .sidebar #HTML2 .widget-content{
  text-align:center;
  }
  #sidebarSticky{
  position:static;
  }
  .totop{
  width:30px;
  height:30px;
  bottom:100px;
  right:20px;
  background-size:20px;
  }
  .totop.show{
  bottom:70px;
  }
}
@media screen and (max-width:640px){
  .igniplexMenu{
  margin-left:10px;
  }
  .header-right{
  margin-right:10px;
  }
  .igniplexSearch .search .check:checked ~ .input, .igniplexSearch .search .input:focus{
  width:calc(100vw - 27px);
  }
  #igniplexHeader .header-inner .widget h1, #igniplexHeader .header-inner .widget h2{
  overflow:hidden;
  text-overflow:ellipsis;
  line-height:normal;
  }
  #igniplexHeader .header-inner #header, .igniplexMenu{
  max-width:100%;
  vertical-align:middle;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
  }
  #igniplexSlider .PopularPosts .post:first-child .post-title{
  display:-webkit-box;
  -webkit-line-clamp:5;
  -webkit-box-orient:vertical;
  overflow:hidden;
  }
  #igniplexSlider .PopularPosts .post-title{
  font-size:15px;
  }
  #middlebar ul{
  grid-gap:15px;
  }
  .FeaturedPost .snippet-thumbnail{
  border-radius:7px 7px 0px 0px;
  }
  .FeaturedPost .snippet-thumbnail img{
  max-width:100%;
  width:100%;
  }
  .FeaturedPost .post-title{
  margin:10px 15px 10px;
  }
  .FeaturedPost .post-snippet{
  margin:0px 15px 15px;
  font-size:12px;
  }
  .isSingle .igniplexTitle .inner, .post-filter-message .inner{
  padding:30px 20px 100px;
  }
  .isSingle .igniplexTitle .entry-title, .post-filter-message .inner .title{
  font-size:2rem;
  line-height:3rem;
  }
  .isSingle main{
  margin-top:260px;
  }
  .blog-posts{
  grid-gap:15px;
  }
  .blog-pager.stream{
  display:block;
  width:100%;
  margin-top:20px;
  }
  .blog-pager.stream .left, .blog-pager.stream .home-link, .blog-pager.stream .right, .blog-pager.stream .old-link{
  display:block;
  text-align:center;
  width:100%;
  }
  .blog-pager.stream .left, .blog-pager.stream .home-link{
  margin-right:0px;
  }
  .blog-pager.stream .right, .blog-pager.stream .old-link{
  margin-left:0px;
  margin-top:20px;
  }
  .post-body .igniplexTengah{
  margin-left:-10px;
  }
  .igniplexRelatedMiddle ul{
  grid-template-columns:1fr;
  grid-gap:15px;
  }
  .igniplexRelated ul{
  grid-gap:15px;
  grid-template-columns:repeat(2, 1fr);
  }
  footer .footer-inner{
  grid-template-columns:1fr;
  }
  footer .section:last-child .widget-content{
  margin-bottom:20px;
  }
  footer .attribution{
  padding:0px 10px 10px;
  }
  #igniplex404{
  font-size:2.5rem;
  line-height:3rem;
  }
  #igniplex404 .icon{
  font-size:13rem;
  }
  #igniplex404 svg{
  width:13rem;
  height:13rem;
  }
  #igniplex404 .home{
  font-size:1.15rem;
  }
  #igniplex404 .home a{
  padding:5px 17px;
  }
}
@media screen and (max-width:480px){
  blockquote{
  padding:20px 30px 15px 30px;
  }
  blockquote:before{
  width:35px;
  height:35px;
  background-size:25px;
  }
  .owl-dots .owl-dot span{
  width:5px;
  height:5px;
  }
  .owl-dots .owl-dot.active span{
  width:16px;
  height:8px;
  }
  .FeaturedPost .post-snippet{
  display:-webkit-box;
  -webkit-line-clamp:3;
  -webkit-box-orient:vertical;
  }
  .isSingle .igniplexTitle, .post-filter-message{
  background-image:linear-gradient(110deg,transparent 65%,rgba(255,255,255,0.1) 65%,rgba(255,255,255,0.1) 75%,rgba(255,255,255,0.2) 0%,rgba(255,255,255,0.2))
  }
  igniplexMenu{
  margin-right:5px;
  }     
  .NavMenu .social svg{
  width:17px;
  height:17px;
  vertical-align:-5px;
  }
  .NavMenu .social a.ytube svg{
  width:20px;
  height:20px;
  }
  #igniplexSlider .PopularPosts .widget-content{
  padding:10px;
  }
  #igniplexSlider .PopularPosts .inner{
  grid-gap:7px;
  }
  #igniplexSlider .PopularPosts .post:not(:first-child) .container{
  padding:7px 10px;
  }
  #igniplexSlider .PopularPosts .post:first-child .post-title{
  font-size:1.35rem;
  line-height:2rem;
  }
  #igniplexSlider .PopularPosts .post:not(:first-child) .post-title{
  left:10px;
  right:10px;
  bottom:7px;
  }
  #igniplexSlider .PopularPosts .post:first-child .post-labels{
  margin-bottom:7px;
  }
  #igniplexSlider.owl .PopularPosts .post-labels{
  display:inline-block !important;
  }
  .breadcrumb a:not(:last-child):after{
  width:11px;
  height:11px;
  }
  .isSingle .igniplexTitle, .post-filter-message{
  margin-bottom:20px;
  }
  .isSingle .igniplexTitle .inner, .post-filter-message .inner{
  padding:30px 20px 70px;
  }
  .isSingle .igniplexTitle .entry-title, .post-filter-message .inner .title{
  font-size:1.75rem;
  line-height:2.5rem;
  }
  .igniplexWave{
  height:40px;
  }
  main{
  padding:10px;
  }
  #main .widget{
  margin-bottom:20px;
  }
  #main .widget.FeaturedPost{
  margin-bottom:15px;
  }
  .isSingle main{
  margin:170px 0px 0px;
  padding:0px;
  }
  body[data-grid-mobile="true"] .blog-posts{
  grid-gap:15px;
  }
  body[data-grid-mobile="true"] .post-title.entry-title, #middlebar .text, .igniplexRelated .text{
  font-size:1rem;
  margin-bottom:0px;
  line-height:1.5rem;
  }
  body[data-grid-mobile="false"] .blog-posts{
  grid-gap:20px;
  grid-template-columns:1fr;
  }
  body[data-grid-mobile="false"] .post-title.entry-title{
  font-size:1.25rem;
  }
  body[data-grid-mobile="false"] .post-footer-bottom .inner{
  font-size:1rem;
  }
  body[data-grid-mobile="false"] .post-snippet{
  display:block;
  }
  .isPost #HTML1 .widget-content{
  margin-bottom:0px;
  }
  #main .widget-content{
  padding:15px;
  }
  #main .widget.HTML{
  margin:0px 10px 30px;
  }
  .isSingle .post-outer .post{
  background:linear-gradient(to bottom, var(--igniplexBodyLight) 0%, var(--igniplexPostLight) 15%);
  background:-webkit-linear-gradient(top, var(--igniplexBodyLight) 0%, var(--igniplexPostLight) 15%);
  padding:15px;
  border:0px;
  border-radius:0px;
  transition:all .2s ease;
  }
  .igniplexAuthor, .isPost .igniplexRelated, .isSingle #comments, .isPost .sidebar{
  width:auto;
  margin:30px 10px 0px;
  }
  #comments .comment-thread ol > li{
  margin-bottom:10px;
  }
  #comments .comments-content .icon.blog-author{
  width:12px;
  height:12px;
  }
  .igniplexAuthor .avatar{
  width:70px;
  height:70px;
  min-width:70px;
  min-height:70px;
  margin-right:15px;
  }
  .igniplexAuthor .avatar:before{
  width:70px;
  height:70px;
  }
  .igniplexAuthor img{
  width:65px;
  height:65px;
  }
  #igniplex404{
  font-size:2rem;
  line-height:2.5rem;
  }
  #igniplex404 .icon{
  font-size:10rem;
  }
  #igniplex404 svg{
  width:10rem;
  height:10rem;
  }
  #igniplex404 .home{
  font-size:1rem;
  }
  .igniplexDark.isSingle .post-outer .post{
  background:linear-gradient(to bottom, var(--igniplexBodyDark) 0%, var(--igniplexPostDark) 15%);
  background:-webkit-linear-gradient(top, var(--igniplexBodyDark) 0%, var(--igniplexPostDark) 15%);
  }
  footer .footer-inner{
  padding:0px 10px;
  }
  .post-info.updt > span{
  display:block;
  }
  .post-info.updt .post-comments:before{
  display:none;
  }
}
@media screen and (max-width:360px){
  html, body{
  font-size:13px;
  line-height:1.65rem;
  }
  #igniplexHeader #header, .igniplexMenu{
  max-width:calc(100% - 180px);
  }
  #igniplexSlider .PopularPosts .post:first-child .post-title{
  font-size:1.25rem;
  line-height:1.75rem;
  }
  body[data-grid-mobile="true"] .blog-posts, #middlebar ul, .igniplexRelated ul{
  grid-gap:10px;
  }
  .igniplexAuthor, .isPost .igniplexRelated, .isSingle #comments, .isPost .sidebar{
  margin:20px 10px 0px;
  }
  #main .FeaturedPost{
  margin-bottom:10px;
  }
  body[data-grid-mobile="false"] .post-title.entry-title{
  font-size:1.25rem;
  }
  .isSingle .igniplexTitle .inner, .post-filter-message .inner{
  padding:20px 20px 50px;
  }
  .isSingle .post-body{
  font-size:16px;
  }
  .igniplexWave{
  height:30px;
  }
  .isSingle main{
  margin-top:160px;
  }
  .igniplexAuthor .avatar{
  width:54px;
  height:54px;
  min-width:54px;
  min-height:54px;
  }
  .igniplexAuthor .avatar:before{
  width:54px;
  height:54px;
  }
  .igniplexAuthor img{
  width:50px;
  height:50px;
  }
}
@media screen and (max-width:320px){
  .blog-posts{
  grid-gap:15px !important;
  grid-template-columns:1fr;
  }
  body[data-grid-mobile="true"] .post-snippet{
  display:block;
  }
  .post-title.entry-title, #middlebar .text, .igniplexRelated .text{
  font-size:1.15rem !important;
  line-height:1.75rem !important;
  }
  .post-footer-bottom .inner{
  font-size:1rem !important;
  padding:10px 15px 13px !important;
  }
  #middlebar ul{
  grid-template-columns:repeat(1, 1fr);
  grid-gap:15px;
  }
  .igniplexRelated ul{
  grid-template-columns:repeat(1, 1fr);
  grid-gap:20px;
  }
  #igniplex404{
  font-size:1.5rem;
  line-height:2rem;
  }
  #igniplex404 .icon{
  font-size:9rem;
  }
  #igniplex404 svg{
  width:9rem;
  height:9rem;
  }
  #igniplex404 .home{
  font-size:.85rem;
  }
  #igniplex404 .home a{
  padding:4px 13px;
  }
  .igniplexAuthor{
  display:block;
  text-align:center;
  }
  .igniplexAuthor .avatar{
  width:100%;
  flex-grow:1;
  margin-right:0px;
  margin-bottom:10px;
  }
  .igniplexAuthor img{
  margin:auto;
  }
  .igniplexAuthor .author-name:after{
  width:12px;
  height:12px;
  vertical-align:-1px;
  }
}
]]></b:skin>
<b:if cond='data:view.isLayoutMode'>
  <b:template-skin>
    <![CDATA[
    body#layout .hidden,
    body#layout .invisible {
      display: inherit;
    }
    body#layout .navigation {
      display: none;
    }
    body#layout .header-inner {
      display: block;
      height: auto;
    }
    body#layout ul li {
      list-style-type: none;
    }
    body#layout{
      background-color: #fff;
      border: 1px solid #009688;
      padding: 87px 10px 10px;
    }
    body#layout #igniplexHeader:before {
      content: 'IGNIPLEX v2.6';
      position: absolute;
      top: 20px;
      right: 10px;
      border: 3px solid #009688;
      font: normal 400 28px Arial, sans-serif;
      color: #009688;
      padding: 10px;
      width: 250px;
      height: 30px;
      border-radius: 50px;
      letter-spacing: 2px;
    }
    body#layout #header #Header1 {
      float: left;
      width: 50%;
      margin-right: 8px;
      z-index: 2;
    }
    body#layout #header #HTML404 .widget-content {
      background-color: #03A9F4;
      color: #fff;
    }
    body#layout #license {
      background-color: #009688;
    }
    body#layout #license h4 {
      color:#fff;
      font-size:2em;
      letter-spacing:2px;
      margin-left:0px;
      text-align:center;
    }
    body#layout #license h4:before{
      content: '';
      display: inline-block;
      width: 25px;
      height: 25px;
      vertical-align: bottom;
      margin-right: 5px;
      background:url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z' fill='%23fff'/%3E%3C/svg%3E") center no-repeat;
    }
    body#layout #license #HTML303 .widget-content {
      background-color: #fff27e;
      color: #333;
      padding-left:0px;
      text-decoration:underline;
    }
    body#layout #header #HTML404 .widget-content .editlink.icon, body#layout #header #HTML404 .widget-content .layout-widget-state, body#layout #license #HTML303 .widget-content .editlink.icon, body#layout #license #HTML303 .widget-content .layout-widget-state {
      background-color: #fff;
      border-radius: 100px;
      padding: 3px;
      background-size:20px 20px;
    }
    body#layout #header #HTML404 .widget-content .layout-title:after {
      content: 'Template features set here.';
      opacity: 1;
      visibility: visible;
      display: block;
      font-size: 12px;
      white-space: nowrap;
      text-decoration: underline;
    }
    body#layout #license #HTML303 .widget-content .layout-title:after {
      content: '(Enter license here)';
      display: inline-block;
      font-size: 12px;
      margin-left: 10px;
    }
    body#layout #header #HTML404 .widget-content .layout-widget-description, body#layout #header #HTML404 .widget-content .layout-widget-state, body#layout #license #HTML303 .widget-content .layout-widget-description, body#layout #license #HTML303 .widget-content .layout-widget-state {
      display: none;
    }
    body#layout #HTML1 .widget-content, body#layout #HTML2 .widget-content, body#layout #HTML3 .widget-content, body#layout #HTML4 .widget-content {
      background-color: rgba(244, 67, 54, .25);
    }
    body#layout .igniplexMenu, body#layout .igniplexNavigation {
      display: block;
      position: relative;
      height: 50px;
      background-color:#ccc;
      margin: 6px;
      border: 1px solid #bbb;
      border-radius: 25px;
    }
    body#layout .igniplexNavigation {
      position: static;
    }
    body#layout .igniplexMenu:before, body#layout .igniplexNavigation:before {
      font: normal 400 20px Arial, sans-serif;
      color: #444;
      position: relative;
      top: 13px;
      bottom: 0px;
      left: 0px;
      right: 0px;
    }
    body#layout .igniplexMenu:before {
      content: "Menu Must Be Changed in HTML. Search <div class='MenuList'>";
    }
    body#layout .igniplexNavigation:before {
      content: "Navigation and Social Media Should Be Changed in HTML. Search <div class='NavMenu'>";
      margin-top: 13px;
    }
    body#layout div#igniplex {
      display: inline-block;
      width: 100%;
      text-align: left;
    }
    body#layout #igniel{
      float: left;
      width: 70%;
    }
    body#layout #main {
      float: left;
      margin-bottom: 20px;
      width: 55%;
    }
    body#layout #middlebar {
      float: right;
      width: 29%;
    }
    body#layout .sidebar {
      float: right;
      width: 24%;
    }
    body#layout footer .footer-inner {
      display: block;
      padding: 0px;
    }
    body#layout footer .footer-inner .section {
      width:27.9%;
      float:left;
    }
    ]]>
  </b:template-skin>
</b:if>

    <b:defaultmarkups>
      <b:defaultmarkup type='Common'>
        <b:includable id='igniplexBreadcrumb' var='posts'>
          <b:loop values='data:posts' var='post'>
            <div class='breadcrumb' itemscope='itemscope' itemtype='https://schema.org/BreadcrumbList'>
              <span itemprop='itemListElement' itemscope='itemscope' itemtype='https://schema.org/ListItem'>
                <a expr:href='data:blog.homepageUrl.canonical' itemprop='item' title='Home'>
                <meta content='1' itemprop='position'/>
                <span itemprop='name'>Home</span></a>
              </span>
              <b:if cond='data:post.labels'>
                <b:loop index='num' values='data:post.labels' var='label'> &amp;nbsp;&#8250;&amp;nbsp;
                  <span itemprop='itemListElement' itemscope='itemscope' itemtype='https://schema.org/ListItem'>
                    <meta expr:content='data:num+2' itemprop='position'/>
                    <a expr:href='data:label.url.canonical' expr:title='data:label.name' itemprop='item'>
                      <span itemprop='name'><data:label.name/></span>
                    </a>
                  </span>
                </b:loop>
                <b:else/>
                &amp;nbsp;&#8250;&amp;nbsp; Uncategorized
              </b:if>
            </div>
          </b:loop>
        </b:includable>
        <b:includable cond='data:view.isError' id='igniplex404'>
          <div id='igniplex404'>
            <div class='icon'>4<svg viewBox='0 0 24 24'><path d='M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M16.18,7.76L15.12,8.82L14.06,7.76L13,8.82L14.06,9.88L13,10.94L14.06,12L15.12,10.94L16.18,12L17.24,10.94L16.18,9.88L17.24,8.82L16.18,7.76M7.82,12L8.88,10.94L9.94,12L11,10.94L9.94,9.88L11,8.82L9.94,7.76L8.88,8.82L7.82,7.76L6.76,8.82L7.82,9.88L6.76,10.94L7.82,12M12,14C9.67,14 7.69,15.46 6.89,17.5H17.11C16.31,15.46 14.33,14 12,14Z'/></svg>4</div>
            <div class='text'>PAGE NOT FOUND</div>
            <div class='home'><a expr:href='data:blog.homepageUrl' expr:title='data:blog.title'>Back To Homepage</a></div>
          </div>
        </b:includable>
        <b:includable id='igniplexLoading'>
          <div class='igniplexLoading'>
            <div class='ignielRipple'><div/><div/></div>
          </div>
        </b:includable>
        <b:includable id='igniplexShare'>
          <div class='igniplexShare'>
            <b:if cond='data:blog.isMobileRequest'>
              <a class='whatsapp' expr:href='&quot;https://wa.me/?text=&quot; + data:post.title + &quot; - &quot; + data:post.url.canonical' onclick='window.open(this.href,&quot;   sharer&quot;   ,&quot;   toolbar=0,status=0,width=626,height=436&quot;   );   return false;' rel='nofollow' title='Share to WhatsApp'><svg viewBox='0 0 24 24'><path d='M16.75,13.96C17,14.09 17.16,14.16 17.21,14.26C17.27,14.37 17.25,14.87 17,15.44C16.8,16 15.76,16.54 15.3,16.56C14.84,16.58 14.83,16.92 12.34,15.83C9.85,14.74 8.35,12.08 8.23,11.91C8.11,11.74 7.27,10.53 7.31,9.3C7.36,8.08 8,7.5 8.26,7.26C8.5,7 8.77,6.97 8.94,7H9.41C9.56,7 9.77,6.94 9.96,7.45L10.65,9.32C10.71,9.45 10.75,9.6 10.66,9.76L10.39,10.17L10,10.59C9.88,10.71 9.74,10.84 9.88,11.09C10,11.35 10.5,12.18 11.2,12.87C12.11,13.75 12.91,14.04 13.15,14.17C13.39,14.31 13.54,14.29 13.69,14.13L14.5,13.19C14.69,12.94 14.85,13 15.08,13.08L16.75,13.96M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C10.03,22 8.2,21.43 6.65,20.45L2,22L3.55,17.35C2.57,15.8 2,13.97 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12C4,13.72 4.54,15.31 5.46,16.61L4.5,19.5L7.39,18.54C8.69,19.46 10.28,20 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z'/></svg></a>
              <a class='telegram' expr:href='&quot;https://t.me/share/url?url=&quot; + data:post.url.canonical + &quot;&amp;text=&quot; + data:post.title' onclick='window.open(this.href,&quot;   sharer&quot;   ,&quot;   toolbar=0,status=0,width=626,height=436&quot;   );   return false;' rel='nofollow' title='Share to Telegram'><svg viewBox='0 0 24 24'><path d='M9.78,18.65L10.06,14.42L17.74,7.5C18.08,7.19 17.67,7.04 17.22,7.31L7.74,13.3L3.64,12C2.76,11.75 2.75,11.14 3.84,10.7L19.81,4.54C20.54,4.21 21.24,4.72 20.96,5.84L18.24,18.65C18.05,19.56 17.5,19.78 16.74,19.36L12.6,16.3L10.61,18.23C10.38,18.46 10.19,18.65 9.78,18.65Z'/></svg></a>
              <a class='messenger' expr:href='&quot;fb-messenger://share?link=&quot; + data:post.title + &quot; - &quot; + data:post.url.canonical' rel='nofollow' title='Share to Messenger'><svg viewBox='0 0 24 24'><path d='M12,2C6.5,2 2,6.14 2,11.25C2,14.13 3.42,16.7 5.65,18.4L5.71,22L9.16,20.12L9.13,20.11C10.04,20.36 11,20.5 12,20.5C17.5,20.5 22,16.36 22,11.25C22,6.14 17.5,2 12,2M13.03,14.41L10.54,11.78L5.5,14.41L10.88,8.78L13.46,11.25L18.31,8.78L13.03,14.41Z'/></svg></a>
            </b:if>
            <a class='facebook' expr:href='&quot;https://www.facebook.com/sharer.php?u=&quot; + data:post.url.canonical' onclick='window.open(this.href,&quot;sharer&quot;,&quot; toolbar=0,status=0,width=626,height=436&quot;);return false;' rel='nofollow' title='Share to Facebook'><svg viewBox='0 0 24 24'><path d='M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z'/></svg></a>
            <a class='twitter' expr:href='&quot;https://twitter.com/share?url=&quot; + data:post.url.canonical + &quot;&amp;text=&quot; + data:post.title' onclick='window.open(this.href,&quot;   sharer&quot;   ,&quot;   toolbar=0,status=0,width=626,height=436&quot;   );   return false;' rel='nofollow' title='Share to Twitter'><svg viewBox='0 0 24 24'><path d='M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z'/></svg></a>
            <a class='pinterest' data-pin-config='beside' expr:href='&quot;https://pinterest.com/pin/create/button/?url=&quot; + data:post.url.canonical + &quot;&amp;media=&quot; + data:post.featuredImage + &quot;&amp;description=&quot; + data:post.title' onclick='window.open(this.href,&quot;   sharer&quot;   ,&quot;   toolbar=0,status=0,width=626,height=500&quot;   );   return false;' rel='nofollow' title='Share to Pinterest'><svg viewBox='0 0 24 24'><path d='M9.04,21.54C10,21.83 10.97,22 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2A10,10 0 0,0 2,12C2,16.25 4.67,19.9 8.44,21.34C8.35,20.56 8.26,19.27 8.44,18.38L9.59,13.44C9.59,13.44 9.3,12.86 9.3,11.94C9.3,10.56 10.16,9.53 11.14,9.53C12,9.53 12.4,10.16 12.4,10.97C12.4,11.83 11.83,13.06 11.54,14.24C11.37,15.22 12.06,16.08 13.06,16.08C14.84,16.08 16.22,14.18 16.22,11.5C16.22,9.1 14.5,7.46 12.03,7.46C9.21,7.46 7.55,9.56 7.55,11.77C7.55,12.63 7.83,13.5 8.29,14.07C8.38,14.13 8.38,14.21 8.35,14.36L8.06,15.45C8.06,15.62 7.95,15.68 7.78,15.56C6.5,15 5.76,13.18 5.76,11.71C5.76,8.55 8,5.68 12.32,5.68C15.76,5.68 18.44,8.15 18.44,11.43C18.44,14.87 16.31,17.63 13.26,17.63C12.29,17.63 11.34,17.11 11,16.5L10.33,18.87C10.1,19.73 9.47,20.88 9.04,21.57V21.54Z'/></svg></a>
            <a class='linkedin' expr:href='&quot;https://www.linkedin.com/sharing/share-offsite/?url=&quot; + data:post.url.canonical + &quot;&amp;title=&quot; + data:post.title' onclick='window.open(this.href,&quot;   sharer&quot;   ,&quot;toolbar=0,status=0,width=626,height=500&quot;);   return false;' rel='nofollow' title='Share to Linkedin'><svg viewBox='0 0 24 24'><path d='M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z'/></svg></a>
            <a class='tumblr' data-notes='right' expr:href='&quot;https://www.tumblr.com/share/link?url=&quot; + data:post.url.canonical' onclick='window.open(this.href,&quot;   sharer&quot;   ,&quot;toolbar=0,status=0,width=626,height=500&quot;);   return false;' rel='nofollow' title='Share to Tumblr'><svg viewBox='0 0 24 24'><path d='M17,11H13V15.5C13,16.44 13.28,17 14.5,17H17V21C17,21 15.54,21.05 14.17,21.05C10.8,21.05 9.5,19 9.5,16.75V11H7V7C10.07,6.74 10.27,4.5 10.5,3H13V7H17'/></svg></a>
          </div>
        </b:includable>
        <b:includable id='igniplexAuthor' var='post'>
          <b:if cond='data:post.author.aboutMe and data:view.isPost'>
            <div class='igniplexAuthor'>
              <div class='avatar'>
                <img class='lazy' expr:alt='data:post.author.name' expr:data-src='resizeImage(data:post.author.authorPhoto.image,100,&quot;1:1&quot;)' expr:height='data:post.author.authorPhoto.height' expr:title='data:post.author.name' expr:width='data:post.author.authorPhoto.width' src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='/>
              </div>
              <div class='bottom'>
                <div class='author-name'>
                  <a expr:href='data:post.author.profileUrl' expr:title='data:post.author.name' rel='author'>
                    <data:post.author.name/>
                  </a>
                </div>
                <div class='author-desc'>
                  <data:post.author.aboutMe/>
                </div>
              </div>
            </div>
          </b:if>
        </b:includable>
        <b:includable id='igniplexRelated'>
          <div class='igniplexRelated'>
            <h3 class='title'>Related Posts</h3>
            <div style='opacity:0;font-size:1px;'><p><a href='#'>SEO</a> - <a href='#'>Tech</a> - <a href='/search/label/Tools'>SEO Tools</a></p></div>
            <ul><b:include name='igniplexLoading'/></ul>
          </div>
        </b:includable>
        <b:includable id='igniplexJSON' var='post'>
          <script type='application/ld+json'>
          {
            &quot;@context&quot;: &quot;http://schema.org&quot;,
            &quot;@type&quot;: &quot;BlogPosting&quot;,
            &quot;mainEntityOfPage&quot;: {
              &quot;@type&quot;: &quot;WebPage&quot;,
              &quot;@id&quot;: &quot;<data:post.url.canonical/>&quot;
            },
            &quot;headline&quot;: &quot;<data:post.title.jsonEscaped/>&quot;,
            &quot;description&quot;: &quot;<b:if cond='data:view.isSingleItem'><b:if cond='data:blog.metaDescription'><b:eval expr='data:blog.metaDescription'/><b:else/><b:eval expr='(data:post.body snippet { length: 150, links: false, linebreaks: false, ellipsis: true }).jsonEscaped'/></b:if><b:else/><b:eval expr='(data:post.body snippet { length: 150, links: false, linebreaks: false, ellipsis: true }).jsonEscaped'/></b:if>&quot;,
            <b:if cond='data:view.isSingleItem'>&quot;articleBody&quot;: &quot;<b:eval expr='(data:post.body snippet { length: 500, links: false, linebreaks: false, ellipsis: true }).jsonEscaped'/>&quot;,</b:if>
            &quot;datePublished&quot;: &quot;<data:post.date.iso8601.jsonEscaped/>&quot;,
            &quot;dateModified&quot;: &quot;<data:post.lastUpdated.iso8601.jsonEscaped/>&quot;,
            &quot;image&quot;: {
              &quot;@type&quot;: &quot;ImageObject&quot;,
              &quot;url&quot;: &quot;<b:eval expr='(data:post.featuredImage ? resizeImage(data:post.featuredImage, 1200, &quot;1200:630&quot;) : &quot;https://lh3.googleusercontent.com/ULB6iBuCeTVvSjjjU1A-O8e9ZpVba6uvyhtiWRti_rBAs9yMYOFBujxriJRZ-A=w1200&quot;)'/>&quot;,
              &quot;height&quot;: <b:eval expr='data:post.featuredImage ? 630 : 348'/>,
              &quot;width&quot;: 1200
            },
            &quot;publisher&quot;: {
              &quot;@type&quot;: &quot;Organization&quot;,
              &quot;name&quot;: &quot;Blogger&quot;,
              &quot;logo&quot;: {
                &quot;@type&quot;: &quot;ImageObject&quot;,
                &quot;url&quot;: &quot;https://lh3.googleusercontent.com/ULB6iBuCeTVvSjjjU1A-O8e9ZpVba6uvyhtiWRti_rBAs9yMYOFBujxriJRZ-A=h60&quot;,
                &quot;width&quot;: 206,
                &quot;height&quot;: 60
              }
            },&quot;author&quot;: {
              &quot;@type&quot;: &quot;Person&quot;,
              &quot;name&quot;: &quot;<data:post.author.name.jsonEscaped/>&quot;
            }
          }
          </script>
        </b:includable>
        <b:includable id='igniplexDark'>
          <svg viewBox='0 0 24 24'><path d='M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z'/></svg>Dark Mode
          <label class='igniplexSwitch'>
            <input aria-label='Color Mode' class='check' type='checkbox'/>

            <span class='slider'/>
          </label>
        </b:includable>
        <b:includable id='igniplexScript'>
          <script> //<![CDATA[
function otherScript() {
  //-----START -----//

  //-----STOP -----//
}
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('S a=["\\f\\g\\k\\e\\j\\j","\\f\\g\\k\\e\\j\\j\\Q\\e\\m","\\l\\e\\g\\x\\p\\b\\d\\c\\v\\j\\b\\p\\b\\d\\c","\\o\\e\\l\\w","\\f\\g\\k\\n\\m\\c","\\J\\c\\c\\m\\f\\1j\\A\\A\\g\\e\\d\\d\\b\\g\\c\\t\\r\\h\\g\\b\\o\\e\\e\\N\\t\\d\\b\\c\\A\\b\\d\\R\\1i\\1g\\A\\r\\o\\b\\F\\b\\d\\c\\f\\t\\1e\\f","\\r\\o\\K","\\g\\h\\j\\j\\1f\\b\\c\\J\\e\\l","\\h\\m\\m\\j\\w","\\m\\x\\f\\J","\\K\\x\\b\\x\\b","\\R\\r\\o\\K","\\j\\e\\h\\l\\b\\l","\\F\\b\\k\\f\\n\\e\\d","\\D\\t\\E","\\g\\k\\b\\h\\c\\b\\v\\j\\b\\p\\b\\d\\c","\\h\\f\\w\\d\\g","\\f\\k\\g","\\B\\b\\c\\v\\j\\b\\p\\b\\d\\c\\f\\U\\w\\Q\\h\\B\\Y\\h\\p\\b","\\n\\d\\f\\b\\k\\c\\U\\b\\r\\e\\k\\b","\\m\\h\\k\\b\\d\\c\\Y\\e\\l\\b","\\n\\d\\n\\c","\\1h\\E\\X\\D\\G\\D\\O\\O\\E\\G\\1a\\1c\\G\\X\\1b\\1a","\\c\\k\\h\\g\\N","\\1t\\h\\B\\b\\1s\\n\\b\\1r","\\h\\l\\l\\v\\F\\b\\d\\c\\1k\\n\\f\\c\\b\\d\\b\\k"];S u=Z;P[a[1p]](a[0],y(){(0!=C[a[2]][a[1]]&&Z===u||0!=C[a[3]][a[1]]&&!1===u)&&(!y(){!y(q,H,I,L,i,s,z){W(q[a[6]]){1m};i=q[a[6]]=y(){i[a[7]]?i[a[7]][a[8]](i,V):i[a[10]][a[9]](V)};W(!q[a[11]]){q[a[11]]=i};i[a[9]]=i;i[a[12]]=!0;i[a[13]]=a[14];i[a[10]]=[];s=H[a[15]](I);s[a[16]]=!0;s[a[17]]=L;z=H[a[18]](I)[0];z[a[1l]][a[19]](s,z)}(P,C,a[4],a[5]);T(a[1o],a[1q]);T(a[1n],a[1d])}(),u=M)},M)',62,92,'||||||||||_0x9169|x65|x74|x6E|x6F|x73|x63|x61|_0x4917x6|x6C|x72|x64|x70|x69|x62|x6D|_0x4917x2|x66|_0x4917x7|x2E|defer|x45|x79|x75|function|_0x4917x8|x2F|x67|document|x32|x30|x76|x33|_0x4917x3|_0x4917x4|x68|x71|_0x4917x5|true|x6B|x37|window|x54|x5F|var|fbq|x42|arguments|if|x36|x4E|false|||||||||||x38|x39|x34|24|x6A|x4D|x53|x31|x55|x3A|x4C|20|return|23|21|25|22|x77|x56|x50'.split('|'),0,{}));
    
eval(function(p,a,c,k,e,d){e=function(c){return c};if(!''.replace(/^/,String)){while(c--){d[c]=k[c]||c}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('431 343=["\\345\\353\\349\\345\\356\\348\\344\\364\\461\\347\\354\\387","\\353\\344\\346\\432\\346\\344\\359","\\384","\\355\\361\\344\\355\\387\\344\\352","\\351\\344\\346\\371\\346\\346\\354\\345\\378\\360\\346\\344","\\358\\345\\353\\349\\345\\356\\348\\344\\364\\390\\382\\345\\346\\355\\361\\357\\358\\355\\361\\344\\355\\387","\\465\\360\\344\\354\\375\\390\\344\\348\\344\\355\\346\\350\\354","\\354\\344\\359\\350\\373\\344\\371\\346\\346\\354\\345\\378\\360\\346\\344","\\358","\\351\\356\\348\\345\\346","\\361\\350\\351\\346\\349\\347\\359\\344","\\348\\350\\355\\347\\346\\345\\350\\349","\\351\\361\\345\\381\\346","\\411\\350\\345\\349","\\378\\348\\350\\353\\353\\344\\354\\358\\355\\350\\359","\\353\\350\\350\\353\\348\\344\\358\\355\\350\\359","\\353\\350\\350\\353\\348\\344\\360\\351\\344\\354\\355\\350\\349\\346\\344\\349\\346\\358\\355\\350\\359","\\353\\350\\350\\353\\348\\344\\362\\347\\349\\347\\348\\375\\346\\345\\355\\351\\358\\355\\350\\359","\\346\\361\\345\\349\\387\\382\\345\\346\\361\\353\\350\\350\\353\\348\\344\\358\\355\\350\\359","\\353\\350\\350\\353\\348\\344\\346\\347\\353\\359\\347\\349\\347\\353\\344\\354\\358\\355\\350\\359","\\353\\351\\346\\347\\346\\345\\355\\358\\355\\350\\359","\\353\\350\\350\\353\\348\\344\\347\\356\\345\\351\\358\\355\\350\\359","\\352\\350\\360\\378\\348\\344\\355\\348\\345\\355\\387\\358\\349\\344\\346","\\378\\345\\349\\353\\358\\355\\350\\359","\\375\\347\\361\\350\\350\\358\\355\\350\\359","\\382\\344\\378\\358\\352\\344\\373","\\353\\346\\359\\344\\346\\354\\345\\364\\358\\355\\350\\359","\\356\\345\\349\\353\\352\\350\\359\\358\\355\\350\\359","\\361\\345\\351\\346\\347\\346\\351\\358\\355\\350\\359","\\349\\344\\345\\348\\356\\347\\346\\344\\348\\358\\355\\350\\359","\\391\\345\\353\\349\\345\\356\\348\\344\\364\\390\\348\\345\\352\\344\\354\\357\\345\\359\\353","\\465\\360\\344\\354\\375\\390\\344\\348\\344\\355\\346\\350\\354\\371\\348\\348","\\345\\349\\349\\344\\354\\493\\345\\352\\346\\361","\\355\\348\\345\\344\\349\\346\\493\\345\\352\\346\\361","\\352\\350\\355\\360\\359\\344\\349\\346\\425\\348\\344\\359\\344\\349\\346","\\378\\350\\352\\375","\\353\\344\\346\\413\\345\\359\\344","\\351\\344\\346\\413\\345\\359\\344","\\346\\350\\449\\413\\407\\390\\346\\354\\345\\349\\353","\\356\\347\\354\\351\\344","\\344\\364\\356\\345\\354\\344\\351\\368","\\355\\350\\350\\387\\345\\344","\\438\\345\\353\\349\\368","\\429\\357","\\429\\357\\356\\347\\346\\361\\368\\366","\\368","\\348\\344\\349\\353\\346\\361","\\429","\\356\\350\\356","\\438\\345\\353\\349\\368\\429\\357\\356\\347\\346\\361\\368\\366\\429\\357\\344\\364\\356\\345\\354\\344\\351\\368\\413\\361\\360\\395\\357\\376\\384\\357\\548\\347\\349\\357\\384\\531\\444\\376\\357\\376\\376\\412\\376\\376\\412\\376\\384\\357\\474\\386\\413\\429","\\351\\355\\354\\350\\348\\348\\413\\350\\356","\\351\\361\\350\\382","\\347\\352\\352\\407\\348\\347\\351\\351","\\358\\346\\350\\346\\350\\356","\\354\\344\\359\\350\\373\\344\\407\\348\\347\\351\\351","\\351\\355\\354\\350\\348\\348","\\376","\\347\\349\\345\\359\\347\\346\\344","\\361\\346\\359\\348\\395\\378\\350\\352\\375","\\355\\348\\345\\355\\387","\\353\\344\\346\\539\\360\\348\\348\\501\\344\\347\\354","\\355\\356\\354","\\353\\344\\346\\425\\348\\344\\359\\344\\349\\346\\420\\375\\432\\352","\\345\\349\\349\\344\\354\\423\\413\\386\\410","\\356\\347\\353\\344\\501\\452\\381\\381\\351\\344\\346","\\345\\353\\349\\345\\356\\348\\344\\364\\423\\344\\347\\352\\344\\354","\\350\\381\\381\\351\\344\\346\\423\\344\\345\\353\\361\\346","\\359\\345\\352\\352\\348\\344\\378\\347\\354","\\351\\345\\352\\344\\378\\347\\354\\390\\346\\345\\355\\387\\375","\\346\\350\\356","\\353\\344\\346\\399\\354\\350\\356\\344\\354\\346\\375\\439\\347\\348\\360\\344","\\353\\344\\346\\407\\350\\359\\356\\360\\346\\344\\352\\390\\346\\375\\348\\344","\\350\\349\\351\\355\\354\\350\\348\\348","\\355\\348\\347\\351\\351","\\351\\346\\375\\348\\344","\\356\\364","\\361\\345\\352\\344","\\347\\352\\352","\\355\\348\\347\\351\\351\\410\\345\\351\\346","\\391\\345\\353\\349\\345\\356\\348\\344\\364\\423\\344\\347\\352\\344\\354\\357\\358\\361\\344\\347\\352\\344\\354\\362\\345\\349\\349\\344\\354\\357\\358\\345\\353\\349\\345\\356\\348\\344\\364\\386\\344\\349\\360\\357\\358\\386\\344\\349\\360\\410\\345\\351\\346\\357\\360\\348\\357\\348\\345\\357\\347\\412\\349\\350\\346\\467\\412\\350\\349\\348\\375\\362\\355\\361\\345\\348\\352\\473","\\360\\348","\\349\\344\\364\\346","\\356\\354\\344\\373\\344\\349\\346\\461\\344\\381\\347\\360\\348\\346","\\351\\348\\345\\352\\344\\413\\350\\353\\353\\348\\344","\\350\\356\\344\\349","\\346\\350\\353\\353\\348\\344\\407\\348\\347\\351\\351","\\356\\347\\354\\344\\349\\346","\\412\\355\\361\\344\\355\\387\\344\\352","\\345\\351","\\350\\373\\344\\354\\381\\348\\350\\382","\\361\\345\\352\\352\\344\\349","\\355\\351\\351","\\354\\344\\359\\350\\373\\344\\371\\346\\346\\354","\\355\\361\\347\\349\\353\\344","\\358\\345\\353\\349\\345\\356\\348\\344\\364\\386\\344\\349\\360\\357\\358\\355\\361\\344\\355\\387","\\347\\352\\352\\425\\373\\344\\349\\346\\410\\345\\351\\346\\344\\349\\344\\354","\\354\\344\\351\\345\\462\\344","\\391\\345\\353\\349\\345\\356\\348\\344\\364\\390\\348\\345\\352\\344\\354\\357\\358\\382\\345\\352\\353\\344\\346\\362\\355\\350\\349\\346\\344\\349\\346","\\354\\344\\359\\350\\373\\344","\\391\\345\\353\\349\\345\\356\\348\\344\\364\\390\\348\\345\\352\\344\\354\\357\\358\\345\\353\\349\\345\\356\\348\\344\\364\\410\\350\\347\\352\\345\\349\\353","\\348\\347\\462\\375\\348\\350\\347\\352\\344\\352","\\391\\345\\353\\349\\345\\356\\348\\344\\364\\390\\348\\345\\352\\344\\354\\357\\358\\399\\350\\356\\360\\348\\347\\354\\399\\350\\351\\346\\351\\357\\358\\382\\345\\352\\353\\344\\346\\362\\355\\350\\349\\346\\344\\349\\346","\\532\\528\\352\\347\\346\\347\\362\\351\\354\\355\\533","\\353\\344\\346\\420\\350\\360\\349\\352\\345\\349\\353\\407\\348\\345\\344\\349\\346\\402\\344\\355\\346","\\352\\347\\346\\347\\362\\351\\354\\355","\\361\\347\\351\\371\\346\\346\\354\\345\\378\\360\\346\\344","\\345\\349\\349\\344\\354\\423\\344\\345\\353\\361\\346","\\351\\354\\355","\\353\\344\\346\\371\\346\\346\\354\\345\\378\\360\\346\\344","\\348\\347\\462\\375","\\372\\360\\348\\370","\\344\\349\\346\\354\\375","\\381\\344\\344\\352","\\348\\345\\349\\387","\\347\\348\\346\\344\\354\\349\\347\\346\\344","\\354\\344\\348","\\372\\348\\345\\370\\372\\347\\357\\361\\354\\344\\381\\368","\\567","\\361\\354\\344\\381","\\365\\370","\\478\\346","\\346\\345\\346\\348\\344","\\372\\366\\347\\370\\357\\372\\366\\348\\345\\370","\\372\\366\\360\\348\\370","\\361\\346\\359\\348","\\358\\539\\344\\344\\352\\357\\358\\382\\345\\352\\353\\344\\346\\362\\355\\350\\349\\346\\344\\349\\346","\\352\\347\\346\\347\\362\\349\\360\\359","\\347\\346\\346\\354","\\366\\381\\344\\344\\352\\351\\366\\356\\350\\351\\346\\351\\366\\351\\360\\359\\359\\347\\354\\375\\366\\455\\359\\347\\364\\362\\354\\344\\351\\360\\348\\346\\351\\368","\\415\\347\\348\\346\\368\\411\\351\\350\\349\\362\\345\\349\\362\\351\\355\\354\\345\\356\\346\\415\\355\\347\\348\\348\\378\\347\\355\\387\\368\\354\\407\\358\\347","\\474\\425\\413","\\411\\351\\350\\349\\356","\\347\\411\\347\\364","\\351\\344\\346\\432\\346\\344\\359","\\354\\344\\359\\350\\373\\344\\432\\346\\344\\359","\\467\\359\\347\\364\\362\\382\\345\\352\\346\\361\\412\\357\\531\\436\\376\\356\\364\\473","\\359\\347\\346\\355\\361\\386\\344\\352\\345\\347","\\358\\345\\353\\349\\345\\356\\348\\344\\364\\409\\347\\373\\345\\353\\347\\346\\345\\350\\349\\357\\358\\409\\347\\373\\386\\344\\349\\360","\\358\\345\\353\\349\\345\\356\\348\\344\\364\\409\\347\\373\\345\\353\\347\\346\\345\\350\\349\\357\\358\\409\\347\\373\\386\\344\\349\\360\\357\\358\\361\\344\\347\\352","\\358\\345\\353\\349\\345\\356\\348\\344\\364\\409\\347\\373\\345\\353\\347\\346\\345\\350\\349\\357\\358\\409\\347\\373\\386\\344\\349\\360\\357\\349\\347\\373","\\358\\345\\353\\349\\345\\356\\348\\344\\364\\409\\347\\373\\345\\353\\347\\346\\345\\350\\349\\357\\358\\409\\347\\373\\386\\344\\349\\360\\357\\358\\351\\350\\355\\345\\347\\348","\\358\\386\\344\\349\\360\\410\\345\\351\\346\\357\\358\\361\\344\\347\\352","\\358\\386\\344\\349\\360\\410\\345\\351\\346\\357\\349\\347\\373","\\358\\386\\344\\349\\360\\410\\345\\351\\346\\357\\358\\351\\350\\355\\345\\347\\348","\\352\\344\\346\\347\\355\\361","\\409\\347\\373\\386\\344\\349\\360","\\358\\386\\344\\349\\360\\410\\345\\351\\346","\\355\\348\\350\\349\\344","\\356\\354\\344\\356\\344\\349\\352","\\347\\356\\356\\344\\349\\352","\\358\\386\\344\\349\\360\\410\\345\\351\\346\\357\\370\\357\\360\\348","\\358\\345\\353\\349\\345\\356\\348\\344\\364\\409\\347\\373\\345\\353\\347\\346\\345\\350\\349","\\356\\354\\350\\356","\\391\\345\\353\\349\\345\\356\\348\\344\\364\\386\\344\\349\\360","\\359\\347\\346\\355\\361\\344\\351","\\347\\352\\352\\410\\345\\351\\346\\344\\349\\344\\354","\\347\\352\\351\\378\\375\\353\\350\\350\\353\\348\\344","\\371\\352\\390\\344\\349\\351\\344\\357\\346\\344\\354\\356\\347\\351\\347\\349\\353\\358\\358\\358","\\348\\350\\353","\\351\\355\\354\\345\\356\\346","\\355\\354\\344\\347\\346\\344\\425\\348\\344\\359\\344\\349\\346","\\346\\375\\356\\344","\\346\\344\\364\\346\\366\\411\\347\\373\\347\\351\\355\\354\\345\\356\\346","\\366\\366\\356\\347\\353\\344\\347\\352\\393\\358\\353\\350\\350\\353\\348\\344\\351\\375\\349\\352\\345\\355\\347\\346\\345\\350\\349\\358\\355\\350\\359\\366\\356\\347\\353\\344\\347\\352\\366\\411\\351\\366\\347\\352\\351\\378\\375\\353\\350\\350\\353\\348\\344\\358\\411\\351","\\347\\351\\375\\349\\355","\\356\\347\\387\\347\\345","\\347\\352\\378\\348\\350\\355\\387","\\350\\349\\344\\354\\354\\350\\354","\\352\\345\\373","\\345\\352","\\345\\353\\349\\345\\344\\348\\371\\352\\420\\348\\350\\355\\387","\\372\\352\\345\\373\\357\\355\\348\\347\\351\\351\\368\\365\\345\\351\\345\\371\\352\\351\\365\\370\\372\\351\\373\\353\\357\\373\\345\\344\\382\\420\\350\\364\\368\\365\\376\\357\\376\\357\\393\\424\\357\\393\\424\\365\\370\\372\\356\\347\\346\\361\\357\\352\\368\\365\\386\\384\\428\\395\\384\\428\\423\\384\\384\\439\\444\\423\\384\\428\\386\\384\\428\\395\\384\\444\\423\\384\\384\\439\\384\\436\\423\\384\\428\\386\\384\\393\\395\\393\\371\\384\\376\\395\\384\\376\\357\\376\\357\\376\\395\\376\\357\\393\\395\\384\\393\\371\\384\\376\\395\\384\\376\\357\\376\\357\\376\\395\\376\\357\\384\\393\\395\\393\\393\\371\\384\\376\\395\\384\\376\\357\\376\\357\\376\\395\\376\\357\\393\\393\\395\\384\\393\\371\\384\\376\\395\\384\\376\\357\\376\\357\\376\\395\\376\\357\\384\\393\\395\\393\\555\\365\\370\\372\\366\\356\\347\\346\\361\\370\\372\\366\\351\\373\\353\\370","\\346\\344\\364\\346","\\372\\366\\352\\345\\373\\370","\\347\\356\\356\\344\\349\\352\\407\\361\\345\\348\\352","\\361\\344\\347\\352","\\353\\344\\346\\425\\348\\344\\359\\344\\349\\346\\351\\420\\375\\413\\347\\353\\409\\347\\359\\344","\\413\\345\\352\\347\\387\\357\\347\\352\\347\\357\\371\\352\\390\\344\\349\\351\\344\\358\\358\\358","\\391\\345\\353\\349\\345\\356\\348\\344\\364\\390\\348\\345\\352\\344\\354","\\351\\348\\345\\352\\344\\354","\\346\\345\\349\\353\\353\\345","\\361\\346\\346\\356\\351\\412\\366\\366\\355\\352\\349\\411\\351\\358\\355\\348\\350\\360\\352\\381\\348\\347\\354\\344\\358\\355\\350\\359\\366\\347\\411\\347\\364\\366\\348\\345\\378\\351\\366\\452\\382\\348\\407\\347\\354\\350\\360\\351\\344\\348\\393\\366\\393\\358\\428\\358\\424\\366\\350\\382\\348\\358\\355\\347\\354\\350\\360\\351\\344\\348\\358\\359\\345\\349\\358\\411\\351","\\350\\349\\348\\350\\347\\352","\\361\\344\\345\\353\\361\\346","\\350\\382\\348","\\372\\352\\345\\373\\357\\355\\348\\347\\351\\351\\368\\365\\350\\382\\348\\362\\355\\347\\354\\350\\360\\351\\344\\348\\365\\370\\372\\366\\352\\345\\373\\370","\\382\\354\\347\\356\\371\\348\\348","\\391\\345\\353\\349\\345\\356\\348\\344\\364\\390\\348\\345\\352\\344\\354\\357\\358\\382\\345\\352\\353\\344\\346\\362\\355\\350\\349\\346\\344\\349\\346\\357\\358\\356\\350\\351\\346","\\358\\350\\382\\348\\362\\355\\347\\354\\350\\360\\351\\344\\348","\\387\\344\\355\\344\\356\\347\\346\\347\\349","\\350\\382\\348\\407\\347\\354\\350\\360\\351\\344\\348","\\356\\348\\347\\375\\358\\350\\382\\348\\358\\347\\360\\346\\350\\356\\348\\347\\375","\\346\\354\\345\\353\\353\\344\\354","\\350\\349","\\358\\356\\348\\347\\375","\\351\\346\\350\\356\\358\\350\\382\\348\\358\\347\\360\\346\\350\\356\\348\\347\\375","\\358\\351\\346\\350\\356","\\355\\361\\347\\349\\353\\344\\352\\358\\350\\382\\348\\358\\355\\347\\354\\350\\360\\351\\344\\348","\\347\\354\\345\\347\\362\\348\\347\\378\\344\\348","\\390\\348\\345\\352\\344\\354","\\358\\350\\382\\348\\362\\352\\350\\346\\351\\357\\378\\360\\346\\346\\350\\349","\\382\\424\\456\\376\\362\\361","\\362\\356\\362\\387\\362\\349\\350","\\354\\344\\356\\348\\347\\355\\344","\\344\\347\\355\\361","\\391\\345\\353\\349\\345\\356\\348\\344\\364\\390\\348\\345\\352\\344\\354\\357\\358\\399\\350\\356\\360\\348\\347\\354\\399\\350\\351\\346\\351","\\391\\345\\353\\349\\345\\356\\348\\344\\364\\390\\348\\345\\352\\344\\354\\357\\358\\399\\350\\356\\360\\348\\347\\354\\399\\350\\351\\346\\351\\357\\358\\356\\350\\351\\346\\412\\381\\345\\354\\351\\346\\362\\355\\361\\345\\348\\352\\357\\345\\359\\353","\\391\\345\\353\\349\\345\\356\\348\\344\\364\\390\\348\\345\\352\\344\\354\\357\\358\\399\\350\\356\\360\\348\\347\\354\\399\\350\\351\\346\\351\\357\\358\\356\\350\\351\\346\\412\\348\\347\\351\\346\\362\\355\\361\\345\\348\\352\\357\\345\\359\\353","\\467\\359\\347\\364\\362\\382\\345\\352\\346\\361\\412\\357\\444\\448\\456\\356\\364\\473","\\382\\424\\456\\376\\362\\361\\428\\448\\376","\\382\\424\\456\\376\\362\\361\\424\\456\\376","\\391\\345\\353\\349\\345\\356\\348\\344\\364\\390\\348\\345\\352\\344\\354\\357\\358\\399\\350\\356\\360\\348\\347\\354\\399\\350\\351\\346\\351\\357\\358\\356\\350\\351\\346\\412\\349\\350\\346\\467\\412\\381\\345\\354\\351\\346\\362\\355\\361\\345\\348\\352\\473\\357\\345\\359\\353","\\361","\\362\\356","\\358\\345\\353\\349\\345\\344\\348\\399\\347\\353\\345\\349\\347\\346\\345\\350\\349","\\372\\352\\345\\373\\357\\355\\348\\347\\351\\351\\368\\365\\345\\353\\349\\345\\344\\348\\399\\347\\353\\345\\349\\347\\346\\345\\350\\349\\365\\357\\351\\346\\375\\348\\344\\368\\365\\352\\345\\351\\356\\348\\347\\375\\412\\349\\350\\349\\344\\429\\365\\370\\420\\348\\350\\353\\351\\356\\350\\346\\357\\399\\347\\353\\345\\349\\347\\346\\345\\350\\349\\357\\378\\375\\357\\345\\353\\349\\345\\344\\348\\358\\355\\350\\359\\372\\366\\352\\345\\373\\370","\\378\\344\\381\\350\\354\\344","\\381\\345\\354\\351\\346","\\372\\352\\345\\373\\357\\345\\352\\368\\365\\345\\353\\349\\345\\344\\348\\399\\347\\353\\345\\349\\347\\346\\345\\350\\349\\365\\370\\372\\366\\352\\345\\373\\370\\372\\352\\345\\373\\357\\355\\348\\347\\351\\351\\368\\365\\355\\348\\344\\347\\354\\365\\370\\372\\366\\352\\345\\373\\370","\\347\\381\\346\\344\\354","\\348\\347\\351\\346","\\356\\347\\353\\344","\\344\\465","\\372\\347\\357\\361\\354\\344\\381\\368\\365","\\356\\347\\346\\361\\349\\347\\359\\344","\\455","\\365\\357\\346\\345\\346\\348\\344\\368\\365\\399\\347\\353\\344\\357","\\365\\357\\354\\344\\348\\368\\365\\349\\350\\381\\350\\348\\348\\350\\382\\365\\370","\\372\\366\\347\\370","\\391\\345\\353\\349\\345\\344\\348\\399\\347\\353\\345\\349\\347\\346\\345\\350\\349","\\372\\351\\356\\347\\349\\357\\355\\348\\347\\351\\351\\368\\365\\351\\344\\348\\344\\355\\346\\344\\352\\365\\370\\384\\372\\366\\351\\356\\347\\349\\370","\\354\\344\\356\\348\\347\\355\\344\\493\\345\\346\\361","\\391\\345\\353\\349\\345\\344\\348\\399\\347\\353\\345\\349\\347\\346\\345\\350\\349\\357\\370\\357\\347","\\372\\351\\356\\347\\349\\357\\355\\348\\347\\351\\351\\368\\365\\351\\344\\348\\344\\355\\346\\344\\352\\365\\370","\\372\\366\\351\\356\\347\\349\\370","\\361\\347\\348\\347\\359\\347\\349\\438\\378\\344\\354\\411\\360\\352\\360\\348","\\356\\354\\344\\373","\\348\\347\\346\\344\\351\\346","\\350\\348\\352\\344\\351\\346","\\358\\378\\348\\350\\353\\362\\356\\347\\353\\344\\354\\357\\358\\349\\344\\382\\344\\354","\\358\\378\\348\\350\\353\\362\\356\\347\\353\\344\\354\\357\\358\\350\\348\\352\\344\\354","\\358\\361\\350\\359\\344\\362\\348\\345\\349\\387","\\358\\350\\348\\352\\362\\348\\345\\349\\387","\\351\\346\\354\\344\\347\\359","\\358\\378\\348\\350\\353\\362\\356\\347\\353\\344\\354","\\372\\352\\345\\373\\357\\355\\348\\347\\351\\351\\368\\365\\346\\344\\364\\346\\365\\370","\\352\\350\\349\\344","\\372\\352\\345\\373\\357\\355\\348\\347\\351\\351\\368\\365\\348\\344\\381\\346\\365\\370\\372\\366\\352\\345\\373\\370","\\382\\354\\347\\356","\\358\\344\\349\\346\\354\\375\\362\\346\\345\\346\\348\\344","\\381\\345\\349\\352","\\347\\354\\346\\345\\355\\348\\344\\357\\358\\344\\349\\346\\354\\375\\362\\346\\345\\346\\348\\344","\\353\\344\\346","\\372\\352\\345\\373\\357\\355\\348\\347\\351\\351\\368\\365\\354\\345\\353\\361\\346\\365\\370\\372\\366\\352\\345\\373\\370","\\372\\366\\352\\345\\373\\370\\357\\372\\351\\356\\347\\349\\357\\355\\348\\347\\351\\351\\368\\365\\346\\345\\346\\348\\344\\365\\370","\\351\\360\\378\\351\\346\\354\\345\\349\\353","\\351\\344\\347\\354\\355\\361","\\415","\\354\\347\\349\\352\\350\\359","\\381\\348\\350\\350\\354","\\350\\356\\344\\349\\390\\344\\347\\354\\355\\361\\478\\346\\350\\346\\347\\348\\402\\344\\351\\360\\348\\346\\351","\\411\\360\\359\\348\\347\\361","\\347","\\366\\381\\344\\344\\352\\351\\366\\356\\350\\351\\346\\351\\366\\351\\360\\359\\359\\347\\354\\375\\455\\347\\348\\346\\368\\411\\351\\350\\349\\362\\345\\349\\362\\351\\355\\354\\345\\356\\346\\415\\350\\354\\352\\344\\354\\378\\375\\368\\360\\356\\352\\347\\346\\344\\352\\415\\351\\346\\347\\354\\346\\362\\345\\349\\352\\344\\364\\368","\\415\\359\\347\\364\\362\\354\\344\\351\\360\\348\\346\\351\\368","\\415\\355\\347\\348\\348\\378\\347\\355\\387\\368\\359\\420\\358\\352","\\378","\\345\\359\\347\\353\\344","\\372\\360\\348\\357\\355\\348\\347\\351\\351\\368\\365\\349\\350\\345\\359\\347\\353\\344\\365\\370","\\391","\\359\\344\\352\\345\\347\\478\\346\\361\\360\\359\\378\\349\\347\\345\\348","\\366\\382\\393\\436\\376\\362\\361\\384\\448\\444\\362\\356\\362\\387\\362\\349\\350\\362\\349\\360","\\360\\354\\348","\\349\\350\\345\\359\\347\\353\\344","\\372\\348\\345\\370","\\372\\352\\345\\373\\357\\355\\348\\347\\351\\351\\368\\365\\346\\361\\360\\359\\378\\365\\370\\372\\347\\357\\361\\354\\344\\381\\368\\365","\\365\\357\\346\\345\\346\\348\\344\\368\\365","\\365\\370\\372\\345\\359\\353\\357\\355\\348\\347\\351\\351\\368\\365\\348\\347\\462\\375\\365\\357\\351\\354\\355\\368\\365\\352\\347\\346\\347\\412\\345\\359\\347\\353\\344\\366\\356\\349\\353\\429\\378\\347\\351\\344\\448\\424\\395\\345\\439\\420\\452\\402\\382\\376\\527\\474\\353\\350\\371\\371\\371\\371\\409\\390\\449\\361\\425\\449\\353\\371\\371\\371\\371\\386\\371\\371\\371\\371\\407\\407\\371\\529\\371\\371\\371\\371\\428\\381\\347\\448\\402\\371\\371\\371\\371\\461\\387\\348\\425\\529\\439\\402\\424\\393\\359\\409\\387\\371\\371\\409\\474\\407\\371\\449\\371\\371\\407\\386\\371\\371\\393\\382\\366\\371\\386\\353\\371\\371\\371\\371\\371\\390\\449\\439\\452\\402\\527\\436\\407\\501\\432\\432\\368\\365\\357\\352\\347\\346\\347\\362\\351\\354\\355\\368\\365","\\365\\357\\347\\348\\346\\368\\365","\\365\\366\\370\\372\\366\\347\\370\\372\\366\\352\\345\\373\\370","\\372\\352\\345\\373\\357\\355\\348\\347\\351\\351\\368\\365\\346\\344\\364\\346\\365\\370\\372\\347\\357\\361\\354\\344\\381\\368\\365","\\372\\366\\347\\370\\372\\366\\352\\345\\373\\370\\372\\366\\348\\345\\370","\\391\\359\\345\\352\\352\\348\\344\\378\\347\\354\\357\\358\\345\\353\\349\\345\\356\\348\\344\\364\\410\\350\\347\\352\\345\\349\\353","\\347\\360\\346\\350","\\391\\359\\345\\352\\352\\348\\344\\378\\347\\354\\357\\358\\382\\345\\352\\353\\344\\346\\362\\355\\350\\349\\346\\344\\349\\346","\\366\\381\\344\\344\\352\\351\\366\\356\\350\\351\\346\\351\\366\\351\\360\\359\\359\\347\\354\\375\\455\\347\\348\\346\\368\\411\\351\\350\\349\\362\\345\\349\\362\\351\\355\\354\\345\\356\\346\\415\\359\\347\\364\\362\\354\\344\\351\\360\\348\\346\\351\\368\\376\\415\\355\\347\\348\\348\\378\\347\\355\\387\\368\\359\\420\\358\\355","\\345\\381\\354\\347\\359\\344\\528\\351\\354\\355\\532\\368\\365\\375\\350\\360\\346\\360\\378\\344\\358\\355\\350\\359\\365\\533","\\382\\345\\352\\346\\361\\412\\384\\376\\376\\553","\\347\\351\\356\\344\\355\\346\\402\\347\\346\\345\\350","\\382\\345\\352\\346\\361","\\358\\345\\353\\349\\345\\356\\348\\344\\364\\413\\345\\346\\348\\344","\\359\\347\\354\\353\\345\\349\\413\\350\\356","\\358\\345\\351\\390\\345\\349\\353\\348\\344\\357\\359\\347\\345\\349","\\360\\349\\382\\354\\347\\356","\\355\\350\\349\\346\\344\\349\\346\\351","\\391\\355\\350\\359\\359\\344\\349\\346\\351\\357\\356","\\350\\381\\381\\351\\344\\346","\\391\\355\\350\\359\\359\\344\\349\\346\\351","\\361\\346\\359\\348\\395\\357\\378\\350\\352\\375","\\358\\356\\350\\351\\346\\362\\355\\350\\359\\359\\344\\349\\346\\351\\357\\347","\\351\\344\\355\\346\\345\\350\\349\\391\\355\\350\\359\\359\\344\\349\\346\\351","\\355\\350\\359\\359\\344\\349\\346\\362\\344\\352\\345\\346\\350\\354","\\350\\348\\357\\358\\355\\350\\359\\359\\344\\349\\346\\362\\354\\344\\356\\348\\375","\\355\\350\\359\\359\\344\\349\\346\\362\\381\\350\\354\\359","\\353\\344\\346\\425\\348\\344\\359\\344\\349\\346\\351\\420\\375\\407\\348\\347\\351\\351\\409\\347\\359\\344","\\346\\350\\356\\362\\355\\350\\349\\346\\345\\349\\360\\344","\\352\\347\\346\\347\\362\\355\\350\\359\\359\\344\\349\\346\\362\\345\\352","\\391\\355","\\357\\370\\357\\358\\355\\350\\359\\359\\344\\349\\346\\362\\354\\344\\356\\348\\375\\378\\350\\364\\362\\351\\345\\349\\353\\348\\344","\\415\\356\\347\\354\\344\\349\\346\\432\\461\\368","\\391\\346\\350\\356\\362\\355\\350\\349\\346\\345\\349\\360\\344\\357\\347","\\356\\347\\354\\344\\349\\346\\409\\350\\352\\344","\\354\\344\\348\\347\\346\\344\\352\\438\\356\\350\\351\\346\\438\\378\\347\\382\\347\\361","\\355\\355","\\355","\\344","\\345","\\381\\345\\348\\346\\344\\354","\\358\\345\\353\\349\\345\\356\\348\\344\\364\\402\\344\\348\\347\\346\\344\\352\\386\\345\\352\\352\\348\\344","","\\449\\402\\410","\\354\\344\\348\\347\\346\\344\\352\\438\\356\\350\\351\\346\\438\\346\\344\\349\\353\\347\\361","\\365\\370\\372\\345\\359\\353\\357\\351\\354\\355\\368\\365","\\372\\366\\347\\370\\372\\366\\348\\345\\370","\\349\\350\\345\\359\\353","\\358\\345\\353\\349\\345\\356\\348\\344\\364\\402\\344\\348\\347\\346\\344\\352\\386\\345\\352\\352\\348\\344\\357\\360\\348","\\358\\345\\353\\349\\345\\356\\348\\344\\364\\402\\344\\348\\347\\346\\344\\352\\386\\345\\352\\352\\348\\344\\357\\345\\359\\353","\\375\\350\\360\\346\\360\\378\\344","\\345\\349\\352\\344\\364\\452\\381","\\352\\344\\381\\347\\360\\348\\346","\\359\\465\\352\\344\\381\\347\\360\\348\\346","\\366\\382\\444\\436\\362\\361\\436\\448\\362\\356\\362\\387\\362\\349\\350\\362\\349\\360","\\358\\345\\353\\349\\345\\356\\348\\344\\364\\402\\344\\348\\347\\346\\344\\352\\386\\345\\352\\352\\348\\344\\357\\360\\348\\357\\358\\345\\353\\349\\345\\356\\348\\344\\364\\410\\350\\347\\352\\345\\349\\353","\\358\\345\\353\\349\\345\\356\\348\\344\\364\\402\\344\\348\\347\\346\\344\\352","\\358\\345\\353\\349\\345\\356\\348\\344\\364\\402\\344\\348\\347\\346\\344\\352\\357\\360\\348","\\358\\345\\353\\349\\345\\356\\348\\344\\364\\402\\344\\348\\347\\346\\344\\352\\357\\345\\359\\353","\\358\\345\\353\\349\\345\\356\\348\\344\\364\\402\\344\\348\\347\\346\\344\\352\\357\\360\\348\\357\\358\\345\\353\\349\\345\\356\\348\\344\\364\\410\\350\\347\\352\\345\\349\\353","\\360\\349\\352\\344\\381\\345\\349\\344\\352","\\366\\381\\344\\344\\352\\351\\366\\356\\350\\351\\346\\351\\366\\351\\360\\359\\359\\347\\354\\375\\366\\362\\366","\\455\\347\\348\\346\\368\\411\\351\\350\\349\\362\\345\\349\\362\\351\\355\\354\\345\\356\\346\\415\\355\\347\\348\\348\\378\\347\\355\\387\\368\\354\\402\\358\\352\\415\\359\\347\\364\\362\\354\\344\\351\\360\\348\\346\\351\\368\\393\\436","\\351\\346\\347\\346\\360\\351","\\381","\\353"];499[343[1]](343[0])===343[2]?383[343[6]](343[5])[343[4]](343[3],343[3]):383[343[6]](343[5])[343[7]](343[3]);431 447=404[343[11]][343[10]][343[9]](343[8]),552=447[343[12]](),551=447[343[13]](343[8]),550=[343[14],343[15],343[16],343[17],343[18],343[19],343[20],343[21],343[22],343[23],343[24],343[25],343[26],343[27],343[28],343[29]],463=0,515=383[343[31]](343[30]),475=404[343[32]]||383[343[34]][343[33]]||383[343[35]][343[33]];571={459:363(){379 392=427 488();392[343[37]](392[343[36]]()+(24*60*60*486));379 388=488[343[39]](392[343[38]]());379 510=343[40]+392[343[38]]();383[343[41]]=343[42]+388+343[43]+510+343[44]},460:363(509){379 508=343[43]+383[343[41]],447=508[343[9]](343[43]+509+343[45]);367(447[343[46]]==2){406 447[343[48]]()[343[9]](343[47])[343[12]]()}},445:363(){383[343[41]]=343[49]}},570=363(){$(383)[343[55]](363(){406 $(383)[343[50]]()>300?$(343[53])[343[52]](343[51]):$(343[53])[343[54]](343[51])}),$(343[53])[343[59]](363(){406 $(343[58])[343[57]]({530:343[56]},526)});379 377=427 488(),396=377[343[60]](),491=383[343[62]](343[61]);367(491){491[343[63]]=396};379 394=404[343[64]],392=383[343[62]](343[65]),388=383[343[62]](343[65])[343[66]],405=383[343[62]](343[67]),403=383[343[62]](343[68]);367(405){519=404[343[71]](405)[343[70]](343[69])};367(403){484=484=404[343[71]](403)[343[70]](343[69])};404[343[72]]=363(){379 435=404[343[64]];367(394>435){392[343[7]](343[73]);367(405){405[343[74]][343[69]]=516(519)+388+343[75]};367(403){403[343[74]][343[69]]=516(484)+388+343[75]}}400{392[343[78]][343[77]](343[76]);405&&405[343[7]](343[74]);403&&403[343[7]](343[74])};394=435};379 480=$(343[79]);480[343[81]](343[80])[343[76]]();480[343[59]](363(377){377[343[82]]();$(385)[343[81]](343[80])[343[83]](100);$(385)[343[86]]()[343[85]](343[84])});$(343[94])[343[93]](363(){$(385)[343[88]](343[87])?$(343[35])[343[91]](343[89],343[90]):$(343[35])[343[92]](343[74])});404[343[95]](343[55],490);404[343[95]](343[96],490)},495=363(){367(383[343[6]](343[97])){383[343[6]](343[99])[343[98]]();383[343[6]](343[101])[343[78]][343[77]](343[100])}},490=363(388){379 421=383[343[31]](343[102]);414(431 369=0;369<421[343[46]];369++){379 521=421[369][343[103]]();367(421[369][343[105]](343[104])&&521[343[69]]<404[343[106]]){421[369][343[4]](343[107],421[369][343[108]](343[104]));421[369][343[7]](343[104]);421[369][343[78]][343[98]](343[109]);421[369][343[78]][343[77]](343[100]);463++;367(475<=505){367(463===1){495()}}400{367(463===(515[343[46]]+1)){495()}}}}},547={459:363(377){379 497=343[110];414(431 433=0;433<377[343[112]][343[111]][343[46]];433++){414(431 380=0;380<377[343[112]][343[111]][433][343[113]][343[46]]&&343[114]!=377[343[112]][343[111]][433][343[113]][380][343[115]];380++){};497+=343[116]+(343[117]+377[343[112]][343[111]][433][343[113]][380][343[118]]+343[117])+343[119]+377[343[112]][343[111]][433][343[121]][343[120]]+343[122]};$(343[125])[343[124]](497+343[123])},460:363(){367($(343[125])[343[46]]!==0){379 441=$(343[125])[343[127]](343[126]);$[343[132]]({476:343[128]+441+343[129],458:343[130],470:343[131]})}}},504=363(){$(343[5])[343[93]](363(){367($(385)[343[88]](343[87])){$(385)[343[127]](343[3],343[3]);499[343[133]](343[0],343[2]);$(343[35])[343[52]](343[0])}400{$(385)[343[92]](343[3],343[3]);499[343[134]](343[0]);$(343[35])[343[54]](343[0])}})},543=363(){379 377=404[343[136]](343[135]),394=$(343[137]),392=$(343[138]),388=$(343[139]),405=$(343[140]),403=$(343[141]),435=$(343[142]),369=$(343[143]),408=363(){394[343[144]]();367(!403[343[124]]()&&!435[343[124]]()&&!369[343[124]]()){$(343[146])[343[52]](343[145]);$(343[146])[343[148]](392[343[147]]());$(343[150])[343[86]]()[343[149]](388[343[147]]());$(343[146])[343[149]](405[343[147]]());504()}},419=363(){$(343[151])[343[149]](394);$(343[146])[343[54]](343[145]);$(343[141])[343[98]]();$(343[142])[343[98]]();$(343[143])[343[98]]();$(343[35])[343[92]](343[74]);$(343[153])[343[152]](343[3],485)};377[343[155]](363(417){367(417[343[154]]){408()}400{419()}});475<=557?408():419()},558=363(){367(404[343[156]]){513[343[158]](343[157]);379 377=383[343[160]](343[159]);377[343[161]]=343[162];377[343[107]]=343[163];377[343[164]]=422;367(389[343[166]][343[165]]){377[343[167]]=363(){379 394=383[343[160]](343[168]);394[343[169]]=343[170];394[343[63]]=343[171]+389[343[166]][343[172]]+343[173];383[343[35]][343[149]](394);383[343[35]][343[74]][343[89]]=343[90]}};383[343[176]](343[175])[0][343[174]](377)}400{513[343[158]](343[177])}},549=363(){367($(343[178])){367(389[343[179]][343[165]]){379 496=389[343[179]][343[180]],377=383[343[160]](343[159]);377[343[164]]=422;377[343[107]]=343[181];377[343[182]]=363(){$(343[99])[343[91]](343[183],496);$(343[178])[343[52]](343[184]);$(343[187])[343[186]](343[185]);379 451=$(343[188]);451[343[190]]({472:3,546:422,542:0,545:422,554:422,563:(389[343[179]][343[189]]*486),562:422,564:422,565:{0:{472:1},561:{472:2},559:{472:3}}});$(343[194])[343[193]](343[59],363(){451[343[192]](343[191],[486])});$(343[196])[343[193]](343[59],363(){451[343[192]](343[195])});451[343[193]](343[197],363(){$(343[200])[343[127]](343[198],343[199]);$(343[30])[343[204]](363(){$(385)[343[127]](343[107],$(385)[343[127]](343[107])[343[203]](/483(\\418+)-440(\\418+)-(\\511+)-518-524-514/,343[201]+496+343[202]))})})};383[343[175]][343[174]](377)}400{367($(343[205])[343[124]]()){379 377=$(343[206])[343[127]](343[183]),396=$(343[207])[343[127]](343[183]),394=404[343[136]](343[208]),388=363(){$(343[206])[343[127]](343[107],363(){406 385[343[107]][343[203]](/483(\\418+)-440(\\418+)/,343[209])});$(343[211])[343[204]](363(){$(385)[343[127]](343[107],$(385)[343[127]](343[107])[343[203]](/483(\\418+)-440(\\418+)/,343[210]))})},405=363(){$(343[206])[343[127]](343[107],363(){406 385[343[107]][343[203]](/440(\\418+)-506/,343[212]+377+343[213])});$(343[211])[343[204]](363(){$(385)[343[127]](343[107],$(385)[343[127]](343[107])[343[203]](/440(\\418+)-506/,343[212]+396+343[213]))})};$(343[30])[343[204]](363(){$(385)[343[127]](343[107],$(385)[343[127]](343[107])[343[203]](/(\\511+)-518-524-514/,343[202]))});394[343[155]](363(417){367(417[343[154]]){388()}400{405()}});475<=505?388():405()}}}},544=363(){379 377=$(343[214])[343[46]];367(377!=0){$(343[214])[343[217]]()[343[216]](343[215]);$(343[214])[343[220]]()[343[219]](343[218]);379 396=$(343[214]),394=343[221],441=464(394);396[343[76]]();367(441===477){396[343[222]](0)[343[76]]();396[343[222]](1)[343[51]]()}400{396[343[222]](441)[343[51]]()};414(416=1;416<=377;416++){$(343[229])[343[149]]($(343[223]+404[343[11]][343[224]]+343[225]+394+343[45]+416+343[226]+416+343[227]+416+343[228]))};441==477?$(343[232])[343[222]](0)[343[231]](363(){406 $(343[230])}):$(343[232])[343[222]]((464(394))-1)[343[231]](363(){406 $(343[233]+464(394)+343[234])})}400{$(343[229])[343[76]]()};367(389[343[235]][343[165]]){379 507=389[343[235]][343[81]],522=389[343[235]][343[236]],517=389[343[235]][343[237]],525=389[343[235]][343[238]],392=$(343[239]),388=$(343[240]),405=$(343[241]),403=$(343[242]);$(343[244])[343[52]](343[243]);$[343[252]](392[343[127]](343[118]),363(446){392[343[124]]($(446)[343[250]](343[251])[343[217]]()[343[172]]())[343[127]](343[121],$(446)[343[250]](343[249])[343[217]]()[343[172]]())[343[127]](343[73],343[121])[343[248]](343[247])},343[124])[343[246]](363(){392[343[86]]()[343[148]](343[245]+507+343[173])});$[343[252]](388[343[127]](343[118]),363(446){388[343[124]]($(446)[343[250]](343[251])[343[217]]()[343[172]]())[343[127]](343[121],$(446)[343[250]](343[249])[343[217]]()[343[172]]())[343[127]](343[73],343[121])[343[248]](343[253])},343[124])[343[246]](363(){388[343[86]]()[343[148]](343[245]+522+343[173])});405[343[124]](343[245]+517+343[254]+$(343[249])[343[217]]()[343[172]]()+343[234]);403[343[124]](343[245]+525+343[254]+$(343[249])[343[217]]()[343[172]]()+343[234])}},464=363(377){379 520=560(404[343[11]][343[256]][343[255]](1)),396=520[343[9]](343[257]),392;414(379 369=0;369<396[343[46]];369++){392=396[369][343[9]](343[45]);367(392[0]===377){406 392[1]===477?422:392[1]}}},489={459:363(482,523){406 426[343[259]](426[343[258]]()*(523-482+1))+482},460:363(434){379 369=434[343[46]],408,492;367(369===0){406 485};498(--369){408=426[343[259]](426[343[258]]()*(369+1));492=434[369];434[369]=434[408];434[408]=492};406 434},445:363(437){379 512=489[343[262]](1,(437[343[112]][343[260]][343[120]]-389[343[67]][343[261]]));$[343[132]]({476:343[263]+512+343[264]+389[343[67]][343[261]]+343[265],458:343[130],470:343[131]})},418:363(437){379 469,398=489[343[266]](437[343[112]][343[111]]),430,397;367(389[343[67]][343[267]]){397=343[110]}400{397=343[268]};414(379 369=0,503=398[343[46]];369<503;369++){414(379 408=0,502=398[369][343[113]][343[46]];408<502;408++){469=(398[369][343[113]][408][343[115]]==343[114])?398[369][343[113]][408][343[118]]:343[269]};367(343[270]536 398[369]){430=(398[369][343[270]][343[272]])[343[203]](/\\/481[0-9]+(\\-445)?/,343[271])}400{430=389[343[67]][343[273]]};397+=343[274];367(389[343[67]][343[267]]){397+=343[275]+469+343[276]+398[369][343[121]][343[120]]+343[277]+430+343[276]+398[369][343[121]][343[120]]+343[278]+398[369][343[121]][343[120]]+343[279]};397+=343[280]+469+343[119]+398[369][343[121]][343[120]]+343[281]};$(343[282])[343[98]]();$(343[284])[343[124]](397+343[123])[343[91]](343[183],343[283])},537:363(){367($(343[284])){$[343[132]]({476:343[285],458:343[130],470:343[131]})}}},569=363(){379 487=$(343[286]);487[343[204]](363(){$(385)[343[127]](343[288],385[343[183]]/ 385[343[289]])[343[127]](343[74],343[287])});$(404)[343[96]](363(){487[343[204]](363(){$(385)[343[127]](343[183],$(385)[343[289]]()* $(385)[343[127]](343[288]))})})[343[96]]();367(383[343[6]](343[290])){383[343[6]](343[292])[343[74]][343[291]]= 383[343[6]](343[290])[343[66]]+ 20+ 343[75]};$(343[295])[343[250]](343[262])[343[294]]()[343[293]]();$(343[299])[343[59]](363(){$(343[298])[343[57]]({530:$(343[297])[343[296]]()[343[69]]},526)})},572= 363(){367(383[343[6]](343[300])){431 377=383,396=377[343[62]](343[301]),394=396[343[107]],392=377[343[31]](343[302]),388=377[343[304]](343[303])[0],405=392[343[46]],403=377[343[62]](343[305]),435=363(479,419,535,534){479[343[95]](343[59],363(){431 417=479[343[108]](343[306]);377[343[6]](343[307]+ 417+ 343[308])[343[174]](419);535[343[107]]= 534+ 343[309]+ 417;403[343[78]][343[98]](343[90]);367(403){377[343[6]](343[310])[343[78]][343[98]](343[90])}})};414(416= 0;416< 405;416++){435(392[416],388,396,394)};367(403){403[343[78]][343[77]](343[90]);494= 403[343[176]](343[262])[0];494[343[7]](343[73]);431 500=377[343[6]](343[310]);500[343[95]](343[59],363(){500[343[311]][343[174]](388);396[343[107]]= 394;494[343[78]][343[77]](343[90])})}}},374= {459: 427 443(),460:0,445: 427 443(),568: 427 443(),418:363(437){414(379 369=0;369< 437[343[112]][343[111]][343[46]];369++){379 398=437[343[112]][343[111]][369],430;374[343[262]][374[343[266]]]= 398[343[121]][343[120]];367(343[270] 536  398){430= 398[343[270]][343[272]]}400 {430= 389[343[312]][343[273]]};374[343[313]][374[343[266]]]= 430;414(379 419=0;419< 398[343[113]][343[46]];419++){367(398[343[113]][419][343[115]]== 343[114]){374[343[314]][374[343[266]]]= 398[343[113]][419][343[118]];374[343[266]]++;454}}};374[343[315]]()},537:363(){379 442= 427 443(0),453= 427 443(0),457= 427 443(0);414(379 369=0;369< 374[343[314]][343[46]];369++){367(!374[343[316]](442,374[343[314]][369])){442[343[46]]+= 1;442[442[343[46]]- 1]= 374[343[314]][369];453[343[46]]+= 1;453[453[343[46]]- 1]= 374[343[262]][369];457[343[46]]+= 1;457[457[343[46]]- 1]= 374[343[313]][369]}};374[343[262]]= 453[343[317]](363(388){406 388});374[343[314]]= 442[343[317]](363(388){406 388});374[343[313]]= 457[343[317]](363(388){406 388})},541:363(){367($(343[318])){379 380=426[343[259]]((374[343[262]][343[46]]- 1)* 426[343[258]]()),369=0,397=343[319],471=383[343[320]],468=380;498(369< 389[343[321]][343[261]]){367(374[343[314]][380]!= 471){397+= 343[274];367(389[343[321]][343[267]]){397+= 343[275]+ 374[343[314]][380]+ 343[276]+ 374[343[262]][380]+ 343[322]+ 374[343[313]][380]+ 343[276]+ 374[343[262]][380]+ 343[278]+ 374[343[262]][380]+ 343[279]};397+= 343[223]+ 374[343[314]][380]+ 343[276]+ 374[343[262]][380]+ 343[119]+ 374[343[262]][380]+ 343[323];369++;367(369== 389[343[321]][343[261]]){454}};367(380< 374[343[314]][343[46]]- 1){380++}400 {380= 0};367(380== 468){454}};367(!389[343[321]][343[267]]){$(343[325])[343[52]](343[324])};$(343[325])[343[124]](397);$[343[204]]($(343[326]),363(){367(385[343[107]][343[328]](343[327])!=  -1){$(385)[343[127]](343[107],385[343[107]][343[203]](343[329],343[330]))}400 {$(385)[343[127]](343[107],385[343[107]][343[203]](/\\/481[0-9]+(\\-445)?/,343[331]))}});$(343[325])[343[91]](343[183],343[283]);$(343[332])[343[98]]()}},540:363(){367($(343[333])){379 380=426[343[259]]((374[343[262]][343[46]]-1)*426[343[258]]()),369=0,397=343[319],471=383[343[320]],468=380;498(369<389[343[312]][343[261]]){367(374[343[314]][380]!=471){397+=343[274];367(389[343[312]][343[267]]){538=374[343[313]][380][343[203]](/\\/481[0-9]+(\\-445)?/,343[271]);397+=343[275]+374[343[314]][380]+343[276]+374[343[262]][380]+343[277]+538+343[276]+374[343[262]][380]+343[278]+374[343[262]][380]+343[279];397+=343[280]+374[343[314]][380]+343[276]+374[343[262]][380]+343[119]+374[343[262]][380]+343[281]}400{397+=343[223]+374[343[314]][380]+343[276]+374[343[262]][380]+343[119]+374[343[262]][380]+343[323]};369++;367(369==389[343[312]][343[261]]){454}};367(380<374[343[314]][343[46]]-1){380++}400{380=0};367(380==468){454}};367(!389[343[312]][343[267]]){$(343[334])[343[52]](343[324])};$(343[334])[343[124]](397);$[343[204]]($(343[335]),363(){367(385[343[107]][343[328]](343[327])!=-1){$(385)[343[127]](343[107],385[343[107]][343[203]](343[329],343[330]))}});$(343[334])[343[91]](343[183],343[283]);$(343[336])[343[98]]()}},440:363(){367(450!=343[337]&&450!=343[319]&&450[343[46]]!=0){379 396=0;414(379 417=0;417<450[343[46]];417++){$[343[132]]({476:343[338]+450[417][343[203]](/\\&566;/540,343[257])+343[339],458:343[130],470:343[131],556:363(466){367(466[343[340]]==200||466[343[340]]==304||466[343[340]]==401){396++;367(396==450[343[46]]){374[343[341]]();374[343[342]]()}}}})}}400{$(343[318])[343[98]]();$(343[333])[343[98]]()}},416:363(377,388){414(379 408=0;408<377[343[46]];408++){367(377[408]==388){406 422}};406 485}}',10,573,'|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||_0x96b5|x65|x69|x74|x61|x6C|x6E|x6F|x73|x64|x67|x72|x63|x70|x20|x2E|x6D|x75|x68|x2D|function|x78|x22|x2F|if|x3D|_0x1b24x16|x3E|x41|x3C|x76|rR|x79|x30|_0x1b24xd|x62|let|_0x1b24x1a|x66|x77|document|x31|this|x4D|x6B|_0x1b24x9|config|x53|x23|_0x1b24x8|x32|_0x1b24x10|x2C|_0x1b24xe|_0x1b24x30|_0x1b24x2e|x50|else||x52|_0x1b24x12|window|_0x1b24x11|return|x43|_0x1b24x1c|x4E|x4C|x6A|x3A|x54|for|x26|i|_0x1b24x1e|d|_0x1b24x1d|x42|_0x1b24x15|true|x48|x34|x45|Math|new|x33|x3B|_0x1b24x2f|var|x49|_0x1b24x19|_0x1b24x29|_0x1b24x13|x35|_0x1b24x2b|x5F|x56|h|_0x1b24x1b|_0x1b24x38|Array|x37|c|_0x1b24x25|parts|x36|x55|label|_0x1b24x20|x4F|_0x1b24x39|break|x3F|x38|_0x1b24x3a|type|a|b|x44|x7A|hit|Pg|x71|_0x1b24x3d|x28|_0x1b24x3c|_0x1b24x2d|dataType|_0x1b24x3b|items|x29|x47|Width|url|undefined|x24|_0x1b24x34|_0x1b24x14|s|_0x1b24x27|w|gg|false|1000|_0x1b24x33|Date|mB|Lz|_0x1b24xf|_0x1b24x2a|x57|j|hT|_0x1b24x1f|_0x1b24x18|while|localStorage|_0x1b24x37|x59|_0x1b24x32|_0x1b24x31|Dk|768|p|_0x1b24x21|_0x1b24xc|_0x1b24xb|_0x1b24xa|D|_0x1b24x2c|console|nu|imgSlider|parseInt|_0x1b24x23|k|ff|_0x1b24x26|_0x1b24x17|_0x1b24x22|_0x1b24x28|no|_0x1b24x24|650|x4B|x5B|x51|scrollTop|x39|x2A|x5D|_0x1b24x36|_0x1b24x35|in|e|img|x46|g|f|margin|nV|Po|lazyLoad|loop|rC|x4A|sL|except|parent|subdomain|x25|autoplay|x5A|complete|950|aB|800|decodeURIComponent|640|autoplayHoverPause|autoplayTimeout|responsiveClass|responsive|amp|x27|cc|Si|gL|cK|kO'.split('|'),0,{}));
eval(function(p,a,c,k,e,d){e=function(c){return c};if(!''.replace(/^/,String)){while(c--){d[c]=k[c]||c}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('15 4={31:(9(){44 82.103.132})(),63:(9(){44 82.103.131})(),5:9(94){15 7=\'\',59=58(4.63/2);3(59==4.63-59){4.63=59*2+1}47=38-59;3(47<1)47=1;22=58(94/4.31)+1;3(22-1==94/4.31)22=22-1;55=47+4.63-1;3(55>22)55=22;15 130=58(38)-1;3(47>1){3(42=="25"){7+=\'<5 13="/" 40="39 1">1</5>\'}16{7+=\'<5 13="/34/36/\'+49+\'?18-33=\'+4.31+\'" 40="39 1">1</5>\'}}3(47>2){7+=\'<57 67="127">...</57>\'}77(15 26=47;26<=55;26++){3(38==26){7+=\'<57 67="129">\'+26+\'</57>\'}16 3(26==1){3(42=="25"){7+=\'<5 13="/" 40="39 1">1</5>\'}16{7+=\'<5 13="/34/36/\'+49+\'?18-33=\'+4.31+\'" 40="39 1">1</5>\'}}16{3(42=="25"){7+=\'<5 78="4.81(\'+26+\');44 45" 40="39 \'+26+\'">\'+26+\'</5>\'}16{7+=\'<5 78="4.89(\'+26+\');44 45" 40="39 \'+26+\'">\'+26+\'</5>\'}}}3(55<22-1){7+=\'<57 67="127">...</57>\'}3(55<22){3(42=="25"){7+=\'<5 78="4.81(\'+22+\');44 45" 40="39 \'+22+\'">\'+22+\'</5>\'}16{7+=\'<5 78="4.89(\'+22+\');44 45" 40="39 \'+22+\'">\'+22+\'</5>\'}}15 133=58(38)+1;15 53=35.134("53");15 62=35.102("52-50")[0];77(15 37=0;37<53.28;37++){53[37].122=7}3(53&&53.28>0){7=\'\'}3(62){62.122=7,62.98.112(\'137\'),62.98.124(\'128\')}},88:9(86){15 75=86.75;15 125=58(75.136$135.$95,10);4.5(125)},116:9(){15 21=27.32.13;3(21.17(\'/34/36/\')!=-1){3(21.17(\'?76-18\')!=-1){49=21.46(21.17(\'/34/36/\')+14,21.17(\'?76-18\'))}16 3(21.17(\'?18\')!=-1){49=21.46(21.17(\'/34/36/\')+14,21.17(\'?18\'))}16{49=21.46(21.17(\'/34/36/\')+14)}}3(21.17(\'?138=\')==-1){3(21.17(\'/34/36/\')==-1){42=\'25\';3(27.32.13.17(\'#25=\')!=-1){38=27.32.13.46(27.32.13.17(\'#25=\')+6,27.32.13.28)}16{38=1}$.72({68:\'/66/41/85?18-33=1&65=64-73-79&84=4.88\',71:\'74\'})}16{42=\'36\';3(21.17(\'18-33=\')==-1){4.31=20}3(27.32.13.17(\'#25=\')!=-1){38=27.32.13.46(27.32.13.17(\'#25=\')+6,27.32.13.28)}16{38=1}$.72({68:\'/66/41/85?18-33=1&65=64-73-79&84=4.88\',71:\'74\'})}}},81:9(51){80=(51-1)*4.31;60=51;$.72({68:\'/66/41/85?113-109=\'+80+\'&18-33=1&65=64-73-79&84=4.96\',71:\'74\'})},89:9(51){80=(51-1)*4.31;60=51;$.72({68:\'/66/41/85?113-109=\'+80+\'&18-33=1&65=64-73-79&84=4.96\',71:\'74\'})},96:9(86){11=86.75.146[0];15 108=11.126.$95.46(0,19)+11.126.$95.46(23,29);15 91=165(108);3(42==\'25\'){15 90=\'/34?76-18=\'+91+\'&18-33=\'+4.31+\'#25=\'+60}16{15 90=\'/34/36/\'+49+\'?76-18=\'+91+\'&18-33=\'+4.31+\'#25=\'+60}27.32.13=90},166:9(){30 60,42,38,49},61:9(){$(\'.52-50 .121\').124();30 69=45;27.167(\'164\',9(){(0!=35.163.120&&45===69||0!=35.48.120&&!1===69)&&(!9(){4.116()}(),69=115)},115)},70:9(){30 50=$(\'.52-50\'),41=$(\'.52-41\');50.139(\'160\',\'5\',9(){161.169(\'\',\'\',93.13);$.168(93.13,{},9(100){15 99=$(100).97(\'170\').28?$(100):$(\'<83></83>\');41.106(99.97(\'.52-41\').7());50.7(99.97(\'.52-50 .121\').171())},\'7\');$(93).162(\'<83 67=\\"158\\"><111 145=\\"0 0 24 24\\"><159 81=\\"147,144,10 0 0,0 2,143,8 0 0,1 12,140\\"/></111></83>\');44 45})},92:9(){3(82.105==1){4.70()}16 3(82.105==2){4.61()}}},141=9(){3(35.104(\'119\')){35.104(\'119\').98.112(\'107\')}30 43=35.101(\'.107\');3(43){30 11=35.101(\'.11-48 142, .11-48 37, .11-48 148, .11-48 149, .11-48 155\');3(11.28>=1){30 61=43.28+1,70=11.28/61, 92=156.157({28:61},(154,118)=>118+1),87=92.153(0,-1);77(30 54=0;54<87.28;54++){30 117=87[54],56=58((70*117));3(11[56].150==\'151\'){11[56].123.114(43[54],11[56])}16{11[56].123.114(43[54],11[56].152)}}}16{30 110=35.102(\'11-48\')[0];77(30 37=0;37<43.28;37++){110.106(43[37])}}}};',10,172,'|||if|hH|a||html||function||post||href||var|else|indexOf|max|||thisUrl|lastPageNo|||page|jj|window|length||let|perPage|location|results|search|document|label|p|currentPageNo|Page|title|posts|currentPage|ads|return|false|substring|pageStart|body|postLabel|pager|numberpage|blog|pageArea|l|pageEnd|n|span|parseInt|pageNumber|noPage|h|blogPager|numPages|json|alt|feeds|class|url|bernomor|i|type|ajax|in|GET|feed|updated|for|onclick|script|jsonstart|d|config|div|callback|summary|root|k|b|e|pAddress|timestamp|j|this|pageInfo|t|f|find|classList|source|data|querySelectorAll|getElementsByClassName|navigasi_nomor|getElementById|navigasi|append|igniplexTengah|timestamp1|index|o|svg|add|start|insertBefore|true|c|m|key|HTML3|scrollTop|inner|innerHTML|parentNode|remove|totaldata|published|dot|infinite|current|prevNumber|tampilan_tombol_navigasi|tampilan_per_halaman|nextnumber|getElementsByName|totalResults|openSearch|number|q|on|4Z|PoO|br|12H4A8|4V2A10|viewBox|entry|M12|blockquote|table|nodeName|P|nextSibling|slice|val|figure|Array|from|loading|path|click|history|replaceWith|documentElement|scroll|encodeURIComponent|g|addEventListener|get|pushState|article|clone'.split('|'),0,{}));
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('8 v(){1h();16();17();19.b();18();3.i?3.i(\'N\',B()):3.t&&3.t(\'M\',B());7(1c.1b){n p=k;3.i(\'A\',8(){(0!=5.y.l&&k===p||0!=5.9.l&&!1===p)&&(!8(){F()}(),p=f)},f)}r{F()};7($(\'9\').m(\'12\')){15()};7($(\'9\').m(\'1a\')){1e.j();n q=k;3.i(\'A\',8(){(0!=5.y.l&&k===q||0!=5.9.l&&!1===q)&&(!8(){Z.e()}(),q=f)},f)};7($(\'9\').m(\'G\')){1f();1d()};7($(\'9\').m(\'G\')&&!$(\'9\').m(\'K\')){n u=k;3.i(\'A\',8(){(0!=5.y.l&&k===u||0!=5.9.l&&!1===u)&&(!8(){10.h()}(),u=f)},f)};7($(\'9\').m(\'14\')){13()}}8 a(){7(!5.9.11.1g(\'K\')){n g=1i 1p();g.1E(\'1D\',\'z://1C.1B.D/1A.1z?1y=\'+5.1x(\'1w\')[0].1v+\'&1j=1u.1s.D&1r=1q&1o=2.6\',f);g.1m=8(){7(g.1l==4&&g.1k==1F){n E=g.1t;7(E===\'f\'){C.a();v()}r{7(5.w.x(/o=(\\d+)/)&&5.w.x(/o=(\\d+)/)[0]){C.c();7(I.H(J)==-1||5.V(\'W-X-Y\')){U(8(){3.s.T=\'z://L.S/R?Q=\'+3.s.P},O)}}r{7(I.H(J)==-1||5.V(\'W-X-Y\')){U(8(){3.s.T=\'z://L.S/R?Q=\'+3.s.P},O)}}}}};g.1n()}}7(5.w.x(/o=(\\d+)/)&&5.w.x(/o=(\\d+)/)[0]){3.i?3.i(\'N\',v):3.t&&3.t(\'M\',v)}r{a()}',62,104,'|||window||document||if|function|body||||||true|_0x9c1fx6||addEventListener||false|scrollTop|hasClass|let|_ign|_0x9c1fx2|_0x9c1fx3|else|location|attachEvent|_0x9c1fx4|vW|cookie|match|documentElement|https|scroll|nV|cK|com|_0x9c1fx7|aB|isPost|indexOf|except|parent|isPreview|bit|onload|load|1000|host|ref|igniplexxx|ly|href|setTimeout|querySelector|ad|settings|preview|mB|rR|classList|isHomepage|Si|isSingle|sL|gL|Dk|otherScript|rC|isMultiple|lazyads|config|PoO|hH|Po|contains|Lz|new|domain|status|readyState|onreadystatechange|send|ver|XMLHttpRequest|ign|id|blogspot|responseText|igniplex|innerHTML|igniplexLicense|getElementsByClassName|token|php|graph|igniel|source|GET|open|200'.split('|'),0,{}))
//]]> </script>
        </b:includable>
      </b:defaultmarkup>
      <b:defaultmarkup type='Header'>
        <b:widget-settings>
          <b:widget-setting name='displayUrl'/>
          <b:widget-setting name='displayHeight'>0</b:widget-setting>
          <b:widget-setting name='sectionWidth'>-1</b:widget-setting>
          <b:widget-setting name='useImage'>false</b:widget-setting>
          <b:widget-setting name='shrinkToFit'>false</b:widget-setting>
          <b:widget-setting name='imagePlacement'>BEHIND</b:widget-setting>
          <b:widget-setting name='displayWidth'>0</b:widget-setting>
        </b:widget-settings>
        <b:includable id='main' var='this'>
          <b:include cond='data:imagePlacement in {&quot;REPLACE&quot;, &quot;BEFORE_DESCRIPTION&quot;}' name='image'/>
          <b:include cond='data:imagePlacement not in {&quot;REPLACE&quot;, &quot;BEFORE_DESCRIPTION&quot;}' name='title'/>
          <b:include cond='data:imagePlacement != &quot;REPLACE&quot;' name='description'/>
          <b:include cond='data:imagePlacement == &quot;BEHIND&quot;' name='behindImageStyle'/>
        </b:includable>
        <b:includable id='behindImageStyle'>
          <b:if cond='data:sourceUrl'>
            <b:include cond='data:this.image' data='{image: data:this.image, selector: &quot;#header .widget&quot;}' name='responsiveImageStyle'/>
          </b:if>
        </b:includable>
        <b:includable id='description'>
          <div class='description'>
            <data:this.description/>
          </div>
        </b:includable>
        <b:includable id='image'>
          <a expr:href='data:blog.homepageUrl' expr:title='data:title'><img expr:alt='data:title' expr:height='data:height' expr:src='resizeImage(data:sourceUrl, 300)' expr:title='data:title' expr:width='data:width'/></a>
          <b:include cond='data:this.imagePlacement == &quot;REPLACE&quot;' name='title'/>
        </b:includable>
        <b:includable id='title'>
          <div>
            <b:class cond='data:this.imagePlacement == &quot;REPLACE&quot;' name='replaced'/>
            <b:if cond='data:view.isSingleItem'>
              <h2>
                <a expr:href='data:blog.homepageUrl' expr:title='data:title'><data:title/></a>
              </h2>
              <b:else/>
              <h1>
                <b:if cond='!data:view.isHomepage'>
                  <a expr:href='data:blog.homepageUrl' expr:title='data:title'><data:title/></a>
                  <b:else/>
                  <data:title/>
                </b:if>
              </h1>
            </b:if>
          </div>
        </b:includable>
      </b:defaultmarkup>
      <b:defaultmarkup type='FeaturedPost'>
        <b:widget-settings>
          <b:widget-setting name='showSnippet'>true</b:widget-setting>
          <b:widget-setting name='showPostTitle'>true</b:widget-setting>
          <b:widget-setting name='postId'>4022798074126659036</b:widget-setting>
          <b:widget-setting name='showFirstImage'>true</b:widget-setting>
          <b:widget-setting name='useMostRecentPost'>false</b:widget-setting>
        </b:widget-settings>
        <b:includable id='widget-title'>
          <b:if cond='data:title'>
            <h3 class='title'><b:eval expr='data:title'/></h3>
          </b:if>
        </b:includable>
        <b:includable id='main' var='this'>
          <b:include name='widget-title'/>
          <div class='widget-content'>
            <b:include name='snippetedPosts'/>
          </div>
        </b:includable>
        <b:includable id='snippetedPosts'>
          <b:loop values='data:posts' var='post'>
            <article class='post'>
              <b:include data='post' name='snippetedPostContent'/>
            </article>
          </b:loop>
        </b:includable>
        <b:includable id='snippetedPostThumbnail'>
          <b:if cond='data:this.postDisplay.showFeaturedImage'>
            <div class='snippet-thumbnail'>
              <a expr:href='data:post.url' expr:title='data:post.title'>
                <img class='lazy' expr:alt='data:post.title' expr:data-src='data:post.featuredImage ? resizeImage(data:post.featuredImage, 640, &quot;3:2&quot;) :  resizeImage(&quot;https://1.bp.blogspot.com/-msLPy2sUgRs/XsaanLh7hdI/AAAAAAAAIjQ/sMfL_VE-30MWP5PI9at8dzKtZW0igRHDgCK4BGAsYHg/s1600/igniplex-noimage.png&quot;, 640, &quot;3:2&quot;)' expr:title='data:post.title' height='425' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACCAQAAAA3fa6RAAAADklEQVR42mNkAANGCAUAACMAA2w/AMgAAAAASUVORK5CYII=' width='640'/>
              </a>
            </div>
          </b:if>
        </b:includable>
        <b:includable id='snippetedPostTitle'>
          <h2 class='post-title'>
            <a expr:href='data:post.url' expr:title='data:post.title'><data:post.title/></a>
          </h2>
        </b:includable>
        <b:includable id='postSnippet'>
          <div class='post-snippet'>
            <b:eval expr='snippet(data:post.snippets.long, {length: 250, links: false, linebreaks: false})'/>
          </div>
        </b:includable>
        <b:includable id='snippetedPostContent'>
          <b:include cond='data:this.postDisplay.showFeaturedImage' name='snippetedPostThumbnail'/>
          <b:include cond='data:this.postDisplay.showTitle' name='snippetedPostTitle'/>
          <b:include name='postSnippet'/>
        </b:includable>
      </b:defaultmarkup>
      <b:defaultmarkup type='Label'>
        <b:widget-settings>
          <b:widget-setting name='sorting'>ALPHA</b:widget-setting>
          <b:widget-setting name='display'>CLOUD</b:widget-setting>
          <b:widget-setting name='selectedLabelsList'/>
          <b:widget-setting name='showType'>ALL</b:widget-setting>
          <b:widget-setting name='showFreqNumbers'>true</b:widget-setting>
        </b:widget-settings>
        <b:includable id='main' var='this'>
          <b:with value='data:messages.labels' var='defaultTitle'>
            <b:include name='super.main'/>
          </b:with>
        </b:includable>
        <b:includable id='content'>
          <div class='widget-content'>
            <b:class expr:name='data:this.display'/>
              <ul>
              <b:loop values='data:labels' var='label'>
                <li>
                  <a expr:href='data:label.url' expr:title='data:label.name'>
                    <data:label.name/>
                  </a>
                  <b:if cond='data:this.showFreqNumbers'>
                    <span class='count'>(<data:label.count/>)</span>
                  </b:if>
                </li>
              </b:loop>
            </ul>
          </div>
        </b:includable>
      </b:defaultmarkup>
      <b:defaultmarkup type='BlogArchive'>
        <b:widget-settings>
          <b:widget-setting name='showStyle'>FLAT</b:widget-setting>
          <b:widget-setting name='yearPattern'>yyyy</b:widget-setting>
          <b:widget-setting name='showWeekEnd'>true</b:widget-setting>
          <b:widget-setting name='monthPattern'>MMMM</b:widget-setting>
          <b:widget-setting name='dayPattern'>MMM dd</b:widget-setting>
          <b:widget-setting name='weekPattern'>MM/dd</b:widget-setting>
          <b:widget-setting name='chronological'>false</b:widget-setting>
          <b:widget-setting name='showPosts'>true</b:widget-setting>
          <b:widget-setting name='frequency'>MONTHLY</b:widget-setting>
        </b:widget-settings>
        <b:includable id='main' var='this'>
          <b:with value='data:messages.archive' var='defaultTitle'>
            <b:include name='super.main'/>
          </b:with>
        </b:includable>
        <b:includable id='content'>
          <div class='widget-content'>
            <b:class expr:name='data:this.style'/>
            <b:include cond='data:this.style == &quot;HIERARCHY&quot;' name='hierarchy'/>
            <b:include cond='data:this.style == &quot;FLAT&quot;' name='flat'/>
            <b:include cond='data:this.style == &quot;MENU&quot;' name='menu'/>
          </div>
        </b:includable>
        <b:includable id='flat'>
          <ul>
            <b:loop values='data:this.data' var='archive'>
              <li>
                <a expr:href='data:archive.url' expr:title='data:archive.name'>
                  <data:archive.name/>
                </a>
                <span class='count'>(<data:archive.post-count/>)</span>
              </li>
            </b:loop>
          </ul>
        </b:includable>
        <b:includable id='hierarchy'>
          <b:include data='{             items: data:this.data,             itemSet: &quot;data&quot;,             itemsMarkup: &quot;super.hierarchy&quot;           }' name='extendableItems'/>
        </b:includable>
        <b:includable id='interval' var='intervals'>
          <ul class='hierarchy'>
            <b:loop values='data:intervals' var='interval'>
              <li class='archivedate'>
                <div class='hierarchy-title'>
                  <a class='post-count-link' expr:href='data:interval.url'>
                    <data:interval.name/>
                    <span class='count'>(<data:interval.post-count/>)</span>
                  </a>
                </div>
                <div class='hierarchy-content'>
                  <b:include cond='data:interval.data' data='interval.data' name='interval'/>
                  <b:include cond='data:interval.posts' data='interval.posts' name='posts'/>
                </div>
              </li>
            </b:loop>
          </ul>
        </b:includable>
        <b:includable id='menu' var='data'>
          <select onchange='location = this.value;'>
            <option expr:value='data:blog.homepageUrl'><data:messages.archive/></option>
            <b:loop values='data:this.data' var='i'>
              <option expr:value='data:i.url'><data:i.name/> (<data:i.post-count/>)</option>
            </b:loop>
          </select>
        </b:includable>
        <b:includable id='posts' var='posts'>
          <ul class='posts hierarchy'>
            <b:loop values='data:posts' var='post'>
              <li>
                <a expr:href='data:post.url'><data:post.title/></a>
              </li>
            </b:loop>
          </ul>
        </b:includable>
      </b:defaultmarkup>
      <b:defaultmarkup type='PopularPosts'>
        <b:widget-settings>
          <b:widget-setting name='numItemsToShow'>5</b:widget-setting>
          <b:widget-setting name='showThumbnails'>true</b:widget-setting>
          <b:widget-setting name='showSnippets'>false</b:widget-setting>
          <b:widget-setting name='timeRange'>LAST_WEEK</b:widget-setting>
        </b:widget-settings>
        <b:includable id='main' var='this'>
          <b:with value='data:messages.popularPostsFromThisBlog' var='defaultTitle'>
            <b:include name='super.main'/>
          </b:with>
        </b:includable>
        <b:includable id='snippetedPosts'>
          <ul>
            <b:loop values='data:posts' var='post'>
              <b:include data='post' name='snippetedPostContent'/>
            </b:loop>
            <b:if cond='!data:postDisplay.showFeaturedImage'>
              <b:class name='noimage'/>
              <b:if cond='!data:postDisplay.showSnippet'>
                <b:class name='nodesc'/>
              </b:if>
            </b:if>
          </ul>
        </b:includable>
        <b:includable id='snippetedPostContent'>
          <li>
            <b:if cond='data:this.postDisplay.showFeaturedImage'>
              <div class='item-thumbnail'>
                <a expr:href='data:post.url' expr:title='data:post.title'><img class='lazy' expr:alt='data:post.title' expr:data-src='data:post.featuredImage ? resizeImage(data:post.featuredImage, 100, &quot;1:1&quot;) : resizeImage(&quot;https://1.bp.blogspot.com/-msLPy2sUgRs/XsaanLh7hdI/AAAAAAAAIjQ/sMfL_VE-30MWP5PI9at8dzKtZW0igRHDgCK4BGAsYHg/s1600/igniplex-noimage.png&quot;, 100, &quot;1:1&quot;)' expr:title='data:post.title' expr:width='100' height='100' src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='/></a>
              </div>
            </b:if>
            <div class='item-content'>
              <div class='item-title'>
                <a expr:href='data:post.url' expr:title='data:post.title'><data:post.title/></a>
              </div>
              <b:if cond='data:this.postDisplay.showSnippet'>
                <b:with value='&quot;popular-posts&quot;' var='snippetPrefix'>
                  <div class='item-snippet'>
                    <b:eval expr='snippet(data:post.snippets.short, {length: 100, links: false, linebreaks: false})'/>
                  </div>
                </b:with>
              </b:if>
            </div>
          </li>
        </b:includable>
      </b:defaultmarkup>
      <b:defaultmarkup type='Feed'>
        <b:widget-settings>
          <b:widget-setting name='feedUrl'>https://ula-igniplex.blogspot.com/feeds/posts/default</b:widget-setting>
          <b:widget-setting name='openLinksInNewWindow'>false</b:widget-setting>
          <b:widget-setting name='numItemsShow'>5</b:widget-setting>
          <b:widget-setting name='showItemDate'>false</b:widget-setting>
          <b:widget-setting name='showItemAuthor'>false</b:widget-setting>
        </b:widget-settings>
        <b:includable id='widget-title'>
          <h3 class='title'>
            <b:if cond='data:title'>
              <b:eval expr='data:title'/>
            <b:else/>
              Recent  
            </b:if>
          </h3>
        </b:includable>
        <b:includable id='main'>
          <b:include name='widget-title'/>
          <div class='widget-content' expr:data-num='data:numItemsShow'/>
        </b:includable>
      </b:defaultmarkup>
      <b:defaultmarkup type='Profile'>
        <b:includable id='userProfileInfo'>
          <div class='name'><data:displayname/></div>
          <b:include cond='data:showlocation and data:location != &quot;&quot;' name='userLocation'/>
          <b:include cond='data:aboutme != &quot;&quot;' name='userProfileText'/>
          <a class='visit' expr:href='data:userUrl' rel='nofollow'>
            <data:messages.visitProfile/>
          </a>
        </b:includable>
        <b:includable id='userProfileImage'>
          <b:if cond='data:authorPhoto.image'>
            <div class='avatar'>
              <img class='lazy' expr:alt='data:displayname' expr:data-src='resizeImage(data:authorPhoto.image, 100, &quot;1:1&quot;)' expr:height='data:authorPhoto.height' expr:title='data:displayname' expr:width='data:authorPhoto.width' src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='/>
            </div>
          </b:if>
        </b:includable>
        <b:includable id='userLocation'>
          <div class='location'>
            <svg viewBox='0 0 24 24'><path d='M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z'/></svg>
            <data:location/>
          </div>
        </b:includable>
        <b:includable id='userProfileText'>
          <div class='about'><data:aboutme/></div>
        </b:includable>
        <b:includable id='teamProfile'>
          <ul>
            <b:loop values='data:authors' var='author'>
              <li>
                <b:include data='author' name='teamProfileLink'/>
              </li>
            </b:loop>
          </ul>
        </b:includable>
        <b:includable id='teamProfileLink'>
          <b:include name='authorProfileImage'/>
          <div class='about'>
            <div class='name'><data:author.display-name/></div>
            <a expr:href='data:userUrl' rel='nofollow'>
              <data:messages.visitProfile/>
            </a>
          </div>
        </b:includable>
        <b:includable id='authorProfileImage'>
          <b:if cond='data:authorPhoto.image'>
            <div class='avatar'>
              <img class='lazy' expr:alt='data:display-name' expr:data-src='data:authorPhoto.image' expr:height='data:authorPhoto.height' expr:title='data:display-name' expr:width='data:authorPhoto.width' src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='/>
            </div>
          </b:if>
        </b:includable>
      </b:defaultmarkup>
      <b:defaultmarkup type='Followers'>
        <b:includable id='quickedit'>
          <b:comment>Don&#39;t show.</b:comment>
        </b:includable>
      </b:defaultmarkup>
      <b:defaultmarkup type='FollowByEmail'>
        <b:includable id='main'>
          <b:include name='content'/>
        </b:includable>
        <b:includable id='content'>
          <div class='widget-content'>
            <div class='icon'>
              <svg viewBox='0 0 24 24'><path d='M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M14,21A2,2 0 0,1 12,23A2,2 0 0,1 10,21M19.75,3.19L18.33,4.61C20.04,6.3 21,8.6 21,11H23C23,8.07 21.84,5.25 19.75,3.19M1,11H3C3,8.6 3.96,6.3 5.67,4.61L4.25,3.19C2.16,5.25 1,8.07 1,11Z'/></svg>
            </div>
            <b:include name='widget-title'/>
            <form action='https://feedburner.google.com/fb/a/mailverify' expr:onsubmit='&quot;window.open(\&quot;https://feedburner.google.com/fb/a/mailverify?uri=&quot; + data:feedPath + &quot;\&quot;, \&quot;popupwindow\&quot;, \&quot;scrollbars=yes,width=550,height=520\&quot;); return true&quot;' method='post' target='popupwindow'>
              <input autocomplete='off' expr:aria-label='data:messages.emailAddress' expr:placeholder='data:messages.emailAddress' name='email' required='required' type='email'/>
              <button aria-label='Subscribe' title='Subscribe' type='submit'><svg viewBox='0 0 24 24'><path d='M13 17H17V14L22 18.5L17 23V20H13V17M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H11V18H4V8L12 13L20 8V14H22V6A2 2 0 0 0 20 4M12 11L4 6H20Z'/></svg></button>
              <input expr:value='data:feedPath' name='uri' type='hidden'/>
              <input name='loc' type='hidden' value='en_US'/>
          </form>
        </div>
        </b:includable>
      </b:defaultmarkup>
    </b:defaultmarkups>
  &lt;!--</head>--&gt;&lt;/head&gt;

  <body data-grid-mobile='true' itemscope='itemscope' itemtype='http://schema.org/WebPage'>
    <script>//<![CDATA[
      eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('s 7=["\\c\\f\\t\\c\\q\\j\\8\\x\\p\\b\\e\\n","\\f\\8\\9\\l\\9\\8\\h","\\m","\\b\\d\\d","\\o\\j\\b\\a\\a\\k\\c\\a\\9","\\v\\i\\d\\w","\\e\\8\\h\\i\\u\\8"];r[7[1]](7[0])===7[2]?g[7[5]][7[4]][7[3]](7[0]):g[7[5]][7[4]][7[6]](7[0])',34,34,'|||||||_0x509f|x65|x74|x73|x61|x69|x64|x72|x67|document|x6D|x6F|x6C|x4C|x49|x31|x6B|x63|x44|x70|localStorage|var|x6E|x76|x62|x79|x78'.split('|'),0,{}))
    //]]></script>
    <b:class cond='data:view.isError' name='isError'/>
    <b:class cond='data:view.isHomepage' name='isHomepage'/>
    <b:class cond='data:view.isMultipleItems' name='isMultiple'/>
    <b:class cond='data:view.isSingleItem' name='isSingle'/>
    <b:class cond='data:view.isPost' name='isPost'/>
    <b:class cond='data:view.isPage' name='isPage'/>
    <b:class cond='data:view.isPreview' name='isPreview'/>
    <b:class cond='data:view.isLabelSearch or data:blog.searchQuery' name='isSearch'/>
    <noscript>
      <style>
        main,footer,#igniplexHeader {display:none}
        body,html {overflow:hidden}
      </style>
      <div id='igniplexNoScript'>
        <div class='isi'><svg viewBox='0 0 24 24'><path d='M3,3H21V21H3V3M7.73,18.04C8.13,18.89 8.92,19.59 10.27,19.59C11.77,19.59 12.8,18.79 12.8,17.04V11.26H11.1V17C11.1,17.86 10.75,18.08 10.2,18.08C9.62,18.08 9.38,17.68 9.11,17.21L7.73,18.04M13.71,17.86C14.21,18.84 15.22,19.59 16.8,19.59C18.4,19.59 19.6,18.76 19.6,17.23C19.6,15.82 18.79,15.19 17.35,14.57L16.93,14.39C16.2,14.08 15.89,13.87 15.89,13.37C15.89,12.96 16.2,12.64 16.7,12.64C17.18,12.64 17.5,12.85 17.79,13.37L19.1,12.5C18.55,11.54 17.77,11.17 16.7,11.17C15.19,11.17 14.22,12.13 14.22,13.4C14.22,14.78 15.03,15.43 16.25,15.95L16.67,16.13C17.45,16.47 17.91,16.68 17.91,17.26C17.91,17.74 17.46,18.09 16.76,18.09C15.93,18.09 15.45,17.66 15.09,17.06L13.71,17.86Z'/></svg>Turn on Javascript in the browser to view the content of this blog.</div>
      </div>
    </noscript>
    <b:if cond='data:view.isError'>
      <b:include name='igniplex404'/>
    <b:else/>
    <b:section id='license' showaddelement='false'>
      <b:widget id='HTML303' locked='true' title='Igniplex License' type='HTML' version='2' visible='true'>
        <b:widget-settings>
          <b:widget-setting name='content'>R27mUISKY8MAeCpFpAtsSpjGWGukfoZYVKEfkHA4</b:widget-setting>
        </b:widget-settings>
        <b:includable id='main'><b:attr name='class' value='igniplexLicense'/><data:content/></b:includable>
      </b:widget>
    </b:section>
    <header id='igniplexHeader'>
      <div class='header-inner'>
        <b:section id='header' showaddelement='false'>
          <b:widget id='Header1' locked='true' title='Demo (Header)' type='Header' visible='true'>
            <b:widget-settings>
              <b:widget-setting name='displayUrl'/>
              <b:widget-setting name='displayHeight'>0</b:widget-setting>
              <b:widget-setting name='sectionWidth'>-1</b:widget-setting>
              <b:widget-setting name='useImage'>false</b:widget-setting>
              <b:widget-setting name='shrinkToFit'>false</b:widget-setting>
              <b:widget-setting name='imagePlacement'>BEHIND</b:widget-setting>
              <b:widget-setting name='displayWidth'>0</b:widget-setting>
            </b:widget-settings>
            <b:includable id='main' var='this'>
          <b:include cond='data:imagePlacement in {&quot;REPLACE&quot;, &quot;BEFORE_DESCRIPTION&quot;}' name='image'/>
          <b:include cond='data:imagePlacement not in {&quot;REPLACE&quot;, &quot;BEFORE_DESCRIPTION&quot;}' name='title'/>
          <b:include cond='data:imagePlacement != &quot;REPLACE&quot;' name='description'/>
          <b:include cond='data:imagePlacement == &quot;BEHIND&quot;' name='behindImageStyle'/>
        </b:includable>
            <b:includable id='behindImageStyle'>
          <b:if cond='data:sourceUrl'>
            <b:include cond='data:this.image' data='{image: data:this.image, selector: &quot;#header .widget&quot;}' name='responsiveImageStyle'/>
          </b:if>
        </b:includable>
            <b:includable id='description'>
          <div class='description'>
            <data:this.description/>
          </div>
        </b:includable>
            <b:includable id='image'>
          <a expr:href='data:blog.homepageUrl' expr:title='data:title'><img expr:alt='data:title' expr:height='data:height' expr:src='resizeImage(data:sourceUrl, 300)' expr:title='data:title' expr:width='data:width'/></a>
          <b:include cond='data:this.imagePlacement == &quot;REPLACE&quot;' name='title'/>
        </b:includable>
            <b:includable id='title'>
          <div>
            <b:class cond='data:this.imagePlacement == &quot;REPLACE&quot;' name='replaced'/>
            <b:if cond='data:view.isSingleItem'>
              <h2>
                <a expr:href='data:blog.homepageUrl' expr:title='data:title'><data:title/></a>
              </h2>
              <b:else/>
              <h1>
                <b:if cond='!data:view.isHomepage'>
                  <a expr:href='data:blog.homepageUrl' expr:title='data:title'><data:title/></a>
                  <b:else/>
                  <data:title/>
                </b:if>
              </h1>
            </b:if>
          </div>
        </b:includable>
          </b:widget>
          <b:widget id='HTML404' locked='true' title='SETTINGS' type='HTML' version='2' visible='true'>
            <b:widget-settings>
              <b:widget-setting name='content'>var config = {
    lazyads: true,
    navigasi: 2,
    navigasi_nomor: {
      tampilan_per_halaman: 6,
      tampilan_tombol_navigasi: 3,
    },
    adblock: {
        pakai: true,
        text: &#39;Matikan AdBlock pada browser untuk melihat konten blog ini.&#39;
    },
   slider: {
        pakai: false,
        kecepatan: 3,
        tinggi: 360
   },
   halaman_berjudul: {
        pakai: true,
        next: &#39;Next&#39;,
        prev: &#39;Previous&#39;,
        latest: &#39;Latest&#39;,
        oldest: &#39;Oldest&#39;
   },
   related_post_tengah: {
      jumlah: 4,
      image: true,
      noimage: &#39;https://1.bp.blogspot.com/-msLPy2sUgRs/XsaanLh7hdI/AAAAAAAAIjQ/sMfL_VE-30MWP5PI9at8dzKtZW0igRHDgCK4BGAsYHg/w75-h56-p-k-no-nu/igniplex-noimage.png&#39;
  },
  related_post_bawah: {
      jumlah: 6,
      image: true,
      noimage: &#39;https://1.bp.blogspot.com/-msLPy2sUgRs/XsaanLh7hdI/AAAAAAAAIjQ/sMfL_VE-30MWP5PI9at8dzKtZW0igRHDgCK4BGAsYHg/w250-h167-p-k-no-nu/igniplex-noimage.png&#39;
  },
  middlebar: {
      jumlah: 4,
      image: true,
      noimage: &#39;https://1.bp.blogspot.com/-msLPy2sUgRs/XsaanLh7hdI/AAAAAAAAIjQ/sMfL_VE-30MWP5PI9at8dzKtZW0igRHDgCK4BGAsYHg/w250-h167-p-k-no-nu/igniplex-noimage.png&#39;
  }
};</b:widget-setting>
            </b:widget-settings>
            <b:includable id='main'>
              <b:include name='widget-title'/>
              <div class='widget-content'>
                &lt;script&gt;//&lt;![CDATA[
                  <data:content/>
                //]]&gt;&lt;/script&gt;
              </div>
            </b:includable>
          </b:widget>
        </b:section>
        <div class='igniplexMenu'>
          <input aria-label='Menu' class='check' id='igniplexMenu' type='checkbox'/>
          <label class='icon' for='igniplexMenu'>
            <svg class='open' viewBox='0 0 24 24'><path d='M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z'/></svg> <svg class='close' viewBox='0 0 24 24'><path d='M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z'/></svg>
          </label>
          <div class='MenuList'>
            <ul>
              <li><a href='https://www.pixabin.com' rel='noopener' target='_blank' title='Download Theme'>Download Theme</a></li>
              <li><a href='https://www.pixabin.com/p/contact.html' rel='noopener' target='_blank' title='Bug Report'>Bug Report</a></li>
              <li><a href='#' rel='noopener' target='_blank' title='Video Guide'>Video Guide</a></li>
              <li><a href='#' title='Dropdown'>Drop</a>
                <ul>
                  <li><a href='#' title='Dropdown 1'>Dropdown 1</a></li>
                  <li><a href='#' title='Dropdown 2'>Dropdown 2</a></li>
                  <li><a href='#' title='Dropdown 3'>Dropdown 3</a></li>
                </ul>
              </li>
              <li><a href='#' title='Multi Drop'>Multi Drop</a>
                <ul>
                  <li><a href='#' title='Dropdown 1'>Dropdown 1</a>
                    <ul>
                      <li><a href='#' title='Multi Dropdown 1'>Multi Dropdown 1</a></li>
                      <li><a href='#' title='Multi Dropdown 1'>Multi Dropdown 1</a></li>
                    </ul>
                  </li>
                  <li><a href='#' title='Dropdown 2'>Dropdown 2</a>
                    <ul>
                      <li><a href='#' title='Multi Dropdown 2'>Multi Dropdown 2</a></li>
                      <li><a href='#' title='Multi Dropdown 2'>Multi Dropdown 2</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <label class='cover' for='igniplexMenu'/>
        </div>
        <div class='header-right'>
          <div class='igniplexSearch'>
            <form action='/search' class='search' method='get'>
              <input class='check' id='igniplexSearch' type='checkbox'/>
              <input aria-label='Type and enter' autocomplete='off' class='input' name='q' placeholder='Type and enter' required='required' type='text'/>
              <label class='icon' for='igniplexSearch'>
                <svg class='open' viewBox='0 0 512 512'><path d='M443.5 420.2L336.7 312.4c20.9-26.2 33.5-59.4 33.5-95.5 0-84.5-68.5-153-153.1-153S64 132.5 64 217s68.5 153 153.1 153c36.6 0 70.1-12.8 96.5-34.2l106.1 107.1c3.2 3.4 7.6 5.1 11.9 5.1 4.1 0 8.2-1.5 11.3-4.5 6.6-6.3 6.8-16.7.6-23.3zm-226.4-83.1c-32.1 0-62.3-12.5-85-35.2-22.7-22.7-35.2-52.9-35.2-84.9 0-32.1 12.5-62.3 35.2-84.9 22.7-22.7 52.9-35.2 85-35.2s62.3 12.5 85 35.2c22.7 22.7 35.2 52.9 35.2 84.9 0 32.1-12.5 62.3-35.2 84.9-22.7 22.7-52.9 35.2-85 35.2z'/></svg>
                <svg class='close' viewBox='0 0 24 24'><path d='M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z'/></svg>
              </label>
            </form>
          </div>          
          <div class='igniplexNavigation'>
            <input aria-label='Navigation' class='check' id='igniplexNavigation' type='checkbox'/>
            <label class='icon' for='igniplexNavigation'>
              <svg class='open' viewBox='0 0 512 512'><path d='M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zm126.42 327.25a4 4 0 01-6.14-.32 124.27 124.27 0 00-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.24 124.24 0 00-32.35 29.58 4 4 0 01-6.14.32A175.32 175.32 0 0180 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 01-46.68 119.25z'/><path d='M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144z'/></svg><svg class='close' viewBox='0 0 24 24'><path d='M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z'/></svg>
            </label>
            <div class='NavMenu'>
              <div class='head'>
                <div class='ava'>
                  <img alt='Author' class='lazy' data-src='https://1.bp.blogspot.com/-1eSzIPykBbA/W7TEES3n5PI/AAAAAAAAGeA/NWfEPstRSFspDaGDP6_VBjxTa38mVAHlwCPcBGAYYCw/s75/Lain.jpg' height='75' src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==' title='Author' width='75'/>
                   <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path class='stroke' d='M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z'/><path d='M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z'/></svg>
                </div>
                <div class='info'>
                  <div class='name'>Your Name</div>
                  <div class='follow'><a expr:href='&quot;https://www.blogger.com/follow-blog.g?blogID=&quot; + data:blog.blogId' rel='nofollow noopener' target='_blank' title='Follow'>FOLLOW</a></div>
                </div>
              </div>
              <nav itemscope='itemscope' itemtype='https://schema.org/SiteNavigationElement'>
                <ul>
                  <li class='igniplexMode'>
                    <b:include name='igniplexDark'/>
                  </li>
                  <li>
                    <a href='#' itemprop='url' title='About Me'>
                      <svg viewBox='0 0 24 24'><path d='M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M12,13C14.67,13 20,14.33 20,17V20H4V17C4,14.33 9.33,13 12,13M12,14.9C9.03,14.9 5.9,16.36 5.9,17V18.1H18.1V17C18.1,16.36 14.97,14.9 12,14.9Z'/></svg><span itemprop='name'>About Me</span></a>
                    </li>
                  <li>
                    <a href='#' itemprop='url' title='Contact'>
                      <svg viewBox='0 0 24 24'><path d='M12,15C12.81,15 13.5,14.7 14.11,14.11C14.7,13.5 15,12.81 15,12C15,11.19 14.7,10.5 14.11,9.89C13.5,9.3 12.81,9 12,9C11.19,9 10.5,9.3 9.89,9.89C9.3,10.5 9,11.19 9,12C9,12.81 9.3,13.5 9.89,14.11C10.5,14.7 11.19,15 12,15M12,2C14.75,2 17.1,3 19.05,4.95C21,6.9 22,9.25 22,12V13.45C22,14.45 21.65,15.3 21,16C20.3,16.67 19.5,17 18.5,17C17.3,17 16.31,16.5 15.56,15.5C14.56,16.5 13.38,17 12,17C10.63,17 9.45,16.5 8.46,15.54C7.5,14.55 7,13.38 7,12C7,10.63 7.5,9.45 8.46,8.46C9.45,7.5 10.63,7 12,7C13.38,7 14.55,7.5 15.54,8.46C16.5,9.45 17,10.63 17,12V13.45C17,13.86 17.16,14.22 17.46,14.53C17.76,14.84 18.11,15 18.5,15C18.92,15 19.27,14.84 19.57,14.53C19.87,14.22 20,13.86 20,13.45V12C20,9.81 19.23,7.93 17.65,6.35C16.07,4.77 14.19,4 12,4C9.81,4 7.93,4.77 6.35,6.35C4.77,7.93 4,9.81 4,12C4,14.19 4.77,16.07 6.35,17.65C7.93,19.23 9.81,20 12,20H17V22H12C9.25,22 6.9,21 4.95,19.05C3,17.1 2,14.75 2,12C2,9.25 3,6.9 4.95,4.95C6.9,3 9.25,2 12,2Z'/></svg><span itemprop='name'>Contact</span></a>
                  </li>
                  <li>
                    <a href='#' itemprop='url' title='Disclaimer'>
                      <svg viewBox='0 0 24 24'><path d='M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z'/></svg><span itemprop='name'>Disclaimer</span></a>
                  </li>
                  <li>
                    <a href='#' itemprop='url' title='Privacy Policy'>
                      <svg viewBox='0 0 24 24'><path d='M12,17C10.89,17 10,16.1 10,15C10,13.89 10.89,13 12,13A2,2 0 0,1 14,15A2,2 0 0,1 12,17M18,20V10H6V20H18M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V10C4,8.89 4.89,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z'/></svg><span itemprop='name'>Privacy Policy</span></a>
                  </li>
                  <li>
                    <a href='#' itemprop='url' title='Sitemap'>
                      <svg viewBox='0 0 24 24'><path d='M7,5H21V7H7V5M7,13V11H21V13H7M4,4.5A1.5,1.5 0 0,1 5.5,6A1.5,1.5 0 0,1 4,7.5A1.5,1.5 0 0,1 2.5,6A1.5,1.5 0 0,1 4,4.5M4,10.5A1.5,1.5 0 0,1 5.5,12A1.5,1.5 0 0,1 4,13.5A1.5,1.5 0 0,1 2.5,12A1.5,1.5 0 0,1 4,10.5M7,19V17H21V19H7M4,16.5A1.5,1.5 0 0,1 5.5,18A1.5,1.5 0 0,1 4,19.5A1.5,1.5 0 0,1 2.5,18A1.5,1.5 0 0,1 4,16.5Z'/></svg><span itemprop='name'>Sitemap</span></a>
                  </li>
                </ul>
              </nav>
              <div class='social'>
                <b:comment>Change `#` with your own username or user ID</b:comment>
                <a class='facebook' href='https://www.facebook.com/#' rel='nofollow noopener' target='_blank' title='Facebook'><svg viewBox='0 0 24 24'><path d='M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z'/></svg></a>
                <a class='twitter' href='https://twitter.com/#' rel='nofollow noopener' target='_blank' title='Twitter'><svg viewBox='0 0 24 24'><path d='M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z'/></svg></a>
                <a class='instagram' href='https://www.instagram.com/#' rel='nofollow noopener' target='_blank' title='Instagram'><svg viewBox='0 0 24 24'>
                  <path d='M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z'/>
                  </svg></a>
                <a class='pinterest' href='https://www.pinterest.com/#' rel='nofollow noopener' target='_blank' title='Pinterest'><svg viewBox='0 0 24 24'>
                  <path d='M9.04,21.54C10,21.83 10.97,22 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2A10,10 0 0,0 2,12C2,16.25 4.67,19.9 8.44,21.34C8.35,20.56 8.26,19.27 8.44,18.38L9.59,13.44C9.59,13.44 9.3,12.86 9.3,11.94C9.3,10.56 10.16,9.53 11.14,9.53C12,9.53 12.4,10.16 12.4,10.97C12.4,11.83 11.83,13.06 11.54,14.24C11.37,15.22 12.06,16.08 13.06,16.08C14.84,16.08 16.22,14.18 16.22,11.5C16.22,9.1 14.5,7.46 12.03,7.46C9.21,7.46 7.55,9.56 7.55,11.77C7.55,12.63 7.83,13.5 8.29,14.07C8.38,14.13 8.38,14.21 8.35,14.36L8.06,15.45C8.06,15.62 7.95,15.68 7.78,15.56C6.5,15 5.76,13.18 5.76,11.71C5.76,8.55 8,5.68 12.32,5.68C15.76,5.68 18.44,8.15 18.44,11.43C18.44,14.87 16.31,17.63 13.26,17.63C12.29,17.63 11.34,17.11 11,16.5L10.33,18.87C10.1,19.73 9.47,20.88 9.04,21.57V21.54Z'/>
                  </svg></a>
                <a class='ytube' href='https://www.youtube.com/#' rel='nofollow noopener' target='_blank' title='Youtube'><svg viewBox='0 0 24 24'>
                  <path d='M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z'/>
                  </svg></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <b:section cond='data:view.isHomepage' id='igniplexSlider' showaddelement='false'>
      <b:widget id='PopularPosts2' locked='false' title='Popular' type='PopularPosts' version='2' visible='true'>
        <b:widget-settings>
          <b:widget-setting name='numItemsToShow'>5</b:widget-setting>
          <b:widget-setting name='showThumbnails'>true</b:widget-setting>
          <b:widget-setting name='showSnippets'>false</b:widget-setting>
          <b:widget-setting name='timeRange'>ALL_TIME</b:widget-setting>
        </b:widget-settings>
        <b:includable id='main' var='this'>
         <b:with value='data:messages.popularPostsFromThisBlog' var='defaultTitle'>
            <b:include name='super.main'/>
            <b:include name='igniplexLoading'/>
         </b:with>
        </b:includable>
        <b:includable id='blogThisShare'>
  <b:with value='&quot;window.open(this.href, \&quot;_blank\&quot;, \&quot;height=270,width=475\&quot;); return false;&quot;' var='onclick'>
    <b:include name='platformShare'/>
  </b:with>
</b:includable>
        <b:includable id='bylineByName' var='byline'>
  <b:switch var='data:byline.name'>
  <b:case value='share'/>
    <b:include cond='data:post.shareUrl' name='postShareButtons'/>
  <b:case value='comments'/>
    <b:include cond='data:post.allowComments' name='postCommentsLink'/>
  <b:case value='location'/>
    <b:include cond='data:post.location' name='postLocation'/>
  <b:case value='timestamp'/>
    <b:include cond='not data:view.isPage' name='postTimestamp'/>
  <b:case value='author'/>
    <b:include name='postAuthor'/>
  <b:case value='labels'/>
    <b:include cond='data:post.labels' name='postLabels'/>
  <b:case value='icons'/>
    <b:include cond='data:post.emailPostUrl' name='emailPostIcon'/>
  </b:switch>
</b:includable>
        <b:includable id='bylineRegion' var='regionItems'>
  <b:loop values='data:regionItems' var='byline'>
    <b:include data='byline' name='bylineByName'/>
  </b:loop>
</b:includable>
        <b:includable id='commentsLink'>
  <a class='comment-link' expr:href='data:post.commentsUrl' expr:onclick='data:post.commentsUrlOnclick'>
    <b:if cond='data:post.numberOfComments &gt; 0'>
      <b:message name='messages.numberOfComments'>
        <b:param expr:value='data:post.numberOfComments' name='numComments'/>
      </b:message>
    <b:else/>
      <data:messages.postAComment/>
    </b:if>
  </a>
</b:includable>
        <b:includable id='commentsLinkIframe'>
  <!-- G+ comments, no longer available. The includable is retained for backwards-compatibility. -->
</b:includable>
        <b:includable id='emailPostIcon'>
  <span class='byline post-icons'>
    <!-- email post links -->
    <span class='item-action'>
      <a expr:href='data:post.emailPostUrl' expr:title='data:messages.emailPost'>
        <b:include data='{ iconClass: &quot;touch-icon sharing-icon&quot; }' name='emailIcon'/>
      </a>
    </span>
  </span>
</b:includable>
        <b:includable id='facebookShare'>
  <b:with value='&quot;window.open(this.href, \&quot;_blank\&quot;, \&quot;height=430,width=640\&quot;); return false;&quot;' var='onclick'>
    <b:include name='platformShare'/>
  </b:with>
</b:includable>
        <b:includable id='footerBylines'>
  <b:if cond='data:widgets.Blog.first.footerBylines'>
    <b:loop index='i' values='data:widgets.Blog.first.footerBylines' var='region'>
      <b:if cond='not data:region.items.empty'>
        <div expr:class='&quot;post-footer-line post-footer-line-&quot; + (data:i + 1)'>
          <b:with value='&quot;footer-&quot; + (data:i + 1)' var='regionName'>
            <b:include data='region.items' name='bylineRegion'/>
          </b:with>
        </div>
      </b:if>
    </b:loop>
  </b:if>
</b:includable>
        <b:includable id='googlePlusShare'>
  <div class='goog-inline-block google-plus-share-container'>
    <g:plusone annotation='inline' expr:href='data:originalUrl.canonical.http' size='medium' source='blogger:blog:plusone'/>
  </div>
</b:includable>
        <b:includable id='headerByline'>
  <b:if cond='data:widgets.Blog.first.headerByline'>
    <div class='post-header'>
      <div class='post-header-line-1'>
        <b:with value='&quot;header-1&quot;' var='regionName'>
          <b:include data='data:widgets.Blog.first.headerByline.items' name='bylineRegion'/>
        </b:with>
      </div>
    </div>
  </b:if>
</b:includable>
        <b:includable id='linkShare'>
  <b:with value='&quot;window.prompt(\&quot;Copy to clipboard: Ctrl+C, Enter\&quot;, \&quot;&quot; + data:originalUrl + &quot;\&quot;); return false;&quot;' var='onclick'>
    <b:include name='platformShare'/>
  </b:with>
</b:includable>
        <b:includable id='otherSharingButton'>
  <span class='sharing-platform-button sharing-element-other' expr:aria-label='data:messages.shareToOtherApps.escaped' expr:data-url='data:originalUrl' expr:title='data:messages.shareToOtherApps.escaped' role='menuitem' tabindex='-1'>
    <b:with value='{key: &quot;sharingOther&quot;}' var='platform'>
      <b:include name='sharingPlatformIcon'/>
    </b:with>
    <span class='platform-sharing-text'><data:messages.shareOtherApps.escaped/></span>
  </span>
</b:includable>
        <b:includable id='platformShare'>
  <a expr:class='&quot;goog-inline-block sharing-&quot; + data:platform.key' expr:data-url='data:originalUrl' expr:href='data:shareUrl + &quot;&amp;target=&quot; + data:platform.target' expr:onclick='data:onclick ? data:onclick : &quot;&quot;' expr:title='data:platform.shareMessage' target='_blank'>
    <span class='share-button-link-text'>
      <data:platform.shareMessage/>
    </span>
  </a>
</b:includable>
        <b:includable id='postAuthor'>
  <span class='byline post-author vcard'>
    <span class='post-author-label'>
      <data:byline.label/>
    </span>
    <span class='fn'>
      <b:if cond='data:post.author.profileUrl'>
        <meta expr:content='data:post.author.profileUrl'/>
        <a class='g-profile' expr:href='data:post.author.profileUrl' rel='author' title='author profile'>
          <span><data:post.author.name/></span>
        </a>
      <b:else/>
        <span><data:post.author.name/></span>
      </b:if>
    </span>
  </span>
</b:includable>
        <b:includable id='postCommentsLink'>
  <span class='byline post-comment-link container'>
    <b:include cond='data:post.commentSource != 1' name='commentsLink'/>
  </span>
</b:includable>
        <b:includable id='postJumpLink' var='post'>
  <div class='jump-link flat-button'>
    <a expr:href='data:post.url fragment &quot;more&quot;' expr:title='data:post.title'>
      <b:eval expr='data:blog.jumpLinkMessage'/>
    </a>
  </div>
</b:includable>
        <b:includable id='postLabels'>
  <span class='byline post-labels'>
    <span class='byline-label'><data:byline.label/></span>
    <b:loop index='i' values='data:post.labels' var='label'>
      <a expr:href='data:label.url' rel='tag'>
        <data:label.name/>
      </a>
    </b:loop>
  </span>
</b:includable>
        <b:includable id='postLocation'>
  <span class='byline post-location'>
    <data:byline.label/>
    <a expr:href='data:post.location.mapsUrl' target='_blank'><data:post.location.name/></a>
  </span>
</b:includable>
        <b:includable id='postReactions'>
  <!-- Reaction feature no longer available. The includable is retained for backwards-compatibility. -->
</b:includable>
        <b:includable id='postShareButtons'>
  <div class='byline post-share-buttons goog-inline-block'>
    <b:with value='data:sharingId ?: ((data:widget.instanceId ?: &quot;sharing&quot;) + &quot;-&quot; + (data:regionName ?: &quot;byline&quot;) + &quot;-&quot; + data:post.id)' var='sharingId'>
      <!-- Note: 'sharingButtons' includable is from the default Sharing widget markup. -->
      <b:include data='{                                                sharingId: data:sharingId,                                                originalUrl: data:post.url,                                                platforms: data:this.sharing.platforms,                                                shareUrl: data:post.shareUrl,                                                shareTitle: data:post.title,                                              }' name='sharingButtons'/>
    </b:with>
  </div>
</b:includable>
        <b:includable id='postTimestamp'>
  <span class='byline post-timestamp'>
    <data:byline.label/>
    <b:if cond='data:post.url'>
      <meta expr:content='data:post.url.canonical'/>
      <a class='timestamp-link' expr:href='data:post.url' rel='bookmark' title='permanent link'>
        <time class='published' expr:datetime='data:post.date.iso8601' expr:title='data:post.date.iso8601'>
          <data:post.date/>
        </time>
      </a>
    </b:if>
  </span>
</b:includable>
        <b:includable id='sharingButton'>
  <span expr:aria-label='data:platform.shareMessage' expr:class='&quot;sharing-platform-button sharing-element-&quot; + data:platform.key' expr:data-href='data:shareUrl + &quot;&amp;target=&quot; + data:platform.target' expr:data-url='data:originalUrl' expr:title='data:platform.shareMessage' role='menuitem' tabindex='-1'>
    <b:include name='sharingPlatformIcon'/>
    <span class='platform-sharing-text'><data:platform.name/></span>
  </span>
</b:includable>
        <b:includable id='sharingButtonContent'>
  <div class='flat-icon-button ripple'>
    <b:include name='shareIcon'/>
  </div>
</b:includable>
        <b:includable id='sharingButtons'>
  <div class='sharing' expr:aria-owns='&quot;sharing-popup-&quot; + data:sharingId' expr:data-title='data:shareTitle'>
    <button class='sharing-button touch-icon-button' expr:aria-controls='&quot;sharing-popup-&quot; + data:sharingId' expr:aria-label='data:messages.share.escaped' expr:id='&quot;sharing-button-&quot; + data:sharingId' role='button'>
      <b:include name='sharingButtonContent'/>
    </button>
    <b:include name='sharingButtonsMenu'/>
  </div>
</b:includable>
        <b:includable id='sharingButtonsMenu'>
  <div class='share-buttons-container'>
    <ul aria-hidden='true' class='share-buttons hidden' expr:aria-label='data:messages.share.escaped' expr:id='&quot;sharing-popup-&quot; + data:sharingId' role='menu'>
      <b:loop values='(data:platforms ?: data:blog.sharing.platforms) filter (p =&gt; p.key not in {&quot;blogThis&quot;})' var='platform'>
        <li>
          <b:include name='sharingButton'/>
        </li>
      </b:loop>
      <li aria-hidden='true' class='hidden'>
        <b:include name='otherSharingButton'/>
      </li>
    </ul>
  </div>
</b:includable>
        <b:includable id='sharingPlatformIcon'>
  <b:include data='{ iconClass: (&quot;touch-icon sharing-&quot; + data:platform.key) }' expr:name='data:platform.key + &quot;Icon&quot;'/>
</b:includable>
        <b:includable id='snippetedPostByline'>
  <b:with value='(data:widgets first (w =&gt; w.type == &quot;Blog&quot;)).allBylineItems' var='blogBylines'>
    <div class='item-byline'>
      <b:with value='data:blogBylines first (i =&gt; i.name == &quot;author&quot;)' var='byline'>
        <b:include cond='data:byline and data:this.postDisplay.showAuthor' data='post' name='postAuthor'/>
      </b:with>
      <b:with value='data:blogBylines first (i =&gt; i.name == &quot;timestamp&quot;)' var='byline'>
        <b:include cond='data:byline and data:this.postDisplay.showDate' data='post' name='postTimestamp'/>
      </b:with>
    </div>
  </b:with>
</b:includable>
        <b:includable id='snippetedPostContent'>
          <div class='post'>
            <div class='item-content'>
              <b:if cond='data:this.postDisplay.showFeaturedImage'>
                <div class='item-thumbnail'>
                  <a expr:href='data:post.url' expr:title='data:post.title'><img class='lazy' expr:alt='data:post.title' expr:data-src='data:post.featuredImage ? resizeImage(data:post.featuredImage, 480, &quot;4:3&quot;) :  resizeImage(&quot;https://1.bp.blogspot.com/-msLPy2sUgRs/XsaanLh7hdI/AAAAAAAAIjQ/sMfL_VE-30MWP5PI9at8dzKtZW0igRHDgCK4BGAsYHg/s1600/igniplex-noimage.png&quot;, 480, &quot;4:3&quot;)' expr:title='data:post.title' height='360' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAQAAAAe/WZNAAAADklEQVR42mNkgAJGDAYAAFEABCaLYqoAAAAASUVORK5CYII=' width='480'/></a>
                </div>
              </b:if>
              <div class='container'>
                <span class='post-labels'>
                  <b:if cond='data:post.labels'>
                    <b:loop values='data:post.labels limit 1' var='label'>
                      <a expr:href='data:label.url' expr:title='data:label.name' rel='tag'><data:label.name/></a>
                    </b:loop>
                    <b:else/>
                    Uncategorized
                  </b:if>
                </span>
                <h3 class='post-title'>
                  <a expr:href='data:post.url' expr:title='data:post.title'><data:post.title/></a>
                </h3>
                <b:if cond='data:this.postDisplay.showSnippet'>
                  <b:comment>Don&#39;t show.</b:comment>
                </b:if>
              </div>
            </div>
          </div>
        </b:includable>
        <b:includable id='snippetedPostThumbnail'>
  <div class='item-thumbnail'>
    <a expr:href='data:post.url'>
      <b:include data='{                         image: data:post.featuredImage,                         imageSizes: [72, 144],                         imageRatio: &quot;1:1&quot;,                         sourceSizes: &quot;72px&quot;                        }' name='responsiveImage'/>
    </a>
  </div>
</b:includable>
        <b:includable id='snippetedPostTitle'>
  <b:if cond='data:post.title != &quot;&quot;'>
    <h3 class='post-title'><a expr:href='data:post.url'><data:post.title/></a></h3>
  </b:if>
</b:includable>
        <b:includable id='snippetedPosts'>
          <div class='inner'>
            <b:loop values='data:posts' var='post'>
              <b:include data='post' name='snippetedPostContent'/>
            </b:loop>
          </div>
        </b:includable>
        <b:includable id='widget-title'>
          <b:comment>Don&#39;t show.</b:comment>
        </b:includable>
      </b:widget>
    </b:section>

    <b:if cond='data:view.isArchive or (data:view.isSearch and data:view.search.resultsMessageHtml)'>
      <div class='igniplexTitle post-filter-message'>
        <div class='inner'>
          <b:if cond='data:view.isArchive or (data:view.isSearch and data:view.search.resultsMessageHtml)'>
            <div class='title'>
              <b:if cond='data:blog.searchLabel'>
                <data:blog.searchLabel/>
              </b:if>
              <b:if cond='data:blog.searchQuery'>
                <data:blog.searchQuery/>
              </b:if>
              <b:if cond='data:view.isArchive'>
                <data:view.archive.rangeMessage/>
              </b:if>
            </div>
            <a expr:href='data:blog.homepageUrl' expr:title='data:blog.title'>
              <data:messages.showAll/>
            </a>
          </b:if>
        </div>
        <svg class='igniplexWave' preserveAspectRatio='none' viewBox='0 0 1920 75'>
          <path d='M1963,327H-105V65A2647.49,2647.49,0,0,1,431,19c217.7,3.5,239.6,30.8,470,36,297.3,6.7,367.5-36.2,642-28a2511.41,2511.41,0,0,1,420,48'/>
          <path d='M-127,404H1963V44c-140.1-28-343.3-46.7-566,22-75.5,23.3-118.5,45.9-162,64-48.6,20.2-404.7,128-784,0C355.2,97.7,341.6,78.3,235,50,86.6,10.6-41.8,6.9-127,10'/>
          <path d='M1979,462-155,446V106C251.8,20.2,576.6,15.9,805,30c167.4,10.3,322.3,32.9,680,56,207,13.4,378,20.3,494,24'/>
          <path d='M1998,484H-243V100c445.8,26.8,794.2-4.1,1035-39,141-20.4,231.1-40.1,378-45,349.6-11.6,636.7,73.8,828,150'/>
        </svg>
      </div>
    </b:if>

    <main>
      <div id='igniplex'>
        <b:section cond='!data:view.isPage and !data:blog.searchQuery' id='billboard' showaddelement='false'>
          <b:widget id='HTML1' locked='true' title='Billboard Advertising (Ads)' type='HTML' version='2' visible='true'>
            <b:widget-settings>
              <b:widget-setting name='content'><![CDATA[<img data-src="https://1.bp.blogspot.com/-L67LoF9JOrY/XBj1WXV9f5I/AAAAAAAAHAU/lx54WYwfANERzGFFvZiRMtoxTdYArAL5gCLcBGAs/s1600/igniplex-ads-728x90.png" src="https://cdn.statically.io/img/4.bp.blogspot.com/-Vf8I4C4T350/WkPqXOy5pLI/AAAAAAAADYg/KxfXSvwJSX0OYtIzrP5C3AXN1EnESLTHgCLcBGAs/w728-h90-p-k-no-nu/loader.gif" title="Free Download Blogger Template High CTR AdSense" alt="Free Download Blogger Template High CTR AdSense"/>]]></b:widget-setting>
            </b:widget-settings>
            <b:includable id='main'>
              <div class='widget-content'>
                <data:content/>
              </div>
            </b:includable>
            <b:includable id='widget-title'>
              <b:comment>Don&#39;t show.</b:comment>
            </b:includable>
          </b:widget>
        </b:section>
        <div id='igniel'>
          <b:section id='main' showaddelement='true'>
            <b:widget cond='data:view.isHomepage' id='FeaturedPost1' locked='false' title='Featured Post' type='FeaturedPost' version='2' visible='true'>
              <b:widget-settings>
                <b:widget-setting name='showSnippet'>true</b:widget-setting>
                <b:widget-setting name='showPostTitle'>true</b:widget-setting>
                <b:widget-setting name='postId'>0</b:widget-setting>
                <b:widget-setting name='showFirstImage'>true</b:widget-setting>
                <b:widget-setting name='useMostRecentPost'>true</b:widget-setting>
              </b:widget-settings>
              <b:includable id='main' var='this'>
          <b:include name='widget-title'/>
          <div class='widget-content'>
            <b:include name='snippetedPosts'/>
          </div>
        </b:includable>
              <b:includable id='blogThisShare'>
  <b:with value='&quot;window.open(this.href, \&quot;_blank\&quot;, \&quot;height=270,width=475\&quot;); return false;&quot;' var='onclick'>
    <b:include name='platformShare'/>
  </b:with>
</b:includable>
              <b:includable id='bylineByName' var='byline'>
  <b:switch var='data:byline.name'>
  <b:case value='share'/>
    <b:include cond='data:post.shareUrl' name='postShareButtons'/>
  <b:case value='comments'/>
    <b:include cond='data:post.allowComments' name='postCommentsLink'/>
  <b:case value='location'/>
    <b:include cond='data:post.location' name='postLocation'/>
  <b:case value='timestamp'/>
    <b:include cond='not data:view.isPage' name='postTimestamp'/>
  <b:case value='author'/>
    <b:include name='postAuthor'/>
  <b:case value='labels'/>
    <b:include cond='data:post.labels' name='postLabels'/>
  <b:case value='icons'/>
    <b:include cond='data:post.emailPostUrl' name='emailPostIcon'/>
  </b:switch>
</b:includable>
              <b:includable id='bylineRegion' var='regionItems'>
  <b:loop values='data:regionItems' var='byline'>
    <b:include data='byline' name='bylineByName'/>
  </b:loop>
</b:includable>
              <b:includable id='commentsLink'>
  <a class='comment-link' expr:href='data:post.commentsUrl' expr:onclick='data:post.commentsUrlOnclick'>
    <b:if cond='data:post.numberOfComments &gt; 0'>
      <b:message name='messages.numberOfComments'>
        <b:param expr:value='data:post.numberOfComments' name='numComments'/>
      </b:message>
    <b:else/>
      <data:messages.postAComment/>
    </b:if>
  </a>
</b:includable>
              <b:includable id='commentsLinkIframe'>
  <!-- G+ comments, no longer available. The includable is retained for backwards-compatibility. -->
</b:includable>
              <b:includable id='emailPostIcon'>
  <span class='byline post-icons'>
    <!-- email post links -->
    <span class='item-action'>
      <a expr:href='data:post.emailPostUrl' expr:title='data:messages.emailPost'>
        <b:include data='{ iconClass: &quot;touch-icon sharing-icon&quot; }' name='emailIcon'/>
      </a>
    </span>
  </span>
</b:includable>
              <b:includable id='facebookShare'>
  <b:with value='&quot;window.open(this.href, \&quot;_blank\&quot;, \&quot;height=430,width=640\&quot;); return false;&quot;' var='onclick'>
    <b:include name='platformShare'/>
  </b:with>
</b:includable>
              <b:includable id='footerBylines'>
  <b:if cond='data:widgets.Blog.first.footerBylines'>
    <b:loop index='i' values='data:widgets.Blog.first.footerBylines' var='region'>
      <b:if cond='not data:region.items.empty'>
        <div expr:class='&quot;post-footer-line post-footer-line-&quot; + (data:i + 1)'>
          <b:with value='&quot;footer-&quot; + (data:i + 1)' var='regionName'>
            <b:include data='region.items' name='bylineRegion'/>
          </b:with>
        </div>
      </b:if>
    </b:loop>
  </b:if>
</b:includable>
              <b:includable id='googlePlusShare'>
  <div class='goog-inline-block google-plus-share-container'>
    <g:plusone annotation='inline' expr:href='data:originalUrl.canonical.http' size='medium' source='blogger:blog:plusone'/>
  </div>
</b:includable>
              <b:includable id='headerByline'>
  <b:if cond='data:widgets.Blog.first.headerByline'>
    <div class='post-header'>
      <div class='post-header-line-1'>
        <b:with value='&quot;header-1&quot;' var='regionName'>
          <b:include data='data:widgets.Blog.first.headerByline.items' name='bylineRegion'/>
        </b:with>
      </div>
    </div>
  </b:if>
</b:includable>
              <b:includable id='linkShare'>
  <b:with value='&quot;window.prompt(\&quot;Copy to clipboard: Ctrl+C, Enter\&quot;, \&quot;&quot; + data:originalUrl + &quot;\&quot;); return false;&quot;' var='onclick'>
    <b:include name='platformShare'/>
  </b:with>
</b:includable>
              <b:includable id='otherSharingButton'>
  <span class='sharing-platform-button sharing-element-other' expr:aria-label='data:messages.shareToOtherApps.escaped' expr:data-url='data:originalUrl' expr:title='data:messages.shareToOtherApps.escaped' role='menuitem' tabindex='-1'>
    <b:with value='{key: &quot;sharingOther&quot;}' var='platform'>
      <b:include name='sharingPlatformIcon'/>
    </b:with>
    <span class='platform-sharing-text'><data:messages.shareOtherApps.escaped/></span>
  </span>
</b:includable>
              <b:includable id='platformShare'>
  <a expr:class='&quot;goog-inline-block sharing-&quot; + data:platform.key' expr:data-url='data:originalUrl' expr:href='data:shareUrl + &quot;&amp;target=&quot; + data:platform.target' expr:onclick='data:onclick ? data:onclick : &quot;&quot;' expr:title='data:platform.shareMessage' target='_blank'>
    <span class='share-button-link-text'>
      <data:platform.shareMessage/>
    </span>
  </a>
</b:includable>
              <b:includable id='postAuthor'>
  <span class='byline post-author vcard'>
    <span class='post-author-label'>
      <data:byline.label/>
    </span>
    <span class='fn'>
      <b:if cond='data:post.author.profileUrl'>
        <meta expr:content='data:post.author.profileUrl'/>
        <a class='g-profile' expr:href='data:post.author.profileUrl' rel='author' title='author profile'>
          <span><data:post.author.name/></span>
        </a>
      <b:else/>
        <span><data:post.author.name/></span>
      </b:if>
    </span>
  </span>
</b:includable>
              <b:includable id='postCommentsLink'>
  <span class='byline post-comment-link container'>
    <b:include cond='data:post.commentSource != 1' name='commentsLink'/>
  </span>
</b:includable>
              <b:includable id='postJumpLink' var='post'>
  <div class='jump-link flat-button'>
    <a expr:href='data:post.url fragment &quot;more&quot;' expr:title='data:post.title'>
      <b:eval expr='data:blog.jumpLinkMessage'/>
    </a>
  </div>
</b:includable>
              <b:includable id='postLabels'>
  <span class='byline post-labels'>
    <span class='byline-label'><data:byline.label/></span>
    <b:loop index='i' values='data:post.labels' var='label'>
      <a expr:href='data:label.url' rel='tag'>
        <data:label.name/>
      </a>
    </b:loop>
  </span>
</b:includable>
              <b:includable id='postLocation'>
  <span class='byline post-location'>
    <data:byline.label/>
    <a expr:href='data:post.location.mapsUrl' target='_blank'><data:post.location.name/></a>
  </span>
</b:includable>
              <b:includable id='postReactions'>
  <!-- Reaction feature no longer available. The includable is retained for backwards-compatibility. -->
</b:includable>
              <b:includable id='postShareButtons'>
  <div class='byline post-share-buttons goog-inline-block'>
    <b:with value='data:sharingId ?: ((data:widget.instanceId ?: &quot;sharing&quot;) + &quot;-&quot; + (data:regionName ?: &quot;byline&quot;) + &quot;-&quot; + data:post.id)' var='sharingId'>
      <!-- Note: 'sharingButtons' includable is from the default Sharing widget markup. -->
      <b:include data='{                                                sharingId: data:sharingId,                                                originalUrl: data:post.url,                                                platforms: data:this.sharing.platforms,                                                shareUrl: data:post.shareUrl,                                                shareTitle: data:post.title,                                              }' name='sharingButtons'/>
    </b:with>
  </div>
</b:includable>
              <b:includable id='postSnippet'>
          <div class='post-snippet'>
            <b:eval expr='snippet(data:post.snippets.long, {length: 250, links: false, linebreaks: false})'/>
          </div>
        </b:includable>
              <b:includable id='postTimestamp'>
  <span class='byline post-timestamp'>
    <data:byline.label/>
    <b:if cond='data:post.url'>
      <meta expr:content='data:post.url.canonical'/>
      <a class='timestamp-link' expr:href='data:post.url' rel='bookmark' title='permanent link'>
        <time class='published' expr:datetime='data:post.date.iso8601' expr:title='data:post.date.iso8601'>
          <data:post.date/>
        </time>
      </a>
    </b:if>
  </span>
</b:includable>
              <b:includable id='sharingButton'>
  <span expr:aria-label='data:platform.shareMessage' expr:class='&quot;sharing-platform-button sharing-element-&quot; + data:platform.key' expr:data-href='data:shareUrl + &quot;&amp;target=&quot; + data:platform.target' expr:data-url='data:originalUrl' expr:title='data:platform.shareMessage' role='menuitem' tabindex='-1'>
    <b:include name='sharingPlatformIcon'/>
    <span class='platform-sharing-text'><data:platform.name/></span>
  </span>
</b:includable>
              <b:includable id='sharingButtonContent'>
  <div class='flat-icon-button ripple'>
    <b:include name='shareIcon'/>
  </div>
</b:includable>
              <b:includable id='sharingButtons'>
  <div class='sharing' expr:aria-owns='&quot;sharing-popup-&quot; + data:sharingId' expr:data-title='data:shareTitle'>
    <button class='sharing-button touch-icon-button' expr:aria-controls='&quot;sharing-popup-&quot; + data:sharingId' expr:aria-label='data:messages.share.escaped' expr:id='&quot;sharing-button-&quot; + data:sharingId' role='button'>
      <b:include name='sharingButtonContent'/>
    </button>
    <b:include name='sharingButtonsMenu'/>
  </div>
</b:includable>
              <b:includable id='sharingButtonsMenu'>
  <div class='share-buttons-container'>
    <ul aria-hidden='true' class='share-buttons hidden' expr:aria-label='data:messages.share.escaped' expr:id='&quot;sharing-popup-&quot; + data:sharingId' role='menu'>
      <b:loop values='(data:platforms ?: data:blog.sharing.platforms) filter (p =&gt; p.key not in {&quot;blogThis&quot;})' var='platform'>
        <li>
          <b:include name='sharingButton'/>
        </li>
      </b:loop>
      <li aria-hidden='true' class='hidden'>
        <b:include name='otherSharingButton'/>
      </li>
    </ul>
  </div>
</b:includable>
              <b:includable id='sharingPlatformIcon'>
  <b:include data='{ iconClass: (&quot;touch-icon sharing-&quot; + data:platform.key) }' expr:name='data:platform.key + &quot;Icon&quot;'/>
</b:includable>
              <b:includable id='snippetedPostByline'>
  <b:with value='(data:widgets first (w =&gt; w.type == &quot;Blog&quot;)).allBylineItems' var='blogBylines'>
    <div class='item-byline'>
      <b:with value='data:blogBylines first (i =&gt; i.name == &quot;author&quot;)' var='byline'>
        <b:include cond='data:byline and data:this.postDisplay.showAuthor' data='post' name='postAuthor'/>
      </b:with>
      <b:with value='data:blogBylines first (i =&gt; i.name == &quot;timestamp&quot;)' var='byline'>
        <b:include cond='data:byline and data:this.postDisplay.showDate' data='post' name='postTimestamp'/>
      </b:with>
    </div>
  </b:with>
</b:includable>
              <b:includable id='snippetedPostContent'>
          <b:include cond='data:this.postDisplay.showFeaturedImage' name='snippetedPostThumbnail'/>
          <b:include cond='data:this.postDisplay.showTitle' name='snippetedPostTitle'/>
          <b:include name='postSnippet'/>
        </b:includable>
              <b:includable id='snippetedPostThumbnail'>
          <b:if cond='data:this.postDisplay.showFeaturedImage'>
            <div class='snippet-thumbnail'>
              <a expr:href='data:post.url' expr:title='data:post.title'>
                <img class='lazy' expr:alt='data:post.title' expr:data-src='data:post.featuredImage ? resizeImage(data:post.featuredImage, 640, &quot;3:2&quot;) :  resizeImage(&quot;https://1.bp.blogspot.com/-msLPy2sUgRs/XsaanLh7hdI/AAAAAAAAIjQ/sMfL_VE-30MWP5PI9at8dzKtZW0igRHDgCK4BGAsYHg/s1600/igniplex-noimage.png&quot;, 640, &quot;3:2&quot;)' expr:title='data:post.title' height='425' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACCAQAAAA3fa6RAAAADklEQVR42mNkAANGCAUAACMAA2w/AMgAAAAASUVORK5CYII=' width='640'/>
              </a>
            </div>
          </b:if>
        </b:includable>
              <b:includable id='snippetedPostTitle'>
          <h2 class='post-title'>
            <a expr:href='data:post.url' expr:title='data:post.title'><data:post.title/></a>
          </h2>
        </b:includable>
              <b:includable id='snippetedPosts'>
          <b:loop values='data:posts' var='post'>
            <article class='post'>
              <b:include data='post' name='snippetedPostContent'/>
            </article>
          </b:loop>
        </b:includable>
              <b:includable id='widget-title'>
          <b:if cond='data:title'>
            <h3 class='title'><b:eval expr='data:title'/></h3>
          </b:if>
        </b:includable>
            </b:widget>
            <b:widget id='Blog1' locked='true' title='Blog Posts' type='Blog' version='2' visible='true'>
              <b:widget-settings>
                <b:widget-setting name='commentLabel'>Comment</b:widget-setting>
                <b:widget-setting name='showShareButtons'>false</b:widget-setting>
                <b:widget-setting name='authorLabel'>Oleh</b:widget-setting>
                <b:widget-setting name='disableGooglePlusShare'>true</b:widget-setting>
                <b:widget-setting name='style.unittype'>TextAndImage</b:widget-setting>
                <b:widget-setting name='timestampLabel'/>
                <b:widget-setting name='reactionsLabel'/>
                <b:widget-setting name='showAuthorProfile'>true</b:widget-setting>
                <b:widget-setting name='style.layout'>1x1</b:widget-setting>
                <b:widget-setting name='showLocation'>false</b:widget-setting>
                <b:widget-setting name='showTimestamp'>true</b:widget-setting>
                <b:widget-setting name='postsPerAd'>1</b:widget-setting>
                <b:widget-setting name='style.bordercolor'>#ffffff</b:widget-setting>
                <b:widget-setting name='showDateHeader'>false</b:widget-setting>
                <b:widget-setting name='style.textcolor'>#2f2f2f</b:widget-setting>
                <b:widget-setting name='showCommentLink'>true</b:widget-setting>
                <b:widget-setting name='style.urlcolor'>#ef5350</b:widget-setting>
                <b:widget-setting name='showAuthor'>true</b:widget-setting>
                <b:widget-setting name='style.linkcolor'>#009688</b:widget-setting>
                <b:widget-setting name='style.bgcolor'>#ffffff</b:widget-setting>
                <b:widget-setting name='showLabels'>true</b:widget-setting>
                <b:widget-setting name='postLabelsLabel'/>
                <b:widget-setting name='showBacklinks'>false</b:widget-setting>
                <b:widget-setting name='showInlineAds'>false</b:widget-setting>
                <b:widget-setting name='showReactions'>false</b:widget-setting>
              </b:widget-settings>
              <b:includable id='main'>
                <b:with value='data:widgets.FeaturedPost filter (w =&gt; w.sectionId == &quot;main&quot;) map (w =&gt; w.postId)' var='featuredPostIds'>
                <b:with value='data:view.isHomepage ? data:posts filter (post =&gt; post.id not in data:featuredPostIds) : data:posts' var='posts'>
                <b:include name='super.main'/>
                </b:with>
                </b:with>
              </b:includable>
              <b:includable id='aboutPostAuthor'>
  <div class='author-name'>
    <a class='g-profile' expr:href='data:post.author.profileUrl' rel='author' title='author profile'>
      <span>
        <data:post.author.name/>
      </span>
    </a>
  </div>
  <div>
    <span class='author-desc'>
      <data:post.author.aboutMe/>
    </span>
  </div>
</b:includable>
              <b:includable id='addComments'>
  <a expr:href='data:post.commentsUrl' expr:onclick='data:post.commentsUrlOnclick'>
    <b:message name='messages.postAComment'/>
  </a>
</b:includable>
              <b:includable id='blogThisShare'>
  <b:with value='&quot;window.open(this.href, \&quot;_blank\&quot;, \&quot;height=270,width=475\&quot;); return false;&quot;' var='onclick'>
    <b:include name='platformShare'/>
  </b:with>
</b:includable>
              <b:includable id='bylineByName' var='byline'>
  <b:switch var='data:byline.name'>
  <b:case value='share'/>
    <b:include cond='data:post.shareUrl' name='postShareButtons'/>
  <b:case value='comments'/>
    <b:include cond='data:post.allowComments' name='postCommentsLink'/>
  <b:case value='location'/>
    <b:include cond='data:post.location' name='postLocation'/>
  <b:case value='timestamp'/>
    <b:include cond='not data:view.isPage' name='postTimestamp'/>
  <b:case value='author'/>
    <b:include name='postAuthor'/>
  <b:case value='labels'/>
    <b:include cond='data:post.labels' name='postLabels'/>
  <b:case value='icons'/>
    <b:include cond='data:post.emailPostUrl' name='emailPostIcon'/>
  </b:switch>
</b:includable>
              <b:includable id='bylineRegion' var='regionItems'>
  <b:loop values='data:regionItems' var='byline'>
    <b:include data='byline' name='bylineByName'/>
  </b:loop>
</b:includable>
              <b:includable id='commentAuthorAvatar'>
  <div class='avatar-image-container'>
    <img class='author-avatar' expr:src='data:comment.authorAvatarSrc' height='35' width='35'/>
  </div>
</b:includable>
              <b:includable id='commentDeleteIcon' var='comment'>
                <span expr:class='&quot;item-control &quot; + data:comment.adminClass'>
                  <b:if cond='data:showCmtPopup'>
                    <div class='goog-toggle-button'>
                      <div class='goog-inline-block comment-action-icon'/>
                    </div>
                    <b:else/>
                    <a class='comment-delete' expr:href='data:comment.deleteUrl' expr:title='data:messages.deleteComment'>
                      Delete
                    </a>
                  </b:if>
                </span>
              </b:includable>
              <b:includable id='commentForm' var='post'>
              <div style='opacity:0;font-size:1px;'><p><a href='#'>SEO</a> - <a href='#'>Tech</a> - <a href='/search/label/Tools'>SEO Tools</a></p></div>
                <div class='comment-form'>
                  <b:if cond='data:this.messages.blogComment != &quot;&quot;'>
                    <div class='comment-message'>
                      <span class='icon'><svg viewBox='0 0 24 24'><path d='M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z'/></svg></span>
                      <span class='text'><data:this.messages.blogComment/></span>
                    </div>
                  </b:if>
                  <b:include data='post' name='commentFormIframeSrc'/>
                  <iframe allowtransparency='allowtransparency' class='blogger-iframe-colorize blogger-comment-from-post' expr:height='data:cmtIframeInitialHeight ?: &quot;90px&quot;' frameborder='0' id='comment-editor' src='' width='100%'/>
                    <script>//<![CDATA[
                    var Y = document.querySelector('.isSingle .post'), Z = false;
                    window.addEventListener('scroll', function(){
                      ((window.innerHeight + window.scrollY) >= Y.offsetHeight && false === Z || (window.innerHeight + window.scrollY) >= Y.offsetHeight && !1 === Z) && (!function(){
                        /*
                        Copyright The Closure Library Authors.
                        SPDX-License-Identifier: Apache-2.0
                        */
                        (function(){
                        var f="function",h="string",l,m=this||self;var n=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(typeof a===h)return typeof b!==h||1!=b.length?-1:a.indexOf(b,c);for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},p=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=typeof a===h?a.split(""):a,g=0;g<d;g++)g in e&&b.call(c,e[g],g,a)},q=function(a){return Array.prototype.concat.apply([],
                        arguments)},t=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};var u;a:{var v=m.navigator;if(v){var w=v.userAgent;if(w){u=w;break a}}u=""}var x=function(a){return-1!=u.indexOf(a)};var y=function(){};y.prototype.h=function(){return this};(new y).h("");var z=function(){};z.prototype.h=function(){return this};(new z).h("");var A=function(){};A.prototype.h=function(){return this};(new A).h("");var B=function(){};B.prototype.h=function(){return this};(new B).h("<!DOCTYPE html>",0);(new B).h("",0);(new B).h("<br>",0);var C=x("Trident")||x("MSIE");var D=function(a,b){return typeof b===h?a.getElementById(b):b},E=function(a,b,c,d){a=d||a;var e=b&&"*"!=b?String(b).toUpperCase():"";if(a.querySelectorAll&&a.querySelector&&(e||c))return a.querySelectorAll(e+(c?"."+c:""));if(c&&a.getElementsByClassName){b=a.getElementsByClassName(c);if(e){a={};for(var g=d=0,k;k=b[g];g++)e==k.nodeName&&(a[d++]=k);a.length=d;return a}return b}b=a.getElementsByTagName(e||"*");if(c){a={};for(g=d=0;k=b[g];g++){e=k.className;var r;if(r=typeof e.split==f)r=0<=n(e.split(/\s+/),
                        c);r&&(a[d++]=k)}a.length=d;return a}return b};var F=function(a){this.F=a};F.prototype.serialize=function(a){var b=[];this.I(a,b);return b.join("")};
                        F.prototype.I=function(a,b){if(null==a)b.push("null");else{if("object"==typeof a){if(Array.isArray(a)){this.serializeArray(a,b);return}if(a instanceof String||a instanceof Number||a instanceof Boolean)a=a.valueOf();else{this.aa(a,b);return}}switch(typeof a){case h:this.M(a,b);break;case "number":this.Z(a,b);break;case "boolean":b.push(String(a));break;case f:b.push("null");break;default:throw Error("Unknown type: "+typeof a);}}};
                        var G={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},H=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;F.prototype.M=function(a,b){b.push('"',a.replace(H,function(c){var d=G[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),G[c]=d);return d}),'"')};F.prototype.Z=function(a,b){b.push(isFinite(a)&&!isNaN(a)?String(a):"null")};
                        F.prototype.serializeArray=function(a,b){var c=a.length;b.push("[");for(var d="",e=0;e<c;e++)b.push(d),d=a[e],this.I(this.F?this.F.call(a,String(e),d):d,b),d=",";b.push("]")};F.prototype.aa=function(a,b){b.push("{");var c="",d;for(d in a)if(Object.prototype.hasOwnProperty.call(a,d)){var e=a[d];typeof e!=f&&(b.push(c),this.M(d,b),b.push(":"),this.I(this.F?this.F.call(a,d,e):e,b),c=",")}b.push("}")};var I="StopIteration"in m?m.StopIteration:{message:"StopIteration",stack:""},J=function(){};J.prototype.next=function(){throw I;};J.prototype.U=function(){return this};var K=function(a,b){this.g={};this.c=[];this.G=this.b=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&this.addAll(a)};l=K.prototype;l.w=function(){this.B();for(var a=[],b=0;b<this.c.length;b++)a.push(this.g[this.c[b]]);return a};l.v=function(){this.B();return this.c.concat()};l.u=function(a){return L(this.g,a)};
                        l.remove=function(a){return L(this.g,a)?(delete this.g[a],this.b--,this.G++,this.c.length>2*this.b&&this.B(),!0):!1};l.B=function(){if(this.b!=this.c.length){for(var a=0,b=0;a<this.c.length;){var c=this.c[a];L(this.g,c)&&(this.c[b++]=c);a++}this.c.length=b}if(this.b!=this.c.length){var d={};for(b=a=0;a<this.c.length;)c=this.c[a],L(d,c)||(this.c[b++]=c,d[c]=1),a++;this.c.length=b}};l.get=function(a,b){return L(this.g,a)?this.g[a]:b};
                        l.set=function(a,b){L(this.g,a)||(this.b++,this.c.push(a),this.G++);this.g[a]=b};l.addAll=function(a){if(a instanceof K)for(var b=a.v(),c=0;c<b.length;c++)this.set(b[c],a.get(b[c]));else for(b in a)this.set(b,a[b])};l.forEach=function(a,b){for(var c=this.v(),d=0;d<c.length;d++){var e=c[d],g=this.get(e);a.call(b,g,e,this)}};l.clone=function(){return new K(this)};
                        l.U=function(a){this.B();var b=0,c=this.G,d=this,e=new J;e.next=function(){if(c!=d.G)throw Error("The map has changed since the iterator was created");if(b>=d.c.length)throw I;var g=d.c[b++];return a?g:d.g[g]};return e};var L=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var M=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,N=function(a,b){if(a){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].indexOf("="),e=null;if(0<=d){var g=a[c].substring(0,d);e=a[c].substring(d+1)}else g=a[c];b(g,e?decodeURIComponent(e.replace(/\+/g," ")):"")}}};var O=function(a,b){this.C=this.K=this.s="";this.D=null;this.H=this.L="";this.f=this.Y=!1;var c;a instanceof O?(this.f=void 0!==b?b:a.f,this.S(a.s),this.T(a.K),this.N(a.C),this.P(a.D),this.setPath(a.getPath()),this.R(a.i.clone()),this.O(a.H)):a&&(c=String(a).match(M))?(this.f=!!b,this.S(c[1]||"",!0),this.T(c[2]||"",!0),this.N(c[3]||"",!0),this.P(c[4]),this.setPath(c[5]||"",!0),this.R(c[6]||"",!0),this.O(c[7]||"",!0)):(this.f=!!b,this.i=new P(null,this.f))};l=O.prototype;
                        l.toString=function(){var a=[],b=this.s;b&&a.push(Q(b,R,!0),":");var c=this.C;if(c||"file"==b)a.push("//"),(b=this.K)&&a.push(Q(b,R,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.D,null!=c&&a.push(":",String(c));if(c=this.getPath())this.X()&&"/"!=c.charAt(0)&&a.push("/"),a.push(Q(c,"/"==c.charAt(0)?aa:ba,!0));(c=this.V())&&a.push("?",c);(c=this.H)&&a.push("#",Q(c,ca));return a.join("")};l.clone=function(){return new O(this)};
                        l.S=function(a,b){this.l();if(this.s=b?S(a,!0):a)this.s=this.s.replace(/:$/,"");return this};l.T=function(a,b){this.l();this.K=b?S(a):a;return this};l.N=function(a,b){this.l();this.C=b?S(a,!0):a;return this};l.X=function(){return!!this.C};l.P=function(a){this.l();if(a){a=Number(a);if(isNaN(a)||0>a)throw Error("Bad port number "+a);this.D=a}else this.D=null;return this};l.getPath=function(){return this.L};l.setPath=function(a,b){this.l();this.L=b?S(a,!0):a;return this};
                        l.R=function(a,b){this.l();a instanceof P?(this.i=a,this.i.J(this.f)):(b||(a=Q(a,da)),this.i=new P(a,this.f));return this};l.V=function(){return this.i.toString()};l.ba=function(a,b){this.l();this.i.set(a,b);return this};l.W=function(a){return this.i.get(a)};l.O=function(a,b){this.l();this.H=b?S(a):a;return this};l.l=function(){if(this.Y)throw Error("Tried to modify a read-only Uri");};l.J=function(a){this.f=a;this.i&&this.i.J(a);return this};
                        var S=function(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""},Q=function(a,b,c){return typeof a===h?(a=encodeURI(a).replace(b,ea),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null},ea=function(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)},R=/[#\/\?@]/g,ba=/[#\?:]/g,aa=/[#\?]/g,da=/[#\?@]/g,ca=/#/g,P=function(a,b){this.b=this.a=null;this.j=a||null;this.f=!!b};l=P.prototype;
                        l.m=function(){if(!this.a&&(this.a=new K,this.b=0,this.j)){var a=this;N(this.j,function(b,c){a.add(decodeURIComponent(b.replace(/\+/g," ")),c)})}};l.add=function(a,b){this.m();this.A();a=this.o(a);var c=this.a.get(a);c||this.a.set(a,c=[]);c.push(b);this.b+=1;return this};l.remove=function(a){this.m();a=this.o(a);return this.a.u(a)?(this.A(),this.b-=this.a.get(a).length,this.a.remove(a)):!1};l.u=function(a){this.m();a=this.o(a);return this.a.u(a)};
                        l.forEach=function(a,b){this.m();this.a.forEach(function(c,d){p(c,function(e){a.call(b,e,d,this)},this)},this)};l.v=function(){this.m();for(var a=this.a.w(),b=this.a.v(),c=[],d=0;d<b.length;d++)for(var e=a[d],g=0;g<e.length;g++)c.push(b[d]);return c};l.w=function(a){this.m();var b=[];if(typeof a===h)this.u(a)&&(b=q(b,this.a.get(this.o(a))));else{a=this.a.w();for(var c=0;c<a.length;c++)b=q(b,a[c])}return b};
                        l.set=function(a,b){this.m();this.A();a=this.o(a);this.u(a)&&(this.b-=this.a.get(a).length);this.a.set(a,[b]);this.b+=1;return this};l.get=function(a,b){if(!a)return b;a=this.w(a);return 0<a.length?String(a[0]):b};l.setValues=function(a,b){this.remove(a);0<b.length&&(this.A(),this.a.set(this.o(a),t(b)),this.b+=b.length)};
                        l.toString=function(){if(this.j)return this.j;if(!this.a)return"";for(var a=[],b=this.a.v(),c=0;c<b.length;c++){var d=b[c],e=encodeURIComponent(String(d));d=this.w(d);for(var g=0;g<d.length;g++){var k=e;""!==d[g]&&(k+="="+encodeURIComponent(String(d[g])));a.push(k)}}return this.j=a.join("&")};l.A=function(){this.j=null};l.clone=function(){var a=new P;a.j=this.j;this.a&&(a.a=this.a.clone(),a.b=this.b);return a};l.o=function(a){a=String(a);this.f&&(a=a.toLowerCase());return a};
                        l.J=function(a){a&&!this.f&&(this.m(),this.A(),this.a.forEach(function(b,c){var d=c.toLowerCase();c!=d&&(this.remove(c),this.setValues(d,b))},this));this.f=a};var U=function(a,b,c){a:{var d=9==b.nodeType?b:b.ownerDocument||b.document;if(d.defaultView&&d.defaultView.getComputedStyle&&(d=d.defaultView.getComputedStyle(b,null))){d=d[a]||d.getPropertyValue(a)||"";break a}d=""}d=d||(b.currentStyle?b.currentStyle[a]:null)||b.style&&b.style[a];return null==d||"inherit"==d||"transparent"==d||"rgba(0, 0, 0, 0)"==d?b!=(9==b.nodeType?b:b.ownerDocument||b.document).body&&b.parentNode?T(a,b.parentNode):c:d},T=function(a,b){return U(a,b,"rgb(0, 0, 0)")},ha=function(){for(var a=
                        E(document,"iframe","blogger-iframe-colorize",void 0),b=0;b<a.length;b++){var c=a[b],d=D(document,c.id+"-src"),e=d.href;if(!(new O(e)).W("skin")){var g=T("color",c),k=T("backgroundColor",c),r=U("fontFamily",c,"serif");d.href="https://www.blogger.com/unvisited-link-"+(new Date).valueOf();var fa=T("color",d);d=d.href=e;e=encodeURIComponent;g=(new F(void 0)).serialize({color:g,backgroundColor:k,unvisitedLinkColor:fa,fontFamily:r});e=d+("#"+e(g))}c.src=e}};var ia=!C&&!(x("Safari")&&!((x("Chrome")||x("CriOS"))&&!x("Edge")||x("Coast")||x("Opera")||x("Edge")||x("Edg/")||x("OPR")||x("Firefox")||x("FxiOS")||x("Silk")||x("Android")));var V=-1;var W=function(){V=Math.floor(1E7*Math.random());for(var a=E(document,"iframe","blogger-comment-from-post",void 0),b=0;b<a.length;b++){var c=D(document,a[b].id+"-src"),d=new O(c.href);d.ba("blogspotRpcToken",V);c.href=d.toString()}ha();a=function(e){if(typeof e.data===h&&0==e.data.indexOf("set-comment-editor-height")){var g=document.getElementById("comment-editor");g.height=e.data.substring(26);if(ia&&g.dataset)g.dataset.resized=!0;else{if(/-[a-z]/.test("resized"))throw Error("");g.setAttribute("data-"+
                        "resized".replace(/([A-Z])/g,"-$1").toLowerCase(),!0)}}};window.addEventListener?window.addEventListener("message",a,!1):window.attachEvent&&window.attachEvent("onmessage",a)},X=["BLOG_CMT_createIframe"],Y=m;X[0]in Y||"undefined"==typeof Y.execScript||Y.execScript("var "+X[0]);for(var Z;X.length&&(Z=X.shift());)X.length||void 0===W?Y=Y[Z]&&Y[Z]!==Object.prototype[Z]?Y[Z]:Y[Z]={}:Y[Z]=W;}).call(this); BLOG_CMT_createIframe('<data:post.appRpcRelayPath/>');kO();
                        }(), Z = true);
                      }, true);
                    //]]>
                    </script>
                </div>
              </b:includable>
              <b:includable id='commentFormIframeSrc' var='post'>
                <a expr:href='data:post.commentFormIframeSrc appendParams { skin: &quot;contempo&quot; }' id='comment-editor-src'/>
              </b:includable>
              <b:includable id='commentItem' var='comment'>
  <div class='comment' expr:id='&quot;c&quot; + data:comment.id'>
    <b:include cond='data:blog.enabledCommentProfileImages' name='commentAuthorAvatar'/>

    <div class='comment-block'>
      <div class='comment-author'>
        <b:if cond='data:comment.authorUrl'>
          <b:message name='messages.authorSaidWithLink'>
            <b:param expr:value='data:comment.author' name='authorName'/>
            <b:param expr:value='data:comment.authorUrl' name='authorUrl'/>
          </b:message>
        <b:else/>
          <b:message name='messages.authorSaid'>
            <b:param expr:value='data:comment.author' name='authorName'/>
          </b:message>
        </b:if>
      </div>
      <div expr:class='&quot;comment-body&quot; + (data:comment.isDeleted ? &quot; deleted&quot; : &quot;&quot;)'>
        <data:comment.body/>
      </div>
      <div class='comment-footer'>
        <span class='comment-timestamp'>
          <a expr:href='data:comment.url' title='comment permalink'>
            <data:comment.timestamp/>
          </a>
          <b:include data='comment' name='commentDeleteIcon'/>
        </span>
      </div>
    </div>
  </div>
</b:includable>
              <b:includable id='commentList' var='comments'>
  <div id='comments-block'>
    <b:loop values='data:comments' var='comment'>
      <b:include data='comment' name='commentItem'/>
    </b:loop>
  </div>
</b:includable>
              <b:includable id='commentPicker' var='post'>
  <b:if cond='data:post.showThreadedComments'>
    <b:include data='post' name='threadedComments'/>
  <b:else/>
    <b:include data='post' name='comments'/>
  </b:if>
</b:includable>
              <b:includable id='comments' var='post'>
                <section class='empty' id='comments'>
                  <b:if cond='data:post.allowComments'>
                    <b:include name='commentsTitle'/>
                    <div expr:id='data:widget.instanceId + &quot;_comments-block-wrapper&quot;'>
                      <b:include cond='data:post.comments' data='post.comments' name='commentList'/>
                    </div>
                    <b:if cond='data:post.commentPagingRequired'>
                      <div class='paging-control-container'>
                        <b:if cond='data:post.hasOlderLinks'>
                          <a expr:class='data:post.oldLinkClass' expr:href='data:post.oldestLinkUrl'>
                            <data:messages.oldest/>
                          </a>
                          <a expr:class='data:post.oldLinkClass' expr:href='data:post.olderLinkUrl'>
                            <data:messages.older/>
                          </a>
                        </b:if>
                        <span class='comment-range-text'>
                          <data:post.commentRangeText/>
                        </span>
                        <b:if cond='data:post.hasNewerLinks'>
                          <a expr:class='data:post.newLinkClass' expr:href='data:post.newerLinkUrl'>
                            <data:messages.newer/>
                          </a>
                          <a expr:class='data:post.newLinkClass' expr:href='data:post.newestLinkUrl'>
                            <data:messages.newest/>
                          </a>
                        </b:if>
                      </div>
                    </b:if>
                    <div class='footer'>
                      <b:if cond='data:post.embedCommentForm'>
                        <b:if cond='data:post.allowNewComments'>
                          <b:include data='post' name='commentForm'/>
                          <b:else/>
                          <p><data:post.noNewCommentsText/></p>
                        </b:if>
                        <b:else/>
                        <b:if cond='data:post.allowComments'>
                          <b:include data='post' name='addComments'/>
                        </b:if>
                      </b:if>
                    </div>
                  </b:if>
                  <b:if cond='data:showCmtPopup'>
                    <div id='comment-popup'>
                      <iframe allowtransparency='allowtransparency' frameborder='0' id='comment-actions' name='comment-actions' scrolling='no'>
                      </iframe>
                    </div>
                  </b:if>
                </section>
              </b:includable>
              <b:includable id='commentsLink'>
  <a class='comment-link' expr:href='data:post.commentsUrl' expr:onclick='data:post.commentsUrlOnclick'>
    <b:if cond='data:post.numberOfComments &gt; 0'>
      <b:message name='messages.numberOfComments'>
        <b:param expr:value='data:post.numberOfComments' name='numComments'/>
      </b:message>
    <b:else/>
      <data:messages.postAComment/>
    </b:if>
  </a>
</b:includable>
              <b:includable id='commentsLinkIframe'>
  <!-- G+ comments, no longer available. The includable is retained for backwards-compatibility. -->
</b:includable>
              <b:includable id='commentsTitle'>
                <h3 class='title'>
                  <b:if cond='data:post.numberOfComments &gt; 0'>
                    <b:message name='messages.numberOfComments'>
                      <b:param expr:value='data:post.numberOfComments' name='numComments'/>
                    </b:message>
                    <b:else/>
                    <data:messages.postAComment/>
                  </b:if>
                </h3>
              </b:includable>
              <b:includable id='defaultAdUnit'>
  <ins class='adsbygoogle' data-ad-format='auto' expr:data-ad-client='data:adClientId ?: data:blog.adsenseClientId' expr:data-ad-host='data:blog.adsenseHostId' expr:data-analytics-uacct='data:blog.analyticsAccountNumber' expr:style='data:style ?: &quot;display: block;&quot;'/>
  <script>
   (adsbygoogle = window.adsbygoogle || []).push({});
  </script>
</b:includable>
              <b:includable id='emailPostIcon'>
  <span class='byline post-icons'>
    <!-- email post links -->
    <span class='item-action'>
      <a expr:href='data:post.emailPostUrl' expr:title='data:messages.emailPost'>
        <b:include data='{ iconClass: &quot;touch-icon sharing-icon&quot; }' name='emailIcon'/>
      </a>
    </span>
  </span>
</b:includable>
              <b:includable id='facebookShare'>
  <b:with value='&quot;window.open(this.href, \&quot;_blank\&quot;, \&quot;height=430,width=640\&quot;); return false;&quot;' var='onclick'>
    <b:include name='platformShare'/>
  </b:with>
</b:includable>
              <b:includable id='feedLinks'>
                <b:comment>Don&#39;t show feed links.</b:comment>
              </b:includable>
              <b:includable id='feedLinksBody' var='links'>
  <div class='feed-links'>
  <data:messages.subscribeTo/>
  <b:loop values='data:links' var='f'>
     <a class='feed-link' expr:href='data:f.url' expr:type='data:f.mimeType' target='_blank'><data:f.name/> (<data:f.feedType/>)</a>
  </b:loop>
  </div>
</b:includable>
              <b:includable id='footerBylines'>
  <b:if cond='data:widgets.Blog.first.footerBylines'>
    <b:loop index='i' values='data:widgets.Blog.first.footerBylines' var='region'>
      <b:if cond='not data:region.items.empty'>
        <div expr:class='&quot;post-footer-line post-footer-line-&quot; + (data:i + 1)'>
          <b:with value='&quot;footer-&quot; + (data:i + 1)' var='regionName'>
            <b:include data='region.items' name='bylineRegion'/>
          </b:with>
        </div>
      </b:if>
    </b:loop>
  </b:if>
</b:includable>
              <b:includable id='footerBylinesOverride'>
                <b:loop values='data:items' var='item'>
                  <b:with value='data:widgets.Blog.first.allBylineItems where (n =&gt; n.name == data:item)' var='allByline'>
                    <b:include data='allByline' name='bylineRegion'/>
                  </b:with>
                </b:loop>
              </b:includable>
              <b:includable id='googlePlusShare'>
  <div class='goog-inline-block google-plus-share-container'>
    <g:plusone annotation='inline' expr:href='data:originalUrl.canonical.http' size='medium' source='blogger:blog:plusone'/>
  </div>
</b:includable>
              <b:includable id='headerByline'>
  <b:if cond='data:widgets.Blog.first.headerByline'>
    <div class='post-header'>
      <div class='post-header-line-1'>
        <b:with value='&quot;header-1&quot;' var='regionName'>
          <b:include data='data:widgets.Blog.first.headerByline.items' name='bylineRegion'/>
        </b:with>
      </div>
    </div>
  </b:if>
</b:includable>
              <b:includable id='homePageLink'>
  <a class='home-link' expr:href='data:blog.homepageUrl'>
    <data:messages.home/>
  </a>
</b:includable>
              <b:includable id='iframeComments' var='post'>
                <b:if cond='data:post.allowIframeComments'>
                  <script async='async' expr:src='data:post.iframeCommentSrc'/>
                  <div class='cmt_iframe_holder' expr:data-href='data:post.url.canonical' expr:data-viewtype='data:post.viewType'/>
                  <b:if cond='!data:post.embedCommentForm'>
                    <b:include data='post' name='commentsLink'/>
                  </b:if>
                </b:if>
              </b:includable>
              <b:includable id='igniplexPost' var='post'>
                <div class='post'>
                  <b:if cond='data:view.isSingleItem'>
                    <b:include data='post' name='postBody'/>
                    <b:if cond='data:view.isPost and !data:view.isPreview'>
                      <b:include data='post' name='postInfo'/>
                      <b:include name='igniplexShare'/>
                      <b:include name='postPagination'/>
                    </b:if>
                  <b:else/>
                    <b:include data='post' name='postThumbnail'/>
                    <div class='content'>
                      <b:include data='{ items: &quot;timestamp&quot; }' name='footerBylinesOverride'/>
                      <b:include data='post' name='postTitle'/>
                      <b:include data='post' name='postSnippet'/>
                    </div>
                  </b:if>
                  <b:include data='post' name='igniplexJSON'/>
                </div>
                <b:include cond='data:view.isPost' data='post' name='igniplexAuthor'/>
                <b:include cond='data:view.isMultipleItems' data='post' name='postInfoBottom'/>
              </b:includable>
              <b:includable id='inlineAd' var='post'>
  <b:if cond='!data:view.isPreview'>
    <b:if cond='data:this.adCode or data:this.adClientId or data:blog.adsenseClientId'>
      <!-- Ad -->
      <div class='inline-ad'>
        <b:if cond='data:this.adCode != &quot;&quot;'>
          <data:this.adCode/>
        <b:else/>
          <b:include cond='data:this.adClientId or data:blog.adsenseClientId' name='defaultAdUnit'/>
        </b:if>
      </div>
    </b:if>
  <b:else/>
    <div class='inline-ad'>
      <div class='inline-ad-placeholder'>
        <span><b:message name='messages.adsGoHere'/></span>
      </div>
    </div>
  </b:if>
</b:includable>
              <b:includable id='linkShare'>
  <b:with value='&quot;window.prompt(\&quot;Copy to clipboard: Ctrl+C, Enter\&quot;, \&quot;&quot; + data:originalUrl + &quot;\&quot;); return false;&quot;' var='onclick'>
    <b:include name='platformShare'/>
  </b:with>
</b:includable>
              <b:includable id='manageComments'>
  <a expr:href='data:post.manageCommentsUrl' expr:onclick='data:post.manageCommentsUrlOnclick'>
    <b:message name='messages.manageComments'/>
  </a>
</b:includable>
              <b:includable id='nextPageLink'>
              
  <a class='blog-pager-older-link' expr:href='data:olderPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-older-link&quot;' expr:title='data:messages.olderPosts'>
    <data:messages.olderPosts/>
  </a>
</b:includable>
              <b:includable id='otherSharingButton'>
  <span class='sharing-platform-button sharing-element-other' expr:aria-label='data:messages.shareToOtherApps.escaped' expr:data-url='data:originalUrl' expr:title='data:messages.shareToOtherApps.escaped' role='menuitem' tabindex='-1'>
    <b:with value='{key: &quot;sharingOther&quot;}' var='platform'>
      <b:include name='sharingPlatformIcon'/>
    </b:with>
    <span class='platform-sharing-text'><data:messages.shareOtherApps.escaped/></span>
  </span>
</b:includable>
              <b:includable id='platformShare'>
  <a expr:class='&quot;goog-inline-block sharing-&quot; + data:platform.key' expr:data-url='data:originalUrl' expr:href='data:shareUrl + &quot;&amp;target=&quot; + data:platform.target' expr:onclick='data:onclick ? data:onclick : &quot;&quot;' expr:title='data:platform.shareMessage' target='_blank'>
    <span class='share-button-link-text'>
      <data:platform.shareMessage/>
    </span>
  </a>
</b:includable>
              <b:includable id='post' var='post'>
  <div class='post'>
    <b:include data='post' name='postMeta'/>
    <b:include data='post' name='postTitle'/>
    <b:include name='headerByline'/>
    <b:if cond='data:view.isSingleItem'>
      <b:include data='post' name='postBody'/>
    <b:else/>
      <b:include data='post' name='postBodySnippet'/>
      <b:include data='post' name='postJumpLink'/>
    </b:if>
    <b:include data='post' name='postFooter'/>
  </div>
</b:includable>
              <b:includable id='postAuthor'>
  <span class='byline post-author vcard'>
    <span class='post-author-label'>
      <data:byline.label/>
    </span>
    <span class='fn'>
      <b:if cond='data:post.author.profileUrl'>
        <meta expr:content='data:post.author.profileUrl'/>
        <a class='g-profile' expr:href='data:post.author.profileUrl' rel='author' title='author profile'>
          <span><data:post.author.name/></span>
        </a>
      <b:else/>
        <span><data:post.author.name/></span>
      </b:if>
    </span>
  </span>
</b:includable>
              <b:includable id='postBody' var='post'>
                <div class='post-body entry-content' expr:id='&quot;post-body-&quot; + data:post.id'>
                  <script>var label = [];
                    <b:if cond='data:post.labels'>
                      label.push(<b:loop index='i' values='data:post.labels' var='label'>&#39;<data:label.name/>&#39;<b:if cond='data:post.labels.size != data:i + 1'>,</b:if></b:loop>)
                    </b:if>
                  </script>
                  <b:if cond='data:view.isPost and !data:blog.searchQuery'>
                    <div class='iklanAtas'>
                      <!-- Ads code below title / Kode iklan bawah judul -->
                    </div>
                  </b:if>
                  <data:post.body/>
                  <b:if cond='data:view.isPost and !data:blog.searchQuery'>
                    <div class='iklanBawah'>
                      <!-- Ads code below article / Kode iklan bawah artikel -->
                    </div>
                  </b:if>
                  <b:if cond='data:view.isPost and data:post.labels'>
                    <div class='igniplexRelatedMiddle igniplexTengah'>
                      <div class='judul'>
                        <span>Related Posts</span>
                      </div>
                      <ul><b:include name='igniplexLoading'/></ul>
                    </div>
                  </b:if>
                </div>
              
              </b:includable>
              <b:includable id='postBodySnippet' var='post'>
  <b:include data='post' name='postBody'/>
</b:includable>
              <b:includable id='postComment' var='post'>
                <b:if cond='data:post.allowComments'>
                  <b:loop values='data:post' var='post'>
                      <span class='post-comments'>
                        <b:if cond='data:view.isSingleItem'>
                          <a expr:title='data:post.numberOfComments + &quot; Comments&quot;' href='#comments'>
                            <b:if cond='data:post.numberOfComments &gt; 0'>
                              <b:message name='messages.numberOfComments'>
                                <b:param expr:value='data:post.numberOfComments' name='numComments'/>
                              </b:message>
                              <b:else/>
                              <data:messages.postAComment/>
                            </b:if>
                          </a>
                        <b:else/>
                          <a expr:href='data:post.commentsUrl' expr:title='data:post.numberOfComments + &quot; Comments&quot;'>
                            <svg viewBox='0 0 24 24'><path d='M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M10,16V19.08L13.08,16H20V4H4V16H10Z'/></svg> <data:post.numberOfComments/>
                          </a>
                        </b:if>
                      </span>
                  </b:loop>
                </b:if>
              </b:includable>
              <b:includable id='postCommentsAndAd' var='post'>                
                <article class='post-outer hentry'>
                  <b:if cond='data:view.isSingleItem'>
                    <div class='igniplexTitle'>
                      <div class='inner'>
                        <b:include cond='data:view.isPost' data='post' name='igniplexBreadcrumb'/>
                        <b:include data='post' name='postTitle'/>
                        <div class='post-info'>
                          <b:include data='{ items: &quot;timestamp&quot; }' name='footerBylinesOverride'/>
                          <b:include data='post' name='postComment'/>
                        </div>
                      </div>
                      <svg class='igniplexWave' preserveAspectRatio='none' viewBox='0 0 1920 75'>
                        <path d='M1963,327H-105V65A2647.49,2647.49,0,0,1,431,19c217.7,3.5,239.6,30.8,470,36,297.3,6.7,367.5-36.2,642-28a2511.41,2511.41,0,0,1,420,48'/>
                        <path d='M-127,404H1963V44c-140.1-28-343.3-46.7-566,22-75.5,23.3-118.5,45.9-162,64-48.6,20.2-404.7,128-784,0C355.2,97.7,341.6,78.3,235,50,86.6,10.6-41.8,6.9-127,10'/>
                        <path d='M1979,462-155,446V106C251.8,20.2,576.6,15.9,805,30c167.4,10.3,322.3,32.9,680,56,207,13.4,378,20.3,494,24'/>
                        <path d='M1998,484H-243V100c445.8,26.8,794.2-4.1,1035-39,141-20.4,231.1-40.1,378-45,349.6-11.6,636.7,73.8,828,150'/>
                      </svg>
                    </div>
                  </b:if>
                  <b:include data='post' name='igniplexPost'/>
                </article>
                <b:include cond='data:view.isPost and !data:view.isPreview' name='igniplexRelated'/>
                <!-- Comments -->
                <b:include cond='data:view.isSingleItem and !data:view.isPreview' data='post' name='commentPicker'/>
              </b:includable>
              <b:includable id='postCommentsLink'>
                <b:if cond='data:view.isMultipleItems'>
                  <span class='post-comment-link container'>
                    <b:include cond='data:post.commentSource != 1' name='commentsLink'/>
                    <b:include cond='data:post.commentSource == 1' name='commentsLinkIframe'/>
                  </span>
                </b:if>
              </b:includable>
              <b:includable id='postFooter' var='post'>
  <div class='post-footer'>
    <b:include name='footerBylines'/>
    <b:include data='post' name='postFooterAuthorProfile'/>
  </div>
</b:includable>
              <b:includable id='postFooterAuthorProfile' var='post'>
  <b:if cond='data:post.author.aboutMe and data:view.isPost'>
    <div class='author-profile'>
      <b:if cond='data:post.author.authorPhoto.url'>
        <img class='author-image' expr:src='data:post.author.authorPhoto.url' width='50px'/>
        <div class='author-about'>
          <b:include data='post' name='aboutPostAuthor'/>
        </div>
      <b:else/>
        <b:include data='post' name='aboutPostAuthor'/>
      </b:if>
    </div>
  </b:if>
</b:includable>
              <b:includable id='postFooterJumpLink'>
                <b:comment>Ripple, and show &#39;keep reading&#39; as the default.</b:comment>
                <div class='jump-link flat-button'>
                  <a expr:href='data:post.hasJumpLink ? data:post.url fragment &quot;more&quot; : data:post.url' expr:title='data:post.title'>
                    <data:blog.jumpLinkMessage/>
                  </a>
                </div>
              </b:includable>
              <b:includable id='postHeader' var='post'>
  <b:include name='headerByline'/>
</b:includable>
              <b:includable id='postInfo' var='post'>
                <div class='post-footer'>
                  <b:include data='{ items: &quot;labels&quot; }' name='footerBylinesOverride'/>
                </div>
              </b:includable>
              <b:includable id='postInfoBottom' var='post'>
                <div class='post-footer-bottom'>
                  <div class='inner'>
                    <span class='post-labels'>
                    <svg viewBox='0 0 24 24'><path d='M6.5,17H15L18.5,12L15,7H6.5L10,12L6.5,17M15,19H3L7.5,12L3,5H15C15.69,5 16.23,5.3 16.64,5.86L21,12L16.64,18.14C16.23,18.7 15.69,19 15,19Z'/></svg>
                    <b:if cond='data:post.labels'>
                      <b:loop values='data:post.labels' var='label'>
                        <a expr:href='data:label.url' expr:title='data:label.name' rel='tag'><data:label.name/></a>
                      </b:loop>
                      <b:else/>
                      Uncategorized
                    </b:if>
                    </span>
                    <b:include data='post' name='postComment'/>
                  </div>
                </div>
              </b:includable>
              <b:includable id='postJumpLink' var='post'>
  <div class='jump-link flat-button'>
    <a expr:href='data:post.url fragment &quot;more&quot;' expr:title='data:post.title'>
      <b:eval expr='data:blog.jumpLinkMessage'/>
    </a>
  </div>
</b:includable>
              <b:includable id='postLabels'>
                <b:comment>Post Labels</b:comment>
                <span class='post-labels'>
                  <b:loop values='data:post.labels' var='label'><a expr:href='data:label.url' expr:title='data:label.name' rel='tag'><data:label.name/></a></b:loop>
                </span>
              </b:includable>
              <b:includable id='postLocation'>
  <span class='byline post-location'>
    <data:byline.label/>
    <a expr:href='data:post.location.mapsUrl' target='_blank'><data:post.location.name/></a>
  </span>
</b:includable>
              <b:includable id='postMeta' var='post'>
  <b:include data='post' name='postMetadataJSON'/>
</b:includable>
              <b:includable id='postMetadataJSONImage'>
  &quot;image&quot;: {
    &quot;@type&quot;: &quot;ImageObject&quot;,
    <b:if cond='data:post.featuredImage.isResizable'>
    &quot;url&quot;: &quot;<b:eval expr='resizeImage(data:post.featuredImage, 1200, &quot;1200:630&quot;)'/>&quot;,
    &quot;height&quot;: 630,
    &quot;width&quot;: 1200
    <b:else/>
    &quot;url&quot;: &quot;https://lh3.googleusercontent.com/ULB6iBuCeTVvSjjjU1A-O8e9ZpVba6uvyhtiWRti_rBAs9yMYOFBujxriJRZ-A=w1200&quot;,
    &quot;height&quot;: 348,
    &quot;width&quot;: 1200
    </b:if>
  },
</b:includable>
              <b:includable id='postMetadataJSONPublisher'>
 &quot;publisher&quot;: {
    &quot;@type&quot;: &quot;Organization&quot;,
    &quot;name&quot;: &quot;Blogger&quot;,
    &quot;logo&quot;: {
      &quot;@type&quot;: &quot;ImageObject&quot;,
      &quot;url&quot;: &quot;https://lh3.googleusercontent.com/ULB6iBuCeTVvSjjjU1A-O8e9ZpVba6uvyhtiWRti_rBAs9yMYOFBujxriJRZ-A=h60&quot;,
      &quot;width&quot;: 206,
      &quot;height&quot;: 60
    }
  },
</b:includable>
              <b:includable id='postPagination'>
                <div class='blog-pager'>
                  <b:if cond='data:view.isPost'>
                    <b:if cond='data:newerPageUrl'>
                      <a class='newer' expr:href='data:newerPageUrl' expr:title='data:messages.newer'>
                        <data:messages.newer/>
                      </a>
                    </b:if>
                    <b:if cond='!data:newerPageUrl'>
                      <span class='nolink home-link'><data:messages.newest/></span>
                    </b:if>
                    <b:if cond='data:view.url != data:blog.homepageUrl and !data:view.isPost'>
                      <a expr:href='data:blog.homepageUrl' expr:title='data:messages.home'>
                        <data:messages.home/>
                      </a>
                    </b:if>
                    <b:if cond='!data:olderPageUrl'>
                      <span class='nolink old-link'><data:messages.oldest/></span>
                    </b:if>
                    <b:if cond='data:olderPageUrl'>
                      <a class='older' expr:href='data:olderPageUrl' expr:title='data:messages.older'>
                        <data:messages.older/>
                      </a>
                    </b:if>
                  <b:else/>
                    <b:if cond='data:olderPageUrl'>
                      <div class='inner'>
                        <a expr:href='data:olderPageUrl' expr:title='data:messages.older'>Load More</a>
                      </div>
                    </b:if>
                    <b:class name='infinite'/>
                  </b:if>
                </div>
              </b:includable>
              <b:includable id='postReactions'>
  <!-- Reaction feature no longer available. The includable is retained for backwards-compatibility. -->
</b:includable>
              <b:includable id='postShareButtons'>
  <div class='byline post-share-buttons goog-inline-block'>
    <b:with value='data:sharingId ?: ((data:widget.instanceId ?: &quot;sharing&quot;) + &quot;-&quot; + (data:regionName ?: &quot;byline&quot;) + &quot;-&quot; + data:post.id)' var='sharingId'>
      <!-- Note: 'sharingButtons' includable is from the default Sharing widget markup. -->
      <b:include data='{                                                sharingId: data:sharingId,                                                originalUrl: data:post.url,                                                platforms: data:this.sharing.platforms,                                                shareUrl: data:post.shareUrl,                                                shareTitle: data:post.title,                                              }' name='sharingButtons'/>
    </b:with>
  </div>
</b:includable>
              <b:includable id='postSnippet' var='post'>
                <b:comment>Snippet di homepage</b:comment>
                <div class='post-snippet entry-content'>
                  <b:eval expr='snippet(data:post.snippets.short, {length: 150, links: false, linebreaks: false})'/>
                </div>
              </b:includable>
              <b:includable id='postThumbnail' var='post'>
                <div class='snippet-thumbnail'>
                  <a expr:href='data:post.link ?: data:post.url' expr:title='data:post.title'>
                    <img class='lazy' expr:alt='data:post.title' expr:data-src='data:post.featuredImage ? resizeImage(data:post.featuredImage, 480, &quot;3:2&quot;) :  resizeImage(&quot;https://1.bp.blogspot.com/-msLPy2sUgRs/XsaanLh7hdI/AAAAAAAAIjQ/sMfL_VE-30MWP5PI9at8dzKtZW0igRHDgCK4BGAsYHg/s1600/igniplex-noimage.png&quot;, 480, &quot;3:2&quot;)' expr:title='data:post.title' height='320' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACCAQAAAA3fa6RAAAADklEQVR42mNkAANGCAUAACMAA2w/AMgAAAAASUVORK5CYII=' width='480'/>
                  </a>
                </div>
              </b:includable>
              <b:includable id='postTimestamp'>
                <span class='post-timestamp'>
                  <b:if cond='data:view.isPost'>
                    <data:byline.label/>
                  </b:if>
                  <time expr:class='format(data:post.date, &quot;d MMM YYYY&quot;) != format(data:post.lastUpdated, &quot;d MMM YYYY&quot;) ? &quot;published&quot; : &quot;published updated&quot;' expr:datetime='data:post.date.iso8601' expr:title='data:post.date.iso8601'><data:post.date/></time>
                  <b:if cond='format(data:post.date, &quot;d MMM YYYY&quot;) != format(data:post.lastUpdated, &quot;d MMM YYYY&quot;)'>
                    <span class='update'>(Updated: <time class='updated' expr:datetime='data:post.lastUpdated.iso8601' expr:title='data:post.lastUpdated.iso8601'><data:post.lastUpdated/></time>)</span>
                  </b:if>
                </span>
                <b:class cond='format(data:post.date, &quot;d MMM YYYY&quot;) != format(data:post.lastUpdated, &quot;d MMM YYYY&quot;)' name='updt'/>
              </b:includable>
              <b:includable id='postTitle' var='post'>
                <a expr:id='data:post.id'/>
                <b:if cond='data:post.title != &quot;&quot;'>
                  <b:if cond='data:post.link or (data:post.url and data:view.url != data:post.url)'>
                    <h2 class='post-title entry-title'>
                      <a expr:href='data:post.link ?: data:post.url' expr:title='data:post.title' rel='bookmark'><data:post.title/></a>
                    </h2>
                    <b:else/>
                    <h1 class='entry-title'><data:post.title/></h1>
                  </b:if>
                </b:if>
              </b:includable>
              <b:includable id='previousPageLink'>
  <a class='blog-pager-newer-link' expr:href='data:newerPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-newer-link&quot;' expr:title='data:messages.newerPosts'>
    <data:messages.newerPosts/>
  </a>
</b:includable>
              <b:includable id='sharingButton'>
  <span expr:aria-label='data:platform.shareMessage' expr:class='&quot;sharing-platform-button sharing-element-&quot; + data:platform.key' expr:data-href='data:shareUrl + &quot;&amp;target=&quot; + data:platform.target' expr:data-url='data:originalUrl' expr:title='data:platform.shareMessage' role='menuitem' tabindex='-1'>
    <b:include name='sharingPlatformIcon'/>
    <span class='platform-sharing-text'><data:platform.name/></span>
  </span>
</b:includable>
              <b:includable id='sharingButtonContent'>
  <div class='flat-icon-button ripple'>
    <b:include name='shareIcon'/>
  </div>
</b:includable>
              <b:includable id='sharingButtons'>
  <div class='sharing' expr:aria-owns='&quot;sharing-popup-&quot; + data:sharingId' expr:data-title='data:shareTitle'>
    <button class='sharing-button touch-icon-button' expr:aria-controls='&quot;sharing-popup-&quot; + data:sharingId' expr:aria-label='data:messages.share.escaped' expr:id='&quot;sharing-button-&quot; + data:sharingId' role='button'>
      <b:include name='sharingButtonContent'/>
    </button>
    <b:include name='sharingButtonsMenu'/>
  </div>
</b:includable>
              <b:includable id='sharingButtonsMenu'>
  <div class='share-buttons-container'>
    <ul aria-hidden='true' class='share-buttons hidden' expr:aria-label='data:messages.share.escaped' expr:id='&quot;sharing-popup-&quot; + data:sharingId' role='menu'>
      <b:loop values='(data:platforms ?: data:blog.sharing.platforms) filter (p =&gt; p.key not in {&quot;blogThis&quot;})' var='platform'>
        <li>
          <b:include name='sharingButton'/>
        </li>
      </b:loop>
      <li aria-hidden='true' class='hidden'>
        <b:include name='otherSharingButton'/>
      </li>
    </ul>
  </div>
</b:includable>
              <b:includable id='sharingPlatformIcon'>
  <b:include data='{ iconClass: (&quot;touch-icon sharing-&quot; + data:platform.key) }' expr:name='data:platform.key + &quot;Icon&quot;'/>
</b:includable>
              <b:includable id='threadedCommentForm' var='post'>
                <b:include data='post' name='commentForm'/>
              </b:includable>
              <b:includable id='threadedCommentJs' var='post'>
                <b:template-script inline='true' name='threaded_comments'/>
                <script>
                  blogger.widgets.blog.initThreadedComments(
                    <data:post.commentJso/>,
                    <data:post.commentMsgs/>,
                    <data:post.commentConfig/>);
                </script>
              </b:includable>
              <b:includable id='threadedComments' var='post'>
                <section class='embed' id='comments'>
                  <b:include name='commentsTitle'/>
                  <div class='comments-content'>
                    <b:if cond='data:post.embedCommentForm'>
                      <b:include data='post' name='threadedCommentJs'/>
                    </b:if>
                    <div id='comment-holder'>
                      <data:post.commentHtml/>
                    </div>
                  </div>                  
                  <b:if cond='data:post.allowNewComments'>
                    <b:include data='post' name='threadedCommentForm'/>
                    <b:else/>
                    <div class='comment-footer'><data:post.noNewCommentsText/></div>
                  </b:if>
                  <b:if cond='data:showCmtPopup'>
                    <div id='comment-popup'>
                      <iframe allowtransparency='allowtransparency' frameborder='0' id='comment-actions' name='comment-actions' scrolling='no'>
                      </iframe>
                    </div>
                  </b:if>
                </section>
              </b:includable>
            </b:widget>
            <b:widget cond='data:view.isPost' id='HTML3' locked='true' title='Post Middle Ad (Middle Ads)' type='HTML' version='2' visible='true'>
              <b:widget-settings>
                <b:widget-setting name='content'/>
              </b:widget-settings>
              <b:includable id='main'>
                <div class='widget-content'>
                  <data:content/>
                </div>
              </b:includable>
              <b:includable id='widget-title'>
                <b:comment>Don&#39;t show.</b:comment>
              </b:includable>
            </b:widget>
          </b:section>
          <b:section cond='data:view.isMultipleItems' id='middlebar' showaddelement='false'>
            <b:widget id='HTML6' locked='true' title='Random' type='HTML' version='2' visible='true'>
              <b:widget-settings>
                <b:widget-setting name='content'/>
              </b:widget-settings>
              <b:includable id='main'>
                <b:include name='widget-title'/>
                <div class='widget-content'>
                  <b:include name='igniplexLoading'/>
                </div>
              </b:includable>
            </b:widget>
          </b:section>
        </div>
        <b:section class='sidebar' cond='!data:view.isPage' id='sidebar' showaddelement='true'>
          <b:widget id='Profile1' locked='false' title='About Me' type='Profile' visible='true'>
            <b:widget-settings>
              <b:widget-setting name='showaboutme'>true</b:widget-setting>
              <b:widget-setting name='showlocation'>false</b:widget-setting>
            </b:widget-settings>
            <b:includable id='main' var='this'>
  <b:include name='widget-title'/>
  <b:include name='content'/>
</b:includable>
            <b:includable id='authorProfileImage'>
          <b:if cond='data:authorPhoto.image'>
            <div class='avatar'>
              <img class='lazy' expr:alt='data:display-name' expr:data-src='data:authorPhoto.image' expr:height='data:authorPhoto.height' expr:title='data:display-name' expr:width='data:authorPhoto.width' src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='/>
            </div>
          </b:if>
        </b:includable>
            <b:includable id='content'>
  <b:if cond='data:team'>
    <div class='widget-content team'>
      <b:include name='teamProfile'/>
    </div>
  <b:else/>
    <div class='widget-content individual'>
      <b:include name='userProfile'/>
    </div>
  </b:if>
</b:includable>
            <b:includable id='defaultProfileImage'>
  <div class='default-avatar'/>
</b:includable>
            <b:includable id='profileImage'>
  <b:if cond='data:authorPhoto.image'>
    <b:include name='authorProfileImage'/>
  <b:else/>
    <b:include name='defaultProfileImage'/>
  </b:if>
</b:includable>
            <b:includable id='teamProfile'>
          <ul>
            <b:loop values='data:authors' var='author'>
              <li>
                <b:include data='author' name='teamProfileLink'/>
              </li>
            </b:loop>
          </ul>
        </b:includable>
            <b:includable id='teamProfileLink'>
          <b:include name='authorProfileImage'/>
          <div class='about'>
            <div class='name'><data:author.display-name/></div>
            <a expr:href='data:userUrl' rel='nofollow'>
              <data:messages.visitProfile/>
            </a>
          </div>
        </b:includable>
            <b:includable id='userGoogleProfile'>
  <div class='g-follow' data-annotation='bubble' data-height='20' expr:data-href='data:userUrl'/>
</b:includable>
            <b:includable id='userLocation'>
          <div class='location'>
            <svg viewBox='0 0 24 24'><path d='M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z'/></svg>
            <data:location/>
          </div>
        </b:includable>
            <b:includable id='userProfile'>
  <b:include name='userProfileImage'/>
  <b:include name='userProfileInfo'/>
</b:includable>
            <b:includable id='userProfileData'>
  <dt class='profile-data'>
    <b:include name='userProfileLink'/>
    <b:include cond='data:hasgoogleprofile' name='userGoogleProfile'/>
  </dt>
</b:includable>
            <b:includable id='userProfileImage'>
          <b:if cond='data:authorPhoto.image'>
            <div class='avatar'>
              <img class='lazy' expr:alt='data:displayname' expr:data-src='resizeImage(data:authorPhoto.image, 100, &quot;1:1&quot;)' expr:height='data:authorPhoto.height' expr:title='data:displayname' expr:width='data:authorPhoto.width' src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='/>
            </div>
          </b:if>
        </b:includable>
            <b:includable id='userProfileInfo'>
          <div class='name'><data:displayname/></div>
          <b:include cond='data:showlocation and data:location != &quot;&quot;' name='userLocation'/>
          <b:include cond='data:aboutme != &quot;&quot;' name='userProfileText'/>
          <a class='visit' expr:href='data:userUrl' rel='nofollow'>
            <data:messages.visitProfile/>
          </a>
        </b:includable>
            <b:includable id='userProfileLink'>
  <a class='profile-link g-profile' expr:href='data:userUrl' rel='author nofollow'>
    <data:displayname/>
  </a>
</b:includable>
            <b:includable id='userProfileText'>
          <div class='about'><data:aboutme/></div>
        </b:includable>
            <b:includable id='viewProfileLink'>
  <a class='profile-link' expr:href='data:userUrl' rel='author nofollow'>
    <data:messages.viewMyCompleteProfile/>
  </a>
</b:includable>
          </b:widget>
          <b:widget cond='!data:blog.searchQuery' id='HTML2' locked='false' title='Advertisement 300x250 (Ads)' type='HTML' version='2' visible='false'>
            <b:widget-settings>
              <b:widget-setting name='content'/>
            </b:widget-settings>
            <b:includable id='main'>
              <div class='widget-content'>
                <data:content/>
              </div>
            </b:includable>
            <b:includable id='widget-title'>
              <b:comment>Don&#39;t show.</b:comment>
            </b:includable>
          </b:widget>
          <b:widget cond='data:view.isPost and !data:view.isPreview' id='Feed1' locked='false' title='Recent' type='Feed' visible='true'>
            <b:includable id='main'>
          <b:include name='widget-title'/>
          <div class='widget-content' expr:data-num='data:numItemsShow'/>
        </b:includable>
            <b:includable id='content'>
  <div class='widget-content' expr:id='data:widget.instanceId + &quot;_feedItemListDisplay&quot;'>
    <span style='filter: alpha(25); opacity: 0.25;'>
      <a expr:href='data:feedUrl'><data:loadingMsg/></a>
    </span>
  </div>
</b:includable>
            <b:includable id='widget-title'>
          <h3 class='title'>
            <b:if cond='data:title'>
              <b:eval expr='data:title'/>
            <b:else/>
              Recent  
            </b:if>
          </h3>
        </b:includable>
          </b:widget>
          <b:widget id='Label1' locked='false' title='Label Cloud' type='Label' visible='true'>
            <b:widget-settings>
              <b:widget-setting name='sorting'>ALPHA</b:widget-setting>
              <b:widget-setting name='display'>CLOUD</b:widget-setting>
              <b:widget-setting name='selectedLabelsList'/>
              <b:widget-setting name='showType'>ALL</b:widget-setting>
              <b:widget-setting name='showFreqNumbers'>true</b:widget-setting>
            </b:widget-settings>
            <b:includable id='main' var='this'>
          <b:with value='data:messages.labels' var='defaultTitle'>
            <b:include name='super.main'/>
          </b:with>
        </b:includable>
            <b:includable id='cloud'>
  <b:loop values='data:labels' var='label'>
    <span class='label-size'>
      <b:class expr:name='&quot;label-size-&quot; + data:label.cssSize'/>
      <a class='label-name' expr:href='data:label.url'>
        <data:label.name/>
        <b:if cond='data:this.showFreqNumbers'>
          <span class='label-count'><data:label.count/></span>
        </b:if>
      </a>
    </span>
  </b:loop>
</b:includable>
            <b:includable id='content'>
          <div class='widget-content'>
            <b:class expr:name='data:this.display'/>
              <ul>
              <b:loop values='data:labels' var='label'>
                <li>
                  <a expr:href='data:label.url' expr:title='data:label.name'>
                    <data:label.name/>
                  </a>
                  <b:if cond='data:this.showFreqNumbers'>
                    <span class='count'>(<data:label.count/>)</span>
                  </b:if>
                </li>
              </b:loop>
            </ul>
          </div>
        </b:includable>
            <b:includable id='list'>
  <ul>
    <b:loop values='data:labels' var='label'>
      <li>
        <a class='label-name' expr:href='data:label.url'>
          <data:label.name/>
          <b:if cond='data:this.showFreqNumbers'>
            <span class='label-count'><data:label.count/></span>
          </b:if>
        </a>
      </li>
    </b:loop>
  </ul>
</b:includable>
          </b:widget>
          <b:widget id='BlogArchive1' locked='false' title='Archive' type='BlogArchive' visible='true'>
            <b:widget-settings>
              <b:widget-setting name='showStyle'>FLAT</b:widget-setting>
              <b:widget-setting name='yearPattern'>yyyy</b:widget-setting>
              <b:widget-setting name='showWeekEnd'>true</b:widget-setting>
              <b:widget-setting name='monthPattern'>MMMM yyyy</b:widget-setting>
              <b:widget-setting name='dayPattern'>MMM dd</b:widget-setting>
              <b:widget-setting name='weekPattern'>MM/dd</b:widget-setting>
              <b:widget-setting name='chronological'>false</b:widget-setting>
              <b:widget-setting name='showPosts'>true</b:widget-setting>
              <b:widget-setting name='frequency'>MONTHLY</b:widget-setting>
            </b:widget-settings>
            <b:includable id='main' var='this'>
          <b:with value='data:messages.archive' var='defaultTitle'>
            <b:include name='super.main'/>
          </b:with>
        </b:includable>
            <b:includable id='content'>
          <div class='widget-content'>
            <b:class expr:name='data:this.style'/>
            <b:include cond='data:this.style == &quot;HIERARCHY&quot;' name='hierarchy'/>
            <b:include cond='data:this.style == &quot;FLAT&quot;' name='flat'/>
            <b:include cond='data:this.style == &quot;MENU&quot;' name='menu'/>
          </div>
        </b:includable>
            <b:includable id='flat'>
          <ul>
            <b:loop values='data:this.data' var='archive'>
              <li>
                <a expr:href='data:archive.url' expr:title='data:archive.name'>
                  <data:archive.name/>
                </a>
                <span class='count'>(<data:archive.post-count/>)</span>
              </li>
            </b:loop>
          </ul>
        </b:includable>
            <b:includable id='hierarchy'>
          <b:include data='{             items: data:this.data,             itemSet: &quot;data&quot;,             itemsMarkup: &quot;super.hierarchy&quot;           }' name='extendableItems'/>
        </b:includable>
            <b:includable id='interval' var='intervals'>
          <ul class='hierarchy'>
            <b:loop values='data:intervals' var='interval'>
              <li class='archivedate'>
                <div class='hierarchy-title'>
                  <a class='post-count-link' expr:href='data:interval.url'>
                    <data:interval.name/>
                    <span class='count'>(<data:interval.post-count/>)</span>
                  </a>
                </div>
                <div class='hierarchy-content'>
                  <b:include cond='data:interval.data' data='interval.data' name='interval'/>
                  <b:include cond='data:interval.posts' data='interval.posts' name='posts'/>
                </div>
              </li>
            </b:loop>
          </ul>
        </b:includable>
            <b:includable id='menu' var='data'>
          <select onchange='location = this.value;'>
            <option expr:value='data:blog.homepageUrl'><data:messages.archive/></option>
            <b:loop values='data:this.data' var='i'>
              <option expr:value='data:i.url'><data:i.name/> (<data:i.post-count/>)</option>
            </b:loop>
          </select>
        </b:includable>
            <b:includable id='posts' var='posts'>
          <ul class='posts hierarchy'>
            <b:loop values='data:posts' var='post'>
              <li>
                <a expr:href='data:post.url'><data:post.title/></a>
              </li>
            </b:loop>
          </ul>
        </b:includable>
          </b:widget>
          <b:widget id='PopularPosts1' locked='false' title='Popular' type='PopularPosts' version='2' visible='true'>
            <b:widget-settings>
              <b:widget-setting name='numItemsToShow'>3</b:widget-setting>
              <b:widget-setting name='showThumbnails'>true</b:widget-setting>
              <b:widget-setting name='showSnippets'>true</b:widget-setting>
              <b:widget-setting name='timeRange'>ALL_TIME</b:widget-setting>
            </b:widget-settings>
            <b:includable id='main' var='this'>
          <b:with value='data:messages.popularPostsFromThisBlog' var='defaultTitle'>
            <b:include name='super.main'/>
          </b:with>
        </b:includable>
            <b:includable id='blogThisShare'>
  <b:with value='&quot;window.open(this.href, \&quot;_blank\&quot;, \&quot;height=270,width=475\&quot;); return false;&quot;' var='onclick'>
    <b:include name='platformShare'/>
  </b:with>
</b:includable>
            <b:includable id='bylineByName' var='byline'>
  <b:switch var='data:byline.name'>
  <b:case value='share'/>
    <b:include cond='data:post.shareUrl' name='postShareButtons'/>
  <b:case value='comments'/>
    <b:include cond='data:post.allowComments' name='postCommentsLink'/>
  <b:case value='location'/>
    <b:include cond='data:post.location' name='postLocation'/>
  <b:case value='timestamp'/>
    <b:include cond='not data:view.isPage' name='postTimestamp'/>
  <b:case value='author'/>
    <b:include name='postAuthor'/>
  <b:case value='labels'/>
    <b:include cond='data:post.labels' name='postLabels'/>
  <b:case value='icons'/>
    <b:include cond='data:post.emailPostUrl' name='emailPostIcon'/>
  </b:switch>
</b:includable>
            <b:includable id='bylineRegion' var='regionItems'>
  <b:loop values='data:regionItems' var='byline'>
    <b:include data='byline' name='bylineByName'/>
  </b:loop>
</b:includable>
            <b:includable id='commentsLink'>
  <a class='comment-link' expr:href='data:post.commentsUrl' expr:onclick='data:post.commentsUrlOnclick'>
    <b:if cond='data:post.numberOfComments &gt; 0'>
      <b:message name='messages.numberOfComments'>
        <b:param expr:value='data:post.numberOfComments' name='numComments'/>
      </b:message>
    <b:else/>
      <data:messages.postAComment/>
    </b:if>
  </a>
</b:includable>
            <b:includable id='commentsLinkIframe'>
  <!-- G+ comments, no longer available. The includable is retained for backwards-compatibility. -->
</b:includable>
            <b:includable id='emailPostIcon'>
  <span class='byline post-icons'>
    <!-- email post links -->
    <span class='item-action'>
      <a expr:href='data:post.emailPostUrl' expr:title='data:messages.emailPost'>
        <b:include data='{ iconClass: &quot;touch-icon sharing-icon&quot; }' name='emailIcon'/>
      </a>
    </span>
  </span>
</b:includable>
            <b:includable id='facebookShare'>
  <b:with value='&quot;window.open(this.href, \&quot;_blank\&quot;, \&quot;height=430,width=640\&quot;); return false;&quot;' var='onclick'>
    <b:include name='platformShare'/>
  </b:with>
</b:includable>
            <b:includable id='footerBylines'>
  <b:if cond='data:widgets.Blog.first.footerBylines'>
    <b:loop index='i' values='data:widgets.Blog.first.footerBylines' var='region'>
      <b:if cond='not data:region.items.empty'>
        <div expr:class='&quot;post-footer-line post-footer-line-&quot; + (data:i + 1)'>
          <b:with value='&quot;footer-&quot; + (data:i + 1)' var='regionName'>
            <b:include data='region.items' name='bylineRegion'/>
          </b:with>
        </div>
      </b:if>
    </b:loop>
  </b:if>
</b:includable>
            <b:includable id='googlePlusShare'>
  <div class='goog-inline-block google-plus-share-container'>
    <g:plusone annotation='inline' expr:href='data:originalUrl.canonical.http' size='medium' source='blogger:blog:plusone'/>
  </div>
</b:includable>
            <b:includable id='headerByline'>
  <b:if cond='data:widgets.Blog.first.headerByline'>
    <div class='post-header'>
      <div class='post-header-line-1'>
        <b:with value='&quot;header-1&quot;' var='regionName'>
          <b:include data='data:widgets.Blog.first.headerByline.items' name='bylineRegion'/>
        </b:with>
      </div>
    </div>
  </b:if>
</b:includable>
            <b:includable id='linkShare'>
  <b:with value='&quot;window.prompt(\&quot;Copy to clipboard: Ctrl+C, Enter\&quot;, \&quot;&quot; + data:originalUrl + &quot;\&quot;); return false;&quot;' var='onclick'>
    <b:include name='platformShare'/>
  </b:with>
</b:includable>
            <b:includable id='otherSharingButton'>
  <span class='sharing-platform-button sharing-element-other' expr:aria-label='data:messages.shareToOtherApps.escaped' expr:data-url='data:originalUrl' expr:title='data:messages.shareToOtherApps.escaped' role='menuitem' tabindex='-1'>
    <b:with value='{key: &quot;sharingOther&quot;}' var='platform'>
      <b:include name='sharingPlatformIcon'/>
    </b:with>
    <span class='platform-sharing-text'><data:messages.shareOtherApps.escaped/></span>
  </span>
</b:includable>
            <b:includable id='platformShare'>
  <a expr:class='&quot;goog-inline-block sharing-&quot; + data:platform.key' expr:data-url='data:originalUrl' expr:href='data:shareUrl + &quot;&amp;target=&quot; + data:platform.target' expr:onclick='data:onclick ? data:onclick : &quot;&quot;' expr:title='data:platform.shareMessage' target='_blank'>
    <span class='share-button-link-text'>
      <data:platform.shareMessage/>
    </span>
  </a>
</b:includable>
            <b:includable id='postAuthor'>
  <span class='byline post-author vcard'>
    <span class='post-author-label'>
      <data:byline.label/>
    </span>
    <span class='fn'>
      <b:if cond='data:post.author.profileUrl'>
        <meta expr:content='data:post.author.profileUrl'/>
        <a class='g-profile' expr:href='data:post.author.profileUrl' rel='author' title='author profile'>
          <span><data:post.author.name/></span>
        </a>
      <b:else/>
        <span><data:post.author.name/></span>
      </b:if>
    </span>
  </span>
</b:includable>
            <b:includable id='postCommentsLink'>
  <span class='byline post-comment-link container'>
    <b:include cond='data:post.commentSource != 1' name='commentsLink'/>
  </span>
</b:includable>
            <b:includable id='postJumpLink' var='post'>
  <div class='jump-link flat-button'>
    <a expr:href='data:post.url fragment &quot;more&quot;' expr:title='data:post.title'>
      <b:eval expr='data:blog.jumpLinkMessage'/>
    </a>
  </div>
</b:includable>
            <b:includable id='postLabels'>
  <span class='byline post-labels'>
    <span class='byline-label'><data:byline.label/></span>
    <b:loop index='i' values='data:post.labels' var='label'>
      <a expr:href='data:label.url' rel='tag'>
        <data:label.name/>
      </a>
    </b:loop>
  </span>
</b:includable>
            <b:includable id='postLocation'>
  <span class='byline post-location'>
    <data:byline.label/>
    <a expr:href='data:post.location.mapsUrl' target='_blank'><data:post.location.name/></a>
  </span>
</b:includable>
            <b:includable id='postReactions'>
  <!-- Reaction feature no longer available. The includable is retained for backwards-compatibility. -->
</b:includable>
            <b:includable id='postShareButtons'>
  <div class='byline post-share-buttons goog-inline-block'>
    <b:with value='data:sharingId ?: ((data:widget.instanceId ?: &quot;sharing&quot;) + &quot;-&quot; + (data:regionName ?: &quot;byline&quot;) + &quot;-&quot; + data:post.id)' var='sharingId'>
      <!-- Note: 'sharingButtons' includable is from the default Sharing widget markup. -->
      <b:include data='{                                                sharingId: data:sharingId,                                                originalUrl: data:post.url,                                                platforms: data:this.sharing.platforms,                                                shareUrl: data:post.shareUrl,                                                shareTitle: data:post.title,                                              }' name='sharingButtons'/>
    </b:with>
  </div>
</b:includable>
            <b:includable id='postTimestamp'>
  <span class='byline post-timestamp'>
    <data:byline.label/>
    <b:if cond='data:post.url'>
      <meta expr:content='data:post.url.canonical'/>
      <a class='timestamp-link' expr:href='data:post.url' rel='bookmark' title='permanent link'>
        <time class='published' expr:datetime='data:post.date.iso8601' expr:title='data:post.date.iso8601'>
          <data:post.date/>
        </time>
      </a>
    </b:if>
  </span>
</b:includable>
            <b:includable id='sharingButton'>
  <span expr:aria-label='data:platform.shareMessage' expr:class='&quot;sharing-platform-button sharing-element-&quot; + data:platform.key' expr:data-href='data:shareUrl + &quot;&amp;target=&quot; + data:platform.target' expr:data-url='data:originalUrl' expr:title='data:platform.shareMessage' role='menuitem' tabindex='-1'>
    <b:include name='sharingPlatformIcon'/>
    <span class='platform-sharing-text'><data:platform.name/></span>
  </span>
</b:includable>
            <b:includable id='sharingButtonContent'>
  <div class='flat-icon-button ripple'>
    <b:include name='shareIcon'/>
  </div>
</b:includable>
            <b:includable id='sharingButtons'>
  <div class='sharing' expr:aria-owns='&quot;sharing-popup-&quot; + data:sharingId' expr:data-title='data:shareTitle'>
    <button class='sharing-button touch-icon-button' expr:aria-controls='&quot;sharing-popup-&quot; + data:sharingId' expr:aria-label='data:messages.share.escaped' expr:id='&quot;sharing-button-&quot; + data:sharingId' role='button'>
      <b:include name='sharingButtonContent'/>
    </button>
    <b:include name='sharingButtonsMenu'/>
  </div>
</b:includable>
            <b:includable id='sharingButtonsMenu'>
  <div class='share-buttons-container'>
    <ul aria-hidden='true' class='share-buttons hidden' expr:aria-label='data:messages.share.escaped' expr:id='&quot;sharing-popup-&quot; + data:sharingId' role='menu'>
      <b:loop values='(data:platforms ?: data:blog.sharing.platforms) filter (p =&gt; p.key not in {&quot;blogThis&quot;})' var='platform'>
        <li>
          <b:include name='sharingButton'/>
        </li>
      </b:loop>
      <li aria-hidden='true' class='hidden'>
        <b:include name='otherSharingButton'/>
      </li>
    </ul>
  </div>
</b:includable>
            <b:includable id='sharingPlatformIcon'>
  <b:include data='{ iconClass: (&quot;touch-icon sharing-&quot; + data:platform.key) }' expr:name='data:platform.key + &quot;Icon&quot;'/>
</b:includable>
            <b:includable id='snippetedPostByline'>
  <b:with value='(data:widgets first (w =&gt; w.type == &quot;Blog&quot;)).allBylineItems' var='blogBylines'>
    <div class='item-byline'>
      <b:with value='data:blogBylines first (i =&gt; i.name == &quot;author&quot;)' var='byline'>
        <b:include cond='data:byline and data:this.postDisplay.showAuthor' data='post' name='postAuthor'/>
      </b:with>
      <b:with value='data:blogBylines first (i =&gt; i.name == &quot;timestamp&quot;)' var='byline'>
        <b:include cond='data:byline and data:this.postDisplay.showDate' data='post' name='postTimestamp'/>
      </b:with>
    </div>
  </b:with>
</b:includable>
            <b:includable id='snippetedPostContent'>
          <li>
            <b:if cond='data:this.postDisplay.showFeaturedImage'>
              <div class='item-thumbnail'>
                <a expr:href='data:post.url' expr:title='data:post.title'><img class='lazy' expr:alt='data:post.title' expr:data-src='data:post.featuredImage ? resizeImage(data:post.featuredImage, 100, &quot;1:1&quot;) : resizeImage(&quot;https://1.bp.blogspot.com/-msLPy2sUgRs/XsaanLh7hdI/AAAAAAAAIjQ/sMfL_VE-30MWP5PI9at8dzKtZW0igRHDgCK4BGAsYHg/s1600/igniplex-noimage.png&quot;, 100, &quot;1:1&quot;)' expr:title='data:post.title' expr:width='100' height='100' src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='/></a>
              </div>
            </b:if>
            <div class='item-content'>
              <div class='item-title'>
                <a expr:href='data:post.url' expr:title='data:post.title'><data:post.title/></a>
              </div>
              <b:if cond='data:this.postDisplay.showSnippet'>
                <b:with value='&quot;popular-posts&quot;' var='snippetPrefix'>
                  <div class='item-snippet'>
                    <b:eval expr='snippet(data:post.snippets.short, {length: 100, links: false, linebreaks: false})'/>
                  </div>
                </b:with>
              </b:if>
            </div>
          </li>
        </b:includable>
            <b:includable id='snippetedPostThumbnail'>
  <div class='item-thumbnail'>
    <a expr:href='data:post.url'>
      <b:include data='{                         image: data:post.featuredImage,                         imageSizes: [72, 144],                         imageRatio: &quot;1:1&quot;,                         sourceSizes: &quot;72px&quot;                        }' name='responsiveImage'/>
    </a>
  </div>
</b:includable>
            <b:includable id='snippetedPostTitle'>
  <b:if cond='data:post.title != &quot;&quot;'>
    <h3 class='post-title'><a expr:href='data:post.url'><data:post.title/></a></h3>
  </b:if>
</b:includable>
            <b:includable id='snippetedPosts'>
          <ul>
            <b:loop values='data:posts' var='post'>
              <b:include data='post' name='snippetedPostContent'/>
            </b:loop>
            <b:if cond='!data:postDisplay.showFeaturedImage'>
              <b:class name='noimage'/>
              <b:if cond='!data:postDisplay.showSnippet'>
                <b:class name='nodesc'/>
              </b:if>
            </b:if>
          </ul>
        </b:includable>
          </b:widget>
        </b:section>
        <b:section class='sidebar' cond='!data:view.isPage' id='sidebarSticky' showaddelement='true'>
          <b:widget id='HTML4' locked='true' title='Sticky  Advertisement (Ads)' type='HTML' version='2' visible='true'>
            <b:widget-settings>
              <b:widget-setting name='content'>Sticky ads</b:widget-setting>
            </b:widget-settings>
            <b:includable id='main'>
            <b:include name='widget-title'/>
            <div class='widget-content'>
              <data:content/>
            </div>
          </b:includable>
          </b:widget>
        </b:section>
      </div>
    </main>

    <footer>
      <b:if cond='!data:view.isPage'>
        <div class='footer-inner'>
          <b:section id='footerLeft' showaddelement='true'>
            <b:widget id='HTML7' locked='true' title='Left' type='HTML' visible='true'>
              <b:widget-settings>
                <b:widget-setting name='content'>The pain itself is powered by pain, it is the main customer, but I give it time to fall into this kind of pain, so that some great pain. The disease is now in the throat.</b:widget-setting>
              </b:widget-settings>
              <b:includable id='main'>
  <b:include name='widget-title'/>
  <div class='widget-content'>
    <data:content/>
  </div>
</b:includable>
            </b:widget>
          </b:section>
          <b:section id='footerMiddle' showaddelement='true'>
            <b:widget id='HTML8' locked='true' title='Middle' type='HTML' visible='true'>
              <b:widget-settings>
                <b:widget-setting name='content'>The pain itself is powered by pain, it is the main customer, but I give it time to fall into this kind of pain, so that some great pain. The disease is now in the throat.</b:widget-setting>
              </b:widget-settings>
              <b:includable id='main'>
  <b:include name='widget-title'/>
  <div class='widget-content'>
    <data:content/>
  </div>
</b:includable>
            </b:widget>
          </b:section>
          <b:section id='footerRight' showaddelement='true'>
            <b:widget id='HTML9' locked='true' title='Right' type='HTML' visible='true'>
              <b:widget-settings>
                <b:widget-setting name='content'>The pain itself is powered by pain, it is the main customer, but I give it time to fall into this kind of pain, so that some great pain. The disease is now in the throat.</b:widget-setting>
              </b:widget-settings>
              <b:includable id='main'>
  <b:include name='widget-title'/>
  <div class='widget-content'>
    <data:content/>
  </div>
</b:includable>
            </b:widget>
          </b:section>
        </div>
      </b:if>
      <div class='attribution'>
Copyright &#169; <script>document.write(new Date().getFullYear())</script> <a expr:href='data:blog.homepageUrl' expr:title='data:blog.title'><data:blog.title/></a> &#8231;  All rights reserved. <br/><span style='opacity: 0;'>Made with &#9829; by <a href='https://codestore360.blogspot.com/'>Blogging SEO Guide</a></span>
      </div>
    </footer>

    <div class='totop'/>

    <b:include name='igniplexScript'/>
  </b:if>
  &lt;!--</body>--&gt;&lt;/body&gt;
</html>
