# Materiał

Materiał jest tym, z czego składa się przedmiot, na przykład Platyna.

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakieś problemy, więc lepiej być bezpiecznym niż przepraszamy i dodać import.  
`zaimportuj mods.contenttweaker.Material;`

## Pobieranie takiego obiektu

Możesz pobrać istniejący materiał za pomocą [MaterialSystem](/Mods/ContentTweaker/Materials/MaterialSystem/) lub utworzyć całkowicie nowy za pomocą [Material Builder](/Mods/ContentTweaker/Materials/Materials/Material_Builder/)

## Pola dodatkowe

Możesz pobrać następujące informacje z materiału:

| Metoda ZenMethod     | Typ zwrotu  | Opis                                     |
| -------------------- | ----------- | ---------------------------------------- |
| getName()            | ciąg znaków | Zwraca nazwę materiału                   |
| getColor()           | odcień      | Zwraca kolor materiału                   |
| isHasEffect()        | boolean     | Zwraca, jeśli materiał ma efekt świecący |
| getUnlocalizedName() | ciąg znaków | Zwraca niezlokalizowaną nazwę materiału  |

## Zarejestruj [Części materiałowe](/Mods/ContentTweaker/Materials/Materials/MaterialPart/)

Możesz zarejestrować części używając [części obiektu](/Mods/ContentTweaker/Materials/Parts/Part/) lub jego nazwę.  
Możesz również zarejestrować pojedynczą część lub wielokrotną jednocześnie.  
Więc masz łącznie 4 opcje:

```zenscript
Parts(String[] partNames);
registerParts(IPart[] partss);


registerPart(String partName);
registerPart(part IPart);
```

The registerPart Methods zwraca pojedynczy obiekt [MaterialPart](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) .  
The registerParts Methods zwraca listę [MaterialPart](/Mods/ContentTweaker/Materials/Materials/MaterialPart/).