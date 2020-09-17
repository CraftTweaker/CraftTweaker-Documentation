# Constructeur de matériaux

En utilisant ce paquet, vous pouvez créer des matériaux que vous pouvez ensuite créer des outils avec!

## Importation de la classe

Il peut être nécessaire d'importer la classe si vous rencontrez des problèmes (comme lancer un [Tableau](/AdvancedFunctions/Arrays_and_Loops/)), alors mieux être sûr que désolé et ajouter l'importation.  
`import mods.contenttweaker.tconstruct.MaterialBuilder ;`

## Créer un matériau

Avant tout, vous devrez créer un constructeur de matériaux.  
Cela peut être fait en utilisant la méthode de création statique.

```zenscript
//mods.contenttweaker.tconstruct.MaterialBuilder.create(String identifier);
val myMat = mods.contenttweaker.tconstruct.MaterialBuilder.create("kindlich_mat");
```

N'oubliez pas que vous devrez enregistrer le matériel une fois que vous aurez effectué vos modifications.  
Ceci peut être fait avec la méthode `registre` qui retournera une [représentation matérielle](/Mods/ContentTweaker/Tinkers_Construct/Material/) du nouveau matériel.

```zenscript
myMat.register();
```

## Propriétés

Vous pouvez définir et obtenir ces propriétés en utilisant `myMaterial.name`.

| Propriété               | Type de texte                                      | Notes supplémentaires                                                                |
| ----------------------- | -------------------------------------------------- | ------------------------------------------------------------------------------------ |
| identifier              | chaîne de caractères                               | Nom unique                                                                           |
| couleur                 | Indice                                             |                                                                                      |
| hidden                  | booléen                                            |                                                                                      |
| liquide                 | [ILiquidStack](/Vanilla/Liquids/ILiquidStack/)     | Sortie de la Fonderie                                                                |
| fabriquable             | booléen                                            | Peut être créé dans le constructeur de pièces                                        |
| jetable                 | booléen                                            | Peut être créé en utilisant des casts. Nécessite que le liquide soit défini !        |
| élément représentant    | [IItemStack](/Vanilla/Items/IItemStack/)           | Afficher l'élément dans le manuel du bricolage                                       |
| Minerai de représentant | [Entrée IOreDict](/Vanilla/OreDict/IOreDictEntry/) | Affiché si l'élément représentant est NULL                                           |
| fragment                | [IItemStack](/Vanilla/Items/IItemStack/)           | Utilisé au lieu de l'objet fragmentaire du bricolage dans le constructeur de pièces. |
| localizedName           | chaîne de caractères                               | Le nom affiché                                                                       |

## Propriétés calculées

### Traducteur d'élément

Vous pouvez utiliser cette fonction pour calculer le nom du matériau si vous en avez besoin.  
Utilise une représentation de matériau [](/Mods/ContentTweaker/Tinkers_Construct/Material/) de ce matériau et le nom de l'outil qui a été renommé (par exemple "Mattock")

```zenscript
myMAt.itemLocalizer = function(thisMaterial, itemName){return "Cool " + itemName;};
```

## Ajouter des éléments de matériel

Si vous utilisez l'objet donné dans le constructeur de pièces, vous pouvez définir le nombre de points de matériaux qui vont donner, ou la quantité que l'objet va réparer.

```zenscript
//myMaterial.addItem(IIngredient item, @Optional(1) int amountNeeded, @Optional(144) int amountMatched));
myMaterial.addItem(<item:minecraft:iron_pickaxe>);
myMaterial.addItem(<item:minecraft:iron_block>, 4, 288);

//myMaterial.removeItem(IItemStack item);
myMaterial.removeItem(<minecraft:iron_block>);
```

