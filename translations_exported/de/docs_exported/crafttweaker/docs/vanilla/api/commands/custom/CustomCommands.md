# Benutzerdefinierte Befehle

## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.commands.custom.CustomCommands;
```


## Methoden

### argument

Return Type: [MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
CustomCommands.argument(name as string) as MCRequiredArgumentBuilder
```

| Parameter | Type   | Beschreibung            |
| --------- | ------ | ----------------------- |
| name      | string | No Description Provided |


### wörtlich

Return Type: [MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
CustomCommands.literal(name as string) as MCLiteralArgumentBuilder
```

| Parameter | Type   | Beschreibung            |
| --------- | ------ | ----------------------- |
| name      | string | No Description Provided |


### registerbefehl

Return Type: void

```zenscript
CustomCommands.registerCommand(builder as MCLiteralArgumentBuilder) as void
```

| Parameter | Type                                                                              | Beschreibung            |
| --------- | --------------------------------------------------------------------------------- | ----------------------- |
| bauer     | [MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder) | No Description Provided |


