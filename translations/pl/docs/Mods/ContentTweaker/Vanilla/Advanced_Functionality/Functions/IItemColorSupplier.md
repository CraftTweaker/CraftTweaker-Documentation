# IItemColorSupplier

Funkcja IItemColorSupplier może być użyta do dostarczenia [Color Object](/Mods/ContentTweaker/Vanilla/Types/Color/Color/) dla wszystkich.

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakieś problemy, więc lepiej być bezpiecznym niż przepraszamy i dodać import.  
`zaimportuj mods.contenttweaker.IItemColorSupplier;`

## Parametry

Funkcja IItemColorSupplier jest funkcją z następującymi parametrami.

- [IItemStack](/Vanilla/Items/IItemStack/) itemStack → element, którego kolor jest żądany.
- int tintIndex → indeks odcienia, użyj tego, jakkolwiek chcesz. Funkcja musi zwracać obiekt koloru [](/Mods/ContentTweaker/Vanilla/Types/Color/Color/).