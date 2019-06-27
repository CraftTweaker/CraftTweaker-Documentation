# Entity Randomizer

Adding and removing entities from ProjectE's philosopher's stone entity randomizer projectile uses an [IEntityDefinition](/Vanilla/Entities/IEntityDefinition/).

Note: This [IEntityDefinition](/Vanilla/Entities/IEntityDefinition/) must be for a living entity.

## Adding

### addPeaceful

    mods.projecte.EntityRandomizer.addPeaceful(IEntityDefinition entityDefinition);
    
    #Allows turning peaceful creatures into zombies. 
    mods.projecte.EntityRandomizer.addPeaceful(<entity:minecraft:zombie>);
    

### addMob

    mods.projecte.EntityRandomizer.addMob(IEntityDefinition entityDefinition);
    
    #Allows turning hostile mobs into pigs.
    mods.projecte.EntityRandomizer.addMob(<entity:minecraft:pig>);
    

## Removing

### removePeaceful

    mods.projecte.EntityRandomizer.removePeaceful(IEntityDefinition entityDefinition);
    
    #Stops peaceful mobs being able to be turned into pigs.
    mods.projecte.EntityRandomizer.removePeaceful(<entity:minecraft:pig>);
    

### removeMob

    mods.projecte.EntityRandomizer.removeMob(IEntityDefinition entityDefinition);
    
    #Stops hostile mobs being able to be turned into zombies.
    mods.projecte.EntityRandomizer.removeMob(<entity:minecraft:zombie>);
    

### clearPeacefuls

    #Removes all randomized peaceful mob entries including ones registered by CraftTweaker before this call.
    mods.projecte.EntityRandomizer.clearPeacefuls();
    

### clearMobs

    #Removes all randomized hostile mob entries including ones registered by CraftTweaker before this call.
    mods.projecte.EntityRandomizer.clearMobs();