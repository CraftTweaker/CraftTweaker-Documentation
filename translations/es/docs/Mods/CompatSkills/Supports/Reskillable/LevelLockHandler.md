# Soporte de bloqueo de nivel

## PSA:

Esta característica funciona cancelando el evento Level-Up en Reskillable. ¡Algunos mods que llaman al levelUp(); el método directamente saltará los bloqueos! Esto incluye mods como Scavenge: Reskillable y TogetherForever!

## Soporte de bloqueo de nivel

Level-Lock Support es una característica extraña que vino de una broma que Skysom hizo en un DM algún día. ¡Esta característica es enteramente para aquellos lo suficientemente sadistas como para implementarla! Esto compuerta la progresión al nivel establecido, no el "ir desde" de ese nivel!

CTHabilidad = [Manejador de brazos de habilidad](/Mods/CompatSkills/Supports/Reskillable/BracketHandlers/)

### Sintaxis:

    // Ejemplo en blanco:
    mods.compatskills.SkillLocks.addLevelLock(CTSkill Skill, int level, String... defaultRequirements);
    
    // Ejemplo de prueba:
    mods.compatskills.SkillLocks.addLevelLock(<skill:reskillable:agility>, 11, "reskillable:collecting", 3, "adv|minecraft:husbandry/plant_seed");