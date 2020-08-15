# Akcja IBlock'a

Funkcja IBlockAction może być dodana do [Block](/Mods/ContentTweaker/Vanilla/Creatable_Content/Block/) oraz w zależności od miejsca, w którym go dodałeś, zostanie uruchomiony po umieszczeniu lub uszkodzeniu bloku.

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakieś problemy, więc lepiej być bezpiecznym niż przepraszamy i dodać import.  
`zaimportuj mods.contenttweaker.IBlockAction;`

## Parametry

IBlockAction jest funkcją z następującymi parametrami:

- [Świat](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) - Świat → Świat, w którym blok jest w
- [Pozycja IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) → Pozycja Bloku
- [ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) Stan → Zawiera informacje o bloku, takie jak blok i jego metadane

Funkcja nie ma wartości zwrotnej!

## Przykład

```zenscript
zsBlock.onBlockBreak = function(Świat, BloPos, BloState){
    print("I WAS PLACED!!!");
}
```