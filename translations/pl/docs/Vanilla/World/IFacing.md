# IFacing

Interfejs IFacing pozwala na uzyskanie możliwych kierunków [IBlockPos'a](/Vanilla/World/IBlockPos/).

## Importing the package

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakieś problemy, więc lepiej być bezpiecznym niż przepraszamy i dodać import.  
`zaimportuj crafttweaker.world.IFacing;`

## Enumerations

Interfejs frontu ma 6 metod statycznych, które zwracają ten kierunek.  
Posiada również jeden kierunek, który przyjmuje kierunek jako wejście ciągu (np. `"NORTH"`)

```zenscript
crafttweaker.world.IFacing.north()
crafttweaker.world.IFacing.east()
crafttweaker.world.IFacing.south()
crafttweaker.world.IFacing.west()
crafttweaker.world.IFacing.down()
crafttweaker.world.IFacing.up()


crafttweaker.world.IFacing.fromString(nazwa ciągu);
```

## ZenGetters/ZenMethods without parameters

| ZenGetter  | ZenMethod  | Return Type |
| ---------- | ---------- | ----------- |
| name       | getName()  | string      |
| rotateY    | rotateY()  | IFacing     |
| przeciwnie | odwrotna() | IFacing     |

## Inne metody

### Porównanie dwóch kierunków

Możesz porównać dwa kierunki za pomocą standaryzowanego porównywania Operatorów `== ! < > <= >=`  
Alternatywnie, możesz użyć funkcji, chociaż funkcja zwraca odcisk równy 0, jeśli jest równy.

```zenscript
//Zwraca true lub false
facingOne == facingDwa;

//Zwraca 0 jeśli są równe
facingOne.compare(facingDwa);
```