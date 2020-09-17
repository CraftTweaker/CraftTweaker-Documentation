# Pozycja 3f

Pozycja w Minecraft składa się z 3 wartości: x, y i z.  
Obiekt Position3f przechowuje pozycję używając tych trzech wartości.

## Importowanie pakietu

Może być wymagane dla [zaimportowanie](/AdvancedFunctions/Import/) pakietu, jeśli napotkasz jakiekolwiek problemy (takie jak przesłanie [tablicy](/AdvancedFunctions/Arrays_and_Loops/)), tak aby były bezpieczne niż przepraszamy i dodaj import.  
`zaimportuj crafttweaker.util.Position3f;`

## Pobieranie obiektu Position3f

Możesz otrzymać taki obiekt za pomocą:

- `pozycja` ZenGetter na obiekcie [IPlayer](/Vanilla/Players/IPlayer/)
- Poniżej konstruktor Position3f
- [IBlockPos](/Vanilla/World/IBlockPos/) Position3f caster.

## Konstruktor pozycji 3f

Możesz samodzielnie utworzyć obiekt Position3f używając następującej metody:

```zenscript
crafttweaker.util.Position3f.create(float x, float y, float z);
```

Pierwsza metoda pozwala na utworzenie pozycji na podanych współrzędnych.

## ZenGetters i ZenSetters

| ZenGetter | ZenSetter | Opis                     |
| --------- | --------- | ------------------------ |
| x         | x         | Zwraca wartość x pozycji |
| y         | y         | Zwraca wartość y pozycji |
| z         | z         | Zwraca wartość z pozycji |

## Przesyłanie jako IBlockPos

Możesz użyć dwóch poniższych sposobów, aby wysłać obiekt Position3f do obiektu [IBlockPos](/Vanilla/World/IBlockPos/) : Pamiętaj, aby przesyłać musisz [zaimportować](/AdvancedFunctions/Import/) typ, do którego chcesz przesyłać, chyba że używasz pełnej nazwy.

```zenscript
posThree.asBlockPos();
posTrzej jako IBlockPos;
```