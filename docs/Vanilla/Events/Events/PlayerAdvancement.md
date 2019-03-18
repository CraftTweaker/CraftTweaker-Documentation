# PlayerAdvancement

The PlayerAdvancement Event is fired whenever a player crafts something in the anvil.  
You can change the chance that the anvil is damaged.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerAdvancementEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions
PlayerAdvancement Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)



## ZenGetters
The following information can be retrieved from the event:

| ZenGetter        | Return Type  |
|------------------|--------------|
| `id`             | string       |


## Id

Apart from the functionality the PE exposes you can get the advancement's ID as string.

This can for example be a string like
```
"minecraft:story/mine_diamond"
```