### Classe

```zenscript
Importer mods.roots.RunicShears ;
```

#### Méthodes

```zenscript
void addRecipe(
  string name, // le nom de la recette en cours de création
  IItemStack outputDrop, // la sortie de l'élément obtenue en effectuant le cisaillement
  IItemStack replacementBlock, // le bloc (en tant qu'itemstack) qui remplace le bloc avec lequel on interagit lors du fractionnement
  IItemStack inputBlock, // le bloc qui doit être cisé
  IItemStack jeiDisplayItem // l'élément qui devrait être affiché dans JEI pour cette recette
);
```

* * *

```zenscript
void addEntityRecipe(
  string name, // le nom de la recette pour le fractionnement
  IItemStack outputDrop, // l'élément qui est déposé lors du cisaillement de l'entité spécifiée
  IEntityDefinition, // l'entité qui doit être taillée pour obtenir le temps de recharge d'indice
  drop // le nombre de ticks (secondes multipliées par 20) il faut attendre que l'entité puisse être recadrée
);
```

* * *

```zenscript
void removeRecipe(
  IItemStack output // la sortie de itemstack que vous souhaitez supprimer
);
```

* * *

### Exemples

```zenscript
import mods.roots.RunicShears;

// Creates a recipe that obtains nether wart from red nether bricks
// and then converts the bricks into normal nether bricks
RunicShears.addRecipe("nether_wart_block", <minecraft:nether_wart>*2, <minecraft:nether_brick>, <minecraft:red_nether_brick>, <minecraft:red_nether_brick>);

// Creates a recipe that obtains eggs from chickens with a 2 minute cooldown
RunicShears.addEntityRecipe("egg_from_chicken", <minecraft:egg>*2, <entity:minecraft:chicken>, 120*20);

// Removes all recipes (both entity & block) that give fey leather
RunicShears.removeRecipe(<roots:fey_leather>);
```

### Notes

Notez que la fonction `removeRecipe` tentera de supprimer toute recette (cisaillement runique de blocs et d'entités) qui correspond à la sortie souhaitée.