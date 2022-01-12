# LevelChangeEvent

This event is fired when the player's level count is changed. If the amount is positive the levels are being added. If they are negative, levels are being removed. This event takes place before the levels are changed. This allows you to change the amount of levels, or cancel the change entirely.

The event is cancelable.

If the event is canceled, the xp level will not change

The event does not have a result.



## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.player.xp.LevelChangeEvent;
```


## Extending PlayerXpEvent

LevelChangeEvent extends [PlayerXpEvent](/forge/api/event/entity/player/xp/PlayerXpEvent). That means all methods available in [PlayerXpEvent](/forge/api/event/entity/player/xp/PlayerXpEvent) are also available in LevelChangeEvent

## Methods

:::group{name=getLevels}

Gets the amount of levels that the player's level is being changed by.

Returns: The amount of levels that the player's level is being changed by.  
Return Type: int

```zenscript
// LevelChangeEvent.getLevels() as int

event.getLevels();
```

:::

:::group{name=setLevels}

Sets the amount of levels to change the player's level by.

Return Type: void

```zenscript
// LevelChangeEvent.setLevels(levels as int) as void

event.setLevels(5);
```

| Parameter | Type | Description                                                                                          |
| --------- | ---- | ---------------------------------------------------------------------------------------------------- |
| levels    | int  | The amount of levels that should be added to the player's <br />                level counter. |


:::


## Properties

| 名称     | Type | Has Getter | Has Setter | Description                                                            |
| ------ | ---- | ---------- | ---------- | ---------------------------------------------------------------------- |
| levels | int  | true       | true       | Gets the amount of levels that the player's level is being changed by. |

