# Jugador en la cama

El Evento PlayerSleepInBed se activa cada vez que un jugador duerme. Este evento puede controlar si el jugador es capaz de dormir estableciendo `resultado`.

## Clase de evento

Necesitarás lanzar el evento en la cabecera de la función como esta clase:  
`crafttweaker.event. layerSleepInBedEvent`  
Puede, por supuesto, también [importar](/AdvancedFunctions/Import/) la clase antes y utilizar ese nombre entonces.

## Extensiones de la interfaz de eventos

Los eventos PlayerSleepInBed implementan las siguientes interfaces y pueden llamar a todos sus métodos/getters/setters también:

* [Evento IJugador](/Vanilla/Events/Events/IPlayerEvent/)
* [Evento Posicionable](/Vanilla/Events/Events/IEventPositionable/)

## Tipos de resultado

* NOT_POSSIBLE 
* NOT_POSSIBLE_NOW 
* NOT_SAPE 
* Ok 
* Otro_PROBLEM 
* FARE_DESC 

## ZenGetters

La siguiente información puede ser recuperada del evento:

| ZenGetter   | Tipo de devolución                         |
| ----------- | ------------------------------------------ |
| `x`         | int                                        |
| `y`         | int                                        |
| `z`         | int                                        |
| `jugador`   | [IPlayer](/Vanilla/Players/IPlayer/)       |
| `resultado` | cadena (los valores posibles están arriba) |

## ZenSetters

Lo siguiente puede establecerse en el evento:

| Ajuste      | Tipo de parámetro                          |
| ----------- | ------------------------------------------ |
| `resultado` | cadena (los valores posibles están arriba) |