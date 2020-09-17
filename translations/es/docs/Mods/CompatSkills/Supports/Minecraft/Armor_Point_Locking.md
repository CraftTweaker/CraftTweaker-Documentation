# Bloqueo de valor de armadura

## Característica:

Este tipo de bloqueo, bloquea la habilidad de usar armadura que proporciona una cierta cantidad de puntos de armadura detrás de un conjunto de requisitos. Esto significa que si una armadura proporciona 0. 5 puntos de armadura, como en el ejemplo de abajo, puede bloquear detrás sólo siendo utilizable en el End (Aka Dim 1)!

## Sintaxis:

    mods.compatskills.ArmorLock.addArmorLock(doble armadura, String... requirements);
    
    mods.compatskills.ArmorLock.addArmorLock(0.75, "dim|1");