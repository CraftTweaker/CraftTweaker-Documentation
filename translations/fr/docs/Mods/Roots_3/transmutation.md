### Classe

```zenscript
Importer mods.roots.Transmutation;
```

#### Méthodes

```zenscript
void removeRecipe(
  string name // le nom de la recette en cours de suppression
);
```

* * *

```zenscript
void addBlockToBlockRecipe(
  string name, // le nom de la recette étant ajouté (doit être unique)
  état IBlockState1, // l'état initial du bloc tel que défini comme un blockstate
  IBlockState state2 // l'état que l'état initial doit être converti en
);
```

* * *

```zenscript
void addBlockToItemRecipe(
  string name, // le nom de la recette en cours d'ajout (doit être unique)
  état IBlockState // l'état initial recherché lors de la conversion (en tant qu'état de bloc)
  IItemStack stack // la pile d'éléments qui remplace l'état du bloc
);
```

* * *

### Exemples

```zenscript
import mods.roots.Transmutation;

// Supprime la recette par défaut de citrouille-sur-eau à melon
Transmutation.removeRecipe("pumpkin_melon");

// Ajoute une recette qui convertit la pierre en blocs d'os
Transmutation. ddBlockToBlockRecipe("end_stone_to_bone", <blockstate:minecraft:end_stone>, <blockstate:minecraft:bone_block:axis=y>);

// Ajoute une recette qui convertit l'herbe haute par défaut en boules de neige
Transmutation. ddBlockToItemRecipe("tallgrass_to_snowball", <blockstate:minecraft:tallgrass:type=tall_grass>, <minecraft:snowball>*3);
```

### Notes

**Note: Les fonctions d'état complexes ne sont actuellement pas accessibles via CraftTweaker (c'est-à-dire la vérification des environs).**

Il est possible de trouver les informations sur le bloc, ses variantes et ses états en utilisant la fonctionnalité de débogage F3 et en le ciblant. Sur le côté droit de l'écran, il affichera le nom du registre du bloc, puis tous les états au-dessous.

Par exemple, `os_block` a les éléments suivants :

    axe : y

Cela peut être converti en un blockstate en remplaçant le `:` par `=` comme ainsi : `axis=y`, ce qui signifie que la blockstate finale (pour un bloc osseux vers le haut) serait `<blockstate:minecraft:bone_block:axis=y>`.