# Recortar Preevento

El Evento de los Cultivos Pre se dispara cuando los cultivos intentan crecer. Tiene un **resultado** que determina si el comportamiento predeterminado ocurre o no:

- **permitir**: el cultivo se ve forzado a crecer.
- **denegar**: se evita que el cultivo crezca.
- **por defecto**: el ataque usa el comportamiento predeterminado de Vanilla.

## Clase de evento
Necesitarás lanzar el evento en la cabecera de la función como esta clase:  
`crafttweaker.event. preevento de ropo`  
Puede, por supuesto, también [importar](/AdvancedFunctions/Import/) la clase antes y usar ese nombre entonces.

## Extensiones de la interfaz de eventos
Los eventos de Crop Post implementan las siguientes interfaces y son capaces de llamar a todos sus métodos/getters/setters también:

- [Evento IBlock](/Vanilla/Events/Events/IBlockEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)


## ZenGetters
La siguiente información puede ser recuperada del evento:

| ZenGetter                    | Ajuste | Tipo                                             |
| ---------------------------- | ------ | ------------------------------------------------ |
| `Estado de bloqueo original` |        | [Estado de IBlock](/Vanilla/Blocks/IBlockState/) |
| `bloque original`            |        | [IBlock](/Vanilla/Blocks/IBlock/)                |
