# Entidad aleatoria

Añadir y eliminar entidades de la entidad de piedra del proyectil aleatoriador de Proyectil de Proyectil de Proyectil utiliza una [IEntityDefinition](/Vanilla/Entities/IEntityDefinition/).

Nota: Esta [IEntityDefinition](/Vanilla/Entities/IEntityDefinition/) debe ser para una entidad viva.

## Agregando

### addPeaceful

```zenscript
mods.projecte.EntityRandomizer.addPeaceful(<entity:minecraft:zombie>); 
mods.projecte.EntityRandomizer.addPeaceful(IEntityDefinition entityDefinition);

// Allows turning peaceful creatures into zombies.
```

### addMob

```zenscript
mods.projecte.EntityRandomizer.addMob(<entity:minecraft:pig>);
mods.projecte.EntityRandomizer.addMob(IEntityDefinition entityDefinition);

// Allows turning hostile mobs into pigs.
```

## Eliminando

### eliminar pacífico

```zenscript
mods.projecte.EntityRandomizer.removePeaceful(<entity:minecraft:pig>);
mods.projecte.EntityRandomizer.removePeaceful(IEntityDefinition entityDefinition);

// Stops peaceful mobs being able to be turned into pigs.
```

### removeMob

```zenscript
mods.projecte.EntityRandomizer.removeMob(<entity:minecraft:zombie>);
mods.projecte.EntityRandomizer.removeMob(IEntityDefinition entityDefinition);

// Stops hostile mobs being able to be turned into zombies.
```

### paz clara

```zenscript
// Elimina todas las entradas pacíficas aleatorias, incluyendo las registradas por CraftTweaker antes de esta llamada.
mods.projecte.EntityRandomizer.clearPeacefuls();
```

### clearMobs

```zenscript
// Elimina todas las entradas hostiles aleatorias, incluyendo las registradas por CraftTweaker antes de esta llamada.
mods.projecte.EntityRandomizer.clearMobs();
```