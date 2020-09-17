# IEntityMod

A Mod.

## Dieses Paket importieren

Möglicherweise ist es erforderlich, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (z.B. [Array](/AdvancedFunctions/Arrays_and_Loops/)), also besser sicher sein als bedauern und fügen Sie den Import.  
`importieren Sie crafttweaker.entity.IEntityMob;`

## [IEntityKreatur wird erweitert](/Vanilla/Entities/IEntityCreature/)

IEntityMob extends [IEntityCreature](/Vanilla/Entities/IEntityCreature/). Das bedeutet, dass alle Funktionen, die [IEntityCreature](/Vanilla/Entities/IEntityCreature/) Objekten zur Verfügung stehen, auch für IEntityMob.

## Methoden

### ZenMethoden

#### Überprüfe, ob der Mob den Schlaf eines Spielers verhindert

Die Methode erfordert ein [IPlayer](/Vanilla/Players/IPlayer/) Objekt.  
Gibt einen Bool zurück.

```zenscript
entMobObj.isPreventingPlayerRest(ISpieler Spieler);
```