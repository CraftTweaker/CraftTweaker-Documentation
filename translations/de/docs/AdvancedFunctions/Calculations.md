# Calculations

Leider kann man nicht immer einfach nur Zahlen eingeben. Manchmal muss man auch mal was berechnen.  
Denk dran: Man kann in Berechnungen auch mehr als zwei Zahlen gleichzeitig benutzen: `1+1+1+1`

## Ein kleiner Tipp

Wenn du bei Berechnungen komische Ergebnisse bekommst, ist es gut möglich, dass du zwei verschiedene Datentypen verwendet hast.  
Beispiel: `13 % 6.5` gibt 1 zurück, obwohl eigentlich 0 richtig wäre. Wieso? Weil ZenScript seine Berechnungen immer mit zwei Variablen des selben Typs durchführt. In diesem Fall gleicht er den Typ der zweiten Zahl dem Typ der ersten an. In diesem Fall wurde das Ergebnis von `13 % 6` berechnet, da die zweite Nummer vom Datentyp Double (Kommazahl) in Integer (Ganzzahl) umgewandelt wurde.

Sei bei solchen Berechnungen immer vorsichtig und lass dir die Ergebnisse auch mal durch die print-Funktion ausgeben, damit du die Richtigkeit bestätigen kannst.

## Artihmetische Operatoren

I'm pretty sure all of you know these already, don't you?

| Token | Tokenassign | Function       | Example |
| ----- | ----------- | -------------- | ------- |
| `+`   | `+=`        | Addition       | 1+2     |
| `-`   | `-=`        | Substraction   | 2-1     |
| `*`   | `*=`        | Multiplication | 1*1     |
| `/`   | `/=`        | Division       | 2/2     |
| `%`   | `%=`        | Modulo         | 13 % 6  |

## Concatenation

Puts one thing at the and of the other

    //prints "Hello World"
    print("Hello" ~ " " ~ "World");
    

## Calculation results

A calculation usually ends up with a result. So what to do with that?

### Assigning a variable

There are two ways of assigning a value to a variable:

    var test = 0;
    
    //Option 1:
    //assigns test with the value 3 (1+2)
    test = 1+2;
    
    //Option 2:
    //assigns test with 5 (3+2)
    test = test + 2;
    
    //Option 3:
    //assigns test with 2 (5-3)
    test -= 3;
    

Option 1 and 2 assign the return variable using the `=` token.  
This is probably the easiest way for beginners and the only way if you want to assign a variable not used in the calculation.

Option 3 assigns the variable before the `-=` with the result of a normal subtraction.  
All Operators on on this page have their respective assign tokens, check the table above.

### Using the result otherwise

You can always use the result of a calculation in a function or a conditional statement:

    //prints 4
    print(3+1);
    
    //removes the item on array[4]
    recipes.remove(array[3+1]);
    
    //
    if(3+1 == 2*2) {print("Used a calculation!")}