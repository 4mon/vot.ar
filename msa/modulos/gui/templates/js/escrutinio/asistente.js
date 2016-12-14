var _slide_index = null;

function pantalla_asistente_cierre(datos_qr){
    if(datos_qr == null){
        $(".con-qr").hide();
        $("#slide_certificados_extra.slide .contenido-slide").css("top","35%");
    } else {
        var svg_data = decodeURIComponent(datos_qr);
        $(".imagen_qr").attr("src", svg_data);
    }
    get_next_slide();
    $("#panel_asistente").on("click", "#boton_anterior", get_prev_slide);
    $("#panel_asistente").on("click", "#boton_siguiente", get_next_slide);
    $("#panel_finalizar").on("click", "#boton_finalizar", mensaje_confirmacion_apagar);
}

function show_slide(){
    var slide = slides_asistente[_slide_index];
    if(typeof(slide) != "undefined"){
        if(_slide_index == slides_asistente.length - 1){
            $("#panel_asistente #boton_siguiente").hide();
            $("#panel_finalizar #boton_finalizar").show();
            $("#panel_asistente #boton_anterior").addClass("borderless");
        } else {
            $("#panel_asistente #boton_siguiente").show();
            $("#panel_finalizar #boton_finalizar").hide();
            $("#panel_asistente #boton_anterior").removeClass("borderless");
        }

        if(_slide_index === 0){
            $("#panel_asistente #boton_anterior").hide();
        } else {
            $("#panel_asistente #boton_anterior").show();
        } 
        patio[slide.id].only();
    }
}

function get_next_slide(){
    sonido_tecla();
    if(_slide_index === null){
        _slide_index = 0;
    } else {
        _slide_index += 1;
    }
    show_slide();
}

function get_prev_slide(){
    sonido_tecla();
    _slide_index -= 1;
    show_slide();
}

function salir(){
    sonido_tecla();
    send("salir");
}

function apagar(){
    sonido_tecla();
    send("apagar");
}
