# Habilidades de bloqueo / visibilidad

Este bloqueo te permite ocultar Habilidades hasta el punto en que un jugador cumple los requisitos para ver la habilidad. Esto tiene algunos casos de uso limitados, por ejemplo al agregar habilidades de "Clase" en paquetes personalizados donde usted no quiere que alguien que es un "Ingeniero" vea o sea capaz de obtener acceso a la página de habilidades de "Mago".

## Sintaxis:

    Ejemplo en blanco:
    mods.compatskills.VisibilityLock.addVisibilityLock(CTSkill Hill, String... Requisitos por defecto);
    
    Ejemplo de trabajo:
    mods.compatskills.VisibilityLock.addVisibilityLock(<skill:reskillable:attack>, "dim|1");