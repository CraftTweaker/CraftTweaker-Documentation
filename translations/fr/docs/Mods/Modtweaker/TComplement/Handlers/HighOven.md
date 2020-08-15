# Haut four

Le pack HighOven permet d'ajouter/retirer des carburants, des recettes de chaleur et des recettes de mélange au haut four.

## Importation du paquet

Importer le paquet en utilisant

```zenscript
Importer mods.tcomplement.highoven.HighOven;
```

## Carburants

Vous pouvez ajouter et retirer les carburants acceptés par le four élevé.

### Suppression des carburants

```zenscript
// HighOven.removeFuel(IIngredient Fuel);
HighOven.removeFuel(<minecraft:coal:1>);
```

### Ajout de carburants

```zenscript
// HighOven.addFuel(IIngredient fuel , int time, int rate);
HighOven.addFuel(<minecraft:hay_block>, 3600, 5);
```

+ `combustible` est le carburant à ajouter (supporte les transformateurs, les NBT et les conteneurs de fluide)
+ `temps` est la durée du combustible en secondes
+ `le taux` est l'augmentation de la température du four élevé lorsque ce carburant est utilisé, en degrés par seconde

## Substitutions de fonte

Vous pouvez ajouter et supprimer des substitutions de fusion pour le four haut. La fonte remplace le comportement de fusion par défaut dans le Haut four. Les objets se comportent normalement de la même manière que dans la fonderie, les surcharges peuvent redéfinir la sortie du liquide et la température de fonte (seulement pour le four haut).

### Suppression des remplacements

```zenscript
// HighOven.removeMeltingOverride(ILiquidStack output, @Optional IItemStack input)
HighOven.removeMeltingOverride(<liquid:iron>);
```

### Ajout de dérogations

C'est plus intéressant. Les substitutions spécifient un nouveau comportement pour les éléments du four haut

```zenscript
// HighOven.addMeltingOverride(ILiquidStack sortie, IIngredient input, @Optional int temp)
HighOven.addMeltingOverride(<liquid:steel> * 144, <ore:ingotIron>, 2567);
```

+ `sortie` le liquide et la quantité à produire
+ `saisissez` l'ingrédient à fondre. Supporte les transformateurs, les oredicts, etc.
+ `temp` (facultatif) la température minimale de l'élément pour commencer à fondre dans le Haut four, en Kelvin. Si indéfini, laisser le calcul au four haut

## Recettes de chaleur

Les recettes de chaleur transforment un liquide en un autre dans le réservoir de haut four, à condition que la température du haut four soit suffisamment élevée.

### Suppression des recettes de chaleur

```zenscript
// HighOven.removeHeatRecipe(ILiquidStack sortie, @Optional ILiquidStack input);
HighOven.removeHeatRecipe(<liquid:steam>);
```

+ La sortie `` est la sortie pour laquelle les recettes doivent être désactivées
+ `entrée` est optionnellement les entrées pour filtrer les recettes. Si non spécifié (ou `null`), toutes les recettes produisant la sortie fournie seront désactivées. Sinon, seule la recette avec l'entrée donnée est désactivée.

*NOTE*: this method does **not** disable heat recipes added by ModTweaker using the next method.

### Ajout de recettes de chaleur

```zenscript
// HighOven.addHeatRecipe(ILiquidStack output, ILiquidStack input, int temp);
HighOven.addHeatRecipe(<liquid:iron> * 144, <liquid:lava> * 1000, 1450);
```

+ `produisez` le liquide à l'épicéa, et dans quelle grandeur
+ `saisissez` le liquide à consommer, et dans quelle grandeur, pour produire la grandeur de sortie
+ `temp` la température minimale du four élevé, en Kelvin.

*Note*: la vitesse réelle des recettes de chaleur est mesurée à l'excès de température

## Mélanger les recettes

Les recettes de mélange permettent de faire une sorte d'alchimie ou d'alliage. Lorsqu'une pile fond dans le haut four, si elle produit le liquide droit *et* les oxydants appropriés, les réducteurs et les purificateurs sont dans leurs emplacements dédiés, puis un autre fluide est produit.

