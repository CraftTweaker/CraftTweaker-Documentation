# Grindstone

### Importation en cours

```zenscript
Importer mods.appliedenergistics2.Grinder;
```

### Ajout en cours

```zenscript
Grinder.addRecipe(sortie IItemStack, entrée IItemStack, int tours, @Optional IItemStack secondary1Output, @Optional float secondary1Chance, @Optional IItemStack secondy2Output, @Optional float secondary2Chance);

Broyeur. ddRecipe(<minecraft:sapling>, <minecraft:leaves>, 4, <minecraft:sapling:5>, 0.3);
```

### Enlèvement

```zenscript
Grinder.removeRecipe(IItemStack input);

Grinder.removeRecipe(<minecraft:quartz_ore>);
```