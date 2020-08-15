# ZenMembri e ZenProperties

ZenMembers sono membri di ZenObject.  
Possono essere accessi utilizzando `object.member`. I membri possono essere regolabili, gettabili o entrambi.

## Scatole e impostatori

Ci sono due tipi di ZenGetters: ZenGetters e ZenMemberGetters.  
Qual è la differenza?

Normalmente usi `@ZenGetter(value)`, a meno che non si dispone di qualcosa che ha o molti membri che restituiscono lo stesso tipo o se non si conoscono i membri esatti.  
In questo caso è possibile utilizzare `@ZenMemberGetter`.  
Quindi qual è la differenza?

- Un metodo annotato con un `@ZenGetter(value)` non necessita di alcun parametro, mentre un Metodo annotato con `@ZenMemberGetter` ha bisogno di un argomento String che è il nome del membro.
- I MemberGetters sono eseguiti solo se non è stato trovato nessun altro getter
- Se hai solo bisogno di una piccola proprietà, dovresti usare `@ZenGetter(value)`

Lo stesso vale per ZenSetters/ZenMemberSetters.

## ZenProperty

Il `@ZenProperty` combina entrambi, `@ZenGetter(value)` e `@ZenSetter` in una sola annotazione.  
Questa annotazione può essere applicata solo ai campi pubblici (es. `nome della stringa pubblica`).

Questa annotazione può avere questi argomenti:

- `Valore stringa`: il nome della proprietà (in ZS chiamate object.value). Se omesso, viene utilizzato il nome del campo.
- `String getter`: il nome del metodo Getter corrispondente (che potrebbe non avere un annotazione ZenGetter ). 
    - Se non impostata o `""`utilizzerà 
        - `get + value` if the annotated field not a boolean
        - `è + valore` se il campo annotato è booleano o booleano
    - if `null`, it will not register a ZenSetter
- `String setter`: il nome del metodo Setter corrispondente (che potrebbe non avere una annotazione ZenSetter ). 
    - Se non impostato o `""`, userà `set + valore`
    - Se `null`, non registrerà un ZenSetter

Puoi anche omettere il metodo getter/setter tutti insieme se usi `@ZenProperty`.  
Se usi questi metodi, tuttavia, dovrai aggiungere `@ZenMethod` se desideri questa funzionalità, se si omettono i metodi, saranno generati automaticamente.

## Esempi

### Esempio Di ZenGetters

[ArtigianatoTweaker's IOreDict](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/oredict/IOreDict.java)

    @ZenClass("crafttweaker.oredict.IOreDict")
    @IterableSimple("crafttweaker.oredict. OreDictEntry")
    @ZenRegister
    public interface IOreDict extends Iterable<IOreDictEntry> {
    
    
        @ZenMemberGetter
        @ZenOperator(OperatorType. NDEXGET)
        @ZenMethod
        IOreDictEntry get(nome stringa);
    
        @ZenGetter("entries")
        List<IOreDictEntry> getEntries();
    
        @ZenOperator(OperatorType. ONTAINS)
        @ZenMethod
        booleano contiene(nome stringa);
    }
    

### Esempio Di ZenProperties

[ContentTweaker's MCAxisAlignedBB](https://github.com/The-Acronym-Coders/ContentTweaker/blob/develop/1.12/src/main/java/com/teamacronymcoders/contenttweaker/api/ctobjects/aabb/MCAxisAlignedBB.java)

    @ZenRegister
    @ZenClass("mods.contenttweaker.AxisAlignedBB")
    classe pubblica MCAxisAlignedBB implementa ICTObject<AxisAlignedBB> {
        @ZenProperty
        public double minX = 0.0;
    
    ...
    
        @ZenMethod
        public double getMinX() {
            return minX;
        }
    
        @ZenMethod
        public void setMinX(double minX) {
            this inX = minX;
        }
    
    ...
    
    }