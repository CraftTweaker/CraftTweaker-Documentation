# MCCommandSource

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.commands.custom.MCCommandSource
```

## Metodi
### getName

Tipo di ritorno: Stringa

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

Tipo restituito: booleano

```zenscript
myMCCommandSource.hasPermissionLevel(p_197034_1_ as int);
```

| Parametro     | Tipo | Descrizione                 |
| ------------- | ---- | --------------------------- |
| p_197034_1_ | int  | Nessuna descrizione fornita |


### isPlayer

Tipo restituito: booleano

```zenscript
myMCCommandSource.isPlayer();
```

### sendErrorMessage

```zenscript
myMCCommandSource.sendErrorMessage(messaggio come Stringa);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| messaggio | Stringa | Nessuna descrizione fornita |


### sendFeedback

```zenscript
myMCCommandSource.sendFeedback(feedback come stringa, allowLogging come boolean);
```

| Parametro    | Tipo    | Descrizione                 |
| ------------ | ------- | --------------------------- |
| feedback     | Stringa | Nessuna descrizione fornita |
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

| Parametro     | Tipo | Descrizione                 |
| ------------- | ---- | --------------------------- |
| p_197026_1_ | int  | Nessuna descrizione fornita |


### withPermissionLevel

Tipo restituito: [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
myMCCommandSource.withPermissionLevel(p_197033_1_ as int);
```

| Parametro     | Tipo | Descrizione                 |
| ------------- | ---- | --------------------------- |
| p_197033_1_ | int  | Nessuna descrizione fornita |



