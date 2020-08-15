# Entitäts-Randomizer

Das Hinzufügen und Entfernen von Entitäten aus dem Steinobjekt von ProjectE verwendet ein Zufallsprojektil [IEntityDefinition](/Vanilla/Entities/IEntityDefinition/).

Hinweis: Diese [IEntityDefinition](/Vanilla/Entities/IEntityDefinition/) muss für eine lebende Entität sein.

## Hinzufügen

### friedlich hinzufügen

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

## Entfernen

### friedlich entfernen

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

### frei friedvoll

```zenscript
// Entfernt alle zufälligen friedlichen Mob-Einträge, einschließlich einer, die vor diesem Aufruf von CraftTweaker registriert wurden.
mods.projecte.EntityRandomizer.clearPeacefuls();
```

### clearMobs

```zenscript
// Entfernt alle zufälligen feindlichen Mob-Einträge einschließlich einer, die vor diesem Aufruf von CraftTweaker registriert wurden.
mods.projecte.EntityRandomizer.clearMobs();
```