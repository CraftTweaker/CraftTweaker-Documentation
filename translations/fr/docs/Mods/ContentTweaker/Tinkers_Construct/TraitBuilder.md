# Caractéristiques personnalisées

En utilisant ce paquet, vous pouvez créer une caractéristique que vous pouvez ensuite mettre sur vos outils !

## Importation de la classe

Il peut être nécessaire d'importer la classe si vous rencontrez des problèmes (comme lancer un [Tableau](/AdvancedFunctions/Arrays_and_Loops/)), alors mieux être sûr que désolé et ajouter l'importation.  
`import mods.contenttweaker.tconstruct.TraitBuilder ;`

## Création d'une caractéristique

Avant tout, vous devrez créer un constructeur de caractéristiques.  
Cela peut être fait en utilisant la fonction statique :

```zenscript
//create(String identifier, int color, @Optional int maxLevel, @Optional int countPerLevel)
val myTrait = mods.contenttweaker.tconstruct.TraitBuilder.create("kindlich_test", 0xffaadd, 100, 20);
```

The `identifier` has to be unique!  
For the `color`, it is suggested that you use the hexadecimal notation as shown above.  
`maxLevel` is the maximum level the trait can become, and will default to 0.  
`countPerLevel` is how many sublevels the trait can have (like Redstone which has 50).

Une fois que vous aurez terminé toutes les modifications ci-dessous, vous devrez enregistrer votre trait.  
Cela peut être fait en utilisant la méthode `register` , qui retournera une [Représentation](/Mods/ContentTweaker/Tinkers_Construct/Trait/) de la nouvelle caractéristique.

```zenscript
myTrait.register();
```

Après l'enregistrement, vous pouvez toujours modifier le constructeur, la caractéristique elle-même ne peut plus être modifiée.  
De cette façon, vous pouvez facilement créer plusieurs traits similaires.

## Modifier les éléments

Si vous combinez le composant donné avec un outil dans la forge d'un outil, vous pouvez appliquer le trait en tant que modificateur.

```zenscript
//myTrait.addItem(IIngredient item, @Optional(1) int amountNeeded, @Optional(1) int amountMatched));
myTrait.addItem(<item:minecraft:iron_pickaxe>);
myTrait.addItem(<item:minecraft:iron_block>, 4, 2);

//myTrait.removeItem(IItemStack stack);
myTrait.removeItem(<item:minecraft:iron_pickaxe>);
```

