# MCResultKonsument

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.commands.custom.MCResultConsumer
```

## Functional Interface

This class is a functional interface. This means that you can use the lambda notation to create an instance of it. The lambda notation looks like:
```zenscript
(CommContext, sukces, wynik) =>{}
```
## Methods
### onCommandcomplete

```zenscript
myMCResultConsumer.onCommandComplete(komenda jako crafttweaker.api.commands.custom.MCCommandContext, udany jako logiczny, wynik jako int);
```

| Parameter        | Type                                                                                               | Description             |
| ---------------- | -------------------------------------------------------------------------------------------------- | ----------------------- |
| Kontekst komendy | [crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext) | No description provided |
| success          | boolean                                                                                            | No description provided |
| result           | int                                                                                                | No description provided |



