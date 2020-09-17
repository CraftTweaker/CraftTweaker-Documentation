### Clase

```zenscript
importar mods.roots.AnimalHarvest;
```

#### Métodos

```zenscript
void addEntity(
  IEntityDefinition entity // la entidad para generar gotas para
);
```

* * *

```zenscript
void removeEntity(
  entidad IEntityDefinition // la entidad para dejar de generar gotas para
);
```

* * *

```zenscript
void addFish(
  nombre de cadena, // el nombre del tipo de pez
  ItemStack fish, // el tipo de pescado como una pila de artículo
  de peso int // el peso del pez como un entero
);
```

* * *

```zenscript
vacíe removeFish(
  ItemStack fish // el tipo de pez a eliminar como pila de artículos
);
```

* * *

### Ejemplos

```zenscript
importar mods.roots.AnimalHarvest;

// Añade un enderman como objetivo para el ritual de la Cosecha de Animales.
// En general, sería mejor utilizar animales.
AnimalHarvest.addEntity(<entity:minecraft:enderman>);

// Evita que la entidad dé gotas durante el ritual
AnimalCosvest. emoveEntity(<entity:minecraft:cow>);

// Añade la crema de magma como un tipo de pescado con un peso de 20 (todos los pesos basados en 
// la pesca estándar. tabla de botes de hijos)
AnimalHarvest.addFish("magma_cream", <minecraft:magma_cream>, 20);

// Elimina el ritual de Pez Calabaza de la Cosecha de Animal
AnimalHarvest.removeFish(<minecraft:fish:3>);
```