- L'élément `` est l'élément auquel il est associé. Vous pouvez utiliser les [conditions d'article](/Vanilla/Items/Item_Conditions/) mais pas de transformateurs. 
- `amountNeeded` est le nombre d'éléments qui sont correspondants. Vous pouvez les séparer sur tous les emplacements fournis par la forge d'outils, ce qui vous permet également d'aller au-delà de 64. Dans l'exemple ci-dessus, vous avez besoin de 4 blocs de fer par ajout. La valeur par défaut est 1.
- `amountMatched` est le nombre de points de trait ajoutés par `amountNeeded`. Dans l'exemple ci-dessus quatre blocs de fer donnent deux points de caractéristique. La valeur par défaut est 1.
- Si vous utilisez la fonction `supprimer`, elle supprimera tous les ingrédients de trait qui correspondent à l'objet.

## Propriétés

Vous pouvez définir et obtenir ces propriétés en utilisant les noms donnés:

| Nom                   | Type de texte        |
| --------------------- | -------------------- |
| couleur               | Indice               |
| nombre par niveau     | Indice               |
| hidden                | booléen              |
| identifier            | chaîne de caractères |
| Description localisée | chaîne de caractères |
| localizedName         | chaîne de caractères |
| Niveaumax             | Indice               |

## Propriétés calculées

Certaines propriétés devront être calculées.  
Vous pouvez définir les fonctions de la propriété donnée :

### Appliquer ensemble

Vérifie si un trait peut être ajouté à un outil qui a déjà un autre trait ou un [enchantement](/Vanilla/Enchantments/IEnchantmentDefinition/).

```zenscript
myTrait.canApplyTogetherTrait = function(TraitRepresentation thisTrait, String otherTrait){....};
myTrait.canApplyTogetherEnchantment = function(TraitRepresentation thisTrait, IEnchantmentDefinition enchant){....};
```

### Extra info

La chaîne retourné[] sera affichée sous forme d'informations supplémentaires dans la station d'outil.

```zenscript
myTrait.extraInfo = function(TraitRepresentation thisTrait, élément IItemStack, balise IData){....};
```

## Ajout de fonctionnalités

Maintenant que vous avez créé une caractéristique, vous devez la faire modifier quelque chose, n'est-ce pas?  
C'est à quoi servent les gestionnaires d'événements caractéristiques :  
Ils sont appelés chaque fois qu'un utilisateur fait quelque chose avec l'outil contenant la caractéristique.

Ci-dessous vous verrez tous les gestionnaires possibles, ainsi que des informations sur ce qu'ils retournent et comment écrire la fonction pour eux. N'oubliez pas que vous devrez remplacer `myTrait` par votre propre nom de variable.  
De plus, vous n'avez qu'à utiliser les gestionnaires dont vous avez besoin, vous n'avez pas besoin de gestionnaires vides seulement pour que vous ayez tout rempli.

<details>
    <summary>Tous les gestionnaires dans une obus noix</summary>
    <ul>
        <li><a href="#onupdate">onUpdate</a></li>
        <li><a href="#getminingspeed">getMiningSpeed</a></li>
        <li><a href="#beforeblockbreak">format@@0 beforeBlockBreak</a></li>
        <li><a href="#afterblockbreak">format@@0 afterBlockBreak</a></li>
        <li><a href="#onblockharvestdrops">onBlockHarvestDrops</a></li>
        <li><a href="#calccrit">Crit calcaire</a></li>
        <li><a href="#calcdamage">format@@0 calcDamage</a></li>
        <li><a href="#onhit">onHit</a></li>
        <li><a href="#calcknockback">format@@0 calcKnockBack</a></li>
        <li><a href="#afterhit">format@@0 afterHit</a></li>
        <li><a href="#onblock">onBlock</a></li>
        <li><a href="#onplayerhurt">format@@0 onPlayerHurt</a></li>
        <li><a href="#ontooldamage">onToolDamage</a></li>
        <li><a href="#ontoolheal">onToolHeal</a></li>
        <li><a href="#ontoolrepair">format@@0 onToolRepair</a></li>
    </ul>
</details>

### onUpdate

Chaque tick appelé par l'outil est chargé (cela signifie dans l'inventaire du joueur).  
Paramètres:

- Un [Représentation de la Caractéristique](/Mods/ContentTweaker/Tinkers_Construct/Trait/) représentant la caractéristique `actuellement utilisée`.
- Un [IItemStack](/Vanilla/Items/IItemStack/) représentant l'outil `utilisé`
- Un [IWorld](/Vanilla/World/IWorld/) représentant le monde ``
- Une [IEntity](/Vanilla/Entities/IEntity/) représentant le propriétaire ``
- Une int représentant le `itemSlot`
- Un booléen qui décrit si l'outil actuellement `est sélectionné`

**Ne retourne rien.**

Créé en utilisant :

```zenscript
myTrait.getMiningSpeed = function(trait, outil, monde, propriétaire, itemSlot, isSelected) {
    //CODE
};
```

### getMiningSpeed

Appelé lorsqu'un bloc est miné.  
Soyez prudent car cet événement est également pris par les gestionnaires de blockBreak vanilla.  
Paramètres:

- Un [Représentation de la Caractéristique](/Mods/ContentTweaker/Tinkers_Construct/Trait/) représentant la caractéristique `actuellement utilisée`.
- Un [IItemStack](/Vanilla/Items/IItemStack/) représentant l'outil `utilisé`
- Evénement de Vitesse de Joueur [](/Vanilla/Events/Events/PlayerBreakSpeed/)

**Ne retourne rien.**

Créé en utilisant :

```zenscript
myTrait.getMiningSpeed = function(trait, tool, event) {
    //CODE
};
```

### format@@0 beforeBlockBreak

Appelé juste avant qu'un bloc ne soit cassé.  
Soyez prudent car cet événement est également pris par les gestionnaires de blockBreak vanilla.  
Paramètres:

