# Grindstone

### Importieren

```zenscript
import mods.appliedenergistics2.Grinder;
```

### Hinzufügen

```zenscript
Grinder.addRecipe(IItemStack Output, IItemStack Input, int turns, @Optional IItemStack secondary1Output, @Optional float secondary1Chance, @Optional IItemStack secondary2Output, @Optional float secondary2Chance);

Grinder. ddRecipe(<minecraft:sapling>, <minecraft:leaves>, 4, <minecraft:sapling:5>, 0.3);
```

### Entfernen

```zenscript
Grinder.removeRecipe(IItemStack input);

Grinder.removeRecipe(<minecraft:quartz_ore>);
```