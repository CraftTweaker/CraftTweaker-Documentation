# Extractor de fluido del árbol

### Importando

```zenscript
importar mods.industrialforegoing.Extractor;
```

### Agregando

```zenscript
Extractor.add(Salida IItemStack, ILiquidStack fluid);

Extractor.add(<minecraft:cobblestone>, <liquid:lava> * 3);
```

### Eliminando

```zenscript
Extractor.remove(IItemStack input);

Extractor.remove(<minecraft:cobblestone>);
```