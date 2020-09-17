# El concepto

La mayoría de los usos de Matemáticas en ZenScript pueden ser cubiertos a través de las cuatro operaciones básicas: adición, resto, multiplicación y división. ZenScript también proporciona acceso a la función `pow` , que realiza la operación de energía. Pero eso es todo. No se pueden realizar operaciones matemáticas más avanzadas, y requeriría una reimplementación completa con tablas de búsqueda y no se beneficiaría de las optimizaciones del hardware en ese sentido, especialmente para CPUs modernas.

Aquí es donde entra ZenScriptX Mat, proporcionando un conjunto de clases y algunas operaciones aritméticas básicas que pueden ser de utilidad general, mientras también se beneficia en la mayor parte de las optimizaciones de hardware, ya que la mayoría de estos son implementados en un nivel nativo (a través de un par de indirecciones debido a que ZenScript VM se ejecuta en).

Cada sección de documentación proporcionará al usuario una lista de funciones proporcionadas y su comportamiento.

La lista actual de las clases proporcionadas que se implementan son:

- [Matemáticas](/Mods/Boson/Math/Math/) para funciones matemáticas comunes (por ejemplo, sino, cosino, logaritmo...)
