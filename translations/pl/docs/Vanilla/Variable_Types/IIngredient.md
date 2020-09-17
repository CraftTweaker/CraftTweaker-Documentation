# Składnik

ISkładnik jest składnikiem do receptur.  
To może być [element](/Vanilla/Items/IItemStack/), [wpis słownika rudy](/Vanilla/OreDict/IOreDictEntry/), [płynny](/Vanilla/Liquids/ILiquidStack/) i wiele więcej.

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (takie jak przesyłanie [Array](/AdvancedFunctions/Arrays_and_Loops/)), tak aby były bezpieczne niż przepraszamy i dodaj import.  
`zaimportuj crafttweaker.item.IIngredient;`

## Importowanie pakietu IIngredient

Zazwyczaj nie będziesz tego potrzebować, ale w niektórych przypadkach przepisy nie będą działać, dopóki [zaimportujesz](/AdvancedFunctions/Import/) pakiet IIngredient.  
Możesz to zrobić używając następującego importu:

```zenscript
importuj crafttweaker.item.ISkładnik;
```

## Funkcje

Co więc możemy z tym zrobić?

### String poleceń

Ciąg poleceń polega na tym, jak nazwać ten element w ZS.  
To może być uchwyt nawiasów lub coś podobnego.

```zenscript
owalny element = <minecraft:iron_ingot>;

//wydruk "<minecraft:iron_ingot>"
(item.commandString);
```

### Oznacz

Możesz oznaczyć IIngredient, aby później móc go użyć w [funkcjach tworzenia](/Vanilla/Recipes/Crafting/Recipe_Functions/). Możesz również pobrać znak zastosowany wcześniej.

```zenscript
//Zaznacza wybór za pomocą Ciągu
//item.marked(nazwa) <-- Nazwa jest ciągiem!
val markedPick = <minecraft:diamond_pickaxe>.marked("Picky");

//printts "icky"
print(markedPick.mark);
```

### Kwota

Jeśli chcesz użyć więcej niż jednego z danych przedmiotów, możesz ustawić ilość na IIngredient.  
Jest to tak proste, jak mnożenie ISkładnika przez liczbę całkowitą.  
Pobieranie tej ilości jest również możliwe.

```zenscript
owalne wielokrotne jabłka = <minecraft:apple> * 3;

//druk 3
(multipleApples.amount);
```

### OR-ing ISkładnika

Czasami chcesz albo IIngredient X albo Y, ale nie chcesz tworzyć receptury na każdą możliwość? Dlatego też istnieje metoda LUB dla składników

```zenscript
pozycja walna1 = <minecraft:apple>;
pozycja walna2 = <minecraft:carrot>;

sztuka = pozycja 1 | pozycja 2;
sztuka2 = pozycja 1.or(pozycja 2);
```

### Uzyskaj możliwe przedmioty lub płyny

Czasami ISkładnik reprezentuje więcej niż jeden przedmiot, na przykład jeśli używasz [OreDictEntry](/Vanilla/OreDict/IOreDictEntry/) lub jeśli OR-ed dwa składniki.  
Możesz uzyskać wszystkie możliwe elementy dla tego ISkładnika jako listy<[IItemStack](/Vanilla/Items/IItemStack/)> Lista przy użyciu pierwszej funkcji.  
Druga funkcja robi to samo co pierwsza funkcja, ale zwraca [IItemStack](/Vanilla/Items/IItemStack/)[] zamiast listy. To samo dotyczy płynów w trzeciej funkcji, tylko zwracają listę [ILiquidStack](/Vanilla/Liquids/ILiquidStack/).

```zenscript
//Zwraca listę IItemStack
//możliwe przedmioty: wszystkie sztabki żelaza i sztaby złota z MC
walny element Składnik = <ore:ingotIron> | <minecraft:gold_ingot>;


//Zwraca listę ILiquidStack |
//możliwe płyny: lawa i woda
walny składnik = <liquid:lava> | <liquid:water>;


dla produktu w elementach. tems{
    //Wydrukuje nazwę wyświetlaną każdego elementu
    print(element. isplayName);
}

dla przedmiotu w itemsIngredient.itemArray{
    //Drukuje nazwę wyświetlaną każdego z możliwych przedmiotów
    print(element. isplayName);
}

dla płynu w płynieSkładniku. iquids{
    //Wydrukuje każdą możliwą nazwę wyświetlaną płynu
    druk (płyn. isplayName);
}

dla płynu w <minecraft:water_bucket>.liquids {
    //Wydrukuje zawarty w nim płyn, tj. wodę.
    //Nie może jednak działać dla każdego przedmiotu.
    print(płyn.displayName);
}
```

