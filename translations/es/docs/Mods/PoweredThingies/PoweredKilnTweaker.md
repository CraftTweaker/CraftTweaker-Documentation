# Cosas Energizadas :: Horno Elevado

### Importando

```zenscript
importar mods.poweredthingies.Tweaker.poweredKilnTweaker como pkt;
```

### Lista de llaves, eliminación de recetas por llave, limpieza

```zenscript
pkt().logKeys()
pkt().removeRecipe('minecraft:planks') // verifica <logKeys> la salida para claves válidas
pkt().clear()
```

### Añadiendo receta

##### Firma

```zenscript
addRecipe(input: IItemStack, output: IItemStack)
```

##### Ejemplo

```zenscript
pkt().addRecipe(<minecraft:bucket>, <minecraft:iron_ingot>);
```

### Notas

Todas estas acciones se almacenarán en caché y se ejecutarán después de que el registro por defecto de esta máquina haya terminado de registrar todas las recetas (incluyendo las de los json personalizados).