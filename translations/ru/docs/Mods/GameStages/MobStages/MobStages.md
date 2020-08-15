# Стадии мобов

Этот мод является аддоном для [GameStages API](https://minecraft.curseforge.com/projects/game-stages). Моб Стадии позволяют создать спавн мобов в пользовательской системе. Для получения дополнительной информации о том, как работает мод, посетите страницу модов [здесь](https://minecraft.curseforge.com/projects/mob-stages)

## Глобальные настройки

Создает новую запись для моба. Для каждого моба может существовать только одна глобальная запись.

```zenscript
// mods.MobStages.addStage(String stage, String entityId);
mods.MobStages.addStage("one", "minecraft:zombie");
```

Добавляет замену мобу. Если моб не может спавнить из-за отсутствия подходящих игроков, замена моба будет произведена на месте.

```zenscript
// mods.MobStages.addReplacement(String entityId, String replacementId);
mods.MobStages.addReplacement("minecraft:zombie", "minecraft:slime");
```

Устанавливает диапазон для поиска правильных игроков. Диапазон по умолчанию равен 512 блокам, поэтому это опционально.

```zenscript
// mods.MobStages.addRange(String entityId, int range);
mods.MobStages.addRange("minecraft:zombie", 32);
```

Позволяет переопределить проверку стадии. По умолчанию это false. Если установлено значение true, спаунеры будут работать для этого моба, даже если нет правильных игроков.

```zenscript
// mods.MobStages.toggleSpawner(String entityId, boolean allow);
mods.MobStages.toggleSpawner("minecraft:zombie", true);

// mods.MobStages.toggleSpawner(String entityId, boolean allow, int dimension);
mods.MobStages.toggleSpawner("minecraft:zombie", true, -1);
```

## Специфические параметры измерения

Варианты конкретных размеров почти такие же, как глобальные варианты, однако у них есть еще один аргумент добавленный к концу, который является целочисленным идентификатором. Записи для конкретных размеров будут переопределять глобальную запись в этом измерении. Вы можете иметь только одну запись для одного моба.

## Пример скрипта

```zenscript
// Криперы требуют одну стадию для появления
mods.MobStages.addStage("one", "minecraft:creeper");

// Skeletons требуют сцены two, or любой спавнер.
mods.MobStages.addStage("two", "minecraft:skeleton");
mods.MobStages.toggleSpawner("minecraft:skeleton", true);

// Пауки требуют три этапа в нейтрах.
mods.MobStages.addStage("three", "minecraft:spider", -1);

// Зомби требуют этапа 4 в нейте, и заменяются летучими, если они не могут.
mods.MobStages.addStage("four", "minecraft:zombie", -1);
mods.MobStages.toggleSpawner("minecraft:zombie", true, -1);
mods.MobStages.addStage("four", "minecraft:zombie", -1);
mods.MobStages.addReplacement("minecraft:zombie", "minecraft:bat", -1);
```