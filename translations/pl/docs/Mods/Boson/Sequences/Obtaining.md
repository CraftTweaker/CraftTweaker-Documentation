# Uzyskanie `sekwencji`s

## Przegląd
Uzyskanie `sekwencji` jest procesem dwuetapowym: najpierw należy uzyskać odniesienie do konstruktora sekwencji właściwego typu, następnie powołanie się konstruktora poprzez przekazanie listy elementów danego typu lub gotowej tablicy danego typu zakończy proces budowy.

Niektóre integracje CraftTweaker mogą również stanowić sposób na uzyskanie `sekwencji` bezpośrednio lub za pomocą metody. W tym nie ma potrzeby wywoływania konstruktora. Z drugiej strony, ogólny typ nie zostanie określony jednoznacznie, wymagając od użytkownika sporządzenia notatki umysłowej typu zwrotu.

## Krok 1: Konstruktor
Odwoływanie się do konstruktora `Sekwencja` odbywa się za pomocą specjalnego uchwytu nawiasu, który ma następującą składnię:

```zenscript
<sequence:CLASSNAME>
```

W powyższym fragmentze `CLASSNAME` reprezentuje krótką lub w pełni kwalifikowaną nazwę klasy, dla której ta sekwencja będzie ogólna. W prostszych słowach, które określą, jaki typ elementów sekwencji będzie mógł przechowywać , gdy konstruktor zostanie wywołany.

Proszę wziąć pod uwagę następujące dwa przykłady:

```zenscript
<sequence:IItemStack> # 1
<sequence:crafttweaker.item.IIngredient> # 2
```

Wyrażenie sekwencji oznaczone `# 1` zwróci odniesienie do konstruktora dla sekwencji, która będzie mogła zatrzymać wystąpienia `IItemStack`. Zauważ, że wymaga to zaimportowania klasy w bieżącym skrypcie aby działać.

Wyrażenie sekwencji oznaczone `# 2` zwróci odniesienie do konstruktora dla sekwencji, która będzie mogła trzymać dowolny typ `IIngredient`, co oznacza, że zaakceptuje `IItemStack`s, ale także `IOreDictEntr`lub inne niestandardowe `IIngredient`.

**WAŻNE:** Ten początkowy typ wpłynie tylko na bieżący typ sekwencji. Zawsze możliwe jest zmiana typu zapisanego w tej sekwencji później za pomocą `sekwencji`wywołań konwersji typu -typ, np. `mapa`. Więcej informacji jest dostępnych w [dokumentacji klasy](/Mods/Boson/Sequences/Docs/).

## Krok 2: Wywołanie Konstruktora
Ponieważ uchwyty nawiasów nie wywołują konstruktora, ale odwołują się do niego, teraz konieczne jest bezpośrednie wywołanie konstruktora . Można to zrobić za pomocą normalnej składni wywołania, z wyjątkiem tego, że jest ona wykonywana przez uchwyt nawiasów a nie nazwę metody.

Konstruktorem sekwencji jest warar, co oznacza, że może zaakceptować dowolną ilość argumentów, tak długo, jak są one rodzajowym typem podanym w odwołaniu konstruktora. Np. obsługa nawiasów `<sequence:IItemStack>` nie będzie w stanie zaakceptować `<ore:ingotCopper>` w konstruktorze, ponieważ `IOreDictEntry` nie jest `IItemStack`.

Nie jest możliwe przedstawienie konstruktorowi żadnych argumentów, w którym to przypadku sekwencja będzie pusta.

Możliwe jest również przedstawienie samej tablicy lub odniesienia do tablicy, w formie metody lub zmiennej. W tym przypadku tablica będzie akceptowana tylko wtedy, gdy typ pasuje do `CLASSNAME[]`, gdzie `CLASSNAME` jest nazwą typu obiektów w sekwencji. Zauważ, że to zachowanie **może wymagać** flagi eksperymentalnej, aby było włączone. Zobacz [Eksperymentalne flagi preprocesor](/Mods/Boson/Preprocessor/Exp/) , aby uzyskać więcej informacji.

Poniżej znajduje się fragment kodu, który pokazuje, w jaki sposób powyższe są stosowane w kodzie.

```zenscript
val emptySequence = <sequence:string>();
val sequenceWithStacks = <sequence:IItemStack>(<minecraft:iron_ingot>, <minecraft:gold_nugget>, <minecraft:apple>);
sekwencji cyfryOfcipes = <sequence:ICraftingRecipe>(przepisy. ll); # wymaga podania -Esao
```

## Co dalej?
Teraz, gdy `Sekwencja` została zbudowana, zapoznaj się z [dokumentacją klasy](/Mods/Boson/Sequences/Docs/) aby uzyskać listę obsługiwanych metod.