Puisque ces recettes sont compliquées, ajouter ou modifier des recettes existantes utilise une classe zen spéciale.

### Suppression des recettes de mixage

C'est la partie facile pour les recettes de mélange

```zenscript
// HighOven.removeMixRecipe(ILiquidStack output, @Optional ILiquidStack input);
HighOven.removeMixRecipe(<liquid:steel>); // désactive toute recette de mélange produisant de l'acier.
```

Les arguments sont les mêmes que `removeHeatRecipe()` et la correspondance fonctionne de la même manière. Similarly to `removeHeatRecipe()`, this method will not remove recipes added by ModTweaker.

### Ajout de recettes de mixage

Pour ajouter une recette de mélange, vous devez utiliser un `MixRecipeBuilder`. Vous pouvez en obtenir un en utilisant

```zenscript
import mods.tcomplements.highoven.MixRecipeBuilder;

// HighOven.newMixRecipe(ILiquidStack, ILiquidStack input, int temp);
var builder = HighOven.newMixRecipe(<liquid:steel> * 72, <liquid:iron> * 144, 1350);
```

+ `la sortie` est le fluide et la grandeur à produire
+ `entrée` est le fluide et la grandeur à consommer
+ `temp` est la température minimale du four haut pour que la recette fonctionne, en Kelvin

Une fois que vous avez un `MixRecipeBuilder`, vous devez y ajouter des oxydateurs, des réducteurs et des purificateurs, puis l'enregistrer.

```zenscript
builder.addOxidizer(<minecraft:redstone>, 95);
builder.addReducer(<minecraft:glowstone>, 5);
builder.addPurifier(<ore:dustCoal>, 50);
builder.addPurifier(<minecraft:nether_star>, 0 );
builder.register();
```

Pour une documentation détaillée de ce que vous pouvez faire avec un `MixRecipeBuilder`, consultez sa documentation.

NOTE* : Une fois que vous avez utilisé un `MixRecipeBuilder`, vous pouvez continuer à le modifier et à le réutiliser. Il permet d'ajouter facilement des variantes de recettes.

**AVERTISSEMENT**: Si aucun élément ne produit le fluide d'entrée lorsqu'il fond dans la fonderie, alors la recette ne sera pas visible dans JEI.

### Réglage de la recette de mix

Pour changer les recettes de mix existantes (**y compris** celles ajoutées par ModTweaker), vous pouvez utiliser un `MixRecipeManager`:

```zenscript
import mods.tcomplement.highoven.MixRecipeManager ;

// HighOven.manageMixRecipe(ILiquidStack, ILiquidStack input);
var manager = HighOven.manageMixRecipe(<liquid:steel>);
```

Comme d'habitude, ne pas spécifier l'entrée (ou fournir `null`) entraîne un comportement de caractères génériques où toutes les entrées seront acceptées.

Une fois que vous avez un `MixRecipeManager` représentant un ensemble particulier de recette de mélange, vous pouvez empêcher certains oxydateurs/réducteurs/purificateurs d'être ajoutés à ces recettes, *ou* essayez d'ajouter de nouveaux additifs. Les suppressions ont la priorité sur les ajouts.

```zenscript
manager.removeOxidizer(<minecraft:redstone>);
manager.addPurifier(<minecraft:dirt>, 25);
```

Le comportement peut être un peu surprant parfois. Lorsque vous désactivez un additif, tout ajout additif qui permettrait ce que vous désactivez sera annulé. Par exemple, si vous ajoutez un paquet d'éléments en utilisant un seul `OreDictEntry`, puis essayez de supprimer un `IItemStack spécifique`, cela empêchera l'ajout de l'entrée.

Cela est dû au fait que iternellement, `OreDictEntry` sont ajoutés tels quels et ne sont pas convertis en éléments individuels. La seule façon de désactiver la `ItemStack` que vous voulez interdire est d'empêcher toute entrée d'être enregistrée, sinon l'entrée autoriserait l'objet.

Si vous voulez vraiment ajouter une entrée de dictée à l'exception de certains éléments, vous devrez le faire manuellement en itérant sur le contenu `OreDictEntry` puis en supprimant les éléments spécifiques (ou en ne les ajoutant pas en premier lieu).