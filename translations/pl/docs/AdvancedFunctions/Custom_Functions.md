# Funkcje niestandardowe

Czasami funkcje dostarczane przez CT i dodatki po prostu tego nie robią. Oto jak napisać własne funkcje! Możesz nawet zagnieżdżać funkcje w funkcjach

## Podstawowa składnia

Zasadniczo deklaruje się statyczne użycie:

```zenscript
funkcja NAZWA ([arguments[as type]]) [as returnType]{
    [Statements]
    [return VALUE]
}
```

Elementy w nawiasach są opcjonalne, w zależności od tego, co chcesz osiągnąć. Przyjrzyjmy się bliżej konkretnym funkcjom.

## Funkcje statyczne

Funkcje statyczne są tworzone przed uruchomieniem skryptu i mogą być dostępne z dowolnego miejsca w skrypcie.  
Możesz mieć dostęp nawet do funkcji zadeklarowanych poza skryptem za pomocą [międzyskryptów](/AdvancedFunctions/Cross-Script_Reference).

### Unieważnienie funkcji

Unieważnione funkcje to funkcje, które nie zwrócą żadnej wartości.

```zenscript
//wywołuje funkcję tens() bez argumentów
tens();

//wywołuje funkcję RealTens() za pomocą String "Hello World!" jako argumentu
RealTens("Witaj światu! );


//crates function tens() bez wymaganych argumentów
function tens(){
    //Ccall function realTens() z "" jako argumentem
    RealTens("");
}


//tworzy funkcję RealTens() z jednym ciągiem wymaganym jako argument
funkcja RealTens(a jako string){
    //drukuje argument 10 razy
    dla i in 1 do 11{
        print(a);
    }
}
```

### Funkcje zwrotne

Możesz również określić wartość, która powinna być zwrócona przez funkcję. Zaleca się użycie słowa kluczowego `jako` do zdefiniowania typu zwrotu.

```zenscript
//wywołania dodają funkcję z 1 i 99 jako parametry
wynik owalny = add(1,99);
print(wynik);

//możesz umieścić funkcję dodawania również wewnątrz funkcji drukowania
print(add(2,64));

//definiuje dodatek funkcji() z a i b jako parametry (oba ustawione jako liczby całkowite! i ustawia zwracany typ na Integer
dodatek funkcji (jako int, jako int{
    //zwraca sumę a i b
    zwraca a+b;
}
```

## Funkcje jako zmienne

Możesz również używać funkcji takich jak zmienne. W takim przypadku będą one tworzone jako oddzielne klasy. Other than that, they work pretty much the same as static functions, you call them by their variable name.  
You can even use them as [global variables](/AdvancedFunctions/Global_Static_Variables/) this way.

Jeśli chcesz rzucić metodę (tak jak w przypadku globalności), możesz użyć:

    dodawanie globalne jako funkcja(int, int)int = funkcja (a int, b as int) jako int {
        zwraca a + b;
    };
    
    print(addition(1,2));