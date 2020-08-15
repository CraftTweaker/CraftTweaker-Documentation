# Rozbijanie toporów

## Dostępność

Przed wykonaniem czegokolwiek, powinieneś sprawdzić, czy ścinanie osi jest włączone, czy nie:

```zenscript
import mods.cuisine.AxeChopping;

jeśli (AxeChopping.isEnabled()) {
    // do stuff
} else {
    print("Trapping Axe jest wyłączony, pominięto");
}
```

## Dodanie

```zenscript
importuj mods.cuisine.AxeChopping;

AxeChopping.add(IItemStack input, IItemStack output);

AxeChopping.add(<item:minecraft:dirt>, <item:minecraft:diamond>);

// W razie potrzeby możliwe jest również użycie słownika rudy.
AxeChopping.add(dane wejściowe IItemStack);

AxeChopping.add(<ore:cobblestone>, <item:minecraft:diamond>);
```

## Usuwanie

```zenscript
import mods.cuisine.AxeChopping;

// Usuń przez wejście.
AxeChopping.remove(IItemStack input);

AxeChopping.remove(<item:minecraft:log>);

// Usuń przez wyjście.
AxeChopping.removeByOutput(IItemStack);

AxeChopping.removeByOutput(<item:minecraft:plank>);

// Usuń przez identyfikator.
AxeChopping.remove(String id);

AxeChopping.remove("recipe_name");

// Usuń wszystko!
AxeChopping.removeAll();
```

## Misc.

```zenscript
import mods.cuisine.AxeChopping;

val defaultPlanksOutput as int = AxeChopping.getDefaultPlanksOutput();

val defaultStickOutput as int = AxeChopping.getDefaultStickOutput();
```