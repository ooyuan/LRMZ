var LIZI=LIZI||{};LIZI.platform={init:function(){var a=this;a.searchBar(),a.mainNav(),require(["sidebar"],function(a){a()})},searchBar:function(){var a=$("#search_fm").find("input.sea_input");LIZI.check.isAppView()||require(["autosearch"],function(b){b({elem:a,url:"/itemSearch/lenovo",initkey:"面膜",placeholder:"请输入商品或品牌"})})},mainNav:function(){var a=$("#J_mainCata"),b=$("#J_subCata"),c=$("#main_nav"),d=null,e=!1,f=!1;$("#mall-slide").length>0&&(f=!0),c.on("mouseenter",function(){var b=$(this);null!==d&&clearTimeout(d),f||(d=setTimeout(function(){b.addClass("main_nav_hover"),a.stop().show().animate({opacity:1,height:500},300)},200))}).on("mouseleave",function(){null!==d&&clearTimeout(d),d=setTimeout(function(){b.css({opacity:0,left:"100px"}).find(".J_subView").hide(),e=!1,f?a.find("li").removeClass("current"):a.stop().delay(200).animate({opacity:0,height:0},300,function(){c.removeClass("main_nav_hover"),a.hide().find("li").removeClass("current")})},200)})}},$(function(){LIZI.platform.init()});