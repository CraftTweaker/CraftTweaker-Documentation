# Evento FarmlandTrample

El evento FarmlandTrample se dispara cada vez que se pisotea un terreno de cultivo. Cancelar el evento evitará que el bloque sea pisoteado.

## Notas

`event.fallDistance` contiene la distancia disminuida antes de golpear la granja.

## Clase de evento
Necesitarás lanzar el evento en la cabecera de la función como esta clase:  
`crafttweaker.event. armlandTrampleEvent`  
Puede, por supuesto, también [importar](/AdvancedFunctions/Import/) la clase anterior y utilizar ese nombre entonces.

## Extensiones de la interfaz de eventos
FarmlandTrample Events implementan las siguientes interfaces y son capaces de llamar a todos sus métodos/getters/setters también:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [Evento IBlock](/Vanilla/Events/Events/IBlockEvent/)

## ZenGetters
La siguiente información puede ser recuperada del evento:

| ZenGetter | Ajuste | Tipo                                  |
| --------- | ------ | ------------------------------------- |
| `entidad` |        | [IEntity](/Vanilla/Entities/IEntity/) |
| `fallido` |        | flotante                              |
