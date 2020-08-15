# MinecartInteract

MinecartInteractEvent wird abgefeuert, wenn ein Spieler mit einem Minecart interagiert. Das Ereignis ist **abbrechbar**und dadurch wird verhindert, dass der Container geöffnet wird.

## Event-Klasse
Du musst das Ereignis als diese Klasse in den Funktionskopf verschieben:  
`crafttweaker.event. inecartInteractEvent`  
Sie können natürlich auch [die Klasse vor](/AdvancedFunctions/Import/) importieren und dann diesen Namen verwenden.

## Erweiterte Event-Schnittellen
MinecartInteract Events implementieren die folgenden Schnittstellen und können auch alle ihre Methoden/Getters/Setter aufrufen:

- [IMinecartEvent](/Vanilla/Events/Events/IMinecartEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)


## ZenGetter

| ZenGetter | Type                                     |
| --------- | ---------------------------------------- |
| `player`  | [IPlayer](/Vanilla/Players/IPlayer/)     |
| `eintrag` | [IItemStack](/Vanilla/Items/IItemStack/) |
| `Hand`    | String                                   |
