# Constructeur d'enchantement

En utilisant ce paquet, vous pouvez créer des enchantements personnalisés pour des outils, des armes et probablement tout le reste.

## Importation de la classe

Il peut être nécessaire d'importer la classe si vous rencontrez des problèmes (comme lancer un [Tableau](/AdvancedFunctions/Arrays_and_Loops/)), alors mieux être sûr que désolé et ajouter l'importation.  
`import mods.contenttweaker.enchantments.EnchantmentBuilder ;`

## Création d'un Enchantement

Avant tout, vous devrez créer un constructeur de matériaux.  
Cela peut être fait en utilisant la méthode de création statique.

```zenscript
//mods.contenttweaker.enchantments.EnchantmentBuilder.create(String name);
val myChant = mods.contenttweaker.enchantments.EnchantmentBuilder.create("kindlich_chant");
```

N'oubliez pas que vous devrez enregistrer l'enchantement une fois que vous aurez fait vos modifications.  
Cela peut être fait avec la méthode `registre` qui retournera une [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) du nouvel enchantement.

```zenscript
monChant.register();
```

## Propriétés

Vous pouvez définir et obtenir ces propriétés en utilisant `myChant.name`.

| Nom                      | Type de texte                                                                        |
| ------------------------ | ------------------------------------------------------------------------------------ |
| Nom                      | chaîne de caractères                                                                 |
| autoriséOnBooks          | booléen                                                                              |
| Emplacements applicables | [IEntityEquipmentSlot](/Vanilla/Entities/IEntityEquipmentSlot/)[] (par défaut: vide) |
| malédiction              | booléen                                                                              |
| domaine                  | string (default: "contenttweaker")                                                   |
| Niveaumax                | int (par défaut: 1)                                                                  |
| minLevel                 | int (par défaut: 1)                                                                  |
| rareté                   | string (utilisez les méthodes personnalisées ci-dessous)                             |
| trésor                   | booléen                                                                              |
| Type de type             | string (utilisez les méthodes personnalisées ci-dessous)                             |

## Propriétés calculées

Vous pouvez définir et obtenir ces fonctions de propriétés.

| Nom                            | paramètres                                                                                                                                                                                                                      | Type de retour       |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| canAppliquer                   | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchantment, [IItemStack](/Vanilla/Items/IItemStack/) élément                                                                                       | booléen              |
| canApplyAtEnchantmentTable     | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchantment, [IItemStack](/Vanilla/Items/IItemStack/) élément                                                                                       | booléen              |
| peut s'appliquer ensemble      | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchantment, [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) autre                                                          | booléen              |
| format@@0 calcDamageByCreature | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchantment, [int]() niveau, [Chaîne]() créatureType                                                                                                | flottant             |
| calcEnchantabilityMin          | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchantment, [int]() niveau                                                                                                                         | Indice               |
| calcEnchantabilityMax          | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchantment, [int]() niveau                                                                                                                         | Indice               |
| format@@0 calcModifierDamage   | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchantment, [int]() niveau, [IDamageSource](/Vanilla/Damage/IDamageSource/) dommagageSource                                                        | Indice               |
| format@@0 calcTranslatedName   | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchantment, [int]() niveau                                                                                                                         | chaîne de caractères |
|                                |                                                                                                                                                                                                                                 |                      |
| onEntityDamed                  | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchantment, [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) utilisateur, [IEntity](/Vanilla/Entities/IEntity/) cible, [int]() niveau     | null                 |
| onUserHurt                     | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchantment, [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) utilisateur, [IEntity](/Vanilla/Entities/IEntity/) attaquant, [int]() niveau | null                 |

## Rareté et Type

Utilisez ces méthodes pour être immédiatement averti si vous avez fait une faute de frappe.

```zenscript
//Rarities
myChant.setRarityCommon()
myChant.setRarityUncommon()
myChant.setRarityRare()
myChant.setRarityVeryRare()

//Types
myChant.setTypeAll()
myChant.setTypeArmor()
myChant.setTypeFeed()
myChant. etTypeLegs()
myChant.setTypeChest()
myChant.setTypeHead()
myChant.setTypeWeapon()
myChant.setTypeDigger()
myChant.setTypeFishingRod()
myChant.setTypeBreakable()
myChant.setTypeBow()
myChant.setTypeWearable()
```

## Exemple

```zenscript
#loader contenttweaker
constructeur val = mods.contenttweaker.enchantments.EnchantmentBuilder.create("kindlich_chant");
builder.applicableSlots = [mainHand, offhand, feet, legs, chest, head];
builder.setTypeAll();
builder.setRarityVeryRare();
builder. alcModifierDamage = function(thisEnch, level, damageSource){
    niveau de retour;
};

constructeur. nUserHurt = function(thisEnch, entity, attacker, level) {
    entity.health = entity.maxHealth;
    if(entity instanceof crafttweaker. layer.IPlayer) {
        joueur val en tant que crafttweaker.player. Joueur = entité;
        joueur.foodStats.addStats(100, 10. f);
    }

};

builder.register();

builder.name = "other_chant";
builder. omain = "definitely_not_cot";
builder.calcModifierDamage = null;
builder. nUserHurt = function(thisEnch, player, attacker, level) {
    player.sendMessage("EARNED IT!");   
};
builder.register();
```