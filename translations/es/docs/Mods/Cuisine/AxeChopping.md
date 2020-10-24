# Axe Chopping

## Availability

Before doing anything, you should check whether axe-chopping is enabled or not:

```zenscript
import mods.cuisine.AxeChopping;

if (AxeChopping.isEnabled()) {
    // do stuff
} else {
    print("Axe Chopping is disabled, skipping");
}
```

## Addition

```zenscript
import mods.cuisine.AxeChopping;

AxeChopping.add(IItemStack input, IItemStack output);

AxeChopping.add(<item:minecraft:dirt>, <item:minecraft:diamond>);

// If necessary, it is also possible to use ore dictionary.
AxeChopping.add(IOreEntry input, IItemStack output);

AxeChopping.add(<ore:cobblestone>, <item:minecraft:diamond>);
```

## Removal

```zenscript
import mods.cuisine.AxeChopping;

// Remove by input.
AxeChopping.remove(IItemStack input);

AxeChopping.remove(<item:minecraft:log>);

// Remove by output.
AxeChopping.removeByOutput(IItemStack output);

AxeChopping.removeByOutput(<item:minecraft:plank>);

// Remove by identifier.
AxeChopping.remove(String id);

AxeChopping.remove("recipe_name");

// Remove everything!
AxeChopping.removeAll();
```

## Misc.

```zenscript
import mods.cuisine.AxeChopping;

val defaultPlanksOutput as int = AxeChopping.getDefaultPlanksOutput();

val defaultStickOutput as int = AxeChopping.getDefaultStickOutput();
```