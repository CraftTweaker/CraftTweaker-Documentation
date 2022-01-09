# LoadedMods

You can use the [global keyword](/Vanilla/Global_Functions/) `loadedMods` to access all currently loaded mods.  
If needed you can import the class using `import crafttweaker.mods.ILoadedMods;`

## Проверка, загружен ли мод

Use the `in` function to check if a mod is loaded;  
You can also use the `contains` method:
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
The IMod Interface provides you with some general information on a specific mod.  
If needed, it can be imported using `import crafttweaker.mods.IMod;`

| Геттер      | What does it do                                 | Возвращаемый тип                           | Usage             |
| ----------- | ----------------------------------------------- | ------------------------------------------ | ----------------- |
| id          | Возвращает ID мода                              | string                                     | `mod.id`          |
| name        | Возвращает внутреннее имя мода                  | string                                     | `mod.name`        |
| version     | Возвращает версию мода                          | string                                     | `mod.version`     |
| description | Возвращает описание мода                        | string                                     | `mod.description` |
| items       | Возвращает все предметы, добавленные этим модом | [IItemStack](/Vanilla/Items/IItemStack/)[] | `mod.items`       |