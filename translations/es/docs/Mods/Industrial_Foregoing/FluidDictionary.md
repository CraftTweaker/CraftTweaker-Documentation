# Fluid Dictionary

### Importing

```zenscript
import mods.industrialforegoing.FluidDictionary;
```

### Adding

It needs the Fluid Name as an input, the Fluid Name as an output and a conversion rate. The rate is how many mb from the origin will be transformed into the output. (InputMB * rate = OutputMB)

```zenscript
FluidDictionary.add(String input, String output, double rate);

FluidDictionary.add("essence", "xpjuice", 1);
```

### Removing

It needs the Fluid Name as an input, the Fluid Name as an output.

```zenscript
FluidDictionary.remove(String input, String output);

FluidDictionary.remove("essence", "xpjuice");
```