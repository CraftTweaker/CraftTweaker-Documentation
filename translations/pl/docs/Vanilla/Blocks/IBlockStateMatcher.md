# IBlockStateMatcher

Obiekt IBlockStateMatcher może być użyty do dopasowania obiektu [IBlockState](/Vanilla/Blocks/IBlockState/) do zestawu wymagań lub zestawu pasujących bloków.

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (np. rzutowanie [Array](/AdvancedFunctions/Arrays_and_Loops/) lub użycie statycznego `. reate()` ), więc lepiej być bezpiecznym niż przepraszamy i dodać import.  
`importuj crafttweaker.block.IBlockStateMatcher;`

## Dopasowanie konkretnego statusu IBlockState

Każdy [IBlockState](/Vanilla/Blocks/IBlockState/) jest również IBlockStateMatchem, który pasuje tylko do siebie.

## Dopasowanie dowolnego stanu bloku dla określonego bloku

Możesz użyć metody [IBlockState](/Vanilla/Blocks/IBlockState/) `dopasowania()` aby utworzyć IBlockStateMatchera pasującego do jakiegokolwiek możliwego stanu blokowania tego bloku.

## Calling an IBlockStateMatcher

Istnieje kilka metod, które zwracają IBlockStateMatcher

- Używanie `IBlockStateMatcher.create()`.
- Używanie metody `withMatchedValuesForProperty()` w innej metodzie IBlockStateMatcher.
- LUB dwóch punktów IBlockStateMatchers razem, aby uzyskać złożony mecz.
- Tworzenie [IBlockState](/Vanilla/Blocks/IBlockState/), ponieważ wszystkie obiekty IBlockState to IBlockStateMatchers.

## Złożone mecze

Gdy używasz OR (`|`) do połączenia IBlockStateMatchers, wynikowy IBlockStateMatcher nie jest już powiązany z jednym specyficznym blokiem podstawowym, jak ma to miejsce z [IBlockState](/Vanilla/Blocks/IBlockState/) lub IBlockStateMatchera utworzonego przy użyciu `IBlockStateMatcher. metoda reate()`. Zamiast tego dopasowanie dopasowuje każdy stan blokowania, który byłby dopasowany do jednego z kombinowanych meczów.

Ponieważ ten blok nie jest powiązany z określonym blokiem, nie jest możliwe użycie metody `withMatchedValuesForProperty()` , aby pobrać inną metodę IBlockStateMatcher.

### utwórz statyczne

`static IBlockStateMatcher create(IBlockState... blokowania);` Parametry:

- [IBlockState](/Vanilla/Blocks/IBlockState/)... blockStates → Zero lub więcej bloków do dopasowania z tym meczem. 

Zwraca IBlockStateMatchera aby pasować do określonych stanów bloków.

- Jeśli dostarczone zostaną zerowe `bloków` , ten mecz nigdy nie będzie odpowiadał żadnym blokom. 
- Jeśli tylko jeden blok jest dostarczony w `blokach`, wynikowy blok IBlockStateMatcher będzie pasował do *dowolnego* bloku bazowego IBlockState, z jakimikolwiek wartościami właściwości zaakceptowanymi jako pasujące. Metoda `withMatchedValuesForProperty` może być użyta do dodania bardziej szczegółowych wymagań dla właściwości. 
- Jeśli dostarczono wiele `bloków` wynikowy IBlockStateMatcher jest taki sam jak operator OR (`|`z każdym z dostarczonych IBlockStates

## Metody ZenMethods

### dopasowania

`dopasowanie logiczne (IBlockState blockState);`  
Parametry:

- [IBlockState](/Vanilla/Blocks/IBlockState/) BlockState → Obiekt blockstate do dopasowania

Zwraca wartość logiczną, która reprezentuje, czy stan blokady odpowiadał wymaganiom tego meczu.  
Możesz również użyć `A ma B` reprezentującego `A.matches(B)`.

### Uzyskaj lub dodaj dozwolone właściwości

*(Te metody są dozwolone tylko w instancjach niezłożonego IBlockStateMatcha)*

    IBlockStateMatcher withMatchedValuesForProperty(Nazwa ciągu, String... wartości);
    List<String> getMatchedValuesForProperty(Nazwa String);
    Mapa<String, List<String>> getMatchedProperties();
    

Parametry:

- Nazwa ciągu → Nazwa właściwości
- Ciąg znaków... wartości → Jedna lub więcej wartości, które może mieć właściwość dopasowania IBlockStatus.

Zwraca nowy IBlockStateMatcher z takimi samymi wymaganiami właściwości jak ten IBlockStateMatcher, z wyjątkiem określonej właściwości `name`, co pozwoli na dowolne z podanych `wartości` jako pasujące dane wejściowe.

### getMatchingBlockStates

`Collection<IBlockState> getMatchingBlockStates();` Zwraca kolekcję [IBlockStatus](/Vanilla/Blocks/IBlockState/) z dowolną kombinacją właściwości, które pasują do tego IBlockStateMatcher. Ta lista może zawierać stany blokowania, które nie są możliwe do przejęcia przez normalne metody rozgrywki. (Ex: `IBlockStateMatcher. reate(<blockstate:minecraft:log>)` zwróci IBlockStateMatchera pasującego do logów z właściwością `axis=no`, posiadające tekstury kory ze wszystkich 6 boków)

### Sprawdź, czy BlockState jest państwem złożonym

`izomery booleanowe ()`

To czego będziesz oczekiwać.

### Zdobądź reprezentację polecenia String

`Dowództwo ZenGetter`

Zwraca ciąg wyrażeń uchwytu nawiasu, jeśli to konieczne, sparowany z wywołaniami `withMatchedValueForProperty()` .  
Pamiętaj, że wywołania zwracane nie mają `""` wokół parametrów.  
Jeśli chcesz skopiować ten wynik, musisz dodać go ręcznie do argumentów!