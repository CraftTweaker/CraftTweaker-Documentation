# Matière à tisser

## Paquet
```zenscript
Importer mods.terrafirmacraft.Biome;
```

## Ajouter

```zenscript
Loom.addRecipe(String registryName, IIngredient input, IItemStack sortie, int steps, String loomTexture);
```
- est le nombre d'étapes nécessaires pour compléter la recette. C'est le nombre de fois où le joueur doit cliquer sur le métier, chaque mouvement de la boucle fait avancer une étape. Au sein de la CEF, c'est le même que le nombre d'articles requis pour la recette, mais ce n'est pas nécessaire.
- loomTexture est un chemin (`RessourceLocation`) vers un fichier de texture, à utiliser pour afficher sur le métier à tisser dans le monde. Par exemple, "minecraft:textures/blocks/wool_colored_white.png" fait référence à la texture vanille pour la laine blanche). Si vous utilisez des textures personnalisées, vous avez besoin d'une forme de chargement de données/ressources (lire : un pack de ressources) pour pouvoir référencer votre texture correctement.

## Retirer

```zenscript
Loom.removeRecipe(IItemStack sortie);
Loom.removeRecipe(String registryName);
```

## Exemple
```zenscript
Loom.addRecipe("burlap_cloth", <tfc:crop/product/jute_disc>, <tfc:crop/product/burlap_cloth>, "tfc:textures/blocks/devices/loom/product/burlap.png");
```