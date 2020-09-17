# MCAmbiguityConsumer

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.  
```zenscript
crafttweaker.api.commands.custom.MCAmbiguityConsumer
```

## Functional Interface

This class is a functional interface. This means that you can use the lambda notation to create an instance of it.
The lambda notation looks like: 
```zenscript
(parent, child, sibling, inputs) => {}
```
## Methods
### ambiguous

```zenscript
myMCAmbiguityConsumer.ambiguous(parent as crafttweaker.api.commands.custom.MCCommandNode, child as crafttweaker.api.commands.custom.MCCommandNode, sibling as crafttweaker.api.commands.custom.MCCommandNode, inputs as Collection<String>);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| parent | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | No description provided |
| child | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | No description provided |
| sibling | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | No description provided |
| inputs | Collection&lt;String&gt; | No description provided |



