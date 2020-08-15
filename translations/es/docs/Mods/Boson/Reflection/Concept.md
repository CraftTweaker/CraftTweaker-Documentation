# El concepto

Reflexión es una palabra en inglés que tiene muchos significados, pero uno en particular es "la producción de una imagen por o como si por un espejo" ([Fuente: Diccionario Merriam-Webster](https://www.merriam-webster.com/dictionary/reflection)). El mismo concepto se aplica a la programación.

Reflexión es, de hecho, una herramienta que permite a un programa verse a sí mismo en el espejo y realizar alguna introspección, como analizar qué tipo es un objeto, qué métodos expone el programa, invocando variables privadas, etc. Obviamente, esta es una herramienta muy potente, pero al mismo tiempo también es extremadamente peligroso ya que la reflexión proporciona acceso a casi cualquier cosa que se esté ejecutando actualmente dentro de un programa.

El proyecto ZenScriptX pretende traer un pequeño subconjunto de las posibilidades de Reflexión a ZenScript, sin permitir que usuarios de scripts eludan el sandbox de ZenScript. En particular, la implementación de reflexión tonificada ZenScriptX permite al usuario hacer lo siguiente:

- inspeccionar el tipo de cualquier objeto, ya sea una variable o un manejador de brazos;
- obtener el nombre simple y totalmente cualificado de una clase en el sandbox ZenScript;
- obtener el nombre simple y totalmente cualificado de una clase fuera del sandbox de ZenScript;
- convertir entre una clase ZenScript y su contraparte nativa (es decir, `crafttweaker.item.ItemStack` se convierte en `crafttweaker.api.item.IItemStack`).

Y esto es: no hay forma de que un usuario de script enumere todos los métodos proporcionados por una clase o evite las restriciciones impuestas por ZenScript con esta reflexión. De hecho, es así. más una útil herramienta de desarrollador para asegurar que tipos expuestos por una integración CraftTweaker se conviertan correctamente entre el script y el backend real.

Para empezar, consulte la documentación de [`NativeClass`](/Mods/Boson/Reflection/NativeClass/) o [`Clase`](/Mods/Boson/Reflection/Class/).
