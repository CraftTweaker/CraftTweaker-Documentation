#Grindstone

### Importing

```
import mods.appliedenergistics2.Grinder;
```

### Adding

```
Grinder.addRecipe(ItemStack output, ItemStack input, int turns, @Optional ItemStack secondary1Output, @Optional float secondary1Chance, @Optional ItemStack secondary2Output, @Optional float secondary2Chance);

Grinder.addRecipe(<minecraft:sapling>, <minecraft:leaves>, 4, <minecraft:sapling:5>, 0.3);
```

### Removing

```
Grinder.removeRecipe(ItemStack input);

Grinder.removeRecipe(<minecraft:quartz_ore>);
```