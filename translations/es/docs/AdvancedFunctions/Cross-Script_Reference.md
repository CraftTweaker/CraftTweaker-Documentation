# Referencia a través de Scripts

Todos los scripts tienen [variables estáticas](/AdvancedFunctions/Global_Static_Variables/) o [funciones personalizadas](/AdvancedFunctions/Custom_Functions/) que se pueden acceder a través de scripts. </br> Esto te permite acceder a ellos mediante la notación de puntos.

## Especificaciones

- Las referencias a través de Scripts empiezan con `scripts`.
- Tienes que especificar la ruta a la carpeta del script (`scripts.crafttweaker.hola.zs`)
- Puedes usar la notación de puntos en un [import](/AdvancedFunctions/Import/) si quieres.
- ZS primero mira los directorios y después los archivos coincidentes

## Ejemplo 

Vamos a decir que tenemos dos scripts: `a.zs` y `b.zs`. Es muy importante el momento en el que se cargan los scripts. No podemos referenciar desde el script `a.zs` el script `b.zs` ya que sin <a href= "/AdvancedFunctions/Preprocessors/LoaderPreprocessor/"> Prioridad</a> el primero carga antes que el segundo por defecto. 

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