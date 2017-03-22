<?php phpinfo
$keys = array_keys($_GET);
foreach($keys as $i=>$key){
	    echo "$i => $key <br>";
}
