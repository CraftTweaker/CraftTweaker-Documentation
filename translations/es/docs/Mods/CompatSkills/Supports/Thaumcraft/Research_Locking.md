# Bloqueo de investigación

## Característica:

Esta característica le permite bloquear la adquisición de la Investigación detrás de un grupo de requisitos determinado. Esto significa, por ejemplo, que usted puede establecer la adquisición de "Investigación Golem" detrás del requisito de estar en una cierta dimensión (como se ve en el ejemplo de abajo). Esto significa que tienes que estar en esa dimensión para adquirir la investigación, sin embargo una vez que tienes la investigación la tienes. No "restablecer" o "desaprender" dejando la dimensión o ya no cumpliendo los requisitos en general!

## Sintaxis:

    mods.compatskills.Thaumcraft.addResearchLock(String researchKey, String... requirements);
    
    mods.compatskills.Thaumcraft.addResearchLock("GOLEMVISION", "dim|1");