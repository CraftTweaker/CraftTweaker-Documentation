# Losowy podmiot

Dodawanie i usuwanie bytów z kamienia filozofii filmu randomizera ProjectE używa [IEntityDefinition](/Vanilla/Entities/IEntityDefinition/).

Uwaga: Ten [IEntityDefinition](/Vanilla/Entities/IEntityDefinition/) musi być dla żywej jednostki.

## Dodawanie

### Dodny pokój

```zenscript
mods.projecte.EntityRandomizer.addPeaceful(IEntityDefinition entityDefinition);

// Umożliwia przekształcanie pokojowych stworzeń w zombies. 
mods.projecte.EntityRandomizer.addPeaceful(<entity:minecraft:zombie>);
```

### addMob

```zenscript
mods.projecte.EntityRandomizer.addMob(IEntityDefinition entityDefinition);

// Pozwala na przekształcenie wrogich mobów w świnie.
mods.projecte.EntityRandomizer.addMob(<entity:minecraft:pig>);
```

## Usuwanie

### usuń Pokojowy

```zenscript
mods.projecte.EntityRandomizer.removePeaceful(IEntityDefinition entityDefinition);

// Zatrzymuje pokojowe moby, które mogą być zamienione w świnie.
mods.projecte.EntityRandomizer.removePeaceful(<entity:minecraft:pig>);
```

### removeMob

```zenscript
mods.projecte.EntityRandomizer.removeMob(IEntityDefinition entityDefinition);

// zatrzymuje wrogie moby, które mogą być zamienione w zombies.
mods.projecte.EntityRandomizer.removeMob(<entity:minecraft:zombie>);
```

### jasny Peakefuls

```zenscript
// Usuwa wszystkie randomizowane pokojowe wpisy potworów, w tym wpisy zarejestrowane przez CraftTweaker przed tym połączeniem.
mods.projecte.EntityRandomizer.clearPeacefuls();
```

### clearMobs

```zenscript
// Usuwa wszystkie randomizowane wrogie wpisy potworów, w tym te zarejestrowane przez CraftTweaker przed tym połączeniem.
mods.projecte.EntityRandomizer.clearMobs();
```