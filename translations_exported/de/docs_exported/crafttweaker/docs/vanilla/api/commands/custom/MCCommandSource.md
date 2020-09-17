# MCCommandSource

Diese Klasse wurde von einer Mod mit mod-id `crafttweaker` hinzugefügt. Wenn Sie diese Funktion nutzen möchten, müssen Sie diese Mod installiert haben.

## Diese Klasse importieren
Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (wie zum Beispiel ein Array zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.
```zenscript
crafttweaker.api.commands.custom.MCCommandSource
```

## Methoden
### getName

Rückgabetyp: String

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

Rückgabetyp: boolesch

```zenscript
myMCCommandSource.hasPermissionLevel(p_197034_1_ als int);
```

| Parameter     | Type | Beschreibung                 |
| ------------- | ---- | ---------------------------- |
| p_197034_1_ | int  | Keine Beschreibung angegeben |


### isPlayer

Rückgabetyp: boolesch

```zenscript
myMCCommandSource.isPlayer();
```

### sendErrorMessage

```zenscript
myMCCommandSource.sendErrorMessage(Nachricht als String);
```

| Parameter | Type   | Beschreibung                 |
| --------- | ------ | ---------------------------- |
| nachricht | String | Keine Beschreibung angegeben |


### sendFeedback

```zenscript
myMCCommandSource.sendFeedback(Feedback als Zeichenkette, erlaubt Logging als boolean);
```

| Parameter                | Type    | Beschreibung                 |
| ------------------------ | ------- | ---------------------------- |
| rezension                | String  | Keine Beschreibung angegeben |
| erlaubte Protokollierung | boolean | Keine Beschreibung angegeben |


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

| Parameter     | Type | Beschreibung                 |
| ------------- | ---- | ---------------------------- |
| p_197026_1_ | int  | Keine Beschreibung angegeben |


### withPermissionLevel

Rückgabetyp: [craftweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
myMCCommandSource.withPermissionLevel(p_197033_1_ als int);
```

| Parameter     | Type | Beschreibung                 |
| ------------- | ---- | ---------------------------- |
| p_197033_1_ | int  | Keine Beschreibung angegeben |



