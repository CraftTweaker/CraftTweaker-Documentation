# TargetedEntity

Indicates which entity should be targeted inside a predicate.

 Refer to the documentation of the various entries for a more detailed description.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.TargetedEntity;
```


## Enum Constants

TargetedEntity is an enum. It has 4 enum constants. They are accessible using the code below.

```zenscript

// The actor that caused the loot table roll or otherwise acted.
// 
// Examples of an actor can be the creeper that exploded or the player that gained an advancement.
TargetedEntity.ACTOR

// The entity that caused the death of the actor.
// 
// This entity is the actual killer, instead of the entity that actually dealt the final blow to the actor. As an
// example, if a skeleton killed a creeper by shooting an arrow, the killer will be the skeleton.
TargetedEntity.KILLER

// The entity that directly caused the death of the actor.
// 
// The entity is the entity that dealt the final blow to the actor, rather than its actual killer. As an example,
// if a skeleton killed a creeper by shooting an arrow, the direct killer will be the arrow.
TargetedEntity.DIRECT_KILLER

// The player that caused the death of the actor, if applicable.
// 
// This entity is exactly the same as the killer, except it is only available if the final blow was dealt by a
// player.
TargetedEntity.PLAYER_KILLER
```
