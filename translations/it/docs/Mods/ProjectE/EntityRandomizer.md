# Casualizzatore Entità

Aggiungere e rimuovere entità dal proiettile randomizzatore entità pietra del filosofo del Progetto utilizza un [IEntityDefinition](/Vanilla/Entities/IEntityDefinition/).

Nota: Questa [IEntityDefinition](/Vanilla/Entities/IEntityDefinition/) deve essere per un'entità vivente.

## Aggiunta

### addPeaceful

```zenscript
mods.projecte.EntityRandomizer.addPeaceful(IEntityDefinition entityDefinition);

// Permette di trasformare le creature pacifiche in zombie. 
mods.projecte.EntityRandomizer.addPeaceful(<entity:minecraft:zombie>);
```

### addMob

```zenscript
mods.projecte.EntityRandomizer.addMob(IEntityDefinition entityDefinition);

// Permette di trasformare mob ostili in maiali.
mods.projecte.EntityRandomizer.addMob(<entity:minecraft:pig>);
```

## Rimozione

### removePeaceful

```zenscript
mods.projecte.EntityRandomizer.removePeaceful(IEntityDefinition entityDefinition);

// Ferma le creature pacifiche possono essere trasformate in maiali.
mods.projecte.EntityRandomizer.removePeaceful(<entity:minecraft:pig>);
```

### removeMob

```zenscript
mods.projecte.EntityRandomizer.removeMob(IEntityDefinition entityDefinition);

// Ferma i mob ostili possono essere trasformati in zombie.
mods.projecte.EntityRandomizer.removeMob(<entity:minecraft:zombie>);
```

### clearPeacefuls

```zenscript
// Rimuove tutte le voci pacifiche casuali di mob comprese quelle registrate da CraftTweaker prima di questa chiamata.
mods.projecte.EntityRandomizer.clearPeacefuls();
```

### clearMobs

```zenscript
// Rimuove tutte le voci di mob ostili randomizzate, comprese quelle registrate da CraftTweaker prima di questa chiamata.
mods.projecte.EntityRandomizer.clearMobs();
```