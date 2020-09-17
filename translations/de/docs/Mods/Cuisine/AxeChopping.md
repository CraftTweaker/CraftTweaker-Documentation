# Axt hacken

## Verfügbarkeit

Bevor du etwas tust, solltest du überprüfen, ob Achsschnitten aktiviert ist oder nicht:

```zenscript
import mods.cuisine.AxeChopping;

if (AxeChopping.isEnabled()) {
    // do stuff
} else {
    print("Axe Kopping ist deaktiviert, überspringt");
}
```

## Addition

```zenscript
import mods.cuisine.AxeChopping;

AxeChopping.add(IItemStack-Eingabe, IItemStack-Ausgabe);

AxeChopping.add(<item:minecraft:dirt>, <item:minecraft:diamond>);

// Bei Bedarf ist es auch möglich, Erzwörterbuch zu verwenden.
AxeChopping.add(IOreEntry Eingabe, IItemStack Ausgabe);

AxeChopping.add(<ore:cobblestone>, <item:minecraft:diamond>);
```

## Entfernen

```zenscript
import mods.cuisine.AxeChopping;

// Nach Eingabe entfernen.
AxeChopping.remove(IItemStack Eingabe);

AxeChopping.remove(<item:minecraft:log>);

// Von Ausgabe entfernen.
AxeChopping.removeByOutput(IItemStack output);

AxeChopping.removeByOutput(<item:minecraft:plank>);

// Vom Identifikator entfernen.
AxeChopping.remove(String id);

AxeChopping.remove("recipe_name");

// Alles entfernen!
AxeChopping.removeAll();
```

## Misc.

```zenscript
import mods.cuisine.AxeChopping;

val defaultPlanksOutput as int = AxeChopping.getDefaultPlanksOutput();

val defaultStickOutput as int = AxeChopping.getDefaultStickOutput();
```