- Un [Représentation de la Caractéristique](/Mods/ContentTweaker/Tinkers_Construct/Trait/) représentant la caractéristique `actuellement utilisée`.
- Un [IItemStack](/Vanilla/Items/IItemStack/) représentant l'outil `utilisé`
- [BlockBreakBreakEvent](/Vanilla/Events/Events/BlockBreak/)

**Ne retourne rien.**

Créé en utilisant :

```zenscript
myTrait.beforeBlockBreak = function(trait, tool, event) {
    //CODE
};
```

### format@@0 afterBlockBreak

Appelé après que le bloc ait été détruit.  
Paramètres:

- Un [Représentation de la Caractéristique](/Mods/ContentTweaker/Tinkers_Construct/Trait/) représentant la caractéristique `actuellement utilisée`.
- Un [IItemStack](/Vanilla/Items/IItemStack/) représentant l'outil `utilisé`
- Un [IWorld](/Vanilla/World/IWorld/) représentant le monde ``
- Un [IBlockState](/Vanilla/Blocks/IBlockState/) représentant le bloc `cassé`
- Une [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) représentant le mineur ``
- Un bol représentant si le minage `est insuffisant`

**Ne retourne rien.**

Créé en utilisant :

```zenscript
myTrait.afterBlockBreak = function(trait, tool, world, blockstate, miner, wasEffective) {
    //CODE
};
```

### onBlockHarvestDrops

Appelé chaque fois qu'un bloc a été cassé.  
Soyez prudent car cet événement est également appelé par les gestionnaires onBlockHarvestBreak vanilla.  
Contrairement au gestionnaire de vanille, ce gestionnaire ne sera exécuté que lorsqu'un joueur a cassé le bloc.  
Paramètres:

- Un [Représentation de la Caractéristique](/Mods/ContentTweaker/Tinkers_Construct/Trait/) représentant la caractéristique `actuellement utilisée`.
- Un [IItemStack](/Vanilla/Items/IItemStack/) représentant l'outil `utilisé`
- [Evénement BlockHarvestDrops](/Vanilla/Events/Events/BlockHarvestDrops/)

**Ne retourne rien**

Créé en utilisant :

```zenscript
myTrait.onBlockHarvestDrops = function(trait, outil, événement) {
    //CODE
};
```

### Crit calcaire

Appelé avant que les dégâts infligés à l'entité ne soient calculés pour déterminer si ce sera un coup critique ou non.  
Retournant `faux` n'arrêtera pas un coup qui est déjà un coup critique de l'être.  
Paramètres:

- Un [Représentation de la Caractéristique](/Mods/ContentTweaker/Tinkers_Construct/Trait/) représentant la caractéristique `actuellement utilisée`.
- Un [IItemStack](/Vanilla/Items/IItemStack/) représentant l'outil `utilisé`
- Un [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) représentant l'attaquant ``
- Une [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) représentant la cible ``

**Renvoie un booléen** qui est `vrai` si le coup doit se terminer, faux chaque fois que vous le souhaitez.

Créé en utilisant :

```zenscript
myTrait.calcCrit = function(trait, tool, attacker, target) {
    //CODE
    return true; //or false
};
```

### format@@0 calcDamage

Appelé quand une entité est touchée, mais toujours avant que les dégâts ne soient infligés et avant que les dégâts critiques ne soient ajoutés.  
L'endommagement crit sera calculé du résultat de ceci.  
Paramètres:

