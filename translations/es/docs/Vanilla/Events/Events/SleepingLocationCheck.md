# Ubicación de sueño

Este evento se activa al comprobar si un jugador puede continuar durmiendo en la ubicación actual. Si tiene un **resultado** que determina la acción.

Resultado:
- **Predeterminado**, devuelve la respuesta predeterminada de Vanilla como se encuentra en la entidad Bed tile
- **Permitir**, permite al jugador continuar durmiendo sin importar
- **Denegar** es específicamente ***ignorado*** en esta instancia y no hace nada.

Por lo tanto, este evento le permite mantener al jugador durmiendo, pero no le permite saltarse la lógica de cama predeterminada.

## Clase de evento
Necesitarás lanzar el evento en la cabecera de la función como esta clase:  
`crafttweaker.event. leepingLocationCheck`  
Puede, por supuesto, también [importar](/AdvancedFunctions/Import/) la clase antes y usar ese nombre entonces.

## Extensiones de la interfaz de eventos
SleepingLocationCheck Events implementan las siguientes interfaces y son capaces de llamar a todos sus métodos/getters/setters también:

- [Evento Posicionable](/Vanilla/Events/Events/IEventPositionable/)
- [Evento IJugador](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventHasResult](/Vanilla/Events/Events/IEventHasResult/)
