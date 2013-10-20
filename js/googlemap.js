function GoogleMap(latitud,longitud){
    
    this.initialize = function(){
        var map = showMap(latitud,longitud);
        addMarkersToMap(map);
    }    
    
    var addMarkersToMap = function(map){
        //var mapBounds = new google.maps.LatLngBounds();


        /* //////////////////////// Nuevas POSICIONES //////////////////////// */
        var llActual = new google.maps.LatLng(latitud,longitud);

        var llPATIOANDALUZ = new google.maps.LatLng(-0.218478,-78.5111);
        var llTRATTORIAPICCOLOMONDO = new google.maps.LatLng(-2.170521498,-79.91062164);
        var llALOWORLDFUSION = new google.maps.LatLng(-2.142798246,-79.86275702);        
        var llDaLUIGIRISTORANTE = new google.maps.LatLng(-2.167833328,-79.91062164);        
        var llELFOGONCARNESYVINOS = new google.maps.LatLng(-2.1444,-79.8643);        
        var llDRIVINGRANGE = new google.maps.LatLng(-2.0937175111598325,-79.8736283769543);
        var llCOPAAIRLINES = new google.maps.LatLng(-2.192370653,-79.87960863);
        var llINTERLABKENNEDY = new google.maps.LatLng(-2.17275,-79.8987);
        var llINTERLABKENNEDYVIEJA = new google.maps.LatLng(-2.160306931,-79.89977264);
        var llINTERLABPPGOMEZ = new google.maps.LatLng(-2.19721818,-79.88850403);
        var llINTERLABCLINICAALCIVAR = new google.maps.LatLng(-2.214586258,-79.89083099);
        var llPUNTOMEDICOFAMILIAR = new google.maps.LatLng(-2.177911043,-79.90164948);
        var llPUNTOMEDICOFAMILIARSUR = new google.maps.LatLng(-2.214780092,-79.89038086);   
        var llFARMACIAZALBORADA = new google.maps.LatLng(-2.13483,-79.9037);
        var llFARMACIAZKennedy = new google.maps.LatLng(-2.17275,-79.8987);
        var llFARMACIAZSamborondon = new google.maps.LatLng(-2.138197183,-79.86424685);
        var llFARMACIAZSUR = new google.maps.LatLng(-2.230280259,-79.90013595);
        var llREDCRABURDESA = new google.maps.LatLng(-2.16167,-79.9156);
        var llREDCRABSamborondon = new google.maps.LatLng(-2.148753,-79.866422);
        var llPIZZAHUTURDESA = new google.maps.LatLng(-2.170946121,-79.90878296);
        var llPIZZAHUTCentro = new google.maps.LatLng(-2.216066599,-79.88858795);
        var llJUANMARCETAlborada = new google.maps.LatLng(-2.136454582,-79.90082097);
        var llJUANMARCETCentro = new google.maps.LatLng(-2.196939945,-79.88243103);
        var llJUANMARCETKennedy = new google.maps.LatLng(-2.16645158,-79.89566623);
        var llJUANMARCETUrdesa = new google.maps.LatLng(-2.171434074130254,-79.90837557463529);

        var llSanMarino = new google.maps.LatLng(-2.16943,-79.898);

        var llriocentroEntreRios = new google.maps.LatLng(-2.1420831050185667,-79.86383294944918);

        var llriocentroCeibos = new google.maps.LatLng(-2.176369338809716,-79.94308335993541);

        var llriocentroSur = new google.maps.LatLng(-2.242349796,-79.89451667);

        var llmallDelSol = new google.maps.LatLng(-2.15601,-79.8937);

        var llpolicentro = new google.maps.LatLng(-2.17081,-79.8991);

        var llaventuraPlaza = new google.maps.LatLng(-2.172913551,-79.9139626);

        var llHIPERMARKETNORTE = new google.maps.LatLng(-2.126068241,-79.90545093);

        var llCOPAAIRLINES = new google.maps.LatLng(-2.140913323,-79.86451335);



        /* //////////////////////// Fin POSICIONES //////////// */


        /* //////////////////////// Nuevos Markers //////////////////////// */

        var markerActual = new google.maps.Marker({
                    position: llActual,
                    map: map
        });

        var markerPATIOANDALUZ = new google.maps.Marker({
                    position: llPATIOANDALUZ,
                    map: map
        });

        var markerTRATTORIAPICCOLOMONDO = new google.maps.Marker({
                    position: llTRATTORIAPICCOLOMONDO,
                    map: map
        });

        var markerALOWORLDFUSION = new google.maps.Marker({
                    position: llALOWORLDFUSION,
                    map: map
        });

        var markerDaLUIGIRISTORANTE = new google.maps.Marker({
                    position: llDaLUIGIRISTORANTE,
                    map: map
        });

        var markerELFOGONCARNESYVINOS = new google.maps.Marker({
                    position: llELFOGONCARNESYVINOS,
                    map: map
        });

        var markerDRIVINGRANGE = new google.maps.Marker({
                    position: llDRIVINGRANGE,
                    map: map
        });

        var markerCOPAAIRLINES = new google.maps.Marker({
                    position: llCOPAAIRLINES,
                    map: map
        });

        var markerINTERLABKENNEDY = new google.maps.Marker({
                    position: llINTERLABKENNEDY,
                    map: map
        });

        var markerINTERLABKENNEDYVIEJA = new google.maps.Marker({
                    position: llINTERLABKENNEDYVIEJA,
                    map: map
        });

        var markerINTERLABPPGOMEZ = new google.maps.Marker({
                    position: llINTERLABPPGOMEZ,
                    map: map
        });

        var markerINTERLABCLINICAALCIVAR = new google.maps.Marker({
                    position: llINTERLABCLINICAALCIVAR,
                    map: map
        });

        var markerPUNTOMEDICOFAMILIAR = new google.maps.Marker({
                    position: llPUNTOMEDICOFAMILIAR,
                    map: map
        });

        var markerPUNTOMEDICOFAMILIARSUR = new google.maps.Marker({
                    position: llPUNTOMEDICOFAMILIARSUR,
                    map: map
        });


        var markerFARMACIAZALBORADA = new google.maps.Marker({
                    position: llFARMACIAZALBORADA,
                    map: map
        });

        var markerFARMACIAZKennedy = new google.maps.Marker({
                    position: llFARMACIAZKennedy,
                    map: map
        });

        var markerFARMACIAZSamborondon = new google.maps.Marker({
                    position: llFARMACIAZSamborondon,
                    map: map
        });

        var markerFARMACIAZSUR = new google.maps.Marker({
                    position: llFARMACIAZSUR,
                    map: map
        });

        var markerREDCRABURDESA = new google.maps.Marker({
                    position: llREDCRABURDESA,
                    map: map
        });

        var markerREDCRABSamborondon = new google.maps.Marker({
                    position: llREDCRABSamborondon,
                    map: map
        });

        var markerPIZZAHUTURDESA = new google.maps.Marker({
                    position: llPIZZAHUTURDESA,
                    map: map
        });

        var markerPIZZAHUTCentro = new google.maps.Marker({
                    position: llPIZZAHUTCentro,
                    map: map
        });

        var markerJUANMARCETAlborada = new google.maps.Marker({
                    position: llJUANMARCETAlborada,
                    map: map
        });

        var markerJUANMARCETCentro = new google.maps.Marker({
                    position: llJUANMARCETCentro,
                    map: map
        });

        var markerJUANMARCETKennedy = new google.maps.Marker({
                    position: llJUANMARCETKennedy,
                    map: map
        });


        var markerJUANMARCETUrdesa = new google.maps.Marker({
                    position: llJUANMARCETUrdesa,
                    map: map
        });

        var markerSanMarino = new google.maps.Marker({
                    position: llSanMarino,
                    map: map
        });

        var markerriocentroEntreRios = new google.maps.Marker({
                    position: llriocentroEntreRios,
                    map: map
        });

        var markerriocentroCeibos = new google.maps.Marker({
                    position: llriocentroCeibos,
                    map: map
        });

        var markerriocentroSur = new google.maps.Marker({
                    position: llriocentroSur,
                    map: map
        });


        var markermallDelSol = new google.maps.Marker({
                    position: llmallDelSol,
                    map: map
        });

        var markerpolicentro = new google.maps.Marker({
                    position: llpolicentro,
                    map: map
        });

        var markeraventuraPlaza = new google.maps.Marker({
                    position: llaventuraPlaza,
                    map: map
        });

        var markerHIPERMARKETNORTE = new google.maps.Marker({
                    position: llHIPERMARKETNORTE,
                    map: map
        });

        var markerCOPAAIRLINES = new google.maps.Marker({
                    position: llCOPAAIRLINES,
                    map: map
        });
        

        /* //////////////////////// Fin de los Nuevos //////////// */



    
        
        //mapBounds.extend(markerActual);

         var labelPosicionActual = new google.maps.InfoWindow({
           content: "<h3>Me encuentro aqu&iacute;...</h3>"
         });

         var labelPATIOANDALUZ = new google.maps.InfoWindow({
           content: "<h3>Monitor de 15</h3><p>Estado: Funcionando</p><p><img src='img/reciclajes/monitor.jpg' /></p><p>Contacto: 02217266</p>"
         });

         var labelTRATTORIAPICCOLOMONDO = new google.maps.InfoWindow({
           content: "<h3>CPU 2GHZ</h3><p>Estado: Funcionando</p><p><img src='img/reciclajes/cpu.jpg' /></p><p>Tel&eacute;fono: 04219992</p>"
         });

         var labelALOWORLDFUSION = new google.maps.InfoWindow({
           content: "<h3>Teclado USB</h3><p>Estado: Funcionando</p><p><img src='img/reciclajes/teclado.jpg' /></p><p>Tel&eacute;fono: 042830292 - 042837349</p>"
         });

         var labelDaLUIGIRISTORANTE = new google.maps.InfoWindow({
           content: "<h3>Disco Duro</h3><p>Tel&eacute;fono: 042883790</p>"
         });

         var labelELFOGONCARNESYVINOS = new google.maps.InfoWindow({
           content: "<h3>Memoria RAM 2GB</h3><p>Tel&eacute;fono: 042837624</p>"
         });

         var labelDRIVINGRANGE = new google.maps.InfoWindow({
           content: "<h3>MONITOR 17</h3><p>Estado: Funcionando</p><p><img src='img/reciclajes/monitor.jpg' /></p><p>Tel&eacute;fono: 04286000</p>"
         });

         var labelCOPAAIRLINES = new google.maps.InfoWindow({
           content: "<h3>MOUSE USB</h3><p>Estado: Funcionando</p><p><img src='img/reciclajes/mouse.jpg' /></p><p>Tel&eacute;fono: 042303211</p>"
         });

         var labelINTERLABKENNEDY = new google.maps.InfoWindow({
           content: "<h3>TECLADO INALAMBRICO</h3><p>Estado: Funcionando</p><p><img src='img/reciclajes/teclado.jpg' /></p><p>Tel&eacute;fono: 042294710</p>"
         });

         var labelINTERLABKENNEDYVIEJA = new google.maps.InfoWindow({
           content: "<h3>CPU 2GHZ</h3><p>Estado: Funcionando</p><p><img src='img/reciclajes/cpu.jpg' /></p><p>Tel&eacute;fono: 042294710</p>"
         });

         var labelINTERLABPPGOMEZ = new google.maps.InfoWindow({
           content: "<h3>iMac Completa</h3><p>Tel&eacute;fono: 042294710</p>"
         });

         var labelINTERLABCLINICAALCIVAR = new google.maps.InfoWindow({
           content: "<h3>Disco duro 200GB</h3><p>Tel&eacute;fono: 042294710</p>"
         });

         var labelPUNTOMEDICOFAMILIAR = new google.maps.InfoWindow({
           content: "<h3>TECLADO</h3><p>Estado: Funcionando</p><p><img src='img/reciclajes/teclado.jpg' /></p><p>Tel&eacute;fono: 046009600</p>"
         });

        var labelPUNTOMEDICOFAMILIARSUR = new google.maps.InfoWindow({
           content: "<h3>MONITOR 13 PULGADAS</h3><p>Estado: Funcionando</p><p><img src='img/reciclajes/monitor.jpg' /></p><p>Tel&eacute;fono: 046009600</p>"
         });

        var labelFARMACIAZALBORADA = new google.maps.InfoWindow({
           content: "<h3>PARLANTES PEQUEÑOS</h3><p>Tel&eacute;fono: 042642367</p>"
         });


        var labelFARMACIAZKennedy = new google.maps.InfoWindow({
           content: "<h3>MAINBOARD PROCESADOR CORE 2 DUO</h3><p>Tel&eacute;fono: 042642367</p>"
         });


        var labelFARMACIAZSamborondon = new google.maps.InfoWindow({
           content: "<h3>IMPRESORA CANON FUNCIONANDO</h3><p>Tel&eacute;fono: 042642367</p>"
         });


        var labelFARMACIAZSUR = new google.maps.InfoWindow({
           content: "<h3>IMPRESORA MATRICIAL</h3><p>Tel&eacute;fono: 042642367</p>"
         });

        var labelREDCRABURDESA = new google.maps.InfoWindow({
           content: "<h3>CPU</h3><p>Estado: Funcionando</p><p><img src='img/reciclajes/cpu.jpg' /></p><p>Tel&eacute;fono: 042380512</p>"
         });

        var labelREDCRABSamborondon = new google.maps.InfoWindow({
           content: "<h3>CPU Buen estado </h3><p>Estado: Funcionando</p><p><img src='img/reciclajes/cpu.jpg' /></p><p>Direcci&oacute;n: Km 2.5 Av. Liceo de Francia (Junto a Plaza Nova).</p><p>Tel&eacute;fono: 042831110</p>"
         });


        var labelPIZZAHUTURDESA = new google.maps.InfoWindow({
           content: "<h3>TECLADO</h3><p>Tel&eacute;fono: 042886077</p>"
         });

        var labelPIZZAHUTCentro = new google.maps.InfoWindow({
           content: "<h3>TECLADO</h3><p>Tel&eacute;fono: 042447966</p>"
         });


        var labelJUANMARCETAlborada = new google.maps.InfoWindow({
           content: "<h3>FUENTE DE PODER</h3><p>Tel&eacute;fono: 042511600</p>"
         });

        var labelJUANMARCETCentro = new google.maps.InfoWindow({
           content: "<h3>CASE PARA COMPUTADORA</h3><p>Tel&eacute;fono: 042511600</p>"
         });

        var labelJUANMARCETKennedy = new google.maps.InfoWindow({
           content: "<h3>CABLE PARA FUENTE DE PODER</h3><p>Tel&eacute;fono: 042511600</p>"
         });

        var labelJUANMARCETUrdesa = new google.maps.InfoWindow({
           content: "<h3>AUDIFONOS PARA COMPUTADORA</h3><p>Tel&eacute;fono: 042511600</p>"
         });


        var labelSanMarino = new google.maps.InfoWindow({
           content: "<h3>MONITOR 12 PULGADAS</h3><p>Estado: Funcionando</p><p><img src='img/reciclajes/monitor.jpg' /></p><p>Tel&eacute;fono: 042640160</p>"
         });

        var labelriocentroEntreRios = new google.maps.InfoWindow({
           content: "<h3>MONITOR 20 PULGADAS VGA</h3><p>Estado: Funcionando</p><p><img src='img/reciclajes/monitor.jpg' /></p><p>Tel&eacute;fono: 042511600</p>"
         });


        var labelriocentroCeibos = new google.maps.InfoWindow({
           content: "<h3>TECLADO</h3><p>Estado: Funcionando</p><p><img src='img/reciclajes/teclado.jpg' /></p><p>Tel&eacute;fono: 042511600</p>"
         });


        var labelriocentroSur = new google.maps.InfoWindow({
           content: "<h3>CPU</h3><p>Estado: Funcionando</p><p><img src='img/reciclajes/cpu.jpg' /></p><p>Tel&eacute;fono: 042511600</p>"
         });

        var labelmallDelSol = new google.maps.InfoWindow({
           content: "<h3>MEMORIA RAM 8GB</h3><p>Tel&eacute;fono: 042082578</p>"
         });

        var labelpolicentro = new google.maps.InfoWindow({
           content: "<h3>CPU</h3><p>Estado: Funcionando</p><p><img src='img/reciclajes/cpu.jpg' /></p><p>Tel&eacute;fono: 042288310 - 042290660</p>"
         });


        var labelaventuraPlaza = new google.maps.InfoWindow({
           content: "<h3>COMPUTADORA COMPLETA</h3><p>Tel&eacute;fono: 042220566 - 042220542.</p><br />"
         });


        var labelHIPERMARKETNORTE = new google.maps.InfoWindow({
           content: "<h3>MOUSE INALAMBRICO</h3><p>Tel&eacute;fono: 042647724 - 042880444</p>"
         });

        var labelCOPAAIRLINES = new google.maps.InfoWindow({
           content: "<h3>TECLADO INALAMBRICO</h3><p>Estado: Funcionando</p><p><img src='img/reciclajes/teclado.jpg' /></p><p>Tel&eacute;fono: 042303211</p>"
         });


 
        /* Al marker le agrego el label */
        google.maps.event.addListener(markerActual, "click", function (e) { labelPosicionActual.open(map, this); });
        google.maps.event.addListener(markerPATIOANDALUZ, "click", function (e) { labelPATIOANDALUZ.open(map, this); });
        google.maps.event.addListener(markerTRATTORIAPICCOLOMONDO, "click", function (e) { labelTRATTORIAPICCOLOMONDO.open(map, this); });        
        google.maps.event.addListener(markerALOWORLDFUSION, "click", function (e) { labelALOWORLDFUSION.open(map, this); });        
        google.maps.event.addListener(markerDaLUIGIRISTORANTE, "click", function (e) { labelDaLUIGIRISTORANTE.open(map, this); });        
        google.maps.event.addListener(markerELFOGONCARNESYVINOS, "click", function (e) { labelELFOGONCARNESYVINOS.open(map, this); });
        google.maps.event.addListener(markerDRIVINGRANGE, "click", function (e) { labelDRIVINGRANGE.open(map, this); });
        google.maps.event.addListener(markerCOPAAIRLINES, "click", function (e) { labelCOPAAIRLINES.open(map, this); });
        google.maps.event.addListener(markerINTERLABKENNEDY, "click", function (e) { labelINTERLABKENNEDY.open(map, this); });
        google.maps.event.addListener(markerINTERLABKENNEDYVIEJA, "click", function (e) { labelINTERLABKENNEDYVIEJA.open(map, this); });
        google.maps.event.addListener(markerINTERLABPPGOMEZ, "click", function (e) { labelINTERLABPPGOMEZ.open(map, this); });        
        google.maps.event.addListener(markerINTERLABCLINICAALCIVAR, "click", function (e) { labelINTERLABCLINICAALCIVAR.open(map, this); });        
        google.maps.event.addListener(markerPUNTOMEDICOFAMILIAR, "click", function (e) { labelPUNTOMEDICOFAMILIAR.open(map, this); });        
        google.maps.event.addListener(markerPUNTOMEDICOFAMILIARSUR, "click", function (e) { labelPUNTOMEDICOFAMILIARSUR.open(map, this); });
        google.maps.event.addListener(markerFARMACIAZALBORADA, "click", function (e) { labelFARMACIAZALBORADA.open(map, this); });                
        google.maps.event.addListener(markerFARMACIAZKennedy, "click", function (e) { labelFARMACIAZKennedy.open(map, this); });                
        google.maps.event.addListener(markerFARMACIAZSamborondon, "click", function (e) { labelFARMACIAZSamborondon.open(map, this); });                
        google.maps.event.addListener(markerFARMACIAZSUR, "click", function (e) { labelFARMACIAZSUR.open(map, this); });           
        google.maps.event.addListener(markerREDCRABURDESA, "click", function (e) { labelREDCRABURDESA.open(map, this); });                        
        google.maps.event.addListener(markerREDCRABSamborondon, "click", function (e) { labelREDCRABSamborondon.open(map, this); });                        
        google.maps.event.addListener(markerPIZZAHUTURDESA, "click", function (e) { labelPIZZAHUTURDESA.open(map, this); });        
        google.maps.event.addListener(markerPIZZAHUTCentro, "click", function (e) { labelPIZZAHUTCentro.open(map, this); });        
        google.maps.event.addListener(markerJUANMARCETAlborada, "click", function (e) { labelJUANMARCETAlborada.open(map, this); });                
        google.maps.event.addListener(markerJUANMARCETCentro, "click", function (e) { labelJUANMARCETCentro.open(map, this); });                        
        google.maps.event.addListener(markerJUANMARCETKennedy, "click", function (e) { labelJUANMARCETKennedy.open(map, this); });                                
        google.maps.event.addListener(markerJUANMARCETUrdesa, "click", function (e) { labelJUANMARCETUrdesa.open(map, this); });                                    
        google.maps.event.addListener(markerSanMarino, "click", function (e) { labelSanMarino.open(map, this); });                                            
        google.maps.event.addListener(markerriocentroEntreRios, "click", function (e) { labelriocentroEntreRios.open(map, this); });                                                    
        google.maps.event.addListener(markerriocentroCeibos, "click", function (e) { labelriocentroCeibos.open(map, this); });                                                            
        google.maps.event.addListener(markerriocentroSur, "click", function (e) { labelriocentroSur.open(map, this); });                                                                    
        google.maps.event.addListener(markermallDelSol, "click", function (e) { labelmallDelSol.open(map, this); });        
        google.maps.event.addListener(markerpolicentro, "click", function (e) { labelpolicentro.open(map, this); });                
        google.maps.event.addListener(markeraventuraPlaza, "click", function (e) { labelaventuraPlaza.open(map, this); });                        
        google.maps.event.addListener(markerHIPERMARKETNORTE, "click", function (e) { labelHIPERMARKETNORTE.open(map, this); });                                
        google.maps.event.addListener(markerCOPAAIRLINES, "click", function (e) { labelCOPAAIRLINES.open(map, this); });                                        

         

        //map.fitBounds(mapBounds);
    }
    
    
    
    function showMap(latidud,longitud){
    	//alert("Latitud: "+latitud+" Longitud: "+longitud);
        var mapOptions = {
			     zoom: 13,
			     center: new google.maps.LatLng(latitud,longitud),
			     mapTypeId: google.maps.MapTypeId.ROADMAP,
			 }
			 
        var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
        
        return map;
    }
}