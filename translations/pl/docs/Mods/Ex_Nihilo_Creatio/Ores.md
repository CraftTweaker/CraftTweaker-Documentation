# Ores

**Musi być w `#loader preinit` lub `#loader contenttweaker`**


## Pakiet
```zenscript
`mods.exnihilocreo.Ore`
```

## Metody

- **Nazwa ciągu** Nazwij fragmenty rudy/piece/dust/ingot
- **Kolor ciągu** Kolor materiału w sześciu.
- **[IItemStack](/Vanilla/Items/IItemStack/) wyjście** wymaga oredict.firstItem lub błędów.
- **Mapuj ciąg[string]** Kod języka, a następnie tłumaczenie.
- **String oreDict** The name of the oreDict you want

## Dodanie

```zenscript
mods.exnihilocreo.Ore. ddRecipe(String,
    String,
    @Optional IItemStack,
    @Optional Map<string, String>,
    @Optional String);

modów. xnihilocreatio.Ore.addRecipe("Kamień",
    "63452D",
    <ore:stone>. irstItem,
    {
    "en_au": "StoneDownUnder"
    },
    "Kamień");
```

## Usuwanie

```zenscript
mods.exnihilocreatio.Ore.removeAll();
```