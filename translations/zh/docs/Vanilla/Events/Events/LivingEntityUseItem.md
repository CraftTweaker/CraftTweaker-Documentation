# LivingEntityUseItem

The LivingEntityUseItem event is fired whenever an entity starts using an item, stops doing so, after the player finishes using an item and each tick they use the item.  
Since that would be called far too often, there are 4 subEvents that are only called in their specific case.

## Importing the class

It might be required to [import](/AdvancedFunctions/Import/) the class to avoid errors.

    //Base Event
    import crafttweaker.event.EntityLivingUseItemEvent.All;
    
    //Specific Events
    import crafttweaker.event.EntityLivingUseItemEvent.Start;
    import crafttweaker.event.EntityLivingUseItemEvent.Tick;
    import crafttweaker.event.EntityLivingUseItemEvent.Stop;
    import crafttweaker.event.EntityLivingUseItemEvent.Finish;
    

## Event interface extensions

LivingEntityUseItem Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters/ZenSetters

The following information can be retrieved/set during the event:

| ZenGetter  | Return Type                              |
| ---------- | ---------------------------------------- |
| `player`   | [IPlayer](/Vanilla/Players/IPlayer/)     |
| `isPlayer` | bool                                     |
| `item`     | [IItemStack](/Vanilla/Items/IItemStack/) |
| `duration` | int                                      |

| ZenSetter  | Parameter Type |
| ---------- | -------------- |
| `duration` | int            |