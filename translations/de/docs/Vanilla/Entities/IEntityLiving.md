# IEntityLiving

Eine lebende Entität ist eine, die Gesundheit hat und sterben kann.  
Anders als [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) sind Spieler jedoch keine IEnitiyLiving Objekte!

## Dieses Paket importieren

Möglicherweise ist es erforderlich, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (z.B. [Array](/AdvancedFunctions/Arrays_and_Loops/)), also besser sicher sein als bedauern und fügen Sie den Import.  
`importiere crafttweaker.entity.IEntityLiving:`

## [IEntityLivingBase wird erweitert](/Vanilla/Entities/IEntityLivingBase/)

IEntityLiving extends [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/). Das bedeutet, dass alle Funktionen, die [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) Objekten zur Verfügung stehen, auch für IEntityLiving Objekte verfügbar sind.

## Methoden

### ZenGetter/ZenSetter

| ZenGetter                | ZenSetter           | Type                                                      |
| ------------------------ | ------------------- | --------------------------------------------------------- |
| Angriffsintervall        |                     | int                                                       |
| attackiere Ziel          | attackiere Ziel     | [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) |
| canbeered                |                     | bool                                                      |
| canPickUpLoot            | canPickUpLoot       | bool                                                      |
| canSpawnHere             |                     | bool                                                      |
| getLeashedToEntity       |                     | [IEntity](/Vanilla/Entities/IEntity/)                     |
| isAIDisabled             | isAIDisabled        | bool                                                      |
| isAIDisabled             | isAIDisabled        | bool                                                      |
| isColliding              |                     | bool                                                      |
| isLeashed                |                     | bool                                                      |
| isLeftHanded             | isLeftHanded        | bool                                                      |
| isNoDespawnRequired      |                     | bool                                                      |
| maxSpawnedInChunk        |                     | int                                                       |
|                          | Vorwärts bewegen    | float                                                     |
|                          | bewege Strafen      | float                                                     |
|                          | bewegliche Vertikal | float                                                     |
| renderGrößen-Modifikator |                     | float                                                     |

### ZenMethoden

#### Lebenden Ton abspielen

Benötigt keine Parameter.  
gibt nichts zurück.

```zenscript
ebtLiv.playLivingSound();
```

#### Erschaffe Explosionspartikel

Benötigt keine Parameter.  
gibt nichts zurück.

```zenscript
ebtLiv.spawnExplosionParticle();
```

#### Setze die Drop-Chance für einen Ausrüstungsfeld

Benötigt ein [IEntityEquipmentSlot](/Vanilla/Entities/IEntityEquipmentSlot/) Objekt und einen Float.  
Gibt nichts zurück.

```zenscript
ebtLiv.setDropChance(IEntityEquipmentSlot Slot, Float Chance);
```

#### Persistenz aktivieren

Benötigt keine Parameter.  
gibt nichts zurück.

```zenscript
ebtLiv.enablePersistenz();
```

#### Leine

Die erste Methode erfordert ein [IEntity](/Vanilla/Entities/IEntity/) Objekt, ein boolesches Objekt und gibt nichts zurück. Die zweite Methode benötigt zwei Booleans und gibt nichts zurück.  
Die dritte Methode erfordert ein [IPlayer](/Vanilla/Players/IPlayer/) Objekt und gibt ein Bool zurück.

```zenscript
ebtLiv.setLeashedToEntity(IEntity enttiy, boolean sendAttachNotification);
ebtLiv.clearLeashed(boolean sendPacket, boolean dropLead);
ebtLiv.canBeLeashedTo(IPlayer Player);
```