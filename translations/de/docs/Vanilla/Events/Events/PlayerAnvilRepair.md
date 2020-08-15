# PlayerAnvilRepair

Das PlayerAnvilRepair Event wird gefeuert, wenn ein Spieler etwas im Amboss herstellt.  
Du kannst die Chance ändern, dass der Amboss beschädigt ist.

## Event-Klasse

Du musst das Ereignis als diese Klasse in den Funktionskopf verschieben:  
`crafttweaker.event. layerAnvilRepairEvent`  
Sie können natürlich auch [die Klasse vor](/AdvancedFunctions/Import/) importieren und dann diesen Namen verwenden.

## Erweiterte Event-Schnittellen

PlayerAnvilRepair Events implementieren die folgenden Schnittstellen und können alle ihre Methoden/Getter/Setter auch aufrufen:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetter

Die folgenden Informationen lassen sich von diesem Event (Ereignis) abrufen:

| ZenGetter        | ZenSetter     | Rückgabetyp                              |
| ---------------- | ------------- | ---------------------------------------- |
| `player`         |               | [IPlayer](/Vanilla/Players/IPlayer/)     |
| `itemInput`      |               | [IItemStack](/Vanilla/Items/IItemStack/) |
| `itemIngredient` |               | [IItemStack](/Vanilla/Items/IItemStack/) |
| `itenResult`     |               | [IItemStack](/Vanilla/Items/IItemStack/) |
| `bruchchance`    | `bruchchance` | float                                    |