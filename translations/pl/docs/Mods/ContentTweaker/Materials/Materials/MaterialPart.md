# Część Materiałowa

Obiekt MaterialPart jest, jak nazwa sugeruje kombinację [Material](/Mods/ContentTweaker/Materials/Materials/Material/) i [Część](/Mods/ContentTweaker/Materials/Parts/Part/), takie jak `platynowe narzędzie`.

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakieś problemy, więc lepiej być bezpiecznym niż przepraszamy i dodać import.  
`zaimportuj mods.contenttweaker.MaterialPart;`

## Pobieranie takiego obiektu

Istnieje kilka sposobów podrabiania takiego obiektu, zarówno w formie listy, jak i pojedynczego obiektu.

Pojedynczy obiekt:

- Używanie [Material Part Bracket Handler](/Mods/ContentTweaker/Materials/Brackets/Bracket_MaterialPart/)
- Używanie [Material's](/Mods/ContentTweaker/Materials/Materials/Material/) registerPart Method
- Używanie [Part's](/Mods/ContentTweaker/Materials/Parts/Part/) registerToMaterial Method

Lista:

- Używanie [MaterialSystem's](/Mods/ContentTweaker/Materials/MaterialSystem/) registerPartsForMaterial Method
- Używanie metody rejestru [Material's](/Mods/ContentTweaker/Materials/Materials/Material/)
- Używanie metody registerToMaterials [część](/Mods/ContentTweaker/Materials/Parts/Part/)

## Pola dodatkowe

Możesz pobrać następujące informacje z MaterialPart:

| Metoda ZenMethod     | Typ zwrotu                                                                      |
| -------------------- | ------------------------------------------------------------------------------- |
| getName()            | ciąg znaków                                                                     |
| getLocalizedName()   | ciąg znaków                                                                     |
| hasEffect()          | boolean                                                                         |
| hasOverlay()         | boolean                                                                         |
| getMaterial()        | [IMateriał](/Mods/ContentTweaker/Materials/Materials/Material/)                 |
| getPart()            | [IPart](/Mods/ContentTweaker/Materials/Parts/Part/)                             |
| getItemStack()       | [IItemStack](/Vanilla/Items/IItemStack/)                                        |
| getTextureLocation() | ciąg znaków                                                                     |
| getCTColor()         | [Kolor](/Mods/ContentTweaker/Vanilla/Types/Color/Color/)                        |
| getColor()           | odcień                                                                          |
| isColorized()        | boolean                                                                         |
| getData()            | [IMaterialPartData](/Mods/ContentTweaker/Materials/Materials/MaterialPartData/) |

Możesz również ustawić następujące informacje o MaterialPart:

| Metoda ZenMethod                    | Parametr              | Opis                                                                                                           |
| ----------------------------------- | --------------------- | -------------------------------------------------------------------------------------------------------------- |
| setColorized(koloryzowane)          | koloryzowany boolean  | Ustawia kod koloru produktu                                                                                    |
| setTextureLocation(textureLocation) | Tring textureLocation | Ustawia ścieżkę tekstur elementu. Na przykład, jeśli chcesz, aby jedno narzędzie wyglądało inaczej niż reszta. |