- L'élément `` est l'élément auquel il est associé. Vous pouvez utiliser les [conditions d'article](/Vanilla/Items/Item_Conditions/) mais pas de transformateurs. 
- `amountNeeded` est le nombre d'éléments qui sont correspondants. Vous pouvez les séparer sur tous les emplacements fournis par la forge d'outils, ce qui vous permet également d'aller au-delà de 64. Dans le deuxième exemple ci-dessus, vous avez besoin de 4 blocs de fer par ajout. La valeur par défaut est 1.
- `amountMatched` est la quantité de points matériels ajoutés par `amountNeeded`. Dans le deuxième exemple au-dessus de quatre blocs de fer donnent deux points de matériau. La valeur par défaut est 144 (un lingot/une valeur matérielle).
- Si vous utilisez la fonction `supprimer`, elle supprimera tous les ingrédients de trait qui correspondent à l'objet.

## Caractéristiques du matériau

Vous pouvez ajouter une caractéristique au matériau.  
Tous les éléments fabriqués à partir de ce matériau auront alors cette caractéristique.  
Utilise une chaîne avec l'identifiant de la caractéristique, et une chaîne optionnelle `dependency` qui vous indiquera quels itemTypes doivent être affectés par la caractéristique.  
Alternativement, vous pouvez utiliser une [représentation de la transe](/Mods/ContentTweaker/Tinkers_Construct/Trait/), bien que cela ne fonctionne que si le trait est déjà initialisé par le temps de fonctionnement de CoT (donc très probablement seulement pour les traits personnalisés). Les valeurs possibles pour la `dépendance` sont:

- `null` (par défaut) → Tous les éléments, sauf si ce dépôt a déjà d'autres caractéristiques.
- `"tête"`
- `"poigné"`
- `"Supplément"`
- `"arc"`
- `"bowstring"`
- `"projectile"`
- `« arbre »`
- `"Fletching"`

```zenscript
myMaterial.addMaterialTrait("fiery");
myMaterial.addMaterialTrait("fiery", "bowstring");
```

Vous pouvez également supprimer les caractéristiques de matériaux (ce qui est particulièrement utile lors de la réalisation de matériaux par lots).  
Vous les supprimez en utilisant leur chaîne d'identification et une dépendance optionnelle.  
Si vous omettez la dépendance ou utilisez `null` tous les traits avec cet identifiant seront supprimés.

```zenscript
//myMaterial.remove(String identifier, @Optional String dependency);
myMaterial.remove("cactus");
myMaterial.remove("cactus", "bowstring");
```

## Statistiques de matériel

Pour que TiCon puisse construire vos matériaux, il faut connaître les statistiques de matériaux.  
Seuls les outils dont les caractéristiques ont été ajoutées seront construits !

```zenscript
<br /><br />myMat.addHeadMaterialStats(int durability, float miningSpeed, float attackDamage, int harvestLevel);
myMat.removeHeadMaterialStats();


myMat.addHandleMaterialStats(float modifier, int durability);
myMat.removeHandleMaterialStats();


myMat.addExtraMaterialStats(int extraDurability);
myMat.removeExtraMaterialStats();


myMat.addBowMaterialStats(float drawSpeed, float range, float bonusDamage);
myMat.removeBowMaterialStats();


myMat.addBowStringMaterialStats(float modifier);
myMat.removeBowStringMaterialStats();


myMat.addArrowShaftMaterialStats(float modifier, int bonusAmmo);
myMat.removeArrowShaftMaterialStats();


myMat.addFletchingMaterialStats(float accuracy, float modifier);
myMat.removeFletchingMaterialStats();


myMat.addProjectileMaterialStats();
myMat.removeProjectileMaterialStats();
```

## Exemple

```zenscript
#loader contenttweaker
#modloaded tbuild

val testMat = mods.contenttweaker.tconstruct.MaterialBuilder.create("kindlich_mat");
testMat.color = 0x8e661b;
testMat.craftable = true;
testMat. iquid = <liquid:lava>;
testMat.castable = true;
testMat.addItem(<item:minecraft:comparator>);
testMat. ddItem(<item:minecraft:repeater>, 1, 2);
testMat.addItem(<item:minecraft:red_flower:4>);
testMat.representativeItem = <item:minecraft:red_flower:4>;
testMat. ddHeadMaterialStats(100, 1.5f, 5.5f, 5);
testMat.addHandleMaterialStats(0.3, 500);
testMat.addBowStringMaterialStats(0.5f);
testMat.addMaterialTrait(<ticontrait:kindlich_test>, "bowstring");
testMat. ddMaterialTrait(<ticontrait:kindlich_test>, "head");
testMat.addMaterialTrait("blasting", "bowstring");
testMat. ddMaterialTrait("explosion", "head");

//null (ou ne pas spécifier ce paramètre) signifie qu'il s'agit d'une caractéristique par défaut.
//Les traits par défaut ne sont demandés que si aucun autre trait n'est ajouté à ce type de matériel.
//Dans ce cas, la caractéristique dense ne sera que sur les barres d'outils, parce que les cordes et les têtes ont déjà d'autres caractéristiques.
testMat.addMaterialTrait("dense", null);

//Failty, devrait être une erreur, bien que seulement pendant l'initialisation, car alors les chaînes seront vérifiées.
testMat.addMaterialTrait("dance", null);

testMat.itemLocalizer = function(thisMaterial, itemName){return "Cool " + itemName;};
testMat.localizedName = "Wicked";
testMat.register();
```