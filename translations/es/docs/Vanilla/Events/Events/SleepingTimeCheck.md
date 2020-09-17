# Tiempo de sueño

Este evento se activa al comprobar si un jugador dormido puede continuar durmiendo a una hora determinada. Si tiene un **resultado** que determina la acción.

Resultado:
- **Predeterminado**, hace que la lógica de Vanilla de `World::isDaytime` sea consultada.
- **Permitir**, permite al jugador continuar durmiendo sin importar
- **Denegar** es específicamente ***ignorado*** en esta instancia y no hace nada.

Por lo tanto, este evento te permite mantener al jugador durmiendo, pero no te permite detenerlos de forma específica.

## Clase de evento
Necesitarás lanzar el evento en la cabecera de la función como esta clase:  
`crafttweaker.event. leepingTimeCheck`  
Puede, por supuesto, también [importar](/AdvancedFunctions/Import/) la clase antes y usar ese nombre entonces.

## Extensiones de la interfaz de eventos
SleepingTimeCheck Events implementan las siguientes interfaces y son capaces de llamar a todos sus métodos/getters/setters también:

- [Evento Posicionable](/Vanilla/Events/Events/IEventPositionable/)
- [Evento IJugador](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventHasResult](/Vanilla/Events/Events/IEventHasResult/)
