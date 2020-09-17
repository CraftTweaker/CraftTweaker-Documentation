# MCItemGroup

Un grupo de artículos (a.k.a. Tabla creativa) es un grupo de elementos basados en la categoría.

Esta clase fue añadida por un mod con mod-id `contenttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
mods.contenttweaker.item.MCItemGroup
```

## Interfaces implementadas
MCItemGroup implementa las siguientes interfaces. Esto significa que cualquier método disponible también puede ser usado en esta clase.
- [crafttweaker.api.brackets.Mostrar cadena](/vanilla/api/brackets/CommandStringDisplayable)

## Métodos
### getPath

Obtiene la ruta del grupo de elementos. La ruta es lo que utiliza en la Expresión de corchetes después de la `<grupo de artículos:` parte.

Tipo de retorno: Cadena

```zenscript
<itemgroup:misc>.getPath();
```

### nombre de imagen de fondo

Establece el nombre de la imagen del Fondo que se utiliza para esta pestaña en el menú creativo Devuelve: `Este objeto para encadenar`

Tipo de retorno: [mods.contenttweaker.item.MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup)

```zenscript
<itemgroup:misc>.setBackgroundImageName(textura como cadena);
```

| Parámetro | Tipo   | Descripción       |
| --------- | ------ | ----------------- |
| textura   | Cadena | La textura a usar |


### setNoScrollbar

Elimina la barra de desplazamiento del grupo de objetos en el inventario creativo

 Devuelve: `Este objeto para encadenar`

Tipo de retorno: [mods.contenttweaker.item.MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup)

```zenscript
<itemgroup:misc>.setNoScrollbar();
```

### setNoTitle

Elimina el título del grupo de objetos del inventario creativo

 Devuelve: `Este objeto para encadenar`

Tipo de retorno: [mods.contenttweaker.item.MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup)

```zenscript
<itemgroup:misc>.setNoTitle();
```


## Propiedades

| Nombre        | Tipo   | Tiene Obtén | Tiene Setter |
| ------------- | ------ | ----------- | ------------ |
| commandString | Cadena | verdad      | falso        |
| ruta          | Cadena | verdad      | falso        |

