# PlayerAdvancement

The PlayerAdvancement Event is fired whenever a player is awarded an Advancement.

## Event Class

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerAdvancementEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions

PlayerAdvancement Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

다음 정보들은 이벤트를 통해서 얻을 수 있습니다.

| ZenGetter | 반환 타입  |
| --------- | ------ |
| `id`      | string |

## Id

Apart from the functionality the PlayerEvent exposes you can get the advancement's ID as string.

This can for example be a string like

    "minecraft:story/mine_diamond"