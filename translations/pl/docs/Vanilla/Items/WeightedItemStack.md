# Ważony Stos Przedmiotów

Ważony stos przedmiotów jest jak normalny [IItemStack](/Vanilla/Items/IItemStack/) , ale ma do niego dodany procent.  
Zwykle używasz ich, gdy zajmujesz się działaniami opartymi na procentach, takimi jak krople lub drugorzędne wyjście.

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (takie jak przesyłanie [Array](/AdvancedFunctions/Arrays_and_Loops/)), tak aby były bezpieczne niż przepraszamy i dodaj import.  
`zaimportuj crafttweaker.item.WeweightedItemStack;`

## Wywołanie ważonego ItemStack

Możesz uzyskać ważony ObjeStack z [IItemStack](/Vanilla/Items/IItemStack/) za pomocą operatora modulo lub funkcji wagowej.

```zenscript
walny stos przedmiotów = <minecraft:dirt>;

//oba tworzą obiekt o wadze przedmiotu z szansą 20%
val wItemStack = itemStack % 20;
val wItemStack2 = itemStack. osiem (0,2);
```

## ZenGetters

| ZenGetter | Co to robi                                           | Typ zwrotu                               |
| --------- | ---------------------------------------------------- | ---------------------------------------- |
| stos      | Zwraca powiązany itemStack                           | [IItemStack](/Vanilla/Items/IItemStack/) |
| szansa    | Zwraca szansę stosu jako ułamek dziesiętny (np. 0.2) | zmiennoprzecinkowe                       |
| procent   | Zwraca szansę stosu jako procent (np. 20.0)          | zmiennoprzecinkowe                       |