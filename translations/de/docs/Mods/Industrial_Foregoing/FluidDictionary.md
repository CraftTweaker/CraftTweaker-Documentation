# Fluid-Wörterbuch

### Importieren

```zenscript
importieren mods.industrialforegoing.FluidDictionary;
```

### Hinzufügen

Es benötigt den Fluidnamen als Eingabe, den Fluidnamen als Ausgabe und als Konversionsrate. Die Rate ist, wie viele MB aus dem Ursprung in die Ausgabe umgewandelt werden. (InputMB * Rate = OutputMB)

```zenscript
FluidDictionary.add(String Input, String Output, Doppelrate);

FluidDictionary.add("Essenz", "xpjuice", 1);
```

### Entfernen

Es benötigt den Fluidnamen als Eingabe, den Fluidnamen als Ausgabe.

```zenscript
FluidDictionary.remove(String Input, String Output);

FluidDictionary.remove("Essenz", "xpjuice");
```