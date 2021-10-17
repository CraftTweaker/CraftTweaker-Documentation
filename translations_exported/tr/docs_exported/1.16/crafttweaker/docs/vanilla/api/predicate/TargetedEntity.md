# TargetedEntity

Indicates which entity should be targeted inside a predicate.

 Refer to the documentation of the various entries for a more detailed description.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.TargetedEntity;
```


## Extending Enum&lt;TargetedEntity&gt;

TargetedEntity extends Enum&lt;[TargetedEntity](/vanilla/api/predicate/TargetedEntity)&gt;. That means all methods available in Enum&lt;[TargetedEntity](/vanilla/api/predicate/TargetedEntity)&gt; are also available in TargetedEntity

## Static Properties

| Name          | Type                                                    | Has Getter | Has Setter | Description                                                                                                                                                                                                                                                                                                |
| ------------- | ------------------------------------------------------- | ---------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ACTOR         | [TargetedEntity](/vanilla/api/predicate/TargetedEntity) | true       | false      | The actor that caused the loot table roll or otherwise acted. <br />  <br />  Examples of an actor can be the creeper that exploded or the player that gained an advancement.                                                                                                                  |
| DIRECT_KILLER | [TargetedEntity](/vanilla/api/predicate/TargetedEntity) | true       | false      | The entity that directly caused the death of the actor. <br />  <br />  The entity is the entity that dealt the final blow to the actor, rather than its actual killer. As an example, <br />  if a skeleton killed a creeper by shooting an arrow, the direct killer will be the arrow. |
| KILLER        | [TargetedEntity](/vanilla/api/predicate/TargetedEntity) | true       | false      | The entity that caused the death of the actor. <br />  <br />  This entity is the actual killer, instead of the entity that actually dealt the final blow to the actor. As an <br />  example, if a skeleton killed a creeper by shooting an arrow, the killer will be the skeleton.     |
| PLAYER_KILLER | [TargetedEntity](/vanilla/api/predicate/TargetedEntity) | true       | false      | The player that caused the death of the actor, if applicable. <br />  <br />  This entity is exactly the same as the killer, except it is only available if the final blow was dealt by a <br />  player.                                                                                |

