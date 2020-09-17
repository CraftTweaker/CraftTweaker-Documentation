# Jugador Creado

El Evento de PlayerCrafted se activa cada vez que un jugador fabrica algo.

## Clase de evento

Necesitarás lanzar el evento en la cabecera de la función como esta clase:  
`crafttweaker.event. layerCraftedEvent`  
Puede, por supuesto, también [importar](/AdvancedFunctions/Import/) la clase antes y usar ese nombre entonces.

## Extensiones de la interfaz de eventos

PlayerCrafted Events implementan las siguientes interfaces y son capaces de llamar a todos sus métodos/getters/setters también:

- [Evento IJugador](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

La siguiente información puede ser recuperada del evento:

| ZenGetter    | Tipo de devolución                                                  |
| ------------ | ------------------------------------------------------------------- |
| `jugador`    | [IPlayer](/Vanilla/Players/IPlayer/)                                |
| `salida`     | [IItemStack](/Vanilla/Items/IItemStack/)                            |
| `inventario` | [ICraftingInventory](/Vanilla/Recipes/Crafting/ICraftingInventory/) |