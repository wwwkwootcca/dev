<html><head><title>Regexp checker</title></head><body>
<?php
    $a_pattern= isset($_POST['pattern']) ? $_POST['pattern'] : "";
    $a_ntests = isset($_POST['ntests']) ? $_POST['ntests'] : 1;
    $a_test   = isset($_POST['test']) ? $_POST['test'] : array();

    $res = array(); $maxM=-1;
    foreach($a_test as $t ){
        $rtn = @preg_match('#'.$a_pattern.'#',$t,$m);
        if($rtn == 1){
            $maxM=max($maxM,count($m));
            $res[]=array_merge( array('matched'),  $m );
        } else {
            $res[]=array(($rtn === FALSE ? 'invalid' : 'non-matched'));
        }
    }
?> <p>&nbsp; </p>
<form method="post" action="<?php echo $_SERVER['SCRIPT_NAME'];?>">
    <label for="pl">Regexp Pattern: </label>
    <input id="p" name="pattern" size="50" value="<?php echo htmlentities($a_pattern,ENT_QUOTES,"UTF-8");;?>" />
    <label for="n">&nbsp; &nbsp; Number of test vectors: </label>
    <input id="n" name="ntests"  size="3" value="<?php echo $a_ntests;?>"/>
    <input type="submit" name="go" value="OK"/><hr/><p>&nbsp;</p>
    <table><thead><tr><td><b>Test Vector</b></td><td>&nbsp; &nbsp; <b>Result</b></td>
<?php
    for ( $i=0; $i<$maxM; $i++ ) echo "<td>&nbsp; &nbsp; <b>\$$i</b></td>";
    echo "</tr><tbody>\n";
    for( $i=0; $i<$a_ntests; $i++ ){
        echo '<tr><td>&nbsp;<input name="test[]" value="',
            htmlentities($a_test[$i], ENT_QUOTES,"UTF-8"),'" /></td>';
        foreach ($res[$i] as $v) { echo '<td>&nbsp; &nbsp; ',htmlentities($v, ENT_QUOTES,"UTF-8"),'&nbsp; &nbsp; </td>';}
        echo "</tr>\n";
    }
?> </table></form></body></html>
