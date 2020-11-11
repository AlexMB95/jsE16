function soloAlpha(e, target){
	if (e.keyCode >= 65 && e.keyCode <=90 || e.keyCode >= 97 && e.keyCode<=122) {
		return true;
	}else{
		return false;
	}
}