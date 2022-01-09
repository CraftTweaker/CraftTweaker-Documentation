# Referencia a través de Scripts

All scripts that have [static variables](/AdvancedFunctions/Global_Static_Variables/) or [custom functions](/AdvancedFunctions/Custom_Functions/) are registered to the cross-script reference.  
This allows you to access these fields/functions using the dot-notation.

## Especificaciones

- Las referencias a través de Scripts empiezan con `scripts`.
- Tienes que especificar la ruta a la carpeta del script (`scripts.crafttweaker.hola.zs`)
- Puedes usar la notación de puntos en un [import](/AdvancedFunctions/Import/) si quieres.
- ZS primero mira los directorios y después los archivos coincidentes



## Ejemplo
Vamos a decir que tenemos dos scripts: `a.zs` y `b.zs`. Es muy importante el momento en el que se cargan los scripts. No podemos referenciar desde el script `a.zs` el script `b.zs` ya que sin [  Prioridad](/AdvancedFunctions/Preprocessors/LoaderPreprocessor/) el primero carga antes que el segundo por defecto.

a.zs
```zenscript
static miVariable as string = "miVariable";
function hacerLinea(){
   print("---------------");
}

```

b.zs
```zenscript
import scripts.a.zs;

a.hacerLinea();
print(scripts.a.miVariable);
print(a.miVariable);
a.hacerLinea();

```