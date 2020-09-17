# Ores

**Должен быть в `#loader preinit` или `#loader contenttweaker`**


## Пакет
```zenscript
`mods.exnihilocreatio.Ore`
```

## Методы

- **Название строки** Название куска руды / кусочка/пыль/слитка
- **Цвет строки** Цвет материала в шестнадцатеричном виде.
- **[IItemStack](/Vanilla/Items/IItemStack/) output** требует oredict.firstItem или ошибки.
- **Map string[string]** Language code then translation.
- **String oreDict** имя oreDict вы хотите.

## Сложение

```zenscript
mods.exnihilocreatio.Ore. ddRecipe(tring,
    String,
    @Optional IItemStack,
    @Optional Map<string, String>,
    @Optional String);

моды. xnihilocreatio.Ore.addRecipe("Каменный",
    "63452D",
    <ore:stone>. irstItem,
    {
    "en_au": "Каменное DownUnder"
    },
    "Камень");
```

## Удаление

```zenscript
mods.exnihilocreatio.Ore.removeAll();
```