# ZenClasses

Przedstawiam to tutaj, więc tylko ci, którzy chcą wiedzieć co najmniej kilka rzeczy na temat ZS, znajdą to.

ZenClass jest zasadniczo klasą java, ale możesz ją zdefiniować z ZS.  
Jeśli uważasz, że "To nie pasuje do motywu języka skryptowego", masz rację.  
Właśnie dlatego tylko ci, którzy są w stanie się z nim bałagać, powinni to kiedykolwiek znaleźć.

## Słowa kluczowe

Są to słowa kluczowe, które można znaleźć w treści klasy i zainicjują określoną czynność, jak dodanie członka do klasy.

| Nazwisko       | Opis                                                                                                                                                       |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| zenClass       | Rozpoczyna nową klasę, po której musi być podana nazwa.                                                                                                    |
| zmienny/walny  | Tworzy zmienną instancji, użyto ostatniego słowa kluczowego.                                                                                               |
| statyczne      | Tworzy zmienną klasy (statyczną). Nie mogą być ostateczne.                                                                                                 |
| zenConstructor | Tworzy konstruktor dla klasy.                                                                                                                              |
| funkcja        | Tworzy metodę instancji. Nie ma sposobu na tworzenie metod statycznych, tak jak można to zrobić również poza klasą.                                        |
| to             | Odniesienie do obiektu, w którym obecnie znajdujemy. Wykorzystywane wyłącznie w metodach i konstruktorach. Używane jeśli parametr ukrywa pole, na przykład |

## Przykład

Komentowany przykład:

```zenscript
<br />//Tworzy klasę o nazwie 'name', możesz również uzyskać do niej dostęp za pomocą scripts.scriptPath.name


zenClass name {

    //Each variable needs a type set. 
    //Zmienne nie muszą być zainicjowane, ale jeśli to robisz, inicjalizacja jest taka jak w Java.


    //Statyki są inicjowane w <clinit>, tzn. kiedy klasa jest po raz pierwszy zdefiniowana.
    statyczne mistatyczne jako ciąg znaków = "wartość";
    statyczne otherStatyczne jako ciąg znaków = "wartość";

    //Jeśli instancja zmienna ma inicjatora, zostanie zainicjowana przed pierwszym połączeniem konstruktora.
    walny niestatyczny jako ciąg znaków = "123";

    //Jeśli zmienna instancji nie ma inicjatora, możesz ją zainicjować w konstruktorze w razie potrzeby, nawet jeśli jest ostateczny.
    niestatyczna Dwa jako łańcuch znaków


    //Konstruktor wymaga wszystkich parametrów (bezpośrednio wpisanych)
    zenConstructor(parametr jako ciąg znaków, parameter2 jako ciąg) {
        print("TETE");
        print(parameter);


        non-StaticTwo = parametr2;
    }


    //Możesz mieć kilku konstruktorów, ale nie ma możliwości krzewienia konstruktora.
    zenConstructor(parametr jako string) {
        print("FFFF");



    //Zaleca się wyraźne określenie typów zwrotów metody.
    function myMethod(arg as string, arg1 as string) jako ciąg {
        return "value" + arg ~ arg1;
    }

}



//Zadzwonisz do konstruktora wywołując klasę typu/nazwa
test var = nazwa("NOPE");
test = nazwa("nope", "noper");
print(test). yMethod("one", "dwa"));

print("");

//Możesz wywołać statyki używając wydruku klasy
(nazwa). yStatic);
print(nazwa("parameter1", "parameter2").non-Static);

val ttt = name("t");

//Możesz również wywołać statyki przy użyciu instancji klasy.
ttt.myStatic = "1";
print(ttt.myStatic);
```