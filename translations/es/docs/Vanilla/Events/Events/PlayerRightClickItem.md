# Clic derecho del jugador

El evento Jugador ClicktItem se activa poco antes de que se active la funcionalidad de un elemento. No se dispara si el jugador está apuntando a un bloque o entidad. Puede ser cancelado para evitar que se produzcan otros acontecimientos. Si el evento es cancelado, se puede proporcionar un resultado específico de permitir, denegar o pasar. Por defecto, el resultado es pasado.

## Clase de evento
Necesitarás lanzar el evento en la cabecera de la función como esta clase:  
`crafttweaker.event. layerRight ClickItemEvent`  
Puede, por supuesto, también [importar](/AdvancedFunctions/Import/) la clase antes y utilizar ese nombre entonces.

## Extensiones de la interfaz de eventos
Los eventos PlayerRight ClickItem implementan las siguientes interfaces y son capaces de llamar a todos sus métodos/getters/setters también:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [Interacto del jugador](/Vanilla/Events/Events/PlayerInteract/)

## ZenGetters & ZenSetters
La siguiente información puede ser ajustada en el evento.

| ZenGetter                   | Ajuste                      | tipo                                  |
| --------------------------- | --------------------------- | ------------------------------------- |
| `resultados de cancelación` | `resultados de cancelación` | cadena ("allow" / "deny" / "default") |
