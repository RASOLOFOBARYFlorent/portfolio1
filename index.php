<?php


//echo hash('sha256','solo');


$pass=password_hash('solo',PASSWORD_BCRYPT);
$solo='solo';
if(password_verify($solo,$pass)){
    echo  'mety';
}else{
    echo 'diso';
}


    
?>