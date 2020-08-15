# Manejador de brazaletes de entidad

The Entity Bracket Handler gives you access to the Entities (e.g. Mobs, tile ents etc.) in the game. Sólo es posible obtener entidades registradas en el juego, por lo que añadir o eliminar mods puede causar problemas si hace referencia a los mobs del mod en un manejador de soporte de entidad.

Las entidades son referenciadas en el manejador de entidades de esta manera:

```zenscript
<entity:modID:entityName>

<entity:minecraft:sheep>
```

Si se encuentra el mob/entidad, esto devolverá un objeto IEntityDefinition . Por favor, consulte la [entrada respectiva del Wiki](/Vanilla/Entities/IEntityDefinition/) para obtener más información sobre lo que puede hacer con estos.

# Obteniendo todas las Entidades Registradas

Puede utilizar el siguiente comando para mostrar todas las entidades registradas al registro de CraftTweaker

    /ct entities
    /crafttweaker entities