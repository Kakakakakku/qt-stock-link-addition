var user_path = $(".dropdown-menu:last > li > a:first").attr('href');
var stock_path = user_path + '/stock';
var base = $(".hidden-xs:eq(4)");
base.after('<li class="hidden-xs"><a href="' + stock_path + '">ストック一覧</a></li>');
