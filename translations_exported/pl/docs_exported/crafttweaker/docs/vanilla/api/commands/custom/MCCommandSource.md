# Źródło polecenia MCCommand

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.commands.custom.MCCommandSource
```

## Methods
### getName

Return type: String

```zenscript
myMCCommandSource.getName();
```

### getPlayer

Typ zwrotu: (@org.openzen.zencode.java.ZenCodeType.Nullable :: MCPlayerEntity)

```zenscript
myMCCommandSource.getPlayer();
```

### Nazwy getPlayerName

Typ zwrotu: Kolekcja&lt;String&gt;

```zenscript
myMCCommandSource.getPlayerNames();
```

### getTargetedEntity

Typ zwrotu: Kolekcja&lt;String&gt;

```zenscript
myMCCommandSource.getTargetedEntity();
```

### Nazwy getTeames

Typ zwrotu: Kolekcja&lt;String&gt;

```zenscript
myMCCommandSource.getTeamNames();
```

### hasPermissionLevel

Return type: boolean

```zenscript
myMCCommandSource.hasPermissionLevel(p_197034_1_ jako int);
```

| Parameter    | Type | Description             |
| ------------ | ---- | ----------------------- |
| p_197034_1 | int  | No description provided |


### isPlayer

Return type: boolean

```zenscript
myMCCommandSource.isPlayer();
```

### Wyślij Wiadomość Błędną

```zenscript
myMCCommandSource.sendErrorMessage(wiadomość jako String);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| message   | String | No description provided |


### sendFeedback

```zenscript
myMCCommandSource.sendFeedback(feedback as String, allow Logging as boolean);
```

| Parameter    | Type    | Description             |
| ------------ | ------- | ----------------------- |
| opinia       | String  | No description provided |
| allowLogging | boolean | No description provided |


### opinia wyłączona

Typ zwrotu: [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
myMCCommandSource.withFeedbackDisabled();
```

### na poziomie MinPermissionLevel

Typ zwrotu: [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
myMCCommandSource.withMinPermissionLevel(p_197026_1_ jako int);
```

| Parameter     | Type | Description             |
| ------------- | ---- | ----------------------- |
| p_197026_1_ | int  | No description provided |


### Poziom withPermissionLevel

Typ zwrotu: [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
myMCCommandSource.withPermissionLevel(p_197033_1_ jako int);
```

| Parameter     | Type | Description             |
| ------------- | ---- | ----------------------- |
| p_197033_1_ | int  | No description provided |



