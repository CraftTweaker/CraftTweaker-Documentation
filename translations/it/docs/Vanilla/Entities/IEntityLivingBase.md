# IEntityLivingBase

Un'entità vivente è una che ha salute e che può morire.  
Ciò significa mostri, animali ma anche [IPlayers](/Vanilla/Players/IPlayer/).

## Importazione del pacchetto

Potrebbe essere necessario importare il pacchetto se si incontrano problemi (come lanciare un [Array](/AdvancedFunctions/Arrays_and_Loops/)), quindi meglio essere sicuri che spiacenti e aggiungere l'importazione.  
`import crafttweaker.entity.IEntityLivingBase;`

## Estendere [IEntity](/Vanilla/Entities/IEntity/)

IEntityLivingBase extends [IEntity](/Vanilla/Entities/IEntity/). Ciò significa che tutte le funzioni disponibili per [IEntities](/Vanilla/Entities/IEntity/) sono disponibili anche per IEntityLivingBase.

## ZenGetters

| ZenGetter              | Tipo di ritorno (*can be null*)                         |
| ---------------------- | ------------------------------------------------------- |
| activePotionEffects    | Lista<[IPotionEffect](/Vanilla/Potions/IPotionEffect/)> |
| AIMovementSpeed        | galleggiante                                            |
| arrowsInEntity         | int                                                     |
| attaccoEntità          | *IEntityLivingBase*                                     |
| canBreatheSubacquea    | boolean                                                 |
| salute                 | galleggiante                                            |
| isChild                | boolean                                                 |
| isOnScalder            | boolean                                                 |
| isUndead               | boolean                                                 |
| lastAttackedEntity     | *IEntityLivingBase*                                     |
| lastAttackedEntityTime | int                                                     |
| lastDamageSource       | [IDamageSource](/Vanilla/Damage/IDamageSource/)         |
| mainHandHeldItem       | [IItemStack](/Vanilla/Items/IItemStack/)                |
| maxHealth              | galleggiante                                            |
| offHandHeldItem        | [IItemStack](/Vanilla/Items/IItemStack/)                |
| revengeTarget          | *IEntityLivingBase*                                     |
| totalArmorValue        | int                                                     |

## ZenSetters

| ZenSetter          | Tipo di parametro (*può essere null*) |
| ------------------ | ------------------------------------- |
| AIMovementSpeed    | galleggiante                          |
| arrowsInEntity     | int                                   |
| salute             | galleggiante                          |
| lastAttackedEntity | *IEntityLivingBase*                   |
| revengeTarget      | *IEntityLivingBase*                   |

## Più ZenMethods

- boolean attackEntityFrom(IDamageSource source, galleggiante quantità) → Fa qualcosa...
- boolean canEntityBeSeen([IEntity](/Vanilla/Entities/IEntity/) other);
- boolean hasItemInSlot([IEntityEquipmentSlot](/Vanilla/Entities/IEntityEquipmentSlot/) slot);
- boolean isPotionActive([IPotion](/Vanilla/Potions/IPotion/) pozione) → Restituisce vero se la pozione goven è attiva
- boolean isPotionEffectApplicable([IPotionEffect](/Vanilla/Potions/IPotionEffect/) poionEffect);
- guarigione (importo galleggiante) → Cura l'entità per l'importo dato
- [IEntityAttributeInstance](/Vanilla/Entities/Attributes/IEntityAttributeInstance/) getAttribute(Nome stringa) → Restituisce l'attributo [dato](/Vanilla/Entities/Attributes/IEntityAttributeInstance/)
- [IItemStack](/Vanilla/Items/IItemStack/) getItemInSlot([IEntityEquipmentSlot](/Vanilla/Entities/IEntityEquipmentSlot/) slot);
- [IPotionEffect](/Vanilla/Potions/IPotionEffect/) getActivePotionEffect(pozione di IPotion);
- void addPotionEffect([IPotionEffect](/Vanilla/Potions/IPotionEffect/) poionEffect);
- void removePotionEffect([IPotion](/Vanilla/Potions/IPotion/) poion);
- void clearActivePotions() → Rimuove tutte le [pozioni attive](/Vanilla/Potions/IPotion/) dall'entità
- void knockBack([entità IEntity](/Vanilla/Entities/IEntity/) , float one, double due, double tre);
- void suDeath();
- void onLivingUpdate();
- void setItemToSlot([IEntityEquipmentSlot](/Vanilla/Entities/IEntityEquipmentSlot/) slot, [IItemStack](/Vanilla/Items/IItemStack/) itemStack);