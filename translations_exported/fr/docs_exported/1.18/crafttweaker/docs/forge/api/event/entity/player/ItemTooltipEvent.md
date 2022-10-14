# ItemTooltipEvent

This event is fired whenever a tooltip is calculated.

  Note: the player may not always be present, make sure you check if it is null before trying to use it

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.player.ItemTooltipEvent;
```


## Extending PlayerEvent

ItemTooltipEvent extends [PlayerEvent](/forge/api/event/entity/player/PlayerEvent). That means all methods available in [PlayerEvent](/forge/api/event/entity/player/PlayerEvent) are also available in ItemTooltipEvent

## Methods

:::group{name=getFlags}

Gets the extra tooltip flags, such as if advanced tooltips should be displayed.

Returns: The tooltip flags  
Return Type: [TooltipFlag](/vanilla/api/item/TooltipFlag)

```zenscript
// ItemTooltipEvent.getFlags() as TooltipFlag

event.getFlags();
```

:::

:::group{name=getItemStack}

Gets the ItemStack that the tooltip is for.

Returns: The ItemStack that the tooltip is for.  
Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
// ItemTooltipEvent.getItemStack() as ItemStack

event.getItemStack();
```

:::

:::group{name=getPlayer}

Gets the player that is viewing the tooltip.

 Note: The player can be null

Returns: The player htat is viewing the tooltip.  
Return Type: [Player](/vanilla/api/entity/type/player/Player)?

```zenscript
// ItemTooltipEvent.getPlayer() as Player?

event.getPlayer();
```

:::

:::group{name=getToolTip}

Gets the list of [Component](/vanilla/api/text/Component)s that make up the tooltip.

Returns: The list of [Component](/vanilla/api/text/Component) that make up the tooltip.  
Return Type: stdlib.List&lt;[Component](/vanilla/api/text/Component)&gt;

```zenscript
// ItemTooltipEvent.getToolTip() as stdlib.List<Component>

event.getToolTip();
```

:::


## Properties

| Name                | Type                                                                    | Has Getter | Has Setter | Description                                                                                           |
| ------------------- | ----------------------------------------------------------------------- | ---------- | ---------- | ----------------------------------------------------------------------------------------------------- |
| flags               | [TooltipFlag](/vanilla/api/item/TooltipFlag)                            | true       | false      | Gets the extra tooltip flags, such as if advanced tooltips should be displayed.                       |
| format@@0 itemStack | [format@@0 ItemStack](/vanilla/api/item/ItemStack)                      | true       | false      | Gets the ItemStack that the tooltip is for.                                                           |
| player              | [Player](/vanilla/api/entity/type/player/Player)?                       | true       | false      | Gets the player that is viewing the tooltip. <br />  <br />  Note: The player can be null |
| infobulle           | stdlib.List&lt;[Component](/vanilla/api/text/Component)&gt; | true       | false      | Gets the list of [Component](/vanilla/api/text/Component)s that make up the tooltip.                  |

