# ICraftingInfo

El objeto IcraftingInfo contiene todo tipo de información sobre el proceso de fabricación en sí:

## Importar la clase

It might be required to [import](/AdvancedFunctions/Import/) the class to avoid errors.  
`import crafttweaker.recipes.ICraftingInventory`

## ZenGetters

| ZenGetter    |                                                                     |                                                             |
| ------------ | ------------------------------------------------------------------- | ----------------------------------------------------------- |
| `inventario` | [ICraftingInventory](/Vanilla/Recipes/Crafting/ICraftingInventory/) | El inventario en el que se realiza la fabricación           |
| `jugador`    | [IPlayer](/Vanilla/Players/IPlayer/)                                | El jugador que lleva a cabo la fabricación                  |
| `dimensión`  | int                                                                 | La dimensión en la que se realiza el proceso de fabricación |