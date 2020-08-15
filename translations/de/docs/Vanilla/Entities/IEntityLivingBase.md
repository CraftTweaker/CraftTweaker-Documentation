# IEntityLivingBase

Eine lebende Entität ist eine Entität, die Gesundheit hat und sterben kann.  
Das bedeutet Monster, Tiere, aber auch [ISpieler](/Vanilla/Players/IPlayer/).

## Dieses Paket importieren

Möglicherweise ist es erforderlich, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (z.B. [Array](/AdvancedFunctions/Arrays_and_Loops/)), also besser sicher sein als bedauern und fügen Sie den Import.  
`importiere crafttweaker.entity.IEntityLivingBase;`

## [IEntität wird erweitert](/Vanilla/Entities/IEntity/)

IEntityLivingBase extends [IEntity](/Vanilla/Entities/IEntity/). Das bedeutet, dass alle Funktionen, die [IEntities](/Vanilla/Entities/IEntity/) zur Verfügung stehen, auch für IEntityLivingBase verfügbar sind.

## ZenGetter

| ZenGetter              | Rückgabetyp (*kann null sein*)                           |
| ---------------------- | -------------------------------------------------------- |
| activePotionEffects    | Liste <[IPotionEffect](/Vanilla/Potions/IPotionEffect/)> |
| AIMovementSpeed        | float                                                    |
| Pfeil-InEntität        | int                                                      |
| attackingEntität       | *IEntityLivingBase*                                      |
| canBreatheUnterwasser  | boolean                                                  |
| gesund                 | float                                                    |
| isChild                | boolean                                                  |
| isOnLadder             | boolean                                                  |
| isUndead               | boolean                                                  |
| lastAttackedEntity     | *IEntityLivingBase*                                      |
| lastAttackedEntityTime | int                                                      |
| letzte Schadensquelle  | [IDamageSource](/Vanilla/Damage/IDamageSource/)          |
| mainHandHeldItem       | [IItemStack](/Vanilla/Items/IItemStack/)                 |
| maxGesundheit          | float                                                    |
| offHeldItem            | [IItemStack](/Vanilla/Items/IItemStack/)                 |
| revengeTarget          | *IEntityLivingBase*                                      |
| gesamter Rüstungswert  | int                                                      |

## ZenSetter

| ZenSetter          | Parametertyp (*kann null sein*) |
| ------------------ | ------------------------------- |
| AIMovementSpeed    | float                           |
| Pfeil-InEntität    | int                             |
| gesund             | float                           |
| lastAttackedEntity | *IEntityLivingBase*             |
| revengeTarget      | *IEntityLivingBase*             |

## Mehr ZenMethoden

- boolean attackEntityFrom(IDamageSource-Quelle, Float-Anzahl) → Macht etwas...
- boolean canEntityBeSeen([IEntity](/Vanilla/Entities/IEntity/) other);
- boolean hasItemInSlot([IEntityEquipmentSlot](/Vanilla/Entities/IEntityEquipmentSlot/) slot);
- boolean isPotionActive([ITrantion](/Vanilla/Potions/IPotion/) Trank) → Gibt true zurück, wenn der Goven Trank aktiv ist
- boolean isPotionEffectApplicable([IPotionEffect](/Vanilla/Potions/IPotionEffect/) potionEffect);
- Heilung(Float-Anzahl) → Heilt das Wesen um den angegebenen Betrag
- [IEntityAttributeInstance](/Vanilla/Entities/Attributes/IEntityAttributeInstance/) getAttribute(String name) → Gibt das angegebene [Attribut zurück](/Vanilla/Entities/Attributes/IEntityAttributeInstance/)
- [IItemStack](/Vanilla/Items/IItemStack/) getItemInSlot([IEntityEquipmentSlot](/Vanilla/Entities/IEntityEquipmentSlot/) slot);
- [IPotionEffect](/Vanilla/Potions/IPotionEffect/) getActivePotionEffect(ITrank Trank);
- Void addPotionEffect([IPotionEffect](/Vanilla/Potions/IPotionEffect/) potionEffect);
- clearActivePotions() → Entfernt alle aktiven [Tränke](/Vanilla/Potions/IPotion/) aus der Entität
- nichtig KnockBack([IEntity](/Vanilla/Entities/IEntity/) Entity, float one, double zwei, double three);
- onDeath(); ungültig
- void onLivingUpdate();
- void setItemToSlot([IEntityEquipmentSlot](/Vanilla/Entities/IEntityEquipmentSlot/) slot, [IItemStack](/Vanilla/Items/IItemStack/) itemStack);