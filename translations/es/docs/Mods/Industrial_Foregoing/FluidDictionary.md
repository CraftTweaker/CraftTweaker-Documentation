# Diccionario fluido

### Importando

```zenscript
importar mods.industrialforegoing.FluidDictionary;
```

### Agregando

Necesita el nombre del fluido como una entrada, el nombre del fluido como una salida y una tasa de conversión. La tasa es cuántos mb del origen se transformarán en la salida. (InputMB * tasa = OutputMB)

```zenscript
FluidDictionary.add(String input, String output, double rate);

FluidDictionary.add("esencia", "xpjuice", 1);
```

### Eliminando

Necesita el nombre del fluido como una entrada, el nombre del fluido como una salida.

```zenscript
FluidDictionary.remove(String input, String output);

FluidDictionary.remove("esencia", "xpjuice");
```