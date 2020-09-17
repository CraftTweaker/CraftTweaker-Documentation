# Evento del nivel de encantamiento

El evento EncantmentLevelSet se activa cuando los niveles de los tres encantamientos potenciales se generan en la mesa de encantamientos.

## Notas

`event.enchantRow` muestra la fila (1-3) de la tabla de encantamientos, mientras que `event.originalLevel` representa el nivel original de la fila. `event.power` es el valor acumulado de los libros que rodean la tabla de encantamientos, mientras que `event.item` es el elemento que está siendo encantado.

`event.level` puede ser modificado arbitrariamente a un valor entre 0 & 30.

## Clase de evento
Necesitarás lanzar el evento en la cabecera de la función como esta clase:  
`crafttweaker.event. nchantmentLevelSetEvent`  
Puede, por supuesto, también [importar](/AdvancedFunctions/Import/) la clase antes y usar ese nombre entonces.

## Extensiones de la interfaz de eventos
EnchantmentLevelSet Events implementan las siguientes interfaces y son capaces de llamar a todos sus métodos/getters/setters también:

- [Evento Posicionable](/Vanilla/Events/Events/IEventPositionable/)

## ZenGetters

| ZenGetter          | Ajuste  | Tipo de devolución                       |
| ------------------ | ------- | ---------------------------------------- |
| `mundo`            |         | [IWorld](/Vanilla/World/IWorld/)         |
| `encantarFilaFila` |         | int                                      |
| `poder`            |         | int                                      |
| `objeto`           |         | [IItemStack](/Vanilla/Items/IItemStack/) |
| `nivel original`   |         | int                                      |
| `nivel`            | `nivel` | int                                      |
