# ILiquidStack

Płynny stack składa się z [definicji płynu](/Vanilla/Liquids/ILiquidDefinition/) oraz opcjonalnego znacznika i opcjonalnej wartości kwoty.

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (takie jak przesyłanie [Array](/AdvancedFunctions/Arrays_and_Loops/)), tak aby były bezpieczne niż przepraszamy i dodaj import.  
`zaimportuj crafttweaker.liquid.ILiquidStack;`

## Tworzenie ILiquidStack

ILiquidStack może być utworzony za pomocą [Obsługi wspornika płynów](/Vanilla/Brackets/Bracket_Liquid/)

```zenscript
//patrz uchwyt nawiasów do cieczy w celu uzyskania dalszych informacji
owalna lawa = <liquid:lava>;

//płyn. ithTag(Tag jako IData)
val lavaWithTag = <liquid:lava>. ithTag(DATA);

//płyn * ilość w milibucketach (-> 1000 = 1 wiadra)
val lavaWithAmount = <liquid:lava> * 1000;
```

## Uzyskaj właściwości płynu

Jako że ILiquidStack reprezentuje ciecz, z pewnością musi istnieć również sposób na odzyskanie właściwości płynu.  
Sprawdź tabelę, aby zobaczyć, co można pobrać z obiektu ILiquidStack za pomocą ZenGetters.

| Zengetter          | Co to jest?                                         | Typ zwrotu                                             | Przykład                                  |
| ------------------ | --------------------------------------------------- | ------------------------------------------------------ | ----------------------------------------- |
| Nazwa              | Zwraca niezlokalizowaną nazwę płynu                 | ciąg znaków                                            | `test = <liquid:lava>.name;`        |
| nazwa wyświetlacza | Zwraca zlokalizowaną nazwę płynu                    | ciąg znaków                                            | `test = <liquid:lava>.displayName;` |
| kwota              | Zwraca to kwotę ILiquidObject                       | odcień                                                 | `test = <liquid:lava>.amount;`      |
| luminancja         | Zwraca to oświetlenie badanej cieczy                | odcień                                                 | `test = <liquid:lava>.luminosity;`  |
| gęstość            | Zwraca to gęstość badanej cieczy                    | odcień                                                 | `test = <liquid:lava>.gęstość;`     |
| temperatura        | Zwraca to temperaturę podanej cieczy                | odcień                                                 | `test = <liquid:lava>.temperatura;` |
| lepkość            | Zwraca to lepkość wskazanej cieczy                  | odcień                                                 | `test = <liquid:lava>lepkość;`      |
| gazowe             | Zwraca to, czy wspomniana ciecz jest gazowa         | boolean                                                | `test = <liquid:lava>.gaseous;`     |
| znacznik           | Zwraca tag ILiquidObject                            | [IData](/Vanilla/Data/IData/)                          | `test = <liquid:lava>.tag;`         |
| definicja          | Zwraca to wymienioną definicję płynu (zob. poniżej) | [Definicja płynu](/Vanilla/Liquids/ILiquidDefinition/) | `test = <liquid:lava>.definiation;` |

# IIngredient Implementaion

Java Jargon: ILiquidStack implements IIngredient. Innymi słowy, wszystkie metody, które mogą być użyte w [Składnikach](/Vanilla/Variable_Types/IIngredient/) mogą być również używane w przypadku ILiquidStacks Patrz wpis IIngredient w celu uzyskania dalszych informacji na ten temat. Oto kilka szczególnych przypadków, ponieważ ciecze nie są przedmiotami

* Nie możesz oznaczyć ILiquidStacks, a otrzymasz zerową próbę pobrania znaku ILiquidStack
* .items zwraca pustą listę
* .itemArray zwraca pustą tablicę
* .ciecze zwracają tę ciecz jako ILiquidStack (dokładnie ten obiekt)
* LiquidStacks nie może mieć transformatorów i proś o transformatory zawsze zwraca fałsz
* LiquidStacks nie może mieć warunków (.only nie działa)
* Dopasowanie produktów zawsze zwraca fałsz