# RenderTick

The RenderTick Event is fired for every render tick on the client.

## Класс события
You will need to cast the event in the function header as this class:  
`crafttweaker.event.RenderTickEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий
WorldTick Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [ITickEvent](/Vanilla/Events/Events/ITickEvent/)

## ZenGetters
The following additional information can be retrieved from the event:

| ZenGetter        | Возвращаемый тип |
| ---------------- | ---------------- |
| `renderTickTime` | float            |
