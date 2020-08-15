# Compactor

## Paquete

`mods.thermalexpansion.Compactor`

El compactor soporta 4 tipos de modificadores:

    Moneda
    Presiona
    equipamiento
    
    

## Moneda

El modificador de Moneda cambia las recetas registradas en el mapa de recetas de `COIN` en expansión térmica.

Tenga en cuenta que estas recetas requieren el aumento de prensa numismático.

### Adicional

```zenscript
mods.thermalexpansion.Compactor.addMintRecipe(salida IItemStack, entrada ItemStack, energía de int);

mods.thermalexpansion.Compactor.addMintRecipe(<minecraft:sand>, <minecraft:stick>, 1500);
```

### Eliminar

```zenscript
mods.thermalexpansion.Compactor.removeMintRecipe(entrada IItemStack);

mods.thermalexpansion.Compactor.removeMintRecipe(<thermalfoundation:material:167>);
```

## Presione

El modificador de Prensa cambia las recetas no registradas en el `PLATE`, `COIN`, o `mapas de recetas` EQUIPO en expansión térmica.

Estas recetas no requieren un aumento específico.

### Adicional

```zenscript
mods.thermalexpansion.Compactor.addPressRecipe(salida IItemStack, entrada ItemStack, energía de int);

mods.thermalexpansion.Compactor.addPressRecipe(<minecraft:sand>, <minecraft:apple>, 1500);
```

### Eliminar

```zenscript
mods.thermalexpansion.Compactor.removePressRecipe(entrada IItemStack);

mods.thermalexpansion.Compactor.removePressRecipe(<thermalfoundation:material:167>);
```

## Almacenamiento

El modificador de almacenamiento cambia las recetas registradas en el mapa de la receta `PLATE` en la expansión térmica.

Estas recetas no requieren un aumento específico, y al parecer se utilizan sólo para las platas.

### Adicional

```zenscript
mods.thermalexpansion.Compactor.addStorageRecipe(salida IItemStack, entrada ItemStack, energía de int);

mods.thermalexpansion.Compactor.addStorageRecipe(<minecraft:sand>, <minecraft:arrow>, 1500);
```

### Eliminar

```zenscript
mods.thermalexpansion.Compactor.removeStorageRecipe(IItemStack input);

mods.thermalexpansion.Compactor.removeStorageRecipe(<thermalfoundation:material:167>);
```

## Equipo

El modificador de equipo cambia las recetas registradas en el mapa de recetas de `EQUIPO` en la expansión térmica.

Tenga en cuenta que estas recetas requieren el Gearworking Die Augment.

### Adicional

```zenscript
mods.thermalexpansion.Compactor.addGearRecipe(salida IItemStack, entrada ItemStack, energía de int);

mods.thermalexpansion.Compactor.addGearRecipe(<minecraft:sand>, <minecraft:arrow>, 1500);
```

### Eliminar

```zenscript
mods.thermalexpansion.Compactor.removeGearRecipe(IItemStack input);

mods.thermalexpansion.Compactor.removeGearRecipe(<thermalfoundation:material:167>);
```