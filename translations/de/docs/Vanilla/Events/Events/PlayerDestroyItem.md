# PlayerDestroyItem

Das Event des Spielers DestroyItem wird abgefeuert, wenn ein Spieler einen Gegenstand zerstört.

## Event-Klasse

Du musst das Ereignis als diese Klasse in den Funktionskopf verschieben:  
`crafttweaker.event. layerDestroyItemEvent`  
Sie können natürlich auch [die Klasse vor](/AdvancedFunctions/Import/) importieren und dann diesen Namen verwenden.

## Erweiterte Event-Schnittellen

PlayerDestroyItem Events implementieren die folgenden Schnittstellen und können alle ihre Methoden/Getter/Setter auch aufrufen:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetter

Die folgenden Informationen lassen sich von diesem Event (Ereignis) abrufen:

| ZenGetter            | Rückgabetyp                              |
| -------------------- | ---------------------------------------- |
| `player`             | [IPlayer](/Vanilla/Players/IPlayer/)     |
| `originales Element` | [IItemStack](/Vanilla/Items/IItemStack/) |
| `Hand`               | string                                   |