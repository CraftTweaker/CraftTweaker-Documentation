# Manchador de brazaletes poción

The Potion Bracket Handler te da acceso a las Pociones en el juego. Sólo es posible obtener Pociones registradas en el juego, por lo que añadir o eliminar mods puede causar problemas si hace referencia a las pociones del mod en un Manejador de brazaletes de poción.

Las pociones son referenciadas en el Manejador de Bracket de Poción así:

```zenscript
<potion:modname:potionname>

<potion:minecraft:strength>
```

Si se encuentra la Poción, esto devolverá un objeto IPotion. Por favor, consulte la [entrada respectiva del Wiki](/Vanilla/Potions/IPotion/) para obtener más información sobre lo que puede hacer con estos.

# Obteniendo todas las pociones registradas

Puede usar el siguiente comando para mostrar todas las pociones registradas al registro de CraftTweaker

    Pociones /ct
    /crafttweaker