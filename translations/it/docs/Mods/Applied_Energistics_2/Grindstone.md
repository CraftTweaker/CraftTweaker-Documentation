# Grindstone

### Importazione

```zenscript
import mods.Appledenergistics2.Grinder;
```

### Aggiunta

```zenscript
Grinder.addRecipe(IItemStack output, IItemStack input, int turns, @Optional IItemStack secondary1Output, @Optional float secondary1Chance, @Optional IItemStack secondary2Output, @Optional float secondary2Chance);

Grinder. ddRecipe(<minecraft:sapling>, <minecraft:leaves>, 4, <minecraft:sapling:5>, 0.3);
```

### Rimozione

```zenscript
Grinder.removeRecipe(IItemStack input);

Grinder.removeRecipe(<minecraft:quartz_ore>);
```