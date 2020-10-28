# ITooltipFunction

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Diese Klasse importieren
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.item.tooltip.ITooltipFunction
```

## Functional Interface

This class is a functional interface. This means that you can use the lambda notation to create an instance of it. The lambda notation looks like:
```zenscript
(stack, tooltip, isAdvanced) => {}
```
## Methoden
### bewerben

```zenscript
myITooltipFunction.apply(stack as crafttweaker.api.item.IItemStack, tooltip as List<crafttweaker.api.util.text.MCTextComponent>, isAdvanced as boolean);
```

| Parameter  | Type                                                                                                          | Beschreibung            |
| ---------- | ------------------------------------------------------------------------------------------------------------- | ----------------------- |
| stack      | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)                                             | No description provided |
| tooltip    | Liste&lt;[crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)&gt; | No description provided |
| isAdvanced | boolean                                                                                                       | No description provided |



