# MCAmbiguityConsumer

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Diese Klasse importieren
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.commands.custom.MCAmbiguityConsumer
```

## Functional Interface

This class is a functional interface. This means that you can use the lambda notation to create an instance of it. The lambda notation looks like:
```zenscript
(Elternteil, Kind, Geschwister, Eingabe) =>{}
```
## Methoden
### mehrdeutig

```zenscript
myMCAmbiguityConsumer.ambiguous(Elternteil als crafttweaker.api.commands.custom.MCCommandNode, Kind als craftweaker.api.commands.custom.MCCommandNode, als crafttweaker.api.commands.custom.MCCommandNode, Eingang als Sammlung<String>);
```

| Parameter   | Type                                                                                         | Beschreibung            |
| ----------- | -------------------------------------------------------------------------------------------- | ----------------------- |
| parent      | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | No description provided |
| Kind        | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | No description provided |
| Geschwister | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | No description provided |
| inputs      | Sammlung&lt;String&gt;                                                           | No description provided |



