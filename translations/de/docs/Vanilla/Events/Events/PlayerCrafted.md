# Spieler hergestellt

Das SpielerCrafted Event wird abgefeuert, wenn ein Spieler etwas herstellt.

## Event-Klasse

Du musst das Ereignis als diese Klasse in den Funktionskopf verschieben:  
`crafttweaker.event. layerCraftedEvent`  
Sie können natürlich auch [die Klasse vor](/AdvancedFunctions/Import/) importieren und dann diesen Namen verwenden.

## Erweiterte Event-Schnittellen

PlayerCrafted Events implementieren die folgenden Schnittstellen und können auch alle ihre Methoden/Getters/Setter aufrufen:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetter

Die folgenden Informationen lassen sich von diesem Event (Ereignis) abrufen:

| ZenGetter  | Rückgabetyp                                                         |
| ---------- | ------------------------------------------------------------------- |
| `player`   | [IPlayer](/Vanilla/Players/IPlayer/)                                |
| `ausgeben` | [IItemStack](/Vanilla/Items/IItemStack/)                            |
| `inventar` | [ICraftingInventory](/Vanilla/Recipes/Crafting/ICraftingInventory/) |