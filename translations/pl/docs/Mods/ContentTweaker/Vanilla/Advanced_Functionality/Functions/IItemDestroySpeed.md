# Prędkość Zniszczenia II

Funkcja IItemDestroySpeed może być dodana do elementu [](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) i określi prędkość blokowania elementu.

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakieś problemy, więc lepiej być bezpiecznym niż przepraszamy i dodać import.  
`zaimportuj mods.contenttweaker.IItemDestroySpeed;`

## Parametry

IItemDestroySpeed jest funkcją o następujących parametrach:

- [IMutableItemStack](/Mods/ContentTweaker/Vanilla/Types/Item/IMutableItemStack/) mutableItemStack → Przedmiot.
- [ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) BlockState → Stan bloku, który jest wydobywany.

Funkcja musi zwracać wartość zmiennej.