# Spieler-Set-Spawn

Das PlayerSetSpawn Event wird abgefeuert, wenn sich der Spawn-Standort eines Spielers ändert.  
Es kann abgebrochen werden, um weitere Verarbeitung zu verhindern.

## Event-Klasse

Du musst das Ereignis als diese Klasse in den Funktionskopf verschieben:  
`crafttweaker.event. layerSetSpawnEvent`  
Sie können natürlich auch [die Klasse vor](/AdvancedFunctions/Import/) importieren und dann diesen Namen verwenden.

## Erweiterte Event-Schnittellen

PlayerSetSpawn Events implementieren die folgenden Schnittstellen und können auch alle ihre Methoden/Getters/Setter aufrufen:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetter

Die folgenden Informationen lassen sich von diesem Event (Ereignis) abrufen:

| ZenGetter  | Rückgabetyp                            |
| ---------- | -------------------------------------- |
| `player`   | [IPlayer](/Vanilla/Players/IPlayer/)   |
| `isForced` | bool                                   |
| `neuSpawn` | [IBlockPos](/Vanilla/World/IBlockPos/) |