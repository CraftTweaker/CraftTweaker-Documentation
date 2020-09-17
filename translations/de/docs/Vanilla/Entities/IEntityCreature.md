# IEntityCreature

Eine Kreatur.

## Dieses Paket importieren

Möglicherweise ist es erforderlich, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (z.B. [Array](/AdvancedFunctions/Arrays_and_Loops/)), also besser sicher sein als bedauern und fügen Sie den Import.  
`importiere crafttweaker.entity.IEntityCreature;`

## IEntityLiving [ wird erweitert](/Vanilla/Entities/IEntityLiving/)</h2> 

IEntityKreatur erweitert [IEntityLiving](/Vanilla/Entities/IEntityLiving/). Das bedeutet, dass alle Funktionen, die [IEntityLiving](/Vanilla/Entities/IEntityLiving/) Objekten zur Verfügung stehen, auch für IEntityKreatur verfügbar sind.

## Methoden

### ZenGetters/Setters

| ZenGetter            | Type                                   |
| -------------------- | -------------------------------------- |
| hasPath              | bool                                   |
| isWithinHomeDistance | bool                                   |
| home-Position        | [IBlockPos](/Vanilla/World/IBlockPos/) |
| maximumHomeDistance  | float                                  |
| hasHome              | bool                                   |

### ZenMethoden

#### lebenden Ton abspielen

Methode erwartet nichts.  
Gibt nichts zurück.

```zenscript
entCreObj.playLivingSound();
```

#### Haus einstellen oder lösen

Die erste Methode erwartet ein [IBlockPos](/Vanilla/World/IBlockPos/) Objekt und eine Int.  
Zweite Methode erwartet nichts.  
Beide Methoden geben nichts zurück.

```zenscript
entAnObj.setHomePositionAndDistance(IBlockPos pos, int distance);
entAnObj.detachHome();
```

#### Prüfen, ob sich eine Position innerhalb der Heimatdistanz befindet

Methode erwartet ein [IBlockPos](/Vanilla/World/IBlockPos/) Objekt.  
Gibt einen Bool zurück.

```zenscript
entAnObj.isPositionWithinHomeDistanz
```