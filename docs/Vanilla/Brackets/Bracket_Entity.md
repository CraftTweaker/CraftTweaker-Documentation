# Entity Bracket Handler

The Entity Bracket Handler gives you access to the Entities (e.g. Mobs, tile ents etc.) in the game. It is only possible to get entities registered in the game, so adding or removing mods may cause issues if you reference the mod's mobs in an Entity Bracket Handler.

Entities are referenced in the Entity handler this way:

```
<entity:modID:entityName>

<entity:minecraft:sheep>
```

If the mob/entity is found, this will return an IEntityDefinition Object.
Please refer to the [respective Wiki entry](../Entities/IEntityDefinition) for further information on what you can do with these.

# Getting all Registered Entities

You can use the following command to output all registered entities to the CraftTweaker log
```
/ct entities
/crafttweaker entities
```