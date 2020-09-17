# Referencia entre scripts

Todos los scripts que tienen [variables estáticas](/AdvancedFunctions/Global_Static_Variables/) o [funciones personalizadas](/AdvancedFunctions/Custom_Functions/) están registrados en la referencia de scripts cruzados.  
Esto le permite acceder a estos campos/funciones usando la notación de puntos.

## Especificaciones

- Las referencias del script cruzado comienzan con `scripts.`
- Especifica la ruta relativa a la carpeta de scripts (por ejemplo, `scripts.mySubfolder.a.zs`)
- Puedes usar la notación de puntos en una [declaración de importación](/AdvancedFunctions/Import/) si eliges hacerlo.
- ZS comprueba primero los directorios coincidentes y luego los archivos o valores coincidentes.

## Ejemplo

Digamos que tenemos dos scripts: `a.zs` y `b.zs`.

a.zs:

```zenscript
static myVal como cadena = "myVal";

function makeLine() {
    print("---------------");
}
```

b.zs

```zenscript
print(scripts.a.myVal);
scripts.a.makeLine();
```