# Tablice stowarzyszeniowe

Tablica stowarzyszona (czasami nazywana również mapą lub słownikiem) jest jak normalna [tablica](/AdvancedFunctions/Arrays_and_Loops/) w sposób, w jaki jest w stanie przechowywać wiele wpisów. W przeciwieństwie jednak do [tablic](/AdvancedFunctions/Arrays_and_Loops/) możesz wybrać typ indeksu, lub (nazywamy go w mapie), aby było!

## Deklaracja tablicy stowarzyszeniowej

Ogłaszasz tablice stowarzyszeń za pomocą nawiasów klamrowych `{}` i dwukropków `:`

```zenscript
val myAssocArray = {
    dirt : <minecraft:dirt>,
    gold : <minecraft:gold_ingot>
} jako IItemStack[string];
```

Przełamajmy to, prawda?

- `val myAssocArray =` standardowa deklaracja zmiennej
- `{` to jest tablica stowarzyszona, Sir!
- `ziemię: <minecraft:dirt>` mapujemy `<minecraft:dirt>` w ciągu `ziemia`
- `,` czekać, jest więcej do przyjrzenia
- `złot: <minecraft:gold_ingot>` mapujemy `<minecraft:gold_ingot>` w ciągu `złota`
- `}` znaleźliśmy się na końcu tablicy, Sir!
- `jako IItemStack[string];` jest to tablica stowarzyszeniowa, która używa ciągów jako indeksów i IItemStacks jako wartości.

OK, więc o czym muszę myśleć podczas ich używania?

- Możesz użyć każdego typu dostępnego dla Zenscript jako klucz lub wartość.
- Nie możesz używać zmiennych dla deklaracji kluczowej w deklaracji początkowej (takiej, która używa `{}`), jak czysty tekst jest interpretowany jako ciąg znaków!

## Odnosi się do elementów wewnątrz tablicy stowarzyszeniowej.

Odnosisz się do elementów w tablicy stowarzyszeniowej tak samo jak do elementów w normalnym [tablicy](/AdvancedFunctions/Arrays_and_Loops/):  
`tablicy[index]`  
Tym razem jest tylko różnica, niekoniecznie musisz używać liczby Integer jako indeksu, ale bez względu na typ który zadeklarowałeś swoją tablicę!

```zenscript
<br />walna ziemia = <minecraft:dirt>;
val assocArray = {
    <minecraft:dirt> : "This is me"
} jako ciąg[IItemStack];

//tablica[index]
print(assocArray[<minecraft:dirt>]);

//Możesz również użyć varaibles tutaj, o ile zmienna jest poprawna typu
print(assocArray[dirt]);
```

Jest jeden przypadek szczególny. jest to gdy używasz ciągów jako nieusuwalności:  
W tym przypadku możesz również użyć użytkownika Getter w następujący sposób:

```zenscript
val assocWithStrings = {
    //możesz użyć "" jeśli chcesz
    "jeden" : "1",

    //ale nie musisz
    dwa : "2"
} jako ciąg[string];

//Możesz użyć druku użytkownika Getter
(assocWithStrings. ne);

//Albo standardowy indeks Getter
print(assocWithStrings["dwa"]);
```

## Manipulacja przedmiotów wewnątrz tablicy stowarzyszeniowej

Podobnie jak w tablicach, możesz manipulować przedmiotami wewnątrz tablicy stowarzyszonej używając `tablicy[index] = nowej wartości`.  
Istnieje jedna zasadnicza różnica:  
Podczas gdy tablice mają stały rozmiar, mapy nie istnieją. Oznacza to, że zawsze możesz dodać wpis poprzez ustawienie indeksu, który wcześniej nie został ustawiony!

```zenscript
val changingArray = {
    <minecraft:dirt> : "this is me",
    <minecraft:gold_ingot> : "i nienawidzę go"
} jako ciąg znaków[IItemStack];

val gg = <minecraft:gold>;

//Nadpisuje wartość gold_ingot
changingArray[gg] = "i kocham to";

//dodaje nowy wpis
changingArray[<minecraft:grass>] = "Powod!";
```

## Pobieranie kluczy i wejść tablicy stowarzyszeniowej

Zestaw klawiszy jest tablicą zawierającą wszystkie klucze mapy.  
Zestaw wartości jest tablicą zawierającą wszystkie wartości mapy.  
EnrySet jest tablicą zawierającą wszystkie wpisy mapy (patrz poniżej).

```zenscript
myAssocArray.keySet //keySet
myAssocArray.keys //keySet
myAssocArray.values //valueSet
myAssocArray.valueSet //valueSet
myAssocArray.entrySet //entrySet
```

## Iteracja nad tablicą stowarzyszeniową

Są dwa Iteratory, które pozwalają Ci powtórzyć się nad Arrą Stowarzyszenia:

- Klucz-Iterator: Iterates nad kluczami, używa jednej zmiennej
- Klucz-wartość-Iterator: Iterates nad kluczami i wartościami, używa dwóch zmiennych

Dodajmy tablicę stowarzyszeniową, która przechowuje receptury rzemieślnicze, które mają zostać powtórzone:

- Klucze powinny być wyjściem wytwarzania jako [IItemStack](/Vanilla/Items/IItemStack/)
- Wartości powinny być składnikami tworzącymi jako [ISkładnik](/Vanilla/Variable_Types/IIngredient/)
- Użyjemy klucza-Iteratora, który jest zbudowany w następujący sposób: `dla klucza assocArray {doSth;}`
- Użyjemy również klucza-Iteratora, który jest zbudowany w ten sposób `dla klucza, wartości assocArray {doSth;}`

```zenscript
importuj crafttweaker.item.IItemStack;
zaimportuj crafttweaker.itemem. Składnik;

walowa ziemia = <minecraft:dirt>;
val recipeMapShaped = {
    <minecraft:grass> : [[dirt, brud, brud, brud, [brud, brud, brud],[brud, brud, brud, brudna]],
    <minecraft:gold_ingot> : [[dirt, ziemię, ziemię],[ziemię, <minecraft:gold_ingot>, brud],[ziemię, brud, brud, bruksa]]
} jako IIngredient[][][IItemStack]

recipeMapShaped[dirt] = [[dirt, ziemię],[ziemię, null, ziemię],[ziemię, ziemię, ziemię]];

//kluczem będzie trawa, goldIngot, ziemia
dla klucza w recepturze 
MapShaped {
    receptur. ddShaped(klucz, recipeMapShaped[key]);
}


//klucze będą trawą, złotą Sztabą, ziemią, wartości będą dla nich recepturami
na klucz, wartość w recepturze receptura {
    . ddShaped(klucz, wartość);
}
```

# Wpis ZenType

Wpis mapy składa się z klucza i wartości.  
Obecnie jedynym sposobem na uzyskanie takiego obiektu jest metoda entrySet mapy.

Możesz użyć pobierających do otrzymania `klucza` i `wartości`

```zenscript
//Zastąp mapę odniesieniem do istniejącej tablicy map/associative Array
val myEntry = map.entrySet[0];


myEntry.key; //Zwraca klucz wpisu.
myEntry.value; //Zwraca wartość wpisu.
```