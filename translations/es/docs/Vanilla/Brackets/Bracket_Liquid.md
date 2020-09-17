# Manejo de brazalete líquido

El líquido Bracket Handler te da acceso a los líquidos del juego. Sólo es posible obtener líquidos registrados en el juego por lo que añadir o eliminar mods puede causar problemas si hace referencia a los líquidos del mod en un ladrillo de brazaletes líquido.

Los líquidos son referenciados en el Batallón de Bracket Liquid por así:

```zenscript
<liquid:liquidname> O <fluid:liquidname>

<liquid:lava> O <fluid:lava>
```

Si se encuentra el líquido, esto devolverá un objeto ILiquidStack. Por favor, consulte la [entrada respectiva del Wiki](/Vanilla/Liquids/ILiquidStack/) para obtener más información sobre lo que puede hacer con estos.

# Obteniendo todos los líquidos registrados

Puede usar el siguiente comando para mostrar todos los líquidos registrados al registro de CraftTweaker

    /ct liquids
    /crafttweaker liquids