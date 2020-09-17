# Grindstone

### Importando

```zenscript
importar mods.appliedenergistics2.Grinder;
```

### Agregando

```zenscript
Grinder.addRecipe(salida de ItemStack, entrada de ItemStack ItemStack, turnos de intención, @Pila de Items opcional secondary1Output, @Número opcional de decimales, @Pila opcional secundaria2Output, @Segundo floto opcional2Canción);

Mueve. ddReceta(<minecraft:sapling>, <minecraft:leaves>, 4, <minecraft:sapling:5>, 0.3);
```

### Eliminando

```zenscript
Grinder.removeRecipe(IItemStack input);

Grinder.removeRecipe(<minecraft:quartz_ore>);
```