# Bloquear bloqueo de nivel de cosecha

## Característica:

Este bloqueo lo hace así que el jugador no puede romper un bloque con el nivel de cosecha establecido a menos que se cumpla un conjunto de requisitos. Por ejemplo a continuación, puedes ver que los bloques con un nivel de cosecha de 3 sólo pueden romperse en el final. Este ejemplo no es realmente tan grande en la práctica, pero sí muestra lo que este tipo de cerradura es capaz de hacer.

## Sintaxis:

    mods.compatskills.HarvestLock.addBlockLevelLock(int level, String... requirements);
    
    mods.compatskills.HarvestLock.addBlockLevelLock(3, "dim|1");