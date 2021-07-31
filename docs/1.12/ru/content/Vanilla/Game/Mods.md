# LoadedMods

Вы можете использовать [глобальное значение](/Vanilla/Global_Functions/) `loadedMods`, чтобы получить доступ ко всем загруженным модам.  
Если нужно, вы можете импортировать этот класс с помощью `import crafttweaker.mods.ILoadedMods;`.

## Проверка, загружен ли мод

Используйте функцию `in`, чтобы проверить, загружен ли мод,   
вы также можете использовать метод `contains`:

```zenscript
//если MinecraftCoderPack загружен
if(loadedMods in "mcp"){
    print("успех!");
}

//если MinecraftCoderPack загружен
if(loadedMods.contains("mcp")){
    print("успех!!!");
}
```

## Получить конкретный мод

Вы можете получить конкретный мод как IMod, если у вас есть его ID.

```zenscript
//получает мод MinecraftCoderPack
val mod = loadedMods["mcp"];
```

## Перебор списка модов

You can iterate through the list of loaded mods like this:

```zenscript
//печатает все зарегистрированные определения предметов, не рекомендуется в больших сборках!
//the mod variable will be an IMod type
for mod in loadedMods {
    print(mod.name ~ ":");
    for item in mod.items {
        print("\t\t" ~ item.displayName);
    }
}
```

# IMod

Интерфейс IMod предоставляет вам общую информацию о конкретном моде.  
Если нужно, может быть импортирован с помощью `import crafttweaker.mods.IMod;`.

| Геттер      | Что он делает                                   | Возвращаемый тип                           | Использование     |
| ----------- | ----------------------------------------------- | ------------------------------------------ | ----------------- |
| id          | Возвращает ID мода                              | string                                     | `mod.id`          |
| name        | Возвращает внутреннее имя мода                  | string                                     | `mod.name`        |
| version     | Возвращает версию мода                          | string                                     | `mod.version`     |
| description | Возвращает описание мода                        | string                                     | `mod.description` |
| items       | Возвращает все предметы, добавленные этим модом | [IItemStack](/Vanilla/Items/IItemStack/)[] | `mod.items`       |