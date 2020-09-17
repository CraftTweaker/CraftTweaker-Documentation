# Inscrit

### Importation en cours

```zenscript
Importer mods.appliedenergistics2.Inscriber;
```

### Ajout en cours

Lorsque le booléen `inscrit` est vrai, les entrées en haut et en bas ne sont pas consommées.

```zenscript
Inscription. ddRecipe(sortie IItemStack, entrée IItemStack, inscription booléenne, @Optional IItemStack topInput, @Optional IItemStack bottomInput);

//transforme les œufs en œufs de Wither Skele, ne consomme pas d'inscrire le crâne de wither
. ddRecipe(<minecraft:spawn_egg:5>, <minecraft:egg>, true, <minecraft:skull:1>);

//combine le pain, les fèves de coco et le sucre. toutes les entrées sont consommées
Inscriber.addRecipe(<minecraft:cookie>, <minecraft:minecraft:bread>, false, <minecraft:dye:3>, <minecraft:sugar>);
```

### Enlèvement

```zenscript
Inscriber.removeRecipe(IItemStack output);

//supprime la recette de silicium imprimée 
Inscriber.removeRecipe(<appliedenergistics2:material:20>); 
```