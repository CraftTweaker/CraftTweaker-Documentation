# Entidad Egeable

Una Entidad Egeable es una que crece con el tiempo, como una vaca.

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema (como lanzar un [array](/AdvancedFunctions/Arrays_and_Loops/)), más vale estar seguro que lo siento y añadir la importación.  
`importar crafttweaker.entity.IEntityAgeable;`

## Extendiendo [ItityCreature](/Vanilla/Entities/IEntityCreature/)

IEntityAgeable extends [IEntityCreature](/Vanilla/Entities/IEntityCreature/). Eso significa que todas las funciones disponibles para [Itidades](/Vanilla/Entities/IEntityCreature/) también están disponibles para IEntityAgeable.

## Métodos

### ZenGetters/Setters

| ZenGetter           | Ajuste              | Tipo  |
| ------------------- | ------------------- | ----- |
| edad de crecimiento | edad de crecimiento | int   |
|                     | escala de edad      | pluma |

### Métodos

#### añadir edad

Los métodos esperan un int y el segundo método un bool opcional.  
Ambos métodos no retornan nada.  
Normalmente, el segundo método hace lo mismo que el primero con falso como argumento forzado, que puede diferir en las implementaciones de mods, sin embargo.

```zenscript
entAgObj.ageUp(int seconds, @Optional boolean forceded);
entAgObj.addunque th(int seconds);
```