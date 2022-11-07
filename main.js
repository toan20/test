$(document).ready(function(){
  // model-gio-hang//
    $(".box-icon").click(function() {
      var x = document.getElementById("model-giohang");
          x.style.display = "flex";
      });
      $(".icon-close").click(function(){
        var x = document.getElementById("model-giohang");
          x.style.display = "none";
      })
      $("#model-giohang").click(function(){
        var x = document.getElementById("model-giohang");
          x.style.display = "none";
      })
      $("#detail-box").click(function(e){
        e.stopPropagation()
      })
    // model-register//
    $(".btn-register").click(function(){
      var x = document.getElementById("model-register");
          x.style.display = "flex";
    })
    $(".icon-close").click(function(){
      var x = document.getElementById("model-register");
        x.style.display = "none";
    })
    $("#model-register").click(function(){
      var x = document.getElementById("model-register");
        x.style.display = "none";
    })
    $("#box-model-register").click(function(e){
      e.stopPropagation()
    }) 
    // model-login
    $(".btn-login").click(function(){
    var x = document.getElementById("model-login");
        x.style.display = "flex";
    })
    $(".icon-close").click(function(){
    var x = document.getElementById("model-login");
      x.style.display = "none";
    })
    $("#model-login").click(function(){
    var x = document.getElementById("model-login");
      x.style.display = "none";
    })
    $("#box-model-login").click(function(e){
    e.stopPropagation()
    }) 
    // show password-login
    $(".icon-showpassword-login").click(function(){
    var x = document.getElementById("showpassword");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
    });
    // show password-register
    $(".icon-showpassword-register").click(function(){
    var x = document.getElementById("showpassword-register");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
    });
    // show password-ref
    $(".icon-showpassword-ref").click(function(){
    var x = document.getElementById("showpassword-ref");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
    });
    // click-search 
    $(".menu-search").click(function(){
      var menu_search   = document.querySelector(".menu-search");
      var box_search    = document.querySelector(".box-search");
      var input_search  = document.querySelector(".input-search");

      menu_search.classList.add('click-search');
      box_search.classList.add('click-box-search');
      input_search.classList.add('click-input-search');
      $(".icon-close-search").css("display","inline");
      console.log('312');
      
    });
    $(".icon-close-search").click(function(){
      var menu_search   = document.querySelector(".menu-search");
      var box_search    = document.querySelector(".box-search");
      var input_search  = document.querySelector(".input-search");
     
      menu_search.classList.remove('click-search');
      box_search.classList.remove('click-box-search');
      input_search.classList.remove('click-input-search');
      $(".icon-close-search").css("display","none");
      console.log("123");
    });
    $(".icon-close-search").click(function(e){
      e.stopPropagation()
      });
    
})
