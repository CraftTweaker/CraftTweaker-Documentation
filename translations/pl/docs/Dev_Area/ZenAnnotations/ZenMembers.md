# ZenCzłonkowie i ZenProperties

Członkowie ZenObject są członkami ZenObject.  
Mogą mieć dostęp za pomocą `object.member`. Członkowie mogą być zadawalającymi, zyskownymi lub obojgami.

## Getters and Setters

Istnieją dwa typy ZenGetterów: ZenGetters i ZenMemberGetters.  
Więc jaka jest różnica?

Zwykle używasz `@ZenGetter(value)`, chyba że masz coś, co ma wielu członków, którzy zwracają ten sam typ lub jeśli nie znasz dokładnych członków.  
W takim przypadku możesz użyć `@ZenMemberGetter`.  
Więc jaka jest różnica?

- Metoda opatrzona adnotacją `@ZenGetter(value)` nie wymaga żadnych parametrów, podczas gdy metoda opatrzona adnotacją `@ZenMemberGetter` potrzebuje argumentu String który jest nazwą użytkownika.
- Członkostwo Getters jest wykonywane tylko wtedy, gdy nie znaleziono innego getta.
- Jeśli potrzebujesz tylko jednej małej właściwości, powinieneś użyć `@ZenGetter(value)`

To samo dotyczy ZenSetters/ZenMemberSetters.

## Właściwość ZenProperty

`@ZenProperty` łączy oba elementy, `@ZenGetter(value)` i `@ZenSetter` w jednej adnotacji.  
Ta adnotacja może być zastosowana tylko do pól publicznych (np. `public String name`).

Ta adnotacja może zawierać następujące argumenty:

- `Wartość ciągu`: nazwa własności (w ZS, którą nazywasz object.value). W przypadku pominięcia nazwa pola jest używana.
- `Pobierający ciąg`: nazwa odpowiedniej metody Getter (która może nie posiadać adnotacji ZenGetter). 
    - Jeśli nie ustawione lub `""`, użyje 
        - `get + value` jeśli pole adnotacji nie jest wartością logiczną
        - `jest + wartość` jeśli adnotacja jest logiczna lub logiczna
    - jeśli `null`, nie zarejestruje ZenSetter
- `String setter`: nazwa odpowiedniej metody ustawiania (która może nie posiadać adnotacji ZenSetter). 
    - Jeśli nie ustawisz lub `""`, użyje `ustaw + wartość`
    - Jeśli `null`, nie zarejestruje ZenSetter

Możesz nawet pominąć metodę getter/setter razem, jeśli używasz `@ZenProperty`.  
Jeśli jednak używasz tych metod, musisz dodać `@ZenMethod` , jeśli chcesz tę funkcjonalność, jeśli opuścisz metody, zostaną one wygenerowane automatycznie.

## Przykłady

### Przykład ZenGetters

[IOreDict CraftTweakera](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/oredict/IOreDict.java)

    @ZenClass("crafttweaker.oredict.IOreDict")
    @IterableSimple("crafttweaker.oredict. OreDictEntry")
    @ZenRegister
    publiczny interfejs IOreDict extends Iterable<IOreDictEntry> {
    
    
        @ZenMemberGetter
        @ZenOperator(OperatorType. NDEXGET)
        @ZenMethod
        IOreDictEntry get(nazwa ciągu);
    
        @ZenGetter("entries")
        Lista<IOreDictEntry> getEntries();
    
        @ZenOperator(OperatorType. ONTAINS)
        @ZenMethod
        zawiera: (nazwa ciągu);
    }
    

### Przykład właściwości ZenWłaściwości

[MCAxisAlignedBB](https://github.com/The-Acronym-Coders/ContentTweaker/blob/develop/1.12/src/main/java/com/teamacronymcoders/contenttweaker/api/ctobjects/aabb/MCAxisAlignedBB.java)

    @ZenRegister
    @ZenClass("mods.contenttweaker.AxisAlignedBB")
    klasa publiczna MCAxisAlignedBB imimplementuje ICTObject<AxisAlignedBB> {
        @ZenProperty
        public double minX = 0,0;
    
    ...
    
        @ZenMethod
        public double getMinX() {
            return minX;
        }
    
        @ZenMethod
        publiczna unieważnienie setMinX(double minX) {
            to. inX = minX;
        }
    
    ...
    
    }