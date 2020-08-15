# Bloqueo de daño ataca

## Característica:

Esta característica bloquea la habilidad del jugador de usar un arma/herramienta con un valor de daño de ataque igual o mayor que la cantidad establecida. Esto significa como en el ejemplo de abajo, cualquier arma con daño de ataque 0.75 o mayor sólo será utilizable al final.

For reference: 1 Damage = 0.5 Hearts You can see a quick reference guide to damage under [This Link](https://minecraft.gamepedia.com/Damage#Dealing_damage)

## Sintaxis:

    mods.compatskills.DamageLock.addDamageLock(doble daño, cadena... requirements);
    
    mods.compatskills.DamageLock.addDamageLock(0.75, "dim|1");