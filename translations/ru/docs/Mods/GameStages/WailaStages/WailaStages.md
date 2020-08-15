# Этапы Вайлы

Этот мод является аддоном для [GameStages API](https://minecraft.curseforge.com/projects/game-stages). Waila Stages позволяет ограничить аспекты шума Waila/Hwyla с помощью пользовательской прогрессивной системы. Для получения дополнительной информации, посетите страницу модов [здесь](https://minecraft.curseforge.com/projects/waila-stages)

## Методы

Скрывает весь оттенок, если только у игрока нет сцены.

```zenscript
// mods.WailaStages.addWailaStage(String stage);
mods.WailaStages.addWailaStage("one");
```

Скрывает конкретную линию в хате вайла, если только игрок не имеет сцены.

```zenscript
// mods.WailaProgression.addRequirement(String stage, String prefix); 
mods.WailaProgression.addRequirement("one", "Power:"); 
```