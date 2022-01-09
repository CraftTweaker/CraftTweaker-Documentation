# MCCommandSource

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.commands.custom.MCCommandSource;
```


## Metodi

:::group{name=getName}

Return Type: string

```zenscript
// MCCommandSource.getName() as string

myMCCommandSource.getName();
```

:::

:::group{name=getPlayer}

Return Type: [MCPlayerEntity](/vanilla/api/entity/MCPlayerEntity)?

```zenscript
// MCCommandSource.getPlayer() as MCPlayerEntity?

myMCCommandSource.getPlayer();
```

:::

:::group{name=getPlayerNames}

Return Type: Collection&lt;string&gt;

```zenscript
// MCCommandSource.getPlayerNames() as Collection<string>

myMCCommandSource.getPlayerNames();
```

:::

:::group{name=getTargetedEntity}

Return Type: Collection&lt;string&gt;

```zenscript
// MCCommandSource.getTargetedEntity() as Collection<string>

myMCCommandSource.getTargetedEntity();
```

:::

:::group{name=getTeamNames}

Return Type: Collection&lt;string&gt;

```zenscript
// MCCommandSource.getTeamNames() as Collection<string>

myMCCommandSource.getTeamNames();
```

:::

:::group{name=hasPermissionLevel}

Return Type: boolean

```zenscript
MCCommandSource.hasPermissionLevel(p_197034_1_ as int) as boolean
```

| Parametro     | Tipo | Descrizione             |
| ------------- | ---- | ----------------------- |
| p_197034_1_ | int  | No Description Provided |


:::

:::group{name=isPlayer}

Return Type: boolean

```zenscript
// MCCommandSource.isPlayer() as boolean

myMCCommandSource.isPlayer();
```

:::

:::group{name=sendErrorMessage}

Return Type: void

```zenscript
MCCommandSource.sendErrorMessage(message as string) as void
```

| Parametro | Tipo   | Descrizione             |
| --------- | ------ | ----------------------- |
| message   | string | No Description Provided |


:::

:::group{name=sendFeedback}

Return Type: void

```zenscript
MCCommandSource.sendFeedback(feedback as string, allowLogging as boolean) as void
```

| Parametro    | Tipo    | Descrizione             |
| ------------ | ------- | ----------------------- |
| feedback     | string  | No Description Provided |
| allowLogging | boolean | No Description Provided |


:::

:::group{name=withFeedbackDisabled}

Return Type: [MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
// MCCommandSource.withFeedbackDisabled() as MCCommandSource

myMCCommandSource.withFeedbackDisabled();
```

:::

:::group{name=withMinPermissionLevel}

Return Type: [MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
MCCommandSource.withMinPermissionLevel(p_197026_1_ as int) as MCCommandSource
```

| Parametro     | Tipo | Descrizione             |
| ------------- | ---- | ----------------------- |
| p_197026_1_ | int  | No Description Provided |


:::

:::group{name=withPermissionLevel}

Return Type: [MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
MCCommandSource.withPermissionLevel(p_197033_1_ as int) as MCCommandSource
```

| Parametro     | Tipo | Descrizione             |
| ------------- | ---- | ----------------------- |
| p_197033_1_ | int  | No Description Provided |


:::


