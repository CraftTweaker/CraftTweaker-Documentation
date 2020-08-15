# Cortar hacha

## Disponibilidad

Antes de hacer nada, debes comprobar si la tala de hachas está habilitada o no:

```zenscript
import mods.cuisine.AxeChopping;

if (AxeChopping.isEnabled()) {
    // hacer cosas
} else {
    print("Axe Chopping is disabled, skipping");
}
```

## Adicional

```zenscript
import mods.cuisine.AxeChopping;

AxeChopping.add(IItemStack entrada, IItemStack salida);

AxeChopping.add(<item:minecraft:dirt>, <item:minecraft:diamond>);

// Si es necesario, también es posible utilizar el diccionario de minerales.
AxeChopping.add(entrada IOreEntry, salida IItemStack);

AxeChopping.add(<ore:cobblestone>, <item:minecraft:diamond>);
```

## Eliminar

```zenscript
import mods.cuisine.AxeChopping;

// Quitar por entrada.
AxeChopping.remove(IItemStack input);

AxeChopping.remove(<item:minecraft:log>);

// Eliminar por salida.
AxeChopping.removeByOutput(salida IIItemStack);

AxeChopping.removeByOutput(<item:minecraft:plank>);

// Elimina mediante identificador.
AxeChopping.remove(String id);

AxeChopping.remove("recipe_name");

// ¡Elimina todo!
AxeChopping.removeAll();
```

## Misc.

```zenscript
import mods.cuisine.AxeChopping;

val defaultPlanksOutput as int = AxeChopping.getDefaultPlanksOutput();

val defaultStickOutput as int = AxeChoppping.getDefaultStickOutput();
```