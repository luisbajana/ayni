


  // If you want to prevent dragging, uncomment this section
  /*
  function preventBehavior(e) 
  { 
      e.preventDefault(); 
    };
  document.addEventListener("touchmove", preventBehavior, false);
  */
  
  /* If you are supporting your own protocol, the var invokeString will contain any arguments to the app launch.
  see http://iphonedevelopertips.com/cocoa/launching-your-own-application-via-a-custom-url-scheme.html
  for more details -jm */
  /*
  function handleOpenURL(url)
  {
    // TODO: do something with the url passed in.
  }
  */
  
  function onBodyLoad()
  {   
    document.addEventListener("deviceready", onDeviceReady, false);
    
    
    
    
  }
  
  /* When this function is called, Cordova has been initialized and is ready to roll */
  /* If you are supporting your own protocol, the var invokeString will contain any arguments to the app launch.
  see http://iphonedevelopertips.com/cocoa/launching-your-own-application-via-a-custom-url-scheme.html
  for more details -jm */
  function onDeviceReady()
  {

  
  
  var date = new Date();


    
    var hour = date.getHours();
    if( String(date.getMinutes()).length == 1){
        var minutes = "0"+date.getMinutes();        
    }else{ var minutes = date.getMinutes(); }
    
  
  $("#usuario").live("click",function(){
    $(this).val('');
    $("#usuario").focus();
  });
  
  $("#contrasenaFalso").live("click",function(){
    $("#contrasenaFalso").hide();
    $("#contrasena").show();
    $("#contrasena").focus();
  });

  $("#contrasenaFalso").live("focus",function(){
        $("#contrasenaFalso").hide();
        $("#contrasena").show();
        $("#contrasena").focus();
  });  
    


    /* SE VERIFICA EN EL LOCAL STORAGE SI HAY UNA SESION ABIERTA */
       if(localStorage.getItem("username")){
              cargarVentanas();
              cargarDatosTarjeta();
        }
        else{
              $("#contenedorLogin").load('html/login.html' , function(){
                  $("#contenedorLogin").show();
              });
        }
    /* ========================================== */


    function cargarVentanas(){
        

      /* CARGA DEL MENU INFERIOR PRINCIPAL */
        $("#menuInferior").load('html/menuInferior.html' , function(){
            $("#menuInferior").show();
        });

        navigator.geolocation.getCurrentPosition(onSuccess, onError);    

      
    }



    function cargarDatosTarjeta(){

      var banda = localStorage.getItem("banda");

      

      $("#datosTarjeta").html("<p class='nombreUsuario'>"+localStorage.getItem("nombreCompleto")+"</p>"+"<p>"+localStorage.getItem("tarjeta")+"</p>"+"<p>"+localStorage.getItem("vencimiento")+"</p>");
    }

    function esconderVentanas(){
        $("#navBar").hide();
        $("#menuInferior").hide();
        $("#contenedorListaDescuentos").hide();
    }


    /* ASIGNA HANDLER A BOTON DEL LOGIN FORM */
        $("#botonLogin").live("click" , function(){

              $.ajax({

                    type: "GET",
                    url: "http://suscripciones.graficosnacionales.com/damesuscripciontelefono.aspx",
                    data: "usuario="+$("#usuario").val()+"&clave="+$("#contrasena").val(),

                    success: function(html){
                         var respuesta = jQuery.parseJSON(html);

                         /*
                            PSEUDO CODIGO

                            1.- Si no coinciden el usuario y contraseña 
                                -> Mensaje del webservice

                            2.- Si el usuario y contraseña coinciden 
                                -> Se guardan en storage el usuario y contrasena
                                -> Se presentan los elementos de la interfaz
                         */

                         if(respuesta.Respuesta['0'].estado == 'KO'){
                              $("#mensajeLogin").show();
                              $("#mensajeLogin").html(respuesta.Respuesta['0'].mensaje);
                         }

                         else if(respuesta.Respuesta['0'].estado == 'OK'){

                              var tarjeta = respuesta.Respuesta['0'].tarjeta;
                              var fecha_validez = respuesta.Respuesta['0'].fecha_validez;

                                /* LOCAL STORAGE */
                                  localStorage.setItem("username", $("#usuario").val());
                                  localStorage.setItem("password", $("#contrasena").val());
                                  
                                  localStorage.setItem("nombreCompleto", respuesta.Respuesta['0'].nombres+" "+respuesta.Respuesta['0'].apellidos);
                                  localStorage.setItem("tarjeta", respuesta.Respuesta['0'].tarjeta);
                                  localStorage.setItem("vencimiento", respuesta.Respuesta['0'].fecha_validez);  

                                  localStorage.setItem("banda", respuesta.Respuesta['0'].banda);  
                                /* ========== */

                                cargarDatosTarjeta();
                                $("#contenedorLogin").hide();
                                cargarVentanas();
                         }
                         
                    }//fin del success

              });

        });
    /* ========================================== */    


    
    /* INICIO MENU */
    $("#subirElemento").live("click",function(){

          $(".contenedorDescuentos").hide();
          $("#map_canvas").hide();
          $("#contenidoSubir").show();

          $("#perfilDivBoton").attr("class","noactive menuItem");
          $("#descuentosDivBoton").attr("class","noactive menuItem");
          $("#cercaDivBoton").attr("class","noactive menuItem");
          $("#quehacerDivBoton").attr("class","active menuItem");

          navigator.camera.getPicture(onSuccess, onFail, { quality: 50, 
          destinationType: Camera.DestinationType.FILE_URI }); 

          function onSuccess(imageURI) {
              var image = document.getElementById('myImage');
              image.src = imageURI;
          }

          function onFail(message) {
              alert('Failed because: ' + message);
          }


          /* ============ Title ============ */
              $(".contenedorAtras").hide();
              //$("#tituloVentana").html("Son las "+hour+":"+minutes).fadeIn();
              $("#tituloVentana").html("Sube tu tecnología");
              $("#imagenVentana").attr("src","img/quehacer.png");

          /* ========================================== */      
    });



    $("#descuentosBoton").live("click",function(){

          $("#navBar").load('html/navBar.html' , function(){
                $("#navBar").show();
            }); 

            $("#contenedorListaDescuentos").load('html/menuDescuentos.html', function(){
                $("#contenedorListaDescuentos").show();    
            });


          $("#contenidoquehacer").hide();
          $("#descuentosComida").hide();
          $("#map_canvas").hide();

          $("#contenedorListaDescuentos").show();

           $("#perfilDivBoton").attr("class","noactive menuItem");
          $("#quehacerDivBoton").attr("class","noactive menuItem");
          $("#cercaDivBoton").attr("class","noactive menuItem");
          $("#descuentosDivBoton").attr("class","active menuItem");

          /* ============ Title ============ */
              $("#navBar").show();
              $(".contenedorAtras").hide();
              $("#tituloVentana").html("Descuentos").fadeIn();
              $("#imagenVentana").attr("src","img/gift.png");
          /* ========================================== */
    });

  





    $("#cercaboton").live("click",function(){
        $("#contenidoquehacer").hide();
        $("#descuentosComida").hide();

        $(".contenedorDescuentos").hide();
        
        navigator.geolocation.getCurrentPosition(onSuccess, onError);    
        

        $("#descuentosDivBoton").attr("class","noactive menuItem");
        $("#quehacerDivBoton").attr("class","noactive menuItem");
        $("#perfilDivBoton").attr("class","noactive menuItem");
        $("#cercaDivBoton").attr("class","active menuItem");

        //$("#cercaDivBoton").attr("class","active menuItem");



        /* ============ Title ============ */
            $("#navBar").hide();
        /* ========================================== */

    });







    $("#logout").live("click" , function(){

        localStorage.removeItem("username");

        $("#menuInferior").hide();
        
        $("#contenedorLogin").load('html/login.html' , function(){
            $("#contenedorLogin").show();
        });
    });
    /* ----- FIN DEL MENU ------ */

    




    $("#boutiqueBoton").live("click",function(){
        $("#contenedorListaDescuentos").hide();

        $("#boutiqueYAccesorios").load('html/descuentosBoutique.html',function(){
            $("#boutiqueYAccesorios").show();
            $(".contenedorAtras").show();
        });

    });

    $("#comidaRapidaBoton").live("click",function(){
        $("#contenedorListaDescuentos").hide();

        $("#comidaRapida").load('html/descuentosComidaRapida.html',function(){
            $("#comidaRapida").show();
            $(".contenedorAtras").show();
        });        
    });

    $("#entretenimientoBoton").live("click",function(){
        $("#contenedorListaDescuentos").hide();

        $("#entretenimiento").load('html/descuentosEntretenimiento.html',function(){
            $("#entretenimiento").show();
            $(".contenedorAtras").show();
        });        
    });

    $("#hogarBoton").live("click",function(){
        $("#contenedorListaDescuentos").hide();

        $("#hogar").load('html/descuentosHogarDecoracion.html',function(){
            $("#hogar").show();
            $(".contenedorAtras").show();
        });        
    });

  $("#restaurantesBoton").live("click",function(){
        $("#contenedorListaDescuentos").hide();

        $("#restaurantes").load('html/descuentosRestaurantes.html',function(){
            $("#restaurantes").show();
            $(".contenedorAtras").show();
        });        
  });    


  $("#saludBoton").live("click",function(){
        $("#contenedorListaDescuentos").hide();

        $("#salud").load('html/descuentosSaludBelleza.html',function(){
            $("#salud").show();
            $(".contenedorAtras").show();
        });        
  });    

$("#variosBoton").live("click",function(){
        $("#contenedorListaDescuentos").hide();

        $("#varios").load('html/descuentosVarios.html',function(){
            $("#varios").show();
            $(".contenedorAtras").show();
        });        
  });  
    










    $("#atras").live("click",function(){
        $(".contenedorDescuentos").hide();
        $("#contenedorListaDescuentos").show();
        $(".contenedorAtras").hide();
    });


    $(".backEnable").live("click" , function(){
        //$(".contenedorAtras").show();
    });
    
  }

  function onSuccess(position) {
        
        $("#map_canvas").show();

        var map = new GoogleMap(position.coords.latitude,position.coords.longitude);
        map.initialize();

    }
    
    function onError(error) {
           alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
