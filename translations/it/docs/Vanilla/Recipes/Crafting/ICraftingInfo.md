# ICraftingInfo

L'oggetto IcraftingInfo contiene tutti i tipi di informazioni sul processo di creazione stesso:

## Importare la classe

Potrebbe essere necessario [importare](/AdvancedFunctions/Import/) la classe per evitare errori.  
`importare crafttweaker.recipes.ICraftingInventory`

## ZenGetters

| ZenGetter    |                                                             |                                                              |
| ------------ | ----------------------------------------------------------- | ------------------------------------------------------------ |
| `inventario` | [Inventario](/Vanilla/Recipes/Crafting/ICraftingInventory/) | L'inventario in cui viene eseguita la lavorazione            |
| `giocatore`  | [IPlayer](/Vanilla/Players/IPlayer/)                        | Il giocatore che conduce la creazione                        |
| `dimensione` | int                                                         | La dimensione in cui viene eseguito il processo di creazione |