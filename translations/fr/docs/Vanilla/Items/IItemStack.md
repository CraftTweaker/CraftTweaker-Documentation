# IItemStack

Un objet IItemStack se compose d'un [élément de définition](/Vanilla/Items/IItemDefinition/), d'une valeur de méta-endommagement et de données NBT.  
En d'autres termes, il fait référence à un élément ou à un bloc.

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un [Tableau](/AdvancedFunctions/Arrays_and_Loops/)), alors mieux être sûr que désolé et ajouter l'importation.  
`importer crafttweaker.item.IItemStack ;`

## Calling an IItemStack

Il y a plusieurs méthodes qui retournent une IItemStack

* Utilisation du [crochet Handler](/Vanilla/Brackets/Bracket_Item/) `<minecraft:apple>`
* Utilisation de la méthode `makeStack()` sur un objet [IItemDefinition](/Vanilla/Items/IItemDefinition/) `<minecraft:stone>.definition.makeStack(0)`
* Utilisation de la pile `getter` sur un objet [IEntityDrop](/Vanilla/Entities/IEntityDrop/)
* Utilisation du `firstItem` getter sur un [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/)

## Calling an IItemStack[] or a IItemStack List

Si vous appelez ces fonctions, vous le ferez très probablement pour itérer à travers les listes/tableaux résultants

