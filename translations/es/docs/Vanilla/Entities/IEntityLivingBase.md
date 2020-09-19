# IEntityLivingBase

Una entidad viviente tiene salud y puede morir.  
Eso significa Monstruos, Animales pero también [IJugadores](/Vanilla/Players/IPlayer/).

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema (como lanzar un [array](/AdvancedFunctions/Arrays_and_Loops/)), más vale estar seguro que lo siento y añadir la importación.  
`importar crafttweaker.entity.IEntityLivingBase;`

## Extendiendo [Itidad](/Vanilla/Entities/IEntity/)

IEntityLivingBase extends [IEntity](/Vanilla/Entities/IEntity/). Eso significa que todas las funciones disponibles para [Itidades](/Vanilla/Entities/IEntity/) también están disponibles en IEntityLivingBase.

## ZenGetters

| ZenGetter                | Tipo de retorno (*puede ser nulo*)                          |
| ------------------------ | ----------------------------------------------------------- |
| activarEfectos de poción | Lista <[Efecto de poción](/Vanilla/Potions/IPotionEffect/)> |
| Velocidad AIMovimiento   | flotante                                                    |
| flechas de entidad       | int                                                         |
| entidad de ataque        | *IEntityLivingBase*                                         |
| lata de agua bajo        | boolean                                                     |
| salud                    | flotante                                                    |
| isChild                  | boolean                                                     |
| está en la escalera      | boolean                                                     |
| isUndead                 | boolean                                                     |
| lastAttackedEntity       | *IEntityLivingBase*                                         |
| lastAttackedEntityTime   | int                                                         |
| último daño origen       | [Fuente del ID](/Vanilla/Damage/IDamageSource/)             |
| mainHandHeldItem         | [IItemStack](/Vanilla/Items/IItemStack/)                    |
| maxHealth                | flotante                                                    |
| objeto fuera de mano     | [IItemStack](/Vanilla/Items/IItemStack/)                    |
| venganza objetivo        | *IEntityLivingBase*                                         |
| totalArmorValue          | int                                                         |

## ZenSetters

| Ajuste                 | Tipo de parámetro (*puede ser nulo*) |
| ---------------------- | ------------------------------------ |
| Velocidad AIMovimiento | flotante                             |
| flechas de entidad     | int                                  |
| salud                  | flotante                             |
| lastAttackedEntity     | *IEntityLivingBase*                  |
| venganza objetivo      | *IEntityLivingBase*                  |

## Más ZenMethods

- boolean attackEntityFrom(ID fuente fuente, cantidad flotante) → Hace algo...
- boolean canEntityBeSeen([IEntity](/Vanilla/Entities/IEntity/) other);
- boolean hasItemInSlot([IEntityEquipmentSlot](/Vanilla/Entities/IEntityEquipmentSlot/) slot);
- boolean isPotionActive([IPotion](/Vanilla/Potions/IPotion/) potion) → Devuelve verdadero si la poción goven está activa
- booleano isPotionEffectApplicable([IPotionEffect](/Vanilla/Potions/IPotionEffect/) potionEffect);
- cura(cantidad flotante) → Cura la entidad por la cantidad dada
- [IEntityAttributeInstance](/Vanilla/Entities/Attributes/IEntityAttributeInstance/) getAttribute(String name) → Devuelve el atributo dado [](/Vanilla/Entities/Attributes/IEntityAttributeInstance/)
- [IItemStack](/Vanilla/Items/IItemStack/) getItemInSlot([IEntityEquipmentSlot](/Vanilla/Entities/IEntityEquipmentSlot/) slot);
- [IPotionEffect](/Vanilla/Potions/IPotionEffect/) getActivePotionEffect(Potion potion);
- potionEffect([potionEffecto IPotionEffect](/Vanilla/Potions/IPotionEffect/) potionEffect);
- vacío removePotionEffect([Poción](/Vanilla/Potions/IPotion/) poción);
- void clearActivePotions() → Elimina todas las pociones [activas](/Vanilla/Potions/IPotion/) de la entidad
- boid knockBack([entidad](/Vanilla/Entities/IEntity/) IEntidad, flotante uno, doble dos, doble tres);
- void onDeath();
- void onLivingUpdate();
- void setItemToSlot([IEntityEquipmentSlot](/Vanilla/Entities/IEntityEquipmentSlot/) slot, [IItemStack](/Vanilla/Items/IItemStack/) itemStack);