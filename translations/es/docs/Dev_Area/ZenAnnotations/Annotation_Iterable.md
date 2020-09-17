# Iterable

La IterableAnnotation se puede aplicar a una clase para permitir a ZS Iterando sobre ella.  
Hay tres tipos de IterableAnnotations:

- `@IterableSimple` (necesita implementar `Iterable`)
- `@IterableList` (necesita implementar `Lista`)
- `@IterableMap` (necesita implementar `Mapa`)

## Ejemplo

[IOreDict de CraftTweaker](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/oredict/IOreDict.java)

```java
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
```

[MCOreDict (implementación)](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-MC1120-Main/src/main/java/crafttweaker/mc1120/oredict/MCOreDict.java)

```java
    @Override
    public Iterator<IOreDictEntry> iterator() {
        return Arrays.asList(OreDictionary.getOreNames())
                .stream()
                .map(CraftTweakerMC::getOreDict)
                .iterator();

}
```

## ¿Cómo sería útil esto en ZS?

```zenscript
for oreDictEntry in oreDict {
    print(oreDictEntry.name);
}
```

## Qué clases se pueden anotar || Información adicional

Puede anotar todas las clases que implementen la interfaz requerida.  
Debe proporcionar un valor de cadena que se refiere al nombre de clase de ZenScript [Iterado.](/Dev_Area/ZenAnnotations/Annotation_ZenClass/).