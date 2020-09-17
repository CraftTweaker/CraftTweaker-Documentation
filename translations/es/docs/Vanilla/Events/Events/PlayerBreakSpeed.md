# Velocidad de descanso del jugador

El Evento PlayerBreakSpeed se activa cada vez que un jugador intenta romper un bloque.  
Se puede cancelar para evitar que el jugador pueda romper ese bloque.

## Clase de evento

Necesitarás lanzar el evento en la cabecera de la función como esta clase:  
`crafttweaker.event. layerBreakSpeedEvent`  
Puede, por supuesto, también [importar](/AdvancedFunctions/Import/) la clase antes y usar ese nombre entonces.

## Extensiones de la interfaz de eventos

PlayerBreakSpeed Events implementa las siguientes interfaces y son capaces de llamar a todos sus métodos/getters/setters también:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [Evento IJugador](/Vanilla/Events/Events/IPlayerEvent/)
- [Evento Posicionable](/Vanilla/Events/Events/IEventPositionable/)

## ZenGetter/Setter

| ZenGetter          | Ajuste          | Tipo                                             |
| ------------------ | --------------- | ------------------------------------------------ |
| estado de bloqueo  |                 | [Estado de IBlock](/Vanilla/Blocks/IBlockState/) |
| bloque             |                 | [IBlock](/Vanilla/Blocks/IBlock/)                |
| velocidad original |                 | flotante                                         |
| nueva velocidad    | nueva velocidad | flotante                                         |