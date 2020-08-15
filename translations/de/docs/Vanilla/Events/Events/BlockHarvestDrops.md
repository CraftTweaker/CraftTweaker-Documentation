# BlockHarvestDropsEvent

Das BlockHarvestDrops Event wird abgefeuert, wenn ein Block seine Gegenstände fallen lässt.  
Sie können sowohl die Blockliste als auch die gesamte Drop-Chance ändern. Setzen Sie letztere auf 1, wenn Sie vorher alle Chancen nutzen.

## Event-Klasse

Du musst das Ereignis als diese Klasse in den Funktionskopf verschieben:  
`crafttweaker.event. lockHarvestDropsEvent`  
Sie können natürlich auch [die Klasse vor](/AdvancedFunctions/Import/) importieren und dann diesen Namen verwenden.

## Erweiterte Event-Schnittellen

BlockHarvestDrops Events implementieren die folgenden Schnittstellen und können auch alle ihre Methoden/Getters/Setter aufrufen:

- [IBlockEvent](/Vanilla/Events/Events/IBlockEvent/)

## ZenGetter

Die folgenden Informationen lassen sich von diesem Event (Ereignis) abrufen:

| ZenGetter        | ZenSetter    | Type                                               |
| ---------------- | ------------ | -------------------------------------------------- |
| `player`         |              | [IPlayer](/Vanilla/Players/IPlayer/)               |
| `isPlayer`       |              | bool                                               |
| `silkTouch`      |              | bool                                               |
| `Vermögensebene` |              | int                                                |
| `drops`          | `drops`      | Liste <[IItemStack](/Vanilla/Items/IItemStack/)\> |
| `dropChance`     | `dropChance` | float                                              |

## Ein Element zur Liste hinzufügen

Sie können entweder die Liste hinzufügen oder die Methode verwenden, um ein Element zur Liste hinzuzufügen:

```zenscript
event.drops += <minecraft:coal>;
event.addItem(<minecraft:coal>);
```