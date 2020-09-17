# Taglio Ascia

## Disponibilità

Prima di fare qualsiasi cosa, dovresti verificare se il taglio dell'asse è abilitato o meno:

```zenscript
import mods.cuisine.AxeChopping;

if (AxeChopping.isEnabled()) {
    // do stuff
} else {
    print("Axe Chopping is disabled, skipping");
}
```

## Addizione

```zenscript
import mods.cuisine.AxeChopping;

AxeChopping.add(IItemStack input, IItemStack output);

AxeChopping.add(<item:minecraft:dirt>, <item:minecraft:diamond>);

// Se necessario, è anche possibile utilizzare il dizionario minerario.
AxeChopping.add(IOreEntry, IItemStack output);

AxeChopping.add(<ore:cobblestone>, <item:minecraft:diamond>);
```

## Rimozione

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

// Rimuovi tutto!
AxeChopping.removeAll();
```

## Misc.

```zenscript
import mods.cuisine.AxeChopping;

val defaultPlanksOutput come int = AxeChopping.getDefaultPlanksOutput();

val defaultStickOutput come int = AxeChopping.getDefaultStickOutput();
```