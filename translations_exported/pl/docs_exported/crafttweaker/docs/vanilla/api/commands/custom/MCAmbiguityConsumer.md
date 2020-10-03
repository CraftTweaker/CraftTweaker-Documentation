# MCAmbiguityConsumer

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.commands.custom.MCAmbiguityConsumer
```

## Functional Interface

This class is a functional interface. This means that you can use the lambda notation to create an instance of it. The lambda notation looks like:
```zenscript
(rodzice, dziecko, rodzeństwo, dane wejściowe) =>{}
```
## Methods
### niejednoznaczne

```zenscript
myMCAmbiguityConsumer.ambiguous(rodzic jako crafttweaker.api.commands.custom.MCCommandNode, dziecko jako crafttweaker.api.commands.custom.MCCommandNode, rodzeństwo jako crafttweaker.api.commands.custom.MCCommandNode, wejścia jako Kolekcja<String>);
```

| Parameter  | Type                                                                                         | Description             |
| ---------- | -------------------------------------------------------------------------------------------- | ----------------------- |
| parent     | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | No description provided |
| dziecko    | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | No description provided |
| rodzeństwo | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | No description provided |
| inputs     | Kolekcja&lt;String&gt;                                                           | No description provided |



