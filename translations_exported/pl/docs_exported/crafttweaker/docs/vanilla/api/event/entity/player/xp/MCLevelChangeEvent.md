# MCLevelChangeEvent

This event is fired when the player's level count is changed. If the amount is positive the levels are being added. If they are negative, levels are being removed. This event takes place before the levels are changed. This allows you to change the amount of levels, or cancel the change entirely.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.player.xp.MCLevelChangeEvent;
```


## Properties

| Name   | Type | Has Getter | Has Setter |
| ------ | ---- | ---------- | ---------- |
| levels | int  | true       | true       |

