# IPlayer

Das IPlayer-Interface ermöglicht es Ihnen, bestimmte Informationen über einen bestimmten Spieler zu sehen und mit diesem zu interagieren. Meist in Event-Handlern und Rezept-Funktionen verwendet.

## Dieses Paket importieren

Möglicherweise ist es erforderlich, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (z.B. [Array](/AdvancedFunctions/Arrays_and_Loops/)), also besser sicher sein als bedauern und fügen Sie den Import.  
`import crafttweaker.player.IPlayer;`

## Erweiterung IEntityLivingBase und IUser

IPlayer erweitert [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/). Das bedeutet, dass alle Funktionen [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) Objekte auch für IPlayer Objects verfügbar sind.  
IPlayer erweitert außerdem [IUser](/Vanilla/Players/IUser/). Das bedeutet, dass alle Funktionen von [IUser](/Vanilla/Players/IUser/) Objekten auch für IPlayer Objects verfügbar sind.

## ZenGetter

Zengetter sind für das Abrufen von Informationen. Normalerweise entweder einer Variable zugewiesen oder in einer Methode/Funktion verwendet.

| ZenGetter     | Was macht es                                                                                                            | Rückgabetyp                                | Auslastung             |
| ------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ | ---------------------- |
| uuuid         | gibt die UUID des Spielers zurück                                                                                       | string                                     | `player.uuid`          |
| name          | gibt den Spielernamen zurück                                                                                            | string                                     | `player.name`          |
| daten         | gibt die Daten des Spielers zurück                                                                                      | [IData](/Vanilla/Data/IData/)              | `player.data`          |
| xp            | gibt das Erfahrungslevel des Spielers zurück. Kann auch benutzt werden, um das Erfahrungslevel eines Spielers zu setzen | int                                        | `player.xp`            |
| hotbarGröße   | gibt die Größe der Hotbar des Spielers zurück                                                                           | int                                        | `player.hotbarGröße`   |
| inventorysize | gibt die Inventargröße des Spielers zurück                                                                              | int                                        | `player.inventorysize` |
| currentItem   | gibt das Item zurück, das der Spieler derzeit hält                                                                      | [IItemStack](/Vanilla/Items/IItemStack/)   | `player.currentItem`   |
| kreativ       | gibt zurück, wenn sich der Spieler im Kreativmodus befindet (a.k.a gamemode 1)                                          | bool                                       | `player.creative`      |
| abenteuer     | gibt zurück, wenn sich der Spieler im Abenteuermodus befindet (a.k.a Spielmodus 2)                                      | bool                                       | `spieler.adventure`    |
| x             | gibt die aktuelle X-Position des Spielers in der Welt zurück                                                            | double                                     | `player.x`             |
| y             | gibt die aktuelle y Position des Spielers in der Welt zurück                                                            | double                                     | `player.y`             |
| z             | gibt die aktuelle Z-Position des Spielers in der Welt zurück                                                            | double                                     | `player.z`             |
| position      | gibt die aktuelle Position des Spielers zurück. Kann auch benutzt werden, um die Position eines Spielers zu setzen      | [Position3f](/Vanilla/Utils/Position3f/)   | `player.position`      |
| foodStats     | gibt die foodstats des Spielers zurück.                                                                                 | [IFoodStats](/Vanilla/Players/IFoodStats/) | `player.foodStats`     |

## ZenMethoden

ZenMethods sind für Dinge mit anderen Dingen, in diesem Fall mit einem Spieler.

| ZenMethode               | Parametertyp(e)                          | Was macht es                                                                              | Beispiel                                     |
| ------------------------ | ---------------------------------------- | ----------------------------------------------------------------------------------------- | -------------------------------------------- |
| removeXP(XPtoRemove)     | int                                      | Entfernt die angegebenen Erfahrungsstufen vom Spieler.                                    | `player.removeXP(1)`                         |
| update(IData)            | [IData](/Vanilla/Data/IData/)            | Aktualisiert die Spielerdaten auf die zur Verfügung gestellten IData.                     |                                              |
| sendChat (Nachricht)     | string ODER IChatMessage                 | Sendet dem Spieler eine Chat-Nachricht.                                                   | `player.sendChat("Hallo mein alter Freund")` |
| getHotbarStack(index)    | int                                      | Gibt den Gegenstand an der angegebenen Stelle in der Hotbar des Spielers zurück.          | `player.getHotbarStack(3)`                   |
| getInventoryStack(index) | int                                      | Gibt den Gegenstand an dem angegebenen Index innerhalb des Inventars des Spielers zurück. | `player.getInventoryStack(3)`                |
| give(Artikel)            | [IItemStack](/Vanilla/Items/IItemStack/) | Gib dem Spieler den angegebenen Gegenstand. Artikel ist ein IItemStack.                   | `player.give(<minecraft:gold_ingot>)`  |
| teleport(position)       | [Position3f](/Vanilla/Utils/Position3f/) | Teleportiert den Spieler zur angegebenen Position in der gleichen Dimension               | `player.teleport(position)`                  |
| executeCommand(raw)      | string                                   | Führt den Befehl als Spieler aus                                                          | `player.executeCommand("kill")`              |
| dropItem(dropAll)        | bool                                     | Löscht den aktuellen Gegenstand (oder den gesamten Stapel), den der Spieler hält.         | `player.dropItem(falsch)`                    |
| dropItem(itemToDrop)     | [IItemStack](/Vanilla/Items/IItemStack/) | Löscht den angegebenen Gegenstand an die Position des Spielers.                           | `player.dropItem(<minecraft:dirt>)`    |