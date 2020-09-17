# Manejadores de brazos

ZenScript utiliza Brackets para referenciar objetos de juego como objetos, entidades y oredicto.

## Cómo usar Manejadores de Bracket

Los corchetes en ZenScript se definen usando los caracteres `<` y `>` , cualquier cosa dentro de estos caracteres se considera un Bracket.

Un ejemplo de un Bracket Handler sería el Item Bracket Handler, que te da acceso a los objetos dentro del juego.

## Ejemplos

Un ejemplo del [Manejador de Bracket](/Vanilla/Brackets/Bracket_Item/) sería:

```zenscript
<minecraft:apple>
```

Esto te dará acceso al elemento `Apple` [](/Vanilla/Items/IItemStack/).

Un ejemplo del [OreDictEntry Bracket Handler](/Vanilla/Brackets/Bracket_Ore/) sería:

```zenscript
<ore:ingotIron>
```

Esto te dará acceso al [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/) para `ingotIron`.