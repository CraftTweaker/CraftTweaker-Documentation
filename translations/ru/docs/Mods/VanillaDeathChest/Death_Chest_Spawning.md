# Появление Сундука смерти

## Импорт пакета

`импорт mods.vanilladeathchest.DeathChestSpawning;`

## Сообщение в чате

```zenscript
//DeathChestSpawning.setChatMessage(string stage, string message);
DeathChestSpawning.setChatMessage("example_stage", "Появится сундук [%s, %s, %s]!");
```

Строка принимает три аргумента: координаты Х, Y и Z сундука смерти.

## Отображаемое имя контейнера

```zenscript
//DeathChestSpawning.setContainerDisplayName(string stage, string name);
DeathChestSpawning.setContainerDisplayName("example_stage", "Your Items");
```

## regex имени реестра

```zenscript
//DeathChestSpawning.setRegistryNameRegex(string stage, string regex);
DeathChestSpawning.setRegistryNameRegex("example_stage", ".*dirt.*");
```

## Использовать контейнер в инвентаре

```zenscript
//Смертоносный сундук.setUseContainerInInventory(строковый этап, бул);
DeathChestSpawning.setUseContainerInInventory("example_stage", false);
```