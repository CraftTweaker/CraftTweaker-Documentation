
### Clase

```zenscript
importar mods.roots.InvmonCreatures;
```

#### Métodos

```zenscript
void addEntity(
  IEntityDefinition entity, // la entidad a invocar
  IIngredient[] ingredientes // una lista de ingredientes utilizados para la invocación
);
```


---


```zenscript
void removeEntity(
  entidad IEntityDefinition // la entidad a remover de invocar vía receta
);
```


---


```zenscript
evite removeLifeEssence(
  entidad IEntityDefinition // la entidad para eliminar la esencia de vida para
);
```


---


```zenscript
void addLifeEssence(
  entidad IEntityDefinition // la entidad para agregar esencia de vida para
);
```


---


```zenscript
void clearLifeEssence();
```


---


### Ejemplos

```zenscript
import mods.roots.InvmonCreatures;

// Limpia todas las Esencias de Vida generadas automáticamente por
// el mapa de Cosecha Animal
Invocaciones. learfeEssence();

// Añade una receta para invocar un pollo usando 3 objetos
Invocaciones. ddEntidad(<entity:minecraft:chicken>, [<minecraft:wheat_seeds>, <minecraft:wheat>, <ore:ingotIron>]);

// Elimina el enderman añadido por el ejemplo de la Cosecha de Animal
// de la lista de Esencia de Vida (presumiendo que no ha sido limpiado)
Invocaciones. emoveLifeEssence(<entity:minecraft:enderman>);

// Agrega manualmente una capacidad de soltar esencia de vida para un dragón ender
Invocaciones. ddLifeEssence(<entity:minecraft:ender_dragon>);

// Quita la receta predeterminada para las vacas
Invocaciones.removeEntity(<entity:minecraft:cow>);
```
