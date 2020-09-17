# Visibilidad del jugador

Este evento se activa para determinar la visibilidad de un jugador, es decir, si están lo suficientemente cerca o no como para ser notado por un atacante. El resultado de este evento se utiliza para calcular (con modificadores de Vanilla Minecraft para filtrarse, etc) el rango que un jugador puede llegar a una criatura antes de que esa criatura la vea.

Mientras que esto puede ser usado para aumentar el rango de visibilidad (si fue disminuido por Minecraft u otro mod), no se puede aumentar por encima de su valor máximo (la distancia de destino estándar).

## Clase de evento
Necesitarás lanzar el evento en la cabecera de la función como esta clase:  
`crafttweaker.event. layerVisibilityEvent`  
Puede, por supuesto, también [importar](/AdvancedFunctions/Import/) la clase antes y usar ese nombre entonces.

## Extensiones de la interfaz de eventos
PlayerVisibilityEvent Events implementan las siguientes interfaces y son capaces de llamar a todos sus métodos/getters/setters también:

- [Evento IJugador](/Vanilla/Events/Events/IPlayerEvent/)


## ZenGetters/ZenSetters
La siguiente información se puede recuperar/establecer durante el evento:

| ZenGetter     | Ajuste                  | Tipo      |
| ------------- | ----------------------- | --------- |
| `visibilidad` |                         | doble     |
|               | `modificar visibilidad` | Ver nota. |

## Nota

Este valor no puede establecerse directamente. Llamar a `modifyVisibility` con un doble valor reemplazará el modificador con el resultado de `modifiy * doble valor`.
