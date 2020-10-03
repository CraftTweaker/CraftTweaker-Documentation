# MCCommandSource

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Diese Klasse importieren
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.commands.custom.MCCommandSource
```

## Methoden
### getName

Return type: String

```zenscript
myMCCommandSource.getName();
```

### getPlayer

Rückgabetyp: (@org.openzen.zencode.java.ZenCodeType.Nullable :: MCPlayerEntity)

```zenscript
myMCCommandSource.getPlayer();
```

### getPlayerName

Rückgabetyp: Sammlung&lt;String&gt;

```zenscript
myMCCommandSource.getPlayerNames();
```

### GetTargetedEntity

Rückgabetyp: Sammlung&lt;String&gt;

```zenscript
myMCCommandSource.getZielEntity();
```

### getTeamnamen

Rückgabetyp: Sammlung&lt;String&gt;

```zenscript
myMCCommandSource.getTeamNames();
```

### hasPermissionLevel

Return type: boolean

```zenscript
myMCCommandSource.hasPermissionLevel(p_197034_1_ als int);
```

| Parameter     | Type | Beschreibung            |
| ------------- | ---- | ----------------------- |
| p_197034_1_ | int  | No description provided |


### isPlayer

Return type: boolean

```zenscript
myMCCommandSource.isPlayer();
```

### sendErrorMessage

```zenscript
myMCCommandSource.sendErrorMessage(Nachricht als String);
```

| Parameter | Type   | Beschreibung            |
| --------- | ------ | ----------------------- |
| message   | String | No description provided |


### sendFeedback

```zenscript
myMCCommandSource.sendFeedback(Feedback als Zeichenkette, erlaubt Logging als boolean);
```

| Parameter    | Type    | Beschreibung            |
| ------------ | ------- | ----------------------- |
| rezension    | String  | No description provided |
| allowLogging | boolean | No description provided |


### ohne Feedbackdeaktiviert

Rückgabetyp: [craftweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
myMCCommandSource.withFeedbackDeabled();
```

### withMinPermissionLevel

Rückgabetyp: [craftweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
myMCCommandSource.withMinPermissionLevel(p_197026_1_ als int);
```

| Parameter     | Type | Beschreibung            |
| ------------- | ---- | ----------------------- |
| p_197026_1_ | int  | No description provided |


### withPermissionLevel

Rückgabetyp: [craftweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
myMCCommandSource.withPermissionLevel(p_197033_1_ als int);
```

| Parameter     | Type | Beschreibung            |
| ------------- | ---- | ----------------------- |
| p_197033_1_ | int  | No description provided |



