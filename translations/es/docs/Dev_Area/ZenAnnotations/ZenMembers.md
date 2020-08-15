# ZenMembers y ZenProperties

ZenMembers son miembros de ZenObject.  
Pueden ser accedidos usando `object.member`. Los miembros pueden ser estables, o ambos.

## Obtenciones y ajustes

Hay dos tipos de ZenGetters: ZenGetters y ZenMemberGetters.  
¿Cuál es la diferencia?

Normalmente usas `@ZenGetter(value)`, a menos que tengas algo que tenga muchos miembros que devuelvan el mismo tipo o si no conoces a los miembros exactos tú mismo.  
En ese caso puedes usar `@ZenMemberGetter`.  
¿Cuál es la diferencia?

- Un método anotado con un `@ZenGetter(value)` no necesita ningún parámetro, mientras un método anotado con `@ZenMemberGetter` necesita un argumento de cadena que sea el nombre del miembro.
- MemberGetters sólo se ejecutan si no se encuentra ningún otro getter.
- Si solo necesita una propiedad pequeña, debe usar `@ZenGetter(value)`

Lo mismo se aplica a ZenSetters/ZenMemberSetters.

## Propiedad zenica

El `@ZenProperty` combina ambos, `@ZenGetter(value)` y `@ZenSetter` en una anotación.  
Esta anotación sólo se puede aplicar a campos públicos (por ejemplo, `nombre de cadena pública`).

Esta notación puede tener estos argumentos:

- `Valor de la cadena`: el nombre de la propiedad (en ZS se llama object.value). Si se omite, se utiliza el nombre del campo.
- `getter de cadena`: el nombre del método de Getter correspondiente (que puede no tener una anotación de ZenGetter). 
    - Si no se establece o `""`, se usará 
        - `obtener + valor` si el campo anotado no es un booleano
        - `es + valor` si el campo anotado es booleano o booleano
    - si `null`no registrará un ZenSetter
- `String setter`: el nombre del método de configuración correspondiente (que puede no tener una anotación de ZenSetter). 
    - Si no se establece o `""`, usará `establecer + valor`
    - Si `null`, no registrará un ZenSetter

Incluso puede omitir el método getter/setter si utiliza `@ZenProperty`.  
Si utiliza estos métodos, sin embargo, necesitará añadir `@ZenMethod` si desea esta funcionalidad, si omite los métodos, se generarán automáticamente.

## Ejemplos

### Ejemplo de ZenGetters

[IOreDict de CraftTweaker](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/oredict/IOreDict.java)

    @ZenClass("crafttweaker.oredict.IOreDict")
    @IterableSimple("crafttweaker.oredict. OreDictEntry")
    @ZenRegister
    public interface IOreDict extends Iterable<IOreDictEntry> {
    
    
        @ZenMemberGetter
        @ZenOperator(OperatorType. NDEXGET)
        @ZenMethod
        IOreDictEntry get(String name);
    
        @ZenGetter("entradas")
        Lista<IOreDictEntry> getEntries();
    
        @ZenOperator(OperatorType. ONTAINS)
        @ZenMethod
        contains booleanos (nombre de búsqueda);
    }
    

### Ejemplo de ZenProperties

[ContenidoTweaker MCAxisAlignedBB](https://github.com/The-Acronym-Coders/ContentTweaker/blob/develop/1.12/src/main/java/com/teamacronymcoders/contenttweaker/api/ctobjects/aabb/MCAxisAlignedBB.java)

    @ZenRegister
    @ZenClass("mods.contenttweaker.AxisAlignedBB")
    public class MCAxisAlignedBB implementa ICTObject<AxisAlignedBB> {
        @ZenProperty
        public double minX = 0.0;
    
    ...
    
        @ZenMethod
        public double getMinX() {
            return minX;
        }
    
        @ZenMethod
        public void setMinX(double minX) {
            esto. inX = minX;
        }
    
    ...
    
    }