# Fabryka Vanilla

Vanilla Factory pozwala na tworzenie [bloków](/Mods/ContentTweaker/Vanilla/Creatable_Content/Block/), [Elementy](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) i [Karty twórcze](/Mods/ContentTweaker/Vanilla/Creatable_Content/Creative_Tab/) , które możesz następnie dodać do gry.

## Dzwonienie

Pakiet można znaleźć na `mods.contenttweaker.VanillaFactory`

## Tworzenie zawartości

### Utwórz bloki

```zenscript
mods.contenttweaker.VanillaFactory.createBlock(String unlocalizedName, Materiał IMaterialDefinition);
```

Parametry:

- String unlocalizedName: Niezlokalizowana nazwa Blocka.
- [Materiał IMaterialDefinition](/Mods/ContentTweaker/Vanilla/Types/Block/IMaterialDefinition/) : Materiał podstawowy, z którego wykonany jest blok.

Zwraca obiekt [BlockReprezentacja](/Mods/ContentTweaker/Vanilla/Creatable_Content/Block/). Sprawdź stronę [Blokuj](/Mods/ContentTweaker/Vanilla/Creatable_Content/Block/) po więcej informacji i przykładowy skrypt!

### Utwórz elementy

```zenscript
mods.contenttweaker.VanillaFactory.createItem(String unlocalizedName);
```

Parametry:

- String unlocalizedName: Niezlokalizowana nazwa produktu.

Zwraca obiekt [Reprezentacja przedmiotu](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/). Sprawdź [stronę elementu](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) , aby uzyskać więcej informacji i przykładowy skrypt!

### Utwórz karty

```zenscript
mods.contenttweaker.VanillaFactory.createCreativeTab(String unlocalizedName, IItemStack iItemStack);
mods.contenttweaker.VanillaFactory.createCreativeTab(String unlocalizedName, Item)
mods.contenttweaker.VanillaFactory.createCreativeTab(String unlocalizedName, BlockRepresentation iBlock);
mods.contenttweaker.VanillaFactory.createCreativeTab(String unlocalizedName, IItemStackSupplier supplier);
```

Parametry:

- Ciąg nielokalizowanyNazwa: Niezlokalizowana nazwa zakładki.
- Reprezentacja elementu lub bloku: Przedmiot lub blok, który ma być wyświetlany jako symbol karty. Alternatywnie możesz użyć funkcji [IItemStackSupplier](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemStackSupplier/).

Zwraca obiekt [ICreativeTab](/Mods/ContentTweaker/Vanilla/Creatable_Content/Creative_Tab/). Aby uzyskać więcej informacji, zapoznaj się z [kartą twórczą](/Mods/ContentTweaker/Vanilla/Creatable_Content/Creative_Tab/) i przykładowym skryptem!

### Utwórz płyny

```zenscript
mods.contenttweaker.VanillaFactory.createFluid(String unlocalizedName, int color);
mods.contenttweaker.VanillaFactory.createFluid(String unlocalizedName, kolor CTColor);
```

Parametry:

- String unlocalizedName: Niezlokalizowana nazwa płynu.
- int kolor: kod koloru płynu.
- [Kolor CTColor](/Mods/ContentTweaker/Vanilla/Types/Color/Color/) : Kolor płynu jako koloru.

Zwraca obiekt [płynne Reprezentacje](/Mods/ContentTweaker/Vanilla/Creatable_Content/Fluid/). Sprawdź [stronę płynną](/Mods/ContentTweaker/Vanilla/Creatable_Content/Fluid/) , aby uzyskać więcej informacji i przykładowy skrypt.

### Utwórz przedmioty jedzenia

```zenscript
mods.contenttweaker.VanillaFactory.createItemFood(String unlocalizedName, int healAmount);
```

Parametry:

- Ciąg nielokalizowanyNazwa: Niezlokalizowana nazwa produktu.
- int kwota uzdrowienia: Wartość Żywności

Zwraca obiekt [ItemFoodReprezentation](/Mods/ContentTweaker/Vanilla/Creatable_Content/ItemFood/). Sprawdź [stronę żywności](/Mods/ContentTweaker/Vanilla/Creatable_Content/ItemFood/) , aby uzyskać więcej informacji i przykładowy skrypt.