- Un [Représentation de la Caractéristique](/Mods/ContentTweaker/Tinkers_Construct/Trait/) représentant la caractéristique `actuellement utilisée`.
- Un [IItemStack](/Vanilla/Items/IItemStack/) représentant l'outil `utilisé`
- Un [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) représentant l'attaquant ``
- Une [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) représentant la cible ``
- Un flotteur représentant les `dégâts originaux` de l'outil (dégâts d'outil non modifiés)
- Un flotteur représentant les `nouveaux dégâts de l'outil` (les dégâts que l'outil va infliger jusqu'à ce point, peut être originalDomage, ou déjà être modifié par d'autres caractéristiques).
- Un booléen qui représente si le coup `isCritical`

**Renvoie un float** représentant les nouveaux dégâts. Sinon, revenez `newDamage`

Créé en utilisant

```zenscript
myTrait.calcDamage = function(trait, tool, attacker, cible, originalDamage, newDamage, isCritical) {
    //CODE
    return newDamage; //Ou votre valeur modifiée
};
```

### onHit

Appelé lorsqu'une entité est touchée, juste avant que les dégâts ne soient infligés.  
Tous les calculs d'endommagement ont déjà été effectués à ce stade.  
Paramètres:

- Un [Représentation de la Caractéristique](/Mods/ContentTweaker/Tinkers_Construct/Trait/) représentant la caractéristique `actuellement utilisée`.
- Un [IItemStack](/Vanilla/Items/IItemStack/) représentant l'outil `utilisé`
- Un [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) représentant l'attaquant ``
- Une [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) représentant la cible ``
- Un flotteur représentant les `dégâts de l'outil` (incluant les dégâts des critères)
- Un booléen qui représente si le coup `isCritical`

**Ne retourne rien**

Créé en utilisant

```zenscript
myTrait.onHit = function(trait, outil, attaquant, cible, dégâts, isCritical) {
    //CODE
};
```

### format@@0 calcKnockBack

Appelé après qu'une entité soit pressée pour modifier le knockback appliqué.  
Paramètres:

- Un [Représentation de la Caractéristique](/Mods/ContentTweaker/Tinkers_Construct/Trait/) représentant la caractéristique `actuellement utilisée`.
- Un [IItemStack](/Vanilla/Items/IItemStack/) représentant l'outil `utilisé`
- Un [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) représentant l'attaquant ``
- Une [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) représentant la cible ``
- Un flotteur représentant les `dégâts de l'outil` (incluant les critères)
- Un flotteur représentant le `originalKnockback` de l'outil (rétro-attaque d'outil non modifiée)
- Un flotteur représentant le `newKnockback de l'outil` (le knockBack de l'outil va faire jusqu'à ce point, peut être originalKnockback, ou déjà être modifié par d'autres caractéristiques).
- Un booléen qui représente si le coup `isCritical`

**Renvoie un float** représentant le nouveau retour. Sinon, retournez `newKnockback`

Créé en utilisant

```zenscript
myTrait.calcDamage = function(trait, outil, attaquant, cible, dégâts, originalKnockBack, newKnockBack, isCritical) {
    //CODE
    retourne un nouveau dégât ; //Ou votre valeur modifiée
};
```

### format@@0 afterHit

Appelé après que l'entité soit touchée et après que les dégâts soient infligés.  
Paramètres:

- Un [Représentation de la Caractéristique](/Mods/ContentTweaker/Tinkers_Construct/Trait/) représentant la caractéristique `actuellement utilisée`.
- Un [IItemStack](/Vanilla/Items/IItemStack/) représentant l'outil `utilisé`
- Un [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) représentant l'attaquant ``
- Une [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) représentant la cible ``
- Un flotteur représentant le `dealtDamage de l'outil`
- Un bol représentant si le coup `est critique`
- Un booléen représentant si l'entité `wasHit`. Peut être faux si l'entité était invulnérable ou avait d'autres moyens d'infliger les dégâts.

**Ne retourne rien**

Créé en utilisant

```zenscript
mytrait.afterHit = function(trait, outil, attaquant, cible, Dealt, wasCritical, wasHit) {
    //CODE
};
```

### onBlock

Appelé lorsque le joueur tenant l'outil bloque l'attaque.  
Sinon `onHit` sera appelé.  
Paramètres:

- Un [Représentation de la Caractéristique](/Mods/ContentTweaker/Tinkers_Construct/Trait/) représentant la caractéristique `actuellement utilisée`.
- Un [IItemStack](/Vanilla/Items/IItemStack/) représentant l'outil `utilisé`
- Un [IPlayer](/Vanilla/Players/IPlayer/) représentant le joueur ``
- [EntityLivingHurtEvent](/Vanilla/Events/Events/EntityLivingHurt/)

**Ne retourne rien**

Créé en utilisant

```zenscript
myTrait.onBlock = function(trait, tool, player, event) {
    //CODE
};
```

### format@@0 onPlayerHurt

Appelé lorsque le joueur détenant l'outil DID PAS bloquer l'attaque.  
Sinon `onBlock` sera appelé.  
Paramètres:

- Un [Représentation de la Caractéristique](/Mods/ContentTweaker/Tinkers_Construct/Trait/) représentant la caractéristique `actuellement utilisée`.
- Un [IItemStack](/Vanilla/Items/IItemStack/) représentant l'outil `utilisé`
- Un [IPlayer](/Vanilla/Players/IPlayer/) représentant le joueur ``
- Un [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) représentant l'attaquant ``
- [EntityLivingHurtEvent](/Vanilla/Events/Events/EntityLivingHurt/)

**Ne retourne rien**

Créé en utilisant

```zenscript
myTrait.onPlayerHurt = function(trait, tool, player, event) {
    //CODE
};
```

### onToolDamage

Appelé avant que la durabilité des outils soit diminuée.  
Paramètres:

- Un [Représentation de la Caractéristique](/Mods/ContentTweaker/Tinkers_Construct/Trait/) représentant la caractéristique `actuellement utilisée`.
- Un [IItemStack](/Vanilla/Items/IItemStack/) représentant l'outil `utilisé`
- Un int représentant le `unmodifiedAmount` de durabilité à réduire.
- Un entier représentant le `newAmount` de durabilité à réduire, qui peut déjà être modifié par d'autres caractéristiques.
- Une [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) représentant l'outil courant `titulaire`

**Renvoie un entier** représentant le nouveau montant. Sinon retour `newAmount`

Créé en utilisant

```zenscript
myTrait.onToolDamage = function(trait, tool, unmodifiedAmount, newAmount, holder) {
    //CODE
    return newAmount; //Ou votre valeur modifiée
};
```

### format@@0 calcToolHeal

Appelé avant que la durabilité des outils soit augmentée.  
Paramètres:

- Un [Représentation de la Caractéristique](/Mods/ContentTweaker/Tinkers_Construct/Trait/) représentant la caractéristique `actuellement utilisée`.
- Un [IItemStack](/Vanilla/Items/IItemStack/) représentant l'outil `utilisé`
- Un int représentant le `inmodifiedAmount` de durabilité à augmenter.
- Un entier représentant le `newAmount` de durabilité à augmenter, qui peut déjà être modifié par d'autres caractéristiques.
- Une [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) représentant l'outil courant `titulaire`

**Renvoie un entier** représentant le nouveau montant. Sinon retour `newAmount`

Créé en utilisant

```zenscript
myTrait.calcToolHeal = function(trait, outil, unmodifiedAmount, newAmount, holder) {
    //CODE
    return newAmount; //Ou votre valeur modifiée
};
```

### format@@0 onToolRepair

Appelé avant que l'outil ne soit réparé avec du matériel de réparation pour tissus.  
Ne pas confondre avec `onToolHeal` qui est appelé par la suite.  
Sera appelé plusieurs fois si plusieurs éléments sont utilisés en même temps.  
Paramètres:

- Un [Représentation de la Caractéristique](/Mods/ContentTweaker/Tinkers_Construct/Trait/) représentant la caractéristique `actuellement utilisée`.
- Un [IItemStack](/Vanilla/Items/IItemStack/) représentant l'outil `` à réparer
- Un entier représentant la quantité de `` de durabilité à augmenter.

**Ne retourne rien**

Créé en utilisant

```zenscript
myTrait.onToolRepair = function(trait, outil, montant) {
    //CODE
};
```

## Exemple

```zenscript
#loader contenttweaker
#modloaded tconstruct

val testTrait = mods.contenttweaker.tconstruct.TraitBuilder.create("kindlich_test");
testTrait.color = 0xffaadd;
testTrait.maxLevel = 100;
testTrait. ountPerLevel = 20;
testTrait.addItem(<item:minecraft:iron_pickaxe>);
testTrait.addItem(<item:minecraft:iron_block>, 4, 2);
testTrait.localizedName = "Whooooooooooooo";
testTrait.localizedDescription = "C'est amusant! Malheureusement, il ne fait rien... \u2639";
testTrait.afterHit = function(thisTrait, tool, attacker, target, damageDealt, wasCrit, wasHit) {
    attacker.heal(damageDealt);
};
testTrait.register();
```