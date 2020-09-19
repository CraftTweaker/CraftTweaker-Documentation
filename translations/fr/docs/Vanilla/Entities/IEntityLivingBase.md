# IEntityLivingBase

Une entité vivante est une entité qui a de la santé et qui peut mourir.  
Cela signifie Monstres, Animaux mais aussi [IPlayers](/Vanilla/Players/IPlayer/).

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un [Tableau](/AdvancedFunctions/Arrays_and_Loops/)), alors mieux être sûr que désolé et ajouter l'importation.  
`importer crafttweaker.entity.IEntityLivingBase ;`

## Étendre [IEntity](/Vanilla/Entities/IEntity/)

IEntityLivingBase extends [IEntity](/Vanilla/Entities/IEntity/). Cela signifie que toutes les fonctions disponibles pour [IEntities](/Vanilla/Entities/IEntity/) sont également disponibles pour IEntityLivingBase.

## ZenGetters

| ZenGetter                      | Type de retour (*peut être null*)                          |
| ------------------------------ | ---------------------------------------------------------- |
| Effets de potion actifs        | Liste <[Effet de potion](/Vanilla/Potions/IPotionEffect/)> |
| Vitesse de déplacement de l'AI | flottant                                                   |
| flèches dans l'entité          | Indice                                                     |
| Entité attaquée                | *IEntityLivingBase*                                        |
| canBreatheUnderwater           | boolean                                                    |
| santé                          | flottant                                                   |
| isChild                        | boolean                                                    |
| format@@0 isOnLadder           | boolean                                                    |
| isUndead                       | boolean                                                    |
| lastAttackedEntity             | *IEntityLivingBase*                                        |
| lastAttackedEntityTime         | Indice                                                     |
| format@@0 lastDamageSource     | [IDamageSource](/Vanilla/Damage/IDamageSource/)            |
| mainHandHeldItem               | [IItemStack](/Vanilla/Items/IItemStack/)                   |
| maxHealth                      | flottant                                                   |
| format@@0 offHandHeldItem      | [IItemStack](/Vanilla/Items/IItemStack/)                   |
| format@@0 vengeTarget          | *IEntityLivingBase*                                        |
| Valeur totale de l'armure      | Indice                                                     |

## ZenSetters

| ZenSetter                      | Type de paramètre (*peut être null*) |
| ------------------------------ | ------------------------------------ |
| Vitesse de déplacement de l'AI | flottant                             |
| flèches dans l'entité          | Indice                               |
| santé                          | flottant                             |
| lastAttackedEntity             | *IEntityLivingBase*                  |
| format@@0 vengeTarget          | *IEntityLivingBase*                  |

## Plus de méthodes Zen

- boolean attackEntityFrom(IDamageSource source, float amount) → Fait quelque chose...
- boolean canEntityBeSeen([IEntity](/Vanilla/Entities/IEntity/) other);
- boolean hasItemInSlot([IEntityEquipmentSlot](/Vanilla/Entities/IEntityEquipmentSlot/) slot);
- isPotionActive(potion[IPotion](/Vanilla/Potions/IPotion/) ) → Renvoie vrai si la potion du goven est active
- booléen isPotionEffectApplicable([IPotionEffect](/Vanilla/Potions/IPotionEffect/) potionEffet de potion);
- guérison(quantité flottante) → Soigne l'entité par le montant donné
- [IEntityAttributeInstance](/Vanilla/Entities/Attributes/IEntityAttributeInstance/) getAttribute(String name) → Renvoie l'attribut donné [](/Vanilla/Entities/Attributes/IEntityAttributeInstance/)
- [IItemStack](/Vanilla/Items/IItemStack/) getItemInSlot([IEntityEquipmentSlot](/Vanilla/Entities/IEntityEquipmentSlot/) slot);
- [IPotionEffect](/Vanilla/Potions/IPotionEffect/) getActivePotionEffect(IPotion potion);
- void addPotionEffect([IPotionEffect](/Vanilla/Potions/IPotionEffect/) potionEffet de potion);
- void removePotionEffect([potion IPotion](/Vanilla/Potions/IPotion/));
- void clearActivePotions() → Supprime toutes les potions [actives](/Vanilla/Potions/IPotion/) de l'entité
- void knockBack([IEntity](/Vanilla/Entities/IEntity/) entité, float un, double deux, double trois);
- annuler onDeath();
- void onLivingUpdate();
- void setItemToSlot([IEntityEquipmentSlot](/Vanilla/Entities/IEntityEquipmentSlot/) slot, [IItemStack](/Vanilla/Items/IItemStack/) itemStack);