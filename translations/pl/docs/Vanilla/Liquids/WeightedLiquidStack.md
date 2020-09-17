# WażonyLiquidStack

Ważony stos płynny jest jak normalny [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) , ale ma do niego dodany procent.  
Zwykle używasz ich, gdy zajmujesz się działaniami opartymi na procentach, takimi jak krople lub drugorzędne wyjście.

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (takie jak przesyłanie [Array](/AdvancedFunctions/Arrays_and_Loops/)), tak aby były bezpieczne niż przepraszamy i dodaj import.  
`zaimportuj crafttweaker.item.WeightedLiquidStack;`

## Wywołanie ważonegoLiquidStack

Możesz uzyskać ważonąLiquidStack z [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) za pomocą operatora modulo lub jego funkcji.

```zenscript
walny stos płynny = <liquid:lava>;

//oba tworzą obiekt ważonyPłynny z szansą na 20%
walny stos płynny = % stos płynny 20;
val wLiquidStack2 = liquidStack. osiem (0,2);
```

## ZenGetters

| ZenGetter | Co to robi                                           | Typ zwrotu                                     |
| --------- | ---------------------------------------------------- | ---------------------------------------------- |
| stos      | Zwraca powiązany LiquidStack                         | [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) |
| szansa    | Zwraca szansę stosu jako ułamek dziesiętny (np. 0.2) | zmiennoprzecinkowe                             |
| procent   | Zwraca szansę stosu jako procent (np. 20.0)          | zmiennoprzecinkowe                             |