### Przekształć ISkładnik przy wytwarzaniu

Czasami chcesz, aby przedmiot nie był zużywany przy wytwarzaniu, ale zamiast tego otrzymuje uszkodzenie lub zwrot zupełnie innego przedmiotu.  
Oto na czym są Transformatory przedmiotu.

```zenscript
<br />Towar walny = <minecraft:apple>;

//Przedmiot nie zostanie zużyty i pozostanie w siatki
przekształceniePrzedmiot = przedmiot. euse();

//Przedmiot nie zostanie zużyty, a cały stos zostanie Ci odesłany (robi /give).
transformedItem = item.giveBack();

//element zostanie zużyty, ale poda ci określony stos (gniazdo rzemieślnicze zostanie wyczyszczony!).
element transformacji = element. iveBack(<minecraft:potato>);

//przedmiot zostanie zastąpiony określonym przedmiotem, który zamiast tego przejdzie do transformacji
przedmiot = przedmiot. ransformReplace(<minecraft:potato>);

//uszkodza przedmiot przez 1
transformedItem = element. ransformDamage();

//uszkodza element o podanej wartości
transformedItem = item.transformDamage(3);

//element zostanie zużyty, bez względu na to co się stanie.
transformedItem = item.noReturn();

//Powoduje zużycie wielu elementów.
Element transformedItem = item.transformConsume(3);
```

### Warunki składników

Czasami chcesz, aby twój składnik miał określony tag lub działał tylko wtedy, gdy (nie) uszkodzony. Te warunki mogą być dodawane do składników za pomocą następującego wzoru:

```zenscript
Wal przedmiot = <minecraft:apple>;

//Przedmiot będzie akceptowany tylko z co najmniej 1 punktowym obrażeniem
Warunkowy przedmiot = przedmiot. nlyDamaged();

//Przedmiot będzie akceptowany tylko z określonymi punktami obrażeń
conditionedItem = przedmiot. nlyDamageAtLeast(10);

//Przedmiot będzie akceptowany tylko z określonymi punktami obrażeń
warunkowyPrzedmiot = przedmiot. nlyDamageAtMost(100);

//Element będzie akceptowany tylko z punktami obrażeń większymi lub równymi jak pierwsza lub mniejsza niż druga liczba całkowita.
conditionedItem = item.onlyDamageBetween(10,100);

//Przedmiot będzie akceptowany tylko z podanym tagiem. Element może mieć więcej/inne tagi niż określone, są one ignorowane podczas zaznaczania.
//Jeśli chcesz, aby JEI pokazał tag na ekranie receptury, musisz dodać tag używając "withTag(tag)"
conditionedItem = element. nlyWithTag({display: {Name: "Tomato"}});

//Przedmiot będzie akceptowany tylko z podanym tagiem. Element może mieć więcej/inne tagi niż określone, są one ignorowane podczas zaznaczania.
//Uwaga: To może nie działać ze wszystkimi składnikami, ale będzie działać dla przedmiotów. Używanie tej strony pro jest takie, że JEI pokaże tagi w recepturze!
conditionedItem = item.withTag({display: {name: "Tomato"}});

//Przedmiot będzie akceptowany tylko wtedy, gdy w stosie jest co najmniej określona kwota. Większość stosowana w połączeniu z transformatorem konsumpcyjnym.
//Zauważ, że jeśli to dodasz, nadal zużywa tylko jeden przedmiot na sztukę.
Element warunkowy = pozycja.onlyStack(32);
```

### Dopasowanie

Jeśli chcesz sprawdzić, czy IItemStack odpowiada Twojemu IIngredient możesz użyć metody meczu. To zwróci wartość logiczną. Jeśli IIngredient reprezentuje płyn, sprawdza, czy przedmiot jest ważnym pojemnikiem na ten płyn.

```zenscript
print(<ore:ingotIron>.matches(<minecraft:iron_ingot>));
print(<ore:ingotIron>.matchesExact(<minecraft:iron_ingot>));
```

Możesz również dopasować dwa obiekty IIngredient, w którym to przypadku musisz użyć ```w``` operator:

```zenscript
wal wlewki = <minecraft:iron_ingot> | <minecraft:gold_ingot>;
Wal oreIngot = <ore:ingotIron>;
Wal ingotGold = <minecraft:gold_ingot>;

//true gdy sztabki składnika mają <minecraft:gold_ingot>
sztabki ze sztabką sztabki;

//false ponieważ <minecraft:iron_ingot> nie można znaleźć w <ore:ingotGold>
oreIngot ma sztaby
```