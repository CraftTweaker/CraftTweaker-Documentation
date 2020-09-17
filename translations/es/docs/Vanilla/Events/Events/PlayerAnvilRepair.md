# Reparación del Jugador

El evento JugadorYvilRepair se dispara cada vez que un jugador fabrica algo en el yunque.  
Puedes cambiar la probabilidad de que el yunque reciba daño.

## Clase de evento

Necesitarás lanzar el evento en la cabecera de la función como esta clase:  
`crafttweaker.event. layerAnvilRepairEvent`  
Puede, por supuesto, también [importar](/AdvancedFunctions/Import/) la clase antes y usar ese nombre entonces.

## Extensiones de la interfaz de eventos

PlayerAnvilRepair Events implementa las siguientes interfaces y pueden llamar a todos sus métodos/getters/setters también:

- [Evento IJugador](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

La siguiente información puede ser recuperada del evento:

| ZenGetter                  | Ajuste      | Tipo de devolución                       |
| -------------------------- | ----------- | ---------------------------------------- |
| `jugador`                  |             | [IPlayer](/Vanilla/Players/IPlayer/)     |
| `itemInput`                |             | [IItemStack](/Vanilla/Items/IItemStack/) |
| `ingrediente del artículo` |             | [IItemStack](/Vanilla/Items/IItemStack/) |
| `itenResult`               |             | [IItemStack](/Vanilla/Items/IItemStack/) |
| `rompeolas`                | `rompeolas` | flotante                                 |