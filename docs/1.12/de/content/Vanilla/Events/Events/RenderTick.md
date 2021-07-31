# RenderTick

The RenderTick Event is fired for every render tick on the client.

## Event-Klasse
You will need to cast the event in the function header as this class:  
`crafttweaker.event.RenderTickEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Erweiterte Event-Schnittellen
WorldTick Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [ITickEvent](/Vanilla/Events/Events/ITickEvent/)

## ZenGetter
The following additional information can be retrieved from the event:

| ZenGetter        | Rückgabetyp |
| ---------------- | ----------- |
| `renderTickTime` | float       |
