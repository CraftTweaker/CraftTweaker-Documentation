# Этапы тинкера

Этот мод является аддоном для [GameStages API](https://minecraft.curseforge.com/projects/game-stages). Tinker Stages позволяет включить модификацию Tinkers Construct в пользовательскую прогрессивную систему, установленную автором модпака. Для получения дополнительной информации, посетите страницу модов [здесь](https://minecraft.curseforge.com/projects/tinkerstages)

## Общие ограничения

Ограничивает создание инструментов до сцены. Если с помощью этого метода будет добавлено несколько этапов, игроку понадобится хотя бы один из них.

```zenscript
// mods.TinkerStages.addGeneralCraftingStage(String stage);
mods.TinkerStages.addGeneralCraftingStage("один");
```

Ограничивает часть замены на этап. Если с помощью этого метода будет добавлено несколько этапов, игроку понадобится хотя бы один из них.

```zenscript
// mods.TinkerStages.addGeneralPartReplacingStage(String stage);
mods.TinkerStages.addGeneralPartReplacingStage("one");
```

Ограничивает часть здания этапом. Если с помощью этого метода будет добавлено несколько этапов, игроку понадобится хотя бы один из них.

```zenscript
// mods.TinkerStages.addGeneralPartBuildingStage(String stage);
mods.TinkerStages.addGeneralPartBuildingStage("one");
```

Ограничивает применение модификаторов к сцене. Если с помощью этого метода будет добавлено несколько этапов, игроку понадобится хотя бы один из них.

```zenscript
// mods.TinkerStages.addGeneralModifierStage(String stage);
mods.TinkerStages.addGeneralModifierStage("один");
```

## Конкретные ограничения

Предотвращает создание определенного типа инструментов на станции инструментов. Например, вы можете ограничить создание молотов до определенной стадии.

```zenscript
// mods.TinkerStages.addToolTypeStage(String stage, String toolId);
mods.TinkerStages.addToolTypeStage(String "one", "tconstruct:pickaxe");
```

Предотвращает использование материала игроком. Включая крафт, постройку частей, и использование инструмента.

```zenscript
// mods.TinkerStages.addMaterialStage(String stage, String material);
mods.TinkerStages.addMaterialStage("one", "stone");
```

Предотвращает применение конкретного модификатора к инструменту или используемому инструменту.

```zenscript
// mods.TinkerStages.addModifierStage(String, String modifier);
mods.TinkerStages.addModifierStage("two", "mending_moss");
```

## Пример скрипта

```zenscript
//ОБЩИЕ УСТРОЙСТВА
//Предотвращает все инструменты, если стадия не будет разблокирована.
mods.TinkerStages.addGeneralCraftingStage("один");

//Предотвращает замену всех инструментов, если стадия не размонтирована.
mods.TinkerStages.addGeneralPartReplacingStage("один");

//Выводит все строительные части, если стадия не будет разблокирована.
mods.TinkerStages.addGeneralPartBuildStage("один");

//Предотвращает применение любых модификаторов инструментов, если стадия не будет разблокирована.
mods.TinkerStages.addGeneralModifierStage("one");


//СПЕЦИФИЧЕСКИЕ РЕСТРИКЦИИ
//Предотвращение кирки крафта, если стадия не разблокирована.
mods.TinkerStages.addToolStage("two", "tconstruct:pickaxe");

//Предотвращает использование материала. 
mods.TinkerStages.addMaterialStage("two", "stone");

//Предотвращает применение модификатора.
mods.TinkerStages.addModifierStage("two", "mending_moss");
```