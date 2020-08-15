# IEntityAgeable

Eine alterbare Einheit wächst im Laufe der Zeit wie eine Kuh.

## Dieses Paket importieren

Möglicherweise ist es erforderlich, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (z.B. [Array](/AdvancedFunctions/Arrays_and_Loops/)), also besser sicher sein als bedauern und fügen Sie den Import.  
`importiere crafttweaker.entity.IEntityAgeable;`

## [IEntityKreatur wird erweitert](/Vanilla/Entities/IEntityCreature/)

IEntityAgeable erweitert [IEntityKreature](/Vanilla/Entities/IEntityCreature/). Das bedeutet, dass alle Funktionen, die [IEntities](/Vanilla/Entities/IEntityCreature/) zur Verfügung stehen, auch für IEntityAgeable verfügbar sind.

## Methoden

### ZenGetters/Setters

| ZenGetter        | ZenSetter        | Type |
| ---------------- | ---------------- | ---- |
| wachsendes Alter | wachsendes Alter | int  |
|                  | scaleForAge      | bool |

### ZenMethoden

#### füge Alter hinzu

Methoden erwarten eine Inte und die zweite Methode ein optionales Bool.  
Beide Methoden geben nichts zurück.  
Normalerweise macht die zweite Methode das Gleiche wie die erste mit falscher als erzwungenes Argument, die jedoch bei mod-Implementierungen unterschiedlich sein kann.

```zenscript
entAgObj.ageUp(int seconds, @Optional boolesche erzwungen);
entAgObj.addGrowth(int seconds);
```