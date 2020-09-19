# IEntityLivingBase

Żywotna jednostka to jednostka, która ma zdrowie i może umierać.  
Oznacza to, że potwory, zwierzęta, ale także [IPlayerów](/Vanilla/Players/IPlayer/).

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (takie jak przesyłanie [Array](/AdvancedFunctions/Arrays_and_Loops/)), tak aby były bezpieczne niż przepraszamy i dodaj import.  
`zaimportuj crafttweaker.entity.IEntityLivingBase;`

## Rozszerzanie [IEntity](/Vanilla/Entities/IEntity/)

IEntityLivingBase extends [IEntity](/Vanilla/Entities/IEntity/). Oznacza to, że wszystkie funkcje dostępne dla [IEntities](/Vanilla/Entities/IEntity/) są również dostępne dla IEntityLivingBase.

## ZenGetters

| ZenGetter                       | Typ zwrotu (*może być pusty*)                          |
| ------------------------------- | ------------------------------------------------------ |
| Aktywne Efekty                  | List<[Efekt IPoczty](/Vanilla/Potions/IPotionEffect/)> |
| AIMovementSpeed                 | zmiennoprzecinkowe                                     |
| arrowsInEntity                  | odcień                                                 |
| Jednostka atakująca             | *IEntityLivingBase*                                    |
| [PLACEHOLDER] canBreathePodater | boolean                                                |
| zdrowie                         | zmiennoprzecinkowe                                     |
| isChild                         | boolean                                                |
| isOnDrder                       | boolean                                                |
| isUndead                        | boolean                                                |
| lastAttackedEntity              | *IEntityLivingBase*                                    |
| lastAttackedEntityTime          | odcień                                                 |
| źródło ostatniej obrażeń        | [Źródło ID](/Vanilla/Damage/IDamageSource/)            |
| mainHandHeldItem                | [IItemStack](/Vanilla/Items/IItemStack/)               |
| maks. Zdrowie                   | zmiennoprzecinkowe                                     |
| Element offHandHeldItem         | [IItemStack](/Vanilla/Items/IItemStack/)               |
| cel zemsty                      | *IEntityLivingBase*                                    |
| SumalArmorValue                 | odcień                                                 |

## ZenSettery

| ZenSetter          | Typ parametru (*może być pusty*) |
| ------------------ | -------------------------------- |
| AIMovementSpeed    | zmiennoprzecinkowe               |
| arrowsInEntity     | odcień                           |
| zdrowie            | zmiennoprzecinkowe               |
| lastAttackedEntity | *IEntityLivingBase*              |
| cel zemsty         | *IEntityLivingBase*              |

## Więcej ZenMethods

- Boolean attackEntityFrom(źródło IDamageSource, liczba zmiennoprzecinkowa) → Coczegoś...
- boolean canEntityBeSeen([IEntity](/Vanilla/Entities/IEntity/) other);
- boolean hasItemInSlot([IEntityEquipmentSlot](/Vanilla/Entities/IEntityEquipmentSlot/) slot);
- boolean isPotionActive([IMikstura](/Vanilla/Potions/IPotion/) → Zwraca prawdę, jeśli goven jest aktywny
- boolean isPotionEffectApplicable([IPotionEffect](/Vanilla/Potions/IPotionEffect/) potionEffect);
- leczenie (ilość zmiennoprzecinkowa) → Leczy obiekt o podaną ilość
- [IEntityAttributeInstance](/Vanilla/Entities/Attributes/IEntityAttributeInstance/) getAttribute(String name) → Zwraca podany [Atrybut](/Vanilla/Entities/Attributes/IEntityAttributeInstance/)
- [IItemStack](/Vanilla/Items/IItemStack/) getItemInSlot([IEntityEquipmentSlot](/Vanilla/Entities/IEntityEquipmentSlot/) slot);
- [IPotionEffect](/Vanilla/Potions/IPotionEffect/) getActivePotionEffect(Mikstura Mikstur);
- Unieważnij efekt addPotionEffect([IPotionEffect](/Vanilla/Potions/IPotionEffect/) potionEffect);
- Uniknij usuń Miksturę ([Mikstura](/Vanilla/Potions/IPotion/));
- Unikaj clearActivePotions() → Usuwa wszystkie aktywne [mikstury](/Vanilla/Potions/IPotion/) z encji
- Unieważnij knockBack([Element IEntity](/Vanilla/Entities/IEntity/) zmiennoprzecinkowy (float 1), podwójne dwa, podwójne trzy);
- Unieważnienie śmierci();
- void onLivingUpdate();
- void setItemToSlot([IEntityEquipmentSlot](/Vanilla/Entities/IEntityEquipmentSlot/) slot, [IItemStack](/Vanilla/Items/IItemStack/) itemStack);