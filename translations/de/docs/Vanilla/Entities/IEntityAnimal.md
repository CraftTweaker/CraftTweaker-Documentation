# IEntityAnimal

Ein Tier.

## Dieses Paket importieren

Möglicherweise ist es erforderlich, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (z.B. [Array](/AdvancedFunctions/Arrays_and_Loops/)), also besser sicher sein als bedauern und fügen Sie den Import.  
`importiere craftweaker.entity.IEntityAnimal;`

## [IEntityAgeable wird erweitert](/Vanilla/Entities/IEntityAgeable/)

IEntityAnimal erweitert [IEntityAgeable](/Vanilla/Entities/IEntityAgeable/). Das bedeutet, dass alle Funktionen, die [IEntities](/Vanilla/Entities/IEntityAgeable/) zur Verfügung stehen, auch für IEntityAnimal verfügbar sind.

## Methoden

### ZenGetters/Setters

| ZenGetter | Type                                                |
| --------- | --------------------------------------------------- |
| loveGrund | [IPlayer](/Vanilla/Players/IPlayer/) (Can be null!) |
| isInLove  | bool                                                |

### ZenMethoden

#### überprüfe, ob ein Gegenstand verwendet werden kann, um das Tier zu züchten

Methode erwartet einen [IItemStack](/Vanilla/Items/IItemStack/).  
Gibt einen Bool zurück.

```zenscript
entAnObj.isBreedingItem(IItemStack itemStack);
```

#### In Liebe setzen oder zurücksetzen

Die erste Methode erwartet ein optionales [IPlayer](/Vanilla/Players/IPlayer/) Objekt, zweite nichts.  
Gibt nichts zurück.

```zenscript
entAnObj.setInLove(@Optional IPlayer Player);
entAnObj.resetInLove();
```

#### Überprüfen Sie, ob ein anderes Tier mit diesem paaren kann.

Methode erwartet ein IEntityAnimal Objekt.  
Gibt einen Bool zurück.

```zenscript
entAnObj.canMateWith(IEntityAnimal other);
```