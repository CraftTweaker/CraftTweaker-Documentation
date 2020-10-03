# MCCommandSource

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
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

Tipo di restituzione: (@org.openzen.zencode.java.ZenCodeType.Nullable :: MCPlayerEntity)

```zenscript
myMCCommandSource.getPlayer();
```

### getPlayerNames

Tipo di ritorno: Collezione&lt;String&gt;

```zenscript
myMCCommandSource.getPlayerNames();
```

### getTargetedEntity

Tipo di ritorno: Collezione&lt;String&gt;

```zenscript
myMCCommandSource.getTargetedEntity();
```

### getTeamNames

Tipo di ritorno: Collezione&lt;String&gt;

```zenscript
myMCCommandSource.getTeamNames();
```

### hasPermissionLevel

Return type: boolean

```zenscript
myMCCommandSource.hasPermissionLevel(p_197034_1_ as int);
```

| Parameter     | Type | Description                 |
| ------------- | ---- | --------------------------- |
| p_197034_1_ | int  | Nessuna descrizione fornita |


### isPlayer

Return type: boolean

```zenscript
myMCCommandSource.isPlayer();
```

### sendErrorMessage

```zenscript
myMCCommandSource.sendErrorMessage(messaggio come Stringa);
```

| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| message   | String | Nessuna descrizione fornita |


### sendFeedback

```zenscript
myMCCommandSource.sendFeedback(feedback come stringa, allowLogging come boolean);
```

| Parameter    | Type    | Description                 |
| ------------ | ------- | --------------------------- |
| feedback     | String  | Nessuna descrizione fornita |
| allowLogging | boolean | Nessuna descrizione fornita |


### withFeedbackDisabilitato

Tipo restituito: [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
myMCCommandSource.withFeedbackDisabled();
```

### withMinPermissionLevel

Tipo restituito: [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
myMCCommandSource.withMinPermissionLevel(p_197026_1_ as int);
```

| Parameter     | Type | Description                 |
| ------------- | ---- | --------------------------- |
| p_197026_1_ | int  | Nessuna descrizione fornita |


### withPermissionLevel

Tipo restituito: [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
myMCCommandSource.withPermissionLevel(p_197033_1_ as int);
```

| Parameter     | Type | Description                 |
| ------------- | ---- | --------------------------- |
| p_197033_1_ | int  | Nessuna descrizione fornita |



