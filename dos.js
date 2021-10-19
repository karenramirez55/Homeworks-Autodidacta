//OBJECT ORIENTED  PROGRAMMING (OOP) - PROGRAMACION ORIENTADA A OBJETOS (POO)

function mostrar()
{
  
    class Phones {

        constructor(memory, color, mark) {
          this.memory = memory;
          this.color = color;
          this.mark = mark;
          this.information = `Memory: ${memory}, Color: ${color}, Mark ${mark}`;
          this._battery = 100;
        }
      
        info() {
          return alert(this.information);
        }
      
        makeAPhoneCall() {
          if (this._battery == 10) {
            alert("Low battery, charge your phone");
          }
          this._battery -= 10;
        }
        get rechargeBattery() {
          return alert (this._battery);
        }
        
        set rechargeBattery(value) {
          this._battery = value;
        }
      }
      
      const iphone = new Phones(`10Gb`, `White`, `Iphone`);
      iphone.info();
      alert(iphone._battery); // Aca me muestra el valor inicial que es 100 antes de ser modificado a `20`.
      iphone.makeAPhoneCall(); //Este metodo hace que cada vez que se haga una llamada se gasten 10% de bateria
      iphone.makeAPhoneCall();
      iphone.makeAPhoneCall();
      iphone.makeAPhoneCall();
      iphone.makeAPhoneCall(); //RECORDAR QUE SIEMPRE SE LLAMA AL OBJETO.NOMBREDELMETODO();
      iphone.makeAPhoneCall();
      iphone.makeAPhoneCall();
      iphone.makeAPhoneCall();
      iphone.makeAPhoneCall();
      iphone.makeAPhoneCall();
      
      iphone.rechargeBattery = 99; //De esta manera le cambie el valor a 99 mediante set.
      iphone.rechargeBattery; //esta es la manera de ver nuestro metodo get no se le pone () porque no es una funcion es un setter y un getter
      // ES BUENA PRACTICA NO PONER ALERT NI NADA EN NUESTRAS CLASES SINO QUE CADA UNO ELIJA DE QUE MANERA VERLO POR FUERA.
      
      //1) iphone.battery; de esta manera accedo a ver el get? SI.
      //Encapsulamiento y metodo privado son lo mismo. Es lo que hice con this._battery
                      
            //1) se usan Getters y setters solo cuando son metodos privados? No, pero si no queremos que le cambien el valor por fuera le asignamos un metodo privado o lo distingo como hice yo en la variable con ._                    
            //EJERCICIO 1) DALTO OOP:

            class Celulares
            {
                constructor(color,peso,resolucionPantalla,resolucionCamara,memoriaRam)
                {
                    this.color=color;
                    this.peso=peso;
                    this.resolucionPantalla=resolucionPantalla;
                    this.resolucionCamara=resolucionCamara;
                    this.memoriaRam=memoriaRam;
                    this.encendido=false;                  
                    
                }
                botonDeEncendido()
                {
                    if(this.encendido==false)
                    {
                        return alert(`Celular Encendido`); 
                    }
                    else
                    {  
                        return alert(`Celular apagado`);  
                        
                    }
                }
                
                reiniciar()
                {
                    return alert(`Celular reiniciando`);
                }
                sacarFoto()
                {
                    return alert(`Celular sacando foto en una resolucion de ${this.resolucionCamara}`);
                }
                grabar()
                {
                    return alert(`Celular Grabando video en ${this.resolucionCamara}`);
                }
                verInfo()
                {
                    return alert(`Este celular es de color ${this.color}, pesa: ${this.peso}, su resolucion de pantalla es de: ${this.resolucionPantalla}, su resolucion de camara es de: ${this.resolucionCamara} y su memoria ram es de: ${this.memoriaRam}`);         
                }

            }

            const celu1=new Celulares(`Rojo`,`120Grms`,`HD`,`2000 PX`,`4 GB`); //SIEMPRE SE USA CONST PARA LOS OBJETOS EN JS
            const celu2=new Celulares(`Gris`,`100Grms`,`UHD`,`2050 PX`,`2 GB`);
            const celu3=new Celulares(`Negro`,`95 Grms`,`HD`,`1900 PX`,`6 GB`);

            celu3.sacarFoto();
            celu2.botonDeEncendido();
            celu2.botonDeEncendido();
            celu1.grabar();
            celu1.verInfo();

            //EJERCICIO 2) DALTO OOP

            class CelularesAltaGama extends Celulares
            {
                constructor(color,peso,resolucionPantalla,resolucionCamara,memoriaRam,resolucionSegundaCamara) //aca tmb ira lo nuevo
                {
                  super(color,peso,resolucionPantalla,resolucionCamara,memoriaRam) //en super va todo lo que heredamos
                  this.resolucionSegundaCamara=resolucionSegundaCamara;
                }
                verInfo()
                {
                    return alert(`Este celular es de color ${this.color}, pesa: ${this.peso}, su resolucion de pantalla es de: ${this.resolucionPantalla}, su resolucion de camara es de: ${this.resolucionCamara} y su memoria ram es de: ${this.memoriaRam} la resolucion de su segunda camara es ${this.resolucionSegundaCamara}`);         
                }
                grabarEnCamaraLenta()
                {
                  return `En este momento Grabaras en camara Super Lenta con una resolucion de ${this.resolucionSegundaCamara}`;
                }
                reconocimientoFacial()
                {
                  return `A continuacion vamos a realizar un reconocimiento facial`;
                }
            }

           const celu1AltaGama= new CelularesAltaGama(`Azul Brillante`,`90Grms`,`4K`,`3000 PX`,`8 GB`,`600PX`);
           const celu2AltaGama= new CelularesAltaGama(`Verde Loro`,`95Grms`,`HD`,`4000 PX`,`6 GB`,`650PX`);

          celu1AltaGama.verInfo();
          celu2AltaGama.verInfo();
          alert(celu1AltaGama.grabarEnCamaraLenta());
          alert(celu1AltaGama.reconocimientoFacial());

          //EJERCICIO 3) DALTO.

          class PhonesApps
          {
                constructor(cantidadDeDescargas,puntuacion,pesoDeApp)
                {
                  this.cantidadDeDescargas=cantidadDeDescargas;
                  this.puntuacion=puntuacion;
                  this.pesoDeApp=pesoDeApp;
                  this.iniciada=false;
                  this.instalada=false;
                }

               
                instalationApps()
                {
                  if(this.instalada==false)
                  {
                    this.instalada=true;
                    return `App instalada correctamente`;                             
                  }
                  else
                  { 
                    this.instalada=false;
                    return `Fallo la descarga`;
                  }
                }
                openApps()
                {
                  if(this.iniciada==false && this.instalada==true)
                  {
                    this.iniciada=true; //Estaba apagada antes de entrar, estaba en false, entra y se pone en TRUE porque esta en uso.
                    return `App encendida`
                    
                  }
                }
                
                closeApps()
                {
                  if(this.iniciada==true && this.instalada==true) 
                  {
                    this.iniciada=false;
                    return `App apagada`
                  }
                }

               
                uninstall()
                {
                  if  (this.instalada==true)
                  { this.instalada=false;
                    return `App uninstall`;
                  }
                  
                }                                                
                
                info()
                {
                return `This game have ${this.cantidadDeDescargas} Downloads (descargas) this year and it's puntuation is: ${this.puntuacion} stars of five stars, and it's weight is ${this.pesoDeApp}`
                }
                  //RECORDAR SIEMPRE LLAMAR A LAS PROPIEDADES CON ${THIS.CANTIDADDEDESCARGAS} POR EJEMPLO.

          }

            const snakeGame=new PhonesApps(`2000`,`2.5`,`52.3 MB`);
            const superMarioBross= new PhonesApps(`398.000`,`4.5`,`123,10 MB`);

            console.log(snakeGame.info());
            alert(superMarioBross.info());
            alert(superMarioBross.instalationApps());
            alert(superMarioBross.openApps());
            alert(superMarioBross.closeApps());
            alert(superMarioBross.uninstall());
            alert(superMarioBross.openApps()); // ACA ES UN EJEMPLO DE QUE NO LA PUEDO ABRIR PORQUE LA DESINSTALE Y no se puede abrir sino esta instalada porque es lo que puse en mi codigo para OPEN APP. 
                                              
            
            
            
            
}
