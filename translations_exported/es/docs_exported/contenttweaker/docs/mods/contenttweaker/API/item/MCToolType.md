# MCToolType

Un tipo de herramienta se utiliza para identificar qué tipo de bloques puede minar una herramienta, o inversamente, qué tipo de herramienta es necesaria para minar un bloque determinado.

Esta clase fue añadida por un mod con mod-id `contenttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
mods.contenttweaker.item.MCToolType
```

## Interfaces implementadas
MCToolType implementa las siguientes interfaces. Esto significa que cualquier método disponible también puede ser usado en esta clase.
- [crafttweaker.api.brackets.CommandStringMostrar](/vanilla/api/brackets/CommandStringDisplayable)

## Constructores
Construye un objeto ToolType. Si uno con el nombre dado ya existe, apuntará internamente al mismo tipo de herramienta. De lo contrario, se crea uno nuevo con el nombre (¡Lo mismo es válido para los Brackets también!)
```zenscript
new mods.contenttweaker.item.MCToolType(name as String);
new mods.contenttweaker.item.MCToolType("pickaxe");
```
| Parámetro | Tipo   | Descripción      |
| --------- | ------ | ---------------- |
| nombre    | Cadena | El nombre a usar |



## Métodos
### getName

Obtiene el nombre de este tipo de herramientas. El nombre es lo que se utiliza en la expresión de corchetes después del `<tipo de herramienta:`

Tipo de retorno: Cadena

```zenscript
<tooltype:pickaxe>.getName();
```

### hashCode

Devuelve el código hash del objeto

Tipo de retorno: int

```zenscript
<tooltype:pickaxe>.hashCode();
```

### toString

Obtener la representación de cadena de este tipo. ¡Es diferente de commandString!

Tipo de retorno: Cadena

```zenscript
<tooltype:pickaxe>.toString();
```


## Propiedades

| Nombre        | Tipo   | Tiene Obtén | Tiene Setter |
| ------------- | ------ | ----------- | ------------ |
| commandString | Cadena | verdad      | falso        |
| nombre        | Cadena | verdad      | falso        |

## Operadores
### IGUALES

Evalúa si dos objetos MCToolType son iguales

```zenscript
<tooltype:pickaxe> == o como objeto
<tooltype:pickaxe> == nuevo MCToolType("pickaxe")
```

| Parámetro | Tipo   | Descripción    |
| --------- | ------ | -------------- |
| o         | Objeto | El otro objeto |

## Casters

| Tipo de resultado | Es implícito |
| ----------------- | ------------ |
| Cadena            | falso        |

