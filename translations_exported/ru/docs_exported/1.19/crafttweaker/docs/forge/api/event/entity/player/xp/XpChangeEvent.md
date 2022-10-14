# XpChangeEvent

This event is fired when the player's xp count is changed. If the amount is positive the xp is being added. If the xp is negative, the xp is being removed. This event takes place before the xp has changed, allowing you to change the amount, or negate the change entirely.

The event is cancelable.

If the event is canceled, the xp will not change

The event does not have a result.



## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.player.xp.XpChangeEvent;
```


## Extending PlayerXpEvent

XpChangeEvent extends [PlayerXpEvent](/forge/api/event/entity/player/xp/PlayerXpEvent). That means all methods available in [PlayerXpEvent](/forge/api/event/entity/player/xp/PlayerXpEvent) are also available in XpChangeEvent

## Методы

:::group{name=getXp}

Gets the amount of xp that the player's xp counter is being changed by.

Returns: The amount of xp that the player's xp counter is being changed by.  
Return Type: int

```zenscript
// XpChangeEvent.getXp() as int

event.getXp();
```

:::

:::group{name=setXp}

Sets the amount of xp to change the player's xp counter by.

```zenscript
// XpChangeEvent.setXp(amount as int)

event.setXp(15);
```

| Параметр | Тип | Описание                                                                                        |
| -------- | --- | ----------------------------------------------------------------------------------------------- |
| amount   | int | The amount of xp that the player's xp counter should be <br />                changed by. |


:::


## Свойства

| Название | Тип | Имеет Getter | Имеет Setter | Описание                                                                |
| -------- | --- | ------------ | ------------ | ----------------------------------------------------------------------- |
| xp       | int | true         | true         | Gets the amount of xp that the player's xp counter is being changed by. |

