# MCXpChangeEvent

This event is fired when the player's xp count is changed. If the amount is
 positive the xp is being added. If the xp is negative, the xp is being
 removed. This event takes place before the xp has changed, allowing you to
 change the amount, or negate the change entirely.

The event is cancelable.

If the event is canceled, the xp will not change

The event does not have a result.



## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.player.xp.MCXpChangeEvent;
```


## Methods

:::group{name=getXp}

Gets the amount of xp that the player's xp counter is being changed by.

Return Type: int

```zenscript
// MCXpChangeEvent.getXp() as int

event.getXp();
```

:::

:::group{name=setXp}

Sets the amount of xp to change the player's xp counter by.

Return Type: void

```zenscript
// MCXpChangeEvent.setXp(amount as int) as void

event.setXp(15);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| amount | int | The amount of xp that the player's xp counter should be <br />         changed by. |


:::


## Properties

| Name | Type | Has Getter | Has Setter | Description |
|------|------|------------|------------|-------------|
| xp | int | true | true | Gets the amount of xp that the player's xp counter is being changed by. |

