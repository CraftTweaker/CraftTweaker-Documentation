# IEntityLivingBase

Живая сущность — это объект, который имеет здоровье и может погибнуть.  
Это означает монстры, животные, но также [IPlayers](/Vanilla/Players/IPlayer/).

## Импорт пакета

Возможно, вам потребуется импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, наложение [массива](/AdvancedFunctions/Arrays_and_Loops/)), так что лучше быть безопасным, чем извините и добавить импорт.  
`импорт crafttweaker.entity.IEntityLivingBase;`

## Расширение [IEntity](/Vanilla/Entities/IEntity/)

IEntityLivingBase extends [IEntity](/Vanilla/Entities/IEntity/). Это означает, что все функции, доступные [IEntities](/Vanilla/Entities/IEntity/) , также доступны для IEntityLivingBase.

## ZenGetters

| Геттеры                | Возвращаемый тип (*может быть `null`*)                  |
| ---------------------- | ------------------------------------------------------- |
| активное зелье         | Список<[Эффект зелья](/Vanilla/Potions/IPotionEffect/)> |
| Скорость перемещения   | float                                                   |
| стрелы InEntity        | int                                                     |
| атакующий объект       | *IEntityLivingBase*                                     |
| кандрейф под водой     | boolean                                                 |
| здоровье               | float                                                   |
| isChild                | boolean                                                 |
| лестница               | boolean                                                 |
| isUndead               | boolean                                                 |
| lastAttackedEntity     | *IEntityLivingBase*                                     |
| lastAttackedEntityTime | int                                                     |
| Источник lastdamage    | [IDamageSource](/Vanilla/Damage/IDamageSource/)         |
| mainHandHeldItem       | [IItemStack](/Vanilla/Items/IItemStack/)                |
| maxHealth              | float                                                   |
| offHandHeldItem        | [IItemStack](/Vanilla/Items/IItemStack/)                |
| цель выручки           | *IEntityLivingBase*                                     |
| Общая стоимость брони  | int                                                     |

## ZenSetters

| ZenSetter            | Тип параметра (*может быть нулевым*) |
| -------------------- | ------------------------------------ |
| Скорость перемещения | float                                |
| стрелы InEntity      | int                                  |
| здоровье             | float                                |
| lastAttackedEntity   | *IEntityLivingBase*                  |
| цель выручки         | *IEntityLivingBase*                  |

## Больше ZenMethods

- boolean атакующий EntityFrom(IDamageSource источник с плавающей точкой) → Делает что-нибудь...
- boolean canEntityBeSeen([IEntity](/Vanilla/Entities/IEntity/) other);
- boolean hasItemInSlot([IEntityEquipmentSlot](/Vanilla/Entities/IEntityEquipmentSlot/) slot);
- boolean isPotionActive([IPotion](/Vanilla/Potions/IPotion/) зелье) → Возвращает значение true, если жеваное зелье активно
- boolean isPotionEffectApplicable([IPotionEffect](/Vanilla/Potions/IPotionEffect/) зельея);
- цели(плавающая сумма) → Исцеляет сущность на указанное количество
- [IEntityAttributeInstance](/Vanilla/Entities/Attributes/IEntityAttributeInstance/) getAttribute(String name) → Возвращает данный [атрибут](/Vanilla/Entities/Attributes/IEntityAttributeInstance/)
- [IItemStack](/Vanilla/Items/IItemStack/) getItemInSlot([IEntityEquipmentSlot](/Vanilla/Entities/IEntityEquipmentSlot/) slot);
- [IPotionEffect](/Vanilla/Potions/IPotionEffect/) getActivePotionEffect(зелье зелья);
- void addPotionEffect([IPotionEffect](/Vanilla/Potions/IPotionEffect/) зельея);
- void clearActivePotions() → Удаляет все активные [зелья](/Vanilla/Potions/IPotion/) из сущности
- void knockBack([IEntity](/Vanilla/Entities/IEntity/) сущность, плавающая единица, двойной два, двойной три);
- void onDeath();
- void onLivingUpdate();
- void setItemToSlot([IEntityEquipmentSlot](/Vanilla/Entities/IEntityEquipmentSlot/) slot, [IItemStack](/Vanilla/Items/IItemStack/) itemStack);