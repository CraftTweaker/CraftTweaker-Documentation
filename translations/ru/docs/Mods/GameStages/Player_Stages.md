# Этапы игрока

API GameStages расширяет функциональность CraftTweaker [IPlayer](/Vanilla/Players/IPlayer/) для проверки и изменения стадий игрока.

## Вызов методов

Поскольку это [ZenExpansion](/Dev_Area/ZenAnnotations/Annotation_ZenExpansion/), вы можете просто вызвать методы на любом объекте [IPlayer](/Vanilla/Players/IPlayer/) или любом из его подтипов.

## Методы

### Проверить игровые вещи

Методы возврата булев.

```zenscript
// Проверяет, имеет ли игрок пройденную стадию.
//player.hasGameStage(String stage);
player.hasGameStage("one");



// Проверяет, имеет ли игрок какой-либо из прошедших стадий. Им только нужно.
//player.hasAnyGameStages(String... stages);
player.hasAnyGameStages("one", "two");



// Проверяет, есть ли у игрока все пройденные стадии.
//player.hasAllGameStages (String... stages);
player.hasAllGameStages ("один", "два");
```

### Добавить или удалить игру

Методы возвращают недействительный (ничего).

```zenscript
// Открывает стадию для игрока.
//addGameStage(String stage);
addGameStage(String stage);


// Заблокирует этап для игрока.
//removeGameStage(String stage);
removeGameStage(String stage);
```