# Flaga IMobilityFlaga

Interfejs IMobilityFlg pozwala uzyskać [IBlockState](/Vanilla/Blocks/IBlockState/) możliwe flagi mobilności.

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakieś problemy, więc lepiej być bezpiecznym niż przepraszamy i dodać import.  
`zaimportuj crafttweaker.block.IMobilityFlag;`

## Metody ZenMethods

#### Mecze

Możesz sprawdzić, czy dwa obiekty IMobilityFlg są równe:  
Zwraca bool.

```zenscript
flagOne.matches(inne);
```

## Liczby

Interfejs MobilityFlg ma 5 metod statycznych, każdy zwraca dany obiekt IMobilityFlg.

```zenscript
crafttweaker.block.MobilityFlag.normal()
crafttweaker.block.MobilityFlag.destroy()
crafttweaker.block.MobilityFlag.block()
crafttweaker.block.MobilityFlag.ignore()
crafttweaker.block.MobilityFlag.pushly()
```