# Horno

CraftTweaker te permite `añadir recetas` y `quitar` hornos y cambiar el valor de combustible de los objetos.

## Recetas

### Eliminar

Hay dos maneras de eliminar recetas de horno, siendo:

```zenscript
furnace.remove(salida IIngredient)
```

Y

```zenscript
furnace.remove(salida IIngredient, entrada IIngredient);
```

La primera sintaxis es más flexible con las recetas que se eliminan y eliminará todas las recetas de horno que tienen salida `` .  
La segunda sintaxis es más estricta con las recetas que se eliminan y eliminará todas las recetas de horno que generan la `salida` dada y tiene una entrada de `entrada`.

También hay una tercera forma de eliminar las recetas de horno, aunque ésta eliminará TODAS las recetas de horno registradas en el juego.

```zenscript
furnace.removeAll();
```

### Adicional

Hay 2 comandos para añadir recetas de horno:

```zenscript
furnace.addRecipe(Salida IItemStack, entrada IIngredient);
```

Y

```zenscript
furnace.addRecipe(Salida IItemStack, entrada IIngredient, doble xp);
```

La primera sintaxis añadirá una receta de horno que dará 0 xp en fundición.

La segunda sintaxis añadirá una receta de horno que dará `xp` xp en fundición.

## Combustible

### Fijar

El comando para establecer valores de combustible es:

```zenscript
furnace.setFuel(Entrada IIngredient, int burnTime);
```

Esto establecerá el valor de grabación de `entrada` a `burnTime` en ticks. Minecraft de carbón quema para 1600 ticks, 80 segundos, 8 elementos. 1 objeto en un horno de minecraft tarda 200 ticks en completarse.

Establecer `burnTime` a `0` evitará que la `entrada` sea un elemento de combustible.

### Obtener

El comando para recuperar el valor de combustible de un elemento es:

```zenscript
furnace.getFuel(IItemStack item); 
```

Esto devolverá el valor de la grabación como un entero

## Ejemplos

### Eliminar

Esto eliminará todas las recetas de horno que tengan salida `<minecraft:glass>`.

```zenscript
furnace.remove(<minecraft:glass>);
```

Esto eliminará todas las recetas de horno `<minecraft:quartz>` que utilizan `<minecraft:quartz_ore>` como entrada.

```zenscript
furnace.remove(<minecraft:quartz>, <minecraft:quartz_ore>);
```

### Adicional

Esto añadirá una receta de horno que producirá `<minecraft:golden_apple>` cuando se funde `<minecraft:apple>`.

```zenscript
furnace.addRecipe(<minecraft:golden_apple>, <minecraft:apple>);
```

Esto añadirá una receta de horno que producirá `<minecraft:speckled_melon>` cuando un `<minecraft:melon>` esté fundido y le dará al jugador 1500 puntos de xp.

```zenscript
furnace.addRecipe(<minecraft:speckled_melon>, <minecraft:melon>, 1500);
```

### Combustible

Esto establecerá el valor de combustible de `<minecraft:rotten_flesh>` a `100`.

```zenscript
furnace.setFuel(<minecraft:rotten_flesh>, 100);
```

## Otra funcionalidad

### Obteniendo todas las recetas de horno registradas

```zenscript
horno.all;
```

Devuelve una [`Lista<IFurnaceRecipe>`](/Vanilla/Recipes/Furnace/IFurnaceRecipe/).