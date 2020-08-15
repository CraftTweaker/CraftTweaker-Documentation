# Ores

**Necessità di essere nel `#loader preinit` o `#loader contenttweaker`**


## Pacchetto
```zenscript
`mods.exnihilocreatio.Ore`
```

## Metodi

- **String name** Name the ore chunks/piece/dust/ingot
- **Colore stringa** Colore del materiale in ex.
- **[IItemStack](/Vanilla/Items/IItemStack/) output** richiede un oredict.firstItem o errori fuori.
- **Stringa mappa[string]** Codice lingua poi traduzione.
- **String oreDict** Il nome dell'oreDict che vuoi.

## Addizione

```zenscript
mods.exnihilocreatio.Ore. ddRecipe(String,
    String,
    @Optional IItemStack,
    @Optional Map<string, String>,
    @Optional String);

mods. xnihilocreatio.Ore.addRecipe("Pietra",
    "63452D",
    <ore:stone>. irstItem,
    {
    "en_au": "StoneDownUnder"
    },
    "Pietra");
```

## Rimozione

```zenscript
mods.exnihilocreatio.Ore.removeAll();
```