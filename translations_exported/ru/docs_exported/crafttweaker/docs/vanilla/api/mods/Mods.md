# Mods

Зацепка информации обо всех зарегистрированных модах. Можно получить доступ с помощью `загруженных модов` глобального ключевого слова

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.mods.Mods;
```


## Methods

### getMod

Gets a specific mod

Return Type: [ModInfo](/vanilla/api/mods/ModInfo)

```zenscript
Mods.getMod(modid as string) as ModInfo
loadedMods.getMod("minecraft");
```
| Параметр | Тип    | Description             |
| -------- | ------ | ----------------------- |
| modid    | string | No Description Provided |

### isModLoaded

Checks if a mod is laoded

Return Type: boolean

```zenscript
Mods.isModLoaded(modid as string) as boolean
loadedMods.isModLoaded("minecraft");
```
| Параметр | Тип    | Description      |
| -------- | ------ | ---------------- |
| modid    | string | мод для проверки |


## Свойства

| Название | Тип                                                                 | Имеет Getter | Имеет Setter |
| -------- | ------------------------------------------------------------------- | ------------ | ------------ |
| моды     | stdlib.List&lt;[ModInfo](/vanilla/api/mods/ModInfo)&gt; | true         | false        |
| size     | int                                                                 | true         | false        |

