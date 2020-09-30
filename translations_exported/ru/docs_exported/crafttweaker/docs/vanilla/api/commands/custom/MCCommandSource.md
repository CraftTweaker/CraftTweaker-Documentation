# Источник MCCommandSource

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
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

Возвратный тип: (@org.openzen.zencode.java.ZenCodeType.Nullable :: MCPlayerEntity)

```zenscript
myMCCommandSource.getPlayer();
```

### getPlayerNames

Тип возврата: Коллекция&lt;String&gt;

```zenscript
myMCCommandSource.getPlayerNames();
```

### Целевая сущность

Тип возврата: Коллекция&lt;String&gt;

```zenscript
myMCCommandSource.getTargetedEntity();
```

### getTeamNames

Тип возврата: Коллекция&lt;String&gt;

```zenscript
myMCCommandSource.getTeamNames();
```

### hasPermissionLevel

Return type: boolean

```zenscript
myMCCommandSource.hasPermissionLevel(p_197034_1_ как int);
```

| Параметр      | Тип | Description          |
| ------------- | --- | -------------------- |
| p_197034_1_ | int | Описание отсутствует |


### isPlayer

Return type: boolean

```zenscript
myMCCommandSource.isPlayer();
```

### отправить сообщение об ошибке

```zenscript
myMCCommandSource.sendErrorMessage(сообщение как строка);
```

| Параметр | Тип    | Description          |
| -------- | ------ | -------------------- |
| message  | String | Описание отсутствует |


### sendFeedback

```zenscript
myMCCommandSource.sendFeedback(обратная связь как String, allowLogging как boolean);
```

| Параметр       | Тип     | Description          |
| -------------- | ------- | -------------------- |
| обратная связь | String  | Описание отсутствует |
| allowLogging   | boolean | Описание отсутствует |


### обратная связь отключена

Возврат тип: [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
myMCCommandSource.withFeedbackDisabled();
```

### с уровнем разрешений

Возврат тип: [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
myMCCommandSource.withMinPermissionLevel(p_197026_1_ как int);
```

| Параметр      | Тип | Description          |
| ------------- | --- | -------------------- |
| p_197026_1_ | int | Описание отсутствует |


### уровень снятия

Возврат тип: [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
myMCCommandSource.withPermissionLevel(p_197033_1_ как int);
```

| Параметр      | Тип | Description          |
| ------------- | --- | -------------------- |
| p_197033_1_ | int | Описание отсутствует |



