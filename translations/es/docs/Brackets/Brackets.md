# Paréntesis de ZS

Zenscript usa paréntesis para referenciar objetos del juego como por ejemplo Items, Entidades y Oredicts.

## Como usar los Paréntesis de ZS

Los paréntesis se definen usando `<` y `>`, cualquier cosa que este dentro de uno de estos se considerará una unidad que ZS leerá.

Un ejemplo de un paréntesis de ZenScript sería el de Items, que te da acceso a los objetos dentro del juego. 

## Ejemplos 

Un ejemplo del [Paréntesis de Items ](/Vanilla/Brackets/Bracket_Item/) sería

```zenscript
<minecraft:apple>
```

Esto te dará acceso al item de la manzana.

Un ejemplo de una entrada de [OreDict](/Vanilla/Brackets/Bracket_Ore/) sería:

```zenscript
<ore:ingotIron>
```

Esto te da acceso a la Entrada de OreDictionary para `ingotIron`. Es decir todos los items dentro de esa entrada serán accesibles mediante ZS.