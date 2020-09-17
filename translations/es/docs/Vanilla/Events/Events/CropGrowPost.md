# Recortar Posteo

El evento Cortar Cultivos se dispara una vez que un bloque de recorte ha crecido **con éxito**. No se puede cancelar y sirve simplemente como una notificación del crecimiento de los cultivos.

## Clase de evento
Necesitarás lanzar el evento en la cabecera de la función como esta clase:  
`crafttweaker.event. rop PostEvent`  
Puede, por supuesto, también [importar](/AdvancedFunctions/Import/) la clase antes y usar ese nombre entonces.

## Extensiones de la interfaz de eventos
Los eventos de Crop Post implementan las siguientes interfaces y son capaces de llamar a todos sus métodos/getters/setters también:

- [Evento IBlock](/Vanilla/Events/Events/IBlockEvent/)


## ZenGetters
La siguiente información puede ser recuperada del evento:

| ZenGetter                    | Ajuste | Tipo                                             |
| ---------------------------- | ------ | ------------------------------------------------ |
| `Estado de bloqueo original` |        | [Estado de IBlock](/Vanilla/Blocks/IBlockState/) |
| `bloque original`            |        | [IBlock](/Vanilla/Blocks/IBlock/)                |
