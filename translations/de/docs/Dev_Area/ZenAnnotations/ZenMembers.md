# ZenMembers und ZenProperties

ZenMembers sind Mitglieder eines ZenObjects.  
Sie können Zugriff haben mit `object.member`. Mitglieder können feststellbar sein oder beides.

## Getter und Setter

Es gibt zwei Arten von ZenGetters: ZenGetters und ZenMemberGetters.  
Was ist der Unterschied?

Normalerweise benutzst du `@ZenGetter(Wert)`, es sei denn, Sie haben etwas, das entweder viele Mitglieder hat, die den gleichen Typ zurückgeben, oder wenn Sie die genauen Mitglieder nicht selbst kennen.  
In diesem Fall können Sie `@ZenMemberGetter`verwenden.  
Was ist der Unterschied?

- Eine Methode, die mit einem `@ZenGetter(Wert)` kommentiert wird, benötigt keine Parameter, während eine Methode mit `@ZenMemberGetter` ein String-Argument benötigt, das der Name des Mitglieds ist.
- MemberGetters werden nur ausgeführt, wenn kein anderer Getter gefunden wird.
- Wenn Sie nur eine kleine Eigenschaft benötigen, sollten Sie `@ZenGetter(Wert)` verwenden

Dasselbe gilt für ZenSetters/ZenMemberSetters.

## ZenEigenschaft

Das `@ZenProperty` kombiniert beides, `@ZenGetter(Wert)` und `@ZenSetter` in einer Anmerkung.  
Diese Anmerkung kann nur auf öffentliche Felder angewendet werden (z.B. `öffentlicher String Name`).

Diese Anmerkung kann folgende Argumente enthalten:

- `String Wert`: der Eigenschaftsname (in ZS nennen Sie object.value). Wenn nicht angegeben wird, wird der Feldname verwendet.
- `String Getter`: der Name der entsprechenden Getter-Methode (die möglicherweise keine ZenGetter-Annotation hat). 
    - Wenn nicht gesetzt oder `""`, wird verwendet 
        - `erhalte + Wert` wenn das kommentierte Feld kein boolesche Feld ist
        - `ist + Wert` wenn das kommentierte Feld boolesch oder boolesch ist
    - wenn `null`, wird es keinen ZenSetter registrieren
- `String setter`: der Name der zugehörigen Setter-Methode (die möglicherweise keine ZenSetter-Annotation hat). 
    - Wenn nicht gesetzt oder `""`, wird `gesetzt + Wert` verwendet
    - Wenn `null`, wird kein ZenSetter registriert

Sie können sogar die Getter/Setter-Methode komplett weglassen, wenn Sie `@ZenProperty`verwenden.  
Wenn Sie diese Methoden verwenden, müssen Sie `@ZenMethod` hinzufügen, wenn Sie diese Funktion haben möchten wenn Sie die Methoden weglassen, werden sie automatisch generiert.

## Beispiele

### ZenGetters Beispiel

[CraftTweakers IOreDict](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/oredict/IOreDict.java)

    @ZenClass("crafttweaker.oredict.IOreDict")
    @IterableSimple("crafttweaker.oredict. OreDictEntry")
    @ZenRegister
    public interface IOreDict extends Iterable<IOreDictEntry> {
    
    
        @ZenMemberGetter
        @ZenOperator(OperatorType. NDEXGET)
        @ZenMethod
        IOreDictEntry get(String name);
    
        @ZenGetter("Einträge")
        Liste<IOreDictEntry> getEntries();
    
        @ZenOperator(OperatorType. ONTAINS)
        @ZenMethod
        boolesche enthalten(Stringname);
    }
    

### ZenProperties Beispiel

[ContentTweakers MCAxisAusrichten BB](https://github.com/The-Acronym-Coders/ContentTweaker/blob/develop/1.12/src/main/java/com/teamacronymcoders/contenttweaker/api/ctobjects/aabb/MCAxisAlignedBB.java)

    @ZenRegister
    @ZenClass("mods.contenttweaker.AxisAlignedBB")
    public class MCAxisAlignedBB implementiert ICTObject<AxisAlignedBB> {
        @ZenProperty
        public double minX = 0.0;
    
    ...
    
        @ZenMethod
        public double getMinX() {
            return minX;
        }
    
        @ZenMethod
        public void setMinX(double minX) {
            dies. inX = minX;
        }
    
    ...
    
    }