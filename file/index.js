
setTimeout(function(){

  $(".web").css("display", "block");
  $(".preloader").css("display", "none");
}, 3000);

Context contex = this;
try {
  //just use package name of your app which you want to open
  Intent i = contex.getPackageManager().getLaunchIntentForPackage("com.twidroid.SendTweet");
  contex.startActivity(i);
} catch (NameNotFoundException e) {
  // TODO Auto-generated catch block
}
