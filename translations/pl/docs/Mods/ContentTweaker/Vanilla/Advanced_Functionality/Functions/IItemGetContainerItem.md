# Element IItemGetContainerItem

Funkcja IItemGetContainerItem może być dodana do elementu [](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) i będzie uruchamiana za każdym razem, gdy element jest używany jako składnik.  
Jest używany do określenia, co pozostanie w polu rzemieślniczym, gdy przedmiot jest używany jako taki.  
Pomyśl o wiaderkach, na przykład: każde wypełnione wiadro ma puste wiadro jako kontener-Item, a gdy wypełnione wiadro zostanie stworzone, skończy się z pustym.  
Ta funkcja może być użyta do obliczenia kontenera Item, dzięki czemu możesz przejść szaleństwo z takimi rzeczami jak tagi NBT lub więcej.

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakieś problemy, więc lepiej być bezpiecznym niż przepraszamy i dodać import.  
`zaimportuj mods.contenttweaker.IItemGetContainerItem;`

## Parametry

Element IItemGetContainerItem jest funkcją o następujących parametrach:

- [IItemStack](/Vanilla/Items/IItemStack/) stos → Przedmiot.

Funkcja musi zwrócić nowy obiekt [IItemStack](/Vanilla/Items/IItemStack/) lub null, jeśli przedmiot nie powinien pozostawać za nim.