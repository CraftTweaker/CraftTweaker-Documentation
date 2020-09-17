# PlayerCrafted

Il PlayerCrafted Event viene sparato ogni volta che un giocatore muta qualcosa.

## Classe Evento

Dovrai lanciare l'evento nell'intestazione della funzione come questa classe:  
`crafttweaker.event. layerCraftedEvent`  
È possibile, naturalmente, anche [importare](/AdvancedFunctions/Import/) la classe prima e utilizzare quel nome allora.

## Estensioni dell'interfaccia evento

PlayerCrafted Events implementare le seguenti interfacce e sono in grado di chiamare anche tutti i loro metodi/getters/setter:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

Le seguenti informazioni possono essere ricavate dall'evento:

| ZenGetter    | Tipo Di Reso                                                |
| ------------ | ----------------------------------------------------------- |
| `giocatore`  | [IPlayer](/Vanilla/Players/IPlayer/)                        |
| `output`     | [IItemStack](/Vanilla/Items/IItemStack/)                    |
| `inventario` | [Inventario](/Vanilla/Recipes/Crafting/ICraftingInventory/) |