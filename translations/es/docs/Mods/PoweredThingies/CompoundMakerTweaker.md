# Cosas Energizadas :: Maker Compuesto

### Importando

```zenscript
importar mods.poweredthingies.Tweaker.compoundTweaker como ct;
```

### Lista de llaves, eliminación de recetas por llave, limpieza

```zenscript
ct().logKeys()
ct().removeRecipe('minecraft:stone') // verifica <logKeys> la salida para las claves válidas
ct().clear()
```

### Añadiendo receta

##### Firma

```zenscript
addRecipe(output: IItemStack, left: ILiquidStack?, top: Array<IItemStack>?, right: ILiquidStack?, bottom: Array<IItemStack>?)
```

##### Ejemplo

```zenscript
ct().addRecipe(<minecraft:obsidian>, <liquid:lava> * 250, [<minecraft:cobblestone>, <minecraft:cobblestone>], null, [<minecraft:cobblestone>, <minecraft:cobblestone>]);
```

### Notas

Todas estas acciones se almacenarán en caché y se ejecutarán después de que el registro por defecto de esta máquina haya terminado de registrar todas las recetas (incluyendo las de los json personalizados).