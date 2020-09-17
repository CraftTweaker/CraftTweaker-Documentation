# IFacing

Interfejs IFacing pozwala na uzyskanie możliwych kierunków [IBlockPos'a](/Vanilla/World/IBlockPos/).

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakieś problemy, więc lepiej być bezpiecznym niż przepraszamy i dodać import.  
`zaimportuj crafttweaker.world.IFacing;`

## Liczby

Interfejs stojący na czoła składa się z 7 metod statycznych, z których każdy wraca ten kierunek.  
Ostatnia przyjmuje kierunek jako dane wejściowe ciągu (np. `"NORTH"`)

```zenscript
crafttweaker.world.Facing.north()
crafttweaker.world.Facing.east()
crafttweaker.world.Facing.south()
crafttweaker.world.Facing.west()
crafttweaker.world.Facing.down()
crafttweaker.world.Facing.up()


crafttweaker.world.Facing.fromString(nazwa string);
```

## ZenGetters/ZenMethods bez parametrów

| ZenGetter  | Metoda ZenMethod | Typ zwrotu  |
| ---------- | ---------------- | ----------- |
| Nazwa      | getName()        | ciąg znaków |
| rotateY    | rotateY()        | IFacing     |
| przeciwnie | odwrotna()       | IFacing     |

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