# Aléatoire de l'entité

Ajouter et supprimer des entités du projectile aléatoire de l'entité philosophique du projet utilise un [IEntityDefinition](/Vanilla/Entities/IEntityDefinition/).

Remarque : Cette [IEntityDefinition](/Vanilla/Entities/IEntityDefinition/) doit être pour une entité vivante.

## Ajout en cours

### format@@0 addPeaceful

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

## Enlèvement

### retirer la paix

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

### effacez les Paix

```zenscript
// Supprime toutes les entrées aléatoires de créatures pacifiques, y compris celles enregistrées par CraftTweaker avant cet appel.
mods.projecte.EntityRandomizer.clearPeacefuls();
```

### clearMobs

```zenscript
// Supprime toutes les entrées aléatoires de mob hostiles, y compris celles enregistrées par CraftTweaker avant cet appel.
mods.projecte.EntityRandomizer.clearMobs();
```