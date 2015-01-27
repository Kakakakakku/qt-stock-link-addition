var user_path = $(".dropdown-menu:last > li > a:first").attr('href');
var stock_path = user_path + '/stock';
var base = $(".globalNotifications");
base.before('<li class="hidden-xs"><a href="' + stock_path + '">ストック一覧</a></li>');
