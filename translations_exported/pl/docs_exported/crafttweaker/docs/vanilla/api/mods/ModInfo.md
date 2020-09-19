# ModInfo

Zatrzymuje informacje o załadowanym modze

Ta klasa została dodana przez moda z mod-id `crafttweaker`. Więc musisz zainstalować tę modyfikację, jeśli chcesz używać tej funkcji.

## Importowanie klasy
Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (np. rzucanie tablicy), tak aby były bezpieczne niż przepraszamy i dodaj import.
```zenscript
crafttweaker.api.mods.ModInfo
```

## Właściwości

| Nazwisko           | Typ                                                                                                 | Posiada Getter | Ma ustawienie |
| ------------------ | --------------------------------------------------------------------------------------------------- | -------------- | ------------- |
| bloki              | Lista&lt;[crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)&gt;              | prawda         | fałszywy      |
| nazwa wyświetlacza | Ciąg znaków                                                                                         | prawda         | fałszywy      |
| typy podmiotów     | Lista&lt;[crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)&gt; | prawda         | fałszywy      |
| płyny              | Lista&lt;[crafttweaker.api.fluid.MCFluid](/vanilla/api/fluid/MCFluid)&gt;               | prawda         | fałszywy      |
| elementy           | Lista&lt;[crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)&gt;          | prawda         | fałszywy      |
| modid              | Ciąg znaków                                                                                         | prawda         | fałszywy      |
| przestrzeń nazw    | Ciąg znaków                                                                                         | prawda         | fałszywy      |
| wersja             | Ciąg znaków                                                                                         | prawda         | fałszywy      |

