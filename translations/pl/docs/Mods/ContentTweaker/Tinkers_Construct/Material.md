# Reprezentacja materiałowa

Reprezentacja materiału reprezentuje Materiał Konstrukcyjny Tinkera.  
Możesz uzyskać taki obiekt albo od [Budowniczego Material](/Mods/ContentTweaker/Tinkers_Construct/MaterialBuilder/) albo [Handler Material Bracket](/Mods/ContentTweaker/Tinkers_Construct/Brackets/Bracket_Material/).

## Importowanie klasy

Może być wymagane zaimportowanie klasy, jeśli napotkasz jakiekolwiek problemy (np. rzucenie [Array](/AdvancedFunctions/Arrays_and_Loops/)), tak aby były bezpieczne niż przepraszamy i dodaj import.  
`zaimportuj mods.contenttweaker.tconstruct.Material`

## ZenGetter

| ZenGetter  | Typ         |
| ---------- | ----------- |
| identifier | ciąg znaków |
| polecenie  | ciąg znaków |

## Dodawanie elementów materiału

Jeśli używasz podanego przedmiotu w konstruktorze części, możesz ustawić, ile punktów materiałowych nada lub ile przedmiotów zostanie naprawionych.

    //myMaterial.addItem(IIngredient item, @Optional(1) int amountNeeed, @Optional(144) int amountMatched));
    myMaterial.addItem(<item:minecraft:iron_pickaxe>);
    myMaterial.addItem(<item:minecraft:iron_block>, 4, 288);
    

- `element` to element, który jest dopasowany. Możesz użyć [Warunków Elementu](/Vanilla/Items/Item_Conditions/) , ale bez Transformatorów. 
- `wartość` to ilość elementów, które są dopasowane. Możesz podzielić je na wszystkie gniazda dostarczające narzędzia, co pozwala również przejść powyżej 64. W drugim przykładzie powyżej potrzeba dodatkowo 4 żelaznych bloków. Domyślnie do 1.
- `amountmatch` to ilość punktów materiałowych dodanych na `potrzebną ilość`. W drugim przykładzie powyżej cztery żelazne bloki dają dwa punkty materiałowe. Domyślnie do 144 (jedna wartość wejściowa/jednego materiału).

## Dodawanie cech materiału

Możesz dodać cechę do materiału.  
Wszystkie elementy wykonane z tego materiału będą miały tę cechę.  
Używa [Reprezentacji Cechy](/Mods/ContentTweaker/Tinkers_Construct/Trait/) lub String z identyfikatorem (zalecane), zwraca unieważnienie.  
Możesz również zapewnić ciąg zależności, spowoduje, że cecha będzie dostępna tylko dla niektórych typów części, takich jak np. głowy. Pominięcie tego parametru spowoduje wstrzyknięcie null, co spowoduje, że cecha będzie tylko w typie części, gdy nie ma innych nienull modyfikatorów zależności w tej części.

Warstwa tekstowa jest zalecana, ponieważ przez czas uruchomienia CoT większość cech nie jest jeszcze dostępna, a nawet przez czas uruchomienia CrT, nie wszystkie z nich zostały zainicjowane, ale jeśli używasz ciągów, dodanie materiałów jest odroczone do momentu, gdy są dostępne. Nadal nie jest to dowód błędu i nie ma łatwego sposobu sprawdzania typos, więc uważaj komunikaty o błędach mówiące o cechach, które nie zostały znalezione.

```zenscript
miMaterial.addCecha ("ogniska", "head");
miMaterial.addCecha(<ticontrait:fiery>);
```