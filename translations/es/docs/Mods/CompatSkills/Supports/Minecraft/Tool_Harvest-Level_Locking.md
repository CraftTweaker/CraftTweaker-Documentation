# Bloqueo de Cosecha de Herramientas

## Característica:

Este bloqueo añade la capacidad para que los autores del paquete bloqueen Herramientas en general o herramientas específicas "tipos" detrás de su nivel de cosecha. Esto significa que puedes bloquear todos los piquetes con un nivel de cosecha de "3" detrás de un conjunto de requisitos. O en general todas las herramientas con un nivel de cosecha de 3 detrás de un conjunto de requisitos!

## Sintaxis:

    mods.compatskills.HarvestLock.addToolLevelLock(int level, String... requirements);
    mods.compatskills.HarvestLock.addToolLevelLock(String type, int level, String... requirements);
    
    mods.compatskills.HarvestLock.addToolLevelLock(3, "dim|1");
    mods.compatskills.HarvestLock.addToolLevelLock("pickaxe", 3, "dim|1");