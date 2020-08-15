# Ванильский завод

Мастерский завод позволяет создавать [блоков](/Mods/ContentTweaker/Vanilla/Creatable_Content/Block/), [Предметы](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) и [креативные вкладки](/Mods/ContentTweaker/Vanilla/Creatable_Content/Creative_Tab/) , которые вы можете добавить в игру.

## Звонок

Пакет можно найти на `mods.contenttweaker.VanillaFactory`

## Создание контента

### Создать блоки

```zenscript
mods.contenttweaker.VanillaFactory.createBlock(String unlocalizedName, IMaterialDefinition);
```

Параметры:

- Имя строки, разблокированное локализацией: Имя Блока.
- [Материал IMaterialDefinition](/Mods/ContentTweaker/Vanilla/Types/Block/IMaterialDefinition/) : Базовый материал, из которого изготовлен блок.

Возвращает объект [BlockRepresentation](/Mods/ContentTweaker/Vanilla/Creatable_Content/Block/). Проверьте страницу [Block](/Mods/ContentTweaker/Vanilla/Creatable_Content/Block/) для получения дополнительной информации и пример скрипта!

### Создать элементы

```zenscript
mods.contenttweaker.VanillaFactory.createItem(String unlocalizedName);
```

Параметры:

- Название строки: Имя элемента не локализованное имя.

Возвращает объект [ItemRepresentation](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/). Проверьте [страницу элемента](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) для дополнительной информации и пример скрипта!

### Создать вкладки

```zenscript
mods.contenttweaker.VanillaFactory.createCreativeTab(String unlocalizedName, IItemStack iItemStack);
mods.contenttweaker.VanillaFactory.createCreativeTab(String unlocalizedName, ItemRepresentation item);
mods.contenttweaker.VanillaFactory.createCreativeTab(String unlocalizedName, BlockRepresentation iBlock);
mods.contenttweaker.VanillaFactory.creativeTab(String unlocalizedName, IItemStackSupplier supplier);
```

Параметры:

- Имя перелокализации: Перелокализованное название вкладки.
- Предмет или представление блока: Элемент/Блок, который будет отображаться как символ вкладки Вы также можете использовать функцию [IItemStackSupplier](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemStackSupplier/).

Возвращает объект [ICreativeTab](/Mods/ContentTweaker/Vanilla/Creatable_Content/Creative_Tab/). Проверьте страницу [Creative Tab](/Mods/ContentTweaker/Vanilla/Creatable_Content/Creative_Tab/) для получения дополнительной информации и пример скрипта!

### Создать жидкости

```zenscript
mods.contenttweaker.VanillaFactory.createFluid(String unlocalizedName, int color);
mods.contenttweaker.VanillaFactory.createFluid(String unlocalizedName, CTColor color);
```

Параметры:

- Название строки: Нелокализованное имя Fluid.
- int color: The fluid's color-code.
- [CTColor](/Mods/ContentTweaker/Vanilla/Types/Color/Color/) цвет: Цвет жидкости как цвет объекта.

Возвращает объект [FluidRepresentation](/Mods/ContentTweaker/Vanilla/Creatable_Content/Fluid/). Проверьте [жидкую страницу](/Mods/ContentTweaker/Vanilla/Creatable_Content/Fluid/) для получения дополнительной информации и пример скрипта.

### Создать еду

```zenscript
mods.contenttweaker.VanillaFactory.createItemFood(String unlocalizedName, int healAmoun);
```

Параметры:

- Имя строк без локализации: Переименование элемента.
- int healing кол-во здоровья: стоимость еды

Возвращает объект [ItemFoodRepresentation](/Mods/ContentTweaker/Vanilla/Creatable_Content/ItemFood/). Ознакомьтесь с [страницей еды](/Mods/ContentTweaker/Vanilla/Creatable_Content/ItemFood/) для получения дополнительной информации и примера скрипта.