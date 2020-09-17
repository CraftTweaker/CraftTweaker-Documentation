# PartDataPiece

Część danych może zostać dodana do [PartType](/Mods/ContentTweaker/Materials/Parts/PartType/) , aby móc dodać trochę [MaterialPartData](/Mods/ContentTweaker/Materials/Materials/MaterialPartData/) do [MaterialPartData](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) utworzonych z [Części](/Mods/ContentTweaker/Materials/Parts/Part/) , które są z tego [PartType](/Mods/ContentTweaker/Materials/Parts/PartType/).

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakieś problemy, więc lepiej być bezpiecznym niż przepraszamy i dodać import.  
`zaimportuj mods.contenttweaker.PartDataPiece;`

## Pobieranie takiego obiektu

Możesz uzyskać listę [Części](/Mods/ContentTweaker/Materials/Parts/Part/) DataPietów używając `getData()` w [Część](/Mods/ContentTweaker/Materials/Parts/Part/).

Alternatywnie, możesz zarejestrować nowy PartDataPiece za pomocą [MaterialSystem](/Mods/ContentTweaker/Materials/MaterialSystem/):

```zenscript
mods.contenttweaker.MaterialSystem.createPartDataPiece(Nazwa ciągu, wymagana wartość logiczna)
```

Parametry:

- Nazwa ciągu: Nazwa nowego PartDataPiece
- Wymagane wartości logiczne: Czy PartDataPiece musi być obecny na [MaterialPart](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) w celu rejestracji?

## Metody ZenMethods

Możesz pobrać następujące informacje z PartType:

| Metoda ZenMethod | Typ zwrotu  |
| ---------------- | ----------- |
| getName()        | ciąg znaków |
| isRequired()     | ciąg znaków |