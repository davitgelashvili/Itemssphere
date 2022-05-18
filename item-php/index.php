<?php


$base_url = 'https://pro.oho.ge/davit/index.php';

// ასე გამოიძახებ იმ გვერდის სახელს რომელის php ფილიც გინდა რომ გაიხსნას მაგ: მთავარი გვერდი ?act=home
$page_name	= !empty($_GET['act']) ? $_GET['act'] : 'home';


// აქ ვამოწმებთ თუ არსებობს გამოძახებული "home.php" ფაილი სერვერზე
if(file_exists(__DIR__ . "/_inc/views/{$page_name}.php")){
	$view_path = __DIR__ . "/_inc/views/{$page_name}.php";
}else{
	$view_path = __DIR__ . "/_inc/error.php";
}



// აქედან შემოგვაქვს php ფაილები და ვაგენერირებთ ერთ ქონთენთს, უცვლელი რჩება head.php, header.php, footer.php 
include_once "./_inc/head.php";
include_once "./_inc/header.php";
include_once $view_path;
include_once "./_inc/footer.php";


?>