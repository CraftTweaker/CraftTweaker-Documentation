# Stan IBlocka

Obiekt IBlockState reprezentuje aktualny stan bloku.

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakieś problemy, więc lepiej być bezpiecznym niż przepraszamy i dodać import.  
`zaimportuj crafttweaker.block.IBlockState`

## Wywołanie IBlockState

Istnieje kilka metod, które zwracają IBlockState

- Używanie [Obsługi nawiasów](/Vanilla/Brackets/Bracket_BlockState/) `<blockstate:minecraft:log:variant=spruce>`
- Używanie metody statycznej `IBlockState.getBlockState()`. (Więcej informacji znajduje się poniżej)
- Używając metody `getMatchingBlockStates()` na obiekcie [IBlockStateMatcher](/Vanilla/Blocks/IBlockStateMatcher/) do pobrania tablicy stanów IBlockStates.
- Używanie metody `withProperty()` na innym obiekcie IBlockState.

## Rozwiązywanie stanu IBlockState przy uruchomieniu

Mogą istnieć czasy, w których twój skrypt może polegać na interakcji z blokiem z modyfikacji, która nie została jeszcze załadowana, takie jak wewnętrzne zdarzenia bloku w ContentTweaker lub inny preinit loader skryptu. Jeśli spróbujesz użyć [Handler nawiasów](/Vanilla/Brackets/Bracket_BlockState/) dla bloku, który nie został jeszcze zarejestrowany, obsługa nie rozwiąże się, a twój skrypt nie zadziała.

Aby tego uniknąć, możesz użyć metody statycznej `IBlockState.getBlockState()` , aby rozwiązać IBlockState w czasie uruchomienia.

### statyczny stan getBlockState

`statyczny status IBlockState (nazwa blokowania ciągu, string... Właściwości)` Parametry:

- Nazwa blokady ciągu → Ciąg znaków w formacie "modid:blockname", który pojawiłby się w [Handler blockState Bracket](/Vanilla/Brackets/Bracket_BlockState/)
- Ciąg znaków... Właściwości → Zero lub więcej ciągów znaków `"name=value"` par właściwości do zastosowania do tego bloku. Jakiekolwiek nieokreślone właściwości będą używać tej samej wartości, co w domyślnym stanie blokady dla określonej nazwy bloku.

Zwraca IBlockState o podanej `nazwie bloku` o określonych `właściwościach`lub domyślnym stanie blokowania, jeśli nie określono żadnych właściwości.

## Rozszerzenie właściwości IBlockProperties

IBlockState rozszerza [właściwości IBlockProperties](/Vanilla/Blocks/IBlockProperties/). Oznacza to, że wszystkie metody dostępne dla obiektów [IBlockProperties](/Vanilla/Blocks/IBlockProperties/) są również dostępne dla obiektów IBlockStatus.

## Rozszerzenie IBlockStateMatcher

IBlockState rozszerza [IBlockStateMatcher](/Vanilla/Blocks/IBlockStateMatcher/). Oznacza to, że wszystkie metody dostępne dla obiektów [IBlockStateMatcher](/Vanilla/Blocks/IBlockStateMatcher/) są również dostępne dla obiektów IBlockState

## ZenMethods i ZenGetters

| ZenGetter | Typ zwrotu                        | Opis                                                                                    |
| --------- | --------------------------------- | --------------------------------------------------------------------------------------- |
| blok      | [IBlock](/Vanilla/Blocks/IBlock/) | Zwraca blok                                                                             |
| meta      | odcień                            | Zwraca metadane bloku                                                                   |
| polecenie | ciąg znaków                       | Zwraca możliwy [Obsługa nawiasów](/Vanilla/Brackets/Bracket_BlockState/) dla tego stanu |

## Metody ZenMethods

### można wymienić

`boolean isReplaceable(IWorld Świat, IBlockPos pos);`  
Parametry:

- [Świat](/Vanilla/World/IWorld/) - Świat → Świat do zaznaczenia w
- [IBlockPos](/Vanilla/World/IBlockPos/) pop → Pozycja Block'a

Zwraca wartość logiczną, która sais, czy blok może być zastąpiony czy nie.

### Uzyskiwanie lub zmiana właściwości

Możesz uzyskać listę wszystkich zarejestrowanych właściwości, albo jako lista z wszystkimi nazwami właściwości albo jako mapa, która mapuje właściwości do ich wartości.  
Możesz również sprawdzić, które wartości są możliwe dla danej nazwy właściwości.  
Możesz również użyć `withProperty` , aby utworzyć nowy obiekt IBlockState z tą właściwością zmienioną.

```zenscript
Lista<String> getPropertyNames();
String getPropertyValue(nazwa ciągu);
List<String> getAllowedValuesForProperty(nazwa ciągu);

IBlockState withProperty(Nazwa ciągu, wartość ciągu);
```

### Porównywanie dwóch obiektów IBlockState

Możesz użyć `int compare(IBlockState inne);` lub ZenCompare Tokens `==` `!=`.  
Zwrot różnych typów:

- `state.compare(other)` zwraca int równy 0, jeśli są równe
- `state == other` zwraca prawdziwy bool, który jest taki sam

### Uzyskanie wyraźnego dopasowania stanu bloków

Zwraca [IBlockStateMatcher](/Vanilla/Blocks/IBlockStateMatcher/) , który pasuje do danego bloku.

```zenscript
BlockStateMatchBlock();
```