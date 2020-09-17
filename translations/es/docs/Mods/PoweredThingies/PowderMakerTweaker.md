# Cosas Energizadas :: Powder Maker

### Importando

```zenscript
importar mods.poweredthingies.Tweaker.powerderMakerTweaker como pmt;
```

### Lista de llaves, eliminación de recetas por llave, limpieza

```zenscript
pmt().logKeys()
pmt().removeRecipe('minecraft:gravel') // comprueba <logKeys> salida para claves válidas
pmt().clear()
```

### Añadiendo receta

##### Firma

```zenscript
addRecipe(input: IItemStack, outputs: Array<WeightedItemStack>)
```

##### Ejemplo

```zenscript
pmt().addRecipe(<minecraft:bucket>, [<minecraft:iron_ingot> % 100, <minecraft:iron_ingot> % 12, <minecraft:iron_ingot> % 12]);
```

### Notas

Todas estas acciones se almacenarán en caché y se ejecutarán después de que el registro por defecto de esta máquina haya terminado de registrar todas las recetas (incluyendo las de los json personalizados).