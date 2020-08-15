# LivingDestroyBlock

Este evento se dispara cuando un Wither o Dragón de Ender intenta destruir bloques, o cuando un zombie intenta romper una puerta. Este evento es **cancelable**y, si se cancela, el bloque no se romperá.

## Clase de evento
Necesitarás lanzar el evento en la cabecera de la función como esta clase:  
`crafttweaker.event. ivingDestroyBlockEvent`  
Puede, por supuesto, también [importar](/AdvancedFunctions/Import/) la clase antes y usar ese nombre entonces.

## Extensiones de la interfaz de eventos
Los eventos LivingDestroyBlock implementan las siguientes interfaces y son capaces de llamar a todos sus métodos/getters/setters también:

- [Evento Posicionable](/Vanilla/Events/Events/IEventPositionable/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)


## ZenGetters/ZenSetters
La siguiente información se puede recuperar/establecer durante el evento:

| ZenGetter | Ajuste | Tipo                                             |
| --------- | ------ | ------------------------------------------------ |
| `estado`  |        | [Estado de IBlock](/Vanilla/Blocks/IBlockState/) |

