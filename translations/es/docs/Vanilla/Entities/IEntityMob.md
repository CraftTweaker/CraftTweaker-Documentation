# IEntityMod

A Mod.

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema (como lanzar un [array](/AdvancedFunctions/Arrays_and_Loops/)), más vale estar seguro que lo siento y añadir la importación.  
`importar crafttweaker.entity.IEntityMob;`

## Extendiendo [ItityCreature](/Vanilla/Entities/IEntityCreature/)

IEntityMob extends [IEntityCreature](/Vanilla/Entities/IEntityCreature/). Eso significa que todas las funciones disponibles para los objetos [IEntityCreature](/Vanilla/Entities/IEntityCreature/) también están disponibles para IEntityMob.

## Métodos

### Métodos

#### Comprueba si el mob está impidiendo el sueño de un jugador

El método requiere un objeto [IPlayer](/Vanilla/Players/IPlayer/) .  
Devuelve un bool.

```zenscript
entMobObj.está evitando el reinicio del jugador (jugador IPlay);
```