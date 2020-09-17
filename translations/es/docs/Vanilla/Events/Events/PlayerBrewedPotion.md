# Poción elaborada por jugador

El Evento de PlayerBrewedPotion se activa cada vez que un jugador saca una poción del stand de cerveza.

## Clase de evento

Necesitarás lanzar el evento en la cabecera de la función como esta clase:  
`crafttweaker.event. layerBrewedPotionEvent`  
Puede, por supuesto, también [importar](/AdvancedFunctions/Import/) la clase antes y usar ese nombre entonces.

## Extensiones de la interfaz de eventos

Eventos de PlayerBrewedPotion implementan las siguientes interfaces y pueden llamar a todos sus métodos/getters/setters también:

- [Evento IJugador](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

La siguiente información puede ser recuperada del evento:

| ZenGetter | Tipo de devolución                       |
| --------- | ---------------------------------------- |
| `jugador` | [IPlayer](/Vanilla/Players/IPlayer/)     |
| `poción`  | [IItemStack](/Vanilla/Items/IItemStack/) |
| `mano`    | cadena                                   |