* L'utilisation de la méthode `items` sur un indice [](/Vanilla/Variable_Types/IIngredient/) retourne une liste IItemStack : `<ore:ingotGold>.items`
* Using the `itemArray` method on an [IIngredient](/Vanilla/Variable_Types/IIngredient/) returns a IItemStack[]: `<ore:ingotGold>.itemArray`
* Utiliser la méthode `items` sur un objet [IMod](/Vanilla/Game/Mods/#imod) retourne un IItemStack[] : `loadedMods["minecraft"].items`

## Fonctions

Alors, que pouvons-nous faire de cela maintenant?

### Étendre l'ingrédient

IItemStack extends [IIngredient](/Vanilla/Variable_Types/IIngredient/).  
That means all functionality that is available to [IIngredient](/Vanilla/Variable_Types/IIngredient/) objects also is applicable to IItemStacks. <details><summary>Méthodes dérivées</summary> 

* stack.mark
* Nombre de piles
* Empiler des objets
* stack.itemTableau
* Stack.liquides
* stack.commandString
* stack | autreIngrédient
* stack.ou(otherIngredient)
* stack.transform([transformateur](/Vanilla/Items/Item_Transformers/))
* stack.transformNew([transformateur](/Vanilla/Items/Item_Transformers/))
* stack.only([condition](/Vanilla/Items/Item_Conditions/))
* stack.marked(mark)
* stack.matches(item)
* stack.matchesExact(item)
* stack.matches(liquide)
* la pile a un ingrédient
* stack.applyTransform(stack,player)
* stack.hasTransformers()</details>

### ZenGetters/ZenSetters

Lisez comment les utiliser [ici](/UsingThisWiki/). Consultez également les exemples ci-dessous.

| Méthode ZenGetter/Zen           | Paramètres/Méthode de Zen | Type de texte                                                  |
| ------------------------------- | ------------------------- | -------------------------------------------------------------- |
| Définition                      |                           | [Définition IItemDefinition](/Vanilla/Items/IItemDefinition/)  |
| Nom                             |                           | chaîne de caractères                                           |
| nomdeaffichage                  | nomdeaffichage            | chaîne de caractères                                           |
| maxStackSize                    | maxStackSize              | Indice                                                         |
| dureté                          | dureté                    | flottant                                                       |
| endommagement                   |                           | Indice                                                         |
| maxDamage                       | maxDamage                 | Indice                                                         |
| format@@0 hasTag                |                           | booléen                                                        |
| Étiquette                       | withTag(tag)              | [IData](/Vanilla/Data/IData/)                                  |
| ores                            |                           | Liste <[IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/)\>     |
| classes d'outil                 |                           | Liste<string\>                                                |
| itemEnchantability              |                           | Indice                                                         |
| conteneurItem                   |                           | IItemStack                                                     |
| A ContainerItem                 |                           | booléen                                                        |
| coût de réparation              | coût de réparation        | Indice                                                         |
| peut éditer les blocs           |                           | booléen                                                        |
| isOnItemFrame                   |                           | booléen                                                        |
| est enchantable                 |                           | booléen                                                        |
| est enchanté                    |                           | booléen                                                        |
| est endommagé                   |                           | booléen                                                        |
| peut être endommagé             |                           | booléen                                                        |
| format@@0 isItemBlock           |                           | bool (si l'élément contenu est un itemblock)                   |
| isStackable                     |                           | booléen                                                        |
| est un paiement par balise      |                           | booléen                                                        |
| Est Effet                       |                           | booléen                                                        |
| hasDisplayName                  |                           | booléen                                                        |
| métadonnées                     |                           | Indice                                                         |
| a sous-types                    |                           | booléen                                                        |
| isEmpty                         |                           | booléen                                                        |
| temps de brûlure                |                           | Indice                                                         |
| Afficher la barre de durabilité |                           | booléen                                                        |
| a une entité personnalisée      |                           | booléen                                                        |
| enchantements                   |                           | Liste <[IEnchantement](/Vanilla/Enchantments/IEnchantment/)\> |
| format@@0 matchTagExact         |                           | booléen                                                        |

#### Montant

| Méthode d'appel                | Retours                                                     | Types de paramètres |
| ------------------------------ | ----------------------------------------------------------- | ------------------- |
| `stack.anyAmount()`            | Une nouvelle IItemStack avec la propriété modifiée          |                     |
| `stack.amount(int amount)`     | Une nouvelle IItemStack avec la propriété modifiée          | Indice              |
| `stack.withAmount(int amount)` | Une nouvelle IItemStack avec la propriété modifiée          | Indice              |
| `quantité de la pile *`        | Une nouvelle IItemStack avec la propriété modifiée          | Indice              |
| `stack.splitStack(int amount)` | La divisée IItemStack. L'ancien sera réduit en conséquence. | Indice              |

#### Poids

| Méthode d'appel                   | Retours                                                | Types de paramètres |
| --------------------------------- | ------------------------------------------------------ | ------------------- |
| `stack.percent(chance flottante)` | [WeightedItemStack](/Vanilla/Items/WeightedItemStack/) | float (100 = 100%)  |
| `stack.weight(chance de float)`   | [WeightedItemStack](/Vanilla/Items/WeightedItemStack/) | float (1 = 100%)    |

#### Dégâts

| Méthode d'appel                                | Retours                                            | Types de paramètres                        |
| ---------------------------------------------- | -------------------------------------------------- | ------------------------------------------ |
| `stack.anyDamage()`                            | Une nouvelle IItemStack avec la propriété modifiée |                                            |
| `stack.withDamage(int damage)`                 | Une nouvelle IItemStack avec la propriété modifiée | Indice                                     |
| `stack.damageItem(int amount, IEntity entity)` | null (rien)                                        | int, [IEntity](/Vanilla/Entities/IEntity/) |

#### Tags

| Méthode d'appel                                  | Retours                                            | Types de paramètres                 |
| ------------------------------------------------ | -------------------------------------------------- | ----------------------------------- |
| `stack.withEmtpyTag()`                           | Une nouvelle IItemStack avec la propriété modifiée |                                     |
| `stack.withTag(balise IData)`                    | Une nouvelle IItemStack avec la propriété modifiée | [IData](/Vanilla/Data/IData/)       |
| `stack.withTag(tag IData, bool matchTagExact)`   | Une nouvelle IItemStack avec la propriété modifiée | [IData](/Vanilla/Data/IData/), bool |
| `stack.removeTag(String nom)`                    | Une nouvelle IItemStack avec la propriété modifiée | chaîne de caractères                |
| `format@@0 stack.updateTag(IData tag)`           | Une nouvelle IItemStack avec la propriété modifiée | [IData](/Vanilla/Data/IData/)       |
| `stack.updateTag(tag IData, bool matchTagExact)` | Une nouvelle IItemStack avec la propriété modifiée | [IData](/Vanilla/Data/IData/), bool |

#### Bloc de lancement

| Méthode d'appel     | Retours                                            |
| ------------------- | -------------------------------------------------- |
| `stack.asBlock()`   | Un nouvel objet [IBlock](/Vanilla/Blocks/IBlock/). |
| `pile comme IBlock` | Un nouvel objet [IBlock](/Vanilla/Blocks/IBlock/). |

#### Nom/Lore/Affichage

| Méthode d'appel                     | Retours                                                                                                                      | Types de paramètres                               |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| `stack.withDisplayName(String nom)` | Une nouvelle IItemStack avec la propriété changée. Contrairement au setter displayName, cela ne s'applique qu'à cet élément. | string (supports color codes with "§")            |
| `stack.withLore(String[] lore)`     | Une nouvelle IItemStack avec la propriété changée.                                                                           | string[] (supporte les codes de couleur avec "§") |
| `stack.clearCustomName()`           | null (rien)                                                                                                                  |                                                   |

#### Enchantements

| Méthode d'appel                                                       | Retours        | Types de paramètres                                                           |
| --------------------------------------------------------------------- | -------------- | ----------------------------------------------------------------------------- |
| `stack.canApplyAtCraftingTable(IEnchantmentDefinition enchanantment)` | Un ébullition. | [Définition de l'enchantement](/Vanilla/Enchantments/IEnchantmentDefinition/) |
| `stack.addEnchantment(enchantement IEnchantment)`                     | null (rien)    | [IEnchantement](/Vanilla/Enchantments/IEnchantment/)                          |

#### canItem...

| Méthode d'appel                                   | Retours                                                        | Types de paramètres                                    |
| ------------------------------------------------- | -------------------------------------------------------------- | ------------------------------------------------------ |
| `stack.canPlaceOn(bloc de définition IBlock)`     | Un bol qui indique si l'objet peut être placé sur le bloc.     | [Définition IBlock](/Vanilla/Blocks/IBlockDefinition/) |
| `stack.canDestroy(bloc de définition IBlock)`     | Un bol qui indique si l'objet peut détruire le bloc.           | [Définition IBlock](/Vanilla/Blocks/IBlockDefinition/) |
| `stack.canHarvestBlock(bloc IBlockState)`         | Un bol qui indique si l'objet peut récolter le bloc.           | [État de l'IBlock](/Vanilla/Blocks/IBlockState/)       |
| `stack.getStrengthAgainstBlock(bloc IBlockState)` | Un flotteur qui représente la force de l'objet contre le bloc. | [État de l'IBlock](/Vanilla/Blocks/IBlockState/)       |

#### create IEntityItem

| Méthode d'appel                                              | Retours                                                                                                            | Types de paramètres                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `stack.createEntityItem(IWorld world, int x, int y, int z);` | Un nouvel [IEntityItem](/Vanilla/Entities/IEntityItem/) qui correspond à l'élément nouvellement créé dans le monde | [IWorld](/Vanilla/World/IWorld/), int, int, int                          |
| `stack.createEntityItem(IWorld world, IBlockPos pos);`       | Un nouvel [IEntityItem](/Vanilla/Entities/IEntityItem/) qui correspond à l'élément nouvellement créé dans le monde | [IWorld](/Vanilla/World/IWorld/), [IBlockPos](/Vanilla/World/IBlockPos/) |

## Transformateurs d'élément et conditions d'élément

Vous pouvez trouver comment les utiliser soit dans la page [IIngrédient](/Vanilla/Variable_Types/IIngredient/) ou dans leurs entrées respecives :  
[Conditions de l’article](/Vanilla/Items/Item_Conditions/)  
[Transformateurs d’éléments](/Vanilla/Items/Item_Transformers/)

## Exemples

#### Afficher le nom

Globalement (traduit l'élément par le nouveau nom).

```zenscript
val apple = <minecraft:apple>;

//affiche "Apple"
print(apple.displayName);

//Définit le nom affiché des pommes à "Tomato"
pomme. isplayName = "Tomato";

//affiche "Tomato"
print(apple.displayName);
```

Localement (seulement ce seul élément).

```zenscript
<minecraft:coal>.withDisplayName("Black Gold") ;
```

#### Connaissance

`<minecraft:coal>.withLore(["Cette fonction","nécessite un","string[]"]);`

#### Taille maximale de la pile

La taille maximale de la pile est le nombre d’éléments dans une seule pile, par exemple, la taille de pile de la laine est de 64 et celle de 16 seulement de Buckets.

```zenscript
val pomme = <minecraft:apple>;
seau val = <minecraft:bucket>;

//affiche 64
print(pomme. axStackSize);

//définit la taille max de pile de pommes à 32
pomme.maxStackSize = 32;

//affiche 32
print(pomme. axStackSize);

//définit la taille Max Stack des pommes à la taille Max Stack de Bucket
apple.maxStackSize = bucket.maxStackSize;

//affiche 16
print(apple.maxStackSize);
```

#### Dureté

La dureté est le temps qu'il faut pour briser le bloc référencé. Ne fonctionne que si l'objet fait référence à un bloc.

```zenscript
Herbe val = <minecraft:grass>;

//affiche 1.0
print(grass.hardness);

//définit la dureté de l'herbe à 10.0
grass.hardness = 10.0 ;

//affiche 10.0
print(grass.hardness);
```

#### Dégâts

Les dégâts pour les objets qui ne peuvent pas être endommagés sont 0.

```zenscript
choisir val = <minecraft:diamond_pickaxe>;

//affiche 1561
print(pick. axDamage);

//fixe les dégâts maximaux de la pioche en diamant à 256
pick.maxDamage = 256;

//affiche 256
print(pick. Dégâts axes);



//Dégâts peu importe, utilisés dans les recettes
<minecraft:iron_pickaxe>.anyDamage();

//Avec les dégâts donnés
<minecraft:iron_pickaxe>.withDamage(122);
```

#### Étiquette

La balise est un objet [IData](/Vanilla/Data/IData/) .  
Si l'élément ne contient pas de balise, il retournera une balise vide, jamais nulle.

```zenscript
//crée une pomme avec la balise donnée
//Supprime les balises existantes
<minecraft:apple>. ithTag({Unbreakable: 1});

//crée une pomme avec une étiquette emtpy
<minecraft:apple>. ithEmptyTag();

//supprime une balise par son nom
élément. emoveTag("tagName");

//mettre à jour la balise existante
//Si la balise ne remplace pas une balise existante, elle restera constante.
format@@0 item.updateTag({Unbreakable: 1});
```

#### Liquide

Renvoie le liquide contenu dans un seul article (si multiple) ou null si l'élément n'est pas un conteneur.  
Renvoie un objet [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) ou nul.

```zenscript
val lav = <minecraft:lava_bucket>;
print(lav.liquid.name);
```

#### Montant

Combien de pommes y a-t-il ?

```zenscript
<minecraft:apple>. nyAmount();

//1 Pomme
pomme val = <minecraft:apple>;

//2 Pommes
val morePommes = pomme * 2;

//3 Pommes
val evenMorePommes = <minecraft:apple> * 3 ;
```

#### Poids

Retourne un [weightedItemStack](/Vanilla/Items/WeightedItemStack/) avec le pourcentage fourni.

```zenscript
val pomme = <minecraft:apple>;

//Crée un poidtedItemStack avec 100 pour cent de chance
var applePourcentage = pomme % 100 ;

//Fait la même chose que la
pommePourcentage = pomme. huit(1.0);
```

#### Ores

Retourne une liste de [IOreDictEntries](/Vanilla/OreDict/IOreDictEntry/) se référant à cet élément.

```zenscript
<minecraft:apple>.ores;
```

#### Casting sur IBlock

Vous pouvez convertir un IItemStack en un [IBlock](/Vanilla/Blocks/IBlock/), tant que vous faites référence à un bloc, sinon le cast lancera une exception.

```zenscript
<minecraft:dirt>.asBlock();
<minecraft:dirt> en tant que crafttweaker.block.IBlock ;
```

Vous pouvez également tester si un IItemStack contient un ItemBlock et peut donc être converti :

<pre><code class="zenscript:">&lt;minecraft:dirt&gt;.isItemBlock; // true
&lt;minecraft:stick&gt;.isItemBlock; // false
</code></pre>

#### Propriétés de la nourriture

Vous pouvez vérifier si un IItemStack est un élément de nourriture et quelles propriétés de nourriture il possède.  
Peut ne pas fonctionner pour chaque produit moddé !

```zenscript
<minecraft:apple>.isFood; //true
<minecraft:apple>.saturation ; //0.3
<minecraft:apple>.healAmount; //4
```