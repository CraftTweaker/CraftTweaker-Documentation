# MCToolType

A Tooltype is used to identify what kind of blocks a tool can mine, or inversely, what kind of tool is required to mine a given block.

This class was added by a mod with mod-id `contenttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
mods.contenttweaker.item.MCToolType
```

## Implemented Interfaces
MCToolType implements the following interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Constructors
Constructs a ToolType object. If one with the given name already exists, they will internally point to the same toolType. Otherwise, a new one with the name is created (The same holds true for Brackets as well!)
```zenscript
new mods.contenttweaker.item.MCToolType(name as String);
new mods.contenttweaker.item.MCToolType("pickaxe");
```
| Parámetro | Tipo   | Descripción         |
| --------- | ------ | ------------------- |
| nombre    | Cadena | The name to be used |



## Métodos
### getName

Gets the name of this toolType. The name is what is used in the Bracket expression after the `<tooltype:`

Return type: String

```zenscript
<tooltype:pickaxe>.getName();
```

### hashCode

Returns the object's hash code

Return type: int

```zenscript
<tooltype:pickaxe>.hashCode();
```

### toString

Get the string representation of this type. Is different from commandString!

Return type: String

```zenscript
<tooltype:pickaxe>.toString();
```


## Propiedades

| Nombre        | Tipo   | Has Getter | Has Setter |
| ------------- | ------ | ---------- | ---------- |
| commandString | Cadena | verdad     | falso      |
| nombre        | Cadena | verdad     | falso      |

## Operadores
### IGUALES

Compares if two given MCToolType objects are equal

```zenscript
<tooltype:pickaxe> == o as Object
<tooltype:pickaxe> == new MCToolType("pickaxe")
```

| Parámetro | Tipo   | Descripción      |
| --------- | ------ | ---------------- |
| o         | Object | The other object |

## Casters

| Result type | Is Implicit |
| ----------- | ----------- |
| Cadena      | falso       |

