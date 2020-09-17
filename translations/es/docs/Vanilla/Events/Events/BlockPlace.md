
# Bloquear evento

El evento BlockBreak se dispara cada vez que se coloca un bloque. Puedes cancelar el evento para evitar que el bloque sea colocado.

## Clase de evento
Necesitarás lanzar el evento en la cabecera de la función como esta clase:  
`crafttweaker.event. lockPlaceEvent`  
Por supuesto, también puede [importar](/AdvancedFunctions/Import/) la clase antes y usar ese nombre.

## Extensiones de la interfaz de eventos
Los eventos de BlockPlace implementan las siguientes interfaces y son capaces de llamar a todos sus métodos/getters/setters también:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [Evento IBlock](/Vanilla/Events/Events/IBlockEvent/)


## ZenGetters
La siguiente información puede ser recuperada del evento:

| ZenGetter         | Ajuste | Tipo                                             |
| ----------------- | ------ | ------------------------------------------------ |
| `jugador`         |        | [IPlayer](/Vanilla/Players/IPlayer/)             |
| `actual`          |        | [Estado de IBlock](/Vanilla/Blocks/IBlockState/) |
| `colocado contra` |        | [Estado de IBlock](/Vanilla/Blocks/IBlockState/) |
| `mano`            |        | Cadena                                           |
