# Kompaktowa

## Pakiet

`Komparator`

Komputer obsługuje 4 typy modyfikatorów:

    Mint
    naciśnij
    Pamięć
    Narzędzie
    

## Migdały

Modyfikator mennicy zmienia przepisy zarejestrowane na mapie receptury `COIN` w rozszerzeniu termicznym.

Zauważ, że te przepisy wymagają Pasa Numerycznego.

### Dodanie

```zenscript
mods.thermalexpansion.Compactor.addMintRecipe(wyjście IItemStack, IItemStack wejście, int energy);

mods.thermalexpansion.Compactor.addMintRecipe(<minecraft:sand>, <minecraft:stick>, 1500);
```

### Usuwanie

```zenscript
mods.thermalexpansion.Compactor.removeMintRecipe(IItemStack);

mods.thermalexpansion.Compactor.removeMintRecipe(<thermalfoundation:material:167>);
```

## Naciśnij

Modyfikator prasowy zmienia przepisy niezarejestrowane na `PLATE`, `COIN`lub `GEAR` mapy receptury w rozszerzeniu termicznym.

Te przepisy nie wymagają konkretnego sierpnia.

### Dodanie

```zenscript
mods.thermalexpansion.Compactor.addPressRecipe(wyjście IItemStack, IItemStack, energia int);

mods.thermalexpansion.Compactor.addPressRecipe(<minecraft:sand>, <minecraft:apple>, 1500);
```

### Usuwanie

```zenscript
mods.thermalexpansion.Compactor.removePressRecipe(IItemStack);

mods.thermalexpansion.Compactor.removePressRecipe(<thermalfoundation:material:167>);
```

## Pamięć

Modyfikator pamięci zmienia przepisy zarejestrowane na mapie receptury `PLATE` w rozszerzeniu termicznym.

Przepisy te nie wymagają konkretnego sierpnia, i wydaje się, że są stosowane tylko do płyt.

### Dodanie

```zenscript
mods.thermalexpansion.Compactor.addStorageRecipe(wyjście IItemStack, IItemStack wejście, int energy);

mods.thermalexpansion.Compactor.addStorageRecipe(<minecraft:sand>, <minecraft:arrow>, 1500);
```

### Usuwanie

```zenscript
mods.thermalexpansion.Compactor.removeStorageRecipe(wejście IItemStack);

mods.thermalexpansion.Compactor.removeStorageRecipe(<thermalfoundation:material:167>);
```

## Narzędzia połowowe

Modyfikator narzędzi zmienia przepisy zarejestrowane na mapie receptury `GEAR` w rozszerzeniu termicznym.

Zauważ, że te przepisy wymagają Przyspieszenia Wyposażenia.

### Dodanie

```zenscript
mods.thermalexpansion.Compactor.addGearRecipe(wyjście IItemStack, IItemStack wejście, int energy);

mods.thermalexpansion.Compactor.addGearRecipe(<minecraft:sand>, <minecraft:arrow>, 1500);
```

### Usuwanie

```zenscript
mods.thermalexpansion.Compactor.removeGearRecipe(IItemStack);

mods.thermalexpansion.Compactor.removeGearRecipe(<thermalfoundation:material:167>);
```