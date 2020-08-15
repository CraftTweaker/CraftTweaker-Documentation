# Manipulador de bloque

El BlockBracket Handler te da acceso a los bloques del juego. Sólo es posible obtener bloques registrados en el juego por lo que añadir o quitar mods puede causar problemas si hace referencia a los bloques del mod en un Manejador de Bracket de Bloques.

Los bloques son referenciados en el manejador de bloques de esta manera:

```zenscript
<block:modID:blockName>

<block:minecraft:dirt>
```

Si se encuentra el bloque, esto devolverá un objeto [ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) .  
Por favor, consulte la [entrada respectiva del Wiki](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) para obtener más información sobre lo que puede hacer con estos.