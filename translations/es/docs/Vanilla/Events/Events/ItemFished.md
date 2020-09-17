# Evento ÍtemPescado

Este evento se dispara cuando un jugador está a punto de pescar un objeto. Cancelar el evento evitará que el jugador reciba un objeto, pero la vara seguirá recibiendo daños.

## Notas

Se puede causar daño adicional a la varilla estableciendo `event.additionalDamage`. Una lista de ItemStacks (que es **no modificable**) que se van a pescar está contenida dentro de `event.drops`.

## Clase de evento
Necesitarás lanzar el evento en la cabecera de la función como esta clase:  
`crafttweaker.event. temFishedEvent`  
Puede, por supuesto, también [importar la clase](/AdvancedFunctions/Import/) antes y usar ese nombre entonces.

## Extensiones de la interfaz de eventos
ItemFished Events implementan las siguientes interfaces y son capaces de llamar a todos sus métodos/getters/setters también:

- [Evento IJugador](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)


## ZenGetters/ZenSetters
La siguiente información se puede recuperar/establecer durante el evento:

| ZenGetter | Ajuste           | Tipo                                       |
| --------- | ---------------- | ------------------------------------------ |
| `daño`    |                  | int                                        |
|           | `daño adicional` | int                                        |
| `gotas`   |                  | [IItemStack](/Vanilla/Items/IItemStack/)[] |
